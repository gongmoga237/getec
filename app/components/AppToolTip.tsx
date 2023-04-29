import { Tooltip, useColorMode, useColorModeValue } from "@chakra-ui/react";

interface AppTooltip {
  children: React.ReactNode;
  label: string;
}

export default function AppTooltip({ children, label }: AppTooltip) {
  return (
    <Tooltip
      label={label}
      bg={useColorModeValue("white", "gray.800")}
      color={useColorModeValue("gray.600", "white")}
    >
      {children}
    </Tooltip>
  );
}
