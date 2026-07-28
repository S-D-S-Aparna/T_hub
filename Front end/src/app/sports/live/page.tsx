"use client";

import { useState, useEffect } from "react";
import SportsLayout from "@/components/layout/SportsLayout";
import Link from "next/link";
import { ChevronLeft, Mic, Video, PhoneOff, Send, MessageSquare, Play } from "lucide-react";

export default function LiveCoachingPage() {
  const [sessions, setSessions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/live-sessions')
      .then(res => res.json())
      .then(data => {
        setSessions(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch sessions", err);
        setLoading(false);
      });
  }, []);
  return (
    <SportsLayout>
      <div className="max-w-5xl mx-auto pb-20">
        
        {/* Animated Hero Banner */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-[32px] p-6 border border-indigo-100 relative overflow-hidden flex flex-col md:flex-row items-center gap-6 shadow-sm mb-6">
          <div className="flex-1 relative z-10 flex flex-col items-start">
            <Link href="/sports" className="p-2 bg-white/50 hover:bg-white rounded-full transition-colors mb-4 border border-indigo-100 shadow-sm">
              <ChevronLeft className="w-5 h-5 text-indigo-600" />
            </Link>
            <h1 className="text-2xl md:text-3xl font-black text-indigo-950 mb-2 leading-tight flex items-center gap-2">
               <Video className="w-6 h-6 text-red-500" /> Live Coaching
            </h1>
            <p className="text-indigo-900/70 text-xs md:text-sm font-medium">Join elite interactive sessions with world-class mentors.</p>
          </div>
          
          <div className="w-full md:w-64 relative z-10 hidden md:block">
            <div className="relative w-full h-32 overflow-visible flex items-center justify-end pr-4">
              {/* Decorative background glow */}
              <div className="absolute top-1/2 right-1/4 transform translate-x-1/4 -translate-y-1/2 w-48 h-48 bg-gradient-to-tr from-indigo-300 via-purple-300 to-pink-300 rounded-full blur-[40px] opacity-40"></div>
              
              {/* Floating avatar */}
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=CoachPro&style=circle" alt="Coach" className="w-24 h-24 relative z-10 drop-shadow-xl bg-white rounded-full border-4 border-indigo-100 shadow-md animate-bounce" style={{ animationDuration: '3.5s' }} />
              
              {/* Floating elements */}
              <div className="absolute top-0 right-16 bg-white p-2 rounded-xl shadow-lg border border-gray-100 flex items-center gap-1 animate-bounce delay-100 z-20" style={{ animationDuration: '2.8s' }}>
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                <span className="text-[9px] font-bold text-gray-800">LIVE</span>
              </div>
              
              <div className="absolute bottom-2 right-4 bg-white p-2 rounded-xl shadow-lg border border-gray-100 flex items-center gap-1.5 animate-bounce delay-300 z-20" style={{ animationDuration: '4.2s' }}>
                <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                  <Play className="w-2.5 h-2.5 fill-current" />
                </div>
                <span className="text-[9px] font-bold text-gray-800">Pro</span>
              </div>
            </div>
          </div>
        </div>

        {/* Video Player Area */}
        <div className="bg-gray-900 rounded-[32px] overflow-hidden relative shadow-lg mb-6 aspect-[4/5] md:aspect-video">
          
          <img 
            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop" 
            alt="Live Workout" 
            className="w-full h-full object-cover opacity-90"
          />

          {/* Top Overlays */}
          <div className="absolute top-4 left-4 flex gap-2">
            <div className="bg-red-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider flex items-center gap-1 animate-pulse">
              <span className="w-1.5 h-1.5 bg-white rounded-full"></span> LIVE
            </div>
            <div className="bg-black/50 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-md flex items-center gap-1">
               👁️ 120
            </div>
          </div>

          {/* Chat Overlay */}
          <div className="absolute bottom-20 left-4 right-4 flex flex-col justify-end space-y-2 pointer-events-none">
            <div className="bg-black/40 backdrop-blur-md p-2 rounded-xl text-xs text-white max-w-[80%] border border-white/10">
              <span className="font-bold text-blue-300">Ankit:</span> Great session! 🔥
            </div>
            <div className="bg-black/40 backdrop-blur-md p-2 rounded-xl text-xs text-white max-w-[80%] border border-white/10">
              <span className="font-bold text-purple-300">Sneha:</span> Thank you coach!
            </div>
            <div className="bg-black/40 backdrop-blur-md p-2 rounded-xl text-xs text-white max-w-[80%] border border-white/10">
              <span className="font-bold text-green-300">Rohit:</span> Can you show that again?
            </div>
          </div>

          {/* Controls Bottom Bar */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4">
             <button className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 text-white hover:bg-white/30 transition-colors">
               <Mic className="w-5 h-5" />
             </button>
             <button className="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center shadow-lg shadow-red-500/50 text-white hover:bg-red-600 transition-colors hover:scale-105">
               <PhoneOff className="w-6 h-6" />
             </button>
             <button className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 text-white hover:bg-white/30 transition-colors">
               <Video className="w-5 h-5" />
             </button>
          </div>
        </div>

        {/* Upcoming Sessions */}
        <div className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100">
          <h2 className="text-sm font-bold text-gray-900 mb-4">Upcoming Sessions</h2>
          
          <div className="space-y-3">
            {loading ? (
              <p className="text-gray-500 text-sm">Loading sessions...</p>
            ) : sessions.length === 0 ? (
              <p className="text-gray-500 text-sm">No upcoming sessions.</p>
            ) : sessions.map((session) => (
              <div key={session.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-2xl border border-gray-100 group hover:border-indigo-100 hover:bg-indigo-50/50 cursor-pointer transition-colors">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-xl overflow-hidden relative">
                     <img src={session.image || "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"} className="w-full h-full object-cover" alt={session.sport} />
                   </div>
                   <div>
                     <h3 className="text-xs font-bold text-gray-900 group-hover:text-indigo-700">{session.title}</h3>
                     <p className="text-[10px] text-gray-500 font-medium">{new Date(session.date).toLocaleString()} • {session.coach}</p>
                   </div>
                 </div>
                 <button className="text-[10px] font-bold text-indigo-600 bg-indigo-100 px-3 py-1.5 rounded-lg hover:bg-indigo-200 transition-colors">Book</button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </SportsLayout>
  );
}
