"use client";
import { useState, use } from "react";
import Navbar from "@/app/components/navbar";

interface Blog {
    slug: string;
    title: string;
    date: string;
    author: string;
    readTime: string;
    headerImage: string;
    content: string;
}

const blogs: Blog[] = [
    {
        slug: "future-of-ai",
        title: "The Future of AI in Creative Industries",
        date: "Dec 29, 2024",
        author: "Muzamil Mughal",
        readTime: "8 min read",
        headerImage: "/images/bg.jpg",
        content:
            `AI is transforming creative industries by introducing new tools that enhance and automate tasks, offering limitless possibilities for innovation. In the coming years, AI’s role in creative fields such as design, music, film, and writing will continue to grow, providing creators with enhanced capabilities and new ways to express themselves.
            For designers, AI tools are already assisting with tasks like automating repetitive design processes, generating artwork, and even suggesting color schemes and layouts. This allows designers to focus more on creative thinking and high-level decision-making.
            In the music industry, AI-generated compositions are becoming increasingly sophisticated, enabling musicians to explore new genres, styles, and creative directions. AI-driven tools can assist in sound mixing and mastering, helping producers enhance the overall quality of their tracks.
            However, while AI is a powerful tool, it won’t replace the human touch. Creativity, intuition, and emotional expression remain essential components of artistic work. AI will be more of a collaborator, helping creatives work faster and more efficiently, rather than replacing them entirely.
            In conclusion, AI will continue to revolutionize creative industries, offering new opportunities for collaboration, innovation, and artistic expression.`
    },
    {
        slug: "designing-for-next-decade",
        title: "Designing for the Next Decade",
        date: "Dec 28, 2024",
        author: "Huzaifa Zafar",
        readTime: "7 min read",
        headerImage: "/images/bg.jpg",
        content:
            `Designing for the next decade requires a forward-thinking approach, considering emerging technologies, changing user needs, and evolving design principles. As we approach the 2030s, designers will need to adapt to new realities such as artificial intelligence, augmented reality, and the rise of voice interfaces.
            One of the key trends will be creating highly personalized user experiences. With the help of AI and data analytics, websites and apps will provide more tailored content and services based on individual preferences, behaviors, and needs. Designers will need to strike a balance between personalization and privacy, ensuring that users feel in control of their data.
            Sustainability will also be a crucial focus. As concerns about the environment continue to grow, eco-friendly design practices will be more prevalent. From reducing digital waste to optimizing websites for energy efficiency, designers will have a role to play in creating environmentally conscious experiences.
            The next decade will also see the continued rise of immersive experiences, with AR and VR changing how we interact with digital content. Designers will need to think beyond screens, creating experiences that blend the physical and digital worlds.
            Ultimately, designing for the next decade requires a combination of innovation, adaptability, and an understanding of the technological and societal shifts that will shape the future of design.`
    },
    {
        slug: "ui-animation-principles",
        title: "UI Animation Principles",
        date: "Dec 24, 2024",
        author: "Raafe Nadeem",
        readTime: "5 min read",
        headerImage: "/images/bg.jpg",
        content:
            `UI animation plays a crucial role in creating intuitive and engaging user interfaces. When done right, animations enhance usability by guiding users through interactions, offering feedback, and adding a sense of fun and delight. However, overuse of animations can detract from the user experience, so it’s essential to follow some key principles for effective UI animations.
            First, animations should have a clear purpose. Whether it's indicating a loading state, a transition between pages, or providing feedback on user actions, animations should help users understand what’s happening in the interface.
            Timing and easing are critical for smooth, natural animations. A well-timed animation with the right easing function can make an interaction feel more intuitive. For example, easing functions like ease-in-out provide a gentle start and end to animations, making them feel more polished.
            Lastly, consider accessibility. Ensure animations do not hinder usability for users with disabilities. Providing the option to disable animations or reducing their complexity can help cater to users who may have motion sensitivity.
            In summary, UI animations should be purposeful, subtle, and well-timed to improve user experience while avoiding distraction.`
    },
    {
        slug: "mastering-css-grid-layout",
        title: "Mastering CSS Grid Layout",
        date: "Dec 26, 2024",
        author: "Muzamil Mughal",
        readTime: "6 min read",
        headerImage: "/images/bg.jpg",
        content:
            `CSS Grid Layout is a powerful tool for web developers, enabling the creation of complex and responsive grid-based designs with ease. It allows for more flexibility and control over the positioning and layout of elements compared to traditional methods like Flexbox.
            To master CSS Grid, start by understanding its two key components: the grid container and grid items. The container defines the grid structure, while the items are placed within it. One of the most powerful features of CSS Grid is the ability to define both rows and columns, offering precise control over the layout.
            Another important aspect is the use of grid templates, such as grid-template-columns and grid-template-rows, which allow you to set the number and size of rows and columns. Additionally, grid-gap lets you create spacing between the grid items, while grid-area enables easy placement of elements within specific grid sections.
            Responsive design is a breeze with CSS Grid, as it allows you to adjust the layout depending on the screen size using media queries. By mastering these concepts, you can create advanced layouts with minimal code, improving both the design and functionality of your websites.`
    },
    {
        slug: "the-future-of-web-design",
        title: "The Future of Web Design",
        date: "Dec 28, 2024",
        author: "Huzaifa Zafar",
        readTime: "7 min read",
        headerImage: "/images/bg.jpg",
        content:
            `The future of web design is being shaped by innovative technologies, changing user behaviors, and a focus on user experience. As we move forward, websites will become increasingly immersive, adaptive, and accessible. Web design trends are shifting towards more dynamic and fluid layouts with the use of 3D elements, augmented reality (AR), and virtual reality (VR) features. These technologies will allow users to experience websites in a more interactive and engaging way.
            Additionally, AI and machine learning will play a larger role in personalizing user experiences, providing tailored content, and even creating adaptive designs based on user interactions. Web designers will also continue to prioritize mobile-first design, with responsive layouts ensuring websites are optimized for various devices and screen sizes.
            Minimalistic design, intuitive navigation, and fast-loading pages will remain key priorities. As sustainability gains importance, eco-friendly design practices, such as optimizing website performance and reducing carbon footprints, will become central to future web design.
            In conclusion, the future of web design promises a blend of creativity and technology, pushing boundaries to deliver more personalized, interactive, and environmentally conscious digital experiences.`,
    },
];

