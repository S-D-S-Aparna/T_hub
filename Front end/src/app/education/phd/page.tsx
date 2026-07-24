"use client";

import MainLayout from "@/components/layout/MainLayout";
import Link from "next/link";
import { ChevronRight, Target, CheckCircle, GraduationCap, ArrowRight, Bot, Star, Building2, MapPin, IndianRupee, Cpu, BookOpen, Activity, HeartPulse, Briefcase, Award, Shield, Palette, Wrench, Calculator, Globe, Monitor, Settings, PenTool, Flame, Snowflake, Combine, Car, Microscope, Thermometer, UserCheck, Stethoscope, BriefcaseMedical, Phone, UserPlus, Leaf, Droplets, Sun, Sprout, Trees, Wheat, Milk, Tractor, Code, Database, Cloud, Smartphone, Layout, MonitorPlay, Code2, LineChart, Cpu as CpuIcon, FlaskConical, Gavel, FileText, Magnet, Scale, Building, Pen, Rocket, TrendingUp, Zap, FileCode2, Server, BrainCircuit, Network, BookMarked, Users, Lightbulb, Workflow, Sigma, DollarSign, Library, GraduationCap as GraduationCapIcon, Dna, Atom, Beaker, Calculator as CalculatorIcon, LineChart as Chart, BarChart3, Presentation, PenLine, FileSearch, GraduationCap as GradCap, Languages, Search, Binary, Building as BuildingIcon, Coins, PieChart, Users as UsersIcon, Handshake, Brain, Landmark } from "lucide-react";

