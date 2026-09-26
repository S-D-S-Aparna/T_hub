"use client";

import { motion } from "framer-motion";
import { Heart, Activity, Droplet, Flame } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";

export default function LiveTracking({ setLiveData }: { setLiveData: (data: any) => void }) {
  const [data, setData] = useState({
    heartRate: 72,
    steps: 0,
    spo2: 98,
    caloriesBurned: 0
  });

  const dataRef = useRef(data);
  useEffect(() => {
    dataRef.current = data;
  }, [data]);

  useEffect(() => {
    const socket = io(process.env.NEXT_PUBLIC_API_URL || `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}`);

    socket.on("connect", () => {
      socket.emit("join_fitness_sync");
    });

    socket.on("live_fitness_update", (newData: any) => {
      const prev = dataRef.current;
      const nextData = {
        heartRate: newData.heartRate,
        steps: prev.steps + newData.steps,
        spo2: newData.spo2,
        caloriesBurned: prev.caloriesBurned + newData.caloriesBurned
      };
      setData(nextData);
      setLiveData(nextData);
    });

    return () => {
      socket.emit("leave_fitness_sync");
      socket.disconnect();
    };
  }, [setLiveData]);

  return (
    <div className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100 mb-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          Live Health Tracking
        </h2>
        <span className="text-xs font-bold text-gray-500 bg-gray-50 px-3 py-1 rounded-full">Syncing...</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Heart Rate */}
        <motion.div 
          key={data.heartRate}
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          className="bg-rose-50/50 border border-rose-100 rounded-2xl p-4 flex flex-col items-center justify-center text-center"
        >
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }} 
            transition={{ repeat: Infinity, duration: 1 }}
          >
            <Heart className="w-8 h-8 text-rose-500 mb-2 fill-rose-500/20" />
          </motion.div>
          <span className="text-2xl font-black text-rose-950">{data.heartRate} <span className="text-sm font-bold text-rose-400">bpm</span></span>
          <span className="text-[10px] font-bold text-rose-500 uppercase tracking-widest mt-1">Heart Rate</span>
        </motion.div>

        {/* Live Steps */}
        <div className="bg-indigo-50/50 border border-indigo-100 rounded-2xl p-4 flex flex-col items-center justify-center text-center">
          <Activity className="w-8 h-8 text-[#6C4CF1] mb-2" />
          <span className="text-2xl font-black text-indigo-950">+{data.steps}</span>
          <span className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest mt-1">Live Steps</span>
        </div>

        {/* SpO2 */}
        <div className="bg-sky-50/50 border border-sky-100 rounded-2xl p-4 flex flex-col items-center justify-center text-center">
          <Droplet className="w-8 h-8 text-sky-500 mb-2" />
          <span className="text-2xl font-black text-sky-950">{data.spo2}<span className="text-sm font-bold text-sky-400">%</span></span>
          <span className="text-[10px] font-bold text-sky-500 uppercase tracking-widest mt-1">Blood Oxygen</span>
        </div>

        {/* Live Calories */}
        <div className="bg-amber-50/50 border border-amber-100 rounded-2xl p-4 flex flex-col items-center justify-center text-center">
          <Flame className="w-8 h-8 text-amber-500 mb-2" />
          <span className="text-2xl font-black text-amber-950">+{data.caloriesBurned}</span>
          <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest mt-1">Live Kcal</span>
        </div>
      </div>
    </div>
  );
}
