import WorkPage from "../../components/workpage";
import { Image } from "@chakra-ui/react";

export default function TestCase() {
  const text =
    "Приложение отображает список пользователей и другие данные с помощью запросов к API. В приложении можно удалить пользователя, открыть карточку пользователя, изменить его данные с помощью формы.";
  return (
    <WorkPage
      title="Test Case"
      href="https://angular-ivy-ax62dr.stackblitz.io/"
      text={text}
      stack={[
        "Angular",
        "Angular Material",
        "RxJS",
        "Routing",
        "ReactiveForms",
        "API",
      ]}
    >
      <Image
        borderRadius="lg"
        w="full"
        src="/test-case/testCase.PNG"
        alt="testCase-screenshots"
        loading="lazy"
        mb="10"
      />
      <Image
        borderRadius="lg"
        w="full"
        src="/test-case/testCase2.PNG"
        alt="testCase-screenshots"
        loading="lazy"
        mb="10"
      />
      <Image
        borderRadius="lg"
        w="full"
        src="/test-case/testCase3.PNG"
        alt="testCase-screenshots"
        loading="lazy"
        mb="10"
      />
      <Image
        borderRadius="lg"
        w="full"
        src="/test-case/testCase5.PNG"
        alt="testCase-screenshots"
        loading="lazy"
        mb="10"
      />
    </WorkPage>
  );
}
