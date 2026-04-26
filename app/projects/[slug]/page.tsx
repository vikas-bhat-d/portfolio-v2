import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { BsGlobe } from "react-icons/bs";
import { IoArrowBack } from "react-icons/io5";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects
    .filter((p) => p.slug)
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const paragraphs = project.detailedDescription
    ? project.detailedDescription.split("\n\n")
    : [project.description];

  return (
    <div className="h-full max-w-[100ch] px-5 md:px-12 w-full sm:border-x border-dashed border-gray-400 pb-20">
      {/* Back link */}
      <div className="pt-24 pb-6">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-sm text-secondary/70 hover:text-primary transition-colors duration-200"
        >
          <IoArrowBack className="text-base" />
          Back to projects
        </Link>
      </div>

      {/* Thumbnail */}
      <div className="relative w-full h-56 md:h-80 overflow-hidden rounded-2xl border border-dashed border-secondary/30">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
      </div>

      {/* Header */}
      <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <h1 className="font-outfit text-3xl md:text-4xl font-bold text-primary">
          {project.title}
        </h1>

        <div className="flex items-center gap-3">
          {project.sourceURL && (
            <Link
              href={project.sourceURL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-dashed border-secondary/40 text-sm text-secondary hover:text-primary hover:border-primary/50 transition-all duration-200"
            >
              <FiGithub />
              Source
            </Link>
          )}
          {project.liveURL && (
            <Link
              href={project.liveURL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-dashed border-secondary/40 text-sm text-secondary hover:text-primary hover:border-primary/50 transition-all duration-200"
            >
              <BsGlobe />
              Live
            </Link>
          )}
        </div>
      </div>

      {/* Tech stack */}
      {project.techStack?.length > 0 && (
        <div className="flex flex-wrap items-center gap-2.5 mt-4">
          {project.techStack.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-dashed border-secondary/25 text-xs text-secondary/80"
            >
              <Image
                src={tech.icon}
                alt={tech.name}
                width={14}
                height={14}
                className="rounded-[2px]"
              />
              {tech.name}
            </div>
          ))}
        </div>
      )}

      {/* Divider */}
      <div className="mt-8 border-t border-dashed border-secondary/20" />

      {/* Detailed description */}
      <div className="mt-8 flex flex-col gap-5">
        {paragraphs.map((para, i) => (
          <p
            key={i}
            className="text-sm md:text-[15px] text-secondary/80 leading-relaxed text-justify"
          >
            {para}
          </p>
        ))}
      </div>
    </div>
  );
}
