"use client";

import MainLayout from "@/components/layout/MainLayout";
import Link from "next/link";
import { ChevronRight, GraduationCap, ArrowRight, Bot, Star, Building2, MapPin, IndianRupee, Cpu, BookOpen, Activity, HeartPulse, Target, Briefcase, Award, Shield, Palette, Wrench, Calculator, Globe } from "lucide-react";

const pathways = [
  { title: "Intermediate", duration: "(1st & 2nd Year)", desc: "MPC, BiPC, MEC, CEC, HEC & more streams", count: "18+ Streams", color: "bg-indigo-600", icon: GraduationCap, href: "/education/after-10th/intermediate" },
  { title: "Polytechnic Diploma", duration: "", desc: "Engineering diploma in various branches", count: "150+ Courses", color: "bg-blue-600", icon: Building2, href: "/education/after-10th/polytechnic" },
  { title: "ITI Courses", duration: "", desc: "Industrial Training Institute programs", count: "350+ Trades", color: "bg-orange-500", icon: Wrench, href: "/education/after-10th/iti" },
  { title: "Paramedical Courses", duration: "", desc: "Build a career in healthcare sector", count: "120+ Courses", color: "bg-pink-600", icon: HeartPulse, href: "/education/after-10th/paramedical" },
  { title: "Agriculture Courses", duration: "", desc: "Explore agriculture & allied fields", count: "80+ Courses", color: "bg-green-600", icon: Globe, href: "/education/after-10th/agriculture" },
  { title: "Vocational & Skill Courses", duration: "", desc: "Short-term skill based career courses", count: "200+ Courses", color: "bg-blue-700", icon: Briefcase, href: "/education/after-10th/vocational" },
];

const streams = [
  { name: "MPC", subject: "(Mathematics)", icon: Calculator, color: "text-blue-600", bg: "bg-blue-50" },
  { name: "BiPC", subject: "(Biology)", icon: Activity, color: "text-indigo-600", bg: "bg-indigo-50" },
  { name: "MEC", subject: "(Commerce)", icon: Briefcase, color: "text-purple-600", bg: "bg-purple-50" },
  { name: "CEC", subject: "(Commerce)", icon: BookOpen, color: "text-pink-600", bg: "bg-pink-50" },
  { name: "HEC", subject: "(Humanities)", icon: Building2, color: "text-red-600", bg: "bg-red-50" },
  { name: "Arts", subject: "", icon: Palette, color: "text-orange-600", bg: "bg-orange-50" },
  { name: "Commerce", subject: "", icon: Briefcase, color: "text-amber-600", bg: "bg-amber-50" },
  { name: "Agriculture", subject: "", icon: Globe, color: "text-green-600", bg: "bg-green-50" },
  { name: "Fine Arts", subject: "", icon: Palette, color: "text-teal-600", bg: "bg-teal-50" },
];

const careers = [
  { name: "Engineer", icon: Wrench, color: "text-blue-500" },
  { name: "Doctor", icon: HeartPulse, color: "text-indigo-500" },
  { name: "Data Scientist", icon: Cpu, color: "text-purple-500" },
  { name: "Police Officer", icon: Shield, color: "text-amber-500" },
  { name: "CA", icon: Calculator, color: "text-gray-700" },
  { name: "Lawyer", icon: Award, color: "text-amber-600" },
  { name: "Teacher", icon: BookOpen, color: "text-green-500" },
  { name: "Pilot", icon: Target, color: "text-sky-500" },
  { name: "Govt Jobs", icon: Building2, color: "text-red-500" },
];

