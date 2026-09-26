"use client";

import MainLayout from "@/components/layout/MainLayout";
import OfflineCounselor from "@/components/chat/OfflineCounselor";
import { Compass, Sparkles, Map, WifiOff, BrainCircuit } from "lucide-react";

export default function CareersPage() {
  return (
    <MainLayout>
      <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6">
        
        {/* Header Section */}
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center justify-center p-4 bg-indigo-50 rounded-2xl mb-6 shadow-inner">
            <Compass className="w-10 h-10 text-indigo-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-900 to-purple-800 mb-6 flex items-center justify-center gap-3">
            Career Discovery <Sparkles className="w-8 h-8 text-yellow-400" />
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            Not sure what path to take? Our AI Career Counselor matches your interests and academic performance to realistic career outcomes. 
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
          
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <BrainCircuit className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Smart AI Matching</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Input your unique interests and grades. Our scoring algorithm calculates the best potential career fits for your profile.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
            <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Map className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Gemini AI Roadmaps</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Once you find a career you like, instantly generate a dynamic, 5-step roadmap to make it a reality using Google's Gemini AI.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-bl-full -z-10 group-hover:scale-150 transition-transform"></div>
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform relative z-10">
              <WifiOff className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 relative z-10">100% Offline Capable</h3>
            <p className="text-gray-600 text-sm leading-relaxed relative z-10">
              No Wi-Fi? No problem. The counselor uses IndexedDB and Service Workers to continue giving you guidance completely offline.
            </p>
          </div>

        </div>

        {/* The Counselor Component */}
        <div className="animate-in fade-in slide-in-from-bottom-12 duration-700 delay-300">
          <OfflineCounselor />
        </div>

      </div>
    </MainLayout>
  );
}
