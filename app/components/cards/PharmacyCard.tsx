import { PhoneIcon, AtSignIcon, PlusSquareIcon } from "@chakra-ui/icons";
import {
  Card,
  CardBody,
  Stack,
  Image,
  Divider,
  ButtonGroup,
  CardFooter,
  Text,
  Button,
  Mark,
  Box,
  HStack,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Center,
  VStack,
  UnorderedList,
  ListItem,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
} from "@chakra-ui/react";
import { Link } from "@remix-run/react";
import { Hospital, Pharmacie } from "~/types";

export default function HospitalCard({
  availableDrugs,
  email,
  image,
  name,
  telephone,
}: Pharmacie) {
  return (
    <Card maxW="sm">
      <CardBody>
        {image ? (
          <Image src={image} alt={name} borderRadius="lg" />
        ) : (
          <Box w="100%" h="10rem" bgColor="gray.400" borderRadius="lg" />
        )}

        <Stack mt="6" spacing="3">
          <Text fontSize="lg" fontWeight="bold">
            {name}
          </Text>
        </Stack>
      </CardBody>

      <Divider color="blue.200" />

      <CardFooter>
        <ButtonGroup
          flexWrap="wrap"
          gap="6"
          placeContent="center"
          fontSize="xs"
        >
          <Popover>
            <PopoverTrigger>
              <Button variant="outline" colorScheme="blue" gap="2">
                <PlusSquareIcon /> Détails
              </Button>
            </PopoverTrigger>

            <PopoverContent>
              <PopoverArrow />
              <PopoverHeader>
                Détails sur la pharmacie <Mark fontWeight="bold">{name}</Mark>
              </PopoverHeader>
              <PopoverBody>
                <VStack p="6" gap="1" placeItems="flex-start" pl="10">
                  <Text>
                    <PhoneIcon /> Téléphone:{" "}
                    <Mark fontWeight="bold">{telephone}</Mark>
                  </Text>

                  <Text>
                    <AtSignIcon /> Email: <Mark fontWeight="bold">{email}</Mark>
                  </Text>

                  <Box>
                    <Text fontSize="lg" fontWeight="bold">
                      Les médicaments disponibles
                    </Text>
                    <UnorderedList>
                      {availableDrugs.map((drug, index) => {
                        return (
                          <ListItem key={"Hospital_service_card" + index}>
                            <Text>{drug}</Text>
                          </ListItem>
                        );
                      })}
                    </UnorderedList>
                  </Box>
                </VStack>
              </PopoverBody>
            </PopoverContent>
          </Popover>

          <Button
            as={Link}
            to={"hospital/location"}
            variant="link"
            colorScheme="blue"
          >
            Y aller
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
