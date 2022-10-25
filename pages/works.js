import Section from "../components/section";
import { Button, Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Page from "../components/page";
import { Work } from "../components/work-item";

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
              image="/ngimage.webp"
              href="https://github.com/esk-dev/ngforecast"
              id="ngforecast"
            >
              Simple SPA web-site, for search weather forecast.
            </Work>
          </Section>
          <Section delay={1}>
            <Work
              title="Test Case"
              image="/ngimage.webp"
              href="https://github.com/esk-dev/Test-Case"
              id="test-case"
            >
              Test task for one of the vacancies for get a job
            </Work>
          </Section>
          <Section delay={2}>
            <Work
              title="Personal Site"
              image="/react.webp"
              href="https://github.com/esk-dev/profilesite"
              id="personal-site"
            >
              First personal site/First acquaintance with react
            </Work>
          </Section>
        </SimpleGrid>
      </Container>
    </Page>
  );
}
