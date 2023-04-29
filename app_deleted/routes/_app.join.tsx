import { ActionFunction } from "@remix-run/node";
import { makeDomainFunction } from "domain-functions";
import { formAction } from "~/utils/form-action.server"; /* path to your custom formAction */
import UserSignUpForm, { schema } from "~/components/forms/UserSignUpForm";
import { ADD_DOCTOR, ADD_PATIENT, LOGIN } from "~/constants/navigation";
import { createUser } from "~/models/user.server";
import {
  Alert,
  AlertIcon,
  Box,
  Center,
  Container,
  Heading,
  Mark,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useFetcher } from "@remix-run/react";

const mutation = makeDomainFunction(schema)(async (user) => {
  await createUser(user);
});

export const action: ActionFunction = async ({ request }) => {
  return formAction({
    request,
    schema,
    mutation,
    successPath: LOGIN,
  });
};

export default function UserAddPage() {
  const [isDoctor, setIsDoctor] = useState(true);
  const fetcher = useFetcher();

  return (
    <Container mt={6}>
      <Heading textAlign="center" as="h2">
        Bonjour très chère.
      </Heading>

      <Text>Veuilez remplir le formulaire pour vous faire enregistrer.</Text>

      <Alert status="info" variant="subtle">
        <AlertIcon />
        Les champs avec astérisques (<Mark as="b">*</Mark>) sont obligatoires.
      </Alert>

      <Center my="6">
        <RadioGroup
          defaultValue="no"
          onChange={(value) => {
            value === "yes" ? setIsDoctor(true) : setIsDoctor(false);
          }}
        >
          <Stack direction="row" gap="3">
            <Text>Etes vous un Médecin ?:</Text>
            <Radio value="no">Non</Radio>
            <Radio value="yes">Oui</Radio>
          </Stack>
        </RadioGroup>
      </Center>

      <Container maxW="md">
        <UserSignUpForm
          onSubmit={(e) => {
            e.preventDefault();
            console.log(fetcher.formData);
          }}
          action={isDoctor ? ADD_PATIENT : ADD_DOCTOR}
        />
      </Container>
    </Container>
  );
}
