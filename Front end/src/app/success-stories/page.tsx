"use client";

import MainLayout from "@/components/layout/MainLayout";
import { Award, TrendingUp, Users, Target, BookOpen, MonitorPlay, ChevronRight, Quote } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const successStories = [
  {
    id: 1,
    category: "sports",
    name: "Vikram Singh",
    role: "National Level Sprinter",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=800&auto=format&fit=crop",
    quote: "Coming from a small village, I never knew how to structure my training. A mentor on Be You completely transformed my regimen. Today, I hold a national gold.",
    achievement: "National Gold Medalist 2023",
    metrics: "+40% Sprint Efficiency"
  },
  {
    id: 2,
    category: "upskilling",
    name: "S.D S.Aparna",
    role: "College Student",
    image: "/images/pv-sindhu.jpg",
    quote: "The Be You community helped me master new technologies and build projects that stand out. It’s more than an app; it’s a launchpad for my career.",
    achievement: "Advanced Tech Certifications",
    metrics: "Completed 5 Upskilling Tracks"
  },
  {
    id: 3,
    category: "education",
    name: "Dr. Arvind Menon",
    role: "Rural Education Pioneer",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=800&auto=format&fit=crop",
    quote: "I wanted to take modern tech education to rural schools. Be You gave me the platform to scale my curriculum and reach thousands of bright young minds.",
    achievement: "Educator of the Year",
    metrics: "Impacted 10,000+ Students"
  },
  {
    id: 4,
    category: "education",
    name: "Neha Sharma",
    role: "EdTech Founder",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    quote: "Starting a platform for vernacular learning was tough. The AI roadmap and mentorship I received here helped me secure seed funding within 6 months.",
    achievement: "Funded Startup Founder",
    metrics: "$500K Seed Funding"
  },
  {
    id: 5,
    category: "influencer",
    name: "Kabir Das",
    role: "Tech Content Creator",
    image: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=800&auto=format&fit=crop",
    quote: "I used to get 100 views per video. By interacting with top creators in the Be You community, I learned the art of storytelling. We are building the future.",
    achievement: "1M+ YouTube Subscribers",
    metrics: "250% Growth in 1 Year"
  },
  {
    id: 6,
    category: "influencer",
    name: "Riya Verma",
    role: "Fitness Influencer",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop",
    quote: "Turning a passion into a career requires guidance. Be You showed me how to monetize my fitness journey and inspire millions of women across the country.",
    achievement: "Brand Ambassador",
    metrics: "500K+ Instagram Followers"
  }
];

export default function SuccessStoriesPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredStories = activeFilter === "all" 
    ? successStories 
    : successStories.filter(s => s.category === activeFilter);

  return (
    <MainLayout>
      <div className="pb-20">
        
        {/* --- HERO SECTION --- */}
        <div className="relative bg-[#4D28E0] rounded-3xl p-10 md:p-16 text-white mb-12 overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm border border-white/20">
              <Award className="w-4 h-4 text-yellow-300" /> Wall of Excellence
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight">
              Inspiring Excellence, <br /> One Passion at a Time.
            </h1>
            <p className="text-lg text-indigo-100 mb-8 max-w-2xl font-medium leading-relaxed">
              Discover how the Be You ecosystem is empowering the next generation of athletes, educators, and creators to break barriers and achieve global recognition.
            </p>
            <Link 
              href="/community" 
              className="inline-flex items-center gap-2 bg-white text-[#4D28E0] hover:bg-gray-50 font-bold py-3 px-8 rounded-xl transition-all shadow-lg"
            >
              Start Your Journey <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
          
          {/* Decorative background elements */}
          <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4">
             <TrendingUp className="w-[500px] h-[500px]" />
          </div>
          <div className="absolute top-10 right-20 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-10 right-60 w-48 h-48 bg-indigo-400 rounded-full blur-3xl opacity-50"></div>
        </div>


        {/* --- CATEGORY FILTERS --- */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <button 
            onClick={() => setActiveFilter("all")}
            className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all ${activeFilter === "all" ? "bg-gray-900 text-white shadow-md" : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"}`}
          >
            All Stories
          </button>
          <button 
            onClick={() => setActiveFilter("sports")}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm transition-all ${activeFilter === "sports" ? "bg-[#4D28E0] text-white shadow-md" : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"}`}
          >
            <Target className="w-4 h-4" /> Sports
          </button>
          <button 
            onClick={() => setActiveFilter("education")}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm transition-all ${activeFilter === "education" ? "bg-[#4D28E0] text-white shadow-md" : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"}`}
          >
            <BookOpen className="w-4 h-4" /> Educators
          </button>
          <button 
            onClick={() => setActiveFilter("influencer")}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm transition-all ${activeFilter === "influencer" ? "bg-[#4D28E0] text-white shadow-md" : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"}`}
          >
            <MonitorPlay className="w-4 h-4" /> Creators
          </button>
        </div>

        {/* --- STORIES GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {filteredStories.map((story) => (
            <div key={story.id} className="bg-white rounded-3xl border border-gray-100 shadow-lg overflow-hidden flex flex-col md:flex-row group hover:shadow-xl transition-all">
               <div className="w-full md:w-2/5 h-64 md:h-auto relative overflow-hidden">
                 <div className="absolute inset-0 bg-[#4D28E0]/20 mix-blend-multiply z-10 group-hover:opacity-0 transition-opacity"></div>
                 <img src={story.image} alt={story.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                 <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#4D28E0]">
                   {story.category}
                 </div>
               </div>
               <div className="w-full md:w-3/5 p-8 flex flex-col justify-between">
                 <div>
                   <Quote className="w-8 h-8 text-gray-200 mb-4" />
                   <p className="text-gray-700 font-medium italic mb-6 leading-relaxed">"{story.quote}"</p>
                 </div>
                 <div>
                   <h3 className="text-xl font-extrabold text-gray-900">{story.name}</h3>
                   <p className="text-[#4D28E0] font-semibold text-sm mb-4">{story.role}</p>
                   
                   <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                     <div>
                       <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Achievement</p>
                       <p className="font-bold text-gray-800 text-sm">{story.achievement}</p>
                     </div>
                     <div className="w-px h-8 bg-gray-200"></div>
                     <div>
                       <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Impact</p>
                       <p className="font-bold text-green-600 text-sm">{story.metrics}</p>
                     </div>
                   </div>
                 </div>
               </div>
            </div>
          ))}
        </div>

        {/* --- THEMATIC CONCLUSION --- */}
        <div className="bg-gray-900 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden shadow-2xl border border-gray-800">
          <div className="absolute inset-0 bg-gradient-to-br from-[#4D28E0]/20 to-transparent"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Be You <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Follow Your Passion</span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-medium">
              Your story is waiting to be written. Connect with mentors, engage with peers, and access the resources you need to turn your dreams into reality.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/signup" 
                className="bg-[#4D28E0] hover:bg-[#3f21b5] text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg text-lg"
              >
                Join Be You Today
              </Link>
            </div>
          </div>
        </div>

      </div>
    </MainLayout>
  );
}
