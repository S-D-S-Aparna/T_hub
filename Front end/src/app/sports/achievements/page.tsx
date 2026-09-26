"use client";

import { useState, useEffect } from "react";
import SportsLayout from "@/components/layout/SportsLayout";
import Link from "next/link";
import { ChevronLeft, Award, Medal, Zap, Trophy, Flame } from "lucide-react";

export default function AchievementsPage() {
  const [achievementsData, setAchievementsData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}/api/achievements`)
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
          setAchievementsData(data[0]);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);
  let badges = [
    { name: "First Win", icon: <Trophy className="w-6 h-6" />, color: "bg-amber-100 text-amber-600", earned: true },
    { name: "30 Day Streak", icon: <Flame className="w-6 h-6" />, color: "bg-orange-100 text-orange-600", earned: true },
    { name: "Top Scorer", icon: <Medal className="w-6 h-6" />, color: "bg-indigo-100 text-indigo-600", earned: false },
    { name: "Early Bird", icon: <Zap className="w-6 h-6" />, color: "bg-blue-100 text-blue-600", earned: true }
  ];

  if (achievementsData && achievementsData.badges) {
    try {
      const parsedBadges = JSON.parse(achievementsData.badges);
      if (Array.isArray(parsedBadges) && parsedBadges.length > 0) {
        badges = parsedBadges.map((b: string, i: number) => ({
          name: b,
          icon: i % 2 === 0 ? <Trophy className="w-6 h-6" /> : <Medal className="w-6 h-6" />,
          color: i % 2 === 0 ? "bg-amber-100 text-amber-600" : "bg-indigo-100 text-indigo-600",
          earned: true
        }));
      }
    } catch(e) {}
  }
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
               <Award className="w-5 h-5 text-yellow-500" /> Achievements
            </h1>
            <p className="text-indigo-900/70 text-xs md:text-sm font-medium">Explore features and tools in Achievements.</p>
          </div>
          
          <div className="w-full md:w-64 relative z-10 hidden md:block">
            <div className="relative w-full h-32 overflow-visible flex items-center justify-end pr-4">
              <div className="absolute top-1/2 right-1/4 transform translate-x-1/4 -translate-y-1/2 w-48 h-48 bg-gradient-to-tr from-indigo-300 via-purple-300 to-pink-300 rounded-full blur-[40px] opacity-40"></div>
              
              <img src={`https://api.dicebear.com/7.x/shapes/svg?seed=Achievements&backgroundColor=transparent`} alt="Banner Icon" className="w-24 h-24 relative z-10 drop-shadow-xl bg-white rounded-full border-4 border-indigo-100 shadow-md animate-bounce" style={{ animationDuration: '3.5s' }} />
              
              <div className="absolute top-0 right-16 bg-white p-2 rounded-xl shadow-lg border border-gray-100 flex items-center gap-1 animate-bounce delay-100 z-20" style={{ animationDuration: '2.8s' }}>
                <span className="text-[9px] font-bold text-gray-800">Be You</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Stats Card */}
        <div className="bg-gradient-to-br from-yellow-400 to-amber-500 rounded-[32px] p-6 shadow-md text-white mb-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-20 pointer-events-none">
             <Trophy className="w-40 h-40" />
          </div>
          
          <div className="relative z-10">
            <p className="text-xs font-bold text-amber-100 uppercase tracking-widest mb-1">Total Points</p>
            <div className="flex items-end gap-2 mb-6">
               <h2 className="text-5xl font-extrabold tracking-tighter">{loading ? '...' : achievementsData?.points || '1,250'}</h2>
               <span className="text-sm font-bold pb-1 text-amber-100">XP</span>
            </div>

            <div className="flex items-center gap-4 border-t border-amber-300/30 pt-4">
               <div>
                  <p className="text-[10px] text-amber-100 font-bold uppercase mb-1">Current Streak</p>
                  <p className="font-extrabold text-lg flex items-center gap-1"><Flame className="w-4 h-4" /> {loading ? '...' : achievementsData?.streakDays || 14} Days</p>
               </div>
               <div className="w-px h-8 bg-amber-300/30"></div>
               <div>
                  <p className="text-[10px] text-amber-100 font-bold uppercase mb-1">Level</p>
                  <p className="font-extrabold text-lg">{loading ? '...' : achievementsData?.level || 'Pro Athlete'}</p>
               </div>
            </div>
          </div>
        </div>

        {/* Badges Grid */}
        <div className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-sm font-bold text-gray-900">Badges & Medals</h2>
            <span className="text-xs font-bold text-gray-500 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">{badges.filter(b => b.earned).length}/{badges.length} Unlocked</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {badges.map((badge, idx) => (
              <div key={idx} className={`p-4 rounded-2xl flex flex-col items-center justify-center text-center transition-all ${
                badge.earned 
                  ? "bg-white border-2 border-gray-100 shadow-sm hover:border-yellow-300 hover:shadow-md cursor-pointer" 
                  : "bg-gray-50 border border-gray-100 opacity-50 grayscale"
              }`}>
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-3 ${badge.color}`}>
                  {badge.icon}
                </div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">{badge.name}</h4>
                {badge.earned ? (
                  <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Unlocked</span>
                ) : (
                  <span className="text-[10px] font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">Locked</span>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </SportsLayout>
  );
}
