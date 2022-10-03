import Section from "../components/section";
import { Button, Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Page from "../components/page";
import {Work} from "../components/work-item";

export default function Works() {
  return (
    <Page title="Works">
      <Container>
        <Heading variant="section-title" as="h2">
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} rowGap={5} columnGap={5}>
          <Section delay={0}>
            <Work
              title="ngForecast"
              image="/ngforecast.webp"
              href="https://ngforecastapp.herokuapp.com"
              id="ngforecast"
            >
              Lorem ipsum edfsdfsdfsdfsdf
            </Work>
          </Section>

          <Section delay={0}>
            <Work
              title="ngForecast"
              image="/ngforecast.webp"
              href="https://ngforecastapp.herokuapp.com"
              id="ngforecast"
            >
              Lorem ipsum edfsdfsdfsdfsdf
            </Work>
          </Section>

          <Section delay={0}>
            <Work
              title="ngForecast"
              image="/ngforecast.webp"
              href="https://ngforecastapp.herokuapp.com"
              id="ngforecast"
            >
              Lorem ipsum edfsdfsdfsdfsdf
            </Work>
          </Section>

          <Section delay={0}>
            <Work
              title="ngForecast"
              image="/ngforecast.webp"
              href="https://ngforecastapp.herokuapp.com"
              id="ngforecast"
            >
              Lorem ipsum edfsdfsdfsdfsdf
            </Work>
          </Section>
        </SimpleGrid>
      </Container>
    </Page>
  );
}