const BlogPost = ({ params }: { params: Promise<{ slug: string }> }) => {
    // Unwrap the `params` promise using `use()`
    const { slug } = use(params);

    const post = blogs.find((blog) => blog.slug === slug);

    const [comments, setComments] = useState<string[]>([]);
    const [commentText, setCommentText] = useState("");

    // Function to handle adding a comment
    const handleAddComment = () => {
        if (commentText.trim() === "") return; // Ignore empty comments
        setComments((prevComments) => [...prevComments, commentText]);
        setCommentText(""); // Clear the input field after submitting
    };

    if (!post) {
        return <div className="text-white">Blog not found.</div>;
    }

    return (
        <>
            <Navbar/>
            <div className="min-h-screen bg-black text-white">
                {/* Header Image */}
                <div
                    className="relative w-full h-64 md:h-96 bg-cover bg-center"
                    style={{ backgroundImage: `url(${post.headerImage})` }}
                >
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
                            {post.title}
                        </h1>
                    </div>
                </div>

                {/* Blog Content */}
                <div className="max-w-4xl mx-auto px-6 py-12 space-y-8">
                    {/* Metadata */}
                    <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/70">
                        <div>
                            <span>{post.date}</span> &bull; <span>{post.author}</span>
                        </div>
                        <div>{post.readTime}</div>
                    </div>

                    {/* Main Content */}
                    <div className="prose prose-invert max-w-none text-white/90 leading-8">
                        {post.content}
                    </div>

                    {/* Comments Section */}
                    <div className="pt-10">
                        <h2 className="text-2xl font-bold">Comments</h2>
                        <div className="mt-6 space-y-4">
                            {comments.length === 0 ? (
                                <p className="text-gray-400">
                                    No comments yet. Be the first to comment!
                                </p>
                            ) : (
                                comments.map((comment, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-800 p-4 rounded-lg shadow-md text-white"
                                    >
                                        {comment}
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Add Comment */}
                        <div className="mt-6 flex flex-col md:flex-row gap-4">
                            <textarea
                                className="flex-1 p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-purple-500"
                                placeholder="Write your comment here..."
                                value={commentText}
                                onChange={(e) => setCommentText(e.target.value)}
                                rows={1}
                            />
                            <button
                                className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition-all"
                                onClick={handleAddComment}
                            >
                                Add Comment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogPost;
