import React from "react";
import Hero from "./Hero";
import BlogCard from "./BlogCard";
import Footer from "./Footer";

const HomePage = () => {
  const blogPosts = [
    {
      title: "The Future of AI in Creative Industries",
      des: "Exploring how artificial intelligence is reshaping the landscape of creative work and what it means for future innovators.",
      date: "Dec 29, 2024",
      slug: "future-of-ai", // Add slug
    },
    {
      title: "Designing for the Next Decade",
      des: "A deep dive into emerging design trends and how they'll influence the way we interact with digital products.",
      date: "Dec 28, 2024",
      slug: "designing-for-next-decade", // Add slug
    },
    {
      title: "The Future of Web Design",
      des: "Exploring upcoming trends in web design, from glassmorphism to neumorphism, and how they're shaping the digital landscape of tomorrow.",
      date: "Dec 28, 2024",
      slug: "future-of-web-design", // Add slug
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Hero />
      
      {/* Blog Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-2xl md:text-4xl font-bold text-center bg-clip-text bg-white">Blogs</h1>
        <div className="h-line text-center"></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default HomePage;
