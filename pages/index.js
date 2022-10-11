import {
  Box,
  Container,
  Heading,
  chakra,
  Button,
  Link,
  List,
  ListItem,
  useDisclosure,
  Badge,
} from "@chakra-ui/react";
import { ArrowRightIcon, EmailIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import Image from "next/image";
import Page from "../components/page";
import Section from "../components/section";
import MotionBox from "../components/motionbox";
import Paragraph from "../components/paragraph";
import ModalFormDialog from "../components/modalformdialog";
const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

export default function Home() {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Page>
      <Container>
        <Box mb={6} p={3} textAlign="center">
          Hello, I&apos;m junior web developer!
        </Box>

        <Box tabIndex={-1} display="flex" alignItems="center">
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
              <p>JavaScript / Angular</p>
              <Button
                onClick={onOpen}
                mt={1}
                colorScheme="cyan"
                leftIcon={<EmailIcon />}
              >
                Contact
              </Button>
            </MotionBox>
          </Box>
          <ModalFormDialog isOpen={isOpen} onClose={onClose} />
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            mw="100px"
            mh="100px"
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
            <Button
              onClick={() => router.push("/works")}
              rightIcon={<ArrowRightIcon />}
              colorScheme="cyan"
            >
              My portfolio
            </Button>
          </Box>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Get in touch
          </Heading>

          <List
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <ListItem mb="5px">
              <Link href="https://github.com/esk-dev" target="_blank">
                <Badge colorScheme="cyan" fontSize="18px">
                  GitHub <ExternalLinkIcon />
                </Badge>
              </Link>
            </ListItem>
            <ListItem mb="5px">
              <Link href="https://clck.ru/32KKZs" target="_blank">
                <Badge colorScheme="cyan" fontSize="18px">
                  HeadHunter <ExternalLinkIcon />
                </Badge>
              </Link>
            </ListItem>
            <ListItem mb="5px">
              <Link href="https://career.habr.com/egoresk" target="_blank">
                <Badge colorScheme="cyan" fontSize="18px">
                  HabrCareer <ExternalLinkIcon />
                </Badge>
              </Link>
            </ListItem>
            <ListItem mb="5px">
              <Link href="https://t.me/tgreddyay" target="_blank">
                <Badge colorScheme="cyan" fontSize="18px">
                  Telegram <ExternalLinkIcon />
                </Badge>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Page>
  );
}
