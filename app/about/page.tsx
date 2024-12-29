import { ReactNode } from 'react'
import Navbar from "../components/navbar"
import Footer from "../components/Footer"

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

const GlassCard = ({ children, className = '' }: GlassCardProps) => (
  <div className={`relative group ${className}`}>
    <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-lg"></div>
    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-white/10 via-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
    <div className="relative z-10 p-6">
      {children}
    </div>
  </div>
);

interface CardItem {
  title: string;
  icon: string;
  color: string;
  description: string;
}

export default function Page() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-12 text-center animate-fade-in">
            About HUX
          </h1>

          <div className="space-y-8">
            <div className="animate-slide-up delay-1">
              <GlassCard>
                <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                <p className="text-gray-300 leading-relaxed">
                  HUX is dedicated to pushing the boundaries of digital experiences.
                  We believe in creating interfaces that not only look beautiful but
                  feel intuitive and engaging.
                </p>
              </GlassCard>
            </div>

            <div className="animate-slide-up delay-2">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Innovation",
                    icon: "💡",
                    color: "blue",
                    description: "Pushing boundaries in digital design and interaction"
                  },
                  {
                    title: "Quality",
                    icon: "✨",
                    color: "purple",
                    description: "Crafting premium experiences with attention to detail"
                  },
                  {
                    title: "Impact",
                    icon: "🚀",
                    color: "pink",
                    description: "Creating meaningful changes in the digital landscape"
                  }
                ].map((item: CardItem, index: number) => (
                  <GlassCard key={index} className="h-full">
                    <div className="text-center">
                      <span className="text-3xl mb-4 block">{item.icon}</span>
                      <h3 className={`text-xl font-semibold mb-2 text-${item.color}-400`}>
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>

            <div className="animate-slide-up delay-3">
              <GlassCard>
                <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
                <p className="text-gray-300 leading-relaxed">
                  Founded with a passion for exceptional design and user experience,
                  HUX has grown into a leading force in digital innovation. Our team
                  of dedicated professionals works tirelessly to create solutions that
                  inspire and elevate the digital experience.
                </p>
              </GlassCard>
            </div>

            <div className="animate-slide-up delay-4">
              <GlassCard>
                <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-400">Design Philosophy</h3>
                    <p className="text-gray-300 text-sm">
                      We believe in intuitive, user-centered design that brings joy and
                      efficiency to every interaction.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-pink-400">Technology</h3>
                    <p className="text-gray-300 text-sm">
                      Using cutting-edge tools and frameworks to build robust,
                      scalable solutions.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}