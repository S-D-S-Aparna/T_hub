"use client";

import { useState, useEffect } from "react";
import SportsLayout from "@/components/layout/SportsLayout";
import Link from "next/link";
import { ChevronLeft, MoreVertical, MapPin, Trophy, Star, Medal, Play, Image as ImageIcon, CheckCircle } from "lucide-react";

export default function AthleteProfilePage() {
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL || "https://t-hub-yxvu.onrender.com"}/api/athlete-profile`)
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
          setProfile(data[0]);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  let stats = { matches: 0, trophies: 0, rank: 0 };
  let achievements = [];
  if (profile) {
    try {
      if (profile.stats) stats = { ...stats, ...JSON.parse(profile.stats) };
      if (profile.achievements) achievements = JSON.parse(profile.achievements);
    } catch(e) {}
  }
  return (
    <SportsLayout>
      <div className="max-w-5xl mx-auto pb-20">
        
        {/* Header Actions */}
        <div className="flex items-center justify-between mb-6">
          <Link href="/sports" className="p-2 hover:bg-white rounded-full transition-colors text-gray-600 bg-white/50 backdrop-blur-sm shadow-sm border border-gray-100">
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-lg font-bold text-gray-900">Athlete Profile</h1>
          <button className="p-2 hover:bg-white rounded-full transition-colors text-gray-600 bg-white/50 backdrop-blur-sm shadow-sm border border-gray-100">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100 mb-6">
          <div className="flex flex-col items-center mb-6">
            <div className="relative mb-4">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${profile?.user?.name || 'Aparna'}&style=circle&backgroundColor=e2e8f0`}
                  alt={profile?.user?.name || "Athlete"} 
                  className="w-full h-full object-cover bg-slate-100"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-6 h-6 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center">
                 <CheckCircle className="w-3.5 h-3.5 text-white" />
              </div>
            </div>
            
            <h2 className="text-xl font-extrabold text-gray-900">{loading ? 'Loading...' : profile?.user?.name || 'Athlete Name'}</h2>
            <p className="text-[13px] font-bold text-gray-500 mb-2">{profile?.sport || 'Sport'} Player</p>
            <div className="flex items-center gap-1 text-[11px] font-medium text-gray-400">
              <MapPin className="w-3 h-3" /> Hyderabad, India
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-6">
            <div className="flex flex-col items-center">
              <span className="text-xs font-bold text-gray-400 mb-1">Matches</span>
              <span className="text-xl font-extrabold text-gray-900">{stats.matches || 48}</span>
            </div>
            <div className="flex flex-col items-center border-x border-gray-100">
              <span className="text-xs font-bold text-gray-400 mb-1">Trophies</span>
              <span className="text-xl font-extrabold text-gray-900">{stats.trophies || 12}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xs font-bold text-gray-400 mb-1">Rank</span>
              <span className="text-xl font-extrabold text-gray-900">#{stats.rank || 23}</span>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100 mb-6">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-bold text-gray-900 text-sm">Achievements</h3>
            <span className="text-xs font-bold text-indigo-600 cursor-pointer">View All</span>
          </div>
          
          <div className="grid grid-cols-3 gap-3">
            <div className="flex flex-col items-center text-center group cursor-pointer">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl flex items-center justify-center mb-2 border border-yellow-200 group-hover:scale-110 transition-transform shadow-sm">
                <span className="text-2xl">🏆</span>
              </div>
              <span className="text-[10px] font-bold text-gray-800 leading-tight">Best Batter<br/><span className="text-gray-400 font-medium">2023</span></span>
            </div>
            
            <div className="flex flex-col items-center text-center group cursor-pointer">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl flex items-center justify-center mb-2 border border-orange-200 group-hover:scale-110 transition-transform shadow-sm">
                <span className="text-2xl">🏅</span>
              </div>
              <span className="text-[10px] font-bold text-gray-800 leading-tight">Man of the Match<br/><span className="text-gray-400 font-medium">2024</span></span>
            </div>

            <div className="flex flex-col items-center text-center group cursor-pointer">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl flex items-center justify-center mb-2 border border-amber-200 group-hover:scale-110 transition-transform shadow-sm">
                <span className="text-2xl">🥇</span>
              </div>
              <span className="text-[10px] font-bold text-gray-800 leading-tight">Champion<br/><span className="text-gray-400 font-medium">2024</span></span>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-bold text-gray-900 text-sm">Gallery</h3>
            <div className="flex gap-2">
              <button className="text-xs font-bold text-gray-900 bg-gray-100 px-3 py-1.5 rounded-full">Photos</button>
              <button className="text-xs font-bold text-gray-400 px-3 py-1.5 hover:text-gray-900 transition-colors">Videos</button>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-3">
            <div className="aspect-square rounded-2xl bg-gray-100 overflow-hidden relative group cursor-pointer">
              <img src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2005&auto=format&fit=crop" alt="Cricket" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="aspect-square rounded-2xl bg-gray-100 overflow-hidden relative group cursor-pointer">
              <img src="https://images.unsplash.com/photo-1624194639965-748950bb91d9?q=80&w=2070&auto=format&fit=crop" alt="Cricket Team" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="aspect-square rounded-2xl bg-gray-100 overflow-hidden relative group cursor-pointer">
              <img src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2069&auto=format&fit=crop" alt="Cricket Action" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                 <Play className="w-6 h-6 text-white fill-current opacity-80" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </SportsLayout>
  );
}

function CheckCircleIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
