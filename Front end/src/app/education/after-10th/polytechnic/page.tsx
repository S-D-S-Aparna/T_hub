"use client";

import MainLayout from "@/components/layout/MainLayout";
import Link from "next/link";
import { 
  ChevronRight, ArrowRight, Bot, Target, 
  MapPin, Star, Building2, BookOpen, 
  Settings, Wrench, Zap, Cpu, Car, 
  FlaskConical, Pickaxe, Book, Plus,
  CheckCircle, Briefcase, GraduationCap,
  ClipboardList, Award
} from "lucide-react";

export default function PolytechnicPage() {
  return (
    <MainLayout>
      <div className="mb-2">
         <h3 className="text-xs font-bold text-gray-800">Your Education Journey - Polytechnic Diploma</h3>
      </div>
      {/* Education Journey Stepper */}
      <div className="flex flex-nowrap justify-between items-center bg-white p-3 rounded-3xl border border-gray-100 shadow-sm mb-6 text-[10px] md:text-xs font-medium overflow-x-auto relative">
        <div className="absolute left-6 right-6 top-1/2 h-0.5 bg-gray-100 -z-0 transform -translate-y-1/2"></div>
        
        <div className="flex flex-col items-center gap-1.5 flex-shrink-0 z-10 bg-white px-2">
          <div className="w-7 h-7 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 bg-white"><div className="w-2 h-2 bg-gray-300 rounded-full"></div></div>
          <span className="text-gray-500">Home</span>
        </div>
        
        <div className="flex flex-col items-center gap-1.5 flex-shrink-0 z-10 bg-white px-2">
          <div className="w-7 h-7 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 bg-white"><div className="w-2 h-2 bg-gray-300 rounded-full"></div></div>
          <span className="text-gray-500">After 10th</span>
        </div>
        
        <div className="flex flex-col items-center gap-1.5 flex-shrink-0 z-10 bg-white px-2">
          <div className="w-7 h-7 rounded-full border-2 border-indigo-600 flex items-center justify-center text-indigo-600 bg-indigo-50"><div className="w-2 h-2 bg-indigo-600 rounded-full"></div></div>
          <span className="text-indigo-700 font-bold text-center leading-tight">Polytechnic<br/>Diploma</span>
        </div>
        
        <div className="flex flex-col items-center gap-1.5 flex-shrink-0 z-10 bg-white px-2">
          <div className="w-7 h-7 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 bg-white"><div className="w-2 h-2 bg-gray-300 rounded-full"></div></div>
          <span className="text-gray-500">Branches</span>
        </div>
        
        <div className="flex flex-col items-center gap-1.5 flex-shrink-0 z-10 bg-white px-2">
          <div className="w-7 h-7 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 bg-white"><div className="w-2 h-2 bg-gray-300 rounded-full"></div></div>
          <span className="text-gray-500">Top Colleges</span>
        </div>

        <div className="flex flex-col items-center gap-1.5 flex-shrink-0 z-10 bg-white px-2">
          <div className="w-7 h-7 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 bg-white"><div className="w-2 h-2 bg-gray-300 rounded-full"></div></div>
          <span className="text-gray-500">Jobs & Careers</span>
        </div>
        
        <div className="flex flex-col items-center gap-1.5 flex-shrink-0 z-10 bg-white px-2">
          <div className="w-7 h-7 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 bg-white"><div className="w-2 h-2 bg-gray-300 rounded-full"></div></div>
          <span className="text-gray-500">Higher Studies</span>
        </div>
        
        <div className="flex flex-col items-center gap-1.5 flex-shrink-0 z-10 bg-white px-2">
          <div className="w-7 h-7 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-400"><Star className="w-3.5 h-3.5 fill-current"/></div>
          <span className="text-gray-500">Final Step</span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 mb-10">
        
        {/* Main Content Area */}
        <div className="flex-1 space-y-8">
           {/* Hero Banner */}
           <div className="bg-indigo-50/50 rounded-3xl p-6 md:p-8 border border-indigo-100 relative overflow-hidden flex flex-col md:flex-row items-center gap-6 shadow-sm">
             <div className="flex-1 z-10 relative">
               <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-950 mb-3 leading-tight">
                 Choose Your Path in <br/><span className="text-indigo-700 text-4xl md:text-5xl">Polytechnic Diploma</span>
               </h1>
               <p className="text-indigo-900/80 mb-6 max-w-md text-sm leading-relaxed font-medium">
                 Select your desired branch and build a strong foundation for a successful career. Explore jobs, higher studies and growth opportunities.
               </p>
               <div className="flex gap-4">
                  <div className="bg-white border border-indigo-100 rounded-xl px-4 py-2 shadow-sm text-center">
                     <p className="text-indigo-700 font-bold text-lg">40+</p>
                     <p className="text-[10px] text-gray-500 font-medium">Diploma Branches</p>
                  </div>
                  <div className="bg-white border border-indigo-100 rounded-xl px-4 py-2 shadow-sm text-center">
                     <p className="text-indigo-700 font-bold text-lg">2000+</p>
                     <p className="text-[10px] text-gray-500 font-medium">Colleges in India</p>
                  </div>
                  <div className="bg-white border border-indigo-100 rounded-xl px-4 py-2 shadow-sm text-center">
                     <p className="text-indigo-700 font-bold text-lg">100%</p>
                     <p className="text-[10px] text-gray-500 font-medium">AICTE Approved</p>
                  </div>
                  <div className="bg-white border border-indigo-100 rounded-xl px-4 py-2 shadow-sm text-center">
                     <p className="text-indigo-700 font-bold text-lg">High</p>
                     <p className="text-[10px] text-gray-500 font-medium">Job Opportunities</p>
                  </div>
               </div>
             </div>
             
             {/* Illustration */}
             <div className="w-full md:w-1/3 relative z-10 hidden md:block">
                <div className="w-48 h-48 mx-auto bg-gradient-to-tr from-indigo-300 via-purple-300 to-pink-300 rounded-full blur-2xl opacity-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                {/* Fallback to simple icon since illustration might be complex to find */}
                <div className="relative z-10 flex justify-center text-indigo-800">
                    <img src="https://api.dicebear.com/7.x/micah/svg?seed=polytechnic&backgroundColor=transparent" alt="Student" className="w-48 h-auto drop-shadow-2xl" />
                </div>
             </div>
           </div>

           {/* Popular Diploma Branches */}
           <div className="bg-gradient-to-br from-indigo-50 to-white rounded-3xl p-6 md:p-8 border border-indigo-100 shadow-md relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-200 rounded-full blur-3xl opacity-20 transform translate-x-10 -translate-y-10"></div>
             <h2 className="text-2xl font-black text-indigo-950 mb-6 relative z-10">Popular Diploma Branches</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
               {[
                 { name: "Civil Engineering", roles: ["Junior Engineer", "Site Supervisor", "Estimation Engineer", "CAD Technician"], salary: "₹2.5 - ₹4.5 LPA", icon: Building2, color: "text-blue-600", bg: "bg-blue-100", border: "border-blue-200" },
                 { name: "Mechanical Engineering", roles: ["Maintenance Engineer", "Production Supervisor", "Design Engineer", "QA/QC Engineer"], salary: "₹2.8 - ₹5 LPA", icon: Settings, color: "text-indigo-600", bg: "bg-indigo-100", border: "border-indigo-200" },
                 { name: "Electrical Engineering", roles: ["Electrical Supervisor", "Control Panel Engineer", "Maintenance Engineer", "Testing Engineer"], salary: "₹2.5 - ₹4.8 LPA", icon: Zap, color: "text-amber-600", bg: "bg-amber-100", border: "border-amber-200" },
                 { name: "Electronics & Comm.", roles: ["Electronics Technician", "Network Technician", "Service Engineer", "Telecom Engineer"], salary: "₹2.6 - ₹4.6 LPA", icon: Cpu, color: "text-purple-600", bg: "bg-purple-100", border: "border-purple-200" },
                 { name: "Computer Engineering", roles: ["Software Developer", "System Support", "Web Developer", "Database Assistant"], salary: "₹3 - ₹5.5 LPA", icon: BookOpen, color: "text-green-600", bg: "bg-green-100", border: "border-green-200" },
                 { name: "Automobile Engineering", roles: ["Service Advisor", "Workshop Supervisor", "Maintenance Engineer", "Diagnostic Tech."], salary: "₹2.6 - ₹4.7 LPA", icon: Car, color: "text-red-600", bg: "bg-red-100", border: "border-red-200" },
                 { name: "Chemical Engineering", roles: ["Production Chemist", "Quality Controller", "Lab Technician", "Process Technician"], salary: "₹2.6 - ₹4.6 LPA", icon: FlaskConical, color: "text-teal-600", bg: "bg-teal-100", border: "border-teal-200" },
                 { name: "Mining Engineering", roles: ["Mine Supervisor", "Safety Officer", "Surveyor", "Equipment Operator"], salary: "₹3 - ₹5.5 LPA", icon: Pickaxe, color: "text-orange-600", bg: "bg-orange-100", border: "border-orange-200" },
               ].map((branch, i) => (
                 <div key={i} className={`flex flex-col border ${branch.border} rounded-2xl p-5 hover:shadow-lg transition-all cursor-pointer group bg-white h-full relative overflow-hidden`}>
                   <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
                     <ArrowRight className={`w-5 h-5 ${branch.color}`} />
                   </div>
                   <div className="flex items-center gap-4 mb-4">
                     <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${branch.bg} ${branch.color} shadow-sm group-hover:scale-110 transition-transform`}>
                        <branch.icon className="w-7 h-7" />
                     </div>
                     <div>
                       <h3 className="font-extrabold text-sm text-gray-900 leading-tight">{branch.name}</h3>
                       <p className="text-xs text-gray-500 font-semibold mt-1">3 Years Duration</p>
                     </div>
                   </div>
                   
                   <div className="bg-gray-50 p-3 rounded-xl mb-4 flex-grow">
                     <p className="text-xs font-bold text-gray-700 mb-2">Top Roles:</p>
                     <ul className="text-[11px] text-gray-600 space-y-1.5 pl-4 list-disc marker:text-gray-400">
                       {branch.roles.map((role, idx) => (
                         <li key={idx}>{role}</li>
                       ))}
                     </ul>
                   </div>
                   
                   <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
                     <p className="text-xs font-bold text-gray-500">Average Salary</p>
                     <p className={`text-sm font-black ${branch.color}`}>{branch.salary}</p>
                   </div>
                 </div>
               ))}
             </div>
           </div>

           {/* Entrance Exams & Career Opportunities */}
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {/* Entrance Exams */}
              <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm">
                 <h2 className="text-sm font-bold text-gray-900 mb-4">Entrance Exams for Polytechnic</h2>
                 <div className="grid grid-cols-4 gap-3">
                   {[
                     { name: "POLYCET", state: "(Various States)", icon: "📋" },
                     { name: "JEECUP", state: "(Uttar Pradesh)", icon: "📝" },
                     { name: "DTE MAH", state: "(Maharashtra)", icon: "✅" },
                     { name: "TS POLYCET", state: "(Telangana)", icon: "📄" },
                     { name: "AP POLYCET", state: "(Andhra Pradesh)", icon: "📃" },
                     { name: "Karnataka PGCET", state: "(Karnataka)", icon: "🔖" },
                     { name: "MP PPT", state: "(Madhya Pradesh)", icon: "📑" },
                     { name: "Other State Exams", state: "", icon: "🌍" },
                   ].map((exam, i) => (
                     <div key={i} className="flex flex-col items-center gap-1.5 group cursor-pointer border border-transparent hover:border-indigo-100 hover:bg-indigo-50/30 p-2 rounded-xl transition-colors">
                       <div className="text-2xl mb-1 group-hover:scale-110 transition-transform">{exam.icon}</div>
                       <span className="text-[8px] font-bold text-gray-800 text-center leading-tight">{exam.name}</span>
                       {exam.state && <span className="text-[7px] text-gray-500 text-center">{exam.state}</span>}
                     </div>
                   ))}
                 </div>
              </div>

              {/* Career Opportunities */}
              <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm">
                 <h2 className="text-sm font-bold text-gray-900 mb-4">Career Opportunities</h2>
                 <div className="grid grid-cols-4 gap-3">
                   {[
                     { name: "Junior Engineer", icon: Building2, color: "text-blue-600" },
                     { name: "Technician", icon: Wrench, color: "text-amber-600" },
                     { name: "Supervisor", icon: Briefcase, color: "text-indigo-600" },
                     { name: "Site Engineer", icon: MapPin, color: "text-green-600" },
                     { name: "Quality Analyst", icon: FlaskConical, color: "text-teal-600" },
                     { name: "Draftsman", icon: BookOpen, color: "text-purple-600" },
                     { name: "Entrepreneur", icon: Target, color: "text-red-600" },
                   ].map((career, i) => (
                     <div key={i} className="flex flex-col items-center gap-2 group cursor-pointer p-2">
                       <div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:bg-indigo-50 group-hover:border-indigo-100 transition-colors">
                          <career.icon className={`w-5 h-5 ${career.color}`} />
                       </div>
                       <span className="text-[9px] font-semibold text-gray-700 text-center leading-tight">{career.name}</span>
                     </div>
                   ))}
                 </div>
              </div>
           </div>

           {/* After Diploma & Recruiters */}
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              {/* After Diploma */}
              <div className="lg:col-span-7 bg-white rounded-3xl p-5 border border-gray-100 shadow-sm">
                 <h2 className="text-sm font-bold text-gray-900 mb-4">After Diploma - What Next?</h2>
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                   <div className="flex flex-col gap-2 p-3 bg-indigo-50/50 rounded-xl border border-indigo-100">
                     <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center"><GraduationCap className="w-4 h-4"/></div>
                     <h3 className="font-bold text-[9px] text-gray-900 leading-tight">Lateral Entry to B.Tech / B.E.</h3>
                     <p className="text-[8px] text-gray-600 leading-tight">Direct admission to 2nd year of engineering degree</p>
                   </div>
                   <div className="flex flex-col gap-2 p-3 bg-blue-50/50 rounded-xl border border-blue-100">
                     <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center"><Briefcase className="w-4 h-4"/></div>
                     <h3 className="font-bold text-[9px] text-gray-900 leading-tight">Government Jobs</h3>
                     <p className="text-[8px] text-gray-600 leading-tight">Apply for Junior Engineer, Loco Pilot, Technician & other govt jobs</p>
                   </div>
                   <div className="flex flex-col gap-2 p-3 bg-purple-50/50 rounded-xl border border-purple-100">
                     <div className="w-8 h-8 rounded-lg bg-purple-600 text-white flex items-center justify-center"><Book className="w-4 h-4"/></div>
                     <h3 className="font-bold text-[9px] text-gray-900 leading-tight">Higher Studies</h3>
                     <p className="text-[8px] text-gray-600 leading-tight">Pursue B.Sc, BBA, BCA or other degree courses</p>
                   </div>
                   <div className="flex flex-col gap-2 p-3 bg-amber-50/50 rounded-xl border border-amber-100">
                     <div className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center"><Award className="w-4 h-4"/></div>
                     <h3 className="font-bold text-[9px] text-gray-900 leading-tight">Skill Development</h3>
                     <p className="text-[8px] text-gray-600 leading-tight">Certification courses & soft skills for better career growth</p>
                   </div>
                 </div>
              </div>

              {/* Top Recruiters */}
              <div className="lg:col-span-5 bg-white rounded-3xl p-5 border border-gray-100 shadow-sm">
                 <h2 className="text-sm font-bold text-gray-900 mb-4">Top Recruiters for Diploma Holders</h2>
                 <div className="flex flex-wrap gap-4 items-center justify-center pt-2">
                    {/* Placeholder logos */}
                    <div className="h-6 opacity-60 hover:opacity-100 transition-opacity flex items-center font-bold text-gray-400"><span className="text-blue-600 text-xl font-black">L&T</span></div>
                    <div className="h-6 opacity-60 hover:opacity-100 transition-opacity flex items-center font-bold text-gray-400"><span className="text-indigo-800 text-xl font-black">TATA</span></div>
                    <div className="h-6 opacity-60 hover:opacity-100 transition-opacity flex items-center font-bold text-gray-400"><span className="text-teal-600 text-lg font-black">adani</span></div>
                    <div className="h-6 opacity-60 hover:opacity-100 transition-opacity flex items-center font-bold text-gray-400"><span className="text-red-600 text-xl font-black">JSW</span></div>
                    <div className="h-6 opacity-60 hover:opacity-100 transition-opacity flex items-center font-bold text-gray-400"><span className="text-blue-800 text-xl font-black">BHEL</span></div>
                    <div className="h-6 opacity-60 hover:opacity-100 transition-opacity flex items-center font-bold text-gray-400"><span className="text-blue-500 text-xl font-black">wipro</span></div>
                    <div className="h-6 opacity-60 hover:opacity-100 transition-opacity flex items-center font-bold text-gray-400"><span className="text-blue-500 text-xl font-black">Infosys</span></div>
                    <div className="h-6 opacity-60 hover:opacity-100 transition-opacity flex items-center font-bold text-gray-400"><span className="text-red-500 text-lg font-black">HAVELLS</span></div>
                 </div>
              </div>
           </div>

           {/* Bottom row sections */}
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
             
             {/* Top Colleges */}
             <div className="lg:col-span-4 bg-white rounded-3xl p-5 border border-gray-100 shadow-sm">
               <h2 className="text-sm font-bold text-gray-900 mb-4">Top Polytechnic Colleges in India</h2>
               <div className="space-y-4">
                 {[
                   { name: "Government Polytechnic", loc: "Mumbai, Maharashtra", rating: "4.3 (1200+)", img: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
                   { name: "PSG Polytechnic College", loc: "Coimbatore, Tamil Nadu", rating: "4.5 (800+)", img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
                   { name: "Delhi Government Polytechnic", loc: "New Delhi, Delhi", rating: "4.2 (950+)", img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
                   { name: "State Institute of Technology", loc: "Kolkata, West Bengal", rating: "4.3 (760+)", img: "https://images.unsplash.com/photo-1592289139556-91e84992dc7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" }
                 ].map((college, i) => (
                   <div key={i} className="flex gap-3 pb-3 border-b border-gray-50 last:border-0 last:pb-0 hover:bg-gray-50 p-2 -mx-2 rounded-xl transition-colors cursor-pointer group">
                     <div className="w-12 h-12 rounded-xl bg-gray-200 overflow-hidden flex-shrink-0">
                       <img src={college.img} alt={college.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                     </div>
                     <div className="flex-1">
                       <h4 className="font-bold text-[10px] text-gray-800 leading-tight mb-1 group-hover:text-indigo-600 transition-colors">{college.name}</h4>
                       <p className="text-[9px] font-medium text-gray-500 mb-1 flex items-center gap-1"><MapPin className="w-3 h-3" /> {college.loc}</p>
                       <span className="text-[9px] font-bold text-amber-500 flex items-center gap-0.5"><Star className="w-2.5 h-2.5 fill-current" /> {college.rating}</span>
                     </div>
                   </div>
                 ))}
               </div>
             </div>

             {/* Why Choose */}
             <div className="lg:col-span-4 bg-white rounded-3xl p-5 border border-gray-100 shadow-sm relative overflow-hidden">
               <h2 className="text-sm font-bold text-gray-900 mb-4">Why Choose Polytechnic Diploma?</h2>
               <ul className="space-y-3 text-[10px] text-gray-700 font-medium relative z-10">
                 <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" /> Industry-focused practical education</li>
                 <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" /> Short duration - 3 years course</li>
                 <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" /> High demand for skilled technicians</li>
                 <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" /> Opportunities in Government & Private sectors</li>
                 <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" /> Higher studies through Lateral Entry</li>
                 <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" /> Affordable education with great ROI</li>
               </ul>
               <div className="absolute right-[-20px] bottom-[-20px] opacity-10">
                  <Target className="w-32 h-32 text-pink-500" />
               </div>
             </div>

             {/* Success Stories */}
             <div className="lg:col-span-4 bg-white rounded-3xl p-5 border border-gray-100 shadow-sm">
               <h2 className="text-sm font-bold text-gray-900 mb-4">Success Stories</h2>
               <div className="space-y-4">
                 <div className="flex items-start gap-3 bg-gray-50 p-3 rounded-xl border border-gray-100">
                   <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden shrink-0"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul&style=circle" alt="Rahul" className="w-full h-full object-cover" /></div>
                   <div>
                     <h4 className="font-bold text-[10px] text-gray-900">Rahul Verma</h4>
                     <p className="text-[9px] text-gray-500">Civil Diploma</p>
                     <p className="text-[9px] font-medium text-gray-700 mt-1">Placed at L&T</p>
                     <p className="text-[9px] font-bold text-indigo-600 mt-0.5">Package: ₹4.2 LPA</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-3 bg-gray-50 p-3 rounded-xl border border-gray-100">
                   <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden shrink-0"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=SnehaPatil&style=circle" alt="Sneha" className="w-full h-full object-cover" /></div>
                   <div>
                     <h4 className="font-bold text-[10px] text-gray-900">Sneha Patil</h4>
                     <p className="text-[9px] text-gray-500">E&C Diploma</p>
                     <p className="text-[9px] font-medium text-gray-700 mt-1">Working at Bosch</p>
                     <p className="text-[9px] font-bold text-indigo-600 mt-0.5">Package: ₹3.8 LPA</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-3 bg-gray-50 p-3 rounded-xl border border-gray-100">
                   <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden shrink-0"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Amit&style=circle" alt="Amit" className="w-full h-full object-cover" /></div>
                   <div>
                     <h4 className="font-bold text-[10px] text-gray-900">Amit Kumar</h4>
                     <p className="text-[9px] text-gray-500">Mechanical Diploma</p>
                     <p className="text-[9px] font-medium text-gray-700 mt-1">Working at Tata Motors</p>
                     <p className="text-[9px] font-bold text-indigo-600 mt-0.5">Package: ₹4.5 LPA</p>
                   </div>
                 </div>
               </div>
             </div>
           </div>

           {/* Bottom Action Bar */}
           <div className="bg-indigo-700 rounded-3xl p-6 relative overflow-hidden shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 text-white mt-10">
             <div className="flex items-center gap-4 relative z-10 w-full text-center md:text-left justify-center md:justify-start">
               <div className="w-16 h-16 bg-white/20 rounded-2xl hidden md:flex items-center justify-center backdrop-blur-sm shrink-0">
                  <GraduationCap className="w-8 h-8 text-white" />
               </div>
               <div>
                 <h3 className="text-xl font-bold mb-1">You've Reached the Final Step in Polytechnic Diploma!</h3>
                 <p className="text-indigo-100 text-sm">Choose your branch and start your career journey with confidence.</p>
               </div>
             </div>
             
             {/* Background pattern */}
             <div className="absolute right-0 top-0 w-64 h-64 bg-indigo-600 rounded-full blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
           </div>
        </div>
        
        {/* Right Sidebar */}
        <div className="w-full lg:w-[320px] space-y-6">
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
                  <span>Which diploma branch has best future?</span>
                  <ArrowRight className="w-4 h-4 text-indigo-300 group-hover/q:text-indigo-600 group-hover/q:translate-x-1 transition-all" />
                </div>
                <div className="bg-white border border-indigo-50 rounded-xl p-3.5 text-[11px] font-medium text-gray-700 hover:border-indigo-300 hover:shadow-sm cursor-pointer transition-all flex items-center justify-between group/q" onClick={() => window.location.href='/chat'}>
                  <span>Best diploma branch for high salary?</span>
                  <ArrowRight className="w-4 h-4 text-indigo-300 group-hover/q:text-indigo-600 group-hover/q:translate-x-1 transition-all" />
                </div>
                <div className="bg-white border border-indigo-50 rounded-xl p-3.5 text-[11px] font-medium text-gray-700 hover:border-indigo-300 hover:shadow-sm cursor-pointer transition-all flex items-center justify-between group/q" onClick={() => window.location.href='/chat'}>
                  <span>Diploma vs ITI - Which is better?</span>
                  <ArrowRight className="w-4 h-4 text-indigo-300 group-hover/q:text-indigo-600 group-hover/q:translate-x-1 transition-all" />
                </div>
              </div>
              
              <button className="w-full bg-indigo-700 text-white font-bold py-3.5 rounded-xl shadow-md shadow-indigo-200 hover:bg-indigo-800 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2" onClick={() => window.location.href='/chat'}>
                Chat with AI <ArrowRight className="w-4 h-4"/>
              </button>
            </div>
          </div>

          {/* Quick Info */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-900 text-sm mb-5">Diploma Quick Info</h3>
            <div className="space-y-4">
              <div className="flex gap-3 items-start border-b border-gray-50 pb-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0"><BookOpen className="w-4 h-4"/></div>
                <div>
                  <h4 className="font-bold text-[10px] text-gray-900">Duration</h4>
                  <p className="text-[9px] text-gray-500 mt-0.5">3 Years (6 Semesters)</p>
                </div>
              </div>
              <div className="flex gap-3 items-start border-b border-gray-50 pb-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0"><CheckCircle className="w-4 h-4"/></div>
                <div>
                  <h4 className="font-bold text-[10px] text-gray-900">Eligibility</h4>
                  <p className="text-[9px] text-gray-500 mt-0.5">Pass 10th (SSC) with minimum 35%</p>
                </div>
              </div>
              <div className="flex gap-3 items-start border-b border-gray-50 pb-3">
                <div className="w-8 h-8 rounded-lg bg-green-50 text-green-600 flex items-center justify-center shrink-0"><Target className="w-4 h-4"/></div>
                <div>
                  <h4 className="font-bold text-[10px] text-gray-900">Approval</h4>
                  <p className="text-[9px] text-gray-500 mt-0.5">AICTE & State Technical Boards</p>
                </div>
              </div>
              <div className="flex gap-3 items-start border-b border-gray-50 pb-3">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0"><Building2 className="w-4 h-4"/></div>
                <div>
                  <h4 className="font-bold text-[10px] text-gray-900">Average Fees</h4>
                  <p className="text-[9px] text-gray-500 mt-0.5">₹10,000 - ₹80,000 per year</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0"><Zap className="w-4 h-4"/></div>
                <div>
                  <h4 className="font-bold text-[10px] text-gray-900">Average Salary</h4>
                  <p className="text-[9px] text-gray-500 mt-0.5">₹2.5 - ₹5.5 LPA (Entry Level)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Scholarships */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-900 text-sm mb-4">Scholarships for Diploma Students</h3>
            <div className="grid grid-cols-5 gap-1">
               <div className="flex flex-col items-center gap-1">
                  <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[10px] shadow-sm border border-blue-100">🎓</div>
                  <span className="text-[7px] font-semibold text-center text-gray-600 leading-tight">NSP<br/>Scholarship</span>
               </div>
               <div className="flex flex-col items-center gap-1">
                  <div className="w-7 h-7 rounded-full bg-green-50 flex items-center justify-center text-[10px] shadow-sm border border-green-100">🏛️</div>
                  <span className="text-[7px] font-semibold text-center text-gray-600 leading-tight">State<br/>Scholarships</span>
               </div>
               <div className="flex flex-col items-center gap-1">
                  <div className="w-7 h-7 rounded-full bg-yellow-50 flex items-center justify-center text-[10px] shadow-sm border border-yellow-100">🏅</div>
                  <span className="text-[7px] font-semibold text-center text-gray-600 leading-tight">Merit<br/>Scholarships</span>
               </div>
               <div className="flex flex-col items-center gap-1">
                  <div className="w-7 h-7 rounded-full bg-red-50 flex items-center justify-center text-[10px] shadow-sm border border-red-100">📚</div>
                  <span className="text-[7px] font-semibold text-center text-gray-600 leading-tight">SC/ST<br/>Scholarships</span>
               </div>
               <div className="flex flex-col items-center gap-1">
                  <div className="w-7 h-7 rounded-full bg-purple-50 flex items-center justify-center text-[10px] shadow-sm border border-purple-100">🤝</div>
                  <span className="text-[7px] font-semibold text-center text-gray-600 leading-tight">Minority<br/>Scholarships</span>
               </div>
            </div>
          </div>
          
          {/* Talk to Experts */}
          <div className="bg-indigo-50 rounded-3xl p-6 border border-indigo-100 relative overflow-hidden flex flex-col justify-between items-start gap-4 shadow-sm">
             <div>
                <h3 className="text-indigo-900 font-bold text-sm mb-2">Talk to Our Experts</h3>
                <p className="text-indigo-700 text-xs mb-4">Get free guidance from career counsellors and industry experts.</p>
                <button className="bg-indigo-700 text-white font-bold py-2.5 px-6 rounded-xl shadow-md hover:bg-indigo-800 transition-colors text-xs">Book Session</button>
             </div>
             <div className="absolute -right-4 -bottom-4 w-32 h-32">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Expert&style=circle" alt="Expert" className="w-full h-full object-cover" />
             </div>
          </div>
        </div>
        
      </div>
    </MainLayout>
  );
}
