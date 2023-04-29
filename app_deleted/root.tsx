import {
  ChakraProvider,
  Box,
  Heading,
  cookieStorageManagerSSR,
} from "@chakra-ui/react";
import type { LoaderFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";
import { useMemo } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { theme } from "./theme";

const DEFAULT_COLOR_MODE: "dark" | "light" | null = "dark";

const CHAKRA_COOKIE_COLOR_KEY = "chakra-ui-color-mode";

function getColorMode(cookies: string) {
  const match = cookies.match(
    new RegExp(`(^| )${CHAKRA_COOKIE_COLOR_KEY}=([^;]+)`)
  );
  return match == null ? void 0 : match[2];
}

export const loader: LoaderFunction = async ({ request }) => {
  return request.headers.get("cookie") ?? "";
};

const queryClient = new QueryClient();

function Document({
  children,
  title,
  colorMode,
  cookies,
}: {
  children: React.ReactNode;
  title?: string;
  colorMode?: string;
  cookies?: string;
}) {
  return (
    <html
      lang="fr-FR"
      {...(colorMode && {
        "data-theme": colorMode,
        style: { colorScheme: colorMode },
      })}
    >
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Meta />
        {title && <title>{title}</title>}
        <Links />
      </head>
      <body
        {...(colorMode && {
          className: `chakra-ui-${colorMode}`,
        })}
      >
        <ChakraProvider
          theme={theme}
          colorModeManager={cookieStorageManagerSSR(cookies ?? "")}
        >
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </ChakraProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function App() {
  let cookies = useLoaderData();

  if (typeof document !== "undefined") {
    cookies = document.cookie;
  }

  let colorMode = useMemo(() => {
    let color = getColorMode(cookies);

    if (!color && DEFAULT_COLOR_MODE) {
      cookies += ` ${CHAKRA_COOKIE_COLOR_KEY}=${DEFAULT_COLOR_MODE}`;
      color = DEFAULT_COLOR_MODE;
    }

    return color;
  }, [cookies]);

  if (typeof document !== "undefined") {
    cookies = document.cookie;
  }

  return (
    <Document {...{ colorMode, cookies }}>
      <Outlet />
    </Document>
  );
}

export function ErrorBoundary() {
  let error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <Document title={`${error.status} ${error.statusText}`}>
        <Box>
          <Heading as="h1" bg="purple.600">
            [CatchBoundary]: {error.status} {error.statusText}
          </Heading>
        </Box>
      </Document>
    );
  } else if (error instanceof Error) {
    return (
      <Document title="Error!">
        <Box>
          <Heading as="h1" bg="blue.500">
            [ErrorBoundary]: There was an error: {error.message}
          </Heading>
        </Box>
      </Document>
    );
  } else {
    return <Heading as="h2">Unknown error</Heading>;
  }
}
