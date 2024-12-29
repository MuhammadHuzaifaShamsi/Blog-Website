import Link from "next/link";

const Hero = () => {
    return (
      <div className="relative min-h-[80vh] bg-black flex items-center">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/5 to-pink-500/10" />
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 pl-10 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/70">
                Explore the World of Ideas
              </h1>
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                Discover thought-provoking articles, innovative ideas, and creative insights from leading thinkers around the globe.
              </p>
              <div className="flex gap-4">
                <Link href="/blogs" className="group px-6 py-3 bg-white text-black rounded-lg hover:bg-opacity-90 transition-all duration-300 flex items-center gap-2">
                  Start Reading
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                <Link href="/about" className="px-6 py-3 border border-white/20 text-white rounded-lg hover:bg-white/5 transition-all duration-300">
                  Learn More
                </Link>
              </div>
            </div>
            
            {/* Animated Cards Preview */}
            <div className="relative hidden md:flex justify-center">
              <div className="absolute top-0 w-64 h-80 bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-pink-500/20 rounded-xl transform rotate-6 animate-pulse" />
              <div className="absolute top-4 w-64 h-80 bg-gradient-to-br from-blue-500/20 via-pink-500/20 to-purple-500/20 rounded-xl transform -rotate-6 animate-pulse delay-150" />
              <div className="w-64 h-80 bg-black border border-white/10 rounded-xl backdrop-blur-sm p-6 z-10">
                <div className="h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="w-3/4 h-4 bg-white/20 rounded animate-pulse" />
                    <div className="w-1/2 h-4 bg-white/20 rounded animate-pulse" />
                  </div>
                  <div className="space-y-2">
                    <div className="w-full h-4 bg-white/10 rounded" />
                    <div className="w-3/4 h-4 bg-white/10 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Hero;