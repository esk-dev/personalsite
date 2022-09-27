import { useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";
import LinkItem from "./linkitem";
import MotionBox from "./MotionBox";
import { Global } from "@emotion/react";

const SideBar = (path) => {
  return (
    <LinkItem
      position="absolute"
      top="50%"
      transform="rotate(270deg)"
      className="sidebar"
      href="/contacts"
      path={path}
      as="sidebar"
      color={useColorModeValue("teal.400", "teal.200")}
    >
      Send message
    </LinkItem>
  );
};

export default SideBar;
