"use client";

import SportsLayout from "@/components/layout/SportsLayout";
import Link from "next/link";
import { 
  ChevronRight, ArrowRight, Bot, Star, Building2, MapPin, Target, Activity, 
  Trophy, Medal, Users, Calendar, ShieldCheck, Dumbbell, BookOpen
} from "lucide-react";

export default function CricketCareerPage() {
  return (
    <SportsLayout>
      {/* Breadcrumb Journey */}
      <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-gray-500 mb-6 overflow-x-auto pb-2 hide-scrollbar">
        <Link href="/" className="hover:text-blue-600 flex items-center gap-1">
           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
           <span className="hidden md:inline">Home</span>
        </Link>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <Link href="/sports" className="hover:text-blue-600 font-medium">Sports</Link>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span className="text-gray-800 font-medium border-b-2 border-blue-600 pb-0.5">Cricket</span>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span className="text-gray-500">Selection Roadmap</span>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span className="text-gray-500">Top Academies</span>
      </div>

      <div className="flex flex-col xl:flex-row gap-8 mb-10">
        
        {/* Main Content Area */}
        <div className="flex-1 space-y-8">
          
          {/* Hero Banner */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-[32px] p-8 md:p-12 border border-blue-100 relative overflow-hidden flex flex-col md:flex-row items-center gap-6 shadow-sm">
            <div className="flex-1 z-10 relative">
              <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-4 leading-[1.15]">
                Master the Game <br/><span className="text-blue-600">Your Cricket Journey</span>
              </h1>
              <p className="text-blue-900/70 mb-8 max-w-md text-sm md:text-base leading-relaxed font-medium">
                From street cricket to the stadium. Discover the definitive roadmap, top academies, and skills required to become a professional cricketer.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-blue-600 text-white px-8 py-3.5 rounded-2xl font-bold shadow-lg shadow-blue-200/50 hover:bg-blue-700 hover:-translate-y-0.5 transition-all">
                  Start Training
                </button>
              </div>
            </div>
            
            {/* Animated Illustration */}
            <div className="w-full md:w-96 relative z-10 hidden md:block">
              <div className="relative w-full h-64 overflow-visible flex items-center justify-center">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-300 via-indigo-300 to-cyan-300 rounded-full blur-[60px] opacity-30"></div>
                
                {/* Cricketer Avatar */}
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=CricketStar&style=circle&backgroundColor=transparent&accessories=sunglasses" alt="Cricketer" className="w-48 h-48 relative z-10 drop-shadow-2xl bg-blue-100 rounded-full border-4 border-white shadow-xl" />
                
                {/* Floating Elements (Bouncing) */}
                <div className="absolute top-4 left-4 bg-white p-2.5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-2 animate-bounce delay-100 z-20">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-lg">
                    🏏
                  </div>
                  <span className="text-[10px] font-bold text-gray-800 pr-1">Batsman</span>
                </div>
                
                <div className="absolute bottom-8 left-0 bg-white p-2.5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-2 animate-bounce delay-300 z-20">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-lg">
                    ⚾
                  </div>
                  <span className="text-[10px] font-bold text-gray-800 pr-1">Bowler</span>
                </div>
                
                <div className="absolute top-16 right-0 bg-white p-2.5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-2 animate-bounce delay-500 z-20">
                  <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                     <Trophy className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold text-gray-800 pr-1">World Cup</span>
                </div>
              </div>
            </div>
          </div>

          {/* Specializations Grid */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Role</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               {[
                 { role: "Batsman", desc: "Master the art of scoring runs", icon: "🏏", bg: "bg-blue-50", color: "text-blue-600" },
                 { role: "Pace Bowler", desc: "Speed and swing specialists", icon: "🔥", bg: "bg-red-50", color: "text-red-600" },
                 { role: "Spin Bowler", desc: "Deception and turn", icon: "🌪️", bg: "bg-purple-50", color: "text-purple-600" },
                 { role: "Wicket Keeper", desc: "Agility and reflexes", icon: "🧤", bg: "bg-green-50", color: "text-green-600" },
               ].map((item, i) => (
                 <div key={i} className="bg-white rounded-[24px] p-5 border border-gray-100 shadow-sm hover:shadow-xl hover:border-gray-200 transition-all cursor-pointer flex flex-col h-full group hover:-translate-y-1">
                    <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>{item.icon}</div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{item.role}</h3>
                    <p className="text-[11px] text-gray-500 flex-grow">{item.desc}</p>
                 </div>
               ))}
            </div>
          </div>

          {/* The Roadmap Stepper */}
          <div className="bg-white rounded-[24px] p-6 md:p-8 border border-gray-100 shadow-sm">
             <h2 className="text-2xl font-bold text-gray-900 mb-8">Professional Cricket Roadmap</h2>
             <div className="relative">
                <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 rounded-full hidden md:block"></div>
                <div className="absolute top-1/2 left-0 w-3/4 h-1 bg-blue-600 -translate-y-1/2 rounded-full hidden md:block z-0"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
                   {[
                     { step: "Step 1", title: "Club Cricket", desc: "Join a local club/academy", status: "completed" },
                     { step: "Step 2", title: "District Level", desc: "Play U-14/U-16 District trials", status: "completed" },
                     { step: "Step 3", title: "State Level (Ranji)", desc: "Represent your state team", status: "active" },
                     { step: "Step 4", title: "National Level", desc: "Play for Team India", status: "pending" },
                   ].map((phase, i) => (
                     <div key={i} className="bg-white p-5 rounded-2xl border-2 shadow-sm transition-transform hover:-translate-y-1 cursor-pointer
                        ${phase.status === 'completed' ? 'border-blue-200 shadow-blue-100' : phase.status === 'active' ? 'border-blue-600 shadow-md shadow-blue-200' : 'border-gray-100 opacity-70'}">
                        <div className="flex items-center justify-between mb-3">
                           <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${phase.status === 'completed' ? 'bg-blue-100 text-blue-700' : phase.status === 'active' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-500'}`}>
                             {phase.step}
                           </span>
                           {phase.status === 'completed' && <ShieldCheck className="w-5 h-5 text-blue-600" />}
                           {phase.status === 'active' && <Target className="w-5 h-5 text-blue-600" />}
                        </div>
                        <h4 className="font-bold text-gray-900 mb-1.5">{phase.title}</h4>
                        <p className="text-[11px] text-gray-500 leading-relaxed">{phase.desc}</p>
                     </div>
                   ))}
                </div>
             </div>
          </div>

          {/* Bottom Grid: 2 Columns -> 4 Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
             {/* Top Academies */}
             <div className="bg-white rounded-[24px] p-6 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
                   <Building2 className="w-5 h-5 text-blue-600" /> Top Cricket Academies
                </h3>
                <div className="space-y-4">
                   {[
                     { name: "National Cricket Academy (NCA)", loc: "Bengaluru, Karnataka", type: "BCCI Official" },
                     { name: "Sehwag Cricket Academy", loc: "Jhajjar, Haryana", type: "Private" },
                     { name: "Karnataka Institute of Cricket (KIOC)", loc: "Bengaluru, Karnataka", type: "Private" },
                     { name: "Madan Lal Cricket Academy", loc: "New Delhi, Delhi", type: "Private" },
                   ].map((inst, i) => (
                     <div key={i} className="flex gap-4 p-3 rounded-xl border border-gray-50 hover:bg-blue-50 hover:border-blue-100 transition-colors cursor-pointer group">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                           <Trophy className="w-5 h-5" />
                        </div>
                        <div>
                           <h4 className="font-bold text-gray-900 text-[13px] group-hover:text-blue-700">{inst.name}</h4>
                           <p className="text-[11px] text-gray-500 mb-1">{inst.loc}</p>
                           <span className="text-[9px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">{inst.type}</span>
                        </div>
                     </div>
                   ))}
                </div>
             </div>

             {/* Core Skills & Diet */}
             <div className="grid grid-cols-1 gap-6">
                <div className="bg-white rounded-[24px] p-6 border border-gray-100 shadow-sm">
                   <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Dumbbell className="w-5 h-5 text-indigo-600" /> Physical Requirements
                   </h3>
                   <div className="flex flex-wrap gap-2">
                      {["Core Strength", "Hand-Eye Coordination", "Stamina", "Agility", "Shoulder Strength", "Reflexes", "Endurance"].map((skill, i) => (
                         <span key={i} className="bg-indigo-50 text-indigo-700 text-xs font-semibold px-3 py-1.5 rounded-lg border border-indigo-100">{skill}</span>
                      ))}
                   </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-[24px] p-6 border border-green-100 shadow-sm">
                   <h3 className="font-bold text-green-900 mb-4 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-green-600" /> Essential Nutrition
                   </h3>
                   <div className="space-y-2 text-[11px] text-gray-700 font-medium">
                      <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> High Protein for muscle recovery (Eggs, Chicken, Soy).</p>
                      <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Complex Carbs for long match energy (Oats, Sweet Potato).</p>
                      <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Hydration strategy (Electrolytes every 15 overs).</p>
                   </div>
                </div>
             </div>
          </div>
          
        </div>

        {/* Right Sidebar */}
        <div className="w-full xl:w-[320px] space-y-6">
          
          {/* AI Assistant */}
          <div className="bg-white rounded-3xl p-6 border border-blue-100 shadow-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-indigo-50/80 z-0"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform group-hover:shadow-md">
                  <Bot className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 flex items-center gap-1 text-lg">Cricket AI Coach <span className="text-yellow-500">✨</span></h3>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-6 font-medium">Ask me about batting techniques, trial dates, or fitness.</p>
              
              <div className="space-y-3 mb-6">
                <div className="bg-white border border-blue-50 rounded-xl p-3.5 text-xs font-medium text-gray-700 hover:border-blue-300 hover:shadow-sm cursor-pointer transition-all flex items-center justify-between group/q" onClick={() => window.location.href='/chat'}>
                  <span>How to improve bat swing?</span>
                  <ArrowRight className="w-3.5 h-3.5 text-blue-300 group-hover/q:text-blue-600 group-hover/q:translate-x-1 transition-all" />
                </div>
                <div className="bg-white border border-blue-50 rounded-xl p-3.5 text-xs font-medium text-gray-700 hover:border-blue-300 hover:shadow-sm cursor-pointer transition-all flex items-center justify-between group/q" onClick={() => window.location.href='/chat'}>
                  <span>When are the U-16 trials?</span>
                  <ArrowRight className="w-3.5 h-3.5 text-blue-300 group-hover/q:text-blue-600 group-hover/q:translate-x-1 transition-all" />
                </div>
              </div>
              
              <button className="w-full bg-blue-600 text-white font-bold py-3.5 rounded-xl shadow-md shadow-blue-200 hover:bg-blue-700 hover:-translate-y-0.5 transition-all">
                Ask Coach &rarr;
              </button>
            </div>
          </div>
          
          {/* Salary Insights */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
             <h3 className="font-bold text-gray-900 mb-5">Earnings & Salary Insights</h3>
             
             <div className="relative border-l-2 border-indigo-100 ml-3 space-y-6">
                <div className="relative pl-5">
                   <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[7px] top-1.5 border-2 border-white"></div>
                   <h4 className="font-bold text-gray-900 text-sm">Domestic Level (Ranji)</h4>
                   <p className="text-[11px] text-gray-500 mb-1">Match Fees + Contracts</p>
                   <p className="text-xs font-bold text-emerald-600">₹40,000 - ₹60,000 / day</p>
                </div>
                <div className="relative pl-5">
                   <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[7px] top-1.5 border-2 border-white"></div>
                   <h4 className="font-bold text-gray-900 text-sm">IPL Player</h4>
                   <p className="text-[11px] text-gray-500 mb-1">Auction Value + Match Fees</p>
                   <p className="text-xs font-bold text-emerald-600">₹20 Lakhs - ₹15+ Crores</p>
                </div>
                <div className="relative pl-5">
                   <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[7px] top-1.5 border-2 border-white"></div>
                   <h4 className="font-bold text-gray-900 text-sm">International (BCCI Contract)</h4>
                   <p className="text-[11px] text-gray-500 mb-1">Grade A+, A, B, C Contracts</p>
                   <p className="text-xs font-bold text-emerald-600">₹1 Cr - ₹7 Cr / Year</p>
                </div>
             </div>
          </div>
          
          {/* Success Story */}
          <div className="bg-white rounded-3xl p-1 border border-amber-200 shadow-sm overflow-hidden group cursor-pointer">
             <div className="bg-amber-50 rounded-[22px] p-5 relative overflow-hidden">
                <div className="absolute -right-4 -bottom-4 opacity-10">
                   <Trophy className="w-24 h-24 text-amber-900" />
                </div>
                <h3 className="font-bold text-amber-900 text-sm mb-4">Legendary Inspiration</h3>
                <div className="flex gap-3">
                   <img src="/images/athletes/virat_kohli.jpg" alt="Virat" className="w-14 h-14 bg-white rounded-full shadow-sm border-2 border-white object-cover" />
                   <div>
                      <h4 className="font-bold text-gray-900 text-[13px]">Virat Kohli</h4>
                      <p className="text-[10px] text-gray-600 font-medium mb-1">Former India Captain</p>
                      <p className="text-[10px] text-gray-700 leading-snug">"Self-belief and hard work will always earn you success."</p>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </SportsLayout>
  );
}
