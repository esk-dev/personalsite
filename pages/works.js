import Section from "../components/section";
import { Button, Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Page from "../components/page";
import { Work } from "../components/work-item";

export default function Works() {
  return (
    <Page title="Works">
      <Container>
        <Heading variant="section-title" as="h2">
          Работы
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} rowGap={5} columnGap={5}>
          <Section delay={0}>
            <Work
              title="ngForecast"
              image="/ngimage.webp"
              href="https://github.com/esk-dev/ngforecast"
              id="ngforecast"
            >
              SPA для поиска прогноза погоды.
            </Work>
          </Section>
          <Section delay={1}>
            <Work
              title="Test Case"
              image="/ngimage.webp"
              href="https://github.com/esk-dev/Test-Case"
              id="test-case"
            >
              Тестовое задание к одной из вакансий
            </Work>
          </Section>
          {/* <Section delay={2}>
            <Work
              title="Personal Site"
              image="/react.webp"
              href="https://github.com/esk-dev/profilesite"
              id="personal-site"
            >
              Пробный песональный сайт.
            </Work>
          </Section> */}
          <Section delay={2}>
            <Work
              title="Tik Tok Clone"
              image="/ngimage.webp"
              href="https://github.com/esk-dev/ng-tik-tok-clone"
              id="ng-tik-tok-clone"
            >
              Слайдер с видео.
            </Work>
          </Section>
        </SimpleGrid>
      </Container>
    </Page>
  );
}
