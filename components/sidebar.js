import { useColorModeValue } from "@chakra-ui/react";
import LinkItem from "./linkitem";
import MotionBox from "./MotionBox";
const SideBar = (path) => {
  return (
    <MotionBox
      animate={{ y: [0, 10] }}
      transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
    >
      <LinkItem
        href="/contacts"
        path={path}
        writingMode="tb-rl"
        transform="rotate(270deg)"
        position="absolute"
        as="sidebar"
        color={useColorModeValue("teal.400", "teal.200")}
      >
        Send message
      </LinkItem>
    </MotionBox>
  );
};

export default SideBar;
