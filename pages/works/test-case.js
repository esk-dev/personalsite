import WorkPage from "../../components/workpage";
import { Image } from "@chakra-ui/react";

export default function TestCase() {
  const text =
    "The application displays a list of users and other data using requests to the API. In the application, you can delete a user, open a user card, change his data using a form.";
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
        "HttpsModule",
        "CRUD",
        "ReactiveFormsModule",
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
