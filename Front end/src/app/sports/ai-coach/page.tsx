"use client";

import SportsLayout from "@/components/layout/SportsLayout";
import Link from "next/link";
import { ChevronLeft, Info, Paperclip, Send, Bot } from "lucide-react";
import { useState } from "react";

export default function SportsAICoach() {
  const [message, setMessage] = useState("");

  return (
    <SportsLayout>
      <div className="max-w-2xl mx-auto h-[calc(100vh-8rem)] flex flex-col bg-white rounded-[24px] shadow-sm border border-gray-100 overflow-hidden relative">
        
        {/* Animated Chat Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 flex items-center justify-between z-10 relative overflow-hidden shadow-md">
          {/* Decorative background effects */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-10 w-40 h-40 bg-indigo-400/20 rounded-full blur-2xl"></div>

          <div className="flex items-center gap-4 relative z-10">
            <Link href="/sports" className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors border border-white/20">
              <ChevronLeft className="w-5 h-5" />
            </Link>
            
            <div className="flex items-center gap-3">
              <div className="relative animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-4 border-indigo-400/30 shadow-lg">
                  <img src="https://api.dicebear.com/7.x/bottts/svg?seed=Coach&backgroundColor=transparent" alt="Bot" className="w-7 h-7" />
                </div>
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-400 border-2 border-indigo-600 rounded-full animate-pulse"></span>
              </div>
              <div>
                <h2 className="font-black text-white text-lg flex items-center gap-1.5">Be You AI Coach ✨</h2>
                <p className="text-[11px] text-indigo-100 font-medium">Your 24/7 Personal Sports Mentor</p>
              </div>
            </div>
          </div>
          
          <button className="p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors relative z-10 border border-white/20">
            <Info className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-gray-50/30 custom-scrollbar">
          
          {/* AI Message */}
          <div className="flex gap-3">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex-shrink-0 flex items-center justify-center border border-white shadow-sm mt-1">
              <img src="https://api.dicebear.com/7.x/bottts/svg?seed=Coach&backgroundColor=transparent" alt="Bot" className="w-5 h-5" />
            </div>
            <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 max-w-[85%]">
              <p className="text-[13px] text-gray-800 leading-relaxed font-medium">Hello Aparna!<br/>How can I help you today?</p>
            </div>
          </div>

          {/* User Message */}
          <div className="flex gap-3 justify-end">
            <div className="bg-[#6B4EFF] text-white p-4 rounded-2xl rounded-tr-none shadow-md max-w-[85%]">
              <p className="text-[13px] font-medium leading-relaxed">How can I improve my sprint speed?</p>
            </div>
          </div>

          {/* AI Message (Long) */}
          <div className="flex gap-3">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex-shrink-0 flex items-center justify-center border border-white shadow-sm mt-1">
              <img src="https://api.dicebear.com/7.x/bottts/svg?seed=Coach&backgroundColor=transparent" alt="Bot" className="w-5 h-5" />
            </div>
            <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 max-w-[85%] space-y-3">
              <p className="text-[13px] text-gray-800 font-medium">To improve your sprint speed:</p>
              <ul className="text-[13px] text-gray-600 space-y-2 list-disc pl-5 marker:text-purple-400 leading-relaxed font-medium">
                <li>Do high intensity interval training</li>
                <li>Focus on leg strength</li>
                <li>Improve your start technique</li>
                <li>Stretch and recover well</li>
              </ul>
              <p className="text-[13px] text-gray-900 pt-1 font-bold">Would you like a personalized 7-day plan?</p>
            </div>
          </div>

          {/* Quick Replies */}
          <div className="flex gap-2 pl-11">
            <button className="px-5 py-2.5 bg-[#f3e8ff] text-[#6B4EFF] rounded-full text-xs font-bold border border-[#e9d5ff] hover:bg-[#e9d5ff] transition-colors shadow-sm">
              Yes, please!
            </button>
            <button className="px-5 py-2.5 bg-white text-gray-600 rounded-full text-xs font-bold border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm">
              More tips
            </button>
          </div>

        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-gray-100 shadow-[0_-4px_10px_rgba(0,0,0,0.02)]">
          <div className="flex items-center gap-2">
            <button className="p-2.5 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-full transition-colors flex-shrink-0">
              <Paperclip className="w-5 h-5" />
            </button>
            <div className="flex-1 relative">
              <input 
                type="text" 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask anything..." 
                className="w-full bg-gray-50 border border-gray-200 rounded-full py-3.5 px-5 text-[13px] font-medium text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6B4EFF]/20 focus:border-[#6B4EFF] transition-all"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && message.trim()) {
                    setMessage("");
                  }
                }}
              />
            </div>
            <button 
              className="w-12 h-12 bg-[#6B4EFF] text-white rounded-full hover:bg-purple-700 transition-transform hover:scale-105 shadow-lg shadow-purple-200/50 flex items-center justify-center flex-shrink-0"
              onClick={() => {
                if (message.trim()) setMessage("");
              }}
            >
              <Send className="w-5 h-5 ml-1" />
            </button>
          </div>
        </div>

      </div>
    </SportsLayout>
  );
}
