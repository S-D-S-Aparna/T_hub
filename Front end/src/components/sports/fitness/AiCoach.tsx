"use client";

import { Brain, Droplet, Moon, Target, Utensils } from "lucide-react";
import { motion } from "framer-motion";

export default function AiCoach({ liveData }: { liveData: any }) {
  const steps = liveData?.steps || 0;
  
  const getMessage = () => {
    if (steps < 5000) return "You are 5,000 steps behind today's goal. A 30-minute walk will complete your target.";
    if (steps < 10000) return "Great progress! Just a little more to hit your 10K goal today.";
    return "Amazing! You've crushed your daily step goal. Time to recover and hydrate.";
  };

  return (
    <div className="bg-gradient-to-br from-indigo-900 to-[#6C4CF1] rounded-[32px] p-6 text-white shadow-xl mb-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <Brain className="w-48 h-48" />
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <Brain className="w-5 h-5 text-indigo-300" />
          <h2 className="text-sm font-bold text-indigo-100 uppercase tracking-widest">AI Fitness Coach</h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 mb-6 shadow-sm"
        >
          <p className="text-lg font-medium leading-snug">
            "{getMessage()}"
          </p>
        </motion.div>

        <h3 className="text-xs font-bold text-indigo-200 mb-3 uppercase tracking-wider">Today's Recommendations</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white/5 rounded-xl p-3 flex items-start gap-3 border border-white/10 hover:bg-white/10 transition-colors">
            <Droplet className="w-5 h-5 text-sky-400 shrink-0" />
            <div>
              <p className="text-xs font-bold text-white mb-0.5">Hydration Alert</p>
              <p className="text-[10px] text-indigo-200 leading-tight">Drink 500ml of water now based on your recent activity.</p>
            </div>
          </div>
          
          <div className="bg-white/5 rounded-xl p-3 flex items-start gap-3 border border-white/10 hover:bg-white/10 transition-colors">
            <Moon className="w-5 h-5 text-indigo-300 shrink-0" />
            <div>
              <p className="text-xs font-bold text-white mb-0.5">Sleep Quality</p>
              <p className="text-[10px] text-indigo-200 leading-tight">Your REM sleep was low. Try aiming for 8 hours tonight.</p>
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-3 flex items-start gap-3 border border-white/10 hover:bg-white/10 transition-colors">
            <Utensils className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <p className="text-xs font-bold text-white mb-0.5">Calorie Suggestion</p>
              <p className="text-[10px] text-indigo-200 leading-tight">Eat a high protein lunch to aid muscle recovery.</p>
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-3 flex items-start gap-3 border border-white/10 hover:bg-white/10 transition-colors">
            <Target className="w-5 h-5 text-rose-400 shrink-0" />
            <div>
              <p className="text-xs font-bold text-white mb-0.5">Weekly Goal</p>
              <p className="text-[10px] text-indigo-200 leading-tight">You're on track to hit 3 workouts this week.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
