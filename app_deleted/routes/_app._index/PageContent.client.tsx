import { Box, Heading } from "@chakra-ui/react";
import { useRouteError } from "@remix-run/react";
import { usePosition } from "use-position";
import Hospitals from "./Hospitals";

export default function PageContent() {
  const watch = false;

  const { latitude, longitude, error } = usePosition(watch);
  if (error) throw error;

  return (
    <Box as="section">
      {latitude && longitude && <Hospitals position={[latitude, longitude]} />}
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
