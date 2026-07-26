"use client";

import SportsLayout from "@/components/layout/SportsLayout";
import Link from "next/link";
import { ChevronLeft, Calendar as CalendarIcon, ChevronRight, MapPin, Clock } from "lucide-react";

export default function TrainingCalendarPage() {
  const schedule = [
    {
      id: 1,
      title: "Morning Run",
      type: "Cardio",
      time: "06:00 AM - 07:00 AM",
      location: "Central Park",
      color: "bg-blue-50 text-blue-700 border-blue-200"
    },
    {
      id: 2,
      title: "Team Practice",
      type: "Cricket",
      time: "04:30 PM - 06:30 PM",
      location: "Victory Grounds",
      color: "bg-indigo-50 text-indigo-700 border-indigo-200"
    },
    {
      id: 3,
      title: "Physio Session",
      type: "Recovery",
      time: "07:30 PM - 08:30 PM",
      location: "Elite Clinic",
      color: "bg-teal-50 text-teal-700 border-teal-200"
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

        {/* Schedule */}
        <div>
          <div className="flex items-center justify-between mb-4 px-2">
            <h3 className="font-bold text-gray-900">Today's Schedule</h3>
            <span className="text-xs font-bold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">3 Events</span>
          </div>

          <div className="space-y-3 pl-4 border-l-2 border-gray-100 ml-4 relative">
            {schedule.map((event) => (
              <div key={event.id} className="relative">
                {/* Timeline dot */}
                <div className="absolute -left-[21px] top-4 w-3 h-3 bg-white border-2 border-purple-500 rounded-full"></div>
                
                <div className={`p-4 rounded-2xl border ${event.color} ml-4`}>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-sm">{event.title}</h4>
                    <span className="text-[10px] font-bold uppercase tracking-wider opacity-70">{event.type}</span>
                  </div>
                  
                  <div className="space-y-1.5 opacity-90">
                    <div className="flex items-center gap-1.5 text-[11px] font-medium">
                      <Clock className="w-3.5 h-3.5" /> {event.time}
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] font-medium">
                      <MapPin className="w-3.5 h-3.5" /> {event.location}
                    </div>
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
