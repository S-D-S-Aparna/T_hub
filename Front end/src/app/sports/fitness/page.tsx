"use client";

import SportsLayout from "@/components/layout/SportsLayout";
import Link from "next/link";
import { ChevronLeft, MoreHorizontal, Activity, Flame, Clock, MapPin, Search, Calendar } from "lucide-react";

export default function FitnessTrackerPage() {
  return (
    <SportsLayout>
      <div className="max-w-5xl mx-auto pb-20">
        
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-[32px] p-6 border border-indigo-100 relative overflow-hidden shadow-sm mb-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1 relative z-10 flex flex-col items-start w-full">
            <Link href="/sports" className="p-2 bg-white/50 hover:bg-white rounded-full transition-colors mb-4 border border-indigo-100 shadow-sm">
              <ChevronLeft className="w-5 h-5 text-indigo-600" />
            </Link>
            <h1 className="text-2xl md:text-3xl font-black text-indigo-950 mb-2 leading-tight flex items-center gap-2">
               <Activity className="w-6 h-6 text-indigo-600" /> Fitness Tracker
            </h1>
            <p className="text-indigo-900/70 text-xs md:text-sm font-medium">Track steps, calories, and workouts.</p>
          </div>
          
          <div className="flex items-center gap-2 relative z-10">
            <div className="hidden md:flex relative h-32 w-32 items-center justify-center mr-6">
              <img src="https://api.dicebear.com/7.x/shapes/svg?seed=FitnessTracker&backgroundColor=transparent" alt="Banner Icon" className="w-20 h-20 drop-shadow-xl bg-white rounded-full border-4 border-indigo-100 shadow-md animate-bounce" style={{ animationDuration: '3.5s' }} />
            </div>
            <button className="flex items-center gap-2 bg-white/50 hover:bg-white border border-indigo-100 px-4 py-2 rounded-xl text-sm font-bold text-indigo-700 shadow-sm transition-colors">
              <Calendar className="w-4 h-4" /> Today
            </button>
          </div>
        </div>

        {/* Date Selector */}
        <div className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100 mb-6 text-center">
          <h2 className="text-lg font-bold text-gray-900 mb-1">Today</h2>
          <p className="text-xs font-medium text-gray-500 mb-8">20 May 2024</p>
          
          {/* Circular Progress (Steps) */}
          <div className="flex justify-center mb-8">
            <div className="relative w-48 h-48">
              {/* Background Circle */}
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="96" cy="96" r="88" stroke="#f1f5f9" strokeWidth="12" fill="none" />
                <circle 
                  cx="96" cy="96" r="88" 
                  stroke="#0d9488" 
                  strokeWidth="12" 
                  fill="none" 
                  strokeDasharray="552.92" 
                  strokeDashoffset="110.58" /* roughly 80% */
                  className="drop-shadow-md"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-extrabold text-teal-700 tracking-tight">8,432</span>
                <span className="text-xs font-bold text-teal-600/70 uppercase tracking-widest mt-1">Steps</span>
              </div>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-3 gap-4 px-4">
            <div className="flex flex-col items-center gap-1">
              <span className="text-lg font-extrabold text-gray-900">6.2</span>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">km</span>
            </div>
            <div className="flex flex-col items-center gap-1 border-x border-gray-100">
              <span className="text-lg font-extrabold text-gray-900">412</span>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">kcal</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-lg font-extrabold text-gray-900">60</span>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">min</span>
            </div>
          </div>
        </div>

        {/* Activity Overview */}
        <div className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-gray-900 text-sm">Activity Overview</h3>
            <select className="text-xs font-bold text-gray-500 bg-gray-50 border border-gray-100 rounded-lg px-2 py-1 outline-none">
              <option>Today</option>
              <option>Week</option>
            </select>
          </div>
          
          {/* Chart Mockup */}
          <div className="h-40 w-full relative flex items-end justify-between px-2 pb-6 border-b border-gray-100">
            {/* Horizontal Grid lines */}
            <div className="absolute inset-x-0 bottom-6 h-px bg-gray-100"></div>
            <div className="absolute inset-x-0 top-1/2 h-px bg-gray-100"></div>
            <div className="absolute inset-x-0 top-4 h-px bg-gray-100"></div>
            
            {/* Wave area mock using CSS polygon or SVG */}
            <svg className="absolute inset-0 w-full h-[calc(100%-24px)] text-teal-100" preserveAspectRatio="none" viewBox="0 0 100 100">
              <path d="M0,100 L0,50 Q20,20 40,60 T80,40 T100,60 L100,100 Z" fill="currentColor" opacity="0.5" />
              <path d="M0,50 Q20,20 40,60 T80,40 T100,60" fill="none" stroke="#0d9488" strokeWidth="2" />
              {/* Highlight dot */}
              <circle cx="80" cy="40" r="3" fill="#0d9488" className="drop-shadow-md" />
            </svg>
            
            {/* X-axis labels */}
            <span className="absolute bottom-0 left-0 text-[10px] font-medium text-gray-400">12 AM</span>
            <span className="absolute bottom-0 left-1/4 text-[10px] font-medium text-gray-400">6 AM</span>
            <span className="absolute bottom-0 left-2/4 text-[10px] font-medium text-gray-400">12 PM</span>
            <span className="absolute bottom-0 left-3/4 text-[10px] font-medium text-gray-400">6 PM</span>
          </div>
          
          {/* Quick Tabs */}
          <div className="flex gap-2 mt-6">
            <button className="flex-1 py-3 rounded-2xl bg-teal-50 text-teal-700 text-xs font-bold transition-colors">
              Stats
            </button>
            <button className="flex-1 py-3 rounded-2xl bg-white border border-gray-200 text-gray-500 hover:bg-gray-50 text-xs font-bold transition-colors">
              Workouts
            </button>
          </div>
        </div>

      </div>
    </SportsLayout>
  );
}
