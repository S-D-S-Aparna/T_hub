"use client";

import MainLayout from "@/components/layout/MainLayout";
import Link from "next/link";
import { ChevronRight, ArrowRight, Bot, Star, MapPin, Cpu, Shield, Palette, BrainCircuit, Cloud, Fingerprint, TrendingUp } from "lucide-react";

export default function EducationHome() {
  return (
    <MainLayout>
      {/* Education Journey Breadcrumb */}
      <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-gray-500 mb-6 overflow-x-auto pb-2">
        <Link href="/" className="hover:text-indigo-600 flex items-center gap-1">
           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
           <span className="hidden md:inline">Home</span>
        </Link>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span className="text-gray-800 font-medium border-b-2 border-indigo-600 pb-0.5">Education</span>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span className="text-gray-500">Select Level</span>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span className="text-gray-500">Choose Course</span>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span className="text-gray-500">Find College</span>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span className="text-gray-500">Build Career</span>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span className="text-gray-500">Success</span>
      </div>

      <div className="flex flex-col xl:flex-row gap-8 mb-10">
        
        {/* Main Content Area */}
        <div className="flex-1 space-y-8">
          
          {/* Hero Banner */}
          <div className="bg-gradient-to-r from-[#eef2ff] to-[#f5f3ff] rounded-[32px] p-8 md:p-12 border border-indigo-50 relative overflow-hidden flex flex-col md:flex-row items-center gap-6 shadow-sm">
            <div className="flex-1 z-10 relative">
              <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-950 mb-4 leading-[1.15]">
                Explore Your <br/><span className="text-[#5b21b6]">Educational Journey</span>
              </h1>
              <p className="text-indigo-900/70 mb-8 max-w-md text-sm md:text-base leading-relaxed font-medium">
                Discover the right courses, top colleges, entrance exams, scholarships and career opportunities.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#4f46e5] text-white px-8 py-3.5 rounded-2xl font-bold shadow-lg shadow-indigo-200/50 hover:bg-indigo-700 hover:-translate-y-0.5 transition-all">
                  Explore Levels
                </button>
              </div>
            </div>
            
            {/* Illustration */}
            <div className="w-full md:w-[45%] relative z-10 hidden md:block h-64">
               {/* 3D Illustration placeholder using dicebear + abstract shapes */}
               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#818cf8] via-[#c084fc] to-[#f472b6] rounded-full blur-[60px] opacity-20"></div>
               <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Aparna&backgroundColor=transparent" alt="Student Illustration" className="w-full h-full object-contain relative z-10 drop-shadow-2xl scale-125" />
            </div>
            
            <div className="absolute bottom-0 right-0 w-full h-full opacity-30 pointer-events-none">
                <svg viewBox="0 0 400 400" className="absolute right-0 bottom-0 text-indigo-200 w-96 h-96 transform translate-x-1/4 translate-y-1/4"><path fill="currentColor" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
            </div>
          </div>

          {/* Education Levels Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { title: "After 10th", desc: "Explore streams, diplomas, ITI, skills & more.", options: "150+ Options", color: "bg-[#16a34a]", icon: "🎒", href: "/education/after-10th" },
              { title: "After 12th", desc: "Discover degree courses across all fields.", options: "300+ Options", color: "bg-[#2563eb]", icon: "📚", href: "/education/after-12th" },
              { title: "Bachelor's", desc: "Explore UG degrees in various specializations.", options: "500+ Courses", color: "bg-[#7c3aed]", icon: "🎓", href: "/education/bachelors" },
              { title: "Master's", desc: "Advance your knowledge with PG programs.", options: "300+ Courses", color: "bg-[#ea580c]", icon: "👨‍🎓", href: "/education/masters" },
              { title: "PhD", desc: "Pursue research and become an expert.", options: "200+ Research Areas", color: "bg-[#db2777]", icon: "🏅", href: "/education/phd" }
            ].map((level, i) => (
              <Link href={level.href} key={i} className="bg-white rounded-[24px] p-5 border border-gray-100 shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-300 group flex flex-col h-full hover:-translate-y-1 block cursor-pointer">
                <div className="text-4xl mb-4 text-center">{level.icon}</div>
                <h3 className={`font-bold text-center text-lg mb-2 text-gray-900`}>{level.title}</h3>
                <p className="text-[11px] text-center text-gray-500 mb-4 flex-grow leading-relaxed px-1">{level.desc}</p>
                <div className="text-center mb-4"><span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">{level.options}</span></div>
                <button className={`w-full ${level.color} text-white font-bold text-xs py-2.5 rounded-xl flex items-center justify-center gap-1 shadow-md shadow-gray-200 hover:-translate-y-0.5 transition-transform pointer-events-none`}>
                  Explore <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </Link>
            ))}
          </div>

          {/* Features Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* AI Roadmap Generator */}
            <div className="bg-gradient-to-b from-[#f0f9ff] to-white rounded-[24px] p-5 border border-sky-100 shadow-sm hover:shadow-md transition-all cursor-pointer group" onClick={() => window.location.href='/roadmap'}>
              <h3 className="font-bold text-[#0369a1] mb-2">AI Roadmap Generator</h3>
              <p className="text-[11px] text-gray-500 mb-4 leading-relaxed">Generate your personalized education & career roadmap in just a few clicks.</p>
              <div className="flex items-end justify-between mt-auto">
                <span className="text-xs font-bold text-[#0284c7] flex items-center gap-1">Generate Now &rarr;</span>
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-xl group-hover:scale-110 transition-transform">📍</div>
              </div>
            </div>
            
            {/* Live Lectures */}
            <div className="bg-gradient-to-b from-[#f5f3ff] to-white rounded-[24px] p-5 border border-purple-100 shadow-sm hover:shadow-md transition-all cursor-pointer group" onClick={() => window.location.href='/mentors'}>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-[#6d28d9]">Live Lectures</h3>
                <span className="bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider animate-pulse">Live</span>
              </div>
              <p className="text-[11px] text-gray-500 mb-4 leading-relaxed">Join live classes & webinars by expert teachers and mentors.</p>
              <div className="flex items-end justify-between mt-auto">
                <span className="text-xs font-bold text-[#7c3aed] flex items-center gap-1">Join Now &rarr;</span>
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-xl group-hover:scale-110 transition-transform">💻</div>
              </div>
            </div>

            {/* Find Colleges */}
            <div className="bg-gradient-to-b from-[#ecfdf5] to-white rounded-[24px] p-5 border border-emerald-100 shadow-sm hover:shadow-md transition-all cursor-pointer group" onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=colleges+near+me', '_blank')}>
              <h3 className="font-bold text-[#047857] mb-2">Find Colleges</h3>
              <p className="text-[11px] text-gray-500 mb-4 leading-relaxed">Search top colleges, compare, review and get detailed information.</p>
              <div className="flex items-end justify-between mt-auto">
                <span className="text-xs font-bold text-[#059669] flex items-center gap-1">Explore Colleges &rarr;</span>
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-xl group-hover:scale-110 transition-transform">🏫</div>
              </div>
            </div>

            {/* Scholarships */}
            <div className="bg-gradient-to-b from-[#fffbeb] to-white rounded-[24px] p-5 border border-amber-100 shadow-sm hover:shadow-md transition-all cursor-pointer group" onClick={() => window.location.href='/scholarships'}>
              <h3 className="font-bold text-[#b45309] mb-2">Scholarships</h3>
              <p className="text-[11px] text-gray-500 mb-4 leading-relaxed">Find top scholarships and financial aid opportunities.</p>
              <div className="flex items-end justify-between mt-auto">
                <span className="text-xs font-bold text-[#d97706] flex items-center gap-1">Explore Now &rarr;</span>
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-xl group-hover:scale-110 transition-transform">🏆</div>
              </div>
            </div>
          </div>

          {/* Trending Courses */}
          <div className="bg-white rounded-[24px] p-6 border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-6">Trending Courses</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-4">
              {[
                { name: "Data Science", icon: BrainCircuit, color: "text-green-500", bg: "bg-green-50" },
                { name: "Artificial Intelligence", icon: Cpu, color: "text-indigo-500", bg: "bg-indigo-50" },
                { name: "Cyber Security", icon: Shield, color: "text-rose-500", bg: "bg-rose-50" },
                { name: "Cloud Computing", icon: Cloud, color: "text-blue-500", bg: "bg-blue-50" },
                { name: "Digital Marketing", icon: TrendingUp, color: "text-purple-500", bg: "bg-purple-50" },
                { name: "Robotics", icon: Bot, color: "text-violet-500", bg: "bg-violet-50" },
                { name: "UI/UX Design", icon: Palette, color: "text-sky-500", bg: "bg-sky-50" },
                { name: "Biotechnology", icon: Fingerprint, color: "text-amber-500", bg: "bg-amber-50" },
              ].map((course, i) => (
                <div key={i} className="flex flex-col items-center gap-3 cursor-pointer group hover:-translate-y-1 transition-transform">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border border-gray-100 ${course.bg} group-hover:shadow-md transition-shadow`}>
                    <course.icon className={`w-6 h-6 ${course.color}`} strokeWidth={1.5} />
                  </div>
                  <span className="text-[10px] font-semibold text-gray-600 text-center leading-tight group-hover:text-indigo-600">{course.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Upcoming Exams */}
            <div className="bg-white rounded-[24px] p-6 border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                 <h3 className="font-bold text-gray-900">Upcoming Exams</h3>
              </div>
              <div className="grid grid-cols-4 gap-2">
                 {[
                   { name: "JEE Main", date: "Jan 2025", icon: "📐", bg: "bg-emerald-50", color: "text-emerald-700" },
                   { name: "NEET UG", date: "May 2025", icon: "🩺", bg: "bg-blue-50", color: "text-blue-700" },
                   { name: "CUET UG", date: "May 2025", icon: "🏛️", bg: "bg-amber-50", color: "text-amber-700" },
                   { name: "CLAT 2025", date: "Dec 2024", icon: "⚖️", bg: "bg-rose-50", color: "text-rose-700" },
                 ].map((exam, i) => (
                   <div key={i} className="flex flex-col items-center gap-2 cursor-pointer group">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${exam.bg} group-hover:shadow-md transition-shadow`}>{exam.icon}</div>
                      <div className="text-center">
                        <p className="text-[10px] font-bold text-gray-800">{exam.name}</p>
                        <p className="text-[9px] font-medium text-gray-500">{exam.date}</p>
                      </div>
                   </div>
                 ))}
              </div>
            </div>

            {/* Top Scholarships */}
            <div className="bg-white rounded-[24px] p-6 border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                 <h3 className="font-bold text-gray-900">Top Scholarships</h3>
              </div>
              <div className="grid grid-cols-4 gap-2">
                 {[
                   { name: "Central Govt.", icon: "🏛️", bg: "bg-emerald-50" },
                   { name: "State Govt.", icon: "🗺️", bg: "bg-blue-50" },
                   { name: "Merit Based", icon: "⭐", bg: "bg-amber-50" },
                   { name: "Women", icon: "👩‍🎓", bg: "bg-purple-50" },
                 ].map((schol, i) => (
                   <div key={i} className="flex flex-col items-center gap-2 cursor-pointer group">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${schol.bg} group-hover:shadow-md transition-shadow`}>{schol.icon}</div>
                      <div className="text-center">
                        <p className="text-[10px] font-bold text-gray-800">{schol.name}</p>
                      </div>
                   </div>
                 ))}
              </div>
            </div>

            {/* Career Explorer */}
            <div className="bg-white rounded-[24px] p-6 border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                 <h3 className="font-bold text-gray-900">Career Explorer</h3>
              </div>
              <div className="grid grid-cols-3 gap-2">
                 {[
                   { name: "Data Scientist", icon: "📊", bg: "bg-blue-50" },
                   { name: "Doctor", icon: "👨‍⚕️", bg: "bg-emerald-50" },
                   { name: "IAS Officer", icon: "🏛️", bg: "bg-amber-50" },
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

          {/* Find Institutes Map */}
          <div className="mt-8">
             <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-indigo-500" /> Find Educational Institutions Near You
             </h2>
             <div className="bg-white rounded-[24px] p-2 border border-gray-100 shadow-sm overflow-hidden h-[400px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15226.772596541607!2d78.43163351984242!3d17.426462719588267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1stop%20colleges%20and%20schools!5e0!3m2!1sen!2sin!4v1715694218654!5m2!1sen!2sin" 
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

        {/* Right Sidebar */}
        <div className="w-full xl:w-[320px] space-y-6">
          
          {/* AI Assistant */}
          <div className="bg-white rounded-3xl p-6 border border-indigo-100 shadow-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/80 to-purple-50/80 z-0"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform group-hover:shadow-md">
                  <Bot className="w-6 h-6 text-[#4f46e5]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 flex items-center gap-1 text-lg">Be You AI Assistant <span className="text-yellow-500">✨</span></h3>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-6 font-medium">Your smart guide for courses, colleges, exams and careers.</p>
              
              <div className="space-y-3 mb-6">
                <p className="text-[11px] font-bold text-indigo-400 uppercase tracking-wider">Try asking me...</p>
                <div className="bg-white border border-indigo-50 rounded-xl p-3.5 text-xs font-medium text-gray-700 hover:border-indigo-300 hover:shadow-sm cursor-pointer transition-all flex items-center justify-between group/q" onClick={() => window.location.href='/chat'}>
                  <span>Best courses after 12th PCM</span>
                  <ArrowRight className="w-3.5 h-3.5 text-indigo-300 group-hover/q:text-indigo-600 group-hover/q:translate-x-1 transition-all" />
                </div>
                <div className="bg-white border border-indigo-50 rounded-xl p-3.5 text-xs font-medium text-gray-700 hover:border-indigo-300 hover:shadow-sm cursor-pointer transition-all flex items-center justify-between group/q" onClick={() => window.location.href='/chat'}>
                  <span>Top BCA colleges in Hyderabad</span>
                  <ArrowRight className="w-3.5 h-3.5 text-indigo-300 group-hover/q:text-indigo-600 group-hover/q:translate-x-1 transition-all" />
                </div>
                <div className="bg-white border border-indigo-50 rounded-xl p-3.5 text-xs font-medium text-gray-700 hover:border-indigo-300 hover:shadow-sm cursor-pointer transition-all flex items-center justify-between group/q" onClick={() => window.location.href='/chat'}>
                  <span>Generate roadmap for Data Scientist</span>
                  <ArrowRight className="w-3.5 h-3.5 text-indigo-300 group-hover/q:text-indigo-600 group-hover/q:translate-x-1 transition-all" />
                </div>
              </div>
              
              <button className="w-full bg-[#4f46e5] text-white font-bold py-3.5 rounded-xl shadow-md shadow-indigo-200 hover:bg-indigo-700 hover:-translate-y-0.5 transition-all" onClick={() => window.location.href='/chat'}>
                Chat with AI &rarr;
              </button>
            </div>
          </div>

          {/* Connect with Mentors */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-gray-900 text-lg">Connect with Mentors</h3>
              
            </div>
            
            <div className="space-y-4">
              {[
                { name: "Prof. Neha Sharma", role: "Education Mentor", rating: "4.9 (125)", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Neha" },
                { name: "Rahul Verma", role: "Software Engineer, Google", rating: "4.8 (210)", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul" },
                { name: "Dr. Priya Iyer", role: "Career Counselor", rating: "4.9 (156)", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya" }
              ].map((mentor, i) => (
                <div key={i} className="flex items-center gap-3 pb-4 border-b border-gray-50 last:border-0 last:pb-0 hover:bg-gray-50 p-2 -mx-2 rounded-xl transition-colors cursor-pointer group">
                  <div className="w-12 h-12 rounded-full bg-indigo-50 overflow-hidden flex-shrink-0 border border-indigo-100">
                    <img src={mentor.img} alt={mentor.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-[13px] text-gray-800 leading-tight mb-0.5">{mentor.name}</h4>
                    <p className="text-[11px] text-gray-500 mb-1 line-clamp-1">{mentor.role}</p>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" /> 
                      <span className="text-[10px] font-bold text-gray-600">{mentor.rating}</span>
                    </div>
                  </div>
                  <button className="bg-white border border-indigo-100 text-indigo-600 font-bold text-[11px] px-3 py-1.5 rounded-lg shadow-sm hover:bg-indigo-50 transition-colors">
                    Book
                  </button>
                </div>
              ))}
            </div>
          </div>
          

          
        </div>
      </div>
    </MainLayout>
  );
}
