import React from "react";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  des: string;
  date: string;
  slug: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, des, date, slug }) => {
  return (
    <div className="group relative bg-black border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300">
      {/* Hover effect overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-pink-500/10" />
      </div>

      <div className="relative p-6 space-y-4">
        <div className="text-white/50 text-sm">{date}</div>
        <h3 className="text-xl font-semibold text-white group-hover:text-white/90 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 line-clamp-3">{des}</p>
        <div className="pt-4 flex justify-between items-center">
          <div className="text-white/70 text-sm">5 min read</div>
          <Link
            href={`/blog/${slug}`}
            className="text-white hover:text-white/70 transition-colors"
          >
            Read More →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
