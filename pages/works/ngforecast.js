import WorkPage from "../../components/workpage";
import { Image } from "@chakra-ui/react";

export default function Ngforecast() {
  const text = `Приложение связывается с сервером (Node JS, Express) получает данные 
      погоды по трем эндпоинтам forecast, weather, search(автокомплит). Реализована 
      аутентификация пользователя с тремя функциями - login, sign up, log out. Сервер 
      авторизует по токенам вложенным в куки при регистрации или логине. 
      пользователь может добавить/удалить города в избранное на домашней страницы. 
      Приложение не использует некоторые фичи так как находится в разработке`;
  const paragraph = `
    Приложение разделено на модули. Оберткой является модуль Layout, 
    который в зависмости от breakpoints меняет шаблон отображения. 
    Испольутся три шаблона  - Web, Tablet, Handset. 
  `;
  return (
    <WorkPage
      title="NgForecast"
      href="https://ngforecastapp.herokuapp.com"
      text={text}
      stack={[
        "Angular",
        "Angular Material",
        "RxJS",
        "Routing",
        "Express",
        "Weather API",
      ]}
      feature={paragraph}
    >
      <Image
        borderRadius="lg"
        w="full"
        src="/ngforecast/web.png"
        alt="ngforecast-screenshots"
        loading="lazy"
        mb="10"
      />
      <Image
        borderRadius="lg"
        w="full"
        src="/ngforecast/tablet.png"
        alt="ngforecast-screenshots"
        loading="lazy"
        mb="10"
      />
      <Image
        borderRadius="lg"
        w="full"
        src="/ngforecast/handset.png"
        alt="ngforecast-screenshots"
        loading="lazy"
        mb="10"
      />
    </WorkPage>
  );
}
