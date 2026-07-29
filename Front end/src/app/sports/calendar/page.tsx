"use client";

import { useState, useEffect } from "react";
import SportsLayout from "@/components/layout/SportsLayout";
import Link from "next/link";
import { ChevronLeft, Calendar as CalendarIcon, ChevronRight, MapPin, Clock } from "lucide-react";

export default function TrainingCalendarPage() {
  const [schedule, setSchedule] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL || "https://t-hub-yxvu.onrender.com"}/api/training-calendar`)
      .then(res => res.json())
      .then(data => {
        setSchedule(data);
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
        {/* Animated Hero Banner */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-[32px] p-6 border border-indigo-100 relative overflow-hidden flex flex-col md:flex-row items-center gap-6 shadow-sm mb-6">
          <div className="flex-1 relative z-10 flex flex-col items-start">
            <Link href="/sports" className="p-2 bg-white/50 hover:bg-white rounded-full transition-colors mb-4 border border-indigo-100 shadow-sm">
              <ChevronLeft className="w-5 h-5 text-indigo-600" />
            </Link>
            <h1 className="text-2xl md:text-3xl font-black text-indigo-950 mb-2 leading-tight flex items-center gap-2">
               <CalendarIcon className="w-5 h-5 text-purple-500" /> Calendar
            </h1>
            <p className="text-indigo-900/70 text-xs md:text-sm font-medium">Explore features and tools in Calendar.</p>
          </div>
          
          <div className="w-full md:w-64 relative z-10 hidden md:block">
            <div className="relative w-full h-32 overflow-visible flex items-center justify-end pr-4">
              <div className="absolute top-1/2 right-1/4 transform translate-x-1/4 -translate-y-1/2 w-48 h-48 bg-gradient-to-tr from-indigo-300 via-purple-300 to-pink-300 rounded-full blur-[40px] opacity-40"></div>
              
              <img src={`https://api.dicebear.com/7.x/shapes/svg?seed=Calendar&backgroundColor=transparent`} alt="Banner Icon" className="w-24 h-24 relative z-10 drop-shadow-xl bg-white rounded-full border-4 border-indigo-100 shadow-md animate-bounce" style={{ animationDuration: '3.5s' }} />
              
              <div className="absolute top-0 right-16 bg-white p-2 rounded-xl shadow-lg border border-gray-100 flex items-center gap-1 animate-bounce delay-100 z-20" style={{ animationDuration: '2.8s' }}>
                <span className="text-[9px] font-bold text-gray-800">Be You</span>
              </div>
            </div>
          </div>
        </div>

        {/* Calendar UI */}
        <div className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100 mb-6">
          <div className="flex items-center justify-between mb-6">
             <h2 className="text-lg font-bold text-gray-900">May 2024</h2>
             <div className="flex gap-2">
               <button className="p-1 hover:bg-gray-100 rounded-lg text-gray-500"><ChevronLeft className="w-5 h-5" /></button>
               <button className="p-1 hover:bg-gray-100 rounded-lg text-gray-500"><ChevronRight className="w-5 h-5" /></button>
             </div>
          </div>
          
          <div className="grid grid-cols-7 gap-2 mb-2 text-center text-[10px] font-bold text-gray-400 uppercase">
             <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
          </div>
          
          <div className="grid grid-cols-7 gap-2 text-center">
             {[...Array(31)].map((_, i) => {
               const day = i + 1;
               const isToday = day === 20;
               const hasEvent = [15, 20, 22, 28].includes(day);
               
               return (
                 <div key={i} className="flex flex-col items-center justify-center p-2 relative group cursor-pointer">
                   <div className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold transition-all ${
                     isToday ? "bg-purple-600 text-white shadow-md" : "text-gray-700 hover:bg-gray-100"
                   }`}>
                     {day}
                   </div>
                   {hasEvent && !isToday && (
                     <div className="absolute bottom-1 w-1 h-1 bg-purple-400 rounded-full"></div>
                   )}
                 </div>
               )
             })}
          </div>
        </div>

        {/* Schedule List */}
        <div className="space-y-4">
          {loading ? <p className="text-gray-500 text-sm">Loading schedule...</p> : schedule.map((session) => (
            <div key={session.id} className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:shadow-md transition-all cursor-pointer">
              
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg border bg-blue-50 text-blue-700 border-blue-200`}>
                  {new Date(session.date).getDate()}
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-gray-900 group-hover:text-indigo-700 transition-colors">{session.title}</h3>
                    <span className="text-[9px] font-bold uppercase tracking-wider bg-gray-100 text-gray-500 px-2 py-0.5 rounded-md">{session.type}</span>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs font-medium text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-gray-400" /> {session.startTime} - {session.endTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-gray-400" /> {session.location}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 border-t md:border-t-0 md:border-l border-gray-100 pt-3 md:pt-0 md:pl-6">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white overflow-hidden"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=A" className="w-full h-full object-cover" /></div>
                  <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white overflow-hidden"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=B" className="w-full h-full object-cover" /></div>
                  <div className="w-8 h-8 rounded-full bg-gray-50 border-2 border-white flex items-center justify-center text-[10px] font-bold text-gray-500">+3</div>
                </div>
                <button className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-xl text-xs font-bold transition-colors">
                  Join
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </SportsLayout>
  );
}
