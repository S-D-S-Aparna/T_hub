"use client";

import SportsLayout from "@/components/layout/SportsLayout";
import Link from "next/link";
import { ChevronLeft, CloudSun, Wind, Droplets, Sun, MapPin, CheckCircle2 } from "lucide-react";

export default function WeatherAirQualityPage() {
  return (
    <SportsLayout>
      <div className="max-w-5xl mx-auto pb-20">
        
        {/* Header */}
        <div className="flex flex-col mb-6">
          {/* Animated Hero Banner */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-[32px] p-6 border border-indigo-100 relative overflow-hidden flex flex-col md:flex-row items-center gap-6 shadow-sm mb-6 mt-4 mx-4">
            <div className="flex-1 relative z-10 flex flex-col items-start">
              <Link href="/sports" className="p-2 bg-white/50 hover:bg-white rounded-full transition-colors mb-4 border border-indigo-100 shadow-sm">
                <ChevronLeft className="w-5 h-5 text-indigo-600" />
              </Link>
              <h1 className="text-2xl md:text-3xl font-black text-indigo-950 mb-2 leading-tight flex items-center gap-2">
                 <CloudSun className="w-6 h-6 text-indigo-600" /> Weather & Air Quality
              </h1>
              <p className="text-indigo-900/70 text-xs md:text-sm font-medium">Check local conditions before training.</p>
            </div>
            
            <div className="w-full md:w-64 relative z-10 hidden md:block">
              <div className="relative w-full h-32 overflow-visible flex items-center justify-end pr-4">
                <div className="absolute top-1/2 right-1/4 transform translate-x-1/4 -translate-y-1/2 w-48 h-48 bg-gradient-to-tr from-indigo-300 via-purple-300 to-pink-300 rounded-full blur-[40px] opacity-40"></div>
                <img src="https://api.dicebear.com/7.x/shapes/svg?seed=WeatherAQI&backgroundColor=transparent" alt="Banner Icon" className="w-24 h-24 relative z-10 drop-shadow-xl bg-white rounded-full border-4 border-indigo-100 shadow-md animate-bounce" style={{ animationDuration: '3.5s' }} />
              </div>
            </div>
          </div>
          <div className="flex items-center self-center gap-1 text-[11px] font-bold text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
            <MapPin className="w-3 h-3" /> Hyderabad
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-[32px] p-6 shadow-md text-white mb-6 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 opacity-20">
            <Sun className="w-48 h-48" />
          </div>

          <div className="relative z-10">
            <p className="text-xs font-bold text-blue-100 uppercase tracking-widest mb-2">Current Conditions</p>
            <div className="flex items-center gap-4 mb-8">
              <CloudSun className="w-16 h-16" />
              <div>
                <h2 className="text-5xl font-extrabold tracking-tighter">32°</h2>
                <p className="text-sm font-bold text-blue-100">Partly Cloudy</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 border-t border-blue-300/30 pt-4">
              <div>
                <p className="text-[10px] text-blue-100 font-bold uppercase mb-1">Wind</p>
                <div className="flex items-center gap-1 font-bold">
                  <Wind className="w-3.5 h-3.5" /> 12 km/h
                </div>
              </div>
              <div>
                <p className="text-[10px] text-blue-100 font-bold uppercase mb-1">Humidity</p>
                <div className="flex items-center gap-1 font-bold">
                  <Droplets className="w-3.5 h-3.5" /> 65%
                </div>
              </div>
              <div>
                <p className="text-[10px] text-blue-100 font-bold uppercase mb-1">UV Index</p>
                <div className="flex items-center gap-1 font-bold">
                  <Sun className="w-3.5 h-3.5" /> 4 (Mod)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Air Quality */}
        <div className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-bold text-gray-900">Air Quality Index (AQI)</h2>
            <span className="text-xs font-bold text-green-700 bg-green-100 px-3 py-1 rounded-full">Good</span>
          </div>
          
          <div className="flex items-end gap-2 mb-4">
             <span className="text-4xl font-extrabold text-green-500">42</span>
             <span className="text-xs font-bold text-gray-400 pb-1">PM2.5</span>
          </div>

          <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden mb-2 flex">
            <div className="h-full bg-green-400 w-[20%]"></div>
            <div className="h-full bg-yellow-400 w-[20%] opacity-20"></div>
            <div className="h-full bg-orange-400 w-[20%] opacity-20"></div>
            <div className="h-full bg-red-400 w-[20%] opacity-20"></div>
            <div className="h-full bg-purple-400 w-[20%] opacity-20"></div>
          </div>
          <div className="flex justify-between text-[9px] font-bold text-gray-400 uppercase">
             <span>0</span>
             <span>50</span>
             <span>100</span>
             <span>150</span>
             <span>200+</span>
          </div>
        </div>

        {/* Recommendation */}
        <div className="bg-green-50 border border-green-100 rounded-[24px] p-5 flex gap-4 items-start">
          <div className="bg-green-100 p-2 rounded-full text-green-600 mt-1">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-green-800 text-sm mb-1">Ideal for Outdoor Practice</h3>
            <p className="text-xs text-green-700/80 font-medium leading-relaxed">
              The weather and air quality are currently perfect for intense outdoor training. Don't forget to stay hydrated!
            </p>
          </div>
        </div>

      </div>
    </SportsLayout>
  );
}
