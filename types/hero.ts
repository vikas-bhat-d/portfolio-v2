import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export type LovedTech = {
  name: string;
  icon: StaticImageData;
};

export type SocialLink = {
  label: string;
  href: string;
  iconKey: "mail" | "github" | "linkedin" | "twitter" | "resume"|"portfolio";
}