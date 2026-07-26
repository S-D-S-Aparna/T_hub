"use client";

import SportsLayout from "@/components/layout/SportsLayout";
import Link from "next/link";
import { ChevronLeft, GraduationCap, MapPin, Search, ArrowRight, Award } from "lucide-react";

export default function ScholarshipsPage() {
  const scholarships = [
    {
      id: 1,
      title: "National Sports Talent Search",
      provider: "Sports Authority of India",
      amount: "₹50,000 / year",
      deadline: "30 Jun 2024",
      type: "All Sports",
      level: "National"
    },
    {
      id: 2,
      title: "State Cricket Excellence Grant",
      provider: "State Cricket Association",
      amount: "₹25,000 / year",
      deadline: "15 Jul 2024",
      type: "Cricket",
      level: "State"
    },
    {
      id: 3,
      title: "Olympic Hopefuls Scholarship",
      provider: "Youth Sports Foundation",
      amount: "₹1,00,000 / year",
      deadline: "31 Aug 2024",
      type: "Athletics",
      level: "International"
    }
  ];

  return (
    <SportsLayout>
      <div className="max-w-5xl mx-auto pb-20">
        
        {/* Header */}
        {/* Animated Hero Banner */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-[32px] p-6 border border-indigo-100 relative overflow-hidden flex flex-col md:flex-row items-center gap-6 shadow-sm mb-6">
          <div className="flex-1 relative z-10 flex flex-col items-start">
            <Link href="/sports" className="p-2 bg-white/50 hover:bg-white rounded-full transition-colors mb-4 border border-indigo-100 shadow-sm">
              <ChevronLeft className="w-5 h-5 text-indigo-600" />
            </Link>
            <h1 className="text-2xl md:text-3xl font-black text-indigo-950 mb-2 leading-tight flex items-center gap-2">
               <GraduationCap className="w-5 h-5 text-blue-600" /> Scholarships
            </h1>
            <p className="text-indigo-900/70 text-xs md:text-sm font-medium">Explore features and tools in Scholarships.</p>
          </div>
          
          <div className="w-full md:w-64 relative z-10 hidden md:block">
            <div className="relative w-full h-32 overflow-visible flex items-center justify-end pr-4">
              <div className="absolute top-1/2 right-1/4 transform translate-x-1/4 -translate-y-1/2 w-48 h-48 bg-gradient-to-tr from-indigo-300 via-purple-300 to-pink-300 rounded-full blur-[40px] opacity-40"></div>
              
              <img src={`https://api.dicebear.com/7.x/shapes/svg?seed=Scholarships&backgroundColor=transparent`} alt="Banner Icon" className="w-24 h-24 relative z-10 drop-shadow-xl bg-white rounded-full border-4 border-indigo-100 shadow-md animate-bounce" style={{ animationDuration: '3.5s' }} />
              
              <div className="absolute top-0 right-16 bg-white p-2 rounded-xl shadow-lg border border-gray-100 flex items-center gap-1 animate-bounce delay-100 z-20" style={{ animationDuration: '2.8s' }}>
                <span className="text-[9px] font-bold text-gray-800">Be You</span>
              </div>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100 mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search scholarships..." 
              className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-3.5 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder-gray-400 font-medium text-gray-800"
            />
          </div>
        </div>

        {/* Scholarships List */}
        <div className="space-y-4">
          {scholarships.map((scholarship) => (
            <div key={scholarship.id} className="bg-white rounded-[24px] p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all group relative overflow-hidden">
              
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                <Award className="w-24 h-24" />
              </div>
              
              <div className="relative z-10">
                <div className="flex gap-2 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-1 rounded-md">{scholarship.type}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-2 py-1 rounded-md">{scholarship.level}</span>
                </div>
                
                <h3 className="font-bold text-gray-900 text-base leading-tight mb-1 group-hover:text-blue-700 transition-colors">{scholarship.title}</h3>
                <p className="text-xs text-gray-500 font-medium mb-4 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" /> {scholarship.provider}
                </p>
                
                <div className="flex items-center justify-between border-t border-gray-50 pt-4">
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wide mb-0.5">Funding Amount</p>
                    <p className="font-extrabold text-gray-900">{scholarship.amount}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-red-400 font-bold uppercase tracking-wide mb-0.5">Deadline</p>
                    <p className="font-bold text-gray-700 text-sm">{scholarship.deadline}</p>
                  </div>
                </div>

                <button className="w-full mt-4 flex items-center justify-center gap-2 bg-gray-50 text-blue-600 py-3 rounded-xl font-bold text-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  View Details & Apply <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </SportsLayout>
  );
}
