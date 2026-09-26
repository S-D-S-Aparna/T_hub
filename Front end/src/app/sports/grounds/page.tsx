"use client";

import { useState, useEffect } from "react";
import SportsLayout from "@/components/layout/SportsLayout";
import Link from "next/link";
import { ChevronLeft, Search, MapPin, Map as MapIcon, Star } from "lucide-react";

export default function SportsGroundsPage() {
  const [grounds, setGrounds] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}/api/grounds`)
      .then(res => res.json())
      .then(data => {
        setGrounds(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to load grounds", err);
        setLoading(false);
      });
  }, []);

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
               <MapIcon className="w-5 h-5 text-emerald-500" /> Sports Grounds
            </h1>
            <p className="text-indigo-900/70 text-xs md:text-sm font-medium">Explore features and tools in Sports Grounds.</p>
          </div>
          
          <div className="w-full md:w-64 relative z-10 hidden md:block">
            <div className="relative w-full h-32 overflow-visible flex items-center justify-end pr-4">
              <div className="absolute top-1/2 right-1/4 transform translate-x-1/4 -translate-y-1/2 w-48 h-48 bg-gradient-to-tr from-indigo-300 via-purple-300 to-pink-300 rounded-full blur-[40px] opacity-40"></div>
              
              <img src={`https://api.dicebear.com/7.x/shapes/svg?seed=Sports Grounds&backgroundColor=transparent`} alt="Banner Icon" className="w-24 h-24 relative z-10 drop-shadow-xl bg-white rounded-full border-4 border-indigo-100 shadow-md animate-bounce" style={{ animationDuration: '3.5s' }} />
              
              <div className="absolute top-0 right-16 bg-white p-2 rounded-xl shadow-lg border border-gray-100 flex items-center gap-1 animate-bounce delay-100 z-20" style={{ animationDuration: '2.8s' }}>
                <span className="text-[9px] font-bold text-gray-800">Be You</span>
              </div>
            </div>
          </div>
        </div>

        {/* Map View & Search */}
        <div className="bg-white rounded-[32px] p-4 shadow-sm border border-gray-100 mb-6 relative overflow-hidden">
          
          <div className="h-[200px] rounded-2xl overflow-hidden mb-4 relative">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15226.772596541607!2d78.43163351984242!3d17.426462719588267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1ssports%20grounds!5e0!3m2!1sen!2sin!4v1715694218654!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
          </div>

          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search location..." 
              className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-3.5 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all placeholder-gray-400 font-medium text-gray-800 shadow-sm"
            />
          </div>
        </div>

        {/* Grounds List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading ? (
              <p className="text-gray-500 text-sm">Loading sports grounds...</p>
            ) : grounds.length === 0 ? (
              <p className="text-gray-500 text-sm">No sports grounds found.</p>
            ) : grounds.map((ground) => (
            <div key={ground.id} className="bg-white rounded-[24px] p-3 shadow-sm border border-gray-100 flex gap-3 hover:shadow-md hover:border-emerald-200 transition-all group cursor-pointer">
              
              <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 relative">
                <img src={ground.image} alt={ground.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              
              <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold text-gray-900 leading-tight group-hover:text-emerald-600 transition-colors">{ground.name}</h3>
                      <div className="flex items-center gap-1 bg-yellow-50 px-1.5 py-0.5 rounded text-[10px] font-bold text-yellow-700">
                        <Star className="w-3 h-3 fill-current" /> {ground.rating || 4.5}
                      </div>
                    </div>
                    <p className="text-[11px] text-gray-500 font-medium mb-3">{ground.sport || ground.sports}</p>
                    
                    <div className="flex items-center gap-2 text-[11px] font-medium text-gray-500 mb-4">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" /> {ground.location} • {ground.distance || "5 km"}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                    <span className="font-bold text-gray-900 text-sm">{ground.hourlyRate || ground.price}<span className="text-[10px] text-gray-400 font-medium">/hr</span></span>
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-1.5 rounded-lg text-xs font-bold transition-all shadow-sm">
                    Book
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </SportsLayout>
  );
}
