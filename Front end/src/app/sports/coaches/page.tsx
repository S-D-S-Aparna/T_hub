"use client";

import { useState, useEffect } from "react";
import SportsLayout from "@/components/layout/SportsLayout";
import Link from "next/link";
import { ChevronLeft, Search, Star, Users } from "lucide-react";

export default function CoachesPage() {
  const [coaches, setCoaches] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}/api/coaches`)
      .then(res => res.json())
      .then(data => {
        // map backend MentorProfile to frontend structure if needed
        const mapped = data.map((c: any) => ({
          id: c.id,
          name: c.user?.name || "Unknown",
          role: c.expertise + " Coach",
          rating: c.rating,
          reviews: c.totalSessions,
          experience: c.yearsExperience + "+ Years Exp",
          image: "https://api.dicebear.com/7.x/avataaars/svg?seed=" + c.user?.name + "&style=circle&backgroundColor=e2e8f0"
        }));
        setCoaches(mapped);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to load coaches", err);
        setLoading(false);
      });
  }, []);

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
               <Users className="w-5 h-5 text-indigo-600" /> Coaches
            </h1>
            <p className="text-indigo-900/70 text-xs md:text-sm font-medium">Explore features and tools in Coaches.</p>
          </div>
          
          <div className="w-full md:w-64 relative z-10 hidden md:block">
            <div className="relative w-full h-32 overflow-visible flex items-center justify-end pr-4">
              <div className="absolute top-1/2 right-1/4 transform translate-x-1/4 -translate-y-1/2 w-48 h-48 bg-gradient-to-tr from-indigo-300 via-purple-300 to-pink-300 rounded-full blur-[40px] opacity-40"></div>
              
              <img src={`https://api.dicebear.com/7.x/shapes/svg?seed=Coaches&backgroundColor=transparent`} alt="Banner Icon" className="w-24 h-24 relative z-10 drop-shadow-xl bg-white rounded-full border-4 border-indigo-100 shadow-md animate-bounce" style={{ animationDuration: '3.5s' }} />
              
              <div className="absolute top-0 right-16 bg-white p-2 rounded-xl shadow-lg border border-gray-100 flex items-center gap-1 animate-bounce delay-100 z-20" style={{ animationDuration: '2.8s' }}>
                <span className="text-[9px] font-bold text-gray-800">Be You</span>
              </div>
            </div>
          </div>
        </div>

        {/* Search Section */}
        <div className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Top Coaches</h2>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search coaches..." 
              className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-3.5 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder-gray-400 font-medium text-gray-800"
            />
          </div>
        </div>

        {/* Coaches List */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {loading ? (
              <p className="text-gray-500 text-sm">Loading coaches...</p>
            ) : coaches.length === 0 ? (
              <p className="text-gray-500 text-sm">No coaches found.</p>
            ) : coaches.map((coach) => (
              <div key={coach.id} className="bg-white rounded-[24px] p-4 shadow-sm border border-gray-100 flex items-center justify-between hover:shadow-md hover:border-indigo-100 transition-all group cursor-pointer">
                
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gray-100 group-hover:border-indigo-200 transition-colors bg-slate-100 relative">
                    <img src={coach.image} alt={coach.name} className="w-full h-full object-cover" />
                    <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></div>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-900 text-[13px] mb-0.5">{coach.name}</h4>
                    <p className="text-[11px] text-gray-500 font-medium mb-1">{coach.role}</p>
                    
                    <div className="flex items-center gap-3 text-[10px] text-gray-500 font-medium">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="font-bold text-gray-700">{coach.rating}</span>
                        <span>({coach.reviews})</span>
                      </div>
                      <div className="w-1 h-1 rounded-full bg-gray-300"></div>
                      <span>{coach.experience}</span>
                    </div>
                  </div>
                </div>

                <button className="bg-[#5A4BFF] hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md shadow-indigo-200 group-hover:scale-105">
                  Book
                </button>

              </div>
            ))}
          </div>
        </div>

      </div>
    </SportsLayout>
  );
}
