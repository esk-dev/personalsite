import Page from "../../components/page";
import Section from "../../components/section";
import Paragraph from "../../components/paragraph";
import {
  Box,
  Container,
  Heading,
  Link,
  List,
  Badge,
  ListItem,
  Image,
} from "@chakra-ui/react";

const WorkPage = ({ children, props }) => {
  const { title, href, text, stack, feature } = props;
  // const listtechnologies = technologies?.map((el) => <li key={el}>{el}</li>);

  const stackEL = stack.map((item) => {
    return <p key={item}>{item}</p>;
  });

  return (
    <>
    <Section delay={0.1}>
      <Link href="/works" color="cyan.600">
        <Heading as="h3" variant="section-title">
          Works
        </Heading>
      </Link>
      <Heading as="h4" variant="work-title">
        {title}
      </Heading>
    </Section>
    
    <Box>
        
        </Box>
    </>
  );
};

export default function Ngforecast() {
  return (
    <Page title="ngForecast">
      <Container>
        <Section delay={0.1}>
          <Link href="/works" color="cyan.600">
            <Heading as="h3" variant="section-title">
              Works
            </Heading>
          </Link>
          <Heading as="h4" variant="work-title">
            NgForecast
          </Heading>
        </Section>

        <Box>
          <Section delay={0.2}>
            <Paragraph>
              Lorem ipsum Lorem Lorem Lorem lorem Lorem ipsum Lorem Lorem Lorem
              lorem Lorem ipsum Lorem Lorem Lorem lorem
            </Paragraph>

            <List mt={5} spacing={3}>
              <ListItem>
                <Badge mr={3} colorScheme="green">
                  WebSite
                </Badge>
                <Link
                  color="cyan.600"
                  href="https://ngforecastapp.herokuapp.com"
                >
                  https://ngforecastapp.herokuapp.com
                </Link>
              </ListItem>
              <ListItem>
                <Badge mr={3} colorScheme="green">
                  Stack
                </Badge>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
              </ListItem>
              <ListItem>
                <Badge mr={3} colorScheme="green">
                  Feature
                </Badge>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
              </ListItem>
            </List>

            <Image
              borderRadius="lg"
              w="full"
              src="/ngforecast.webp"
              alt="ngForecast-screenshot"
              mb={4}
            />
          </Section>
        </Box>
      </Container>
    </Page>
  );
}
