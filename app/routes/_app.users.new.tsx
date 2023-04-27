import { ActionFunction } from "@remix-run/node";
import { makeDomainFunction } from "domain-functions";
import { formAction } from "~/utils/form-action.server"; /* path to your custom formAction */
import UserSignUpForm, { schema } from "~/components/forms/UserSignUpForm";
import { ADD_DOCTOR, LOGIN } from "~/constants/navigation";
import { createUser } from "~/models/user.server";
import { Alert, AlertIcon, Box, Heading, Mark, Text } from "@chakra-ui/react";

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
  return (
    <Box mt={6}>
      <Heading textAlign="center" as="h2">
        Bonjour très chère.
      </Heading>
      <Text>Veuilez remplir le formulaire pour vous faire enregistrer.</Text>

      <Alert status="info" variant="subtle">
        <AlertIcon />
        Les champs avec astérisques (<Mark as="b">*</Mark>) sont obligatoires.
      </Alert>

      <UserSignUpForm onSubmit={(e) => alert(e.target)} action={ADD_DOCTOR} />
    </Box>
  );
}
