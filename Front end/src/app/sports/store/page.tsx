"use client";

import { useState, useEffect } from "react";
import SportsLayout from "@/components/layout/SportsLayout";
import Link from "next/link";
import { ChevronLeft, Search, ShoppingBag, Star, Heart, ShoppingCart } from "lucide-react";

export default function SportsStorePage() {
  const categories = ["All", "Shoes", "Cricket Bats", "Apparel", "Accessories"];
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/store')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);
  


  return (
    <SportsLayout>
      <div className="max-w-5xl mx-auto pb-20">
        
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-[32px] p-6 border border-indigo-100 relative overflow-hidden shadow-sm mb-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1 relative z-10 flex flex-col items-start w-full">
            <Link href="/sports" className="p-2 bg-white/50 hover:bg-white rounded-full transition-colors mb-4 border border-indigo-100 shadow-sm">
              <ChevronLeft className="w-5 h-5 text-indigo-600" />
            </Link>
            <h1 className="text-2xl md:text-3xl font-black text-indigo-950 mb-2 leading-tight flex items-center gap-2">
               <ShoppingBag className="w-6 h-6 text-indigo-600" /> Sports Store
            </h1>
            <p className="text-indigo-900/70 text-xs md:text-sm font-medium">Explore premium sports gear.</p>
          </div>
          
          <div className="flex items-center gap-2 relative z-10">
            <div className="hidden md:flex relative h-32 w-32 items-center justify-center mr-6">
              <img src="https://api.dicebear.com/7.x/shapes/svg?seed=SportsStore&backgroundColor=transparent" alt="Banner Icon" className="w-20 h-20 drop-shadow-xl bg-white rounded-full border-4 border-indigo-100 shadow-md animate-bounce" style={{ animationDuration: '3.5s' }} />
            </div>
            <button className="p-2 hover:bg-white bg-white/50 rounded-full transition-colors border border-indigo-100 shadow-sm">
              <Search className="w-5 h-5 text-indigo-600" />
            </button>
            <button className="p-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition-colors shadow-md relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">3</span>
            </button>
          </div>
        </div>

        {/* Promo Banner */}
        <div className="bg-gradient-to-r from-orange-400 to-rose-500 rounded-[32px] p-6 shadow-md text-white mb-6 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-orange-100 uppercase tracking-widest mb-1">Summer Sale</p>
            <h2 className="text-2xl font-extrabold mb-3">Up to 40% Off</h2>
            <button className="bg-white text-orange-600 px-4 py-2 rounded-xl text-xs font-bold shadow-sm hover:scale-105 transition-transform">
              Shop Now
            </button>
          </div>
          <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <ShoppingBag className="w-10 h-10 text-white" />
          </div>
        </div>

        {/* Search & Categories */}
        <div className="mb-6 space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search gear..." 
              className="w-full bg-white border border-gray-100 shadow-sm rounded-2xl py-3.5 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-medium text-gray-800"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto hide-scrollbar">
            {categories.map((cat, idx) => (
              <button 
                key={idx} 
                className={`px-5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${
                  idx === 0 
                    ? "bg-gray-900 text-white shadow-md" 
                    : "bg-white border border-gray-100 text-gray-600 hover:bg-gray-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {loading ? <p className="text-gray-500 text-sm">Loading products...</p> : products.map((product) => (
            <div key={product.id} className="bg-white rounded-3xl p-3 shadow-sm border border-gray-100 group hover:shadow-md hover:border-indigo-200 transition-all cursor-pointer relative">
              
              <button className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-white transition-colors">
                <Heart className="w-4 h-4" />
              </button>

              <div className="w-full aspect-square rounded-2xl overflow-hidden mb-4 bg-gray-50 relative group-hover:bg-indigo-50/30 transition-colors">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" />
              </div>

              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">{product.category}</p>
              <h3 className="font-bold text-gray-900 text-sm mb-1 leading-tight group-hover:text-indigo-700 transition-colors line-clamp-1">{product.name}</h3>
              
              <div className="flex items-center gap-1 mb-3">
                <Star className="w-3 h-3 text-yellow-400 fill-current" />
                <span className="text-[10px] font-bold text-gray-600">{product.rating}</span>
              </div>

              <div className="flex items-center justify-between border-t border-gray-50 pt-3">
                <span className="font-extrabold text-gray-900">{product.price}</span>
                <button className="w-8 h-8 bg-gray-900 text-white rounded-xl flex items-center justify-center hover:bg-indigo-600 transition-colors shadow-sm">
                  <ShoppingCart className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </SportsLayout>
  );
}
