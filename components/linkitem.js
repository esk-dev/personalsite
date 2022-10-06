import { Link } from "@chakra-ui/react";

const LinkItem = ({ href, path, target, children, ...props }) => {
  return (
    <Link p={2} href={href} target={target} {...props}>
      {children}
    </Link>
  );
};

export default LinkItem;
