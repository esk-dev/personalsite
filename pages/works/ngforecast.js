import WorkPage from "../../components/workpage";
import { Image } from "@chakra-ui/react";

export default function Ngforecast() {
  return (
    <WorkPage
      title="NgForecast"
      href="https://ngforecastapp.herokuapp.com"
      text="Lorem dfsfsd"
      stack={["Angular", "Angular Material", "RxJS", "Routing", "HttpsModule"]}
      feature="fucking hot"
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
