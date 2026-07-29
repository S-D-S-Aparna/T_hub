"use client";

import { useState, useEffect } from "react";
import SportsLayout from "@/components/layout/SportsLayout";
import Link from "next/link";
import { ChevronLeft, BarChart3, TrendingUp, Trophy, Target, LayoutDashboard, Filter, MoreVertical } from "lucide-react";

export default function PerformanceDashboardPage() {
  const [dashboard, setDashboard] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL || "https://t-hub-yxvu.onrender.com"}/api/sports-dashboard`)
      .then(res => res.json())
      .then(data => {
        setDashboard(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);
  return (
    <SportsLayout>
      <div className="max-w-5xl mx-auto pb-20">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-[32px] p-6 border border-indigo-100 relative overflow-hidden shadow-sm mb-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1 relative z-10 flex flex-col items-start w-full">
            <Link href="/sports" className="p-2 bg-white/50 hover:bg-white rounded-full transition-colors mb-4 border border-indigo-100 shadow-sm">
              <ChevronLeft className="w-5 h-5 text-indigo-600" />
            </Link>
            <h1 className="text-2xl md:text-3xl font-black text-indigo-950 mb-2 leading-tight flex items-center gap-2">
               <LayoutDashboard className="w-6 h-6 text-indigo-600" /> Performance
            </h1>
            <p className="text-indigo-900/70 text-xs md:text-sm font-medium">Track your athletic progress and stats.</p>
          </div>
          
          <div className="flex items-center gap-2 relative z-10">
            <div className="hidden md:flex relative h-32 w-32 items-center justify-center mr-6">
              <img src="https://api.dicebear.com/7.x/shapes/svg?seed=DashboardTracker&backgroundColor=transparent" alt="Banner Icon" className="w-20 h-20 drop-shadow-xl bg-white rounded-full border-4 border-indigo-100 shadow-md animate-bounce" style={{ animationDuration: '3.5s' }} />
            </div>
            <button className="p-2 hover:bg-white bg-white/50 rounded-full transition-colors border border-indigo-100 shadow-sm text-indigo-600">
              <Filter className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-white bg-white/50 rounded-full transition-colors border border-indigo-100 shadow-sm text-indigo-600">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-indigo-600 text-white rounded-[24px] p-5 shadow-sm relative overflow-hidden">
             <div className="absolute -right-4 -bottom-4 opacity-20">
               <Trophy className="w-24 h-24" />
             </div>
             <p className="text-xs font-bold text-indigo-200 uppercase tracking-wider mb-1">Win Rate</p>
             <h2 className="text-3xl font-extrabold">{loading ? '...' : dashboard?.stats?.winRate || 0}%</h2>
             <div className="flex items-center gap-1 text-[10px] text-green-300 font-bold mt-2">
               <TrendingUp className="w-3 h-3" /> +5.2%
             </div>
          </div>
          
          <div className="bg-white rounded-[24px] p-5 shadow-sm border border-gray-100">
             <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Games Played</p>
             <h2 className="text-3xl font-extrabold text-gray-900">{loading ? '...' : dashboard?.stats?.gamesPlayed || 0}</h2>
             <div className="flex items-center gap-1 text-[10px] text-green-500 font-bold mt-2 bg-green-50 w-max px-2 py-0.5 rounded-full">
               <TrendingUp className="w-3 h-3" /> +12 this month
             </div>
          </div>
        </div>

        {/* Chart Section */}
        <div className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100 mb-6">
          <h2 className="text-sm font-bold text-gray-900 mb-6">Performance Trend</h2>
          
          {/* Simple Bar Chart Mockup */}
          <div className="h-40 flex items-end justify-between gap-2 border-b border-gray-100 pb-2 relative">
             {/* Grid line */}
             <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-50"></div>
             
             {/* Bars */}
             <div className="w-full bg-indigo-100 rounded-t-md h-[40%] relative group hover:bg-indigo-200 transition-colors">
               <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] font-bold px-2 py-1 rounded shadow-md pointer-events-none transition-opacity">40</div>
             </div>
             <div className="w-full bg-indigo-100 rounded-t-md h-[60%] relative group hover:bg-indigo-200 transition-colors"></div>
             <div className="w-full bg-indigo-100 rounded-t-md h-[55%] relative group hover:bg-indigo-200 transition-colors"></div>
             <div className="w-full bg-indigo-600 rounded-t-md h-[85%] relative group shadow-md shadow-indigo-200">
               <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] font-bold px-2 py-1 rounded shadow-md pointer-events-none">85</div>
             </div>
             <div className="w-full bg-indigo-100 rounded-t-md h-[70%] relative group hover:bg-indigo-200 transition-colors"></div>
             <div className="w-full bg-indigo-100 rounded-t-md h-[65%] relative group hover:bg-indigo-200 transition-colors"></div>
          </div>
          
          <div className="flex justify-between mt-3 px-1 text-[10px] font-bold text-gray-400">
             <span>W1</span>
             <span>W2</span>
             <span>W3</span>
             <span>W4</span>
             <span>W5</span>
             <span>W6</span>
          </div>
        </div>

        {/* Strengths / Weaknesses */}
        <div className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100">
          <h2 className="text-sm font-bold text-gray-900 mb-4">Analysis</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-gray-600">Stamina</span>
              <div className="w-1/2 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 w-[90%]"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-gray-600">Agility</span>
              <div className="w-1/2 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500 w-[75%]"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-gray-600">Focus</span>
              <div className="w-1/2 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 w-[40%]"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </SportsLayout>
  );
}
