"use client";

import MainLayout from "@/components/layout/MainLayout";
import Link from "next/link";
import { ChevronRight, Target, CheckCircle, GraduationCap, ArrowRight, Bot, Star, Building2, MapPin, IndianRupee, Cpu, BookOpen, Activity, HeartPulse, Briefcase, Award, Shield, Palette, Wrench, Calculator, Globe, Monitor, Settings, PenTool, Flame, Snowflake, Combine, Wrench as WrenchIcon, Car, Microscope, Thermometer, UserCheck, Stethoscope, BriefcaseMedical, Phone, UserPlus, Leaf, Droplets, Sun, Sprout, Trees, Wheat, Milk, Tractor, Code, Database, Cloud, Smartphone, Layout, MonitorPlay, Code2, LineChart, Cpu as CpuIcon, FlaskConical, Gavel, FileText, Magnet, Scale, Building, Pen, Rocket, TrendingUp, Zap, FileCode2 } from "lucide-react";

export default function BachelorsPage() {
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
        <span className="text-indigo-600 font-bold bg-indigo-50 px-2 py-1 rounded-md">Bachelor's</span>
        <ChevronRight className="w-3 h-3 text-gray-400" />
        <span className="font-medium text-gray-400">Career Path</span>
        <ChevronRight className="w-3 h-3 text-gray-400" />
        <span className="font-medium text-gray-400">Choose Specialization</span>
        <ChevronRight className="w-3 h-3 text-gray-400" />
        <span className="font-medium text-gray-400">Top Colleges</span>
        <ChevronRight className="w-3 h-3 text-gray-400" />
        <span className="font-medium text-gray-400">Placement</span>
        <ChevronRight className="w-3 h-3 text-gray-400" />
        <div className="flex items-center gap-1 font-medium text-gray-400">
          <Star className="w-3 h-3" /> Success
        </div>
      </div>

      <div className="space-y-10 mb-10">
           {/* Hero Banner */}
           <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-6 md:p-8 border border-indigo-100 relative overflow-hidden flex flex-col md:flex-row items-center gap-6 shadow-sm">
             <div className="flex-1 relative z-10">
               <h2 className="text-sm md:text-base font-bold text-gray-800 mb-2">Build Your</h2>
               <h1 className="text-3xl md:text-5xl font-black text-indigo-700 mb-4 leading-tight">
                 Bachelor's Career Journey
               </h1>
               <p className="text-gray-600 mb-6 text-sm md:text-base font-medium max-w-lg leading-relaxed">
                 Discover career paths, required skills, certifications, salary insights, higher studies and top recruiters based on your bachelor's degree.
               </p>
             </div>
             
             <div className="w-full md:w-96 relative z-10 hidden md:block">
               <div className="relative w-64 h-64 bg-indigo-100 rounded-full flex items-center justify-center ml-auto overflow-visible">
                 {/* Decorative background elements mapping to the illustration */}
                 <div className="absolute top-4 -left-4 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center animate-bounce" style={{ animationDuration: '3s' }}><GraduationCap className="w-6 h-6 text-indigo-600" /></div>
                 <div className="absolute bottom-10 -left-8 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center animate-bounce" style={{ animationDuration: '4s' }}><Briefcase className="w-5 h-5 text-blue-500" /></div>
                 
                 <div className="absolute top-1/4 -right-8 bg-green-50 rounded-lg shadow-md px-3 py-1.5 flex items-center justify-center border border-green-100 animate-bounce" style={{ animationDuration: '3.5s' }}><span className="text-[10px] font-bold text-green-700">Placement</span></div>
                 <div className="absolute bottom-1/4 -right-4 bg-amber-50 rounded-lg shadow-md px-3 py-1.5 flex items-center justify-center border border-amber-100 animate-bounce" style={{ animationDuration: '2.5s' }}><span className="text-[10px] font-bold text-amber-700">Skills</span></div>
                 <div className="absolute -top-4 right-10 bg-indigo-600 rounded-lg shadow-lg px-3 py-1.5 flex items-center justify-center animate-bounce" style={{ animationDuration: '3.8s' }}><span className="text-xs font-bold text-white flex items-center gap-1"><Star className="w-3 h-3" /> Success</span></div>

                 <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=BachelorBoy&style=circle" alt="Student" className="w-full h-full object-cover rounded-full" />
               </div>
             </div>
           </div>

           {/* Choose Your Bachelor's Degree */}
           <div>
             <h2 className="text-xl font-bold text-gray-900 mb-5">Choose Your Bachelor's Degree</h2>
             <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
               {[
                 { name: "B.Tech", desc: "Engineering & Technology", paths: "8+ Career Paths", icon: Settings, color: "text-purple-600", bg: "bg-purple-100", border: "border-purple-200" },
                 { name: "BCA", desc: "Computer Applications & IT", paths: "6+ Career Paths", icon: Code2, color: "text-blue-600", bg: "bg-blue-100", border: "border-blue-200" },
                 { name: "B.Sc", desc: "Science & Research Fields", paths: "10+ Career Paths", icon: FlaskConical, color: "text-indigo-600", bg: "bg-indigo-100", border: "border-indigo-200" },
                 { name: "B.Com", desc: "Commerce & Finance", paths: "7+ Career Paths", icon: Calculator, color: "text-amber-600", bg: "bg-amber-100", border: "border-amber-200" },
                 { name: "BBA", desc: "Business & Management", paths: "6+ Career Paths", icon: Building2, color: "text-teal-600", bg: "bg-teal-100", border: "border-teal-200" },
                 { name: "BA", desc: "Arts & Humanities", paths: "8+ Career Paths", icon: BookOpen, color: "text-orange-600", bg: "bg-orange-100", border: "border-orange-200" },
                 { name: "B.Pharm", desc: "Pharmacy & Healthcare", paths: "6+ Career Paths", icon: HeartPulse, color: "text-green-600", bg: "bg-green-100", border: "border-green-200" },
                 { name: "B.Arch", desc: "Architecture & Design", paths: "5+ Career Paths", icon: PenTool, color: "text-cyan-600", bg: "bg-cyan-100", border: "border-cyan-200" },
                 { name: "B.Des", desc: "Design & Creativity", paths: "6+ Career Paths", icon: Palette, color: "text-pink-600", bg: "bg-pink-100", border: "border-pink-200" },
                 { name: "BSW", desc: "Social Work & Development", paths: "5+ Career Paths", icon: UserPlus, color: "text-rose-600", bg: "bg-rose-100", border: "border-rose-200" },
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

           {/* Top Career Opportunities for BCA */}
           <div>
             <h2 className="text-xl font-bold text-gray-900 mb-5">Top Career Opportunities for BCA</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
               {[
                 { name: "Software Developer", salary: "₹4 - 12 LPA", tag: "High Growth", tagColor: "bg-green-100 text-green-700 border-green-200", icon: Code, color: "text-purple-600", bg: "bg-purple-100", border: "border-purple-200" },
                 { name: "Data Analyst", salary: "₹4.5 - 9 LPA", tag: "High Demand", tagColor: "bg-blue-100 text-blue-700 border-blue-200", icon: LineChart, color: "text-emerald-600", bg: "bg-emerald-100", border: "border-emerald-200" },
                 { name: "UI/UX Designer", salary: "₹4 - 10 LPA", tag: "Creative", tagColor: "bg-pink-100 text-pink-700 border-pink-200", icon: Layout, color: "text-pink-600", bg: "bg-pink-100", border: "border-pink-200" },
                 { name: "AI Engineer", salary: "₹6 - 15 LPA", tag: "Future Ready", tagColor: "bg-indigo-100 text-indigo-700 border-indigo-200", icon: CpuIcon, color: "text-blue-600", bg: "bg-blue-100", border: "border-blue-200" },
                 { name: "Cyber Security Analyst", salary: "₹4 - 11 LPA", tag: "High Demand", tagColor: "bg-red-100 text-red-700 border-red-200", icon: Shield, color: "text-orange-600", bg: "bg-orange-100", border: "border-orange-200" },
               ].map((career, i) => (
                 <div key={i} className={`flex flex-col border ${career.border} rounded-2xl p-4 hover:shadow-lg transition-all cursor-pointer group bg-white relative overflow-hidden`}>
                   <div className="flex items-start gap-3 mb-3">
                     <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${career.bg} ${career.color} shadow-sm group-hover:scale-110 transition-transform`}>
                        <career.icon className="w-5 h-5" />
                     </div>
                     <div>
                       <h3 className={`font-extrabold text-[12px] text-gray-900 leading-tight mb-1`}>{career.name}</h3>
                       <p className="text-[10px] font-bold text-gray-500">{career.salary}</p>
                     </div>
                   </div>
                   <div className="mb-4">
                     <span className={`text-[8px] font-bold px-2 py-0.5 rounded border ${career.tagColor}`}>{career.tag}</span>
                   </div>
                   <div className="border-t border-gray-100 pt-3">
                     <p className="text-[9px] font-bold text-gray-500 mb-1.5">Key Skills</p>
                     <div className="flex items-center gap-1.5 mb-3">
                        <div className="w-5 h-5 bg-gray-100 rounded flex items-center justify-center text-[10px]">{"< >"}</div>
                        <div className="w-5 h-5 bg-blue-50 rounded flex items-center justify-center text-blue-600"><Code2 className="w-3 h-3"/></div>
                        <div className="w-5 h-5 bg-yellow-50 rounded flex items-center justify-center text-yellow-600 text-[10px] font-bold">JS</div>
                     </div>
                     <p className="text-[9px] font-bold text-gray-500 mb-1.5">Top Recruiters</p>
                     <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black text-blue-600">G</span>
                        <span className="text-[10px] font-black text-orange-500">a</span>
                        <span className="text-[10px] font-black text-blue-500">Infosys</span>
                     </div>
                   </div>
                 </div>
               ))}
             </div>
           </div>

           {/* Career Roadmap & Top Skills Row */}
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              
              {/* Career Roadmap */}
              <div className="lg:col-span-6 bg-white rounded-3xl p-5 border border-gray-100 shadow-sm flex flex-col">
                 <h2 className="text-sm font-bold text-gray-900 mb-6">Career Roadmap</h2>
                 <div className="relative flex items-center justify-between mt-auto mb-4 px-2">
                    <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-gray-100 -z-10 -translate-y-1/2"></div>
                    
                    <div className="flex flex-col items-center gap-2 z-10">
                       <div className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[10px] font-bold shadow-md">1</div>
                       <span className="text-[8px] font-bold text-indigo-700 text-center w-12 leading-tight">Bachelor's Degree</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 z-10">
                       <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-[10px] font-bold shadow-md">2</div>
                       <span className="text-[8px] font-bold text-blue-700 text-center w-12 leading-tight">Core Subjects</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 z-10">
                       <div className="w-6 h-6 rounded-full bg-cyan-500 text-white flex items-center justify-center text-[10px] font-bold shadow-md">3</div>
                       <span className="text-[8px] font-bold text-cyan-700 text-center w-12 leading-tight">Skill Dev.</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 z-10">
                       <div className="w-6 h-6 rounded-full bg-teal-500 text-white flex items-center justify-center text-[10px] font-bold shadow-md">4</div>
                       <span className="text-[8px] font-bold text-teal-700 text-center w-12 leading-tight">Projects</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 z-10">
                       <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-[10px] font-bold shadow-md">5</div>
                       <span className="text-[8px] font-bold text-green-700 text-center w-12 leading-tight">Internship</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 z-10">
                       <div className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center text-[10px] font-bold shadow-md">6</div>
                       <span className="text-[8px] font-bold text-amber-700 text-center w-12 leading-tight">Placement</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 z-10">
                       <div className="w-8 h-8 rounded-full bg-indigo-900 text-white flex items-center justify-center text-[10px] font-bold shadow-lg"><GraduationCap className="w-4 h-4" /></div>
                       <span className="text-[8px] font-black text-indigo-900 text-center w-12 leading-tight">Career Success</span>
                    </div>
                 </div>
              </div>

              {/* Top Skills to Learn */}
              <div className="lg:col-span-6 bg-white rounded-3xl p-5 border border-gray-100 shadow-sm">
                 <h2 className="text-sm font-bold text-gray-900 mb-4">Top Skills to Learn</h2>
                 <div className="flex flex-wrap gap-2 items-center">
                    <div className="flex items-center gap-1.5 border border-blue-100 bg-blue-50/50 px-2.5 py-1.5 rounded-lg">
                       <Code2 className="w-3.5 h-3.5 text-blue-600" />
                       <span className="text-[9px] font-bold text-gray-700">Python</span>
                    </div>
                    <div className="flex items-center gap-1.5 border border-red-100 bg-red-50/50 px-2.5 py-1.5 rounded-lg">
                       <Code className="w-3.5 h-3.5 text-red-600" />
                       <span className="text-[9px] font-bold text-gray-700">Java</span>
                    </div>
                    <div className="flex items-center gap-1.5 border border-cyan-100 bg-cyan-50/50 px-2.5 py-1.5 rounded-lg">
                       <Database className="w-3.5 h-3.5 text-cyan-600" />
                       <span className="text-[9px] font-bold text-gray-700">SQL</span>
                    </div>
                    <div className="flex items-center gap-1.5 border border-yellow-100 bg-yellow-50/50 px-2.5 py-1.5 rounded-lg">
                       <FileCode2 className="w-3.5 h-3.5 text-yellow-600" />
                       <span className="text-[9px] font-bold text-gray-700">JavaScript</span>
                    </div>
                    <div className="flex items-center gap-1.5 border border-indigo-100 bg-indigo-50/50 px-2.5 py-1.5 rounded-lg">
                       <Activity className="w-3.5 h-3.5 text-indigo-600" />
                       <span className="text-[9px] font-bold text-gray-700">Communication</span>
                    </div>
                    <div className="flex items-center gap-1.5 border border-teal-100 bg-teal-50/50 px-2.5 py-1.5 rounded-lg">
                       <CheckCircle className="w-3.5 h-3.5 text-teal-600" />
                       <span className="text-[9px] font-bold text-gray-700">Problem Solving</span>
                    </div>
                    <div className="flex items-center gap-1.5 border border-orange-100 bg-orange-50/50 px-2.5 py-1.5 rounded-lg">
                       <Cloud className="w-3.5 h-3.5 text-orange-600" />
                       <span className="text-[9px] font-bold text-gray-700">Cloud Computing</span>
                    </div>
                    <div className="flex items-center gap-1.5 border border-gray-200 bg-gray-50/50 px-2.5 py-1.5 rounded-lg">
                       <PenTool className="w-3.5 h-3.5 text-gray-700" />
                       <span className="text-[9px] font-bold text-gray-700">Git & GitHub</span>
                    </div>
                    <div className="flex items-center gap-1.5 border border-emerald-100 bg-emerald-50/50 px-2.5 py-1.5 rounded-lg">
                       <LineChart className="w-3.5 h-3.5 text-emerald-600" />
                       <span className="text-[9px] font-bold text-gray-700">Data Analytics</span>
                    </div>
                    <div className="flex items-center gap-1.5 border border-green-100 bg-green-50/50 px-2.5 py-1.5 rounded-lg">
                       <Calculator className="w-3.5 h-3.5 text-green-600" />
                       <span className="text-[9px] font-bold text-gray-700">Excel</span>
                    </div>
                    <div className="flex items-center gap-1.5 border border-yellow-200 bg-yellow-100/50 px-2.5 py-1.5 rounded-lg">
                       <Activity className="w-3.5 h-3.5 text-yellow-700" />
                       <span className="text-[9px] font-bold text-gray-700">Power BI</span>
                    </div>
                    <div className="flex items-center gap-1.5 border border-purple-100 bg-purple-50/50 px-2.5 py-1.5 rounded-lg">
                       <CpuIcon className="w-3.5 h-3.5 text-purple-600" />
                       <span className="text-[9px] font-bold text-gray-700">AI / ML</span>
                    </div>
                 </div>
              </div>
           </div>

           {/* Certifications, Higher Studies, Internships */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              
              {/* Certifications to Boost Career */}
              <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm flex flex-col">
                 <h2 className="text-sm font-bold text-gray-900 mb-4">Certifications to Boost Career</h2>
                 <div className="grid grid-cols-3 gap-3 flex-1 items-center justify-items-center">
                    <div className="text-[11px] font-black text-yellow-600">AWS</div>
                    <div className="text-[11px] font-black text-gray-600">Microsoft</div>
                    <div className="text-[11px] font-black text-gray-600">Google</div>
                    <div className="text-[11px] font-black text-blue-500">CISCO</div>
                    <div className="text-[11px] font-black text-red-600">ORACLE</div>
                    <div className="text-[11px] font-black text-blue-700">IBM</div>
                    <div className="text-[11px] font-black text-blue-600">coursera</div>
                    <div className="text-[11px] font-black text-blue-400">NPTEL</div>
                 </div>
              </div>

              {/* Higher Studies Options */}
              <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm flex flex-col">
                 <h2 className="text-sm font-bold text-gray-900 mb-4">Higher Studies Options</h2>
                 <div className="flex-1 flex justify-between gap-2">
                    <div className="flex flex-col items-center gap-1">
                       <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100"><GraduationCap className="w-4 h-4"/></div>
                       <span className="text-[9px] font-bold text-gray-700 text-center">MCA</span>
                       <span className="text-[7px] text-gray-500 text-center">(2 Years)</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                       <div className="w-8 h-8 rounded-lg bg-green-50 text-green-600 flex items-center justify-center border border-green-100"><Briefcase className="w-4 h-4"/></div>
                       <span className="text-[9px] font-bold text-gray-700 text-center">MBA</span>
                       <span className="text-[7px] text-gray-500 text-center">(2 Years)</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                       <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100"><Settings className="w-4 h-4"/></div>
                       <span className="text-[9px] font-bold text-gray-700 text-center">M.Tech</span>
                       <span className="text-[7px] text-gray-500 text-center">(2 Years)</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                       <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100"><Globe className="w-4 h-4"/></div>
                       <span className="text-[9px] font-bold text-gray-700 text-center">MS Abroad</span>
                       <span className="text-[7px] text-gray-500 text-center">(1-2 Years)</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                       <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100"><Award className="w-4 h-4"/></div>
                       <span className="text-[9px] font-bold text-gray-700 text-center">PG Diploma</span>
                       <span className="text-[7px] text-gray-500 text-center">(1 Year)</span>
                    </div>
                 </div>
              </div>

              {/* Internship Opportunities */}
              <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm flex flex-col">
                 <h2 className="text-sm font-bold text-gray-900 mb-4">Internship Opportunities</h2>
                 <div className="flex-1 flex justify-between gap-2">
                    <div className="flex flex-col items-center gap-1">
                       <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center border border-teal-100"><MapPin className="w-4 h-4"/></div>
                       <span className="text-[8px] font-bold text-gray-700 text-center">Remote<br/>Internships</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                       <div className="w-8 h-8 rounded-lg bg-green-50 text-green-600 flex items-center justify-center border border-green-100"><IndianRupee className="w-4 h-4"/></div>
                       <span className="text-[8px] font-bold text-gray-700 text-center">Paid<br/>Internships</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                       <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100"><Sun className="w-4 h-4"/></div>
                       <span className="text-[8px] font-bold text-gray-700 text-center">Summer<br/>Internships</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                       <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100"><MonitorPlay className="w-4 h-4"/></div>
                       <span className="text-[8px] font-bold text-gray-700 text-center">Virtual<br/>Internships</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                       <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center border border-rose-100"><Building className="w-4 h-4"/></div>
                       <span className="text-[8px] font-bold text-gray-700 text-center">Campus<br/>Internships</span>
                    </div>
                 </div>
              </div>

           </div>

          {/* Bottom Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* AI Assistant */}
          <div className="bg-white rounded-3xl p-5 border border-indigo-100 shadow-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/80 to-blue-50/80 z-0"></div>
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
                  <span>Best career options after BCA</span>
                  <ArrowRight className="w-3 h-3 text-indigo-300 group-hover/q:text-indigo-600 group-hover/q:translate-x-1 transition-all" />
                </div>
                <div className="bg-white border border-indigo-50 rounded-lg p-2.5 text-[10px] font-medium text-gray-700 hover:border-indigo-300 hover:shadow-sm cursor-pointer transition-all flex items-center justify-between group/q" onClick={() => window.location.href='/chat'}>
                  <span>Top certifications for BCA students</span>
                  <ArrowRight className="w-3 h-3 text-indigo-300 group-hover/q:text-indigo-600 group-hover/q:translate-x-1 transition-all" />
                </div>
                <div className="bg-white border border-indigo-50 rounded-lg p-2.5 text-[10px] font-medium text-gray-700 hover:border-indigo-300 hover:shadow-sm cursor-pointer transition-all flex items-center justify-between group/q" onClick={() => window.location.href='/chat'}>
                  <span>Roadmap to become Data Scientist</span>
                  <ArrowRight className="w-3 h-3 text-indigo-300 group-hover/q:text-indigo-600 group-hover/q:translate-x-1 transition-all" />
                </div>
                <div className="bg-white border border-indigo-50 rounded-lg p-2.5 text-[10px] font-medium text-gray-700 hover:border-indigo-300 hover:shadow-sm cursor-pointer transition-all flex items-center justify-between group/q" onClick={() => window.location.href='/chat'}>
                  <span>Highest paying jobs in IT sector</span>
                  <ArrowRight className="w-3 h-3 text-indigo-300 group-hover/q:text-indigo-600 group-hover/q:translate-x-1 transition-all" />
                </div>
                <div className="bg-white border border-indigo-50 rounded-lg p-2.5 text-[10px] font-medium text-gray-700 hover:border-indigo-300 hover:shadow-sm cursor-pointer transition-all flex items-center justify-between group/q" onClick={() => window.location.href='/chat'}>
                  <span>MBA or Job - what should I choose?</span>
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
            <h3 className="font-bold text-gray-900 text-[13px] mb-4">Salary Insights (BCA)</h3>
            <div className="relative pl-4 space-y-4 before:absolute before:inset-y-0 before:left-[11px] before:w-[2px] before:bg-gray-100">
               <div className="relative">
                  <div className="absolute -left-[18px] top-1 w-4 h-4 rounded-full bg-green-100 border-2 border-white flex items-center justify-center z-10"><div className="w-2 h-2 rounded-full bg-green-500"></div></div>
                  <div>
                     <p className="text-[9px] text-gray-500 font-bold mb-0.5">Entry Level (0-1 yr)</p>
                     <p className="text-[11px] font-black text-gray-900">₹3 - 5 LPA</p>
                  </div>
               </div>
               <div className="relative">
                  <div className="absolute -left-[18px] top-1 w-4 h-4 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center z-10"><div className="w-2 h-2 rounded-full bg-blue-500"></div></div>
                  <div>
                     <p className="text-[9px] text-gray-500 font-bold mb-0.5">2-3 Years Experience</p>
                     <p className="text-[11px] font-black text-gray-900">₹6 - 10 LPA</p>
                  </div>
               </div>
               <div className="relative">
                  <div className="absolute -left-[18px] top-1 w-4 h-4 rounded-full bg-purple-100 border-2 border-white flex items-center justify-center z-10"><div className="w-2 h-2 rounded-full bg-purple-500"></div></div>
                  <div>
                     <p className="text-[9px] text-gray-500 font-bold mb-0.5">5+ Years Experience</p>
                     <p className="text-[11px] font-black text-gray-900">₹12 - 20 LPA</p>
                  </div>
               </div>
               <div className="relative">
                  <div className="absolute -left-[18px] top-1 w-4 h-4 rounded-full bg-orange-100 border-2 border-white flex items-center justify-center z-10"><div className="w-2 h-2 rounded-full bg-orange-500"></div></div>
                  <div>
                     <p className="text-[9px] text-gray-500 font-bold mb-0.5">Senior Roles (10+ yrs)</p>
                     <p className="text-[11px] font-black text-gray-900">₹20 - 40+ LPA</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Top Recruiters */}
          <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-900 text-[13px] mb-4">Top Recruiters</h3>
            <div className="grid grid-cols-3 gap-y-4 gap-x-2 items-center justify-items-center">
               <span className="text-[10px] font-black text-gray-600">Google</span>
               <span className="text-[10px] font-black text-gray-600">Microsoft</span>
               <span className="text-[10px] font-black text-gray-800">amazon</span>
               <span className="text-[10px] font-black text-blue-600">Infosys</span>
               <span className="text-[10px] font-black text-blue-800">TCS</span>
               <span className="text-[10px] font-black text-gray-900 tracking-tighter">accenture</span>
               <span className="text-[10px] font-black text-blue-700">IBM</span>
               <span className="text-[9px] font-black text-blue-500">Capgemini</span>
               <span className="text-[10px] font-black text-green-700">Deloitte.</span>
               <span className="text-[10px] font-black text-red-600">ORACLE</span>
               <span className="text-[10px] font-black text-blue-800">Cognizant</span>
               <span className="text-[10px] font-black text-red-600">wipro</span>
            </div>
          </div>
          
          {/* Success Stories */}
          <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm relative overflow-hidden">
             <h3 className="font-bold text-gray-900 text-[13px] mb-4">Success Stories</h3>
             <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-gray-200 overflow-hidden shadow-sm mb-3 border-2 border-white">
                   <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav&style=circle" alt="Aarav" className="w-full h-full object-cover" />
                </div>
                <h4 className="font-bold text-sm text-gray-900 mb-0.5">Aarav Mehta</h4>
                <p className="text-[10px] text-gray-500 font-medium mb-1">BCA Graduate</p>
                <p className="text-[10px] text-gray-700 font-semibold mb-2">Software Engineer at Google<br/><span className="text-indigo-600 font-bold">Package: ₹18 LPA</span></p>
                <p className="text-[9px] text-gray-500 italic px-2">"Focused on skills, built projects and never stopped learning. That changed my career!"</p>
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
