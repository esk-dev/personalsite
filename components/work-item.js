import {
  Box,
  LinkBox,
  Image,
  LinkOverlay,
  Text,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { IoLogoGithub } from "react-icons/io5";

export const Work = ({ children, title, image, href, id }) => {
  const Color = useColorModeValue("blackAlpha", "blue");
  return (
    <Box w="100%" textAlign="center">
      <Link href={`/works/${id}`} scroll={false}>
        <LinkBox cursor="pointer">
          <Image borderRadius={12} src={image} alt={title} load="lazy" />
          <LinkOverlay href={`/works/${id}`}>
            <Text mt={2} fontSize={20}>
              {title}
            </Text>
          </LinkOverlay>
          <Text fontSize={14}>{children}</Text>
        </LinkBox>
      </Link>

      <Link href={href} target="_blank">
        <Button mt={2} size="md" leftIcon={<IoLogoGithub />} colorScheme="cyan">
          Source
        </Button>
      </Link>
    </Box>
  );
};
