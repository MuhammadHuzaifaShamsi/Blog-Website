"use client";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import BlogCard from "../components/BlogCard";
import Link from "next/link"; // Import Link from next

export default function Page() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const blogs = [
    {
      title: "The Future of Web Design",
      des: "Exploring upcoming trends in web design, from glassmorphism to neumorphism, and how they're shaping the digital landscape of tomorrow.",
      date: "Dec 28, 2024",
      category: "Design",
      slug: "the-future-of-web-design", // Add the slug for each blog
    },
    {
      title: "Mastering CSS Grid Layout",
      des: "A comprehensive guide to CSS Grid Layout and how it can revolutionize your web development workflow with practical examples.",
      date: "Dec 26, 2024",
      category: "Development",
      slug: "mastering-css-grid-layout", // Add the slug for each blog
    },
    {
      title: "UI Animation Principles",
      des: "Learn the core principles of UI animation and how to implement them to create more engaging user experiences.",
      date: "Dec 24, 2024",
      category: "UI/UX",
      slug: "ui-animation-principles", // Add the slug for each blog
    },
    {
      title: "The Future of AI in Creative Industries",
      des: "Exploring how artificial intelligence is reshaping the landscape of creative work and what it means for future innovators.",
      date: "Dec 29, 2024",
      category: "Technology",
      slug: "future-of-ai", // Add the slug for each blog
    },
    {
      title: "Designing for the Next Decade",
      des: "A deep dive into emerging design trends and how they'll influence the way we interact with digital products.",
      date: "Dec 28, 2024",
      category: "UI/UX",
      slug: "designing-for-next-decade", // Add the slug for each blog
    },
  ];
  const categories = ['All', 'Design', 'Development', 'Technology', 'UI/UX'];

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.des.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12 space-y-4">
            <h1 className="text-4xl font-bold animate-fade-in">
              Our Blog
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto animate-fade-in delay-1">
              Discover insights about design, development, and technology
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="mb-12 space-y-6 animate-slide-up delay-2">
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-3 bg-white/5 border border-white/10 rounded-lg 
                         focus:outline-none focus:border-white/20 transition-all duration-300
                         placeholder-white/30 text-white"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30">
                🔍
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full border transition-all duration-300
                  ${selectedCategory === category
                      ? 'border-white/20 bg-white/10 text-white'
                      : 'border-white/5 hover:border-white/20 text-white/70'}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in delay-3">
            {filteredBlogs.map((blog, index) => (
              <div key={index} className="group transform hover:-translate-y-1 transition-all duration-300">
                {/* Wrap BlogCard in a Link component to navigate to the specific slug page */}
                <Link href={`/blog/${blog.slug}`}>
                  <BlogCard {...blog} />
                </Link>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredBlogs.length === 0 && (
            <div className="text-center py-20 text-white/50">
              <p className="text-xl">No articles found matching your criteria</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}