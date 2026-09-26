"use client";

import { useState, useEffect } from "react";
import SportsLayout from "@/components/layout/SportsLayout";
import Link from "next/link";
import { ChevronLeft, Apple, Flame, Plus, Info } from "lucide-react";

export default function NutritionPlannerPage() {
  const [dietPlan, setDietPlan] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}/api/nutrition`)
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
          setDietPlan(data[0]); // get first plan
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const macros = [
    { name: "Carbs", current: 150, max: 250, color: "bg-blue-500" },
    { name: "Protein", current: 90, max: 140, color: "bg-rose-500" },
    { name: "Fats", current: 40, max: 65, color: "bg-amber-500" }
  ];

  let meals = [];
  if (dietPlan && dietPlan.meals) {
    try {
      meals = JSON.parse(dietPlan.meals);
    } catch(e) {}
  }
  if (meals.length === 0) {
    meals = [
      { type: "Breakfast", meal: "Oatmeal with berries", calories: 350, time: "08:00 AM" },
      { type: "Lunch", meal: "Grilled Chicken Salad", calories: 450, time: "01:30 PM" },
      { type: "Snack", meal: "Protein Shake", calories: 150, time: "05:00 PM" }
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
               <Apple className="w-5 h-5 text-rose-500" /> Nutrition Planner
            </h1>
            <p className="text-indigo-900/70 text-xs md:text-sm font-medium">Explore features and tools in Nutrition Planner.</p>
          </div>
          
          <div className="w-full md:w-64 relative z-10 hidden md:block">
            <div className="relative w-full h-32 overflow-visible flex items-center justify-end pr-4">
              <div className="absolute top-1/2 right-1/4 transform translate-x-1/4 -translate-y-1/2 w-48 h-48 bg-gradient-to-tr from-indigo-300 via-purple-300 to-pink-300 rounded-full blur-[40px] opacity-40"></div>
              
              <img src={`https://api.dicebear.com/7.x/shapes/svg?seed=Nutrition Planner&backgroundColor=transparent`} alt="Banner Icon" className="w-24 h-24 relative z-10 drop-shadow-xl bg-white rounded-full border-4 border-indigo-100 shadow-md animate-bounce" style={{ animationDuration: '3.5s' }} />
              
              <div className="absolute top-0 right-16 bg-white p-2 rounded-xl shadow-lg border border-gray-100 flex items-center gap-1 animate-bounce delay-100 z-20" style={{ animationDuration: '2.8s' }}>
                <span className="text-[9px] font-bold text-gray-800">Be You</span>
              </div>
            </div>
          </div>
        </div>

        {/* Daily Summary */}
        <div className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100 mb-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Flame className="w-32 h-32 text-rose-500" />
          </div>

          <h2 className="text-sm font-bold text-gray-900 mb-1">Today's Summary - {dietPlan ? dietPlan.title : 'Loading...'}</h2>
          <div className="flex items-end gap-2 mb-6">
            <span className="text-4xl font-extrabold text-rose-500 tracking-tight">{dietPlan ? dietPlan.dailyCalories : 0}</span>
            <span className="text-sm font-bold text-gray-500 pb-1">kcal target</span>
          </div>

          {/* Macros */}
          <div className="space-y-4">
            {macros.map((macro, idx) => (
              <div key={idx}>
                <div className="flex justify-between text-[11px] font-bold mb-1">
                  <span className="text-gray-700">{macro.name}</span>
                  <span className="text-gray-500">{macro.current}g / {macro.max}g</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${macro.color} rounded-full`}
                    style={{ width: `${(macro.current / macro.max) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Meals */}
        <div className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900">Meals</h2>
            <button className="bg-rose-50 text-rose-600 w-8 h-8 rounded-full flex items-center justify-center hover:bg-rose-100 transition-colors">
              <Plus className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-3">
            {loading ? <p className="text-gray-500 text-sm">Loading meals...</p> : meals.map((meal: any, idx: number) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-2xl border border-gray-100 group">
                <div>
                  <p className="text-[10px] font-bold text-rose-500 uppercase tracking-wider mb-0.5">{meal.time || meal.type}</p>
                  <h4 className="text-sm font-bold text-gray-900">{meal.meal || meal.name}</h4>
                  <p className="text-[11px] text-gray-500 font-medium">{meal.time}</p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-extrabold text-gray-900">{meal.calories || 300}</span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase">kcal</span>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-6 py-3.5 bg-gray-900 text-white font-bold rounded-xl text-sm shadow-md hover:bg-gray-800 transition-all">
            Generate New Plan
          </button>
        </div>

      </div>
    </SportsLayout>
  );
}
