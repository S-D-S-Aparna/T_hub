"use client";

import { useState, useEffect } from "react";
import SportsLayout from "@/components/layout/SportsLayout";
import Link from "next/link";
import { ChevronLeft, CalendarDays, MapPin, Trophy, Target } from "lucide-react";

export default function TournamentsPage() {
  const tabs = ["All", "Cricket", "Football", "Badminton"];
  
  const [tournaments, setTournaments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL || `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}`}/api/tournaments`)
      .then(res => res.json())
      .then(data => {
        setTournaments(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to load tournaments", err);
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
               <Target className="w-5 h-5 text-amber-500" /> Tournaments
            </h1>
            <p className="text-indigo-900/70 text-xs md:text-sm font-medium">Explore features and tools in Tournaments.</p>
          </div>
          
          <div className="w-full md:w-64 relative z-10 hidden md:block">
            <div className="relative w-full h-32 overflow-visible flex items-center justify-end pr-4">
              <div className="absolute top-1/2 right-1/4 transform translate-x-1/4 -translate-y-1/2 w-48 h-48 bg-gradient-to-tr from-indigo-300 via-purple-300 to-pink-300 rounded-full blur-[40px] opacity-40"></div>
              
              <img src={`https://api.dicebear.com/7.x/shapes/svg?seed=Tournaments&backgroundColor=transparent`} alt="Banner Icon" className="w-24 h-24 relative z-10 drop-shadow-xl bg-white rounded-full border-4 border-indigo-100 shadow-md animate-bounce" style={{ animationDuration: '3.5s' }} />
              
              <div className="absolute top-0 right-16 bg-white p-2 rounded-xl shadow-lg border border-gray-100 flex items-center gap-1 animate-bounce delay-100 z-20" style={{ animationDuration: '2.8s' }}>
                <span className="text-[9px] font-bold text-gray-800">Be You</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Upcoming Tournaments</h2>
          
          {/* Tabs */}
          <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2 mb-6">
            {tabs.map((tab, idx) => (
              <button 
                key={idx} 
                className={`px-5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${
                  idx === 0 
                    ? "bg-gray-900 text-white shadow-md" 
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tournament List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading ? (
              <p className="text-gray-500 text-sm">Loading tournaments...</p>
            ) : tournaments.length === 0 ? (
              <p className="text-gray-500 text-sm">No tournaments found.</p>
            ) : tournaments.map((tournament) => (
              <div key={tournament.id} className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:border-indigo-100 transition-all group flex flex-col cursor-pointer">
                
                <div className="h-40 overflow-hidden relative">
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[10px] font-bold px-2 py-1 rounded-md text-gray-800 shadow-sm z-10 flex items-center gap-1 uppercase">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> {tournament.status || "upcoming"}
                  </div>
                  <img src={tournament.image} alt={tournament.title || tournament.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-gray-900 leading-tight mb-2 group-hover:text-indigo-600 transition-colors">{tournament.title || tournament.name}</h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-[11px] font-medium text-gray-500">
                        <CalendarDays className="w-3.5 h-3.5 text-indigo-400" /> 
                        {tournament.date instanceof Date ? new Date(tournament.date).toLocaleDateString() : tournament.date}
                      </div>
                      <div className="flex items-center gap-2 text-[11px] font-medium text-gray-500">
                        <MapPin className="w-3.5 h-3.5 text-red-400" /> {tournament.location}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                    <div>
                      <span className="block text-[10px] text-gray-400 font-medium">Prize Pool</span>
                      <span className="font-bold text-gray-900 text-sm flex items-center gap-1">
                        <Trophy className="w-3.5 h-3.5 text-yellow-500" /> {tournament.prize}
                      </span>
                    </div>
                    <button className="bg-indigo-50 text-indigo-600 font-bold text-xs px-4 py-2 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      Register
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </SportsLayout>
  );
}
