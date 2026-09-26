"use client";

import React, { useState, useEffect } from "react";
import { Bot, Sparkles, GraduationCap, CloudOff, RefreshCw, CheckCircle2 } from "lucide-react";
import { db, CareerPath } from "@/lib/db";
import { useLiveQuery } from "dexie-react-hooks";
import { useRouter } from "next/navigation";

// Fallback offline dataset for initialization
const fallbackCareerDatabase = [
  {
    title: "Data Scientist",
    description: "Analyze data to find actionable insights.",
    coreInterests: ["math", "technology", "problem-solving", "data"],
    minGrade: "B+",
    salary: "$100,000+",
  },
  {
    title: "Software Engineer",
    description: "Build applications and software systems.",
    coreInterests: ["technology", "logic", "building", "coding"],
    minGrade: "B",
    salary: "$90,000+",
  },
  {
    title: "Graphic Designer",
    description: "Create visual concepts and designs.",
    coreInterests: ["art", "creativity", "technology", "design"],
    minGrade: "C",
    salary: "$50,000+",
  },
  {
    title: "Financial Analyst",
    description: "Guide businesses in investment decisions.",
    coreInterests: ["math", "business", "analysis", "finance"],
    minGrade: "A-",
    salary: "$70,000+",
  },
  {
    title: "Mechanical Engineer",
    description: "Design and build mechanical devices.",
    coreInterests: ["physics", "math", "engineering", "problem solving"],
    minGrade: "B+",
    salary: "$85,000+",
  },
  {
    title: "Medical Doctor",
    description: "Diagnose and treat patients in healthcare settings.",
    coreInterests: ["medicine / doctor", "biology", "healthcare", "helping others"],
    minGrade: "A",
    salary: "$200,000+",
  }
];

const INTEREST_CATEGORIES = {
  "Professional Fields": ["Medicine / Doctor", "Software Development", "Engineering", "Business / Finance", "Design", "Education", "Law"],
  "Subjects & Passions": ["Math", "Biology", "Physics", "Art", "Logic", "Problem Solving", "Helping Others", "Writing"]
};

