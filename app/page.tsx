import HeroSection from "@/components/main/hero-section";
import LogoSlider from "@/components/main/logo-slider";
import WhyUs from "@/components/main/why-us/why-us";
import CarCategory from "@/components/main/category/category.car";
import Reserve from "@/components/reserve/reserve";
import HowTo from "@/components/main/how-to/how-to";
import Faq from "@/components/faq/faq";
import Comments from "@/components/comments/comments";
import BlogList from "@/components/blogs/bloglist";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <LogoSlider />
      <WhyUs />
      <CarCategory />
      <Reserve />
      <HowTo />
      <Faq />
      <Comments />
      <BlogList />
    </main>
  );
}
