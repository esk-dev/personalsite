import { Box, Container, Heading, chakra, Button } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Page from "../components/page";
import Section from "../components/section";
import MotionBox from "../components/MotionBox";
const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});
export default function Home() {
  return (
    <Page>
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
            <MotionBox
              initial={{ x: -15, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Heading as="h2">Egor Skorokhodov</Heading>
            </MotionBox>
            <MotionBox
              initial={{ x: -15, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <p>Frontend web-developer</p>
            </MotionBox>
            <Link href="/contacts">
              <Button
                size="sm"
                variant="outline"
                letterSpacing="widest"
                colorScheme="teal"
                rightIcon={<EmailIcon />}
              >
                CONTACT
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

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
        </Section>

        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            Get in touch
          </Heading>
        </Section>
      </Container>
    </Page>
  );
}
