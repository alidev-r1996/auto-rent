import { IconType } from "react-icons/lib";

export type CarType = {
  mile_age: number;
  id: string;
  name: string;
  type: "Sedan" | "SUV" | "Coupe" | "Crook" | "Hatchback" | "Sport";
  model: number;
  brand: string;
  description: string;
  capacity: number;
  gear: "Automatic" | "Manual";
  steering: "Electric" | "Hydraulic";
  fuel: "Gasoline" | "Gas";
  price_day: string | number;
  price_month: string | number;
  price_garranty: string | number;
  features: string[];
  images: string[];
  cover: string;
};

export type CarPriceProps = {
  day_price: string | number;
  month_price: string | number;
};

export type CarFeatureProps = {
  featureItems: { id: number; title: string; text: string; icon: IconType }[];
  className: string;
};

export type CarOptionsProps = {
  options: string[];
  className: string;
};

export type CarCarouselProps = {
  day_price: string | number;
  month_price: string | number;
  images: string[];
  name: string;
};
