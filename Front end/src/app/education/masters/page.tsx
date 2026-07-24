"use client";

import MainLayout from "@/components/layout/MainLayout";
import Link from "next/link";
import { ChevronRight, Target, CheckCircle, GraduationCap, ArrowRight, Bot, Star, Building2, MapPin, IndianRupee, Cpu, BookOpen, Activity, HeartPulse, Briefcase, Award, Shield, Palette, Wrench, Calculator, Globe, Monitor, Settings, PenTool, Flame, Snowflake, Combine, Wrench as WrenchIcon, Car, Microscope, Thermometer, UserCheck, Stethoscope, BriefcaseMedical, Phone, UserPlus, Leaf, Droplets, Sun, Sprout, Trees, Wheat, Milk, Tractor, Code, Database, Cloud, Smartphone, Layout, MonitorPlay, Code2, LineChart, Cpu as CpuIcon, FlaskConical, Gavel, FileText, Magnet, Scale, Building, Pen, Rocket, TrendingUp, Zap, FileCode2, Server, BrainCircuit, LineChart as Chart } from "lucide-react";

export default function MastersPage() {
  return (
    <MainLayout>
      {/* Education Journey Stepper */}
      <div className="flex flex-wrap items-center gap-2 text-[10px] md:text-xs text-gray-500 mb-6 overflow-x-auto pb-2">
        <Link href="/" className="hover:text-indigo-600 flex items-center gap-1">
           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
           <span className="hidden md:inline">Home</span>
        </Link>
        <ChevronRight className="w-3 h-3 text-gray-400" />
        <span className="font-medium text-gray-400">Education</span>
        <ChevronRight className="w-3 h-3 text-gray-400" />
        <span className="text-indigo-600 font-bold bg-indigo-50 px-2 py-1 rounded-md">Master's</span>
        <ChevronRight className="w-3 h-3 text-gray-400" />
        <span className="font-medium text-gray-400">Career Path</span>
        <ChevronRight className="w-3 h-3 text-gray-400" />
        <span className="font-medium text-gray-400">Choose Specialization</span>
        <ChevronRight className="w-3 h-3 text-gray-400" />
        <span className="font-medium text-gray-400">Research / Industry</span>
        <ChevronRight className="w-3 h-3 text-gray-400" />
        <span className="font-medium text-gray-400">Placements</span>
        <ChevronRight className="w-3 h-3 text-gray-400" />
        <div className="flex items-center gap-1 font-medium text-gray-400">
          <Star className="w-3 h-3" /> Success
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 mb-10">
        
        {/* Main Content Area */}
        <div className="flex-1 space-y-8">
           {/* Hero Banner */}
           <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-6 md:p-8 border border-indigo-100 relative overflow-hidden flex flex-col md:flex-row items-center gap-6 shadow-sm">
             <div className="flex-1 relative z-10">
               <h2 className="text-sm md:text-base font-bold text-gray-800 mb-2">Build Your</h2>
               <h1 className="text-3xl md:text-5xl font-black text-indigo-700 mb-4 leading-tight">
                 Master's Career Journey
               </h1>
               <p className="text-gray-600 mb-6 text-sm md:text-base font-medium max-w-lg leading-relaxed">
                 Explore advanced career opportunities, industry specializations, certifications, research pathways, salary insights, internships and top recruiters after your master's degree.
               </p>
             </div>
             
             <div className="w-full md:w-96 relative z-10 hidden md:block">
               <div className="relative w-64 h-64 bg-indigo-100 rounded-full flex items-center justify-center ml-auto overflow-visible">
                 {/* Decorative elements with animations */}
                 <div className="absolute top-4 -left-4 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center animate-bounce" style={{ animationDuration: '3.2s' }}><GraduationCap className="w-6 h-6 text-purple-600" /></div>
                 <div className="absolute bottom-10 -left-8 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center animate-bounce" style={{ animationDuration: '4.5s' }}><FlaskConical className="w-5 h-5 text-indigo-500" /></div>
                 
                 <div className="absolute top-1/4 -right-8 bg-blue-50 rounded-lg shadow-md px-3 py-1.5 flex items-center justify-center border border-blue-100 animate-bounce" style={{ animationDuration: '3.8s' }}><span className="text-[10px] font-bold text-blue-700">Research</span></div>
                 <div className="absolute bottom-1/4 -right-4 bg-emerald-50 rounded-lg shadow-md px-3 py-1.5 flex items-center justify-center border border-emerald-100 animate-bounce" style={{ animationDuration: '2.8s' }}><span className="text-[10px] font-bold text-emerald-700">Industry</span></div>
                 <div className="absolute -top-4 right-10 bg-purple-600 rounded-lg shadow-lg px-3 py-1.5 flex items-center justify-center animate-bounce" style={{ animationDuration: '4.1s' }}><span className="text-xs font-bold text-white flex items-center gap-1"><Award className="w-3 h-3" /> Master's Degree</span></div>

                 <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jasmine&style=circle" alt="Student" className="w-full h-full object-cover rounded-full" />
               </div>
             </div>
           </div>

           {/* Choose Your Master's Degree */}
           <div>
             <h2 className="text-xl font-bold text-gray-900 mb-5">Choose Your Master's Degree</h2>
             <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
               {[
                 { name: "M.Tech", desc: "Engineering & Technology", paths: "12+ Career Paths", icon: Settings, color: "text-purple-600", bg: "bg-purple-100", border: "border-purple-200" },
                 { name: "MCA", desc: "Computer Application & IT", paths: "10+ Career Paths", icon: Code2, color: "text-blue-600", bg: "bg-blue-100", border: "border-blue-200" },
                 { name: "MBA", desc: "Business & Management", paths: "15+ Career Paths", icon: Briefcase, color: "text-indigo-600", bg: "bg-indigo-100", border: "border-indigo-200" },
                 { name: "M.Sc", desc: "Science & Research", paths: "10+ Career Paths", icon: FlaskConical, color: "text-blue-500", bg: "bg-blue-50", border: "border-blue-200" },
                 { name: "M.Com", desc: "Commerce & Finance", paths: "6+ Career Paths", icon: Calculator, color: "text-slate-600", bg: "bg-slate-100", border: "border-slate-200" },
                 { name: "MA", desc: "Arts & Humanities", paths: "8+ Career Paths", icon: BookOpen, color: "text-orange-600", bg: "bg-orange-100", border: "border-orange-200" },
                 { name: "M.Des", desc: "Design & Creativity", paths: "6+ Career Paths", icon: Palette, color: "text-rose-600", bg: "bg-rose-100", border: "border-rose-200" },
                 { name: "M.Pharm", desc: "Pharmacy & Healthcare", paths: "6+ Career Paths", icon: HeartPulse, color: "text-green-600", bg: "bg-green-100", border: "border-green-200" },
                 { name: "M.Arch", desc: "Architecture & Planning", paths: "5+ Career Paths", icon: PenTool, color: "text-teal-600", bg: "bg-teal-100", border: "border-teal-200" },
                 { name: "MS (Abroad)", desc: "International Education", paths: "Global Opportunities", icon: Globe, color: "text-indigo-700", bg: "bg-indigo-50", border: "border-indigo-200" },
               ].map((course, i) => (
                 <div key={i} className={`flex flex-col items-center border ${course.border} rounded-2xl p-3 hover:shadow-lg transition-all cursor-pointer group bg-white h-full relative overflow-hidden text-center`}>
                   <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
                     <ArrowRight className={`w-3 h-3 ${course.color}`} />
                   </div>
                   <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-2 ${course.bg} ${course.color} shadow-sm group-hover:scale-110 transition-transform`}>
                      <course.icon className="w-5 h-5" />
                   </div>
                   <h3 className={`font-extrabold text-[13px] ${course.color} leading-tight mb-1`}>{course.name}</h3>
                   <p className="text-[10px] font-bold text-gray-700 mb-1 leading-tight flex-grow">{course.paths}</p>
                   <p className="text-[9px] text-gray-500 leading-tight">{course.desc}</p>
                 </div>
               ))}
             </div>
           </div>

           {/* Top Career Opportunities After Master's */}
           <div>
             <h2 className="text-xl font-bold text-gray-900 mb-5">Top Career Opportunities After Master's</h2>
             <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
               {[
                 { name: "Data Scientist", salary: "₹8 - 18 LPA", exp: "Exp: 0 - 3 yrs", skills: "Python, ML, SQL, Statistics", icon: BrainCircuit, color: "text-indigo-600", bg: "bg-indigo-100", border: "border-indigo-200", tagColor: "bg-indigo-50 text-indigo-700" },
                 { name: "Product Manager", salary: "₹12 - 25 LPA", exp: "Exp: 3 - 6 yrs", skills: "Strategy, SQL, Analytics, Leadership", icon: FileText, color: "text-orange-600", bg: "bg-orange-100", border: "border-orange-200", tagColor: "bg-orange-50 text-orange-700" },
                 { name: "AI Engineer", salary: "₹10 - 22 LPA", exp: "Exp: 1 - 4 yrs", skills: "AI, Python, Deep Learning", icon: CpuIcon, color: "text-blue-600", bg: "bg-blue-100", border: "border-blue-200", tagColor: "bg-blue-50 text-blue-700" },
                 { name: "Cloud Architect", salary: "₹12 - 24 LPA", exp: "Exp: 3 - 6 yrs", skills: "AWS, Azure, DevOps, Security", icon: Cloud, color: "text-emerald-600", bg: "bg-emerald-100", border: "border-emerald-200", tagColor: "bg-emerald-50 text-emerald-700" },
                 { name: "Research Scientist", salary: "₹6 - 15 LPA", exp: "Exp: 0 - 5 yrs", skills: "Research, Data Analysis, Publications", icon: FlaskConical, color: "text-pink-600", bg: "bg-pink-100", border: "border-pink-200", tagColor: "bg-pink-50 text-pink-700" },
               ].map((career, i) => (
                 <div key={i} className={`flex flex-col border ${career.border} rounded-2xl p-4 hover:shadow-lg transition-all cursor-pointer group bg-white relative overflow-hidden h-full`}>
                   <div className="flex flex-col items-start gap-2 mb-3">
                     <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${career.bg} ${career.color} shadow-sm group-hover:scale-110 transition-transform`}>
                        <career.icon className="w-5 h-5" />
                     </div>
                     <div>
                       <h3 className={`font-extrabold text-[12px] text-gray-900 leading-tight mb-1`}>{career.name}</h3>
                       <p className="text-[10px] font-bold text-gray-500">{career.salary}</p>
                     </div>
                   </div>
                   <div className="mb-3">
                     <span className={`text-[9px] font-bold px-2 py-0.5 rounded border border-transparent ${career.tagColor}`}>{career.exp}</span>
                   </div>
                   <div className="border-t border-gray-100 pt-3 flex-1 flex flex-col justify-between">
                     <div className="mb-3">
                       <p className="text-[9px] font-bold text-gray-500 mb-1">Skills:</p>
                       <p className="text-[9px] text-gray-700 leading-tight">{career.skills}</p>
                     </div>
                     <div>
                       <div className="flex items-center gap-2">
                          <span className="text-[10px] font-black text-blue-600">G</span>
                          <span className="text-[10px] font-black text-orange-500">a</span>
                          <span className="text-[10px] font-black text-blue-500">ms</span>
                          <span className="text-[8px] font-bold text-gray-400">+ more</span>
                       </div>
                     </div>
                   </div>
                 </div>
               ))}
             </div>
           </div>

           {/* Career Roadmap & Skills Row */}
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              
              {/* Career Roadmap */}
              <div className="lg:col-span-7 bg-white rounded-3xl p-5 border border-gray-100 shadow-sm flex flex-col">
                 <h2 className="text-sm font-bold text-gray-900 mb-6">Career Roadmap</h2>
                 <div className="relative flex items-center justify-between mt-auto mb-4 px-2">
                    <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-gray-100 -z-10 -translate-y-1/2"></div>
                    
                    <div className="flex flex-col items-center gap-2 z-10">
                       <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center shadow-sm border border-indigo-200"><GraduationCap className="w-4 h-4"/></div>
                       <span className="text-[8px] font-bold text-indigo-700 text-center w-12 leading-tight">Master's Degree</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 z-10">
                       <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-[10px] font-bold shadow-md">2</div>
                       <span className="text-[8px] font-bold text-blue-700 text-center w-12 leading-tight">Advanced Skills</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 z-10">
                       <div className="w-6 h-6 rounded-full bg-cyan-500 text-white flex items-center justify-center text-[10px] font-bold shadow-md">3</div>
                       <span className="text-[8px] font-bold text-cyan-700 text-center w-12 leading-tight">Research / Projects</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 z-10">
                       <div className="w-6 h-6 rounded-full bg-teal-500 text-white flex items-center justify-center text-[10px] font-bold shadow-md">4</div>
                       <span className="text-[8px] font-bold text-teal-700 text-center w-12 leading-tight">Internship</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 z-10">
                       <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-[10px] font-bold shadow-md">5</div>
                       <span className="text-[8px] font-bold text-orange-700 text-center w-12 leading-tight">Certification</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 z-10">
                       <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-[10px] font-bold shadow-md">6</div>
                       <span className="text-[8px] font-bold text-green-700 text-center w-12 leading-tight">Placement</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 z-10">
                       <div className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center shadow-lg"><Award className="w-4 h-4" /></div>
                       <span className="text-[8px] font-black text-blue-900 text-center w-12 leading-tight">Senior Career</span>
                    </div>
                 </div>
              </div>

              {/* Skills to Master */}
              <div className="lg:col-span-5 bg-white rounded-3xl p-5 border border-gray-100 shadow-sm">
                 <h2 className="text-sm font-bold text-gray-900 mb-4">Skills to Master</h2>
                 <div className="flex flex-wrap gap-2 items-center justify-start">
                    <span className="text-[10px] font-medium text-gray-700 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full">Data Science</span>
                    <span className="text-[10px] font-medium text-gray-700 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full">Machine Learning</span>
                    <span className="text-[10px] font-medium text-gray-700 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full">Python</span>
                    <span className="text-[10px] font-medium text-gray-700 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full">SQL</span>
                    <span className="text-[10px] font-medium text-gray-700 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full">Power BI</span>
                    <span className="text-[10px] font-medium text-gray-700 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full">Cloud Computing</span>
                    <span className="text-[10px] font-medium text-gray-700 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full">Leadership</span>
                    <span className="text-[10px] font-medium text-gray-700 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full">Research Methods</span>
                    <span className="text-[10px] font-medium text-gray-700 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full">Communication</span>
                    <span className="text-[10px] font-medium text-gray-700 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full">Project Management</span>
                 </div>
              </div>
           </div>

           {/* Certifications, Higher Education, Internships */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              
              {/* Certifications to Boost Career */}
              <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm flex flex-col">
                 <h2 className="text-sm font-bold text-gray-900 mb-4">Certifications to Boost Career</h2>
                 <div className="flex-1 flex justify-between gap-1 items-end">
                    <div className="flex flex-col items-center gap-1.5 text-center">
                       <div className="w-8 h-8 rounded bg-gray-50 flex items-center justify-center border border-gray-100 font-black text-yellow-600 text-[10px]">aws</div>
                       <span className="text-[8px] font-bold text-gray-600 leading-tight">AWS<br/>Certified</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5 text-center">
                       <div className="w-8 h-8 rounded bg-gray-50 flex items-center justify-center border border-gray-100 font-black text-blue-600 text-[10px]">MS</div>
                       <span className="text-[8px] font-bold text-gray-600 leading-tight">Microsoft<br/>Certifications</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5 text-center">
                       <div className="w-8 h-8 rounded bg-gray-50 flex items-center justify-center border border-gray-100 font-black text-red-500 text-[10px]">G</div>
                       <span className="text-[8px] font-bold text-gray-600 leading-tight">Google<br/>Certifications</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5 text-center">
                       <div className="w-8 h-8 rounded bg-gray-50 flex items-center justify-center border border-gray-100 font-black text-red-600 text-[10px]">PMP</div>
                       <span className="text-[8px] font-bold text-gray-600 leading-tight">PMP<br/>Certification</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5 text-center">
                       <div className="w-8 h-8 rounded bg-gray-50 flex items-center justify-center border border-gray-100 font-black text-teal-600 text-[9px] tracking-tighter">CISCO</div>
                       <span className="text-[8px] font-bold text-gray-600 leading-tight">Cisco<br/>Certifications</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5 text-center">
                       <div className="w-8 h-8 rounded bg-gray-50 flex items-center justify-center border border-gray-100 font-black text-blue-700 text-[10px]">c</div>
                       <span className="text-[8px] font-bold text-gray-600 leading-tight">Coursera<br/>Specializations</span>
                    </div>
                 </div>
              </div>

              {/* Higher Education & Research */}
              <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm flex flex-col">
                 <h2 className="text-sm font-bold text-gray-900 mb-4">Higher Education & Research</h2>
                 <div className="flex-1 flex justify-between gap-1 items-end">
                    <div className="flex flex-col items-center gap-1.5 text-center">
                       <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100"><GraduationCap className="w-4 h-4"/></div>
                       <span className="text-[8px] font-bold text-gray-700 leading-tight">PhD<br/>Programs</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5 text-center">
                       <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100"><FlaskConical className="w-4 h-4"/></div>
                       <span className="text-[8px] font-bold text-gray-700 leading-tight">Research<br/>Fellowships</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5 text-center">
                       <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100"><Globe className="w-4 h-4"/></div>
                       <span className="text-[8px] font-bold text-gray-700 leading-tight">International<br/>Programs</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5 text-center">
                       <div className="w-8 h-8 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center border border-orange-100"><Building2 className="w-4 h-4"/></div>
                       <span className="text-[8px] font-bold text-gray-700 leading-tight">Government<br/>Research Labs</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5 text-center">
                       <div className="w-8 h-8 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100"><BookOpen className="w-4 h-4"/></div>
                       <span className="text-[8px] font-bold text-gray-700 leading-tight">Teaching<br/>Careers</span>
                    </div>
                 </div>
              </div>

              {/* Internship Opportunities */}
              <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm flex flex-col">
                 <h2 className="text-sm font-bold text-gray-900 mb-4">Internship Opportunities</h2>
                 <div className="flex-1 flex justify-between gap-1 items-end">
                    <div className="flex flex-col items-center gap-1.5 text-center">
                       <div className="w-8 h-8 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center border border-pink-100"><FlaskConical className="w-4 h-4"/></div>
                       <span className="text-[8px] font-bold text-gray-700 leading-tight">Research<br/>Internships</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5 text-center">
                       <div className="w-8 h-8 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center border border-cyan-100"><Briefcase className="w-4 h-4"/></div>
                       <span className="text-[8px] font-bold text-gray-700 leading-tight">Industry<br/>Internships</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5 text-center">
                       <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100"><Sun className="w-4 h-4"/></div>
                       <span className="text-[8px] font-bold text-gray-700 leading-tight">Summer<br/>Internships</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5 text-center">
                       <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100"><Globe className="w-4 h-4"/></div>
                       <span className="text-[8px] font-bold text-gray-700 leading-tight">International<br/>Internships</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5 text-center">
                       <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100"><MonitorPlay className="w-4 h-4"/></div>
                       <span className="text-[8px] font-bold text-gray-700 leading-tight">Virtual<br/>Internships</span>
                    </div>
                 </div>
              </div>

           </div>
        </div>
        
        {/* Right Sidebar */}
        <div className="w-full lg:w-[280px] space-y-5">
          {/* AI Assistant */}
          <div className="bg-white rounded-3xl p-5 border border-indigo-100 shadow-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/80 to-purple-50/80 z-0"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform group-hover:shadow-md">
                  <Bot className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 flex items-center gap-1 text-sm">Be You AI Assistant <span className="text-yellow-500">✨</span></h3>
                </div>
              </div>
              <p className="text-[11px] text-gray-600 mb-5 font-medium leading-tight">Your smart guide for courses, careers and success.</p>
              
              <div className="space-y-2 mb-5">
                <p className="text-[9px] font-bold text-indigo-600 uppercase tracking-wider">Try asking me...</p>
                <div className="bg-white border border-indigo-50 rounded-lg p-2.5 text-[10px] font-medium text-gray-700 hover:border-indigo-300 hover:shadow-sm cursor-pointer transition-all flex items-center justify-between group/q" onClick={() => window.location.href='/chat'}>
                  <span>Best career options after MBA</span>
                  <ArrowRight className="w-3 h-3 text-indigo-300 group-hover/q:text-indigo-600 group-hover/q:translate-x-1 transition-all" />
                </div>
                <div className="bg-white border border-indigo-50 rounded-lg p-2.5 text-[10px] font-medium text-gray-700 hover:border-indigo-300 hover:shadow-sm cursor-pointer transition-all flex items-center justify-between group/q" onClick={() => window.location.href='/chat'}>
                  <span>Roadmap to become Data Scientist</span>
                  <ArrowRight className="w-3 h-3 text-indigo-300 group-hover/q:text-indigo-600 group-hover/q:translate-x-1 transition-all" />
                </div>
                <div className="bg-white border border-indigo-50 rounded-lg p-2.5 text-[10px] font-medium text-gray-700 hover:border-indigo-300 hover:shadow-sm cursor-pointer transition-all flex items-center justify-between group/q" onClick={() => window.location.href='/chat'}>
                  <span>Highest paying jobs after M.Tech</span>
                  <ArrowRight className="w-3 h-3 text-indigo-300 group-hover/q:text-indigo-600 group-hover/q:translate-x-1 transition-all" />
                </div>
                <div className="bg-white border border-indigo-50 rounded-lg p-2.5 text-[10px] font-medium text-gray-700 hover:border-indigo-300 hover:shadow-sm cursor-pointer transition-all flex items-center justify-between group/q" onClick={() => window.location.href='/chat'}>
                  <span>PhD vs Job - which is better?</span>
                  <ArrowRight className="w-3 h-3 text-indigo-300 group-hover/q:text-indigo-600 group-hover/q:translate-x-1 transition-all" />
                </div>
                <div className="bg-white border border-indigo-50 rounded-lg p-2.5 text-[10px] font-medium text-gray-700 hover:border-indigo-300 hover:shadow-sm cursor-pointer transition-all flex items-center justify-between group/q" onClick={() => window.location.href='/chat'}>
                  <span>Top certifications after MCA</span>
                  <ArrowRight className="w-3 h-3 text-indigo-300 group-hover/q:text-indigo-600 group-hover/q:translate-x-1 transition-all" />
                </div>
              </div>
              
              <button className="w-full bg-indigo-700 text-white font-bold py-3 rounded-xl shadow-md shadow-indigo-200 hover:bg-indigo-800 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 text-xs" onClick={() => window.location.href='/chat'}>
                Chat with AI <ArrowRight className="w-3 h-3"/>
              </button>
            </div>
          </div>

          {/* Salary Insights */}
          <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-900 text-[13px] mb-4">Salary Insights (Master's)</h3>
            <div className="relative pl-4 space-y-4 before:absolute before:inset-y-0 before:left-[11px] before:w-[2px] before:bg-gray-100">
               <div className="relative">
                  <div className="absolute -left-[18px] top-1 w-4 h-4 rounded-full bg-green-100 border-2 border-white flex items-center justify-center z-10"><div className="w-2 h-2 rounded-full bg-green-500"></div></div>
                  <div>
                     <p className="text-[9px] text-gray-500 font-bold mb-0.5">Freshers (0 - 1 yr)</p>
                     <p className="text-[11px] font-black text-gray-900">₹6 - 10 LPA</p>
                  </div>
               </div>
               <div className="relative">
                  <div className="absolute -left-[18px] top-1 w-4 h-4 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center z-10"><div className="w-2 h-2 rounded-full bg-blue-500"></div></div>
                  <div>
                     <p className="text-[9px] text-gray-500 font-bold mb-0.5">2 - 4 Years Experience</p>
                     <p className="text-[11px] font-black text-gray-900">₹10 - 18 LPA</p>
                  </div>
               </div>
               <div className="relative">
                  <div className="absolute -left-[18px] top-1 w-4 h-4 rounded-full bg-purple-100 border-2 border-white flex items-center justify-center z-10"><div className="w-2 h-2 rounded-full bg-purple-500"></div></div>
                  <div>
                     <p className="text-[9px] text-gray-500 font-bold mb-0.5">5 - 8 Years Experience</p>
                     <p className="text-[11px] font-black text-gray-900">₹18 - 30 LPA</p>
                  </div>
               </div>
               <div className="relative">
                  <div className="absolute -left-[18px] top-1 w-4 h-4 rounded-full bg-orange-100 border-2 border-white flex items-center justify-center z-10"><div className="w-2 h-2 rounded-full bg-orange-500"></div></div>
                  <div>
                     <p className="text-[9px] text-gray-500 font-bold mb-0.5">Senior Roles (8+ yrs)</p>
                     <p className="text-[11px] font-black text-gray-900">₹30 - 60+ LPA</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Top Recruiters */}
          <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-900 text-[13px] mb-4">Top Recruiters</h3>
            <div className="grid grid-cols-3 gap-y-5 gap-x-2 items-center justify-items-center">
               <span className="text-[10px] font-black text-blue-500">Google</span>
               <span className="text-[10px] font-black text-gray-700">Microsoft</span>
               <span className="text-[10px] font-black text-gray-900">amazon</span>
               <span className="text-[10px] font-black text-green-700">Deloitte.</span>
               <span className="text-[9px] font-black text-gray-900 tracking-tighter">accenture</span>
               <span className="text-[10px] font-black text-blue-600">Infosys</span>
               <span className="text-[10px] font-black text-blue-700">IBM</span>
               <span className="text-[10px] font-black text-red-600">ORACLE</span>
               <span className="text-[10px] font-black text-red-500">TCS</span>
               <span className="text-[9px] font-black text-blue-500">Capgemini</span>
               <span className="text-[10px] font-black text-green-600">NVIDIA</span>
               <span className="text-[10px] font-black text-red-600">Adobe</span>
            </div>
          </div>
          
          {/* Success Stories */}
          <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm relative overflow-hidden">
             <h3 className="font-bold text-gray-900 text-[13px] mb-4">Success Stories</h3>
             <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 flex flex-col items-start">
                <div className="flex items-center gap-3 mb-3">
                   <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden shadow-sm border-2 border-white shrink-0">
                      <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Rohit&style=circle" alt="Rohit Sharma" className="w-full h-full object-cover" />
                   </div>
                   <div>
                      <h4 className="font-bold text-[11px] text-gray-900 leading-tight">Rohit Sharma</h4>
                      <p className="text-[9px] text-gray-500 font-medium">M.Tech (AI & ML)</p>
                   </div>
                </div>
                <p className="text-[10px] text-gray-700 font-semibold mb-2 leading-tight">Senior Machine Learning Engineer at NVIDIA</p>
                <div className="inline-block bg-white border border-indigo-100 rounded-md px-2 py-1 mb-2">
                   <span className="text-[9px] text-indigo-700 font-bold">₹45 LPA Package</span>
                </div>
                <p className="text-[9px] text-gray-500 italic mt-1 leading-relaxed">"My master's degree helped me gain the skills and confidence to build innovative AI solutions."</p>
             </div>
             
             <div className="flex justify-center gap-1.5 mt-4">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-600"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-gray-200"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-gray-200"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-gray-200"></div>
             </div>
          </div>

        </div>
        
      </div>
    </MainLayout>
  );
}
