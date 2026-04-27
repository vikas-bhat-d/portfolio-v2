"use client";

import { BlogMeta } from "@/types/blog";
import BlogCard from "@/components/ui/blog-card";
import { easeInOut, motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: [easeInOut] },
  },
};

export default function BlogGrid({ blogs }: { blogs: BlogMeta[] }) {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-b border-dashed pb-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {blogs.map((blog) => (
        <motion.div key={blog.slug} variants={itemVariants}>
          <BlogCard {...blog} />
        </motion.div>
      ))}
    </motion.div>
  );
}