export default function OfflineCounselor() {
  const [interests, setInterests] = useState<string[]>([]);
  const [customInterest, setCustomInterest] = useState("");
  const [grades, setGrades] = useState("B");
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [isOffline, setIsOffline] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSync, setLastSync] = useState<string | null>(null);

  // Auto-subscribe to the IndexedDB career paths
  const careerPaths = useLiveQuery(() => db.careerPaths.toArray());

  const [selectedCareer, setSelectedCareer] = useState<CareerPath | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Listen to network status
    setIsOffline(!navigator.onLine);
    const handleOffline = () => setIsOffline(true);
    const handleOnline = () => {
      setIsOffline(false);
      syncData(); // Attempt sync when connection is restored
    };

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);
    
    // Initial data setup if DB is empty
    initializeDb();

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  const initializeDb = async () => {
    const count = await db.careerPaths.count();
    if (count === 0) {
      // Seed IndexedDB with the fallback if it's empty
      await db.careerPaths.bulkAdd(fallbackCareerDatabase);
      setLastSync(new Date().toLocaleTimeString());
    }
  };

  const syncData = async () => {
    if (!navigator.onLine) return;
    setIsSyncing(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      await db.careerPaths.clear();
      await db.careerPaths.bulkAdd([
        ...fallbackCareerDatabase,
        {
          title: "Cloud Architect",
          description: "Design and manage cloud computing architecture.",
          coreInterests: ["technology", "logic", "cloud", "servers"],
          minGrade: "A-",
          salary: "$120,000+",
        }
      ]);
      setLastSync(new Date().toLocaleTimeString());
    } catch (e) {
      console.error("Sync failed", e);
    } finally {
      setIsSyncing(false);
    }
  };

  const calculateScore = (career: CareerPath, userInterests: string[]) => {
    let score = 0;
    const core = career.coreInterests.map((c: string) => c.toLowerCase());
    
    const gradeScores: Record<string, number> = { "A+": 9, "A": 8, "A-": 7, "B+": 6, "B": 5, "B-": 4, "C": 3 };
    const userGradeScore = gradeScores[grades] || 5;
    const requiredGradeScore = gradeScores[career.minGrade] || 5;
    
    if (userGradeScore < requiredGradeScore) {
      score -= (requiredGradeScore - userGradeScore) * 10;
    } else {
      score += 10; 
    }

    userInterests.forEach(interest => {
      if (core.includes(interest.toLowerCase().trim())) {
        score += 20;
      }
    });

    return score;
  };

  const handleCounseling = (e: React.FormEvent) => {
    e.preventDefault();
    if (interests.length === 0 || !careerPaths) return;
    setSelectedCareer(null);

    const userInterestsList = interests.map(i => i.toLowerCase().trim());
    
    const scoredCareers = careerPaths.map(career => ({
      ...career,
      matchScore: calculateScore(career, userInterestsList)
    })).filter(c => c.matchScore > 0);

    scoredCareers.sort((a, b) => b.matchScore - a.matchScore);
    setRecommendations(scoredCareers.slice(0, 3)); 
  };
  const toggleInterest = (interest: string) => {
    setInterests(prev => 
      prev.includes(interest) ? prev.filter(i => i !== interest) : [...prev, interest]
    );
  };

  const addCustomInterest = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && customInterest.trim()) {
      e.preventDefault();
      if (!interests.includes(customInterest.trim())) {
        setInterests(prev => [...prev, customInterest.trim()]);
      }
      setCustomInterest("");
    }
  };

  const handleSelectCareer = (career: CareerPath) => {
    setSelectedCareer(career);
    router.push(`/roadmap?goal=${encodeURIComponent(career.title)}`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden max-w-2xl mx-auto my-8">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white flex justify-between items-center relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        
        <div className="flex items-center gap-3 relative z-10">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold flex items-center gap-2">
              Offline AI Counselor
              {isOffline ? (
                <span className="bg-red-500 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                  <CloudOff className="w-3 h-3" /> Offline
                </span>
              ) : (
                <span className="bg-emerald-500 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                  <CheckCircle2 className="w-3 h-3" /> Online
                </span>
              )}
            </h2>
            <p className="text-sm text-indigo-100 font-medium">Find careers matching your profile anywhere, anytime.</p>
          </div>
        </div>

        <div className="relative z-10 text-right">
           <p className="text-[11px] text-indigo-100 font-medium">Dataset Source</p>
           <p className="text-sm font-bold flex items-center justify-end gap-1">
             Local IndexedDB
           </p>
           {lastSync && (
             <p className="text-[10px] text-indigo-200 mt-1 flex items-center justify-end gap-1">
               {isSyncing ? <RefreshCw className="w-3 h-3 animate-spin" /> : "Synced:"} {lastSync}
             </p>
           )}
        </div>
      </div>

      <div className="p-6">
        <form onSubmit={handleCounseling} className="space-y-5">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-5 sm:p-7 rounded-2xl border border-indigo-100 shadow-[0_4px_20px_-4px_rgba(79,70,229,0.1)]">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold">1</div>
              <label className="block text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-900 to-purple-800">What are you interested in?</label>
            </div>
            
            {/* Interactive Pills */}
            <div className="space-y-6 mb-6">
              {Object.entries(INTEREST_CATEGORIES).map(([category, items]) => (
                <div key={category}>
                  <p className="text-xs font-black text-indigo-400/80 uppercase tracking-widest mb-2.5">{category}</p>
                  <div className="flex flex-wrap gap-2.5">
                    {items.map(item => {
                      const isSelected = interests.includes(item);
                      return (
                        <button
                          key={item}
                          type="button"
                          onClick={() => toggleInterest(item)}
                          className={`text-sm font-bold px-4 py-2 rounded-full border transition-all duration-300 ${
                            isSelected 
                              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-transparent shadow-md shadow-indigo-500/30 transform scale-105 ring-2 ring-purple-200 ring-offset-1 ring-offset-indigo-50' 
                              : 'bg-white text-indigo-900 border-indigo-200 hover:border-indigo-400 hover:bg-indigo-100 hover:shadow-sm hover:-translate-y-0.5'
                          }`}
                        >
                          {isSelected && <span className="mr-1.5 opacity-90">✓</span>}
                          {item}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Custom Interest Input */}
            <div className="mt-6 pt-5 border-t border-indigo-200/60">
              <p className="text-xs font-black text-indigo-400/80 uppercase tracking-widest mb-3">Other Interests</p>
              <div className="flex flex-wrap gap-2.5 mb-3">
                {interests.filter(i => !Object.values(INTEREST_CATEGORIES).flat().includes(i)).map(customItem => (
                   <span key={customItem} className="text-sm font-bold px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/30 flex items-center gap-2 transform scale-105 animate-in zoom-in duration-300">
                     {customItem}
                     <button type="button" onClick={() => toggleInterest(customItem)} className="w-5 h-5 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors pb-0.5">×</button>
                   </span>
                ))}
              </div>
              <input 
                type="text" 
                value={customInterest}
                onChange={(e) => setCustomInterest(e.target.value)}
                onKeyDown={addCustomInterest}
                placeholder="Type your own passion and press Enter..."
                className="w-full px-5 py-3.5 bg-white border border-indigo-200 rounded-xl focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all shadow-inner text-indigo-900 placeholder-indigo-300 font-medium"
              />
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-5 sm:p-7 rounded-2xl border border-indigo-100 shadow-[0_4px_20px_-4px_rgba(79,70,229,0.1)]">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold">2</div>
              <label className="block text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-900 to-purple-800">Your Academic Performance</label>
            </div>
            <select 
              value={grades}
              onChange={(e) => setGrades(e.target.value)}
              className="w-full px-5 py-3.5 bg-white border border-indigo-200 rounded-xl focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all shadow-inner text-indigo-900 font-bold appearance-none cursor-pointer"
            >
              <option value="A+">A+ (90-100%) - Excellent</option>
              <option value="A">A (85-89%) - Very Good</option>
              <option value="A-">A- (80-84%) - Good</option>
              <option value="B+">B+ (75-79%) - Above Average</option>
              <option value="B">B (70-74%) - Average</option>
              <option value="C">C (60-69%) - Passing</option>
            </select>
          </div>

          <button 
            type="submit" 
            className="w-full bg-indigo-600 text-white font-bold py-3.5 rounded-xl hover:bg-indigo-700 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 shadow-lg shadow-indigo-200"
          >
            <Sparkles className="w-5 h-5" /> 
            Match Me with Careers
          </button>
        </form>

        {recommendations.length > 0 && !selectedCareer && (
          <div className="mt-10 space-y-4">
            <h3 className="font-bold text-gray-900 flex items-center gap-2 text-lg">
              <GraduationCap className="w-6 h-6 text-indigo-600" /> 
              Recommended Careers
            </h3>
            <div className="grid gap-4">
              {recommendations.map((rec, i) => (
                <div key={i} className="p-5 border border-indigo-100 bg-white shadow-sm rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:shadow-md transition-shadow relative overflow-hidden group">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{rec.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{rec.description}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {rec.coreInterests.map((interest: string, idx: number) => (
                        <span key={idx} className="text-[10px] uppercase tracking-wider font-bold bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded-md border border-indigo-100">
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0 bg-gray-50 p-3.5 rounded-xl border border-gray-100 w-full sm:w-auto flex flex-col items-end gap-2">
                    <div>
                      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Avg Salary</p>
                      <p className="font-extrabold text-gray-900 text-lg">{rec.salary}</p>
                    </div>
                    <button 
                      onClick={() => handleSelectCareer(rec)}
                      className="mt-1 text-[11px] font-bold text-white bg-indigo-600 hover:bg-indigo-700 px-3 py-1.5 rounded uppercase tracking-wider transition-colors shadow-sm"
                    >
                      Make It Reality
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
