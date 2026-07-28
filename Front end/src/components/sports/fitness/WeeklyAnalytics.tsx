"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { useState } from "react";
import { BarChart3 } from "lucide-react";

const data = [
  { name: 'Mon', steps: 4000 },
  { name: 'Tue', steps: 7000 },
  { name: 'Wed', steps: 11000 },
  { name: 'Thu', steps: 8500 },
  { name: 'Fri', steps: 12500 },
  { name: 'Sat', steps: 6000 },
  { name: 'Sun', steps: 9000 },
];

export default function WeeklyAnalytics() {
  const [filter, setFilter] = useState("Week");

  return (
    <div className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100 mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-[#6C4CF1]" /> Analytics
        </h2>
        
        <div className="flex items-center gap-2 bg-gray-50 p-1 rounded-full border border-gray-100">
          {["Day", "Week", "Month", "Year"].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors ${
                filter === f 
                  ? "bg-white text-gray-900 shadow-sm" 
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="h-64 w-full mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12, fill: '#9ca3af', fontWeight: 600 }} 
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12, fill: '#9ca3af', fontWeight: 600 }}
              tickFormatter={(value) => `${value / 1000}k`}
            />
            <Tooltip 
              cursor={{ fill: '#f3f4f6' }}
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
            <Bar dataKey="steps" radius={[6, 6, 6, 6]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.steps >= 10000 ? '#6C4CF1' : '#c7bdf9'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <p className="text-center text-xs font-bold text-gray-400 mt-4 uppercase tracking-widest">Steps ({filter})</p>
    </div>
  );
}
