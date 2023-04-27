import {
  Menu,
  MenuButton,
  Button,
  Avatar,
  MenuList,
  Center,
  MenuDivider,
  MenuItem,
} from "@chakra-ui/react";

export default function UserMenu() {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rounded={"full"}
        variant={"link"}
        cursor={"pointer"}
        minW={0}
      >
        <Avatar size={"sm"} />
      </MenuButton>
      <MenuList alignItems={"center"}>
        <Center my={6} flexDirection="column" gap="4">
          <p>Name</p>
          <p>Username</p>
        </Center>
        <MenuDivider />
        <MenuItem>Your Servers</MenuItem>
        <MenuItem>Account Eddit</MenuItem>
        <MenuItem>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
}
