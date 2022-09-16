import { Box, Container, Heading, chakra, Button } from "@chakra-ui/react";
import Link from "next/link"
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/page";
import CustomButton from "../components/button";
const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});
export default function Home() {
  return (
    <Layout>
      <Container>
        <Box mb={6} p={3} textAlign="center">
          Hello, I&apos;m junior web developer!
        </Box>

        <Box display="flex" alignItems="center">
          <Box
            display="flex"
            alignItems="flex-start"
            flexDirection="column"
            gap="5px"
            flexGrow={1}
          >
            <Heading as="h2" variant="page-title">
              Egor Skorokhodov
            </Heading>
            <p>Frontend web-developer</p>
            <Link href="/contacts">
              <Button
                size="sm"
                variant="outline"
                fontSize="12"
                letterSpacing="widest"
              >
                CONTACT ME
              </Button>
            </Link>
          </Box>
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            birderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/profilepic.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Container>
    </Layout>
  );
}
