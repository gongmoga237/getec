import { Box } from "@chakra-ui/react";
import { ClientOnly } from "remix-utils";
import Map from "~/components/Map.client";

import mapStyleSheet from "leaflet/dist/leaflet.css";
import { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: mapStyleSheet }];
};

export default function AppConsultation() {
  return (
    <>
      <ClientOnly>
        {() => (
          <Box>
            <Map />
          </Box>
        )}
      </ClientOnly>
    </>
  );
}
