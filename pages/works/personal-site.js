import WorkPage from "../../components/workpage";
import { Image } from "@chakra-ui/react";

export default function PersonalSite() {
  const text =
    "A site with animations made using React and a form for sending data, the backend for sending is not connected.";
  return (
    <WorkPage
      title="Personal Site"
      href="https://ngforecastapp.herokuapp.com"
      text={text}
      stack={["React", "react-routing", "SCSS", "Formik", "lazy-loading"]}
    >
      <Image
        borderRadius="lg"
        w="full"
        src="/personal-site/personal-site.PNG"
        alt="personal-site-screenshots"
        loading="lazy"
        mb="10"
      />
      <Image
        borderRadius="lg"
        w="full"
        src="/personal-site/personal-site2.PNG"
        alt="personal-site-screenshots"
        loading="lazy"
        mb="10"
      />
      <Image
        borderRadius="lg"
        w="full"
        src="/personal-site/personal-site3.PNG"
        alt="personal-site-screenshots"
        loading="lazy"
        mb="10"
      />
      <Image
        borderRadius="lg"
        w="full"
        src="/personal-site/personal-site4.PNG"
        alt="personal-site-screenshots"
        loading="lazy"
        mb="10"
      />
    </WorkPage>
  );
}
