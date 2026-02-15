import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://vikasbhat.vercel.app/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://vikasbhat.vercel.app/#experience",
      lastModified: new Date(),
    },
    {
      url: "https://vikasbhat.vercel.app/#projects",
      lastModified: new Date(),
    },
    {
      url: "https://vikasbhat.vercel.app/#contact",
      lastModified: new Date(),
    },
  ];
}
