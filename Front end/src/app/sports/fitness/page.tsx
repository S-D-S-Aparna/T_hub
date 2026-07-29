"use client";

import { useState, useEffect } from "react";
import SportsLayout from "@/components/layout/SportsLayout";
import Link from "next/link";
import { ChevronLeft, Activity, Calendar } from "lucide-react";

// Import new modular components
import DashboardSummary from "@/components/sports/fitness/DashboardSummary";
import LiveTracking from "@/components/sports/fitness/LiveTracking";
import WorkoutTracker from "@/components/sports/fitness/WorkoutTracker";
import AiCoach from "@/components/sports/fitness/AiCoach";
import WeeklyAnalytics from "@/components/sports/fitness/WeeklyAnalytics";
import ActivityTimeline from "@/components/sports/fitness/ActivityTimeline";
import NutritionIntegration from "@/components/sports/fitness/NutritionIntegration";
import DeviceConnectivity from "@/components/sports/fitness/DeviceConnectivity";

export default function FitnessTrackerPage() {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [liveData, setLiveData] = useState<any>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL || "https://t-hub-yxvu.onrender.com"}/api/fitness`)
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
          setStats(data[0]); // latest stats
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <SportsLayout>
      <div className="max-w-6xl mx-auto pb-20">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-[32px] p-6 border border-indigo-100 relative overflow-hidden shadow-sm mb-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1 relative z-10 flex flex-col items-start w-full">
            <Link href="/sports" className="p-2 bg-white/50 hover:bg-white rounded-full transition-colors mb-4 border border-indigo-100 shadow-sm">
              <ChevronLeft className="w-5 h-5 text-indigo-600" />
            </Link>
            <h1 className="text-2xl md:text-3xl font-black text-indigo-950 mb-2 leading-tight flex items-center gap-2">
               <Activity className="w-6 h-6 text-indigo-600" /> Fitness Tracker
            </h1>
            <p className="text-indigo-900/70 text-xs md:text-sm font-medium">Real-time health insights and AI Coaching.</p>
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

        {/* Dashboard Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Main Left Column */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <LiveTracking setLiveData={setLiveData} />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <DashboardSummary stats={stats} liveData={liveData} />
              <div className="flex flex-col gap-6">
                <AiCoach liveData={liveData} />
                <NutritionIntegration />
              </div>
            </div>

            <WorkoutTracker />
            <WeeklyAnalytics />
          </div>

          {/* Right Sidebar Column */}
          <div className="flex flex-col gap-6">
            <DeviceConnectivity />
            <ActivityTimeline />
          </div>

        </div>

      </div>
    </SportsLayout>
  );
}
