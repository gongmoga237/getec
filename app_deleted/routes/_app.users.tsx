import { Box, Container, Heading } from "@chakra-ui/react";
import { Outlet, isRouteErrorResponse, useRouteError } from "@remix-run/react";

export default function UsersPage() {
  return (
    <Container>
      <Outlet />
    </Container>
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
