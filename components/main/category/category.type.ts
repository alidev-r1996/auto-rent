import { StaticImageData } from "next/image";

export type CardCategoryProps = {
  variant: string;
  img: StaticImageData;
  alt: string;
  text: string;
  href: string;
};
