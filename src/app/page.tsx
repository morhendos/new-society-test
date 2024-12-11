"use client";

import React from 'react';
import { BadgeCheck, Calendar, Award, Swords } from 'lucide-react';

const AnimatedBackground = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20">
      <div className="absolute inset-0 opacity-30">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4}px`,
              height: `${Math.random() * 4}px`,
              animation: `float ${5 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
    </div>
  </div>
);

const HeroSection = () => (
  <section className="text-center mb-24 animate-fade-in relative">
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
      <h1 className="text-6xl font-bold mb-6 hover:scale-105 transition-transform">
        Amigos Liga
      </h1>
    </div>
    <p className="text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
      Create epic padel leagues with friends. 
      <span className="block mt-2 text-blue-600 font-medium floating inline-flex items-center justify-center gap-2">
        Game on! <Swords className="inline-block h-6 w-6 rotate-45" />
      </span>
    </p>
    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
  </section>
);

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 group">
    <div className="mb-6 text-blue-600 group-hover:scale-110 transition-transform">
      <Icon size={32} className="group-hover:animate-pulse" />
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
      {title}
    </h3>
    <p className="text-gray-600 leading-relaxed">
      {description}
    </p>
  </div>
);

const FeaturesSection = () => (
  <section className="mb-24">
    <div className="grid md:grid-cols-3 gap-8">
      <FeatureCard 
        icon={BadgeCheck}
        title="Easy League Creation"
        description="Set up your padel league in minutes. Invite friends and start playing with our intuitive interface!"
      />
      <FeatureCard 
        icon={Calendar}
        title="Smart Scheduling"
        description="Our AI-powered scheduler finds the perfect match times for everyone. No more scheduling headaches!"
      />
      <FeatureCard 
        icon={Award}
        title="Live Rankings"
        description="Real-time rankings and statistics. Watch your progress and compete for the top spot!"
      />
    </div>
  </section>
);

const SignupForm = () => {
  const [email, setEmail] = React.useState('');
  const [status, setStatus] = React.useState('');
  const [isHovered, setIsHovered] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('🎉 You\'re in! Get ready for the ultimate padel experience.');
    setEmail('');
  };

  return (
    <section className="max-w-xl mx-auto">
      <div className="bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-lg border border-gray-200 transform transition-all duration-300 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Join the Padel Revolution
        </h2>
        <p className="text-gray-600 mb-8 text-center text-lg">
          Be the first to know when Amigos Liga launches and get 
          <span className="font-semibold text-blue-600"> exclusive early access!</span>
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setIsHovered(true)}
              onBlur={() => setIsHovered(false)}
              placeholder="Enter your email"
              className={`w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none text-lg transition-all duration-300 ${
                isHovered ? 'border-blue-400' : ''
              }`}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Join the Waitlist →
          </button>
        </form>
        {status && (
          <div className="mt-6 text-green-600 text-center animate-fade-in bg-green-50/80 backdrop-blur-sm p-4 rounded-xl">
            {status}
          </div>
        )}
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <main className="relative min-h-screen p-8 overflow-hidden">
      <AnimatedBackground />
      <div className="max-w-6xl mx-auto relative z-10">
        <HeroSection />
        <FeaturesSection />
        <SignupForm />
      </div>
    </main>
  );
}