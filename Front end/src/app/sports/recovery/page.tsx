"use client";

import { useState, useEffect } from "react";
import SportsLayout from "@/components/layout/SportsLayout";
import Link from "next/link";
import { ChevronLeft, Activity, Play, CheckCircle2 } from "lucide-react";

export default function InjuryRecoveryPage() {
  const [recoveryData, setRecoveryData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}/api/recovery`)
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
          setRecoveryData(data[0]);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);
  let exercises: any[] = [];
  if (recoveryData && recoveryData.exercises) {
    try {
      exercises = JSON.parse(recoveryData.exercises);
    } catch(e) {}
  }
  
  if (exercises.length === 0) {
    exercises = [
      { id: 1, name: "Ankle Rotations", sets: "3 sets", reps: "10 reps", done: true },
      { id: 2, name: "Resistance Band Flex", sets: "3 sets", reps: "15 reps", done: false },
      { id: 3, name: "Calf Raises (Seated)", sets: "2 sets", reps: "12 reps", done: false }
    ];
  }

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
               <Activity className="w-5 h-5 text-teal-500" /> Injury Recovery
            </h1>
            <p className="text-indigo-900/70 text-xs md:text-sm font-medium">Explore features and tools in Injury Recovery.</p>
          </div>
          
          <div className="w-full md:w-64 relative z-10 hidden md:block">
            <div className="relative w-full h-32 overflow-visible flex items-center justify-end pr-4">
              <div className="absolute top-1/2 right-1/4 transform translate-x-1/4 -translate-y-1/2 w-48 h-48 bg-gradient-to-tr from-indigo-300 via-purple-300 to-pink-300 rounded-full blur-[40px] opacity-40"></div>
              
              <img src={`https://api.dicebear.com/7.x/shapes/svg?seed=Injury Recovery&backgroundColor=transparent`} alt="Banner Icon" className="w-24 h-24 relative z-10 drop-shadow-xl bg-white rounded-full border-4 border-indigo-100 shadow-md animate-bounce" style={{ animationDuration: '3.5s' }} />
              
              <div className="absolute top-0 right-16 bg-white p-2 rounded-xl shadow-lg border border-gray-100 flex items-center gap-1 animate-bounce delay-100 z-20" style={{ animationDuration: '2.8s' }}>
                <span className="text-[9px] font-bold text-gray-800">Be You</span>
              </div>
            </div>
          </div>
        </div>

        {/* Current Plan Card */}
        <div className="bg-gradient-to-br from-teal-500 to-emerald-600 rounded-[32px] p-6 shadow-md text-white mb-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Activity className="w-32 h-32" />
          </div>

          <p className="text-xs font-bold text-teal-100 uppercase tracking-widest mb-1">Current Plan</p>
          <h2 className="text-2xl font-extrabold mb-6">{loading ? 'Loading...' : recoveryData?.injuryType || 'Ankle Sprain Grade 1'}</h2>

          <div className="mb-2 flex justify-between items-end">
            <div>
              <span className="text-3xl font-extrabold">Day 12</span>
              <span className="text-sm font-bold text-teal-100 ml-1">/ {loading ? '...' : recoveryData?.durationDays || 30}</span>
            </div>
            <span className="text-xs font-bold">{loading ? '...' : recoveryData?.progress || 40}% Recovered</span>
          </div>
          
          <div className="h-2 w-full bg-black/20 rounded-full overflow-hidden">
            <div className="h-full bg-white rounded-full" style={{ width: `${loading ? 40 : recoveryData?.progress || 40}%` }}></div>
          </div>
        </div>

        <div className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900">Today's Exercises</h2>
            <span className="text-xs font-bold text-teal-600 bg-teal-50 px-3 py-1 rounded-full">1/{exercises.length} Done</span>
          </div>

          <div className="space-y-3">
            {exercises.map((exercise: any) => (
              <div key={exercise.id} className="p-4 rounded-2xl border border-gray-100 hover:border-teal-200 hover:shadow-sm transition-all group flex items-center justify-between">
                
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${exercise.done ? 'bg-teal-500 text-white' : 'bg-gray-50 text-gray-400 group-hover:bg-teal-50 group-hover:text-teal-600'}`}>
                    <Play className="w-4 h-4 fill-current" />
                  </div>
                  <div>
                    <h3 className={`font-bold text-sm ${exercise.done ? 'text-gray-400 line-through' : 'text-gray-900'}`}>{exercise.name}</h3>
                    <p className="text-[11px] font-medium text-gray-500">{exercise.sets} • {exercise.reps}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {exercise.done ? (
                    <span className="flex items-center gap-1 text-[10px] font-bold text-teal-600 bg-teal-50 px-2 py-1 rounded-md">
                      <CheckCircle2 className="w-3 h-3" /> Done
                    </span>
                  ) : (
                    <button className="text-xs font-bold text-teal-600 hover:text-teal-700">Start</button>
                  )}
                </div>

              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-amber-50 border border-amber-100 rounded-2xl">
            <h4 className="text-xs font-bold text-amber-800 mb-1">Doctor's Note</h4>
            <p className="text-[11px] text-amber-700/80 font-medium leading-relaxed">
              {loading ? 'Loading note...' : recoveryData?.doctorNote || "Ensure you do not overstretch. Stop immediately if you feel sharp pain. Apply ice for 10 mins after workout."}
            </p>
          </div>
        </div>
      </div>
    </SportsLayout>
  );
}
