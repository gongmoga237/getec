import { Box, Container, Heading } from "@chakra-ui/react";
import NavBar from "./NavBar";
import { Outlet, isRouteErrorResponse, useRouteError } from "@remix-run/react";

export default function AppPage() {
  return (
    <Box as="section">
      <Container maxW="container.xl" as="header">
        <NavBar />
      </Container>

      <Container maxW="container.xl" as="main">
        <Outlet />
      </Container>

      <Container maxW="container.xl" as="footer"></Container>
    </Box>
  );
}

export function ErrorBoundary() {
  let error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <Box>
        <Heading as="h1" bg="purple.600">
          [CatchBoundary]: {error.status} {error.statusText}
        </Heading>
      </Box>
    );
  } else if (error instanceof Error) {
    return (
      <Box>
        <Heading as="h1" bg="blue.500">
          [ErrorBoundary]: There was an error: {error.message}
        </Heading>
      </Box>
    );
  } else {
    return <Heading as="h2">Unknown error</Heading>;
  }
}
