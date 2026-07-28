"use client";

import { useState, useEffect } from "react";
import SportsLayout from "@/components/layout/SportsLayout";
import Link from "next/link";
import { ChevronLeft, Search, Star, MapPin, Building2, MoreHorizontal } from "lucide-react";

export default function AcademiesPage() {
  const [academies, setAcademies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/academies')
      .then(res => res.json())
      .then(data => {
        setAcademies(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to load academies", err);
        setLoading(false);
      });
  }, []);
  const sports = [
    { name: "Cricket", icon: "🏏" },
    { name: "Football", icon: "⚽" },
    { name: "Badminton", icon: "🏸" },
    { name: "Basketball", icon: "🏀" },
    { name: "More", icon: <MoreHorizontal className="w-4 h-4" /> }
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
               <Building2 className="w-5 h-5 text-indigo-600" /> Academies
            </h1>
            <p className="text-indigo-900/70 text-xs md:text-sm font-medium">Explore features and tools in Academies.</p>
          </div>
          
          <div className="w-full md:w-64 relative z-10 hidden md:block">
            <div className="relative w-full h-32 overflow-visible flex items-center justify-end pr-4">
              <div className="absolute top-1/2 right-1/4 transform translate-x-1/4 -translate-y-1/2 w-48 h-48 bg-gradient-to-tr from-indigo-300 via-purple-300 to-pink-300 rounded-full blur-[40px] opacity-40"></div>
              
              <img src={`https://api.dicebear.com/7.x/shapes/svg?seed=Academies&backgroundColor=transparent`} alt="Banner Icon" className="w-24 h-24 relative z-10 drop-shadow-xl bg-white rounded-full border-4 border-indigo-100 shadow-md animate-bounce" style={{ animationDuration: '3.5s' }} />
              
              <div className="absolute top-0 right-16 bg-white p-2 rounded-xl shadow-lg border border-gray-100 flex items-center gap-1 animate-bounce delay-100 z-20" style={{ animationDuration: '2.8s' }}>
                <span className="text-[9px] font-bold text-gray-800">Be You</span>
              </div>
            </div>
          </div>
        </div>

        {/* Search Section */}
        <div className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Find Best Academies</h2>
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search sports academies..." 
              className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-3.5 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder-gray-400 font-medium text-gray-800"
            />
          </div>

          {/* Categories */}
          <div className="flex justify-between items-center gap-2 overflow-x-auto hide-scrollbar pb-2">
            {sports.map((sport, index) => (
              <div key={index} className="flex flex-col items-center gap-2 flex-shrink-0 cursor-pointer group">
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100 group-hover:border-indigo-200 group-hover:bg-indigo-50 transition-all group-hover:scale-105 shadow-sm">
                  {typeof sport.icon === 'string' ? (
                    <span className="text-2xl">{sport.icon}</span>
                  ) : (
                    <span className="text-gray-500 group-hover:text-indigo-600">{sport.icon}</span>
                  )}
                </div>
                <span className="text-[11px] font-bold text-gray-600 group-hover:text-indigo-600 transition-colors">{sport.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Academies List */}
        <div>
          <h3 className="font-bold text-gray-900 mb-4 px-2">Top Academies</h3>
          <div className="space-y-4">
            {loading ? (
              <p className="text-gray-500 text-sm px-2">Loading academies...</p>
            ) : academies.length === 0 ? (
              <p className="text-gray-500 text-sm px-2">No academies found.</p>
            ) : academies.map((academy) => (
              <div key={academy.id} className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100 flex gap-4 hover:shadow-md hover:border-indigo-100 transition-all group cursor-pointer">
                
                <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 relative">
                  <img src={academy.image} alt={academy.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                
                <div className="flex-1 py-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm leading-tight mb-1">{academy.name}</h4>
                    <p className="text-[11px] text-gray-500 font-medium">{academy.sport}</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-yellow-400 fill-current" />
                      <span className="text-[11px] font-bold text-gray-700">{academy.rating}</span>
                      <span className="text-[10px] text-gray-400">({academy.reviews})</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1 text-[11px] font-medium text-gray-500 mb-0.5">
                        <MapPin className="w-3 h-3" /> {academy.location}
                      </div>
                      <p className="text-xs font-bold text-gray-900">{academy.price} <span className="text-[10px] text-gray-400 font-medium">/ month</span></p>
                    </div>
                    
                    <button className="bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white px-5 py-2 rounded-xl text-xs font-bold transition-colors shadow-sm">
                      Book
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
