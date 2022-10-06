import Section from "./section";
import Paragraph from "./paragraph";
import Page from "./page";
import {
  Box,
  Heading,
  Link,
  List,
  Badge,
  ListItem,
  Container,
} from "@chakra-ui/react";

const WorkPage = ({ children, title, href, text, stack, feature }) => {
  //   const { title, href, text, stack, feature } = props;
  // const listtechnologies = technologies?.map((el) => <li key={el}>{el}</li>);

  const stackEL = stack.map((item) => {
    return (
      <Badge mr={1} colorScheme="cyan" key={item}>
        {item}
      </Badge>
    );
  });

  return (
    <Page title={title}>
      <Container>
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
          <Section delay={0.2}>
            <Paragraph>{text}</Paragraph>
          </Section>
          <Section delay={0.3}>
            <List mt={5} spacing={3}>
              <ListItem>
                <Badge mr={3} colorScheme="green">
                  WebSite
                </Badge>
                <Link color="cyan.600" href={href}>
                  {href}
                </Link>
              </ListItem>
              <ListItem>
                <Badge mr={3} colorScheme="green">
                  Stack
                </Badge>
                {stackEL}
              </ListItem>
              <ListItem>
                <Badge mr={3} colorScheme="green">
                  Feature
                </Badge>
                {feature}
              </ListItem>
            </List>
          </Section>
          <Section delay={0.4}>{children}</Section>
        </Box>
      </Container>
    </Page>
  );
};

export default WorkPage;
