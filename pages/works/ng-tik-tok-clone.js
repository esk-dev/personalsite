import WorkPage from "../../components/workpage";
import { Image } from "@chakra-ui/react";

export default function Ngforecast() {
  const text =
    "Приложение для просмотра тиктоков из сабредита с помощью Reddit API, слайдер с помощью RxJS";
  return (
    <WorkPage
      title="Ng-Tik-Tok-Clone"
      href=""
      text={text}
      stack={["Angular", "Angular Material", "RxJS", "Routing", "API"]}
    >
      {/* <Image
        borderRadius="lg"
        w="full"
        src="/ngforecast/ngforecast.webp"
        alt="ngforecast-screenshots"
        loading="lazy"
        mb="10"
      /> */}
    </WorkPage>
  );
}
