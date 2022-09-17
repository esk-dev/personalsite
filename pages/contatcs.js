import { Container, Box, Heading } from "@chakra-ui/react";
import Page from "../components/page";
const Contacts = () => {
  return (
    <Page>
      <Container>
        <Box>
          <Heading as={h3} variant='section-title'>
            Hello from contacts
          </Heading>
        </Box>
      </Container>
    </Page>
  );
};

export default Contacts
