"use client";

import SportsLayout from "@/components/layout/SportsLayout";
import Link from "next/link";
import { 
  ChevronRight, ArrowRight, MapPin, Star, Bot, Calendar, Activity, 
  Trophy, Building2, Users, Map, Award, Apple, Compass, 
  Flame, Droplet, Medal, Target
} from "lucide-react";

const allSports = [
  { name: "Cricket", icon: "🏏", desc: "Bat & Ball Team Sport", href: "/sports/cricket", color: "bg-[#2563eb]" },
  { name: "Badminton", icon: "🏸", desc: "Racquet Sport", href: "/sports/badminton", color: "bg-[#16a34a]" },
  { name: "Kabaddi", icon: "🏃‍♂️", desc: "Contact Team Sport", href: "/sports/kabaddi", color: "bg-[#ea580c]" },
  { name: "Football", icon: "⚽", desc: "Team Sport", href: "/sports/football", color: "bg-[#7c3aed]" },
  { name: "Athletics", icon: "🏃", desc: "Track & Field", href: "/sports/athletics", color: "bg-[#db2777]" },
  { name: "Wrestling", icon: "🤼", desc: "Combat Sport", href: "/sports/wrestling", color: "bg-[#ca8a04]" },
  { name: "Boxing", icon: "🥊", desc: "Combat Sport", href: "/sports/boxing", color: "bg-[#dc2626]" },
  { name: "Hockey", icon: "🏑", desc: "Field Team Sport", href: "/sports/hockey", color: "bg-[#0891b2]" },
  { name: "Archery", icon: "🏹", desc: "Precision Sport", href: "/sports/archery", color: "bg-[#65a30d]" },
  { name: "Shooting", icon: "🔫", desc: "Precision Sport", href: "/sports/shooting", color: "bg-[#4f46e5]" }
];

