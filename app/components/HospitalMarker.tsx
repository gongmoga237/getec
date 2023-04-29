import { As, Box } from "@chakra-ui/react";
import { LatLngExpression } from "leaflet";
import { FunctionComponent } from "react";
import { Marker, MarkerLayer } from "react-leaflet-marker";

interface HospitalMarkerProps {
  position: LatLngExpression;
  name: string;
  id: string;
  description: React.ReactNode;
  icon?: As;
}

const HospitalMarker: FunctionComponent<HospitalMarkerProps> = ({
  position,
  description,
  id,
  name,
  icon,
}) => {
  return (
    <MarkerLayer>
      <Marker position={position} interactive riseOnHover>
        <Box
          w="3rem"
          h="3rem"
          position="relative"
          left="-1.5rem"
          top="-1.5rem"
          border="2px solid white"
          borderRadius="3rem 3rem 0"
          bgColor="red.500"
          transform="rotate(45deg)"
        />
      </Marker>
    </MarkerLayer>
  );
};

export default HospitalMarker;