export default function After10th() {
  return (
    <MainLayout>
      {/* Education Journey */}
      <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-gray-500 mb-6 overflow-x-auto pb-2">
        <Link href="/" className="hover:text-indigo-600 flex items-center gap-1">
           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
           <span className="hidden md:inline">Home</span>
        </Link>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <Link href="/education" className="hover:text-indigo-600 font-medium">Education</Link>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span className="text-gray-800 font-medium border-b-2 border-indigo-600 pb-0.5">Select Level</span>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span className="text-gray-500">Choose Course</span>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span className="text-gray-500">Find College</span>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span className="text-gray-500">Build Career</span>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span className="text-gray-500">Success</span>
      </div>

      <div className="space-y-10 mb-10">
          
          {/* Hero Banner */}
          <div className="bg-indigo-50/50 rounded-3xl p-8 md:p-10 border border-indigo-100 relative overflow-hidden flex flex-col md:flex-row items-center gap-6 shadow-sm">
            <div className="flex-1 z-10 relative">
              <h1 className="text-3xl md:text-5xl font-extrabold text-indigo-950 mb-4 leading-tight">
                Choose Your Path <br/><span className="text-indigo-700">After 10th</span>
              </h1>
              <p className="text-indigo-900/70 mb-8 max-w-md text-sm md:text-base leading-relaxed font-medium">
                Discover the best Intermediate, Diploma, ITI, Paramedical, Vocational and Skill Development courses available in India.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-indigo-700 text-white px-6 py-3 rounded-xl font-bold shadow-md shadow-indigo-200 hover:bg-indigo-800 hover:-translate-y-0.5 transition-all">
                  Explore Courses
                </button>
              </div>
            </div>
            
            {/* Illustration / Visual Placeholder */}
            <div className="w-full md:w-1/3 relative z-10 hidden md:block">
               {/* We use a colorful abstract shape as a placeholder for the 3D illustration */}
               <div className="w-64 h-64 mx-auto bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
               <img src="https://api.dicebear.com/7.x/micah/svg?seed=student&backgroundColor=transparent" alt="Student" className="w-full h-auto drop-shadow-2xl relative z-10 transform -scale-x-100" />
            </div>

            {/* Background elements */}
            <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
              <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="350" cy="50" r="150" fill="currentColor" className="text-indigo-900"/>
                <circle cx="50" cy="350" r="100" fill="currentColor" className="text-purple-900"/>
              </svg>
            </div>
          </div>

          {/* Popular Pathways Section */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-5">Popular Pathways After 10th</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {pathways.map((path, i) => (
                <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all duration-300 group cursor-pointer hover:-translate-y-1 flex flex-col h-full items-center text-center">
                  <div className={`w-16 h-16 rounded-[20px] flex items-center justify-center mb-4 ${path.color} text-white shadow-sm group-hover:scale-110 transition-transform`}>
                    <path.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-gray-800 text-[15px] group-hover:text-indigo-700 transition-colors leading-tight mb-1">{path.title}</h3>
                  {path.duration && <p className="text-[11px] font-bold text-gray-600 mb-2">{path.duration}</p>}
                  {!path.duration && <div className="h-4 mb-2"></div>}
                  <p className="text-[11px] text-gray-500 mb-4 flex-grow leading-relaxed px-2">{path.desc}</p>
                  
                  <p className="text-[11px] font-bold text-indigo-700 mb-4">{path.count}</p>
                  {path.href ? (
                    <Link href={path.href} className={`block w-full ${path.color} text-white font-bold text-[13px] py-2.5 rounded-xl shadow-md hover:-translate-y-0.5 transition-transform text-center`}>
                      Explore
                    </Link>
                  ) : (
                    <button className={`w-full ${path.color} text-white font-bold text-[13px] py-2.5 rounded-xl shadow-md hover:-translate-y-0.5 transition-transform`}>
                      Explore
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Popular Streams */}
          <div>
            <div className="flex items-center justify-between mb-5">
               <h2 className="text-xl font-bold text-gray-900">Popular Streams</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {streams.map((stream, i) => (
                <div key={i} className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-3 hover:border-indigo-300 hover:shadow-md transition-all cursor-pointer hover:-translate-y-0.5 group">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${stream.bg} ${stream.color} group-hover:scale-110 transition-transform`}>
                    <stream.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-gray-800">{stream.name}</span>
                    {stream.subject && <span className="text-xs text-gray-500 ml-1">{stream.subject}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Career Opportunities */}
          <div>
             <div className="flex items-center justify-between mb-5">
               <h2 className="text-xl font-bold text-gray-900">Career Opportunities</h2>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
              {careers.map((career, i) => (
                <div key={i} className="flex flex-col items-center gap-3 bg-white p-4 rounded-2xl border border-gray-100 hover:border-indigo-200 hover:shadow-md transition-all cursor-pointer hover:-translate-y-1 group">
                  <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-indigo-50 transition-colors">
                     <career.icon className={`w-6 h-6 ${career.color}`} />
                  </div>
                  <span className="text-xs font-semibold text-gray-700 text-center">{career.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Entrance & Admissions */}
          <div>
            <div className="flex items-center justify-between mb-5">
               <h2 className="text-xl font-bold text-gray-900">Entrance & Admissions</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {['Polytechnic Entrance', 'ITI Admissions', 'Navodaya Admission', 'RIMC Entrance', 'State Inter Admissions', 'Skill India Programs'].map((exam, i) => (
                <div key={i} className="bg-white border border-gray-200 text-gray-700 px-5 py-3 rounded-xl text-sm font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all cursor-pointer hover:-translate-y-0.5 shadow-sm">
                  {exam}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          
          {/* AI Assistant */}
          <div className="bg-white rounded-3xl p-6 border border-indigo-100 shadow-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/80 to-purple-50/80 z-0"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform group-hover:shadow-md">
                  <Bot className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 flex items-center gap-1 text-lg">Be You AI Assistant <span className="text-yellow-500">✨</span></h3>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-6 font-medium">Your smart guide for courses, careers and admissions.</p>
              
              <div className="space-y-3 mb-6">
                <p className="text-[11px] font-bold text-indigo-400 uppercase tracking-wider">Try asking me...</p>
                <div className="bg-white border border-indigo-50 rounded-xl p-3.5 text-sm font-medium text-gray-700 hover:border-indigo-300 hover:shadow-sm cursor-pointer transition-all flex items-center justify-between group/q" onClick={() => window.location.href='/chat'}>
                  <span>Which course is best after 10th?</span>
                  <ArrowRight className="w-4 h-4 text-indigo-300 group-hover/q:text-indigo-600 group-hover/q:translate-x-1 transition-all" />
                </div>
                <div className="bg-white border border-indigo-50 rounded-xl p-3.5 text-sm font-medium text-gray-700 hover:border-indigo-300 hover:shadow-sm cursor-pointer transition-all flex items-center justify-between group/q" onClick={() => window.location.href='/chat'}>
                  <span>MPC or Diploma - Which is better?</span>
                  <ArrowRight className="w-4 h-4 text-indigo-300 group-hover/q:text-indigo-600 group-hover/q:translate-x-1 transition-all" />
                </div>
                <div className="bg-white border border-indigo-50 rounded-xl p-3.5 text-sm font-medium text-gray-700 hover:border-indigo-300 hover:shadow-sm cursor-pointer transition-all flex items-center justify-between group/q" onClick={() => window.location.href='/chat'}>
                  <span>ITI courses with highest salary</span>
                  <ArrowRight className="w-4 h-4 text-indigo-300 group-hover/q:text-indigo-600 group-hover/q:translate-x-1 transition-all" />
                </div>
              </div>
              
              <button className="w-full bg-indigo-700 text-white font-bold py-3.5 rounded-xl shadow-md shadow-indigo-200 hover:bg-indigo-800 hover:-translate-y-0.5 transition-all" onClick={() => window.location.href='/chat'}>
                Chat with AI
              </button>
            </div>
          </div>

          {/* Top Colleges */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-gray-900 text-lg">Top Colleges After 10th</h3>
            </div>
            
            <div className="space-y-4">
              {[
                { name: "TS Model Junior College", loc: "Hyderabad, Telangana", rating: "4.6 (230)", fees: "₹15K - ₹30K", img: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
                { name: "Govt. Polytechnic College", loc: "Warangal, Telangana", rating: "4.4 (180)", fees: "₹25K - ₹40K", img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
                { name: "BHEL ITI", loc: "Hyderabad, Telangana", rating: "4.3 (150)", fees: "₹10K - ₹20K", img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" }
              ].map((college, i) => (
                <div key={i} className="flex gap-4 pb-4 border-b border-gray-50 last:border-0 last:pb-0 hover:bg-gray-50 p-2 -mx-2 rounded-xl transition-colors cursor-pointer group">
                  <div className="w-16 h-16 rounded-xl bg-gray-200 overflow-hidden flex-shrink-0">
                    <img src={college.img} alt={college.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-sm text-gray-800 leading-tight mb-1.5 group-hover:text-indigo-600 transition-colors">{college.name}</h4>
                    <p className="text-[11px] font-medium text-gray-500 mb-2 flex items-center gap-1"><MapPin className="w-3 h-3" /> {college.loc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-amber-500 flex items-center gap-0.5"><Star className="w-3 h-3 fill-current" /> {college.rating}</span>
                      <span className="text-[11px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md">{college.fees}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Scholarships */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-gray-900 text-lg">Scholarships After 10th</h3>
            </div>
            
            <div className="grid grid-cols-4 gap-2">
              <div className="flex flex-col items-center gap-2">
                 <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-xl shadow-sm border border-blue-100">🎓</div>
                 <span className="text-[10px] font-semibold text-center text-gray-600 leading-tight">NSP<br/>Scholarship</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                 <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-xl shadow-sm border border-green-100">🏛️</div>
                 <span className="text-[10px] font-semibold text-center text-gray-600 leading-tight">State<br/>Scholarships</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                 <div className="w-12 h-12 rounded-full bg-yellow-50 flex items-center justify-center text-xl shadow-sm border border-yellow-100">🏅</div>
                 <span className="text-[10px] font-semibold text-center text-gray-600 leading-tight">Merit<br/>Scholarships</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                 <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-xl shadow-sm border border-purple-100">🤝</div>
                 <span className="text-[10px] font-semibold text-center text-gray-600 leading-tight">SC / ST<br/>Scholarships</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      {/* Bottom Info Bar */}
      <div className="bg-white border border-gray-200 rounded-[24px] p-4 flex flex-wrap justify-between items-center gap-4 shadow-sm mt-4">
        {[
          { title: "Compare Courses", desc: "Side by side comparison", icon: "📋" },
          { title: "Check Eligibility", desc: "Course wise details", icon: "✅" },
          { title: "Fees & Duration", desc: "All information", icon: "💰" },
          { title: "Save & Shortlist", desc: "For later", icon: "❤️" },
          { title: "Get Expert Guidance", desc: "From mentors", icon: "👨‍🏫" },
          { title: "100% Free", desc: "No hidden charges", icon: "💲" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="text-2xl">{item.icon}</div>
            <div>
              <p className="text-[11px] font-bold text-gray-800">{item.title}</p>
              <p className="text-[10px] font-medium text-gray-500">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}

function RocketIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 3.82-13.06l.8.84a22 22 0 0 1-13.06 3.82L3 9c2.4 2.4 5.92 3 9 3 0-3 3.6-6.6 6-9l.84.8a22 22 0 0 1-3.82 13.06l-.8-.84a22 22 0 0 1 13.06-3.82L21 15c-2.4 2.4-5.92 3-9 3 0 3-3.6 6.6-6 9" />
    </svg>
  );
}

