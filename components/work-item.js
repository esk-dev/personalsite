import { Box, LinkBox, Image, LinkOverlay, Text } from "@chakra-ui/react";
import Link from "next/link";

export const Work = ({ children, title, image, href }) => (
  <Box w="100%" textAlign="center">
    <Link href={`/works/${id}`} scroll={false}>
      <LinkBox cursor="pointer">
        <Image borderRadius={12} src={image} alt={title} loading="lazy" />
        <LinkOverlay href={href} target="_blank">
          <Text>{title}</Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Link>
  </Box>
);
