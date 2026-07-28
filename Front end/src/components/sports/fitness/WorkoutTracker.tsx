"use client";

import { useState, useEffect } from "react";
import { Play, Pause, Square, Activity, Dumbbell, PersonStanding, Bike, Waves, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const WORKOUTS = [
  { id: 'walk', name: 'Walking', icon: PersonStanding, color: 'text-blue-500', bg: 'bg-blue-50' },
  { id: 'run', name: 'Running', icon: Activity, color: 'text-rose-500', bg: 'bg-rose-50' },
  { id: 'gym', name: 'Gym', icon: Dumbbell, color: 'text-indigo-500', bg: 'bg-indigo-50' },
  { id: 'cycle', name: 'Cycling', icon: Bike, color: 'text-amber-500', bg: 'bg-amber-50' },
  { id: 'swim', name: 'Swimming', icon: Waves, color: 'text-cyan-500', bg: 'bg-cyan-50' },
];

export default function WorkoutTracker() {
  const [activeWorkout, setActiveWorkout] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (activeWorkout && !isPaused) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [activeWorkout, isPaused]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const handleStart = (id: string) => {
    setActiveWorkout(id);
    setIsPaused(false);
    setTimer(0);
  };

  const handleFinish = () => {
    setActiveWorkout(null);
    setTimer(0);
    // In a real app, this would POST to /api/fitness/workout
  };

  return (
    <div className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100 mb-6">
      <h2 className="text-lg font-bold text-gray-900 mb-6">Workout Tracker</h2>
      
      {activeWorkout ? (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-indigo-950 rounded-2xl p-6 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10">
             <Activity className="w-32 h-32" />
          </div>
          
          <div className="relative z-10 flex flex-col items-center justify-center text-center">
            <h3 className="text-sm font-bold text-indigo-300 uppercase tracking-widest mb-2">
              {WORKOUTS.find(w => w.id === activeWorkout)?.name}
            </h3>
            
            <span className="text-6xl font-black mb-6 tabular-nums">{formatTime(timer)}</span>
            
            <div className="grid grid-cols-3 gap-8 w-full max-w-sm mx-auto mb-8">
              <div>
                <p className="text-[10px] text-indigo-300 font-bold uppercase">Calories</p>
                <p className="text-xl font-bold">124</p>
              </div>
              <div>
                <p className="text-[10px] text-indigo-300 font-bold uppercase">Avg HR</p>
                <p className="text-xl font-bold flex items-center justify-center gap-1">112 <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /></p>
              </div>
              <div>
                <p className="text-[10px] text-indigo-300 font-bold uppercase">Distance</p>
                <p className="text-xl font-bold">1.2 km</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsPaused(!isPaused)}
                className="w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                {isPaused ? <Play className="w-6 h-6 fill-current" /> : <Pause className="w-6 h-6 fill-current" />}
              </button>
              <button 
                onClick={handleFinish}
                className="px-6 py-4 rounded-full bg-[#6C4CF1] hover:bg-[#5a3ee0] font-bold transition-colors flex items-center gap-2 shadow-lg shadow-indigo-500/25"
              >
                <Square className="w-4 h-4 fill-current" /> Finish Workout
              </button>
            </div>
          </div>
        </motion.div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {WORKOUTS.map(workout => {
            const Icon = workout.icon;
            return (
              <button
                key={workout.id}
                onClick={() => handleStart(workout.id)}
                className={`flex flex-col items-center justify-center p-4 rounded-2xl border border-gray-100 hover:border-[#6C4CF1] hover:shadow-md transition-all group`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-colors ${workout.bg} ${workout.color} group-hover:bg-[#6C4CF1] group-hover:text-white`}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-gray-700">{workout.name}</span>
              </button>
            )
          })}
        </div>
      )}
    </div>
  );
}

const Heart = ({className}: {className: string}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
)