export default function PhdPage() {
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
        <span className="text-indigo-600 font-bold bg-indigo-50 px-2 py-1 rounded-md">PhD</span>
        <ChevronRight className="w-3 h-3 text-gray-400" />
        <span className="font-medium text-gray-400">Research Career</span>
        <ChevronRight className="w-3 h-3 text-gray-400" />
        <span className="font-medium text-gray-400">Research Area</span>
        <ChevronRight className="w-3 h-3 text-gray-400" />
        <span className="font-medium text-gray-400">Publications</span>
        <ChevronRight className="w-3 h-3 text-gray-400" />
        <span className="font-medium text-gray-400">Global Opportunities</span>
        <ChevronRight className="w-3 h-3 text-gray-400" />
        <div className="flex items-center gap-1 font-medium text-gray-400">
          <Star className="w-3 h-3" /> Success
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 mb-10">
        
        {/* Main Content Area */}
        <div className="flex-1 space-y-8">
           {/* Hero Banner */}
           <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-6 md:p-8 border border-blue-100 relative overflow-hidden flex flex-col md:flex-row items-center gap-6 shadow-sm">
             <div className="flex-1 relative z-10">
               <h2 className="text-sm md:text-base font-bold text-gray-800 mb-2">Build Your</h2>
               <h1 className="text-3xl md:text-5xl font-black text-indigo-700 mb-4 leading-tight">
                 PhD Research & Career Journey
               </h1>
               <p className="text-gray-600 mb-6 text-sm md:text-base font-medium max-w-lg leading-relaxed">
                 Explore research domains, doctoral specializations, fellowships, publications, global universities, research laboratories and endless academic & industry opportunities.
               </p>
             </div>
             
             <div className="w-full md:w-96 relative z-10 hidden md:block">
               <div className="relative w-64 h-64 bg-blue-100 rounded-full flex items-center justify-center ml-auto overflow-visible">
                 {/* Decorative elements with animations */}
                 <div className="absolute top-4 -left-4 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center animate-bounce" style={{ animationDuration: '3.2s' }}><Dna className="w-6 h-6 text-purple-600" /></div>
                 <div className="absolute bottom-10 -left-8 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center animate-bounce" style={{ animationDuration: '4.5s' }}><Microscope className="w-5 h-5 text-indigo-500" /></div>
                 
                 <div className="absolute top-1/4 -right-8 bg-blue-50 rounded-lg shadow-md px-3 py-1.5 flex items-center justify-center border border-blue-100 animate-bounce" style={{ animationDuration: '3.8s' }}><span className="text-[10px] font-bold text-blue-700">RESEARCH</span></div>
                 <div className="absolute bottom-1/4 -right-4 bg-emerald-50 rounded-lg shadow-md px-3 py-1.5 flex items-center justify-center border border-emerald-100 animate-bounce" style={{ animationDuration: '2.8s' }}><span className="text-[10px] font-bold text-emerald-700">THESIS</span></div>
                 <div className="absolute -top-4 right-10 bg-indigo-600 rounded-lg shadow-lg px-3 py-1.5 flex items-center justify-center animate-bounce" style={{ animationDuration: '4.1s' }}><span className="text-xs font-bold text-white flex items-center gap-1"><Lightbulb className="w-3 h-3" /> INNOVATION</span></div>

                 <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=PhDStudent&style=circle" alt="Student" className="w-full h-full object-cover rounded-full" />
               </div>
             </div>
           </div>

           {/* Choose Your Research Domain */}
           <div>
             <h2 className="text-xl font-bold text-gray-900 mb-5">Choose Your Research Domain</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
               {[
                 { name: "Computer Science", desc: "AI, Systems, Networks and more", paths: "20+ Specializations", icon: Monitor, color: "text-blue-600", bg: "bg-blue-100", border: "border-blue-200" },
                 { name: "Artificial Intelligence", desc: "ML, NLP, CV, Robotics and more", paths: "18+ Specializations", icon: BrainCircuit, color: "text-indigo-600", bg: "bg-indigo-100", border: "border-indigo-200" },
                 { name: "Data Science", desc: "Big Data, Analytics, AI and more", paths: "15+ Specializations", icon: BarChart3, color: "text-blue-500", bg: "bg-blue-50", border: "border-blue-200" },
                 { name: "Biotechnology", desc: "Genetics, Bioinformatics, Microbiology and more", paths: "16+ Specializations", icon: Dna, color: "text-green-600", bg: "bg-green-100", border: "border-green-200" },
                 { name: "Physics", desc: "Quantum, Astrophysics, Materials and more", paths: "14+ Specializations", icon: Atom, color: "text-purple-600", bg: "bg-purple-100", border: "border-purple-200" },
                 { name: "Chemistry", desc: "Organic, Inorganic, Physical and more", paths: "15+ Specializations", icon: FlaskConical, color: "text-teal-600", bg: "bg-teal-100", border: "border-teal-200" },
                 { name: "Mathematics", desc: "Algebra, Statistics, Topology and more", paths: "18+ Specializations", icon: Sigma, color: "text-purple-700", bg: "bg-purple-50", border: "border-purple-200" },
                 { name: "Economics", desc: "Macro, Public Policy, Econometrics and more", paths: "12+ Specializations", icon: Coins, color: "text-amber-600", bg: "bg-amber-100", border: "border-amber-200" },
                 { name: "Management", desc: "Finance, Marketing, HR, Strategy and more", paths: "15+ Specializations", icon: Briefcase, color: "text-slate-600", bg: "bg-slate-100", border: "border-slate-200" },
                 { name: "Social Sciences", desc: "Psychology, Sociology, Political Science and more", paths: "14+ Specializations", icon: UsersIcon, color: "text-indigo-700", bg: "bg-indigo-50", border: "border-indigo-200" },
               ].map((course, i) => (
                 <div key={i} className={`flex flex-row items-center gap-3 border ${course.border} rounded-xl p-3 hover:shadow-lg transition-all cursor-pointer group bg-white h-full relative overflow-hidden`}>
                   <div className={`w-10 h-10 shrink-0 rounded-xl flex items-center justify-center ${course.bg} ${course.color} shadow-sm group-hover:scale-110 transition-transform`}>
                      <course.icon className="w-5 h-5" />
                   </div>
                   <div className="flex-1 flex flex-col justify-center">
                     <h3 className={`font-extrabold text-[12px] ${course.color} leading-tight mb-0.5`}>{course.name}</h3>
                     <p className="text-[9px] font-bold text-gray-700 mb-0.5 leading-tight">{course.paths}</p>
                     <p className="text-[9px] text-gray-500 leading-tight line-clamp-2">{course.desc}</p>
                   </div>
                 </div>
               ))}
             </div>
           </div>

           {/* Career Opportunities After PhD */}
           <div>
             <h2 className="text-xl font-bold text-gray-900 mb-5">Career Opportunities After PhD</h2>
             <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
               {[
                 { name: "Research Scientist", salary: "₹8 - 18 LPA", desc: "R&D, Labs, Institutes", icon: FlaskConical, color: "text-indigo-600", bg: "bg-indigo-100", border: "border-indigo-200" },
                 { name: "University Professor", salary: "₹10 - 25 LPA", desc: "Teaching, Research", icon: GradCap, color: "text-blue-600", bg: "bg-blue-100", border: "border-blue-200" },
                 { name: "AI Research Engineer", salary: "₹15 - 30 LPA", desc: "AI Labs, Tech Companies", icon: BrainCircuit, color: "text-blue-500", bg: "bg-blue-50", border: "border-blue-200" },
                 { name: "Principal Data Scientist", salary: "₹18 - 35 LPA", desc: "Analytics, AI, Big Data", icon: BarChart3, color: "text-indigo-700", bg: "bg-indigo-50", border: "border-indigo-200" },
                 { name: "R&D Manager", salary: "₹20 - 40 LPA", desc: "Research Teams, Innovation", icon: UsersIcon, color: "text-amber-600", bg: "bg-amber-100", border: "border-amber-200" },
                 { name: "Postdoctoral Fellow", salary: "₹8 - 15 LPA", desc: "Research Projects, Universities", icon: GraduationCap, color: "text-purple-600", bg: "bg-purple-100", border: "border-purple-200" },
                 { name: "More Opportunities", salary: "", desc: "Explore diverse research & industry roles", icon: Search, color: "text-gray-500", bg: "bg-gray-100", border: "border-gray-200" },
               ].map((career, i) => (
                 <div key={i} className={`flex flex-col items-center text-center border ${career.border} rounded-xl p-3 hover:shadow-lg transition-all cursor-pointer group bg-white relative overflow-hidden h-full`}>
                   <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${career.bg} ${career.color} shadow-sm group-hover:scale-110 transition-transform mb-2`}>
                      <career.icon className="w-4 h-4" />
                   </div>
                   <h3 className={`font-extrabold text-[11px] text-gray-900 leading-tight mb-1`}>{career.name}</h3>
                   {career.salary && <p className="text-[10px] font-bold text-gray-700 mb-1">{career.salary}</p>}
                   <p className="text-[9px] text-gray-500 leading-tight">{career.desc}</p>
                 </div>
               ))}
             </div>
           </div>

           {/* Research Journey Roadmap */}
           <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm flex flex-col">
              <h2 className="text-sm font-bold text-gray-900 mb-6">Research Journey</h2>
              <div className="relative flex items-center justify-between mt-auto mb-4 px-2">
                 <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-gray-200 -z-10 -translate-y-1/2 border-t border-dashed border-gray-400"></div>
                 
                 <div className="flex flex-col items-center gap-2 z-10">
                    <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-bold shadow-md">1</div>
                    <span className="text-[8px] font-bold text-emerald-700 text-center w-12 leading-tight">PhD Admission</span>
                 </div>
                 <div className="flex flex-col items-center gap-2 z-10">
                    <div className="w-6 h-6 rounded-full bg-emerald-400 text-white flex items-center justify-center text-[10px] font-bold shadow-md">2</div>
                    <span className="text-[8px] font-bold text-emerald-600 text-center w-12 leading-tight">Coursework</span>
                 </div>
                 <div className="flex flex-col items-center gap-2 z-10">
                    <div className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-[10px] font-bold shadow-md">3</div>
                    <span className="text-[8px] font-bold text-red-700 text-center w-12 leading-tight">Research Proposal</span>
                 </div>
                 <div className="flex flex-col items-center gap-2 z-10">
                    <div className="w-6 h-6 rounded-full bg-indigo-500 text-white flex items-center justify-center text-[10px] font-bold shadow-md">4</div>
                    <span className="text-[8px] font-bold text-indigo-700 text-center w-16 leading-tight">Experiments & Analysis</span>
                 </div>
                 <div className="flex flex-col items-center gap-2 z-10">
                    <div className="w-6 h-6 rounded-full bg-purple-500 text-white flex items-center justify-center text-[10px] font-bold shadow-md">5</div>
                    <span className="text-[8px] font-bold text-purple-700 text-center w-12 leading-tight">Publications</span>
                 </div>
                 <div className="flex flex-col items-center gap-2 z-10">
                    <div className="w-6 h-6 rounded-full bg-teal-500 text-white flex items-center justify-center text-[10px] font-bold shadow-md">6</div>
                    <span className="text-[8px] font-bold text-teal-700 text-center w-12 leading-tight">Thesis Submission</span>
                 </div>
                 <div className="flex flex-col items-center gap-2 z-10">
                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold shadow-md">7</div>
                    <span className="text-[8px] font-bold text-blue-700 text-center w-12 leading-tight">Viva / Defense</span>
                 </div>
                 <div className="flex flex-col items-center gap-2 z-10">
                    <div className="w-8 h-8 rounded-full bg-indigo-900 text-white flex items-center justify-center shadow-lg">8</div>
                    <span className="text-[8px] font-black text-indigo-900 text-center w-12 leading-tight">Research Career</span>
                 </div>
              </div>
           </div>

           {/* 4-Column Bottom Sections */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              
              {/* Skills for Researchers */}
              <div className="bg-white rounded-3xl p-4 border border-gray-100 shadow-sm flex flex-col">
                 <h2 className="text-[11px] font-bold text-gray-900 mb-3">Skills for Researchers</h2>
                 <div className="grid grid-cols-4 gap-2">
                    <div className="flex flex-col items-center text-center"><div className="w-7 h-7 bg-blue-50 text-blue-600 rounded flex items-center justify-center"><Search className="w-3.5 h-3.5"/></div><span className="text-[7px] font-medium mt-1 leading-tight">Research Methodology</span></div>
                    <div className="flex flex-col items-center text-center"><div className="w-7 h-7 bg-purple-50 text-purple-600 rounded flex items-center justify-center"><PenLine className="w-3.5 h-3.5"/></div><span className="text-[7px] font-medium mt-1 leading-tight">Scientific Writing</span></div>
                    <div className="flex flex-col items-center text-center"><div className="w-7 h-7 bg-green-50 text-green-600 rounded flex items-center justify-center"><BarChart3 className="w-3.5 h-3.5"/></div><span className="text-[7px] font-medium mt-1 leading-tight">Data Analysis</span></div>
                    <div className="flex flex-col items-center text-center"><div className="w-7 h-7 bg-indigo-50 text-indigo-600 rounded flex items-center justify-center"><Code className="w-3.5 h-3.5"/></div><span className="text-[7px] font-medium mt-1 leading-tight">Python</span></div>
                    <div className="flex flex-col items-center text-center"><div className="w-7 h-7 bg-teal-50 text-teal-600 rounded flex items-center justify-center"><Binary className="w-3.5 h-3.5"/></div><span className="text-[7px] font-medium mt-1 leading-tight">R Programming</span></div>
                    <div className="flex flex-col items-center text-center"><div className="w-7 h-7 bg-amber-50 text-amber-600 rounded flex items-center justify-center"><LineChart className="w-3.5 h-3.5"/></div><span className="text-[7px] font-medium mt-1 leading-tight">Statistics</span></div>
                    <div className="flex flex-col items-center text-center"><div className="w-7 h-7 bg-rose-50 text-rose-600 rounded flex items-center justify-center"><Lightbulb className="w-3.5 h-3.5"/></div><span className="text-[7px] font-medium mt-1 leading-tight">Critical Thinking</span></div>
                    <div className="flex flex-col items-center text-center"><div className="w-7 h-7 bg-blue-50 text-blue-600 rounded flex items-center justify-center"><PenTool className="w-3.5 h-3.5"/></div><span className="text-[7px] font-medium mt-1 leading-tight">Grant Writing</span></div>
                    <div className="flex flex-col items-center text-center"><div className="w-7 h-7 bg-emerald-50 text-emerald-600 rounded flex items-center justify-center"><Presentation className="w-3.5 h-3.5"/></div><span className="text-[7px] font-medium mt-1 leading-tight">Academic Presentation</span></div>
                    <div className="flex flex-col items-center text-center"><div className="w-7 h-7 bg-indigo-50 text-indigo-600 rounded flex items-center justify-center"><BookMarked className="w-3.5 h-3.5"/></div><span className="text-[7px] font-medium mt-1 leading-tight">Literature Review</span></div>
                 </div>
              </div>

              {/* Publications & Conferences */}
              <div className="bg-white rounded-3xl p-4 border border-gray-100 shadow-sm flex flex-col">
                 <h2 className="text-[11px] font-bold text-gray-900 mb-3">Publications & Conferences</h2>
                 <div className="grid grid-cols-4 gap-2">
                    <div className="flex flex-col items-center text-center"><div className="w-7 h-7 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-bold text-[8px]">IEEE</div><span className="text-[7px] font-medium mt-1 leading-tight">IEEE</span></div>
                    <div className="flex flex-col items-center text-center"><div className="w-7 h-7 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center font-bold text-[8px]">Spr</div><span className="text-[7px] font-medium mt-1 leading-tight">Springer</span></div>
                    <div className="flex flex-col items-center text-center"><div className="w-7 h-7 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center font-bold text-[8px]">Els</div><span className="text-[7px] font-medium mt-1 leading-tight">Elsevier</span></div>
                    <div className="flex flex-col items-center text-center"><div className="w-7 h-7 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center font-bold text-[8px]">ACM</div><span className="text-[7px] font-medium mt-1 leading-tight">ACM</span></div>
                    <div className="flex flex-col items-center text-center"><div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center font-bold text-[8px]">N</div><span className="text-[7px] font-medium mt-1 leading-tight">Nature</span></div>
                    <div className="flex flex-col items-center text-center"><div className="w-7 h-7 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold text-[8px]">Sco</div><span className="text-[7px] font-medium mt-1 leading-tight">Scopus</span></div>
                    <div className="flex flex-col items-center text-center"><div className="w-7 h-7 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center font-bold text-[8px]">Wos</div><span className="text-[7px] font-medium mt-1 leading-tight">Web of Science</span></div>
                    <div className="flex flex-col items-center text-center"><div className="w-7 h-7 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center font-bold text-[8px]">G</div><span className="text-[7px] font-medium mt-1 leading-tight">Google Scholar</span></div>
                 </div>
              </div>

              {/* Fellowships & Funding */}
              <div className="bg-white rounded-3xl p-4 border border-gray-100 shadow-sm flex flex-col">
                 <h2 className="text-[11px] font-bold text-gray-900 mb-3">Fellowships & Funding</h2>
                 <div className="grid grid-cols-4 gap-2">
                    <div className="flex flex-col items-center text-center"><div className="w-7 h-7 bg-pink-50 text-pink-600 rounded-full flex items-center justify-center font-bold text-[8px]">UGC</div><span className="text-[7px] font-medium mt-1 leading-tight">UGC Fellowship</span></div>
                    <div className="flex flex-col items-center text-center"><div className="w-7 h-7 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-bold text-[8px]">CSIR</div><span className="text-[7px] font-medium mt-1 leading-tight">CSIR Fellowship</span></div>
                    <div className="flex flex-col items-center text-center"><div className="w-7 h-7 bg-green-50 text-green-600 rounded-full flex items-center justify-center font-bold text-[8px]">DST</div><span className="text-[7px] font-medium mt-1 leading-tight">DST Inspire</span></div>
                    <div className="flex flex-col items-center text-center"><div className="w-7 h-7 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center font-bold text-[8px]">PMRF</div><span className="text-[7px] font-medium mt-1 leading-tight">PMRF Fellowship</span></div>
                    <div className="flex flex-col items-center text-center"><div className="w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-[8px]">F</div><span className="text-[7px] font-medium mt-1 leading-tight">Fulbright</span></div>
                    <div className="flex flex-col items-center text-center"><div className="w-7 h-7 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center font-bold text-[8px]">DAAD</div><span className="text-[7px] font-medium mt-1 leading-tight">DAAD</span></div>
                    <div className="flex flex-col items-center text-center"><div className="w-7 h-7 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center font-bold text-[8px]">Com</div><span className="text-[7px] font-medium mt-1 leading-tight">Commonwealth Scholarship</span></div>
                    <div className="flex flex-col items-center text-center"><div className="w-7 h-7 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center font-bold text-[8px]">Marie</div><span className="text-[7px] font-medium mt-1 leading-tight">Marie Curie Fellowship</span></div>
                 </div>
              </div>
              
              {/* Global Research Universities */}
              <div className="bg-white rounded-3xl p-4 border border-gray-100 shadow-sm flex flex-col">
                 <h2 className="text-[11px] font-bold text-gray-900 mb-3">Global Research Universities</h2>
                 <div className="grid grid-cols-4 gap-2">
                    <div className="flex flex-col items-center text-center"><div className="w-7 h-7 bg-gray-50 text-gray-700 border border-gray-200 rounded flex items-center justify-center font-bold text-[8px] tracking-tighter">MIT</div><span className="text-[7px] font-medium mt-1 leading-tight">MIT</span></div>
                    <div className="flex flex-col items-center text-center"><div className="w-7 h-7 bg-red-50 text-red-700 border border-red-100 rounded flex items-center justify-center font-bold text-[8px]">S</div><span className="text-[7px] font-medium mt-1 leading-tight">Stanford</span></div>
                    <div className="flex flex-col items-center text-center"><div className="w-7 h-7 bg-blue-50 text-blue-900 border border-blue-100 rounded flex items-center justify-center font-bold text-[8px]">O</div><span className="text-[7px] font-medium mt-1 leading-tight">Oxford</span></div>
                    <div className="flex flex-col items-center text-center"><div className="w-7 h-7 bg-teal-50 text-teal-900 border border-teal-100 rounded flex items-center justify-center font-bold text-[8px]">C</div><span className="text-[7px] font-medium mt-1 leading-tight">Cambridge</span></div>
                    <div className="flex flex-col items-center text-center"><div className="w-7 h-7 bg-slate-50 text-slate-700 border border-slate-200 rounded flex items-center justify-center font-bold text-[8px]">ETH</div><span className="text-[7px] font-medium mt-1 leading-tight">ETH Zurich</span></div>
                    <div className="flex flex-col items-center text-center"><div className="w-7 h-7 bg-orange-50 text-orange-700 border border-orange-100 rounded flex items-center justify-center font-bold text-[8px]">NUS</div><span className="text-[7px] font-medium mt-1 leading-tight">NUS Singapore</span></div>
                    <div className="flex flex-col items-center text-center"><div className="w-7 h-7 bg-indigo-50 text-indigo-700 border border-indigo-100 rounded flex items-center justify-center font-bold text-[8px]">IIT</div><span className="text-[7px] font-medium mt-1 leading-tight">IITs</span></div>
                    <div className="flex flex-col items-center text-center"><div className="w-7 h-7 bg-purple-50 text-purple-700 border border-purple-100 rounded flex items-center justify-center font-bold text-[8px]">IISc</div><span className="text-[7px] font-medium mt-1 leading-tight">IISc Bangalore</span></div>
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
              <p className="text-[11px] text-gray-600 mb-5 font-medium leading-tight">Your smart guide for research, careers and success.</p>
              
              <div className="space-y-2 mb-5">
                <p className="text-[9px] font-bold text-indigo-600 uppercase tracking-wider">Try asking me...</p>
                <div className="bg-white border border-indigo-50 rounded-lg p-2.5 text-[10px] font-medium text-gray-700 hover:border-indigo-300 hover:shadow-sm cursor-pointer transition-all flex items-center justify-between group/q" onClick={() => window.location.href='/chat'}>
                  <span>Best PhD research topics in AI</span>
                  <ArrowRight className="w-3 h-3 text-indigo-300 group-hover/q:text-indigo-600 group-hover/q:translate-x-1 transition-all" />
                </div>
                <div className="bg-white border border-indigo-50 rounded-lg p-2.5 text-[10px] font-medium text-gray-700 hover:border-indigo-300 hover:shadow-sm cursor-pointer transition-all flex items-center justify-between group/q" onClick={() => window.location.href='/chat'}>
                  <span>Fellowships available in India</span>
                  <ArrowRight className="w-3 h-3 text-indigo-300 group-hover/q:text-indigo-600 group-hover/q:translate-x-1 transition-all" />
                </div>
                <div className="bg-white border border-indigo-50 rounded-lg p-2.5 text-[10px] font-medium text-gray-700 hover:border-indigo-300 hover:shadow-sm cursor-pointer transition-all flex items-center justify-between group/q" onClick={() => window.location.href='/chat'}>
                  <span>How to publish in IEEE journals</span>
                  <ArrowRight className="w-3 h-3 text-indigo-300 group-hover/q:text-indigo-600 group-hover/q:translate-x-1 transition-all" />
                </div>
                <div className="bg-white border border-indigo-50 rounded-lg p-2.5 text-[10px] font-medium text-gray-700 hover:border-indigo-300 hover:shadow-sm cursor-pointer transition-all flex items-center justify-between group/q" onClick={() => window.location.href='/chat'}>
                  <span>PhD abroad vs India - which is better?</span>
                  <ArrowRight className="w-3 h-3 text-indigo-300 group-hover/q:text-indigo-600 group-hover/q:translate-x-1 transition-all" />
                </div>
                <div className="bg-white border border-indigo-50 rounded-lg p-2.5 text-[10px] font-medium text-gray-700 hover:border-indigo-300 hover:shadow-sm cursor-pointer transition-all flex items-center justify-between group/q" onClick={() => window.location.href='/chat'}>
                  <span>Research roadmap in Biotechnology</span>
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
            <h3 className="font-bold text-gray-900 text-[13px] mb-4">Salary Insights (PhD Careers)</h3>
            <div className="relative pl-4 space-y-4 before:absolute before:inset-y-0 before:left-[11px] before:w-[2px] before:bg-gray-100">
               <div className="relative">
                  <div className="absolute -left-[18px] top-1 w-4 h-4 rounded-full bg-green-100 border-2 border-white flex items-center justify-center z-10"><div className="w-2 h-2 rounded-full bg-green-500"></div></div>
                  <div>
                     <p className="text-[9px] text-gray-500 font-bold mb-0.5">Research Fellow (0 - 2 yr)</p>
                     <p className="text-[11px] font-black text-gray-900">₹8 - 12 LPA</p>
                  </div>
               </div>
               <div className="relative">
                  <div className="absolute -left-[18px] top-1 w-4 h-4 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center z-10"><div className="w-2 h-2 rounded-full bg-blue-500"></div></div>
                  <div>
                     <p className="text-[9px] text-gray-500 font-bold mb-0.5">Postdoctoral Researcher (2 - 4 yr)</p>
                     <p className="text-[11px] font-black text-gray-900">₹12 - 20 LPA</p>
                  </div>
               </div>
               <div className="relative">
                  <div className="absolute -left-[18px] top-1 w-4 h-4 rounded-full bg-purple-100 border-2 border-white flex items-center justify-center z-10"><div className="w-2 h-2 rounded-full bg-purple-500"></div></div>
                  <div>
                     <p className="text-[9px] text-gray-500 font-bold mb-0.5">Scientist (4 - 8 yr)</p>
                     <p className="text-[11px] font-black text-gray-900">₹20 - 35 LPA</p>
                  </div>
               </div>
               <div className="relative">
                  <div className="absolute -left-[18px] top-1 w-4 h-4 rounded-full bg-orange-100 border-2 border-white flex items-center justify-center z-10"><div className="w-2 h-2 rounded-full bg-orange-500"></div></div>
                  <div>
                     <p className="text-[9px] text-gray-500 font-bold mb-0.5">Senior Scientist / Professor (8+ yr)</p>
                     <p className="text-[11px] font-black text-gray-900">₹35 - 60+ LPA</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Top Research Labs & Recruiters */}
          <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-900 text-[13px] mb-4">Top Research Labs & Recruiters</h3>
            <div className="grid grid-cols-3 gap-y-5 gap-x-2 items-center justify-items-center">
               <span className="text-[10px] font-black text-orange-500">ISRO</span>
               <span className="text-[10px] font-black text-gray-700">DRDO</span>
               <span className="text-[10px] font-black text-blue-900">BARC</span>
               <span className="text-[10px] font-black text-indigo-700">CSIR</span>
               <div className="flex flex-col items-center"><span className="text-[10px] font-black text-blue-500 leading-none">Google</span><span className="text-[7px] text-gray-500">Research</span></div>
               <div className="flex flex-col items-center"><span className="text-[10px] font-black text-gray-700 leading-none">Microsoft</span><span className="text-[7px] text-gray-500">Research</span></div>
               <div className="flex flex-col items-center"><span className="text-[10px] font-black text-blue-700 leading-none">IBM</span><span className="text-[7px] text-gray-500">Research</span></div>
               <div className="flex flex-col items-center"><span className="text-[10px] font-black text-green-600 leading-none">NVIDIA</span><span className="text-[7px] text-gray-500">Research</span></div>
               <div className="flex flex-col items-center"><span className="text-[10px] font-black text-blue-600 leading-none">(intel)</span><span className="text-[7px] text-gray-500">Labs</span></div>
               <div className="flex flex-col items-center"><span className="text-[10px] font-black text-gray-900 leading-none">amazon</span><span className="text-[7px] text-gray-500">science</span></div>
               <div className="flex flex-col items-center"><span className="text-[10px] font-black text-red-600 leading-none">Adobe</span><span className="text-[7px] text-gray-500">Research</span></div>
               <div className="flex flex-col items-center"><span className="text-[10px] font-black text-red-500 leading-none">TCS</span><span className="text-[7px] text-gray-500">Research</span></div>
            </div>
          </div>
          
          {/* Success Stories */}
          <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm relative overflow-hidden">
             <h3 className="font-bold text-gray-900 text-[13px] mb-4">Success Stories</h3>
             <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 flex flex-col items-start">
                <div className="flex items-center gap-3 mb-3">
                   <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden shadow-sm border-2 border-white shrink-0">
                      <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Dr. Ananya Rao" className="w-full h-full object-cover" />
                   </div>
                   <div>
                      <h4 className="font-bold text-[11px] text-gray-900 leading-tight">Dr. Ananya Rao</h4>
                      <p className="text-[9px] text-gray-500 font-medium">PhD in Biotechnology</p>
                      <p className="text-[9px] text-gray-700 font-medium mt-0.5">15+ Publications | 3 Patents</p>
                   </div>
                </div>
                <p className="text-[10px] text-gray-700 font-semibold mb-2 leading-tight">Research Scientist at ISRO</p>
                <p className="text-[9px] text-gray-500 italic mt-1 leading-relaxed">"PhD gave me the platform to innovate, research and contribute to meaningful scientific solutions."</p>
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
