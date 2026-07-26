"use client";

import SportsLayout from "@/components/layout/SportsLayout";
import Link from "next/link";
import { ChevronLeft, Upload, Play, CheckCircle2, AlertTriangle, FileText } from "lucide-react";

export default function AIAnalysisPage() {
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
               AI Performance Analysis
            </h1>
            <p className="text-indigo-900/70 text-xs md:text-sm font-medium">Explore features and tools in AI Performance Analysis.</p>
          </div>
          
          <div className="w-full md:w-64 relative z-10 hidden md:block">
            <div className="relative w-full h-32 overflow-visible flex items-center justify-end pr-4">
              <div className="absolute top-1/2 right-1/4 transform translate-x-1/4 -translate-y-1/2 w-48 h-48 bg-gradient-to-tr from-indigo-300 via-purple-300 to-pink-300 rounded-full blur-[40px] opacity-40"></div>
              
              <img src={`https://api.dicebear.com/7.x/shapes/svg?seed=AI Performance Analysis&backgroundColor=transparent`} alt="Banner Icon" className="w-24 h-24 relative z-10 drop-shadow-xl bg-white rounded-full border-4 border-indigo-100 shadow-md animate-bounce" style={{ animationDuration: '3.5s' }} />
              
              <div className="absolute top-0 right-16 bg-white p-2 rounded-xl shadow-lg border border-gray-100 flex items-center gap-1 animate-bounce delay-100 z-20" style={{ animationDuration: '2.8s' }}>
                <span className="text-[9px] font-bold text-gray-800">Be You</span>
              </div>
            </div>
          </div>
        </div>

        {/* Video Upload Section */}
        <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-gray-900 text-sm">Upload Your Video</h2>
            <button className="text-purple-600 font-bold text-xs flex items-center gap-1 hover:text-purple-700">
              <Upload className="w-3.5 h-3.5" /> Upload New
            </button>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden bg-gray-900 aspect-video group cursor-pointer">
            {/* Fallback image if video is not available */}
            <img 
              src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2069&auto=format&fit=crop" 
              alt="Cricket Batting" 
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform">
                <Play className="w-6 h-6 text-white fill-current ml-1" />
              </div>
            </div>
            
            {/* Progress Bar Mock */}
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gray-800">
              <div className="h-full bg-purple-500 w-[45%] relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Analysis Results */}
        <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 mb-6">
          <h2 className="font-bold text-gray-900 text-sm mb-5">Analysis Results</h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-green-50/50 rounded-xl border border-green-100">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-sm font-bold text-gray-800">Batting Stance</span>
              </div>
              <span className="text-xs font-bold text-green-600 bg-green-100 px-3 py-1 rounded-full">Good</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-orange-50/50 rounded-xl border border-orange-100">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
                  <AlertTriangle className="w-4 h-4" />
                </div>
                <span className="text-sm font-bold text-gray-800">Backlift</span>
              </div>
              <span className="text-xs font-bold text-orange-500 bg-orange-100 px-3 py-1 rounded-full">Improve</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-green-50/50 rounded-xl border border-green-100">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-sm font-bold text-gray-800">Foot Movement</span>
              </div>
              <span className="text-xs font-bold text-green-600 bg-green-100 px-3 py-1 rounded-full">Good</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-green-50/50 rounded-xl border border-green-100">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-sm font-bold text-gray-800">Follow Through</span>
              </div>
              <span className="text-xs font-bold text-green-600 bg-green-100 px-3 py-1 rounded-full">Good</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button className="w-full bg-[#6B4EFF] hover:bg-purple-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-purple-200 transition-all flex items-center justify-center gap-2">
          <FileText className="w-5 h-5" /> View Detailed Report
        </button>

      </div>
    </SportsLayout>
  );
}
