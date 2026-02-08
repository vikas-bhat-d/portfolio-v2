import {StaticImageData} from "next/image"

type TechStack = {
  name: string;
  icon: StaticImageData;
};
export type Project={
  title:string,
  thumbnail:StaticImageData,
  description:string,
  sourceURL?:string,
  liveURL?:string,
  techStack:TechStack[],
  glowColor?:string,
}