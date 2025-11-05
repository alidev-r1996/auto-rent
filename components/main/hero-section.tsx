import Image from "next/image";

const HeroSection = () => {
  return (
    <header>
      <div className="absolute  top-0 mx-auto max-w-screen w-[1905px] h-screen -z-5">
        <Image src="/assets/images/hero-road.png" alt="Hero Section" fill />
      </div>
    </header>
  );
};

export default HeroSection;
