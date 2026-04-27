import { getAllBlogsMeta } from "@/lib/blog";
import BlogCard from "./ui/blog-card";
import { TbPencil } from "react-icons/tb";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const SHOW_COUNT = 2;

const Blog = () => {
  const blogs = getAllBlogsMeta();
  const visible = blogs.slice(0, SHOW_COUNT);

  return (
    <section id="blog" className="mt-8 px-2 md:px-1 scroll-mt-[20vh]">
      <div className="flex items-center gap-2 text-secondary text-md md:text-lg mb-4">
        <TbPencil />
        Blog
      </div>

      <div className="relative border-b border-dashed pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {visible.map((blog) => (
            <BlogCard key={blog.slug} {...blog} />
          ))}
        </div>

        <div className="flex justify-end mt-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs text-secondary/80 hover:text-primary transition-colors duration-200"
          >
            See all {blogs.length} posts <MdArrowOutward />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
