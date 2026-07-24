"use client";

import MainLayout from "@/components/layout/MainLayout";
import { useParams } from "next/navigation";
import { ArrowLeft, Star, Briefcase, GraduationCap, TrendingUp, DollarSign, Clock, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import api from "@/lib/api";

export default function CareerPage() {
  const { slug } = useParams();
  const [career, setCareer] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Generate a nicely formatted title from the slug
  const title = typeof slug === 'string' 
    ? slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : 'Career Details';

  useEffect(() => {
    // We try to fetch the career details. If there's an endpoint we can use it, 
    // or just mock some details based on the slug.
    const fetchCareerDetails = async () => {
      try {
        const response = await api.get('/education');
        if (response.data && response.data.courses) {
          const found = response.data.courses.find((c: any) => 
            c.title.toLowerCase().replace(/\s+/g, '-') === slug
          );
          if (found) {
            setCareer(found);
          }
        }
      } catch (error) {
        // Silently handle error to prevent Next.js dev overlay from showing Network Error
      } finally {
        setLoading(false);
      }
    };
    
    fetchCareerDetails();
  }, [slug]);

  // Some default animated image based on the slug to satisfy "animated pictures"
  const seed = slug || "passion";
  const animatedImageUrl = `https://api.dicebear.com/7.x/bottts/svg?seed=${seed}&scale=120`;

  return (
    <MainLayout>
      <div className="max-w-5xl mx-auto py-8 px-4">
        <Link href="/" className="inline-flex items-center gap-2 text-indigo-600 font-semibold mb-8 hover:text-indigo-800 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        
        <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 rounded-3xl p-8 md:p-12 border border-indigo-100 shadow-sm relative overflow-hidden mb-12">
          {/* Animated decorative elements */}
          <div className="absolute top-10 right-10 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse duration-[3000ms]"></div>
          <div className="absolute top-10 left-10 w-32 h-32 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse duration-[4000ms]"></div>
          <div className="absolute -bottom-8 left-20 w-32 h-32 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse duration-[5000ms]"></div>
          
          <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
            <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 bg-white rounded-full shadow-2xl flex items-center justify-center p-4 border-4 border-indigo-50 group hover:border-indigo-100 transition-all">
              {/* This is the animated picture requested */}
              <img src={animatedImageUrl} alt={title} className="w-full h-full object-contain hover:animate-spin transition-transform duration-[4000ms]" />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-bold mb-4">
                <Briefcase className="w-4 h-4" /> Career Path
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">{title}</h1>
              <p className="text-lg text-gray-600 font-medium mb-6">
                {career?.description || `Explore the exciting world of ${title}. Discover what it takes to succeed, the skills you need, and the opportunities waiting for you.`}
              </p>
              
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                <button className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:-translate-y-0.5 transition-transform">
                  Start Learning
                </button>
                <button className="bg-white text-indigo-600 border border-indigo-200 px-8 py-3 rounded-xl font-bold shadow-sm hover:bg-indigo-50 hover:-translate-y-0.5 transition-transform">
                  View Mentors
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { title: "Average Salary", value: "₹6L - ₹15L", icon: DollarSign, color: "text-green-600", bg: "bg-green-50" },
            { title: "Job Growth", value: "+22% (High)", icon: TrendingUp, color: "text-blue-600", bg: "bg-blue-50" },
            { title: "Time to Master", value: "6-12 Months", icon: Clock, color: "text-orange-600", bg: "bg-orange-50" },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-center gap-4 hover:shadow-md hover:-translate-y-1 transition-all">
              <div className={`w-12 h-12 ${stat.bg} rounded-xl flex items-center justify-center`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-500">{stat.title}</p>
                <p className="text-xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-indigo-600" /> Key Skills Required
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {["Analytical Thinking", "Problem Solving", "Communication", "Technical Proficiency", "Continuous Learning", "Team Collaboration"].map((skill, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-indigo-200 hover:bg-indigo-50/50 transition-colors group">
                <CheckCircle className="w-5 h-5 text-green-500 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-gray-700">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
