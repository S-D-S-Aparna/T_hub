"use client";

import MainLayout from "@/components/layout/MainLayout";
import Link from "next/link";
import { ChevronRight, Zap, Target, CheckCircle, GraduationCap, ArrowRight, Bot, Star, Building2, MapPin, IndianRupee, Cpu, BookOpen, Activity, HeartPulse, Briefcase, Award, Shield, Palette, Wrench, Calculator, Globe, Monitor, Settings, PenTool, Flame, Snowflake, Combine, Wrench as WrenchIcon, Car } from "lucide-react";

export default function ITICourses() {
  return (
    <MainLayout>
      {/* Education Journey Stepper */}
      <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-gray-500 mb-6 overflow-x-auto pb-2">
        <Link href="/" className="hover:text-indigo-600 flex items-center gap-1">
           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
           <span className="hidden md:inline">Home</span>
        </Link>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <Link href="/education/after-10th" className="hover:text-indigo-600 font-medium">After 10th</Link>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <Link href="/education/after-10th/polytechnic" className="hover:text-indigo-600 font-medium text-gray-400">Polytechnic Diploma</Link>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span className="text-indigo-600 font-bold bg-indigo-50 px-2 py-1 rounded-md">ITI Courses</span>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span className="font-medium text-gray-400">Jobs & Careers</span>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span className="font-medium text-gray-400">Skill Development</span>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span className="font-medium text-gray-400">Apprenticeship</span>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <div className="flex items-center gap-1 font-medium text-gray-400">
          <Star className="w-4 h-4" /> Final Step
        </div>
      </div>

      <div className="space-y-10 mb-10">
           {/* Hero Banner */}
           <div className="bg-indigo-50/50 rounded-3xl p-6 md:p-8 border border-indigo-100 relative overflow-hidden flex flex-col md:flex-row items-center gap-6 shadow-sm">
             <div className="absolute right-0 top-0 w-64 h-64 bg-indigo-200 rounded-full blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
             
             <div className="flex-1 relative z-10">
               <h1 className="text-3xl md:text-4xl font-black text-indigo-950 mb-4 leading-tight">
                 Build Your Future with <span className="text-indigo-600">ITI Courses</span>
               </h1>
               <p className="text-gray-600 mb-6 text-sm md:text-base font-medium max-w-5xl leading-relaxed">
                 Gain practical skills, industry-recognized certification and start a successful career in technical fields. Learn. Skill. Earn.
               </p>
               
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                 <div className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center">
                   <h3 className="font-black text-indigo-600 text-lg">130+</h3>
                   <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">ITI Trades</p>
                 </div>
                 <div className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center">
                   <h3 className="font-black text-indigo-600 text-lg">15000+</h3>
                   <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">ITI Colleges</p>
                 </div>
                 <div className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center">
                   <h3 className="font-black text-indigo-600 text-lg">100%</h3>
                   <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Govt. Recognized</p>
                 </div>
                 <div className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center">
                   <h3 className="font-black text-indigo-600 text-lg">High</h3>
                   <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Placement Rate</p>
                 </div>
               </div>
             </div>
             
             <div className="w-full md:w-64 relative z-10 hidden md:block">
               <div className="relative w-64 h-64 bg-indigo-100 rounded-full flex items-center justify-center">
                 {/* Student with tools graphic */}
                 <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mechanic&style=circle" alt="ITI Student" className="w-full h-full object-cover rounded-full" />
               </div>
             </div>
           </div>

           {/* Popular ITI Trades */}
           <div className="bg-gradient-to-br from-indigo-50 to-white rounded-3xl p-6 md:p-8 border border-indigo-100 shadow-md relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-200 rounded-full blur-3xl opacity-20 transform translate-x-10 -translate-y-10"></div>
             <h2 className="text-2xl font-black text-indigo-950 mb-6 relative z-10">Popular ITI Trades</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
               {[
                 { name: "Electrician", roles: ["Wireman", "Electric Fitting"], duration: "1 - 2 Years", salary: "₹1.8 - ₹3.5 LPA", desc: "Work with electrical systems & equipment", icon: Zap, color: "text-amber-500", bg: "bg-amber-100", border: "border-amber-200" },
                 { name: "Fitter", roles: ["General Fitter", "Fitter (Electrical)"], duration: "1 - 2 Years", salary: "₹1.8 - ₹3.5 LPA", desc: "Assemble & install machines and parts", icon: Settings, color: "text-blue-500", bg: "bg-blue-100", border: "border-blue-200" },
                 { name: "Welder", roles: ["Gas & Electric", "Arc Welder"], duration: "1 - 2 Years", salary: "₹1.8 - ₹3.5 LPA", desc: "Join & repair metal components", icon: Flame, color: "text-red-500", bg: "bg-red-100", border: "border-red-200" },
                 { name: "COPA", roles: ["Data Entry Operator", "Office Assistant"], duration: "1 Year", salary: "₹1.5 - ₹2.8 LPA", desc: "Learn computer basics & applications", icon: Monitor, color: "text-purple-500", bg: "bg-purple-100", border: "border-purple-200" },
                 { name: "Mechanic Diesel", roles: ["Diesel Mechanic", "Service Technician"], duration: "1 Year", salary: "₹2.0 - ₹3.6 LPA", desc: "Repair & maintenance of diesel engines", icon: WrenchIcon, color: "text-orange-500", bg: "bg-orange-100", border: "border-orange-200" },
                 { name: "Motor Mechanic", roles: ["Auto Mechanic", "Vehicle Inspector"], duration: "2 Years", salary: "₹2.0 - ₹4.2 LPA", desc: "Service & repair of automobiles", icon: Car, color: "text-indigo-500", bg: "bg-indigo-100", border: "border-indigo-200" },
                 { name: "RAC", roles: ["AC Mechanic", "Refrigeration Tech"], duration: "2 Years", salary: "₹1.8 - ₹3.6 LPA", desc: "Install & maintain cooling systems", icon: Target, color: "text-teal-500", bg: "bg-teal-100", border: "border-teal-200" },
                 { name: "Turner", roles: ["Lathe Operator", "Machinist"], duration: "1 - 2 Years", salary: "₹2.0 - ₹3.8 LPA", desc: "Operate lathe & precision tools", icon: PenTool, color: "text-pink-500", bg: "bg-pink-100", border: "border-pink-200" },
               ].map((branch, i) => (
                 <div key={i} className={`flex flex-col border ${branch.border} rounded-2xl p-5 hover:shadow-lg transition-all cursor-pointer group bg-white h-full relative overflow-hidden`}>
                   <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
                     <ArrowRight className={`w-5 h-5 ${branch.color}`} />
                   </div>
                   <div className="flex items-center gap-4 mb-3">
                     <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${branch.bg} ${branch.color} shadow-sm group-hover:scale-110 transition-transform`}>
                        <branch.icon className="w-6 h-6" />
                     </div>
                     <div>
                       <h3 className="font-extrabold text-sm text-gray-900 leading-tight">{branch.name}</h3>
                     </div>
                   </div>
                   
                   <p className="text-[11px] text-gray-500 mb-3">{branch.desc}</p>
                   
                   <div className="bg-gray-50 p-3 rounded-xl mb-3 flex-grow">
                     <ul className="text-[11px] text-gray-600 space-y-1.5 pl-4 list-disc marker:text-gray-400">
                       {branch.roles.map((role, idx) => (
                         <li key={idx}>{role}</li>
                       ))}
                     </ul>
                   </div>
                   
                   <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
                     <div>
                       <p className="text-[9px] font-bold text-gray-500">Duration</p>
                       <p className="text-xs font-semibold text-gray-700">{branch.duration}</p>
                     </div>
                     <div className="text-right">
                       <p className="text-[9px] font-bold text-gray-500">Avg Salary</p>
                       <p className={`text-sm font-black ${branch.color}`}>{branch.salary}</p>
                     </div>
                   </div>
                 </div>
               ))}
             </div>
           </div>

           {/* ITI Course Details & Top Sectors */}
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              {/* ITI Course Details */}
              <div className="lg:col-span-5 bg-white rounded-3xl p-5 border border-gray-100 shadow-sm">
                 <h2 className="text-sm font-bold text-gray-900 mb-4">ITI Course Details</h2>
                 <div className="space-y-4">
                   <div className="flex gap-3 items-start p-3 bg-gray-50 rounded-xl">
                     <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0"><CheckCircle className="w-4 h-4"/></div>
                     <div>
                       <h4 className="font-bold text-[11px] text-gray-900">Eligibility</h4>
                       <p className="text-[10px] text-gray-600 mt-0.5">10th Pass (Minimum 35%)</p>
                     </div>
                   </div>
                   <div className="flex gap-3 items-start p-3 bg-gray-50 rounded-xl">
                     <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0"><BookOpen className="w-4 h-4"/></div>
                     <div>
                       <h4 className="font-bold text-[11px] text-gray-900">Course Duration</h4>
                       <p className="text-[10px] text-gray-600 mt-0.5">6 Months - 2 Years</p>
                     </div>
                   </div>
                   <div className="flex gap-3 items-start p-3 bg-gray-50 rounded-xl">
                     <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0"><IndianRupee className="w-4 h-4"/></div>
                     <div>
                       <h4 className="font-bold text-[11px] text-gray-900">Fees</h4>
                       <p className="text-[10px] text-gray-600 mt-0.5">₹2,000 - ₹20,000 per year (Govt. ITI)</p>
                     </div>
                   </div>
                   <div className="flex gap-3 items-start p-3 bg-gray-50 rounded-xl">
                     <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0"><Award className="w-4 h-4"/></div>
                     <div>
                       <h4 className="font-bold text-[11px] text-gray-900">Certification</h4>
                       <p className="text-[10px] text-gray-600 mt-0.5">NCVT / SCVT Recognized</p>
                     </div>
                   </div>
                 </div>
              </div>

              {/* Top Sectors Hiring ITI Candidates */}
              <div className="lg:col-span-7 bg-white rounded-3xl p-5 border border-gray-100 shadow-sm">
                 <h2 className="text-sm font-bold text-gray-900 mb-4">Top Sectors Hiring ITI Candidates</h2>
                 <div className="grid grid-cols-4 gap-3">
                   {[
                     { name: "Automobile", icon: Car, color: "text-blue-600" },
                     { name: "Construction", icon: Building2, color: "text-amber-600" },
                     { name: "Electrical", icon: Zap, color: "text-yellow-500" },
                     { name: "Manufacturing", icon: Settings, color: "text-gray-600" },
                     { name: "Telecom", icon: Target, color: "text-purple-600" },
                     { name: "Railways", icon: WrenchIcon, color: "text-red-600" },
                     { name: "Oil & Gas", icon: Flame, color: "text-orange-600" },
                     { name: "Defense", icon: Shield, color: "text-green-600" },
                   ].map((sector, i) => (
                     <div key={i} className="flex flex-col items-center gap-2 group cursor-pointer p-2">
                       <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:bg-indigo-50 group-hover:border-indigo-100 transition-colors">
                          <sector.icon className={`w-6 h-6 ${sector.color}`} />
                       </div>
                       <span className="text-[10px] font-semibold text-gray-700 text-center leading-tight">{sector.name}</span>
                     </div>
                   ))}
                 </div>
              </div>
           </div>

           {/* Career Opportunities */}
           <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
              <h2 className="text-sm font-bold text-gray-900 mb-5">Career Opportunities</h2>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                 {[
                   { name: "Technician", icon: WrenchIcon },
                   { name: "Maintenance Engineer", icon: Settings },
                   { name: "Supervisor", icon: Target },
                   { name: "Quality Inspector", icon: CheckCircle },
                   { name: "Service Engineer", icon: Car },
                   { name: "Entrepreneur", icon: Building2 },
                 ].map((career, i) => (
                   <div key={i} className="flex flex-col items-center gap-2 bg-indigo-50/50 p-4 rounded-2xl border border-indigo-50 hover:bg-indigo-50 transition-colors cursor-pointer">
                     <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shadow-sm">
                       <career.icon className="w-5 h-5" />
                     </div>
                     <span className="text-[11px] font-bold text-indigo-950 text-center">{career.name}</span>
                   </div>
                 ))}
              </div>
           </div>

           {/* Lower sections */}
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
             
             {/* Top Government ITI Colleges */}
             <div className="lg:col-span-4 bg-white rounded-3xl p-5 border border-gray-100 shadow-sm">
               <h2 className="text-sm font-bold text-gray-900 mb-4">Top Government ITI Colleges</h2>
               <div className="space-y-4">
                 {[
                   { name: "Govt. ITI Mumbai", loc: "Maharashtra", rating: "4.5 (602)", img: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
                   { name: "Govt. ITI Kolkata", loc: "West Bengal", rating: "4.4 (720)", img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
                   { name: "Govt. ITI Lucknow", loc: "Uttar Pradesh", rating: "4.3 (586)", img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" }
                 ].map((college, i) => (
                   <div key={i} className="flex gap-3 pb-3 border-b border-gray-50 last:border-0 last:pb-0 hover:bg-gray-50 p-2 -mx-2 rounded-xl transition-colors cursor-pointer group">
                     <div className="w-12 h-12 rounded-xl bg-gray-200 overflow-hidden flex-shrink-0">
                       <img src={college.img} alt={college.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                     </div>
                     <div className="flex-1">
                       <h4 className="font-bold text-[11px] text-gray-800 leading-tight mb-1 group-hover:text-indigo-600 transition-colors">{college.name}</h4>
                       <p className="text-[10px] font-medium text-gray-500 mb-1 flex items-center gap-1"><MapPin className="w-3 h-3" /> {college.loc}</p>
                       <span className="text-[10px] font-bold text-amber-500 flex items-center gap-0.5"><Star className="w-2.5 h-2.5 fill-current" /> {college.rating}</span>
                     </div>
                   </div>
                 ))}
               </div>
             </div>

             {/* Apprenticeship & Placement Partners & Why Choose ITI */}
             <div className="lg:col-span-8 flex flex-col gap-5">
               {/* Apprenticeship & Placement Partners */}
               <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm flex-1">
                 <h2 className="text-sm font-bold text-gray-900 mb-4">Apprenticeship & Placement Partners</h2>
                 <div className="flex flex-wrap gap-6 items-center justify-center h-full">
                    <div className="h-8 opacity-60 hover:opacity-100 transition-opacity flex items-center font-bold text-gray-400"><span className="text-blue-800 text-2xl font-black">TATA</span></div>
                    <div className="h-8 opacity-60 hover:opacity-100 transition-opacity flex items-center font-bold text-gray-400"><span className="text-blue-600 text-2xl font-black">L&T</span></div>
                    <div className="h-8 opacity-60 hover:opacity-100 transition-opacity flex items-center font-bold text-gray-400"><span className="text-red-700 text-2xl font-black">BHEL</span></div>
                    <div className="h-8 opacity-60 hover:opacity-100 transition-opacity flex items-center font-bold text-gray-400"><span className="text-red-600 text-2xl font-black">Hero</span></div>
                    <div className="h-8 opacity-60 hover:opacity-100 transition-opacity flex items-center font-bold text-gray-400"><span className="text-indigo-800 text-xl font-black">MARUTI SUZUKI</span></div>
                    <div className="h-8 opacity-60 hover:opacity-100 transition-opacity flex items-center font-bold text-gray-400"><span className="text-blue-500 text-2xl font-black">BAJAJ</span></div>
                 </div>
               </div>

               {/* Why Choose ITI */}
               <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm relative overflow-hidden flex-1">
                 <h2 className="text-sm font-bold text-gray-900 mb-4">Why Choose ITI?</h2>
                 <ul className="space-y-3 text-xs text-gray-700 font-medium relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-4">
                   <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" /> Short duration courses</li>
                   <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" /> Industry focused practical training</li>
                   <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" /> High demand in manufacturing & service sectors</li>
                   <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" /> Government recognized certification</li>
                   <li className="flex items-start gap-2 md:col-span-2"><CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" /> Learn skills & start earning early</li>
                 </ul>
                 <div className="absolute right-[-20px] bottom-[-20px] opacity-10">
                    <GraduationCap className="w-32 h-32 text-indigo-500" />
                 </div>
               </div>
             </div>
           </div>

           {/* Entrance / Admission & Scholarships */}
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              <div className="lg:col-span-5 bg-white rounded-3xl p-5 border border-gray-100 shadow-sm">
                 <h2 className="text-sm font-bold text-gray-900 mb-4">Entrance / Admission</h2>
                 <div className="grid grid-cols-2 gap-4">
                   <div className="flex flex-col items-center justify-center p-3 border border-gray-100 bg-gray-50 rounded-xl text-center">
                     <Building2 className="w-6 h-6 text-indigo-600 mb-2" />
                     <span className="text-[10px] font-bold text-gray-700">ITI Admission (Govt.)</span>
                   </div>
                   <div className="flex flex-col items-center justify-center p-3 border border-gray-100 bg-gray-50 rounded-xl text-center">
                     <Star className="w-6 h-6 text-amber-500 mb-2" />
                     <span className="text-[10px] font-bold text-gray-700">Merit Based Selection</span>
                   </div>
                   <div className="flex flex-col items-center justify-center p-3 border border-gray-100 bg-gray-50 rounded-xl text-center">
                     <Monitor className="w-6 h-6 text-green-500 mb-2" />
                     <span className="text-[10px] font-bold text-gray-700">State ITI Counselling</span>
                   </div>
                   <div className="flex flex-col items-center justify-center p-3 border border-gray-100 bg-gray-50 rounded-xl text-center">
                     <Cpu className="w-6 h-6 text-blue-500 mb-2" />
                     <span className="text-[10px] font-bold text-gray-700">Online Registration</span>
                   </div>
                 </div>
              </div>

              <div className="lg:col-span-7 bg-white rounded-3xl p-5 border border-gray-100 shadow-sm">
                 <h2 className="text-sm font-bold text-gray-900 mb-4">Scholarships for ITI Students</h2>
                 <div className="grid grid-cols-5 gap-2 pt-2">
                    <div className="flex flex-col items-center gap-2">
                       <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-sm shadow-sm border border-blue-100">🎓</div>
                       <span className="text-[10px] font-semibold text-center text-gray-600 leading-tight">NSP<br/>Scholarship</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                       <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-sm shadow-sm border border-green-100">🏛️</div>
                       <span className="text-[10px] font-semibold text-center text-gray-600 leading-tight">State<br/>Scholarships</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                       <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center text-sm shadow-sm border border-yellow-100">🏅</div>
                       <span className="text-[10px] font-semibold text-center text-gray-600 leading-tight">Merit<br/>Scholarships</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                       <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-sm shadow-sm border border-red-100">📚</div>
                       <span className="text-[10px] font-semibold text-center text-gray-600 leading-tight">SC/ST<br/>Scholarships</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                       <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-sm shadow-sm border border-purple-100">🤝</div>
                       <span className="text-[10px] font-semibold text-center text-gray-600 leading-tight">Minority<br/>Scholarships</span>
                    </div>
                 </div>
              </div>
           </div>

           {/* Success Stories */}
           <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
              <h2 className="text-sm font-bold text-gray-900 mb-5">Success Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                 <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                   <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden shrink-0"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ramesh&style=circle" alt="Ramesh" className="w-full h-full object-cover" /></div>
                   <div>
                     <h4 className="font-bold text-xs text-gray-900">Ramesh Yadav</h4>
                     <p className="text-[10px] text-gray-500">Electrician Trade</p>
                     <p className="text-[11px] font-medium text-gray-700 mt-1">Placed at BHEL</p>
                     <p className="text-[11px] font-bold text-indigo-600 mt-0.5">Package: ₹3.5 LPA</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                   <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden shrink-0"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Pooja&style=circle" alt="Pooja" className="w-full h-full object-cover" /></div>
                   <div>
                     <h4 className="font-bold text-xs text-gray-900">Pooja Kumari</h4>
                     <p className="text-[10px] text-gray-500">Fitter Trade</p>
                     <p className="text-[11px] font-medium text-gray-700 mt-1">Working at L&T</p>
                     <p className="text-[11px] font-bold text-indigo-600 mt-0.5">Package: ₹3.2 LPA</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                   <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden shrink-0"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun&style=circle" alt="Arjun" className="w-full h-full object-cover" /></div>
                   <div>
                     <h4 className="font-bold text-xs text-gray-900">Arjun Singh</h4>
                     <p className="text-[10px] text-gray-500">Diesel Mechanic</p>
                     <p className="text-[11px] font-medium text-gray-700 mt-1">Working at Tata Motors</p>
                     <p className="text-[11px] font-bold text-indigo-600 mt-0.5">Package: ₹3.8 LPA</p>
                   </div>
                 </div>
              </div>
           </div>

           {/* Bottom Action Bar */}
           <div className="bg-indigo-700 rounded-3xl p-6 relative overflow-hidden shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 text-white mt-10">
             <div className="flex items-center gap-4 relative z-10 w-full text-center md:text-left justify-center md:justify-start">
               <div className="w-16 h-16 bg-white/20 rounded-2xl hidden md:flex items-center justify-center backdrop-blur-sm shrink-0">
                  <Award className="w-8 h-8 text-white" />
               </div>
               <div>
                 <h3 className="text-xl font-bold mb-1">You've Reached the Final Step in ITI Courses!</h3>
                 <p className="text-indigo-100 text-sm">Choose your trade and start your skill journey towards a successful career.</p>
               </div>
             </div>
             
             {/* Background pattern */}
             <div className="absolute right-0 top-0 w-64 h-64 bg-indigo-600 rounded-full blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
           </div>

          {/* Bottom Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* AI Assistant */}
          <div className="bg-white rounded-3xl p-6 border border-indigo-100 shadow-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/80 to-purple-50/80 z-0"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform group-hover:shadow-md">
                  <Bot className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 flex items-center gap-1 text-lg">Be You AI Assistant <span className="text-yellow-500">✨</span></h3>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-6 font-medium">Your smart guide for courses, careers and admissions.</p>
              
              <div className="space-y-3 mb-6">
                <p className="text-[11px] font-bold text-indigo-400 uppercase tracking-wider">Try asking me...</p>
                <div className="bg-white border border-indigo-50 rounded-xl p-3.5 text-[11px] font-medium text-gray-700 hover:border-indigo-300 hover:shadow-sm cursor-pointer transition-all flex items-center justify-between group/q" onClick={() => window.location.href='/chat'}>
                  <span>Which ITI trade has best future?</span>
                  <ArrowRight className="w-4 h-4 text-indigo-300 group-hover/q:text-indigo-600 group-hover/q:translate-x-1 transition-all" />
                </div>
                <div className="bg-white border border-indigo-50 rounded-xl p-3.5 text-[11px] font-medium text-gray-700 hover:border-indigo-300 hover:shadow-sm cursor-pointer transition-all flex items-center justify-between group/q" onClick={() => window.location.href='/chat'}>
                  <span>Highest salary ITI trades?</span>
                  <ArrowRight className="w-4 h-4 text-indigo-300 group-hover/q:text-indigo-600 group-hover/q:translate-x-1 transition-all" />
                </div>
                <div className="bg-white border border-indigo-50 rounded-xl p-3.5 text-[11px] font-medium text-gray-700 hover:border-indigo-300 hover:shadow-sm cursor-pointer transition-all flex items-center justify-between group/q" onClick={() => window.location.href='/chat'}>
                  <span>Government ITI colleges near me</span>
                  <ArrowRight className="w-4 h-4 text-indigo-300 group-hover/q:text-indigo-600 group-hover/q:translate-x-1 transition-all" />
                </div>
              </div>
              
              <button className="w-full bg-indigo-700 text-white font-bold py-3.5 rounded-xl shadow-md shadow-indigo-200 hover:bg-indigo-800 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2" onClick={() => window.location.href='/chat'}>
                Chat with AI <ArrowRight className="w-4 h-4"/>
              </button>
            </div>
          </div>

          {/* ITI Quick Info */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-900 text-sm mb-5">ITI Quick Info</h3>
            <div className="space-y-4">
              <div className="flex gap-3 items-start border-b border-gray-50 pb-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0"><Building2 className="w-4 h-4"/></div>
                <div>
                  <h4 className="font-bold text-[11px] text-gray-900">Total ITI Colleges in India</h4>
                  <p className="text-[10px] text-gray-500 mt-0.5">15,000+ (Govt. & Pvt.)</p>
                </div>
              </div>
              <div className="flex gap-3 items-start border-b border-gray-50 pb-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0"><WrenchIcon className="w-4 h-4"/></div>
                <div>
                  <h4 className="font-bold text-[11px] text-gray-900">Total Trades Available</h4>
                  <p className="text-[10px] text-gray-500 mt-0.5">130+</p>
                </div>
              </div>
              <div className="flex gap-3 items-start border-b border-gray-50 pb-3">
                <div className="w-8 h-8 rounded-lg bg-green-50 text-green-600 flex items-center justify-center shrink-0"><CheckCircle className="w-4 h-4"/></div>
                <div>
                  <h4 className="font-bold text-[11px] text-gray-900">Annual Intake Capacity</h4>
                  <p className="text-[10px] text-gray-500 mt-0.5">20+ Lakhs</p>
                </div>
              </div>
              <div className="flex gap-3 items-start border-b border-gray-50 pb-3">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0"><Target className="w-4 h-4"/></div>
                <div>
                  <h4 className="font-bold text-[11px] text-gray-900">Average Placement Rate</h4>
                  <p className="text-[10px] text-gray-500 mt-0.5">65% - 80%</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0"><Briefcase className="w-4 h-4"/></div>
                <div>
                  <h4 className="font-bold text-[11px] text-gray-900">Top Recruiters</h4>
                  <p className="text-[10px] text-gray-500 mt-0.5">Tata, L&T, BHEL, Maruti, Hero, Infosys</p>
                </div>
              </div>
            </div>
          </div>

          {/* Useful Resources */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-900 text-sm mb-4">Useful Resources</h3>
            <div className="grid grid-cols-4 gap-2">
               <div className="flex flex-col items-center gap-1 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center"><BookOpen className="w-4 h-4" /></div>
                  <span className="text-[9px] font-semibold text-center text-gray-600">ITI Syllabus</span>
               </div>
               <div className="flex flex-col items-center gap-1 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-green-50 text-green-600 flex items-center justify-center"><Settings className="w-4 h-4" /></div>
                  <span className="text-[9px] font-semibold text-center text-gray-600">Trade Details</span>
               </div>
               <div className="flex flex-col items-center gap-1 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center"><CheckCircle className="w-4 h-4" /></div>
                  <span className="text-[9px] font-semibold text-center text-gray-600">Question Papers</span>
               </div>
               <div className="flex flex-col items-center gap-1 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center"><Monitor className="w-4 h-4" /></div>
                  <span className="text-[9px] font-semibold text-center text-gray-600">Skill Videos</span>
               </div>
            </div>
          </div>
          
          {/* Talk to Experts */}
          <div className="bg-indigo-50 rounded-3xl p-6 border border-indigo-100 relative overflow-hidden flex flex-col justify-between items-start gap-4 shadow-sm">
             <div>
                <h3 className="text-indigo-900 font-bold text-sm mb-2">Talk to Our Experts</h3>
                <p className="text-indigo-700 text-xs mb-4">Need help selecting the right ITI trade for your future?</p>
                <button className="bg-indigo-700 text-white font-bold py-2.5 px-6 rounded-xl shadow-md hover:bg-indigo-800 transition-colors text-xs">Book Session</button>
             </div>
             <div className="absolute -right-4 -bottom-4 w-32 h-32">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Expert2&style=circle" alt="Expert" className="w-full h-full object-cover" />
             </div>
          </div>
        </div>
        
      </div>
    </MainLayout>
  );
}
