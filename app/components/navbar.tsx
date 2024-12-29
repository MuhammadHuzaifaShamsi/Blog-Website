"use client"

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ReactNode } from 'react';

const AnimatedMenuIcon = () => {
    return (
        <button className="p-3 relative group">
            {/* Main container with background effect */}
            <div className="relative flex items-center justify-center bg-black rounded-lg overflow-hidden">
                {/* SVG container */}
                <div className="relative">
                    <style>{`
              @keyframes gradientMove {
                0% { background-position: 0% 50%; }
                100% { background-position: 100% 50%; }
              }
  
              @keyframes bounce {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-3px); }
              }
  
              @keyframes pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.2); }
              }
  
              .animate-gradient {
                background-size: 200% 200%;
                animation: gradientMove 3s linear infinite;
              }
  
              .dot {
                transform-origin: center;
              }
  
              .dot-1 {
                animation: bounce 1s ease-in-out infinite;
                animation-delay: 0s;
              }
  
              .dot-2 {
                animation: pulse 1s ease-in-out infinite;
                animation-delay: 0.2s;
              }
  
              .dot-3 {
                animation: bounce 1s ease-in-out infinite;
                animation-delay: 0.4s;
              }
            `}</style>

                    {/* Animated dots */}
                    <svg width="32" height="24" viewBox="0 0 24 24" className="transform transition-all duration-300">
                        {/* First dot with trail effect */}
                        <g className="dot dot-1">
                            <circle cx="2" cy="12" r="3.5" className="fill-blue-400" />
                            <circle cx="2" cy="12" r="4" className="fill-blue-400/30 animate-pulse" />
                        </g>

                        {/* Center dot with pulse effect */}
                        <g className="dot dot-2">
                            <circle cx="11" cy="12" r="3.5" className="fill-purple-400" />
                            <circle cx="11" cy="12" r="4" className="fill-purple-400/30 animate-pulse" />
                        </g>

                        {/* Last dot with trail effect */}
                        <g className="dot dot-3">
                            <circle cx="20" cy="12" r="3.5" className="fill-pink-400" />
                            <circle cx="20" cy="12" r="4" className="fill-pink-400/30 animate-pulse" />
                        </g>
                    </svg>
                </div>

            </div>
        </button>
    );
};

interface PremiumButtonProps {
    children: ReactNode;
    href: string;
    isActive: boolean;
}

const PremiumButton = ({ children, href, isActive }: PremiumButtonProps) => {
    return (
        <Link
            href={href}
            className={`relative group px-3 py-1 text-sm ${isActive ? 'bg-white/10' : ''}`}
        >
            {/* Base text */}
            <span className="relative z-10 text-white transition-all duration-300 group-hover:text-white">
                {children}
            </span>

            {/* Hover effects container */}
            <div className={`absolute inset-0 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-all duration-300`}>
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-lg"></div>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-white/10 via-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            </div>
        </Link>
    );
};

const Navbar = () => {
    const pathname = usePathname();

    return (
        <div className="sticky top-0 z-50">
            <nav className="bg-black px-4 py-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    {/* Left section */}
                    <div className="flex items-center gap-8">
                        <div className="text-white hover:text-gray-300 transition-all duration-300">
                            <AnimatedMenuIcon />
                        </div>

                        <div className="hidden md:flex items-center space-x-2">
                            <Link 
                                href="/"
                                className={`px-3 py-1 rounded-full text-sm transition-all duration-300 
                                    ${pathname === '/' 
                                        ? 'bg-white text-black' 
                                        : 'text-white hover:bg-white/10'
                                    }`}
                            >
                                Home
                            </Link>
                            <PremiumButton href="/blogs" isActive={pathname === '/blogs'}>Blogs</PremiumButton>
                            <PremiumButton href="/about" isActive={pathname === '/about'}>About</PremiumButton>
                            <PremiumButton href="/contact" isActive={pathname === '/contact'}>Contact</PremiumButton>
                        </div>
                    </div>

                    {/* Center logo */}
                    <div className="absolute left-1/2 transform -translate-x-1/2">
                        <span className="text-white font-bold text-xl tracking-wider">HUX</span>
                    </div>

                    {/* Right section */}
                    <div className="flex items-center space-x-6">
                        <PremiumButton href="/" isActive={pathname === '/login'}>Log In</PremiumButton>
                        <PremiumButton href="/" isActive={pathname === '/signin'}>Sign In</PremiumButton>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;