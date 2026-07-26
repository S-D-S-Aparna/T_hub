"use client";

import MainLayout from "@/components/layout/MainLayout";
import Link from "next/link";
import { ChevronRight, Target, CheckCircle, GraduationCap, ArrowRight, Bot, Star, Building2, MapPin, IndianRupee, Cpu, BookOpen, Activity, HeartPulse, Briefcase, Award, Shield, Palette, Wrench, Calculator, Globe, Monitor, Settings, PenTool, Flame, Snowflake, Combine, Wrench as WrenchIcon, Car, Microscope, Thermometer, UserCheck, Stethoscope, BriefcaseMedical, Phone, UserPlus, Leaf, Droplets, Sun, Sprout, Trees, Wheat, Milk, Tractor, Code, Database, Cloud, Smartphone, Layout, MonitorPlay, Code2, LineChart, Cpu as CpuIcon } from "lucide-react";

export default function VocationalCourses() {
  return (
    <MainLayout>
      {/* Education Journey Stepper */}
      <div className="flex flex-wrap items-center gap-2 text-[10px] md:text-xs text-gray-500 mb-6 overflow-x-auto pb-2">
        <Link href="/" className="hover:text-indigo-600 flex items-center gap-1">
           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
           <span className="hidden md:inline">Home</span>
        </Link>
        <ChevronRight className="w-3 h-3 text-gray-400" />
        <Link href="/education/after-10th" className="hover:text-indigo-600 font-medium">After 10th</Link>
        <ChevronRight className="w-3 h-3 text-gray-400" />
        <span className="text-indigo-600 font-bold bg-indigo-50 px-2 py-1 rounded-md">Vocational Courses</span>
        <ChevronRight className="w-3 h-3 text-gray-400" />
        <span className="font-medium text-gray-400">Skill Training</span>
        <ChevronRight className="w-3 h-3 text-gray-400" />
        <span className="font-medium text-gray-400">Certification</span>
        <ChevronRight className="w-3 h-3 text-gray-400" />
        <span className="font-medium text-gray-400">Internship</span>
        <ChevronRight className="w-3 h-3 text-gray-400" />
        <span className="font-medium text-gray-400">Jobs</span>
        <ChevronRight className="w-3 h-3 text-gray-400" />
        <span className="font-medium text-gray-400">Higher Studies</span>
        <ChevronRight className="w-3 h-3 text-gray-400" />
        <div className="flex items-center gap-1 font-medium text-gray-400">
          <Star className="w-3 h-3" /> Success
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 mb-10">
        
        {/* Main Content Area */}
        <div className="flex-1 space-y-8">
           {/* Hero Banner */}
           <div className="bg-indigo-50/50 rounded-3xl p-6 md:p-8 border border-indigo-100 relative overflow-hidden flex flex-col md:flex-row items-center gap-6 shadow-sm">
             <div className="absolute right-0 top-0 w-64 h-64 bg-indigo-200 rounded-full blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
             
             <div className="flex-1 relative z-10">
               <h1 className="text-3xl md:text-4xl font-black text-indigo-950 mb-4 leading-tight">
                 Build Your Future with <span className="text-indigo-700 block">Vocational & Skill Development</span>
               </h1>
               <p className="text-gray-600 mb-6 text-sm md:text-base font-medium max-w-5xl leading-relaxed">
                 Learn industry-ready practical skills, earn certifications, and start your career faster with hands-on training.
               </p>
               
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                 <div className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center">
                   <h3 className="font-black text-indigo-700 text-lg">250+</h3>
                   <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Skill Programs</p>
                 </div>
                 <div className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center">
                   <h3 className="font-black text-indigo-700 text-lg">5000+</h3>
                   <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Training Centers</p>
                 </div>
                 <div className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center">
                   <h3 className="font-black text-indigo-700 text-lg">100%</h3>
                   <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Practical Learning</p>
                 </div>
                 <div className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center">
                   <h3 className="font-black text-indigo-700 text-lg">High</h3>
                   <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Placement Support</p>
                 </div>
               </div>
             </div>
             
             <div className="w-full md:w-72 relative z-10 hidden md:block">
               <div className="relative w-64 h-64 bg-indigo-100 rounded-full flex items-center justify-center ml-auto">
                 <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Student1&style=circle" alt="Skill Student" className="w-full h-full object-cover rounded-full" />
               </div>
             </div>
           </div>

           {/* Popular Skill Categories */}
           <div className="bg-gradient-to-br from-indigo-50 to-white rounded-3xl p-6 md:p-8 border border-indigo-100 shadow-md relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-200 rounded-full blur-3xl opacity-20 transform translate-x-10 -translate-y-10"></div>
             <h2 className="text-2xl font-black text-indigo-950 mb-6 relative z-10">Popular Skill Categories</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
               {[
                 { name: "Computer Applications", tools: ["MS Office", "Tally", "Basic IT"], duration: "3 - 6 Months", salary: "₹2.5 - 5 LPA", icon: Monitor, color: "text-blue-600", bg: "bg-blue-100", border: "border-blue-200" },
                 { name: "Graphic Design", tools: ["Adobe Photoshop", "Illustrator", "Canva", "Figma"], duration: "6 - 12 Months", salary: "₹3 - 7 LPA", icon: Palette, color: "text-pink-600", bg: "bg-pink-100", border: "border-pink-200" },
                 { name: "Web Development", tools: ["HTML", "CSS", "JavaScript", "React"], duration: "6 - 12 Months", salary: "₹4 - 10 LPA", icon: Code, color: "text-purple-600", bg: "bg-purple-100", border: "border-purple-200" },
                 { name: "Data Analytics", tools: ["Excel", "SQL", "Power BI", "Python"], duration: "6 - 12 Months", salary: "₹4 - 9 LPA", icon: LineChart, color: "text-green-600", bg: "bg-green-100", border: "border-green-200" },
                 { name: "AI & Machine Learning", tools: ["Python", "ML", "AI Tools", "Prompt Engineering"], duration: "12 Months", salary: "₹6 - 15 LPA", icon: CpuIcon, color: "text-indigo-600", bg: "bg-indigo-100", border: "border-indigo-200" },
                 { name: "Cloud Computing", tools: ["AWS", "Azure", "Google Cloud"], duration: "6 - 12 Months", salary: "₹6 - 18 LPA", icon: Cloud, color: "text-orange-500", bg: "bg-orange-100", border: "border-orange-200" },
                 { name: "Cyber Security", tools: ["Ethical Hacking", "Network Security", "SOC Analyst"], duration: "6 - 12 Months", salary: "₹6 - 12 LPA", icon: Shield, color: "text-red-600", bg: "bg-red-100", border: "border-red-200" },
                 { name: "Mobile App Development", tools: ["Flutter", "Android", "React Native"], duration: "6 - 12 Months", salary: "₹5 - 12 LPA", icon: Smartphone, color: "text-teal-600", bg: "bg-teal-100", border: "border-teal-200" },
               ].map((course, i) => (
                 <div key={i} className={`flex flex-col border ${course.border} rounded-2xl p-4 hover:shadow-lg transition-all cursor-pointer group bg-white h-full relative overflow-hidden`}>
                   <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
                     <ArrowRight className={`w-4 h-4 ${course.color}`} />
                   </div>
                   <div className="flex items-center gap-3 mb-3">
                     <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${course.bg} ${course.color} shadow-sm group-hover:scale-110 transition-transform`}>
                        <course.icon className="w-5 h-5" />
                     </div>
                     <h3 className={`font-extrabold text-[11px] ${course.color} leading-tight`}>{course.name}</h3>
                   </div>
                   
                   <ul className="text-[9px] text-gray-500 mb-4 flex-grow grid grid-cols-2 gap-x-1 gap-y-1.5 list-disc pl-3">
                      {course.tools.map((tool, j) => (
                         <li key={j}>{tool}</li>
                      ))}
                   </ul>
                   
                   <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
                     <div>
                       <p className="text-[8px] font-bold text-gray-500">Duration</p>
                       <p className="text-[10px] font-semibold text-gray-700">{course.duration}</p>
                     </div>
                     <div className="text-right">
                       <p className="text-[8px] font-bold text-gray-500">Avg Salary</p>
                       <p className={`text-[11px] font-black ${course.color}`}>{course.salary}</p>
                     </div>
                   </div>
                 </div>
               ))}
             </div>
           </div>

           {/* Course Details & Top Recruiters */}
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              {/* Course Details */}
              <div className="lg:col-span-4 bg-white rounded-3xl p-5 border border-gray-100 shadow-sm">
                 <h2 className="text-sm font-bold text-gray-900 mb-4">Course Details</h2>
                 <div className="space-y-3">
                   <div className="flex gap-3 items-start p-2.5 bg-gray-50 rounded-xl">
                     <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0"><CheckCircle className="w-4 h-4"/></div>
                     <div>
                       <h4 className="font-bold text-[10px] text-gray-900">Eligibility</h4>
                       <p className="text-[9px] text-gray-600 mt-0.5">10th / 12th / Graduate</p>
                     </div>
                   </div>
                   <div className="flex gap-3 items-start p-2.5 bg-gray-50 rounded-xl">
                     <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0"><BookOpen className="w-4 h-4"/></div>
                     <div>
                       <h4 className="font-bold text-[10px] text-gray-900">Course Duration</h4>
                       <p className="text-[9px] text-gray-600 mt-0.5">1 Month - 1 Year</p>
                     </div>
                   </div>
                   <div className="flex gap-3 items-start p-2.5 bg-gray-50 rounded-xl">
                     <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0"><Award className="w-4 h-4"/></div>
                     <div>
                       <h4 className="font-bold text-[10px] text-gray-900">Certification</h4>
                       <p className="text-[9px] text-gray-600 mt-0.5">Government + Industry</p>
                     </div>
                   </div>
                   <div className="flex gap-3 items-start p-2.5 bg-gray-50 rounded-xl">
                     <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0"><MonitorPlay className="w-4 h-4"/></div>
                     <div>
                       <h4 className="font-bold text-[10px] text-gray-900">Training Mode</h4>
                       <p className="text-[9px] text-gray-600 mt-0.5">Online | Offline | Hybrid</p>
                     </div>
                   </div>
                   <div className="flex gap-3 items-start p-2.5 bg-gray-50 rounded-xl">
                     <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0"><Briefcase className="w-4 h-4"/></div>
                     <div>
                       <h4 className="font-bold text-[10px] text-gray-900">Placement Assistance</h4>
                       <p className="text-[9px] text-gray-600 mt-0.5">Available</p>
                     </div>
                   </div>
                 </div>
              </div>

              {/* Top Recruiters */}
              <div className="lg:col-span-8 bg-white rounded-3xl p-5 border border-gray-100 shadow-sm">
                 <h2 className="text-sm font-bold text-gray-900 mb-4">Top Recruiters</h2>
                 <div className="flex flex-wrap gap-5 items-center justify-center h-full pb-6">
                    {/* Placeholder Text Logos for Recruiters */}
                    <div className="font-black text-blue-600 text-xl tracking-tighter hover:scale-110 transition-transform cursor-pointer">Infosys</div>
                    <div className="font-black text-blue-800 text-xl hover:scale-110 transition-transform cursor-pointer">TCS</div>
                    <div className="font-black text-gray-900 text-xl tracking-tighter hover:scale-110 transition-transform cursor-pointer">accenture</div>
                    <div className="font-black text-red-600 text-xl hover:scale-110 transition-transform cursor-pointer">wipro</div>
                    <div className="font-black text-red-700 text-lg tracking-tighter hover:scale-110 transition-transform cursor-pointer">Tech<br/>Mahindra</div>
                    <div className="font-black text-blue-500 text-xl hover:scale-110 transition-transform cursor-pointer">Capgemini</div>
                    <div className="font-black text-blue-700 text-2xl tracking-widest hover:scale-110 transition-transform cursor-pointer">IBM</div>
                    <div className="font-black text-gray-800 text-xl hover:scale-110 transition-transform cursor-pointer">amazon</div>
                    <div className="font-black text-yellow-500 text-xl hover:scale-110 transition-transform cursor-pointer">Flipkart</div>
                    <div className="font-black text-blue-600 text-xl hover:scale-110 transition-transform cursor-pointer">ZOHO</div>
                    <div className="font-black text-gray-600 text-xl hover:scale-110 transition-transform cursor-pointer">Microsoft</div>
                    <div className="font-black text-gray-600 text-xl hover:scale-110 transition-transform cursor-pointer">Google</div>
                    <div className="font-black text-green-700 text-xl hover:scale-110 transition-transform cursor-pointer">Deloitte.</div>
                    <div className="font-black text-blue-800 text-xl hover:scale-110 transition-transform cursor-pointer">Cognizant</div>
                    <div className="font-black text-blue-600 text-2xl hover:scale-110 transition-transform cursor-pointer">HCL</div>
                 </div>
              </div>
           </div>

           {/* Career Opportunities */}
           <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
              <h2 className="text-sm font-bold text-gray-900 mb-5">Career Opportunities</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-3">
                 {[
                   { name: "Data Analyst", icon: LineChart },
                   { name: "Web Developer", icon: Code2 },
                   { name: "Graphic Designer", icon: Palette },
                   { name: "Cloud Engineer", icon: Cloud },
                   { name: "AI Engineer", icon: CpuIcon },
                   { name: "Digital Marketer", icon: Target },
                   { name: "UI UX Designer", icon: Layout },
                   { name: "Video Editor", icon: MonitorPlay },
                   { name: "Cyber Security", icon: Shield },
                   { name: "Software Tester", icon: CheckCircle },
                   { name: "Mobile Dev", icon: Smartphone },
                   { name: "Support Eng.", icon: Settings },
                   { name: "Business Analyst", icon: Briefcase },
                   { name: "Power BI Dev", icon: LineChart },
                   { name: "Python Dev", icon: Code },
                 ].map((career, i) => (
                   <div key={i} className="flex flex-col items-center gap-1.5 bg-indigo-50/50 p-3 rounded-2xl border border-indigo-50 hover:bg-indigo-50 transition-colors cursor-pointer">
                     <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shadow-sm">
                       <career.icon className="w-4 h-4" />
                     </div>
                     <span className="text-[9px] font-bold text-indigo-950 text-center leading-tight">{career.name}</span>
                   </div>
                 ))}
              </div>
           </div>

           {/* Certifications & Skills */}
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
             {/* Top Certifications */}
             <div className="lg:col-span-6 bg-white rounded-3xl p-5 border border-gray-100 shadow-sm">
               <h2 className="text-sm font-bold text-gray-900 mb-4">Top Certifications</h2>
               <div className="grid grid-cols-4 gap-4 items-center justify-items-center">
                  <div className="text-xs font-black text-gray-600">Microsoft</div>
                  <div className="text-xs font-black text-gray-600">Google</div>
                  <div className="text-xs font-black text-yellow-600">AWS</div>
                  <div className="text-xs font-black text-blue-500">CISCO</div>
                  <div className="text-xs font-black text-blue-700">IBM</div>
                  <div className="text-xs font-black text-red-600">ORACLE</div>
                  <div className="text-xs font-black text-blue-600">Meta</div>
                  <div className="text-xs font-black text-red-500">Adobe</div>
                  <div className="text-xs font-black text-blue-400">Salesforce</div>
                  <div className="text-[10px] font-black text-green-600">servicenow</div>
                  <div className="text-xs font-black text-green-700">MongoDB</div>
                  <div className="text-[10px] font-black text-blue-600">coursera</div>
               </div>
             </div>

             {/* Skills You'll Learn */}
             <div className="lg:col-span-6 bg-white rounded-3xl p-5 border border-gray-100 shadow-sm relative overflow-hidden flex flex-col justify-center">
               <h2 className="text-sm font-bold text-gray-900 mb-4 relative z-10">Skills You'll Learn</h2>
               <div className="grid grid-cols-3 gap-x-2 gap-y-3 text-[9px] text-gray-700 font-medium relative z-10">
                 <div className="flex items-start gap-1"><CheckCircle className="w-3 h-3 text-indigo-600 shrink-0" /> Problem Solving</div>
                 <div className="flex items-start gap-1"><CheckCircle className="w-3 h-3 text-indigo-600 shrink-0" /> AI Tools</div>
                 <div className="flex items-start gap-1"><CheckCircle className="w-3 h-3 text-indigo-600 shrink-0" /> Team Collaboration</div>
                 <div className="flex items-start gap-1"><CheckCircle className="w-3 h-3 text-indigo-600 shrink-0" /> Communication</div>
                 <div className="flex items-start gap-1"><CheckCircle className="w-3 h-3 text-indigo-600 shrink-0" /> Prompt Engg.</div>
                 <div className="flex items-start gap-1"><CheckCircle className="w-3 h-3 text-indigo-600 shrink-0" /> Critical Thinking</div>
                 <div className="flex items-start gap-1"><CheckCircle className="w-3 h-3 text-indigo-600 shrink-0" /> Python / SQL</div>
                 <div className="flex items-start gap-1"><CheckCircle className="w-3 h-3 text-indigo-600 shrink-0" /> Cloud Basics</div>
                 <div className="flex items-start gap-1"><CheckCircle className="w-3 h-3 text-indigo-600 shrink-0" /> Time Management</div>
                 <div className="flex items-start gap-1"><CheckCircle className="w-3 h-3 text-indigo-600 shrink-0" /> Excel</div>
                 <div className="flex items-start gap-1"><CheckCircle className="w-3 h-3 text-indigo-600 shrink-0" /> Git & GitHub</div>
                 <div className="flex items-start gap-1"><CheckCircle className="w-3 h-3 text-indigo-600 shrink-0" /> Project Handling</div>
               </div>
               <div className="absolute right-0 bottom-0 opacity-10">
                  <MonitorPlay className="w-24 h-24 text-indigo-500" />
               </div>
             </div>
           </div>

           {/* Institutes, Schemes & Success Stories */}
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              
              <div className="lg:col-span-4 flex flex-col gap-5">
                 {/* Top Institutes */}
                 <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm flex-1">
                    <h2 className="text-[11px] font-bold text-gray-900 mb-3">Top Institutes & Platforms</h2>
                    <div className="flex flex-wrap gap-4 items-center justify-start text-[10px] font-black text-gray-500">
                       <span className="text-blue-700">NIIT</span>
                       <span className="text-yellow-600">Aptech</span>
                       <span className="text-blue-500">coursera</span>
                       <span className="text-purple-600">Udemy</span>
                       <span className="text-blue-800">GREAT LEARNING</span>
                       <span className="text-blue-400">NPTEL</span>
                       <span className="text-orange-500">Skill India</span>
                       <span className="text-blue-600">Google Certificates</span>
                    </div>
                 </div>

                 {/* Government Schemes */}
                 <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm flex-1">
                    <h2 className="text-[11px] font-bold text-gray-900 mb-3">Government Schemes</h2>
                    <div className="flex flex-wrap gap-4 items-center justify-start text-[9px] font-bold text-gray-600">
                       <div className="flex flex-col items-center"><Award className="w-4 h-4 text-orange-500 mb-1"/> PMKVY</div>
                       <div className="flex flex-col items-center"><Award className="w-4 h-4 text-orange-500 mb-1"/> Skill India</div>
                       <div className="flex flex-col items-center"><Award className="w-4 h-4 text-blue-500 mb-1"/> NSDC</div>
                       <div className="flex flex-col items-center"><Monitor className="w-4 h-4 text-blue-600 mb-1"/> Digital India</div>
                       <div className="flex flex-col items-center"><Award className="w-4 h-4 text-green-600 mb-1"/> NAPS</div>
                       <div className="flex flex-col items-center"><Briefcase className="w-4 h-4 text-purple-600 mb-1"/> Apprenticeship</div>
                    </div>
                 </div>
              </div>

              {/* Success Stories */}
              <div className="lg:col-span-8 bg-white rounded-3xl p-5 border border-gray-100 shadow-sm relative overflow-hidden">
                 <h2 className="text-sm font-bold text-gray-900 mb-4">Success Stories</h2>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-start gap-2 bg-gray-50 p-3 rounded-xl border border-gray-100">
                      <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden shrink-0"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aparna&style=circle" alt="Aparna" className="w-full h-full object-cover" /></div>
                      <div>
                        <h4 className="font-bold text-[11px] text-gray-900">Aparna</h4>
                        <p className="text-[9px] text-gray-500">Data Analytics</p>
                        <p className="text-[9px] font-medium text-gray-700 mt-0.5">Infosys</p>
                        <p className="text-[10px] font-bold text-indigo-600 mt-0.5">₹6 LPA</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 bg-gray-50 p-3 rounded-xl border border-gray-100">
                      <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden shrink-0"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Rohit&style=circle" alt="Rohit" className="w-full h-full object-cover" /></div>
                      <div>
                        <h4 className="font-bold text-[11px] text-gray-900">Rohit</h4>
                        <p className="text-[9px] text-gray-500">Cloud Computing</p>
                        <p className="text-[9px] font-medium text-gray-700 mt-0.5">Accenture</p>
                        <p className="text-[10px] font-bold text-indigo-600 mt-0.5">₹8 LPA</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 bg-gray-50 p-3 rounded-xl border border-gray-100">
                      <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden shrink-0"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Neha1&style=circle" alt="Neha" className="w-full h-full object-cover" /></div>
                      <div>
                        <h4 className="font-bold text-[11px] text-gray-900">Neha</h4>
                        <p className="text-[9px] text-gray-500">Graphic Design</p>
                        <p className="text-[9px] font-medium text-gray-700 mt-0.5">Adobe</p>
                        <p className="text-[10px] font-bold text-indigo-600 mt-0.5">₹7 LPA</p>
                      </div>
                    </div>
                 </div>
              </div>
           </div>

           {/* Bottom Action Bar */}
           <div className="bg-indigo-700 rounded-3xl p-6 relative overflow-hidden shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 text-white mt-10">
             <div className="flex items-center gap-4 relative z-10 w-full text-center md:text-left justify-center md:justify-start">
               <div className="w-12 h-12 bg-white/20 rounded-2xl hidden md:flex items-center justify-center backdrop-blur-sm shrink-0">
                  <GraduationCap className="w-6 h-6 text-white" />
               </div>
               <div>
                 <h3 className="text-lg font-bold mb-1">Ready to Build Your Career with Industry Skills?</h3>
                 <p className="text-indigo-200 text-xs">Choose your skill path, get trained, get certified and get placed.</p>
               </div>
             </div>
             
             {/* Background pattern */}
             <div className="absolute right-0 top-0 w-64 h-64 bg-indigo-600 rounded-full blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
           </div>
        </div>
        
        {/* Right Sidebar */}
        <div className="w-full lg:w-[280px] space-y-5">
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
              <p className="text-[11px] text-gray-600 mb-5 font-medium leading-tight">Your smart guide for skills, careers and success.</p>
              
              <div className="space-y-2 mb-5">
                <p className="text-[9px] font-bold text-indigo-600 uppercase tracking-wider">Try asking me...</p>
                <div className="bg-white border border-indigo-50 rounded-lg p-2.5 text-[10px] font-medium text-gray-700 hover:border-indigo-300 hover:shadow-sm cursor-pointer transition-all flex items-center justify-between group/q" onClick={() => window.location.href='/chat'}>
                  <span>Which skill has highest salary?</span>
                  <ArrowRight className="w-3 h-3 text-indigo-300 group-hover/q:text-indigo-600 group-hover/q:translate-x-1 transition-all" />
                </div>
                <div className="bg-white border border-indigo-50 rounded-lg p-2.5 text-[10px] font-medium text-gray-700 hover:border-indigo-300 hover:shadow-sm cursor-pointer transition-all flex items-center justify-between group/q" onClick={() => window.location.href='/chat'}>
                  <span>Best vocational course after 10th?</span>
                  <ArrowRight className="w-3 h-3 text-indigo-300 group-hover/q:text-indigo-600 group-hover/q:translate-x-1 transition-all" />
                </div>
                <div className="bg-white border border-indigo-50 rounded-lg p-2.5 text-[10px] font-medium text-gray-700 hover:border-indigo-300 hover:shadow-sm cursor-pointer transition-all flex items-center justify-between group/q" onClick={() => window.location.href='/chat'}>
                  <span>Can I get placement after certification?</span>
                  <ArrowRight className="w-3 h-3 text-indigo-300 group-hover/q:text-indigo-600 group-hover/q:translate-x-1 transition-all" />
                </div>
              </div>
              
              <button className="w-full bg-indigo-700 text-white font-bold py-3 rounded-xl shadow-md shadow-indigo-200 hover:bg-indigo-800 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 text-xs" onClick={() => window.location.href='/chat'}>
                Chat with AI <ArrowRight className="w-3 h-3"/>
              </button>
            </div>
          </div>

          {/* Skill Quick Info */}
          <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-900 text-[13px] mb-4">Skill Quick Info</h3>
            <div className="space-y-4">
              <div className="flex gap-2.5 items-start border-b border-gray-50 pb-3">
                <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0"><Building2 className="w-3.5 h-3.5"/></div>
                <div>
                  <h4 className="font-bold text-[10px] text-gray-900">Training Centers</h4>
                  <p className="text-[9px] text-gray-500 mt-0.5">20,000+</p>
                </div>
              </div>
              <div className="flex gap-2.5 items-start border-b border-gray-50 pb-3">
                <div className="w-7 h-7 rounded-lg bg-green-50 text-green-600 flex items-center justify-center shrink-0"><CheckCircle className="w-3.5 h-3.5"/></div>
                <div>
                  <h4 className="font-bold text-[10px] text-gray-900">Placement Rate</h4>
                  <p className="text-[9px] text-gray-500 mt-0.5">85%</p>
                </div>
              </div>
              <div className="flex gap-2.5 items-start border-b border-gray-50 pb-3">
                <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0"><IndianRupee className="w-3.5 h-3.5"/></div>
                <div>
                  <h4 className="font-bold text-[10px] text-gray-900">Average Salary</h4>
                  <p className="text-[9px] text-gray-500 mt-0.5">₹3 - 10 LPA</p>
                </div>
              </div>
              <div className="flex gap-2.5 items-start">
                <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0"><Briefcase className="w-3.5 h-3.5"/></div>
                <div>
                  <h4 className="font-bold text-[10px] text-gray-900">Top Sectors</h4>
                  <p className="text-[9px] text-gray-500 mt-0.5">IT, Healthcare, Design, Manufacturing, Retail, AI, Cloud</p>
                </div>
              </div>
            </div>
          </div>

          {/* Trending Skill Courses */}
          <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-900 text-[13px] mb-3">Trending Skill Courses</h3>
            <div className="space-y-2">
               {[
                 { name: "Data Analytics", icon: Activity },
                 { name: "AI & Machine Learning", icon: CpuIcon },
                 { name: "Full Stack Development", icon: Code },
                 { name: "Cloud Computing", icon: Cloud },
                 { name: "Cyber Security", icon: Shield },
                 { name: "Digital Marketing", icon: Target },
                 { name: "Power BI", icon: LineChart },
                 { name: "Python", icon: Code2 },
               ].map((skill, i) => (
                 <div key={i} className="flex gap-2 pb-2 border-b border-gray-50 last:border-0 last:pb-0 hover:bg-gray-50 p-1.5 -mx-1.5 rounded-lg transition-colors cursor-pointer group items-center">
                   <skill.icon className="w-3.5 h-3.5 text-indigo-400 group-hover:text-indigo-600 transition-colors" />
                   <span className="font-bold text-[10px] text-gray-700 flex-1 group-hover:text-indigo-700 transition-colors">{skill.name}</span>
                   <Activity className="w-3 h-3 text-green-500" />
                 </div>
               ))}
            </div>
          </div>
          
          {/* Talk to Experts */}
          <div className="bg-indigo-50 rounded-3xl p-5 border border-indigo-100 relative overflow-hidden flex flex-col justify-between items-start gap-4 shadow-sm">
             <div>
                <h3 className="text-indigo-900 font-bold text-[13px] mb-1.5">Talk to Career Expert</h3>
                <p className="text-indigo-700 text-[10px] mb-3 leading-tight">Get personalized guidance from industry experts and choose the right skill path for your career.</p>
                <button className="bg-indigo-700 text-white font-bold py-2 px-5 rounded-lg shadow-md hover:bg-indigo-800 transition-colors text-[10px]">Book Free Counseling</button>
             </div>
             <div className="absolute -right-3 -bottom-3 w-28 h-28">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jane&style=circle" alt="Expert" className="w-full h-full object-cover" />
             </div>
          </div>
        </div>
        
      </div>
    </MainLayout>
  );
}
