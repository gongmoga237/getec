import { V2_MetaFunction } from "@remix-run/react";
import { APP_NAME } from "~/constants/app";
import { Grid, GridItem, Heading, Box } from "@chakra-ui/react";

import { hospitals, pharmacy } from "~/data";
import HospitalCard from "~/components/cards/HospitalCard";
import PharmacyCard from "~/components/cards/PharmacyCard";

export const meta: V2_MetaFunction = () => [
  {
    title: `Home - ${APP_NAME}`,
  },
];

export default function AppIndexPage() {
  return (
    <>
      <Heading as="h2">Les hopitaux qui se trouvent autour de vous.</Heading>

      <Grid gridTemplateColumns="repeat(3, auto)" gap={4} py="10">
        {hospitals.map((hospital, index) => {
          return (
            <GridItem key={"home_hospital" + index} w="100%">
              <HospitalCard {...hospital} />
            </GridItem>
          );
        })}
      </Grid>

      <Box bgColor="gray.50" py="10">
        <Heading as="h2">
          Les pharmacies qui se trouvent autour de vous.
        </Heading>

        <Grid gridTemplateColumns="repeat(3, auto)" gap={4}>
          {pharmacy.map((pharmacy, index) => {
            return (
              <GridItem key={"home_pharmacy" + index} w="100%">
                <PharmacyCard {...pharmacy} />
              </GridItem>
            );
          })}
        </Grid>
      </Box>
    </>
  );
}
