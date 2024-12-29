import Footer from "../components/Footer";
import Navbar from "../components/navbar"
import { ReactNode } from 'react';

interface GlassCardProps {
    children: ReactNode;
    className?: string;
}

const GlassCard = ({ children, className = '' }: GlassCardProps) => (
    <div className={`relative group ${className}`}>
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-lg"></div>
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-white/[0.04] via-white/[0.03] to-white/[0.02] opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        <div className="relative z-10 p-6">
            {children}
        </div>
    </div>
);

export default function Page() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-black text-white py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold mb-12 text-center animate-fade-in">
                        Get in Touch
                    </h1>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="animate-slide-in-left">
                            <GlassCard className="h-full">
                                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                                <div className="space-y-4">
                                    <p className="flex items-center space-x-3">
                                        <span className="text-blue-400">📍</span>
                                        <span>Block-6, P.E.C.H.S, Karachi</span>
                                    </p>
                                    <p className="flex items-center space-x-3">
                                        <span className="text-purple-400">📧</span>
                                        <span>huzaifashamsi819@gmail.com</span>
                                    </p>
                                    <p className="flex items-center space-x-3">
                                        <span className="text-pink-400">📱</span>
                                        <span>+92 324-9276352</span>
                                    </p>
                                </div>
                            </GlassCard>
                        </div>

                        <div className="animate-slide-in-right">
                            <GlassCard className="h-full">
                                <form className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Name</label>
                                        <input
                                            type="text" placeholder="Enter Your Name"
                                            className="w-full px-4 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Email</label>
                                        <input
                                            type="email" placeholder="Enter Your Email"
                                            className="w-full px-4 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Message</label>
                                        <textarea
                                            rows={4} placeholder="Enter Your Message"
                                            className="w-full px-4 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-300"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full py-3 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-lg hover:opacity-90 transition-all duration-300"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </GlassCard>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}