"use client";

import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Search, Briefcase, MapPin, Building2, Globe, Clock, BookmarkPlus, ExternalLink, Filter, LayoutDashboard } from "lucide-react";

// Mock data representing aggregated jobs from various sites
const AGGREGATED_JOBS = [
  {
    id: 1,
    title: "Frontend Engineering Intern",
    company: "Google",
    location: "Bangalore, India (Hybrid)",
    type: "Internship",
    source: "LinkedIn",
    postedAt: "2 hours ago",
    salary: "₹50,000/month",
    tags: ["React", "TypeScript", "UI/UX"]
  },
  {
    id: 2,
    title: "Junior Data Scientist",
    company: "DataCorp Analytics",
    location: "Remote",
    type: "Full-Time",
    source: "Indeed",
    postedAt: "5 hours ago",
    salary: "₹8L - ₹12L PA",
    tags: ["Python", "Machine Learning", "SQL"]
  },
  {
    id: 3,
    title: "Summer Analyst - Finance",
    company: "Goldman Sachs",
    location: "Mumbai, India",
    type: "Internship",
    source: "Company Career Page",
    postedAt: "1 day ago",
    salary: "Competitive",
    tags: ["Finance", "Excel", "Analysis"]
  },
  {
    id: 4,
    title: "UI/UX Designer",
    company: "Creative Studio",
    location: "Remote",
    type: "Part-Time",
    source: "Wellfound (AngelList)",
    postedAt: "3 days ago",
    salary: "$20 - $35/hour",
    tags: ["Figma", "Prototyping", "User Research"]
  },
  {
    id: 5,
    title: "Software Developer Intern",
    company: "Tech StartUp Inc.",
    location: "Pune, India",
    type: "Internship",
    source: "Internshala",
    postedAt: "4 hours ago",
    salary: "₹25,000/month",
    tags: ["Node.js", "Express", "MongoDB"]
  },
  {
    id: 6,
    title: "Product Management Trainee",
    company: "InnovateTech",
    location: "Delhi, India (On-site)",
    type: "Full-Time",
    source: "LinkedIn",
    postedAt: "2 days ago",
    salary: "₹10L - ₹15L PA",
    tags: ["Agile", "Strategy", "Communication"]
  }
];

const SOURCES = ["All Sources", "LinkedIn", "Indeed", "Internshala", "Wellfound (AngelList)", "Company Career Page"];
const TYPES = ["All Types", "Internship", "Full-Time", "Part-Time"];

