import { StaticImageData } from "next/image";

export type JobType = "Remote" | "Onsite" | "Hybrid";

export type Experience = {
  logo: StaticImageData;
  jobTitle: string;
  companyName: string;
  jobType: JobType;
  location?: string;
  period: string;
  isPresent?: boolean;
};
