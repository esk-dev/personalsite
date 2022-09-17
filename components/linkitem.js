import {
  Stack,
  Box,
  useColorModeValue,
  Link,
  Container,
  Center,
  Wrap,
  Heading,
  Flex,
} from "@chakra-ui/react";
import ThemeToggle from "./themetoggle";

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href;

  return (
    <Link
      p={2}
      href={href}
      passHref={true}
      target={target}
      {...props}
    >
      {children}
    </Link>
  );
};

export default LinkItem;
