import { Link, useColorModeValue } from "@chakra-ui/react";

const LinkItem = ({ href, path, target, children, ...props }) => {
  const linkColor = useColorModeValue("cyan.500", "white");
  return (
    <Link
      letterSpacing={"tighter"}
      p={2}
      href={href}
      target={target}
      {...props}
    >
      {children}
    </Link>
  );
};

export default LinkItem;
