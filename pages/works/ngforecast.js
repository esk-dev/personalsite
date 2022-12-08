import WorkPage from "../../components/workpage";
import { Image } from "@chakra-ui/react";

export default function Ngforecast() {
  const text = `Приложение связывается с сервером (Node JS, Express) получает данные 
      погоды по трем эндпоинтам forecast, weather, search (автокомплит). Реализована 
      аутентификация пользователя с тремя функциями - login, sign up, log out. Сервер 
      авторизует по токенам вложенным в куки при регистрации или логине. 
      Пользователь может добавить/удалить города в избранное на домашней страницы, 
      если будет зарегистрирован. 
      Это пет проект, поэтому развивается постепенно. В репозитоии на github есть 
      актуальные issue`;
  const paragraph = `
    CI/CD - Github Actions, Docker. Научился составлять пайплайн тестирования, доставки и билда приложения.
    При помощи Docker научился настраивать среду разработки.
    Ангуляр роутинг - получение определенного параметра из роута и вызов функций.
    Работа с апи - запрос к бэкенду, парсинг полученных данных, вывод в шаблон.
    Передача данных в компоненты - общение компонентов родитель/ребенок с помощью инпутов и оутпутов.
    Использование ng-content/ng-template.
 `;
  return (
    <WorkPage
      title="NgForecast"
      href="https://ngforecast.onrender.com"
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
