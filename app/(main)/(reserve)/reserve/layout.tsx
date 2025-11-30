import Image from "next/image";
import QuestionImg from "@/public/assets/images/contactus.png";
import Stepper from "./[carId]/_components/stepper";

export default async function ReserveLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="max-w-[1920px]">
      <div className="absolute  top-0 mx-auto max-w-screen w-[1905px] h-60 md:h-98 -z-5">
        <Image
          src={QuestionImg}
          alt="Hero Section"
          fill
          placeholder="blur"
          className="object-cover brightness-70 contrast-110"
        />
      </div>
      <div className="mt-45 md:mt-87 p-2 md:p-0 flex flex-col gap-4 max-w-[1690px] mx-auto mb-6">
        {children}
      </div>
    </section>
  );
}
