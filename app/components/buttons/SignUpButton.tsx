import { Button } from "@chakra-ui/react";

export default function SignUpButton() {
  return (
    <Button
      as={"a"}
      fontSize="sm"
      fontWeight={600}
      colorScheme="teal"
      href={"#"}
    >
      Créez un compte
    </Button>
  );
}
