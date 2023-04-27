import { Box } from "@chakra-ui/react";
import { V2_MetaFunction } from "@remix-run/react";
import { APP_NAME } from "~/constants/app";

export const meta: V2_MetaFunction = () => [
  {
    title: `Home - ${APP_NAME}`,
  },
];

export default function AppIndexPage() {
  return <Box>AppIndexPage</Box>;
}