export default function SportsHome() {
  return (
    <SportsLayout>
      {/* Breadcrumb Journey */}
      <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-gray-500 mb-6 overflow-x-auto pb-2 hide-scrollbar">
        <Link href="/" className="hover:text-indigo-600 flex items-center gap-1">
           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
           <span className="hidden md:inline">Home</span>
        </Link>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span className="text-gray-800 font-medium border-b-2 border-indigo-600 pb-0.5">Sports</span>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span className="text-gray-500">Choose Sport</span>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span className="text-gray-500">Find Academy</span>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span className="text-gray-500">Train & Improve</span>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span className="text-gray-500">Compete & Achieve</span>
      </div>

      <div className="flex flex-col xl:flex-row gap-8 mb-10">
        
        {/* Main Content Area */}
        <div className="flex-1 space-y-8">
          
          {/* Hero Banner */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-[32px] p-8 md:p-12 border border-emerald-100 relative overflow-hidden flex flex-col md:flex-row items-center gap-6 shadow-sm">
            <div className="flex-1 z-10 relative">
              <h1 className="text-4xl md:text-5xl font-extrabold text-teal-950 mb-4 leading-[1.15]">
                Build Your <br/><span className="text-emerald-600">Sports Career Journey</span>
              </h1>
              <p className="text-teal-900/70 mb-8 max-w-md text-sm md:text-base leading-relaxed font-medium">
                Choose your sport, find the best academies, track your fitness, and become a champion.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-emerald-600 text-white px-8 py-3.5 rounded-2xl font-bold shadow-lg shadow-emerald-200/50 hover:bg-emerald-700 hover:-translate-y-0.5 transition-all">
                  Explore Sports
                </button>
                <button className="bg-white text-emerald-600 px-8 py-3.5 rounded-2xl font-bold shadow-md shadow-gray-200/50 hover:bg-emerald-50 hover:-translate-y-0.5 transition-all flex items-center gap-2 group border border-gray-100">
                  Talent Discovery 🎯
                </button>
              </div>
            </div>
            
            {/* Animated Illustration */}
            <div className="w-full md:w-96 relative z-10 hidden md:block">
              <div className="relative w-full h-64 overflow-visible flex items-center justify-center">
                {/* Decorative background glow */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-emerald-300 via-teal-300 to-green-300 rounded-full blur-[60px] opacity-30"></div>
                
                {/* Custom Avatar for Sports */}
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=SportsStar&style=circle&backgroundColor=transparent" alt="Athlete" className="w-48 h-48 relative z-10 drop-shadow-2xl bg-emerald-100 rounded-full border-4 border-white shadow-xl" />
                
                {/* Floating Elements (Bouncing) */}
                <div className="absolute top-4 left-4 bg-white p-2.5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-2 animate-bounce delay-100 z-20">
                  <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                    <Trophy className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold text-gray-800 pr-1">Champion</span>
                </div>
                
                <div className="absolute bottom-8 left-0 bg-white p-2.5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-2 animate-bounce delay-300 z-20">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <Medal className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold text-gray-800 pr-1">Olympics</span>
                </div>
                
                <div className="absolute top-16 right-0 bg-white p-2.5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-2 animate-bounce delay-500 z-20">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                     <Target className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold text-gray-800 pr-1">Focus</span>
                </div>
              </div>
            </div>
          </div>

          {/* Choose Your Sport Grid */}
          <div>
             <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Sport</h2>
             <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {allSports.map((sport, i) => (
                  <Link href={sport.href} key={i} className="bg-white rounded-[24px] p-5 border border-gray-100 shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-300 group flex flex-col h-full hover:-translate-y-1 block cursor-pointer">
                    <div className="text-4xl mb-4 text-center">{sport.icon}</div>
                    <h3 className={`font-bold text-center text-lg mb-2 text-gray-900`}>{sport.name}</h3>
                    <p className="text-[11px] text-center text-gray-500 mb-4 flex-grow leading-relaxed px-1">{sport.desc}</p>
                    <button className={`w-full ${sport.color} text-white font-bold text-xs py-2.5 rounded-xl flex items-center justify-center gap-1 shadow-md shadow-gray-200 hover:-translate-y-0.5 transition-transform pointer-events-none`}>
                      Explore <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </Link>
                ))}
             </div>
          </div>

          {/* Features Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gradient-to-b from-[#f0fdf4] to-white rounded-[24px] p-5 border border-green-100 shadow-sm hover:shadow-md transition-all cursor-pointer group">
              <h3 className="font-bold text-[#166534] mb-2">Sports Academies</h3>
              <p className="text-[11px] text-gray-500 mb-4 leading-relaxed">Find top training centers and academies near your location.</p>
              <div className="flex items-end justify-between mt-auto">
                <span className="text-xs font-bold text-[#15803d] flex items-center gap-1">Find Academies &rarr;</span>
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-xl group-hover:scale-110 transition-transform">🏫</div>
              </div>
            </div>
            
            <div className="bg-gradient-to-b from-[#fef2f2] to-white rounded-[24px] p-5 border border-red-100 shadow-sm hover:shadow-md transition-all cursor-pointer group" onClick={() => window.location.href='/mentors'}>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-[#991b1b]">Coaches & Mentors</h3>
              </div>
              <p className="text-[11px] text-gray-500 mb-4 leading-relaxed">Connect with expert coaches for personalized training programs.</p>
              <div className="flex items-end justify-between mt-auto">
                <span className="text-xs font-bold text-[#b91c1c] flex items-center gap-1">Find Coaches &rarr;</span>
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-xl group-hover:scale-110 transition-transform">👨‍🏫</div>
              </div>
            </div>

            <div className="bg-gradient-to-b from-[#eff6ff] to-white rounded-[24px] p-5 border border-blue-100 shadow-sm hover:shadow-md transition-all cursor-pointer group" onClick={() => window.location.href='/scholarships'}>
              <h3 className="font-bold text-[#1e3a8a] mb-2">Sports Scholarships</h3>
              <p className="text-[11px] text-gray-500 mb-4 leading-relaxed">Discover financial aid, government schemes, and sports quotas.</p>
              <div className="flex items-end justify-between mt-auto">
                <span className="text-xs font-bold text-[#1d4ed8] flex items-center gap-1">Explore Funding &rarr;</span>
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-xl group-hover:scale-110 transition-transform">🏆</div>
              </div>
            </div>

            <div className="bg-gradient-to-b from-[#fffbeb] to-white rounded-[24px] p-5 border border-amber-100 shadow-sm hover:shadow-md transition-all cursor-pointer group">
              <h3 className="font-bold text-[#92400e] mb-2">Tournaments</h3>
              <p className="text-[11px] text-gray-500 mb-4 leading-relaxed">Register for upcoming district, state, and national tournaments.</p>
              <div className="flex items-end justify-between mt-auto">
                <span className="text-xs font-bold text-[#b45309] flex items-center gap-1">View Calendar &rarr;</span>
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-xl group-hover:scale-110 transition-transform">📅</div>
              </div>
            </div>
          </div>
          
          {/* Find Academies Map */}
          <div className="mt-8">
             <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-red-500" /> Find Sports Academies Near You
             </h2>
             <div className="bg-white rounded-[24px] p-2 border border-gray-100 shadow-sm overflow-hidden h-[400px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15226.772596541607!2d78.43163351984242!3d17.426462719588267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1ssports%20academies!5e0!3m2!1sen!2sin!4v1715694218654!5m2!1sen!2sin" 
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
          <div className="bg-white rounded-3xl p-6 border border-emerald-100 shadow-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/80 to-teal-50/80 z-0"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform group-hover:shadow-md">
                  <Bot className="w-6 h-6 text-[#059669]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 flex items-center gap-1 text-lg">Sports AI Coach <span className="text-yellow-500">✨</span></h3>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-6 font-medium">Your smart guide for academies, training, and sports careers.</p>
              
              <div className="space-y-3 mb-6">
                <p className="text-[11px] font-bold text-emerald-500 uppercase tracking-wider">Try asking me...</p>
                <div className="bg-white border border-emerald-50 rounded-xl p-3.5 text-xs font-medium text-gray-700 hover:border-emerald-300 hover:shadow-sm cursor-pointer transition-all flex items-center justify-between group/q" onClick={() => window.location.href='/chat'}>
                  <span>How to get selected in Ranji Trophy?</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-300 group-hover/q:text-emerald-600 group-hover/q:translate-x-1 transition-all" />
                </div>
                <div className="bg-white border border-emerald-50 rounded-xl p-3.5 text-xs font-medium text-gray-700 hover:border-emerald-300 hover:shadow-sm cursor-pointer transition-all flex items-center justify-between group/q" onClick={() => window.location.href='/chat'}>
                  <span>Best Badminton Academies in India</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-300 group-hover/q:text-emerald-600 group-hover/q:translate-x-1 transition-all" />
                </div>
                <div className="bg-white border border-emerald-50 rounded-xl p-3.5 text-xs font-medium text-gray-700 hover:border-emerald-300 hover:shadow-sm cursor-pointer transition-all flex items-center justify-between group/q" onClick={() => window.location.href='/chat'}>
                  <span>Nutrition plan for a footballer</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-300 group-hover/q:text-emerald-600 group-hover/q:translate-x-1 transition-all" />
                </div>
              </div>
              
              <button className="w-full bg-[#059669] text-white font-bold py-3.5 rounded-xl shadow-md shadow-emerald-200 hover:bg-emerald-700 hover:-translate-y-0.5 transition-all" onClick={() => window.location.href='/chat'}>
                Chat with AI Coach &rarr;
              </button>
            </div>
          </div>
          
          {/* Daily Fitness Summary */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-gray-900">Daily Fitness Tracker</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               <div className="flex flex-col items-center p-3 bg-gray-50 rounded-2xl border border-gray-100">
                 <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center mb-2 shadow-sm border border-blue-100">
                   <Activity className="w-5 h-5" />
                 </div>
                 <span className="font-bold text-gray-900 text-sm">7,245</span>
                 <span className="text-[10px] font-medium text-gray-500">Steps</span>
               </div>
               <div className="flex flex-col items-center p-3 bg-gray-50 rounded-2xl border border-gray-100">
                 <div className="w-10 h-10 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center mb-2 shadow-sm border border-orange-100">
                   <Flame className="w-5 h-5 fill-current" />
                 </div>
                 <span className="font-bold text-gray-900 text-sm">512</span>
                 <span className="text-[10px] font-medium text-gray-500">Calories</span>
               </div>
               <div className="flex flex-col items-center p-3 bg-gray-50 rounded-2xl border border-gray-100">
                 <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center mb-2 shadow-sm border border-green-100">
                   🏃
                 </div>
                 <span className="font-bold text-gray-900 text-sm">45 Min</span>
                 <span className="text-[10px] font-medium text-gray-500">Workout</span>
               </div>
               <div className="flex flex-col items-center p-3 bg-gray-50 rounded-2xl border border-gray-100">
                 <div className="w-10 h-10 rounded-full bg-cyan-50 text-cyan-500 flex items-center justify-center mb-2 shadow-sm border border-cyan-100">
                   <Droplet className="w-5 h-5 fill-current" />
                 </div>
                 <span className="font-bold text-gray-900 text-sm">2.1 L</span>
                 <span className="text-[10px] font-medium text-gray-500">Water</span>
               </div>
            </div>
          </div>
          
          {/* Motivation Quote */}
          <div className="bg-white rounded-3xl p-5 border border-amber-100 shadow-sm flex items-center gap-4 relative overflow-hidden group cursor-pointer hover:shadow-md transition-all">
             <div className="absolute inset-0 bg-gradient-to-r from-amber-50/50 to-white z-0"></div>
             <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 z-10 border border-yellow-200 group-hover:scale-110 transition-transform shadow-inner">
               <Trophy className="w-6 h-6 text-yellow-600" />
             </div>
             <div className="z-10">
               <h4 className="font-bold text-gray-900 text-sm leading-tight mb-1">Champions keep playing until they get it right.</h4>
               <p className="text-[11px] font-bold text-amber-600">Keep pushing!</p>
             </div>
          </div>

        </div>
      </div>
    </SportsLayout>
  );
}
