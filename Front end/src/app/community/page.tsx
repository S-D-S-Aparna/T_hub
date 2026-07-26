"use client";

import SportsLayout from "@/components/layout/SportsLayout";
import Link from "next/link";
import { ChevronLeft, MessageSquare, Heart, MessageCircle, Share2, MoreHorizontal } from "lucide-react";

export default function CommunityPage() {
  const tabs = ["All", "Cricket", "Football", "Fitness"];
  
  const posts = [
    {
      id: 1,
      author: "Rohit Kumar",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rohit&style=circle&backgroundColor=e2e8f0",
      time: "2h ago",
      content: "Just won the semi-final match! Feeling amazing! 🥳 🏏",
      likes: 12,
      comments: 4
    },
    {
      id: 2,
      author: "Neha Singh",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Neha&style=circle&backgroundColor=e2e8f0",
      time: "4h ago",
      content: "Sharing my new workout routine for strength & stamina 💪🔥\n1. 50 pushups\n2. 5km run\n3. Core training",
      likes: 32,
      comments: 8
    }
  ];

  return (
    <SportsLayout>
      <div className="max-w-5xl mx-auto pb-20">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-3">
            <Link href="/sports" className="p-2 hover:bg-gray-50 rounded-full transition-colors">
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </Link>
            <h1 className="text-lg font-bold text-gray-900 flex items-center gap-2">
               <MessageSquare className="w-5 h-5 text-indigo-500" /> Community
            </h1>
          </div>
          <button className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg hover:bg-indigo-700 shadow-md">
            +
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 overflow-x-auto hide-scrollbar mb-6">
          {tabs.map((tab, idx) => (
            <button 
              key={idx} 
              className={`px-5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${
                idx === 0 
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-200" 
                  : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Feed */}
        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-[24px] p-5 shadow-sm border border-gray-100">
              
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-100 bg-slate-50">
                    <img src={post.avatar} alt={post.author} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{post.author}</h4>
                    <p className="text-[10px] text-gray-500 font-medium">{post.time}</p>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>

              <div className="mb-4">
                <p className="text-[13px] text-gray-800 leading-relaxed whitespace-pre-line font-medium">
                  {post.content}
                </p>
              </div>

              <div className="flex items-center gap-6 border-t border-gray-50 pt-3">
                <button className="flex items-center gap-1.5 text-gray-500 hover:text-red-500 transition-colors group">
                  <Heart className="w-4 h-4 group-hover:fill-current" />
                  <span className="text-xs font-bold">{post.likes}</span>
                </button>
                <button className="flex items-center gap-1.5 text-gray-500 hover:text-indigo-500 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-xs font-bold">{post.comments}</span>
                </button>
                <button className="flex items-center gap-1.5 text-gray-500 hover:text-green-500 transition-colors ml-auto">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </SportsLayout>
  );
}
