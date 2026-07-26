"use client";

import SportsLayout from "@/components/layout/SportsLayout";
import Link from "next/link";
import { ChevronLeft, CalendarDays, MapPin, Trophy, Target } from "lucide-react";

export default function TournamentsPage() {
  const tabs = ["All", "Cricket", "Football", "Badminton"];
  
  const tournaments = [
    {
      id: 1,
      name: "City Cricket League",
      date: "20 May - 30 May 2024",
      location: "Mumbai",
      prize: "₹50,000",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2005&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "College Football Cup",
      date: "25 May - 8 June 2024",
      location: "Bangalore",
      prize: "₹75,000",
      image: "https://images.unsplash.com/photo-1518605368461-1e1e38ce7059?q=80&w=2072&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Badminton Championship",
      date: "10 June - 15 June 2024",
      location: "Delhi",
      prize: "₹25,000",
      image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=2070&auto=format&fit=crop"
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
          <div className="space-y-4">
            {tournaments.map((tournament) => (
              <div key={tournament.id} className="bg-white rounded-[24px] p-4 shadow-sm border border-gray-100 flex gap-4 hover:shadow-md hover:border-amber-200 transition-all group cursor-pointer">
                
                {/* Image */}
                <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 relative">
                  <img src={tournament.image} alt={tournament.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                
                {/* Content */}
                <div className="flex-1 flex flex-col justify-between py-0.5">
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm leading-tight mb-2 group-hover:text-amber-600 transition-colors">{tournament.name}</h3>
                    
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-[11px] font-medium text-gray-500">
                        <CalendarDays className="w-3.5 h-3.5 text-gray-400" /> {tournament.date}
                      </div>
                      <div className="flex items-center gap-2 text-[11px] font-medium text-gray-500">
                        <MapPin className="w-3.5 h-3.5 text-gray-400" /> {tournament.location}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-50">
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Prize Pool</p>
                      <div className="flex items-center gap-1 text-sm font-extrabold text-amber-600">
                        <Trophy className="w-3.5 h-3.5" /> {tournament.prize}
                      </div>
                    </div>
                    
                    <button className="text-[11px] font-bold text-blue-600 hover:text-blue-800 transition-colors">
                      Register Now
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
