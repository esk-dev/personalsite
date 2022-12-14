import {
  Box,
  Container,
  Heading,
  Button,
  Link,
  List,
  ListItem,
  useDisclosure,
  Badge,
  Image,
} from "@chakra-ui/react";
import { ArrowRightIcon, EmailIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import Page from "../components/page";
import Section from "../components/section";
import MotionBox from "../components/motionbox";
import Paragraph from "../components/paragraph";
import ModalFormDialog from "../components/modalformdialog";
import Head from "next/head";

export default function Home() {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Page>
      <Container>
        <Box mb={6} p={3} textAlign="center">
          Привет, я - Junior Frontend Developer!
        </Box>

        <Box
          tabIndex={-1}
          display="flex"
          flexDirection={["column-reverse", "row", "row"]}
          alignItems={["stretch", "center", "center"]}
        >
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
              <Heading as="h3">Егор Скороходов</Heading>
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
                Написать
              </Button>
            </MotionBox>
          </Box>
          <ModalFormDialog isOpen={isOpen} onClose={onClose} />
          <Box
            minW="100px"
            overflow="hidden"
            borderRadius="full"
            borderWidth="2px"
            boerderStyle="solid"
            borderColor="white"
            boxSize="100px"
            mH="100px"
          >
            <Image
              objectFit="cover"
              src="/profilepic.jpg"
              alt="Profile image"
              width="100%"
            />
          </Box>
        </Box>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            О работе
          </Heading>
          <Paragraph>
            Я мотивированный и увлеченный разработчик в начале пути. Стремлюсь
            совершенствовать свои навыки, изучать новые технологии, для того
            чтобы создавать более совершенный код и приложения, привлекающие
            пользователей. Как разработчик, я способен долго и упорно
            совершенствовать свой код, исправлять и улучшать UX, фиксить баги,
            находить решение поставленных задач.
          </Paragraph>
          <Box align="center" my={6}>
            <Button
              onClick={() => router.push("/works")}
              rightIcon={<ArrowRightIcon />}
              colorScheme="cyan"
            >
              Мои работы
            </Button>
          </Box>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            О навыках
          </Heading>
          <Paragraph>
            Сейчас в арсенале моих навыков имеются крепкие базовые знания JS, я
            научился использовать фреймворки и понял их предназначение. Изучаю
            Angular как основной, с которым я хочу работать. Мне нравится его
            строгая архитектура и ориентрованность на ООП и его паттерны. Делаю
            достаточно практических задач, использую для этого CodeWars. Помимо
            этого много практикуюсь на своих пет-проектах. Для хорошего фронтенд
            разработчика важны навыки верстки. Умею и использую flex, grid и
            преимущества этих подходов. Не использую &#10094;div&#10095;
            &#10094;/div&#10095; как единственный тег. Умею использовать
            операторы RxJS для составления эффективной цепочки для обработки
            потоков.
          </Paragraph>
        </Section>
        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            Контакты
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
