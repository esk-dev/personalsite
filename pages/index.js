import {
  Box,
  Container,
  Heading,
  chakra,
  Button,
  List,
  ListItem,
  IconButton,
} from "@chakra-ui/react";
import { ArrowRightIcon, EmailIcon } from "@chakra-ui/icons";
import { IoLogoGithub } from "react-icons/io5";
import Habr from "../public/habr.png";
import Link from "next/link";
import Image from "next/image";
import Page from "../components/page";
import Section from "../components/section";
import MotionBox from "../components/MotionBox";
import Paragraph from "../components/paragraph";
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
              <p>JavaScript / Html / CSS / Angular</p>
            </MotionBox>
            <Link href="/contacts">
              <Button
                size="sm"
                variant="outline"
                letterSpacing="widest"
                colorScheme="blue"
                rightIcon={<EmailIcon />}
              >
                CONTACT
              </Button>
            </Link>
          </Box>
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
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
          <Paragraph>
            My interest in web development started in 2021 when I decided try to
            make the site as a final project - creating several pages taught me
            a lot about HTML and CSS! I also found out that JS has more serious
            possibilities than page animation. So I started learning web
            development. Fast forward to today, I had the experience of an
            internship in the department web development at Yota, where I got
            acquainted with the framework Angular and more seriously delved into
            the creation of the web. From projects made there, I can highlight
            the creation of a landing using Angular Material.
          </Paragraph>
          <Box align="center" my={6}>
            <Link href="/works" passHref scroll={false}>
              <Button
                rightIcon={<ArrowRightIcon />}
                variant="outline"
                colorScheme="blue"
              >
                My portfolio
              </Button>
            </Link>
          </Box>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Get in touch
          </Heading>

          <List>
            <ListItem>
              <Link
                href="https://github.com/esk98"
                target="_blank"
                rel="noreferrer"
              >
                <Button size="md" variant="ghost" colorScheme="blue">
                  Github
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://career.habr.com/egorsk12"
                target="_blank"
                rel="noreferrer"
              >
                <Button size="md" variant="ghost" colorScheme="blue">
                  HabrCareer
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://career.habr.com/egorsk12"
                target="_blank"
                rel="noreferrer"
              >
                <Button size="md" variant="ghost" colorScheme="blue">
                  HeadHunter
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https:t.me/tgreddyay"
                target="_blank"
                rel="noreferrer"
              >
                <Button size="md" variant="ghost" colorScheme="blue">
                  Telegram
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Page>
  );
}
