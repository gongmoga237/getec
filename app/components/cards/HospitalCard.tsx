import {
  Card,
  CardBody,
  Stack,
  Heading,
  Image,
  Divider,
  ButtonGroup,
  CardFooter,
  Text,
  Button,
  CardHeader,
  Mark,
} from "@chakra-ui/react";
import { NavLink } from "@remix-run/react";
import { HOSPITAL_DETAILS, HOSPITAL_MAP } from "~/constants/navigation";

interface HospitalCardProps {
  name: string;
  image: string;
  id: string;
  street: string;
  city: string;
  distanceFromUser: string;
  category: string;
}

export default function HospitalCard({
  image,
  name,
  id,
  street,
  city,
  distanceFromUser,
  category,
}: HospitalCardProps) {
  const defaultImage = "https://media.istockphoto.com/id/1130389312/photo/building-with-large-h-sign-for-hospital.jpg?s=1024x1024&w=is&k=20&c=ApZghI4sgAPMMnYUxskzpXOo5S9F8Cj6sWcFF_pB9pE="
  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={image || defaultImage} alt={name} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading>{name}</Heading>

          <ul>
            <li>
              Categorie:{" "}
              <Mark as="b" fontSize="1.2rem">
                {category}
              </Mark>
            </li>
            <li>
              Rue:{" "}
              <Mark as="b" fontSize="1.2rem">
                {street ?? ""}
              </Mark>
            </li>
            <li>
              Ville:{" "}
              <Mark as="b" fontSize="1.2rem">
                {city}
              </Mark>
            </li>
            <li>
              Distance de l'Hopital par rapport à vous:{" "}
              <Mark as="b" fontSize="1.2rem">
                {distanceFromUser}
              </Mark>
            </li>
          </ul>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button
            as={NavLink}
            variant="solid"
            colorScheme="blue"
            to={HOSPITAL_MAP + id}
          >
            Regarder sur une carte
          </Button>

          <Button
            as={NavLink}
            variant="ghost"
            colorScheme="blue"
            to={HOSPITAL_DETAILS + id}
          >
            Plus de détails
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
