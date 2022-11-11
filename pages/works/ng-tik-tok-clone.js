import WorkPage from "../../components/workpage";

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
    </WorkPage>
  );
}
