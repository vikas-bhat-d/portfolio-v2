import {StaticImageData} from "next/image"

export type Project={
  title:string,
  thumbnail:StaticImageData,
  description:string,
  sourceURL?:string,
  liveURL?:string
}