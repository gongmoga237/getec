import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";

interface MenuButtonProps {
  onToggle: React.MouseEventHandler<HTMLButtonElement> | undefined;
  isOpen: boolean;
}

export default function MenuButton({ onToggle, isOpen }: MenuButtonProps) {
  return (
    <IconButton
      onClick={onToggle}
      icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
      variant={"ghost"}
      aria-label={"Toggle Navigation"}
    />
  );
}
