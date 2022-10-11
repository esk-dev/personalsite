import WorkPage from "../../components/workpage";
import { Image } from "@chakra-ui/react";

export default function Ngforecast() {
  const text =
    "App use api to fetch data and display it. Angular Material is ui-lib.";
  return (
    <WorkPage
      title="NgForecast"
      href="https://ngforecastapp.herokuapp.com"
      text={text}
      stack={["Angular", "Angular Material", "RxJS", "Routing", "HttpsModule"]}
    >
      <Image
        borderRadius="lg"
        w="full"
        src="/ngforecast.webp"
        alt="ngforecast-screenshots"
        loading="lazy"
      />
    </WorkPage>
  );
}
