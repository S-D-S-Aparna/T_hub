"use client";

import MainLayout from "@/components/layout/MainLayout";
import Link from "next/link";
import { 
  ChevronRight, ArrowRight, MapPin, Star, Bot, Calendar, Landmark, 
  Code, BriefcaseMedical, Target, BookOpen, Map, CheckSquare, 
  FileText, CalendarDays, TrendingUp, BarChart2, BookMarked, 
  Users, MonitorPlay, Award, Clock, Newspaper, Trophy,
  Cpu, Shield, Palette, BrainCircuit, Cloud, Fingerprint,
  Mic, Camera, Move, Video, Rocket
} from "lucide-react";
import { useEffect, useState } from "react";

export default function CoCurricularHome() {
  const [mentors, setMentors] = useState<any[]>([]);

  useEffect(() => {
    // Fallback to mock data to match competitive exams
    setMentors([
      { _id: '1', name: 'Suresh Mukund', role: 'Dance Mentor', bio: 'Kings United', profilePicture: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Suresh' },
      { _id: '2', name: 'Bhuvan Bam', role: 'Content Mentor', bio: 'BB Ki Vines', profilePicture: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bhuvan' },
      { _id: '3', name: 'Kunal Shah', role: 'Startup Mentor', bio: 'Founder of CRED', profilePicture: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kunal' }
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
          <span className="text-gray-800 font-medium border-b-2 border-indigo-600 pb-0.5">Co-Curricular</span>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="text-gray-500">Explore Interests</span>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="text-gray-500">Build Skills</span>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="text-gray-500">Mastery</span>
        </div>

        <div className="space-y-10 mb-10">
            
            {/* Hero Banner (Matching Education/Competitive Page) */}
            <div className="bg-gradient-to-r from-[#fdf4ff] to-[#fce7f3] rounded-[32px] p-8 md:p-12 border border-pink-50 relative overflow-hidden flex flex-col md:flex-row items-center gap-6 shadow-sm">
              <div className="flex-1 z-10 relative">
                <h1 className="text-4xl md:text-5xl font-extrabold text-pink-950 mb-4 leading-[1.15]">
                  Beyond <br/><span className="text-[#db2777]">The Classroom</span>
                </h1>
                <p className="text-pink-900/70 mb-8 max-w-md text-sm md:text-base leading-relaxed font-medium">
                  Unleash your creativity and passions. Discover mentors, workshops, and roadmaps to help you build an amazing portfolio outside of academics.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-[#db2777] text-white px-8 py-3.5 rounded-2xl font-bold shadow-lg shadow-pink-200/50 hover:bg-pink-700 hover:-translate-y-0.5 transition-all">
                    Explore Interests
                  </button>
                  <button className="bg-white text-[#db2777] px-8 py-3.5 rounded-2xl font-bold shadow-md shadow-gray-200/50 hover:bg-pink-50 hover:-translate-y-0.5 transition-all flex items-center gap-2 group border border-gray-100">
                    Find Events ✨
                  </button>
                </div>
              </div>
              
              {/* Illustration */}
              <div className="w-full md:w-[45%] relative z-10 hidden md:block h-64">
                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#f472b6] via-[#c084fc] to-[#38bdf8] rounded-full blur-[60px] opacity-20"></div>
                 <img src="https://api.dicebear.com/7.x/notionists/svg?seed=CreativeStudio&backgroundColor=transparent" alt="Creative Illustration" className="w-full h-full object-contain relative z-10 drop-shadow-2xl scale-125" />
              </div>
              
              <div className="absolute bottom-0 right-0 w-full h-full opacity-30 pointer-events-none">
                  <svg viewBox="0 0 400 400" className="absolute right-0 bottom-0 text-pink-200 w-96 h-96 transform translate-x-1/4 translate-y-1/4"><path fill="currentColor" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
              </div>
            </div>

            {/* Categories Grid (Matching Education Grid) */}
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { title: "Dance", desc: "Hip-hop, Classical, Choreo.", options: "10+ Styles", color: "bg-[#e11d48]", icon: "🕺", href: "/co-curricular/dance" },
                { title: "Content Creation", desc: "YouTube, Insta, Influencer.", options: "Viral Strategies", color: "bg-[#db2777]", icon: "📸", href: "/co-curricular/content-creators" },
                { title: "Video Editing", desc: "Premiere, VFX, DaVinci.", options: "Cinematic Edits", color: "bg-[#0d9488]", icon: "🎬", href: "/co-curricular/video-editing" },
                { title: "Startups", desc: "Tech, MVPs, Funding.", options: "Build Unicorns", color: "bg-[#2563eb]", icon: "🚀", href: "/co-curricular/startups" },
                { title: "Music", desc: "Singing, Production, DJ.", options: "Audio Mastery", color: "bg-[#7c3aed]", icon: "🎧", href: "/co-curricular/singing-and-music" }
              ].map((cat, i) => (
                <Link href={cat.href} key={i} className="bg-white rounded-[32px] p-5 border border-gray-100 shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-300 group flex flex-col h-full hover:-translate-y-1 block cursor-pointer">
                  <div className="text-4xl mb-4 text-center">{cat.icon}</div>
                  <h3 className={`font-bold text-center text-lg mb-2 text-gray-900`}>{cat.title}</h3>
                  <p className="text-[11px] text-center text-gray-500 mb-4 flex-grow leading-relaxed px-1">{cat.desc}</p>
                  <div className="text-center mb-4"><span className="text-[11px] font-bold text-pink-600 bg-pink-50 px-2.5 py-1 rounded-full">{cat.options}</span></div>
                  <button className={`w-full ${cat.color} text-white font-bold text-xs py-2.5 rounded-xl flex items-center justify-center gap-1 shadow-md shadow-gray-200 hover:-translate-y-0.5 transition-transform pointer-events-none`}>
                    Explore <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </Link>
              ))}
            </div>

            {/* Features Row (Matching Education page layout) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* AI Roadmap Generator */}
              <div className="bg-gradient-to-b from-[#fdf4ff] to-white rounded-[24px] p-5 border border-pink-100 shadow-sm hover:shadow-md transition-all cursor-pointer group" onClick={() => window.location.href='/roadmap'}>
                <h3 className="font-bold text-[#be185d] mb-2">Hustle Roadmap</h3>
                <p className="text-[11px] text-gray-500 mb-4 leading-relaxed">Generate your personalized creative journey and milestone planner.</p>
                <div className="flex items-end justify-between mt-auto">
                  <span className="text-xs font-bold text-[#db2777] flex items-center gap-1">Generate Now &rarr;</span>
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-xl group-hover:scale-110 transition-transform">📍</div>
                </div>
              </div>
              
              {/* Live Workshops */}
              <div className="bg-gradient-to-b from-[#f5f3ff] to-white rounded-[24px] p-5 border border-purple-100 shadow-sm hover:shadow-md transition-all cursor-pointer group" onClick={() => window.location.href='/events'}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-[#6d28d9]">Live Workshops</h3>
                  <span className="bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider animate-pulse">Live</span>
                </div>
                <p className="text-[11px] text-gray-500 mb-4 leading-relaxed">Join live masterclasses by expert creators and founders.</p>
                <div className="flex items-end justify-between mt-auto">
                  <span className="text-xs font-bold text-[#7c3aed] flex items-center gap-1">Join Now &rarr;</span>
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-xl group-hover:scale-110 transition-transform">💻</div>
                </div>
              </div>

              {/* Find Communities */}
              <div className="bg-gradient-to-b from-[#ecfdf5] to-white rounded-[24px] p-5 border border-emerald-100 shadow-sm hover:shadow-md transition-all cursor-pointer group" onClick={() => window.location.href='/community'}>
                <h3 className="font-bold text-[#047857] mb-2">Find Communities</h3>
                <p className="text-[11px] text-gray-500 mb-4 leading-relaxed">Search top Discord servers, creator houses, and incubators.</p>
                <div className="flex items-end justify-between mt-auto">
                  <span className="text-xs font-bold text-[#059669] flex items-center gap-1">Explore Hubs &rarr;</span>
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-xl group-hover:scale-110 transition-transform">🏫</div>
                </div>
              </div>

              {/* Competitions */}
              <div className="bg-gradient-to-b from-[#fffbeb] to-white rounded-[24px] p-5 border border-amber-100 shadow-sm hover:shadow-md transition-all cursor-pointer group" onClick={() => window.location.href='/events'}>
                <h3 className="font-bold text-[#b45309] mb-2">Competitions</h3>
                <p className="text-[11px] text-gray-500 mb-4 leading-relaxed">Participate in hackathons, talent shows, and creator challenges.</p>
                <div className="flex items-end justify-between mt-auto">
                  <span className="text-xs font-bold text-[#d97706] flex items-center gap-1">Enter Now &rarr;</span>
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-xl group-hover:scale-110 transition-transform">🏆</div>
                </div>
              </div>
            </div>

            {/* Trending Niches (Matching Trending Courses) */}
            <div className="bg-white rounded-[24px] p-6 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-6">Trending Side Hustles</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-4">
                {[
                  { name: "UI/UX Design", icon: Palette, color: "text-green-500", bg: "bg-green-50" },
                  { name: "Esports", icon: Cpu, color: "text-indigo-500", bg: "bg-indigo-50" },
                  { name: "Photography", icon: Camera, color: "text-rose-500", bg: "bg-rose-50" },
                  { name: "Podcasting", icon: Mic, color: "text-blue-500", bg: "bg-blue-50" },
                  { name: "Vlogging", icon: Video, color: "text-purple-500", bg: "bg-purple-50" },
                  { name: "App Dev", icon: Code, color: "text-violet-500", bg: "bg-violet-50" },
                  { name: "Blogging", icon: FileText, color: "text-sky-500", bg: "bg-sky-50" },
                  { name: "AI Art", icon: BrainCircuit, color: "text-amber-500", bg: "bg-amber-50" },
                ].map((exam, i) => (
                  <div key={i} className="flex flex-col items-center gap-3 cursor-pointer group hover:-translate-y-1 transition-transform">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border border-gray-100 ${exam.bg} group-hover:shadow-md transition-shadow`}>
                      <exam.icon className={`w-6 h-6 ${exam.color}`} strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] font-semibold text-gray-600 text-center leading-tight group-hover:text-pink-600">{exam.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Upcoming Events */}
              <div className="bg-white rounded-[24px] p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                   <h3 className="font-bold text-gray-900">Upcoming Events</h3>
                </div>
                <div className="grid grid-cols-4 gap-2">
                   {[
                     { name: "VidCon", date: "Jan 2025", icon: "📸", bg: "bg-emerald-50", color: "text-emerald-700" },
                     { name: "Y Combinator", date: "May 2025", icon: "🚀", bg: "bg-blue-50", color: "text-blue-700" },
                     { name: "Comic Con", date: "Dec 2024", icon: "🎨", bg: "bg-amber-50", color: "text-amber-700" },
                     { name: "World of Dance", date: "Nov 2024", icon: "🕺", bg: "bg-rose-50", color: "text-rose-700" },
                   ].map((event, i) => (
                     <div key={i} className="flex flex-col items-center gap-2 cursor-pointer group">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${event.bg} group-hover:shadow-md transition-shadow`}>{event.icon}</div>
                        <div className="text-center">
                          <p className="text-[10px] font-bold text-gray-800">{event.name}</p>
                        </div>
                     </div>
                   ))}
                </div>
              </div>

              {/* Success Stories */}
              <div className="bg-white rounded-[24px] p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                   <h3 className="font-bold text-gray-900">Creator Spotlights</h3>
                </div>
                <div className="grid grid-cols-4 gap-2 text-center">
                   {[
                     { name: "Dhruv", icon: "📹", bg: "bg-emerald-50" },
                     { name: "Nikhil", icon: "💻", bg: "bg-blue-50" },
                     { name: "Prajakta", icon: "🎭", bg: "bg-amber-50" },
                     { name: "Tanmay", icon: "🎙️", bg: "bg-purple-50" },
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
                   <h3 className="font-bold text-gray-900">Niche Explorer</h3>
                </div>
                <div className="grid grid-cols-3 gap-2">
                   {[
                     { name: "Gaming", icon: "🎮", bg: "bg-blue-50" },
                     { name: "Fitness", icon: "💪", bg: "bg-emerald-50" },
                     { name: "Fashion", icon: "✨", bg: "bg-amber-50" },
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
            
            {/* Bottom Grid: Map + Mentors & News */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                 <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <MapPin className="w-6 h-6 text-pink-500" /> Find Creative Hubs & Studios Near You
                 </h2>
                 <div className="bg-white rounded-[32px] p-2 border border-gray-100 shadow-sm overflow-hidden h-[400px]">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15226.772596541607!2d78.43163351984242!3d17.426462719588267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sdance%20studios!5e0!3m2!1sen!2sin!4v1715694218654!5m2!1sen!2sin" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0, borderRadius: '24px' }} 
                      allowFullScreen={true} 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                 </div>
              </div>
              
              <div className="space-y-6">
                {/* Expert Mentors */}
                <div className="bg-white rounded-[32px] p-6 border border-gray-100 shadow-sm">
                   <h3 className="font-bold text-gray-900 mb-5 text-[15px]">Expert Mentors</h3>
                   <div className="space-y-4">
                     {mentors.map((mentor, i) => (
                       <div key={mentor._id || i} className="flex items-center gap-3 group cursor-pointer">
                         <img src={mentor.profilePicture || `https://api.dicebear.com/7.x/avataaars/svg?seed=${mentor.name}`} alt={mentor.name} className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100" />
                         <div className="flex-1">
                           <h4 className="font-bold text-gray-900 text-xs group-hover:text-pink-600 transition-colors">{mentor.name}</h4>
                           <p className="text-[10px] text-gray-500 font-medium">{mentor.role}</p>
                         </div>
                         <button className="text-[10px] font-bold text-pink-600 bg-pink-50 px-2.5 py-1.5 rounded-lg group-hover:bg-pink-600 group-hover:text-white transition-colors">
                           Book
                         </button>
                       </div>
                     ))}
                   </div>
                </div>

                {/* Latest News */}
                <div className="bg-white rounded-[32px] p-6 border border-gray-100 shadow-sm">
                   <h3 className="font-bold text-gray-900 mb-5 text-[15px]">Creator News</h3>
                   <div className="space-y-4">
                     {[
                       { title: "YouTube updates Shorts monetization", date: "2 hours ago", color: "text-red-500" },
                       { title: "Y Combinator announces W25 batch", date: "5 hours ago", color: "text-orange-500" },
                       { title: "New CapCut AI features released", date: "1 day ago", color: "text-blue-500" },
                     ].map((news, i) => (
                       <div key={i} className="flex gap-3 group cursor-pointer">
                         <div className="mt-1">
                           <Newspaper className={`w-4 h-4 ${news.color}`} />
                         </div>
                         <div>
                           <h4 className="font-semibold text-gray-800 text-[11px] leading-snug group-hover:text-pink-600 transition-colors mb-1">{news.title}</h4>
                           <p className="text-[9px] text-gray-400 font-medium uppercase tracking-wider">{news.date}</p>
                         </div>
                       </div>
                     ))}
                   </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </MainLayout>
  );
}
