import { getAllBlogsMeta } from "@/lib/blog";
import type { Metadata } from "next";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import BlogGrid from "./blog-grid";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Writing on software architecture, backend systems, and lessons from building things.",
};

export default function BlogListPage() {
  const blogs = getAllBlogsMeta();

  return (
    <div className="h-full max-w-[100ch] px-5 md:px-12 w-full sm:border-x border-dashed border-gray-400 pb-20">
      <div className="pt-24 pb-6 flex items-center justify-between">
        <Link
          href="/#blog"
          className="inline-flex items-center gap-1.5 text-sm text-secondary/70 hover:text-primary transition-colors duration-200"
        >
          <IoArrowBack className="text-base" />
          Back
        </Link>
        <span className="text-xs text-secondary/40 tabular-nums">
          {blogs.length} {blogs.length === 1 ? "post" : "posts"}
        </span>
      </div>

      <h1 className="font-outfit text-2xl md:text-3xl font-bold text-primary mb-2">
        Blog
      </h1>
      <p className="text-sm text-secondary/60 mb-8">
        Writing on systems, architecture, and things I build.
      </p>

      {blogs.length === 0 ? (
        <p className="text-sm text-secondary/50 mt-10 text-center">
          No posts yet. Check back soon.
        </p>
      ) : (
        <BlogGrid blogs={blogs} />
      )}
    </div>
  );
}
