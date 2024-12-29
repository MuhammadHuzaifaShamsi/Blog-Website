import Link from "next/link";

const Footer = () => {
    return (
        <footer className="relative bg-black pl-6">
            {/* Top gradient */}
            <div className="absolute top-0 left-0 right-0 h-14 bg-gradient-to-b from-purple-400/[0.15] via-purple-200/[0.05] to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid md:grid-cols-3 gap-10">
                    {/* Logo Section */}
                    <div className="space-y-4">
                        <span className="text-white font-bold text-xl tracking-wider">HUX</span>
                        <p className="text-gray-400">Exploring ideas that shape our world.</p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-white font-semibold">Quick Links</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <Link href="/" className="hover:text-white transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/blogs" className="hover:text-white transition-colors">
                                    Blogs
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-white transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-white transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-4">
                        <h4 className="text-white font-semibold">Newsletter</h4>
                        <p className="text-gray-400">Stay updated with our latest stories.</p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-white/20"
                            />
                            <button className="px-4 py-2 bg-white text-black rounded-lg hover:bg-opacity-90 transition-all duration-300">
                                →
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-white/10 text-center text-gray-400">
                    <p>&copy; 2024 HUX. All rights reserved. (00329377)</p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;