"use client";

import { useState, useEffect } from "react";
import SportsLayout from "@/components/layout/SportsLayout";
import Link from "next/link";
import { ChevronLeft, ChevronDown, Compass, CheckCircle2, Circle, ArrowRight } from "lucide-react";

export default function CareerRoadmapPage() {
  const [roadmap, setRoadmap] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL || "https://t-hub-yxvu.onrender.com"}/api/sports-roadmaps`)
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
          setRoadmap(data[0]);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);
  let steps = [];
  if (roadmap && roadmap.milestones) {
    try {
      const parsed = JSON.parse(roadmap.milestones);
      steps = parsed.map((m: string, i: number) => ({
        id: i + 1,
        title: m,
        duration: "Variable",
        status: i === 0 ? "completed" : (i === 1 ? "active" : "pending"),
        icon: (i + 1).toString()
      }));
    } catch(e) {}
  }
  
  if (steps.length === 0) {
    steps = [
      { id: 1, title: "Learn the Basics", duration: "6-12 Months", status: "completed", icon: "1" },
      { id: 2, title: "Join Local Academy", duration: "1-2 Years", status: "active", icon: "2" },
      { id: 3, title: "State Level Participation", duration: "2-3 Years", status: "pending", icon: "3" },
      { id: 4, title: "National Level Selection", duration: "3-5 Years", status: "pending", icon: "4" },
      { id: 5, title: "Professional Cricket", duration: "5+ Years", status: "pending", icon: "5" }
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
               Career Roadmap
            </h1>
            <p className="text-indigo-900/70 text-xs md:text-sm font-medium">Explore features and tools in Career Roadmap.</p>
          </div>
          
          <div className="w-full md:w-64 relative z-10 hidden md:block">
            <div className="relative w-full h-32 overflow-visible flex items-center justify-end pr-4">
              <div className="absolute top-1/2 right-1/4 transform translate-x-1/4 -translate-y-1/2 w-48 h-48 bg-gradient-to-tr from-indigo-300 via-purple-300 to-pink-300 rounded-full blur-[40px] opacity-40"></div>
              
              <img src={`https://api.dicebear.com/7.x/shapes/svg?seed=Career Roadmap&backgroundColor=transparent`} alt="Banner Icon" className="w-24 h-24 relative z-10 drop-shadow-xl bg-white rounded-full border-4 border-indigo-100 shadow-md animate-bounce" style={{ animationDuration: '3.5s' }} />
              
              <div className="absolute top-0 right-16 bg-white p-2 rounded-xl shadow-lg border border-gray-100 flex items-center gap-1 animate-bounce delay-100 z-20" style={{ animationDuration: '2.8s' }}>
                <span className="text-[9px] font-bold text-gray-800">Be You</span>
              </div>
            </div>
          </div>
        </div>

        {/* Selected Roadmap Dropdown */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-6 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center border border-teal-100 text-teal-600">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-bold text-gray-900 text-[15px]">{roadmap ? roadmap.title : "Loading..."}</h2>
              <p className="text-xs text-gray-500 font-medium">{roadmap ? roadmap.goal : "Professional Roadmap"}</p>
            </div>
          </div>
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 mb-6">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gray-100"></div>

            <div className="space-y-8 relative">
              {steps.map((step: any, index: any) => (
                <div key={step.id} className="flex gap-4">
                  
                  {/* Step Icon & Line Indicator */}
                  <div className="relative z-10 flex-shrink-0">
                    {step.status === 'completed' && (
                      <div className="w-12 h-12 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center shadow-sm">
                        <span className="font-bold text-blue-600 text-sm">{step.icon}</span>
                      </div>
                    )}
                    {step.status === 'active' && (
                      <div className="w-12 h-12 rounded-full bg-teal-100 border-2 border-teal-500 flex items-center justify-center shadow-sm ring-4 ring-teal-50">
                        <span className="font-bold text-teal-700 text-sm">{step.icon}</span>
                      </div>
                    )}
                    {step.status === 'pending' && (
                      <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm text-gray-400">
                        <span className="font-bold text-sm">{step.icon}</span>
                      </div>
                    )}
                  </div>

                  {/* Step Content */}
                  <div className={`flex flex-col justify-center ${step.status === 'pending' ? 'opacity-50' : ''}`}>
                    <h3 className={`font-bold text-sm ${step.status === 'active' ? 'text-teal-700' : 'text-gray-900'}`}>
                      {step.title}
                    </h3>
                    <p className="text-[11px] font-medium text-gray-500">{step.duration}</p>
                    
                    {step.status === 'active' && (
                      <button className="mt-2 text-[10px] font-bold text-teal-600 uppercase tracking-wider flex items-center gap-1">
                        View Details <ArrowRight className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                  
                  {step.status === 'completed' && (
                    <div className="ml-auto flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-blue-500" />
                    </div>
                  )}

                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Explore Other Options */}
        <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-5 border border-gray-200 border-dashed cursor-pointer hover:border-gray-300 transition-colors group flex items-center justify-between">
          <div>
            <h3 className="font-bold text-gray-900 text-[13px] mb-1">Explore Career Options</h3>
            <p className="text-[11px] text-gray-500 font-medium">Coach, Analyst, Sports Manager & more</p>
          </div>
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:bg-gray-50 transition-colors">
            <ArrowRight className="w-4 h-4 text-gray-600" />
          </div>
        </div>

      </div>
    </SportsLayout>
  );
}
