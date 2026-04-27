import { getBlogBySlug, getAllBlogSlugs } from "@/lib/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import type { Metadata } from "next";
import type { Options as PrettyCodeOptions } from "rehype-pretty-code";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) return {};
  return {
    title: blog.meta.title,
    description: blog.meta.description,
  };
}

const prettyCodeOptions: PrettyCodeOptions = {
  theme: {
    dark: "github-dark-dimmed",
    light: "github-light",
  },
  keepBackground: false,
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) notFound();

  const { meta, content } = blog;

  const formatted = new Date(meta.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="h-full max-w-[100ch] px-5 md:px-12 w-full sm:border-x border-dashed border-gray-400 pb-24">
      {/* Back */}
      <div className="pt-24 pb-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-secondary/70 hover:text-primary transition-colors duration-200"
        >
          <IoArrowBack className="text-base" />
          Back to blog
        </Link>
      </div>

      {/* Header */}
      <div className="border-b border-dashed border-secondary/20 pb-8 mb-8">
        <span className="text-xs text-secondary/50 tabular-nums">{formatted}</span>

        <h1 className="font-outfit text-2xl md:text-[2rem] font-bold text-primary leading-tight mt-3 mb-4">
          {meta.title}
        </h1>

        <p className="text-sm text-secondary/70 leading-relaxed mb-5">
          {meta.description}
        </p>

        {meta.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {meta.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-lg text-[11px] border border-dashed border-secondary/25 text-secondary/60"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* MDX Content */}
      <article className="blog-prose prose prose-sm md:prose-base max-w-none dark:prose-invert
        prose-headings:font-outfit prose-headings:tracking-tight prose-headings:text-foreground
        prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg
        prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-a:font-normal
        prose-strong:text-foreground prose-strong:font-semibold
        prose-blockquote:border-l-primary/50 prose-blockquote:text-secondary/80 prose-blockquote:not-italic
        prose-code:font-jetbrains-mono prose-code:text-primary prose-code:before:content-none prose-code:after:content-none
        prose-code:bg-secondary/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:text-[0.82em]
        prose-pre:bg-transparent prose-pre:p-0 prose-pre:my-0
        prose-li:text-secondary/80 prose-p:text-secondary/80 prose-p:leading-relaxed
        prose-hr:border-dashed prose-hr:border-secondary/25
        prose-table:text-sm prose-th:text-primary prose-td:text-secondary/80
      ">
        <MDXRemote
          source={content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [[rehypePrettyCode, prettyCodeOptions] as never],
            },
          }}
        />
      </article>
    </div>
  );
}
