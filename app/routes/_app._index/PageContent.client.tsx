import { Box, Heading } from "@chakra-ui/react";
import { useRouteError } from "@remix-run/react";
import Hospitals from "./Hospitals";

export default function PageContent() {
  return (
    <Box as="section">
      <Hospitals />
    </Box>
  );
}

export function ErrorBoundary() {
  let error = useRouteError();

  if (error instanceof Error) {
    return (
      <Box>
        <Heading as="h1" bg="red.500">
          {error.message}
        </Heading>
      </Box>
    );
  } else {
    return <Heading as="h2">Unknown error</Heading>;
  }
}
