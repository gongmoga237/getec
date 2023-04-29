import { Box, Grid, GridItem } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import HospitalCard from "~/components/cards/HospitalCard";
import { GEOAPIFY_API_KEY, GEOAPIFY_BASE_URL } from "~/constants/app";

interface HospitalProps {
  position: [number, number];
}

export default function Hospitals({ position }: HospitalProps) {
  const query = useQuery({
    queryKey: ["todos"],
    queryFn: async () => await fetchClosestHospitalls(position),
  });
  return (
    <Box as="section">
      <Grid>
        {query.data?.map((data: any) => (
          <HospitalCard
            category={data.category}
            city={data.city}
            distanceFromUser={data.distance}
            street={data.street}
            id={data.place_id}
            name={data.name}
            image=""
            key={data.place_id}
          />
        ))}
      </Grid>
    </Box>
  );
}

async function fetchClosestHospitalls(position: [number, number]) {
  const url = new URL("places", GEOAPIFY_BASE_URL);
  return await axios
    .get(url.toString(), {
      params: {
        categories: "healthcare",
        limit: "5",
        apiKey: GEOAPIFY_API_KEY,
        bias: `proximity:${position[0]},${position[1]}`,
        lang: "fr",
      },
    })
    .then((response) => response.data);
}
