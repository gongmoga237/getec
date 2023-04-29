import { Text, useBreakpointValue, useColorModeValue } from "@chakra-ui/react";

export default function Logo() {
  return (
    <Text
      textAlign={useBreakpointValue({ base: "center", md: "left" })}
      fontFamily={"heading"}
      fontSize="lg"
      color={useColorModeValue("brand.800", "brand.300")}
      fontWeight="extrabold"
    >
      GETEC
    </Text>
  );
}
