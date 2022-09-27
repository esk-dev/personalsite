import { Section } from "../components/section";
import { Button, Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Page from "../components/page";
import { Work } from "../components/work-item";

export default function Works() {
  return (
    <Page title='Works'>
      <Container>
        <Heading variant="section-title" as="h2">
          Works
        </Heading>
        <SimpleGrid columns={2} rowGap={5}>
          <Work
            title="ngForecast"
            image=""
            href='/'
          >
            Lorem ipsum edfsdfsdfsdfsdf
          </Work>
        </SimpleGrid>
      </Container>
    </Page>
  );
}
