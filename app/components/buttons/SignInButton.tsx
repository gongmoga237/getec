import { Button } from "@chakra-ui/react";

export default function SignInButton() {
  return (
    <Button as={"a"} fontSize="sm" fontWeight={400} variant={"link"} href={"#"}>
      S'identifier
    </Button>
  );
}