export default function JobsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSource, setSelectedSource] = useState("All Sources");
  const [selectedType, setSelectedType] = useState("All Types");
  const [viewMode, setViewMode] = useState<"discover" | "tracker">("discover");

  const filteredJobs = AGGREGATED_JOBS.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          job.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSource = selectedSource === "All Sources" || job.source === selectedSource;
    const matchesType = selectedType === "All Types" || job.type === selectedType;
    return matchesSearch && matchesSource && matchesType;
  });

  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto px-4 py-8">
        
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-3xl p-8 md:p-12 text-white mb-8 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between">
          <div className="relative z-10 md:w-2/3">
            <div className="inline-block px-4 py-1.5 bg-blue-500/30 rounded-full text-blue-100 font-bold tracking-wider uppercase text-xs mb-4 backdrop-blur-sm border border-blue-400/30">
              Aggregated from 50+ Job Boards
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              One Place for Every <br /> <span className="text-blue-300">Job & Internship</span>
            </h1>
            <p className="text-blue-100 text-lg mb-8 max-w-xl">
              Stop checking ten different websites. We pull the best opportunities from LinkedIn, Indeed, Internshala, and company pages directly into your dashboard.
            </p>
            
            <div className="flex gap-4">
              <button 
                onClick={() => setViewMode("discover")}
                className={`px-6 py-3 rounded-xl font-bold transition-all ${viewMode === 'discover' ? 'bg-white text-blue-800 shadow-lg scale-105' : 'bg-blue-800/50 text-white hover:bg-blue-700/50'}`}
              >
                <Search className="inline-block w-5 h-5 mr-2 -mt-1" /> Discover
              </button>
              <button 
                onClick={() => setViewMode("tracker")}
                className={`px-6 py-3 rounded-xl font-bold transition-all ${viewMode === 'tracker' ? 'bg-white text-blue-800 shadow-lg scale-105' : 'bg-blue-800/50 text-white hover:bg-blue-700/50'}`}
              >
                <LayoutDashboard className="inline-block w-5 h-5 mr-2 -mt-1" /> Application Tracker
              </button>
            </div>
          </div>
          
          <div className="hidden md:flex relative z-10">
            <div className="w-64 h-64 bg-white/10 rounded-full blur-3xl absolute -top-10 -right-10"></div>
            <Briefcase className="w-48 h-48 text-white/90 drop-shadow-2xl transform rotate-12" />
          </div>
        </div>

        {viewMode === "discover" ? (
          <>
            {/* Search and Filters */}
            <div className="bg-white p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-8 border border-gray-100 flex flex-col lg:flex-row gap-4 sticky top-4 z-20">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search by role, company, or skills..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-gray-800 font-medium"
                />
              </div>
              
              <div className="flex gap-4">
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <select 
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="pl-9 pr-8 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 font-medium appearance-none outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer min-w-[140px]"
                  >
                    {TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>

                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <select 
                    value={selectedSource}
                    onChange={(e) => setSelectedSource(e.target.value)}
                    className="pl-9 pr-8 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 font-medium appearance-none outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer min-w-[180px]"
                  >
                    {SOURCES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>
            </div>

            {/* Job Listings */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredJobs.length > 0 ? filteredJobs.map(job => (
                <div key={job.id} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all group flex flex-col">
                  
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 flex items-center justify-center shadow-inner">
                        <Building2 className="w-7 h-7 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-xl group-hover:text-blue-700 transition-colors">{job.title}</h3>
                        <p className="text-gray-600 font-medium">{job.company}</p>
                      </div>
                    </div>
                    <span className="bg-green-100 text-green-800 text-xs px-3 py-1.5 rounded-full font-bold tracking-wide">
                      {job.type}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600 font-medium">
                      <MapPin className="w-4 h-4 mr-2 text-gray-400" /> {job.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600 font-medium">
                      <Globe className="w-4 h-4 mr-2 text-blue-400" /> Via {job.source}
                    </div>
                    <div className="flex items-center text-sm text-gray-600 font-medium">
                      <Briefcase className="w-4 h-4 mr-2 text-gray-400" /> {job.salary}
                    </div>
                    <div className="flex items-center text-sm text-gray-500 font-medium">
                      <Clock className="w-4 h-4 mr-2 text-gray-400" /> {job.postedAt}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {job.tags.map(tag => (
                      <span key={tag} className="text-xs font-bold bg-gray-50 text-gray-600 border border-gray-200 px-3 py-1.5 rounded-lg">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex gap-3 pt-4 border-t border-gray-50">
                    <button className="flex-1 bg-white border-2 border-blue-100 text-blue-700 font-bold py-2.5 rounded-xl hover:bg-blue-50 hover:border-blue-200 transition-colors flex items-center justify-center gap-2">
                      <BookmarkPlus className="w-4 h-4" /> Save to Tracker
                    </button>
                    <button className="flex-1 bg-blue-600 text-white font-bold py-2.5 rounded-xl hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/20 flex items-center justify-center gap-2">
                      Apply Now <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )) : (
                <div className="col-span-full py-20 text-center">
                  <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-10 h-10 text-gray-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">No opportunities found</h3>
                  <p className="text-gray-500">Try adjusting your filters or search query to find more jobs.</p>
                </div>
              )}
            </div>
          </>
        ) : (
          /* Kanban Tracker View */
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 overflow-x-auto">
             <div className="flex items-center justify-between mb-8">
               <div>
                 <h2 className="text-2xl font-bold text-gray-900">Application Tracker</h2>
                 <p className="text-gray-500 font-medium">Manage and track the status of your saved jobs.</p>
               </div>
               <button className="bg-blue-50 text-blue-600 font-bold px-4 py-2 rounded-lg border border-blue-100 hover:bg-blue-100 transition-colors">
                 + Add Custom Job
               </button>
             </div>

             <div className="flex gap-6 min-w-[900px]">
               {/* Columns */}
               {[
                 { title: "Saved", count: 2, color: "bg-gray-100 text-gray-700", border: "border-gray-300" },
                 { title: "Applied", count: 1, color: "bg-blue-100 text-blue-700", border: "border-blue-300" },
                 { title: "Interviewing", count: 1, color: "bg-orange-100 text-orange-700", border: "border-orange-300" },
                 { title: "Offer / Accepted", count: 0, color: "bg-green-100 text-green-700", border: "border-green-300" }
               ].map(col => (
                 <div key={col.title} className="flex-1 bg-gray-50/50 rounded-xl p-4 border border-gray-100">
                   <div className="flex items-center justify-between mb-4">
                     <h3 className="font-bold text-gray-800">{col.title}</h3>
                     <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${col.color} ${col.border}`}>
                       {col.count}
                     </span>
                   </div>
                   
                   {/* Dummy Kanban Cards based on column */}
                   {col.title === "Saved" && (
                     <div className="space-y-3">
                       <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm cursor-grab active:cursor-grabbing hover:border-blue-300 transition-colors">
                         <h4 className="font-bold text-gray-900 text-sm">Frontend Engineering Intern</h4>
                         <p className="text-xs text-gray-500 mb-3">Google • Via LinkedIn</p>
                         <div className="flex justify-between items-center">
                           <span className="text-[10px] font-bold bg-blue-50 text-blue-600 px-2 py-1 rounded">Internship</span>
                           <span className="text-[10px] text-gray-400">Saved today</span>
                         </div>
                       </div>
                       <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm cursor-grab active:cursor-grabbing hover:border-blue-300 transition-colors">
                         <h4 className="font-bold text-gray-900 text-sm">Summer Analyst</h4>
                         <p className="text-xs text-gray-500 mb-3">Goldman Sachs • Direct</p>
                         <div className="flex justify-between items-center">
                           <span className="text-[10px] font-bold bg-blue-50 text-blue-600 px-2 py-1 rounded">Internship</span>
                           <span className="text-[10px] text-gray-400">Saved 2d ago</span>
                         </div>
                       </div>
                     </div>
                   )}
                   {col.title === "Applied" && (
                     <div className="space-y-3">
                        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm cursor-grab active:cursor-grabbing hover:border-blue-300 transition-colors">
                         <h4 className="font-bold text-gray-900 text-sm">Junior Data Scientist</h4>
                         <p className="text-xs text-gray-500 mb-3">DataCorp Analytics • Via Indeed</p>
                         <div className="flex justify-between items-center">
                           <span className="text-[10px] font-bold bg-green-50 text-green-600 px-2 py-1 rounded">Full-Time</span>
                           <span className="text-[10px] text-gray-400">Applied 1w ago</span>
                         </div>
                       </div>
                     </div>
                   )}
                   {col.title === "Interviewing" && (
                     <div className="space-y-3">
                        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm cursor-grab active:cursor-grabbing hover:border-blue-300 transition-colors border-l-4 border-l-orange-400">
                         <h4 className="font-bold text-gray-900 text-sm">Product Management</h4>
                         <p className="text-xs text-gray-500 mb-3">InnovateTech • Via LinkedIn</p>
                         <div className="flex justify-between items-center">
                           <span className="text-[10px] font-bold bg-purple-50 text-purple-600 px-2 py-1 rounded">Round 1</span>
                           <span className="text-[10px] text-orange-500 font-bold">Tomorrow</span>
                         </div>
                       </div>
                     </div>
                   )}
                   {col.count === 0 && (
                     <div className="h-24 border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center">
                       <p className="text-xs text-gray-400 font-medium">Drop jobs here</p>
                     </div>
                   )}
                 </div>
               ))}
             </div>
          </div>
        )}

      </div>
    </MainLayout>
  );
}
