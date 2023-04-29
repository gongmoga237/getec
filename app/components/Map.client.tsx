import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet";
import { Box } from "@chakra-ui/react";
import HospitalMarker from "./HospitalMarker";
import { As } from "@chakra-ui/react";
import { LatLngExpression } from "leaflet";

import { iconPerson } from "~/utils/useLeafletIcon";

interface Hospital {
  position: LatLngExpression;
  name: string;
  id: string;
  description: React.ReactNode;
  icon?: As;
}

export const hospitals: Hospital[] = [
  {
    description: "Description",
    id: "hopital_regional_garoua",
    name: "Hopital régional de Garoua",
    position: [9.303827, 13.388355],
  },
  {
    description: "Description",
    id: "hopital_general_garoua",
    name: "Hopital général de Garoua",
    position: [9.319092, 13.403928],
  },
];

const Map = () => {
  const defaultPosition: LatLngExpression = [9.303827, 13.388355];

  const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

  return (
    <Box
      h="30rem"
      as={MapContainer}
      center={defaultPosition}
      zoom={13}
      className="aspect-square"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url={url}
      />

      {hospitals.map((hospital) => {
        return (
          <Marker
            position={hospital.position}
            key={hospital.id}
            icon={iconPerson}
          >
            <Tooltip direction={"auto"} opacity={70}>
              <span>{hospital.name}</span>
            </Tooltip>

            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
              <Box w="6rem" h="6rem" bgColor="red.500"></Box>
            </Popup>
          </Marker>
        );
      })}
    </Box>
  );
};

export default Map;
