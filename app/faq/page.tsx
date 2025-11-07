import Faq from "@/components/faq/faq";
import LogoSlider from "@/components/main/logo-slider";
import QuestionImg from "@/public/assets/images/contactus.png";
import Image from "next/image";

const FaqPage = () => {
  return (
    <section className="max-w-[1920px]">
      <div className="absolute  top-0 mx-auto max-w-screen w-[1905px] h-98 -z-5">
        <Image
          src={QuestionImg}
          alt="Hero Section"
          fill
          placeholder="blur"
          className="object-cover brightness-70 contrast-110"
        />
      </div>
      <div className="mt-82 md:mt-87">
        <Faq />
      </div>
      <div className="my-8">
        <LogoSlider />
      </div>
    </section>
  );
};

export default FaqPage;
