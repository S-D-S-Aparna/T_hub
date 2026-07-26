"use client";

import SportsLayout from "@/components/layout/SportsLayout";
import Link from "next/link";
import { ChevronLeft, Search, MapPin, Users } from "lucide-react";

export default function FindPlayersPage() {
  const tabs = ["Cricket", "Football", "Badminton"];
  
  const players = [
    {
      id: 1,
      name: "Rohit Kumar",
      sport: "Cricket • Batsman",
      location: "Hyderabad",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rohit&style=circle&backgroundColor=e2e8f0"
    },
    {
      id: 2,
      name: "Ananya R.",
      sport: "Badminton • Singles",
      location: "Secunderabad",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya&style=circle&backgroundColor=e2e8f0"
    },
    {
      id: 3,
      name: "Vikram Singh",
      sport: "Football • Midfielder",
      location: "Hyderabad",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram&style=circle&backgroundColor=e2e8f0"
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
               <Users className="w-5 h-5 text-blue-500" /> Find Players
            </h1>
            <p className="text-indigo-900/70 text-xs md:text-sm font-medium">Explore features and tools in Find Players.</p>
          </div>
          
          <div className="w-full md:w-64 relative z-10 hidden md:block">
            <div className="relative w-full h-32 overflow-visible flex items-center justify-end pr-4">
              <div className="absolute top-1/2 right-1/4 transform translate-x-1/4 -translate-y-1/2 w-48 h-48 bg-gradient-to-tr from-indigo-300 via-purple-300 to-pink-300 rounded-full blur-[40px] opacity-40"></div>
              
              <img src={`https://api.dicebear.com/7.x/shapes/svg?seed=Find Players&backgroundColor=transparent`} alt="Banner Icon" className="w-24 h-24 relative z-10 drop-shadow-xl bg-white rounded-full border-4 border-indigo-100 shadow-md animate-bounce" style={{ animationDuration: '3.5s' }} />
              
              <div className="absolute top-0 right-16 bg-white p-2 rounded-xl shadow-lg border border-gray-100 flex items-center gap-1 animate-bounce delay-100 z-20" style={{ animationDuration: '2.8s' }}>
                <span className="text-[9px] font-bold text-gray-800">Be You</span>
              </div>
            </div>
          </div>
        </div>

        {/* Search & Tabs */}
        <div className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100 mb-6">
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search by sport or skill..." 
              className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-3.5 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder-gray-400 font-medium text-gray-800"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto hide-scrollbar">
            {tabs.map((tab, idx) => (
              <button 
                key={idx} 
                className={`px-5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${
                  idx === 0 
                    ? "bg-blue-600 text-white shadow-md shadow-blue-200" 
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Players List */}
        <div className="space-y-3">
          {players.map((player) => (
            <div key={player.id} className="bg-white rounded-[24px] p-4 shadow-sm border border-gray-100 flex items-center justify-between hover:shadow-md hover:border-blue-100 transition-all group cursor-pointer">
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-100 bg-slate-50 group-hover:border-blue-200 transition-colors">
                  <img src={player.image} alt={player.name} className="w-full h-full object-cover" />
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-0.5">{player.name}</h4>
                  <p className="text-[11px] text-gray-500 font-medium mb-1">{player.sport}</p>
                  <div className="flex items-center gap-1 text-[10px] text-gray-400 font-medium">
                    <MapPin className="w-3 h-3" /> {player.location}
                  </div>
                </div>
              </div>

              <button className="bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-xl text-[11px] font-bold transition-all border border-blue-100 shadow-sm">
                Connect
              </button>

            </div>
          ))}
        </div>

      </div>
    </SportsLayout>
  );
}
