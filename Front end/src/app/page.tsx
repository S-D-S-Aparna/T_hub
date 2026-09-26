"use client";

import MainLayout from "@/components/layout/MainLayout";
import Link from "next/link";
import { 
  ArrowRight, Star, GraduationCap, Trophy, BookOpen, 
  Palette, Rocket, ChevronRight, BarChart, Building, 
  Music, Terminal, Lightbulb, Cpu, Stethoscope, Bot, Sparkles, ChevronLeft, MapPin, MonitorPlay, Users
} from "lucide-react";

const iconMap: Record<string, any> = {
  BarChart, Building, Trophy, Music, Terminal, Lightbulb, Cpu, Stethoscope, BookOpen, MapPin, MonitorPlay, Users
};

export default function Home() {

  return (
    <MainLayout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-50 via-white to-purple-50 rounded-[32px] p-8 md:p-12 mb-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between border border-indigo-100/50 shadow-sm">
        <div className="relative z-10 max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4 tracking-tight">
            Discover Your Passion.<br/>
            <span className="text-indigo-600 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Design Your Future.</span>
          </h1>
          <p className="text-gray-600 text-lg mb-8 font-medium leading-relaxed">
            "The best way to predict your future is to create it with your passion."
          </p>
          <div className="flex flex-wrap items-center gap-6 mb-8">
            <Link href="/education" className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:-translate-y-0.5 transition-all flex items-center gap-2">
              Start Your Journey <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center">
              <div className="flex -space-x-3">
                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Student 1" />
                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Student 2" />
                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Student 3" />
              </div>
              <span className="text-xs font-semibold text-gray-600 ml-3">Trusted by 10,000+ Students</span>
            </div>
            <div className="h-8 w-px bg-gray-200"></div>
            <div className="flex items-center gap-1.5">
              <Star className="w-5 h-5 text-amber-400 fill-current" />
              <span className="font-bold text-gray-800">4.8</span>
              <span className="text-xs font-medium text-gray-500">(2.5k Reviews)</span>
            </div>
          </div>
        </div>
        
        {/* Hero Illustration Placeholder */}
        <div className="w-full md:w-1/2 relative z-10 mt-10 md:mt-0 hidden lg:block">
           <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Students exploring" className="w-full h-auto rounded-2xl shadow-xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500 object-cover aspect-video" />
           
           {/* Floating elements */}
           <div className="absolute -top-6 -left-6 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center animate-bounce duration-[3000ms] border border-gray-100">
             <GraduationCap className="w-8 h-8 text-indigo-500" />
           </div>
           <div className="absolute top-1/4 -right-8 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center animate-pulse border border-gray-100">
             <Trophy className="w-6 h-6 text-amber-500" />
           </div>
           <div className="absolute -bottom-4 right-1/4 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center border border-gray-100">
             <BarChart className="w-5 h-5 text-purple-500" />
           </div>
        </div>
      </div>

      {/* Explore Main Categories */}
      <div className="mb-16">
        <div className="flex items-center justify-center gap-4 mb-8">
          <Sparkles className="w-5 h-5 text-indigo-300" />
          <h2 className="text-2xl font-bold text-gray-900 text-center">Explore Main Categories</h2>
          <Sparkles className="w-5 h-5 text-indigo-300" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            { title: "Career Discovery", desc: "AI Assessment & Recommendations", icon: "🧭", color: "bg-indigo-600", light: "bg-indigo-50", link: "/careers" },
            { title: "Roadmaps", desc: "Skills, Courses & Projects", icon: "🗺️", color: "bg-green-600", light: "bg-green-50", link: "/roadmap" },
            { title: "Mentorship", desc: "Connect with Industry Experts", icon: "🤝", color: "bg-orange-500", light: "bg-orange-50", link: "/mentors" },
            { title: "Opportunities", desc: "Jobs, Internships & Colleges", icon: "💼", color: "bg-pink-500", light: "bg-pink-50", link: "/opportunities" },
            { title: "Community", desc: "Network & Discussions", icon: "👥", color: "bg-blue-500", light: "bg-blue-50", link: "/community" },
          ].map((cat, i) => (
            <div key={i} className={`bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col items-center text-center hover:-translate-y-1 relative overflow-hidden`}>
              <div className={`absolute top-0 left-0 w-full h-1 ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
              <div className={`w-20 h-20 ${cat.light} rounded-full flex items-center justify-center text-4xl mb-4 group-hover:scale-110 transition-transform shadow-inner`}>
                {cat.icon}
              </div>
              <h3 className={`font-bold text-lg mb-2 text-gray-800`}>{cat.title}</h3>
              <p className="text-xs font-medium text-gray-500 mb-6 flex-grow">{cat.desc}</p>
              <Link href={cat.link} className={`w-full py-2.5 rounded-xl text-white text-sm font-bold shadow-md hover:-translate-y-0.5 transition-transform flex items-center justify-center gap-1 ${cat.color}`}>
                Explore <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Get Inspired */}
      <div className="mb-16 bg-gray-50/50 py-10 -mx-4 md:-mx-8 px-4 md:px-8 rounded-3xl">
        <div className="flex items-center justify-center gap-4 mb-8">
          <Sparkles className="w-5 h-5 text-indigo-300" />
          <h2 className="text-2xl font-bold text-gray-900 text-center">Get Inspired by Great People</h2>
          <Sparkles className="w-5 h-5 text-indigo-300" />
        </div>
        
        <div className="relative">
          <div className="flex overflow-x-auto gap-4 pb-4 snap-x hide-scrollbar">
            {[
              { name: "A.P.J Abdul Kalam", role: "Scientist & President", quote: "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action." },
              { name: "M. S. Dhoni", role: "Cricketer", quote: "I never mind getting into trouble." },
              { name: "Ratan Tata", role: "Entrepreneur", quote: "I don't believe in taking right decisions, I take decisions and then make them right." },
              { name: "Arijit Singh", role: "Singer", quote: "Music is the strongest form of magic." },
              { name: "Saina Nehwal", role: "Badminton Player", quote: "I am not the next anyone, I am the first Saina Nehwal." },
              { name: "Sundar Pichai", role: "CEO, Google", quote: "Focus on solving big problems." },
              { name: "Kiran Mazumdar-Shaw", role: "Entrepreneur", quote: "Take your failures in your stride." },
              { name: "Kalpana Chawla", role: "Astronaut", quote: "The path from dreams to success does exist." },
            ].map((person, i) => {
              const col = i % 4;
              const row = Math.floor(i / 4);
              const posX = col * 33.333;
              const posY = row * 100;
              
              return (
              <div key={i} className="min-w-[200px] md:min-w-[220px] bg-white rounded-2xl p-5 border border-gray-100 shadow-sm snap-start flex flex-col hover:shadow-md transition-shadow">
                <div className="w-20 h-20 mx-auto rounded-full bg-indigo-50 mb-3 overflow-hidden border-2 border-indigo-100 relative">
                  <div 
                    className="absolute inset-0 w-full h-full"
                    style={{
                      backgroundImage: 'url("/leaders.png")',
                      backgroundSize: '400% 200%',
                      backgroundPosition: `${posX}% ${posY}%`,
                      backgroundRepeat: 'no-repeat'
                    }}
                  />
                </div>
                <h4 className="font-bold text-gray-900 text-sm text-center mb-0.5">{person.name}</h4>
                <p className="text-[11px] font-semibold text-indigo-600 text-center mb-3">{person.role}</p>
                <div className="h-px w-8 bg-gray-200 mx-auto mb-3"></div>
                <p className="text-[11px] text-gray-500 text-center italic flex-grow">"{person.quote}"</p>
              </div>
            )})}
          </div>
          
          <button className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-gray-600 hover:text-indigo-600 transition-colors z-10 hidden md:flex">
             <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* AI Discovery Banner */}
      <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-3xl p-8 border border-indigo-100 shadow-sm mb-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-6 relative z-10">
           <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg animate-bounce duration-[3000ms] border-4 border-indigo-50">
             <img src="https://api.dicebear.com/7.x/bottts/svg?seed=passion" alt="AI Bot" className="w-16 h-16" />
           </div>
           <div>
             <h3 className="text-2xl font-bold text-gray-900 mb-2">Not sure where to start?</h3>
             <p className="text-gray-600 font-medium">Let our AI guide you to the right path<br/>based on your interests and strengths.</p>
           </div>
        </div>
        
        <div className="relative z-10">
          <button className="bg-indigo-700 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-800 hover:-translate-y-0.5 transition-all flex items-center gap-2 whitespace-nowrap">
            Discover My Passion <Sparkles className="w-5 h-5 text-yellow-300" />
          </button>
        </div>
        
        {/* Background dashes */}
        <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 w-full max-w-md hidden lg:block opacity-30 pointer-events-none">
           <svg width="100%" height="40" viewBox="0 0 300 40" fill="none">
             <path d="M0,20 Q150,40 300,20" stroke="indigo" strokeWidth="2" strokeDasharray="6 6" />
           </svg>
        </div>
      </div>

      {/* Success Stories */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Sparkles className="w-4 h-4 text-pink-300" />
            <h2 className="text-xl font-bold text-gray-900">Success Stories</h2>
            <Sparkles className="w-4 h-4 text-pink-300" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: "From Student to Software Engineer", name: "Ananya Rao", tag: "Placed at Google", desc: "B.Tech CSE", icon: "💻", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&w=100&q=80" },
            { title: "Cleared UPSC in First Attempt", name: "Rahul Verma", tag: "AIR 48", desc: "IAS Officer", icon: "🏆", img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&w=100&q=80" },
            { title: "From Passion to National Athlete", name: "Pooja Yadav", tag: "National Medalist", desc: "Sprinter", icon: "🏃‍♀️", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&w=100&q=80" },
            { title: "Started My Own Business", name: "Sneha Reddy", tag: "Founder, GreenCart", desc: "Entrepreneur", icon: "🚀", img: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?ixlib=rb-4.0.3&w=100&q=80" },
            { title: "Released My First Music Album", name: "Arjun Music", tag: "Independent Artist", desc: "Singer", icon: "🎵", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&w=100&q=80" },
            { title: "Achieved My Dream College", name: "Karthik Iyer", tag: "IIT Bombay", desc: "Student", icon: "🎓", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=100&q=80" },
          ].map((story, i) => (
            <div key={i} className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
               <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-xl flex-shrink-0 border border-gray-100">
                 {story.icon}
               </div>
               <div>
                 <h4 className="font-bold text-gray-800 text-sm mb-2 leading-tight">{story.title}</h4>
                 <div className="flex items-center gap-3">
                   <img src={story.img} alt={story.name} className="w-10 h-10 rounded-full object-cover border border-gray-200" />
                   <div>
                     <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">{story.tag}</p>
                     <p className="text-xs font-bold text-gray-900">{story.name}</p>
                     <p className="text-[11px] text-gray-500 font-medium">{story.desc}</p>
                   </div>
                 </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
