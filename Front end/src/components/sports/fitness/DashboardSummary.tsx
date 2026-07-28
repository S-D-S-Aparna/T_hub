"use client";

import { motion } from "framer-motion";
import { Activity, Flame, MapPin } from "lucide-react";

export default function DashboardSummary({ stats, liveData }: { stats: any, liveData: any }) {
  // Use real-time data if available, fallback to fetched stats
  const steps = (stats?.steps || 0) + (liveData?.steps || 0);
  const calories = (stats?.calories || 0) + (liveData?.caloriesBurned || 0);
  const distance = stats?.distance || 0;

  const stepGoal = 10000;
  const calGoal = 500;
  
  const stepPercent = Math.min((steps / stepGoal) * 100, 100);
  const calPercent = Math.min((calories / calGoal) * 100, 100);

  return (
    <div className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100 flex flex-col items-center justify-center relative overflow-hidden">
      <h2 className="text-lg font-bold text-gray-900 mb-6 self-start">Today's Summary</h2>
      
      {/* Main Rings */}
      <div className="relative w-64 h-64 flex items-center justify-center">
        
        {/* Steps Ring (Outer) */}
        <svg className="absolute inset-0 w-full h-full transform -rotate-90">
          <circle cx="128" cy="128" r="116" stroke="#f3f4f6" strokeWidth="16" fill="none" />
          <motion.circle 
            cx="128" cy="128" r="116" 
            stroke="#6C4CF1" 
            strokeWidth="16" 
            fill="none" 
            strokeLinecap="round"
            strokeDasharray={2 * Math.PI * 116}
            initial={{ strokeDashoffset: 2 * Math.PI * 116 }}
            animate={{ strokeDashoffset: (2 * Math.PI * 116) - ((2 * Math.PI * 116) * stepPercent) / 100 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </svg>

        {/* Calories Ring (Inner) */}
        <svg className="absolute inset-0 w-full h-full transform -rotate-90">
          <circle cx="128" cy="128" r="92" stroke="#f3f4f6" strokeWidth="16" fill="none" />
          <motion.circle 
            cx="128" cy="128" r="92" 
            stroke="#f59e0b" 
            strokeWidth="16" 
            fill="none" 
            strokeLinecap="round"
            strokeDasharray={2 * Math.PI * 92}
            initial={{ strokeDashoffset: 2 * Math.PI * 92 }}
            animate={{ strokeDashoffset: (2 * Math.PI * 92) - ((2 * Math.PI * 92) * calPercent) / 100 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span 
            className="text-4xl font-extrabold text-[#6C4CF1] tracking-tight"
            key={steps}
            initial={{ scale: 0.9, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            {steps.toLocaleString()}
          </motion.span>
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Steps</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 w-full mt-8 px-4">
        <div className="flex flex-col items-center gap-1">
          <Activity className="w-5 h-5 text-[#6C4CF1] mb-1" />
          <span className="text-xl font-extrabold text-gray-900">{steps.toLocaleString()}</span>
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Steps</span>
        </div>
        <div className="flex flex-col items-center gap-1 border-x border-gray-100">
          <Flame className="w-5 h-5 text-amber-500 mb-1" />
          <span className="text-xl font-extrabold text-gray-900">{calories.toLocaleString()}</span>
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Kcal</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <MapPin className="w-5 h-5 text-emerald-500 mb-1" />
          <span className="text-xl font-extrabold text-gray-900">{distance}</span>
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Km</span>
        </div>
      </div>
    </div>
  );
}
