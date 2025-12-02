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
  availaibility: {
    isBlocked: boolean;
    start_date: string;
    end_date: string;
  }[];
  discount: any;
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

export type CarCommentFormProps = {
  carId?: string;
  blogId?: string;
  parentId?: string | null;
  userId: string;
  title?: string;
};

type CarComment = {
  id: string;
  user_id: string;
  blog_id: never;
  car_id: string;
  parent_id: string | null;
  rating: string | null;
  verified: boolean;
  text: string;
  created_at: string;
  user: {
    name: string;
    image: string | null;
  };
};

type BlogComment = {
  id: string;
  user_id: string;
  blog_id: string;
  car_id: never;
  parent_id: string | null;
  rating: string | null;
  verified: boolean;
  text: string;
  created_at: string;
  user: {
    name: string;
    image: string | null;
  };
  hasReply: boolean;
  onShow: () => void;
};

export type ReplyCommentProps = CarComment & BlogComment;

type ReplyComments = {
  replies: ReplyCommentProps[];
};

export type CommentCardProps = ReplyCommentProps & ReplyComments & { author: string };
