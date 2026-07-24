"use client";

import MainLayout from "@/components/layout/MainLayout";
import Link from "next/link";
import { 
  ChevronRight, ArrowRight, MapPin, Star, Bot, Calendar, Landmark, 
  Code, BriefcaseMedical, Target, BookOpen, Map, CheckSquare, 
  FileText, CalendarDays, TrendingUp, BarChart2, BookMarked, 
  Users, MonitorPlay, Award, Clock, Newspaper, Trophy,
  Cpu, Shield, Palette, BrainCircuit, Cloud, Fingerprint,
  Mic, Camera, Move, Video, Rocket, Database, Server, Compass
} from "lucide-react";
import { useEffect, useState } from "react";

export default function UpskillingHome() {
  const [mentors, setMentors] = useState<any[]>([]);

  useEffect(() => {
    // Fallback to mock data to match other pages
    setMentors([
      { _id: '1', name: 'Andrew Ng', role: 'AI Pioneer', bio: 'Founder of DeepLearning.AI', profilePicture: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Andrew' },
      { _id: '2', name: 'Lex Fridman', role: 'AI Researcher', bio: 'MIT Research Scientist', profilePicture: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lex' },
      { _id: '3', name: 'Satya Nadella', role: 'Tech Leader', bio: 'Cloud Computing Visionary', profilePicture: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Satya' }
    ]);
  }, []);

  return (
    <MainLayout>
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-8">
        
        {/* Education Journey Breadcrumb */}
        <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-gray-500 mb-6 overflow-x-auto pb-2">
          <Link href="/" className="hover:text-indigo-600 flex items-center gap-1">
             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
             <span className="hidden md:inline">Home</span>
          </Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="text-gray-800 font-medium border-b-2 border-indigo-600 pb-0.5">Upskilling</span>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="text-gray-500">Future Tech</span>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="text-gray-500">Career Switch</span>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="text-gray-500">Growth</span>
        </div>

        <div className="flex flex-col xl:flex-row gap-8 mb-10">
          
          {/* Main Content Area */}
          <div className="flex-1 space-y-8">
            
            {/* Hero Banner */}
            <div className="bg-gradient-to-r from-[#f0f9ff] to-[#e0f2fe] rounded-[32px] p-8 md:p-12 border border-sky-50 relative overflow-hidden flex flex-col md:flex-row items-center gap-6 shadow-sm">
              <div className="flex-1 z-10 relative">
                <h1 className="text-4xl md:text-5xl font-extrabold text-sky-950 mb-4 leading-[1.15]">
                  Future-Proof <br/><span className="text-[#0284c7]">Your Career</span>
                </h1>
                <p className="text-sky-900/70 mb-8 max-w-md text-sm md:text-base leading-relaxed font-medium">
                  Switch jobs, restart your career, and master the most in-demand skills of tomorrow. From GenAI to Cloud Architecture—this is your ultimate roadmap.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-[#0ea5e9] text-white px-8 py-3.5 rounded-2xl font-bold shadow-lg shadow-sky-200/50 hover:bg-sky-600 hover:-translate-y-0.5 transition-all">
                    Start Roadmap
                  </button>
                  <button className="bg-white text-[#0284c7] px-8 py-3.5 rounded-2xl font-bold shadow-md shadow-gray-200/50 hover:bg-sky-50 hover:-translate-y-0.5 transition-all flex items-center gap-2 group border border-gray-100">
                    Explore Skills 🚀
                  </button>
                </div>
              </div>
              
              {/* Illustration */}
              <div className="w-full md:w-[45%] relative z-10 hidden md:block h-64">
                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#38bdf8] via-[#818cf8] to-[#c084fc] rounded-full blur-[60px] opacity-20"></div>
                 <img src="https://api.dicebear.com/7.x/notionists/svg?seed=SoftwareDev&backgroundColor=transparent" alt="Software Developer Illustration" className="w-full h-full object-contain relative z-10 drop-shadow-2xl scale-125" />
              </div>
              
              <div className="absolute bottom-0 right-0 w-full h-full opacity-30 pointer-events-none">
                  <svg viewBox="0 0 400 400" className="absolute right-0 bottom-0 text-sky-200 w-96 h-96 transform translate-x-1/4 translate-y-1/4"><path fill="currentColor" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
              </div>
            </div>

            {/* Categories Grid */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { title: "Agentic AI", desc: "LLMs, LangChain.", options: "The New Meta", color: "bg-[#8b5cf6]", icon: "🤖", href: "/upskilling/agentic-ai" },
                { title: "Cloud", desc: "AWS, Azure, GCP.", options: "Infrastructure", color: "bg-[#0ea5e9]", icon: "☁️", href: "/upskilling/cloud-computing" },
                { title: "Data Science", desc: "Python, ML, Big Data.", options: "Data is Fuel", color: "bg-[#10b981]", icon: "📊", href: "/upskilling/data-science" },
                { title: "Cybersecurity", desc: "Pen Testing, InfoSec.", options: "Protect Systems", color: "bg-[#ef4444]", icon: "🛡️", href: "/upskilling/cybersecurity" },
                { title: "Full Stack", desc: "Next.js, React, Node.", options: "Build the Web", color: "bg-[#f59e0b]", icon: "💻", href: "/upskilling/full-stack" }
              ].map((cat, i) => (
                <Link href={cat.href} key={i} className="group flex flex-col h-full bg-white rounded-2xl p-4 border border-gray-100 hover:shadow-xl hover:shadow-gray-200/40 hover:-translate-y-1 transition-all relative overflow-hidden">
                   <div className="absolute -right-4 -top-4 w-16 h-16 bg-gray-50 rounded-full group-hover:scale-[3] transition-transform duration-500 ease-out -z-10"></div>
                   <div className="z-10 flex flex-col h-full">
                     <div className={`w-10 h-10 ${cat.color} rounded-xl flex items-center justify-center text-white mb-3 shadow-sm transform group-hover:scale-110 transition-transform`}>
                       {cat.icon}
                     </div>
                     <h3 className="font-bold text-gray-900 text-sm mb-1 leading-tight group-hover:text-indigo-600 transition-colors">{cat.title}</h3>
                     <p className="text-[10px] text-gray-500 mb-3 flex-grow">{cat.desc}</p>
                     
                     <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
                       <span className="text-[9px] font-bold text-gray-400 tracking-wider uppercase">{cat.options}</span>
                       <div className="w-5 h-5 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                         <ChevronRight className="w-3 h-3 text-gray-400 group-hover:text-indigo-600" />
                       </div>
                     </div>
                   </div>
                </Link>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Trending Roadmaps */}
              <div className="bg-white rounded-[24px] p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                   <h3 className="font-bold text-gray-900 flex items-center gap-2">
                     <Compass className="w-5 h-5 text-indigo-500" /> Career Switch Roadmaps
                   </h3>
                </div>
                <div className="space-y-3">
                   {[
                     { name: "Non-Tech to Software Dev", time: "6 Months", icon: <Code className="w-4 h-4 text-blue-500" /> },
                     { name: "Marketing to Data Analyst", time: "4 Months", icon: <BarChart2 className="w-4 h-4 text-emerald-500" /> },
                     { name: "Support to Cloud Engineer", time: "5 Months", icon: <Cloud className="w-4 h-4 text-sky-500" /> },
                     { name: "Beginner to AI Engineer", time: "8 Months", icon: <BrainCircuit className="w-4 h-4 text-purple-500" /> },
                   ].map((item, i) => (
                     <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors border border-transparent hover:border-gray-100 group">
                       <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                             {item.icon}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-gray-900">{item.name}</p>
                            <p className="text-[10px] text-gray-500 font-medium">{item.time} Track</p>
                          </div>
                       </div>
                       <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-indigo-500 transition-colors" />
                     </div>
                   ))}
                </div>
                
              </div>

              <div className="space-y-6">
                {/* Tech Leaders Spotlight */}
                <div className="bg-white rounded-[24px] p-6 border border-gray-100 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                     <h3 className="font-bold text-gray-900">Industry Leaders</h3>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-center">
                     {[
                       { name: "Andrew", icon: "🧠", bg: "bg-purple-50" },
                       { name: "Lex", icon: "🎙️", bg: "bg-slate-50" },
                       { name: "Satya", icon: "☁️", bg: "bg-blue-50" },
                       { name: "Sam", icon: "🤖", bg: "bg-emerald-50" },
                     ].map((topper, i) => (
                       <div key={i} className="flex flex-col items-center gap-2 cursor-pointer group">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${topper.bg} group-hover:shadow-md transition-shadow`}>{topper.icon}</div>
                          <div className="text-center">
                            <p className="text-[10px] font-bold text-gray-800">{topper.name}</p>
                          </div>
                       </div>
                     ))}
                  </div>
                </div>

                {/* Explorer */}
                <div className="bg-white rounded-[24px] p-6 border border-gray-100 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                     <h3 className="font-bold text-gray-900">Tech Stacks</h3>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                     {[
                       { name: "MERN", icon: "⚛️", bg: "bg-blue-50" },
                       { name: "Python", icon: "🐍", bg: "bg-yellow-50" },
                       { name: "DevOps", icon: "⚙️", bg: "bg-slate-50" },
                     ].map((career, i) => (
                       <div key={i} className="flex flex-col items-center gap-2 cursor-pointer group">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${career.bg} group-hover:shadow-md transition-shadow`}>{career.icon}</div>
                          <div className="text-center">
                            <p className="text-[10px] font-bold text-gray-800">{career.name}</p>
                          </div>
                       </div>
                     ))}
                  </div>
                </div>
              </div>
              
              {/* Certification Map Placeholder */}
              <div className="mt-8 col-span-1 md:col-span-2">
                 <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Award className="w-6 h-6 text-sky-500" /> Top Certifications Centers Near You
                 </h2>
                 <div className="bg-white rounded-[24px] p-2 border border-gray-100 shadow-sm overflow-hidden h-[400px]">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15226.772596541607!2d78.43163351984242!3d17.426462719588267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sAWS%20certification%20centers!5e0!3m2!1sen!2sin!4v1715694218654!5m2!1sen!2sin" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0, borderRadius: '16px' }} 
                      allowFullScreen={true} 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                 </div>
              </div>
              
            </div>

          </div>

          {/* Right Sidebar */}
          <div className="w-full xl:w-[320px] space-y-6">
            
            {/* AI Assistant */}
            <div className="bg-white rounded-3xl p-6 border border-sky-100 shadow-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-50/80 to-blue-50/80 z-0"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform group-hover:shadow-md">
                    <Bot className="w-6 h-6 text-sky-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 flex items-center gap-1 text-lg">Be You AI Mentor <span className="text-yellow-500">✨</span></h3>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-6 font-medium">Your smart guide for navigating tech careers, choosing the right stack, and acing interviews.</p>
                
                <div className="space-y-3 mb-6">
                  <p className="text-[11px] font-bold text-sky-500 uppercase tracking-wider">Try asking me...</p>
                  {[
                    "How to become an AI Engineer?",
                    "Best certifications for Cloud?",
                    "MERN stack vs Next.js?"
                  ].map((q, i) => (
                    <button key={i} className="w-full text-left text-xs bg-white px-4 py-2.5 rounded-xl border border-sky-100 text-gray-700 font-medium hover:bg-sky-50 hover:text-sky-600 transition-colors shadow-sm">
                      "{q}"
                    </button>
                  ))}
                </div>
                
                <button className="w-full bg-sky-500 text-white py-3 rounded-xl font-bold hover:bg-sky-600 transition-colors shadow-md shadow-sky-200/50 flex items-center justify-center gap-2">
                  <Bot className="w-4 h-4" /> Start Tech Chat
                </button>
              </div>
            </div>

            {/* Expected Salary Tracker */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-900 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-emerald-500" /> Tech Salary Insights
                </h3>
              </div>
              <div className="space-y-4">
                {[
                  { label: "AI/ML Engineer", avg: "₹15L - ₹35L", color: "text-purple-600", bg: "bg-purple-50" },
                  { label: "Cloud Architect", avg: "₹18L - ₹40L", color: "text-sky-600", bg: "bg-sky-50" },
                  { label: "Full Stack Dev", avg: "₹8L - ₹25L", color: "text-orange-600", bg: "bg-orange-50" },
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col gap-1 pb-4 border-b border-gray-50 last:border-0 last:pb-0">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{stat.label}</span>
                    <span className={`text-xl font-bold ${stat.color} flex items-center gap-1`}>
                      {stat.avg} <span className="text-[10px] text-gray-400 font-medium">/ year</span>
                    </span>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 py-2.5 bg-gray-50 text-gray-600 text-xs font-bold rounded-xl hover:bg-gray-100 transition-colors">
                View Detailed Trends
              </button>
            </div>

            {/* Legendary Inspiration */}
            <div className="bg-[#0f172a] rounded-3xl p-6 relative overflow-hidden group">
               <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
               <div className="absolute -right-10 -top-10 w-32 h-32 bg-sky-500/30 rounded-full blur-[40px] group-hover:bg-sky-400/40 transition-colors"></div>
               
               <div className="relative z-10">
                 <div className="flex items-center gap-2 mb-4">
                   <div className="w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center">
                     <Star className="w-4 h-4 text-sky-400" />
                   </div>
                   <h3 className="font-bold text-white tracking-wide text-sm uppercase">Success Story</h3>
                 </div>
                 
                 <div className="mb-6">
                   <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Programmer&backgroundColor=transparent" alt="Tech Bro" className="w-16 h-16 rounded-2xl bg-white/10 mb-3 object-contain p-1 border border-white/20" />
                   <p className="text-sky-200 text-xs font-medium mb-1">From BPO to Cloud Architect at Google</p>
                   <h4 className="text-white font-bold text-lg leading-tight mb-2">Priya's Journey</h4>
                   <p className="text-gray-400 text-xs leading-relaxed italic border-l-2 border-sky-500 pl-3">
                     "I started as a customer support rep. Six months of dedicated AWS upskilling completely transformed my career trajectory."
                   </p>
                 </div>
                 
                 <button className="w-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold py-2.5 rounded-xl backdrop-blur-md transition-all border border-white/10">
                   Read Full Story
                 </button>
               </div>
            </div>

          </div>
        </div>
      </div>
    </MainLayout>
  );
}
