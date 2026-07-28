"use client";

import MainLayout from "@/components/layout/MainLayout";
import Link from "next/link";
import { ChevronRight, Target, CheckCircle, GraduationCap, ArrowRight, Bot, Star, Building2, MapPin, IndianRupee, Cpu, BookOpen, Activity, HeartPulse, Briefcase, Award, Shield, Palette, Wrench, Calculator, Globe, Monitor, Settings, PenTool, Flame, Snowflake, Combine, Wrench as WrenchIcon, Car, Microscope, Thermometer, UserCheck, Stethoscope, BriefcaseMedical, Phone, UserPlus } from "lucide-react";

export default function ParamedicalCourses() {
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
        <Link href="/education/after-10th/iti" className="hover:text-indigo-600 font-medium text-gray-400">ITI Courses</Link>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span className="text-indigo-600 font-bold bg-indigo-50 px-2 py-1 rounded-md">Paramedical Courses</span>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span className="font-medium text-gray-400">Jobs & Careers</span>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span className="font-medium text-gray-400">Higher Studies</span>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <div className="flex items-center gap-1 font-medium text-gray-400">
          <Star className="w-4 h-4" /> Final Step
        </div>
      </div>

      <div className="space-y-10 mb-10">
           {/* Hero Banner */}
           <div className="bg-purple-50/50 rounded-3xl p-6 md:p-8 border border-purple-100 relative overflow-hidden flex flex-col md:flex-row items-center gap-6 shadow-sm">
             <div className="absolute right-0 top-0 w-64 h-64 bg-purple-200 rounded-full blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
             
             <div className="flex-1 relative z-10">
               <h1 className="text-3xl md:text-4xl font-black text-purple-950 mb-4 leading-tight">
                 Choose Your Path in <span className="text-purple-700">Paramedical Courses</span>
               </h1>
               <p className="text-gray-600 mb-6 text-sm md:text-base font-medium max-w-5xl leading-relaxed">
                 Start a rewarding career in healthcare with our wide range of paramedical courses. Serve, care and make a difference in people's lives.
               </p>
               
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                 <div className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center">
                   <h3 className="font-black text-purple-700 text-lg">100+</h3>
                   <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Courses</p>
                 </div>
                 <div className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center">
                   <h3 className="font-black text-purple-700 text-lg">2500+</h3>
                   <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Colleges</p>
                 </div>
                 <div className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center">
                   <h3 className="font-black text-purple-700 text-lg">100%</h3>
                   <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Industry Relevant</p>
                 </div>
                 <div className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center">
                   <h3 className="font-black text-purple-700 text-lg">High</h3>
                   <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Placement Support</p>
                 </div>
               </div>
             </div>
             
             <div className="w-full md:w-64 relative z-10 hidden md:block">
               <div className="relative w-64 h-64 bg-purple-100 rounded-full flex items-center justify-center">
                 <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Doctor&style=circle" alt="Paramedical Student" className="w-full h-full object-cover rounded-full" />
               </div>
             </div>
           </div>

           {/* Popular Paramedical Courses */}
           <div className="bg-gradient-to-br from-purple-50 to-white rounded-3xl p-6 md:p-8 border border-purple-100 shadow-md relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200 rounded-full blur-3xl opacity-20 transform translate-x-10 -translate-y-10"></div>
             <h2 className="text-2xl font-black text-purple-950 mb-6 relative z-10">Popular Paramedical Courses</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
               {[
                 { name: "Medical Lab Technology (MLT)", desc: "Learn diagnostic testing and laboratory techniques.", duration: "2 Years", salary: "₹2.4 - ₹4 LPA", icon: Microscope, color: "text-purple-600", bg: "bg-purple-100", border: "border-purple-200" },
                 { name: "Radiology & Imaging Technology", desc: "Work with advanced imaging equipment and radiology.", duration: "2 - 3 Years", salary: "₹2.5 - ₹4.5 LPA", icon: Activity, color: "text-blue-600", bg: "bg-blue-100", border: "border-blue-200" },
                 { name: "Operation Theatre Technology", desc: "Assist in surgeries and operation theatre management.", duration: "2 Years", salary: "₹2.6 - ₹4 LPA", icon: Target, color: "text-pink-600", bg: "bg-pink-100", border: "border-pink-200" },
                 { name: "Physiotherapy", desc: "Help patients recover movement and improve physical health.", duration: "4.5 Years", salary: "₹3 - ₹6 LPA", icon: UserCheck, color: "text-red-500", bg: "bg-red-100", border: "border-red-200" },
                 { name: "Emergency & Trauma Care", desc: "Handle emergencies and provide critical care assistance.", duration: "2 Years", salary: "₹2.2 - ₹3.5 LPA", icon: HeartPulse, color: "text-orange-500", bg: "bg-orange-100", border: "border-orange-200" },
                 { name: "Dialysis Technology", desc: "Specialize in dialysis procedures and patient care.", duration: "2 Years", salary: "₹2.2 - ₹3.5 LPA", icon: Thermometer, color: "text-indigo-600", bg: "bg-indigo-100", border: "border-indigo-200" },
                 { name: "Optometry", desc: "Eye care, vision testing and optical assistance.", duration: "2 Years", salary: "₹2 - ₹3.6 LPA", icon: BookOpen, color: "text-teal-600", bg: "bg-teal-100", border: "border-teal-200" },
                 { name: "Nursing Assistant", desc: "Patient care, vital monitoring and basic medical assistance.", duration: "1 - 2 Years", salary: "₹1.8 - ₹3 LPA", icon: BriefcaseMedical, color: "text-green-600", bg: "bg-green-100", border: "border-green-200" },
               ].map((course, i) => (
                 <div key={i} className={`flex flex-col border ${course.border} rounded-2xl p-5 hover:shadow-lg transition-all cursor-pointer group bg-white h-full relative overflow-hidden`}>
                   <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
                     <ArrowRight className={`w-5 h-5 ${course.color}`} />
                   </div>
                   <div className="flex items-center gap-4 mb-3">
                     <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${course.bg} ${course.color} shadow-sm group-hover:scale-110 transition-transform`}>
                        <course.icon className="w-6 h-6" />
                     </div>
                   </div>
                   <h3 className="font-extrabold text-sm text-gray-900 leading-tight mb-2">{course.name}</h3>
                   <p className="text-[11px] text-gray-500 mb-4 flex-grow">{course.desc}</p>
                   
                   <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
                     <div>
                       <p className="text-[9px] font-bold text-gray-500">Duration</p>
                       <p className="text-xs font-semibold text-gray-700">{course.duration}</p>
                     </div>
                     <div className="text-right">
                       <p className="text-[9px] font-bold text-gray-500">Avg Salary</p>
                       <p className={`text-sm font-black ${course.color}`}>{course.salary}</p>
                     </div>
                   </div>
                 </div>
               ))}
             </div>
           </div>

           {/* Paramedical Course Details & Top Recruiters */}
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              {/* Paramedical Course Details */}
              <div className="lg:col-span-5 bg-white rounded-3xl p-5 border border-gray-100 shadow-sm">
                 <h2 className="text-sm font-bold text-gray-900 mb-4">Paramedical Course Details</h2>
                 <div className="space-y-4">
                   <div className="flex gap-3 items-start p-3 bg-gray-50 rounded-xl">
                     <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center shrink-0"><CheckCircle className="w-4 h-4"/></div>
                     <div>
                       <h4 className="font-bold text-[11px] text-gray-900">Eligibility</h4>
                       <p className="text-[10px] text-gray-600 mt-0.5">10+2 with Science (PCB)</p>
                     </div>
                   </div>
                   <div className="flex gap-3 items-start p-3 bg-gray-50 rounded-xl">
                     <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center shrink-0"><BookOpen className="w-4 h-4"/></div>
                     <div>
                       <h4 className="font-bold text-[11px] text-gray-900">Course Duration</h4>
                       <p className="text-[10px] text-gray-600 mt-0.5">1 - 4.5 Years</p>
                     </div>
                   </div>
                   <div className="flex gap-3 items-start p-3 bg-gray-50 rounded-xl">
                     <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center shrink-0"><IndianRupee className="w-4 h-4"/></div>
                     <div>
                       <h4 className="font-bold text-[11px] text-gray-900">Fees Range</h4>
                       <p className="text-[10px] text-gray-600 mt-0.5">₹20,000 - ₹1,50,000 per year</p>
                     </div>
                   </div>
                   <div className="flex gap-3 items-start p-3 bg-gray-50 rounded-xl">
                     <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center shrink-0"><Building2 className="w-4 h-4"/></div>
                     <div>
                       <h4 className="font-bold text-[11px] text-gray-900">Job Roles</h4>
                       <p className="text-[10px] text-gray-600 mt-0.5">Hospital, Clinics, Labs, Diagnostic Centers</p>
                     </div>
                   </div>
                 </div>
              </div>

              {/* Top Recruiters */}
              <div className="lg:col-span-7 bg-white rounded-3xl p-5 border border-gray-100 shadow-sm">
                 <h2 className="text-sm font-bold text-gray-900 mb-4">Top Recruiters in Paramedical Field</h2>
                 <div className="flex flex-wrap gap-6 items-center justify-center h-full pb-6">
                    <div className="h-8 opacity-60 hover:opacity-100 transition-opacity flex items-center font-bold text-gray-400"><span className="text-blue-800 text-2xl font-black">Apollo Hospitals</span></div>
                    <div className="h-8 opacity-60 hover:opacity-100 transition-opacity flex items-center font-bold text-gray-400"><span className="text-green-600 text-2xl font-black">Fortis</span></div>
                    <div className="h-8 opacity-60 hover:opacity-100 transition-opacity flex items-center font-bold text-gray-400"><span className="text-red-700 text-xl font-black">Narayana Health</span></div>
                    <div className="h-8 opacity-60 hover:opacity-100 transition-opacity flex items-center font-bold text-gray-400"><span className="text-orange-600 text-2xl font-black">Manipal</span></div>
                    <div className="h-8 opacity-60 hover:opacity-100 transition-opacity flex items-center font-bold text-gray-400"><span className="text-indigo-800 text-xl font-black">Max Healthcare</span></div>
                    <div className="h-8 opacity-60 hover:opacity-100 transition-opacity flex items-center font-bold text-gray-400"><span className="text-purple-600 text-xl font-black">PathKind Labs</span></div>
                    <div className="h-8 opacity-60 hover:opacity-100 transition-opacity flex items-center font-bold text-gray-400"><span className="text-blue-500 text-xl font-black">Thyrocare</span></div>
                    <div className="h-8 opacity-60 hover:opacity-100 transition-opacity flex items-center font-bold text-gray-400"><span className="text-red-500 text-xl font-black">Dr. Lal PathLabs</span></div>
                    <div className="h-8 opacity-60 hover:opacity-100 transition-opacity flex items-center font-bold text-gray-400"><span className="text-teal-600 text-xl font-black">Medanta</span></div>
                 </div>
              </div>
           </div>

           {/* Career Opportunities */}
           <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
              <h2 className="text-sm font-bold text-gray-900 mb-5">Career Opportunities</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                 {[
                   { name: "Lab Technician", icon: Microscope },
                   { name: "Radiology Tech", icon: Activity },
                   { name: "Physiotherapist", icon: UserCheck },
                   { name: "OT Technician", icon: Target },
                   { name: "Dialysis Tech", icon: Thermometer },
                   { name: "Clinical Assistant", icon: Stethoscope },
                   { name: "Health Inspector", icon: Shield },
                   { name: "Medical Coder", icon: Monitor },
                 ].map((career, i) => (
                   <div key={i} className="flex flex-col items-center gap-2 bg-purple-50/50 p-4 rounded-2xl border border-purple-50 hover:bg-purple-50 transition-colors cursor-pointer">
                     <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shadow-sm">
                       <career.icon className="w-5 h-5" />
                     </div>
                     <span className="text-[10px] font-bold text-purple-950 text-center leading-tight">{career.name}</span>
                   </div>
                 ))}
              </div>
           </div>

           {/* Lower sections */}
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
             
             {/* Top Government Paramedical Colleges */}
             <div className="lg:col-span-4 bg-white rounded-3xl p-5 border border-gray-100 shadow-sm">
               <h2 className="text-sm font-bold text-gray-900 mb-4">Top Govt. Paramedical Colleges</h2>
               <div className="space-y-4">
                 {[
                   { name: "AIIMS, New Delhi", loc: "Delhi", rating: "4.8 (890)", img: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
                   { name: "JIPMER, Puducherry", loc: "Puducherry", rating: "4.6 (756)", img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
                   { name: "SGPGIMS, Lucknow", loc: "Uttar Pradesh", rating: "4.5 (682)", img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
                   { name: "CMC, Vellore", loc: "Tamil Nadu", rating: "4.6 (712)", img: "https://images.unsplash.com/photo-1592289139556-91e84992dc7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" }
                 ].map((college, i) => (
                   <div key={i} className="flex gap-3 pb-3 border-b border-gray-50 last:border-0 last:pb-0 hover:bg-gray-50 p-2 -mx-2 rounded-xl transition-colors cursor-pointer group">
                     <div className="w-12 h-12 rounded-xl bg-gray-200 overflow-hidden flex-shrink-0">
                       <img src={college.img} alt={college.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                     </div>
                     <div className="flex-1">
                       <h4 className="font-bold text-[11px] text-gray-800 leading-tight mb-1 group-hover:text-purple-600 transition-colors">{college.name}</h4>
                       <p className="text-[10px] font-medium text-gray-500 mb-1 flex items-center gap-1"><MapPin className="w-3 h-3" /> {college.loc}</p>
                       <span className="text-[10px] font-bold text-amber-500 flex items-center gap-0.5"><Star className="w-2.5 h-2.5 fill-current" /> {college.rating}</span>
                     </div>
                   </div>
                 ))}
               </div>
             </div>

             {/* Entrance Exams & Skills You Will Learn */}
             <div className="lg:col-span-8 flex flex-col gap-5">
               {/* Entrance Exams */}
               <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm flex-1">
                 <h2 className="text-sm font-bold text-gray-900 mb-4">Entrance Exams for Paramedical</h2>
                 <div className="grid grid-cols-4 gap-4 pt-2">
                   <div className="flex flex-col items-center justify-center p-3 border border-gray-100 bg-gray-50 rounded-xl text-center">
                     <Activity className="w-6 h-6 text-blue-600 mb-2" />
                     <span className="text-[10px] font-bold text-gray-700">AIIMS Paramedical</span>
                   </div>
                   <div className="flex flex-col items-center justify-center p-3 border border-gray-100 bg-gray-50 rounded-xl text-center">
                     <HeartPulse className="w-6 h-6 text-red-500 mb-2" />
                     <span className="text-[10px] font-bold text-gray-700">JIPMER Paramedical</span>
                   </div>
                   <div className="flex flex-col items-center justify-center p-3 border border-gray-100 bg-gray-50 rounded-xl text-center">
                     <Target className="w-6 h-6 text-green-500 mb-2" />
                     <span className="text-[10px] font-bold text-gray-700">NIMHANS Paramedical</span>
                   </div>
                   <div className="flex flex-col items-center justify-center p-3 border border-gray-100 bg-gray-50 rounded-xl text-center">
                     <Globe className="w-6 h-6 text-purple-500 mb-2" />
                     <span className="text-[10px] font-bold text-gray-700">State CET Paramedical</span>
                   </div>
                 </div>
               </div>

               {/* Skills You Will Learn */}
               <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm relative overflow-hidden flex-1">
                 <h2 className="text-sm font-bold text-gray-900 mb-4">Skills You Will Learn</h2>
                 <ul className="space-y-3 text-xs text-gray-700 font-medium relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-4">
                   <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 shrink-0" /> Patient Care & Assistance</li>
                   <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 shrink-0" /> Medical Equipment Handling</li>
                   <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 shrink-0" /> Diagnostic Techniques</li>
                   <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 shrink-0" /> Emergency Response</li>
                   <li className="flex items-start gap-2 md:col-span-2"><CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 shrink-0" /> Healthcare Management</li>
                 </ul>
                 <div className="absolute right-[-20px] bottom-[-20px] opacity-10">
                    <BriefcaseMedical className="w-32 h-32 text-purple-500" />
                 </div>
               </div>
             </div>
           </div>

           {/* Scholarships & Why Choose */}
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              <div className="lg:col-span-5 bg-white rounded-3xl p-5 border border-gray-100 shadow-sm">
                 <h2 className="text-sm font-bold text-gray-900 mb-4">Scholarships for Paramedical Students</h2>
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

              <div className="lg:col-span-7 bg-white rounded-3xl p-5 border border-gray-100 shadow-sm relative overflow-hidden">
                 <h2 className="text-sm font-bold text-gray-900 mb-4">Why Choose Paramedical Courses?</h2>
                 <ul className="space-y-3 text-xs text-gray-700 font-medium relative z-10">
                   <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 shrink-0" /> High demand in healthcare industry</li>
                   <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 shrink-0" /> Short duration courses with good career scope</li>
                   <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 shrink-0" /> Opportunities in government & private sectors</li>
                   <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 shrink-0" /> Job satisfaction and respect in society</li>
                   <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 shrink-0" /> Options for higher studies in healthcare</li>
                 </ul>
                 <div className="absolute right-[-20px] bottom-[-20px] opacity-10">
                    <Award className="w-32 h-32 text-amber-500" />
                 </div>
              </div>
           </div>

           {/* Success Stories */}
           <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
              <h2 className="text-sm font-bold text-gray-900 mb-5">Success Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                 <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                   <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden shrink-0"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha&style=circle" alt="Sneha" className="w-full h-full object-cover" /></div>
                   <div>
                     <h4 className="font-bold text-xs text-gray-900">Sneha Reddy</h4>
                     <p className="text-[10px] text-gray-500">Radiology Tech</p>
                     <p className="text-[11px] font-medium text-gray-700 mt-1">Working at Apollo Hospitals</p>
                     <p className="text-[11px] font-bold text-purple-600 mt-0.5">Package: ₹4.2 LPA</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                   <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden shrink-0"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul&style=circle" alt="Rahul" className="w-full h-full object-cover" /></div>
                   <div>
                     <h4 className="font-bold text-xs text-gray-900">Rahul Sharma</h4>
                     <p className="text-[10px] text-gray-500">MLT Technician</p>
                     <p className="text-[11px] font-medium text-gray-700 mt-1">Working at Thyrocare</p>
                     <p className="text-[11px] font-bold text-purple-600 mt-0.5">Package: ₹3.5 LPA</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                   <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden shrink-0"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Anjali&style=circle" alt="Anjali" className="w-full h-full object-cover" /></div>
                   <div>
                     <h4 className="font-bold text-xs text-gray-900">Anjali Verma</h4>
                     <p className="text-[10px] text-gray-500">Physiotherapist</p>
                     <p className="text-[11px] font-medium text-gray-700 mt-1">Own Clinic</p>
                     <p className="text-[11px] font-bold text-purple-600 mt-0.5">Earning: ₹40K/Mo</p>
                   </div>
                 </div>
              </div>
           </div>

           {/* Bottom Action Bar */}
           <div className="bg-purple-700 rounded-3xl p-6 relative overflow-hidden shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 text-white mt-10">
             <div className="flex items-center gap-4 relative z-10 w-full text-center md:text-left justify-center md:justify-start">
               <div className="w-16 h-16 bg-white/20 rounded-2xl hidden md:flex items-center justify-center backdrop-blur-sm shrink-0">
                  <HeartPulse className="w-8 h-8 text-white" />
               </div>
               <div>
                 <h3 className="text-xl font-bold mb-1">You've Reached the Final Step in Paramedical Courses!</h3>
                 <p className="text-purple-100 text-sm">Choose your course and begin your journey towards a noble and stable career.</p>
               </div>
             </div>
             
             {/* Background pattern */}
             <div className="absolute right-0 top-0 w-64 h-64 bg-purple-600 rounded-full blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
           </div>

          {/* Bottom Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* AI Assistant */}
          <div className="bg-white rounded-3xl p-6 border border-purple-100 shadow-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/80 to-pink-50/80 z-0"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform group-hover:shadow-md">
                  <Bot className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 flex items-center gap-1 text-lg">Be You AI Assistant <span className="text-yellow-500">✨</span></h3>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-6 font-medium">Your smart guide for courses, careers and admissions.</p>
              
              <div className="space-y-3 mb-6">
                <p className="text-[11px] font-bold text-purple-400 uppercase tracking-wider">Try asking me...</p>
                <div className="bg-white border border-purple-50 rounded-xl p-3.5 text-[11px] font-medium text-gray-700 hover:border-purple-300 hover:shadow-sm cursor-pointer transition-all flex items-center justify-between group/q" onClick={() => window.location.href='/chat'}>
                  <span>Which paramedical course is best?</span>
                  <ArrowRight className="w-4 h-4 text-purple-300 group-hover/q:text-purple-600 group-hover/q:translate-x-1 transition-all" />
                </div>
                <div className="bg-white border border-purple-50 rounded-xl p-3.5 text-[11px] font-medium text-gray-700 hover:border-purple-300 hover:shadow-sm cursor-pointer transition-all flex items-center justify-between group/q" onClick={() => window.location.href='/chat'}>
                  <span>Top salary paramedical jobs?</span>
                  <ArrowRight className="w-4 h-4 text-purple-300 group-hover/q:text-purple-600 group-hover/q:translate-x-1 transition-all" />
                </div>
                <div className="bg-white border border-purple-50 rounded-xl p-3.5 text-[11px] font-medium text-gray-700 hover:border-purple-300 hover:shadow-sm cursor-pointer transition-all flex items-center justify-between group/q" onClick={() => window.location.href='/chat'}>
                  <span>Paramedical vs Nursing - Which is better?</span>
                  <ArrowRight className="w-4 h-4 text-purple-300 group-hover/q:text-purple-600 group-hover/q:translate-x-1 transition-all" />
                </div>
              </div>
              
              <button className="w-full bg-purple-700 text-white font-bold py-3.5 rounded-xl shadow-md shadow-purple-200 hover:bg-purple-800 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2" onClick={() => window.location.href='/chat'}>
                Chat with AI <ArrowRight className="w-4 h-4"/>
              </button>
            </div>
          </div>

          {/* Paramedical Quick Info */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-900 text-sm mb-5">Paramedical Quick Info</h3>
            <div className="space-y-4">
              <div className="flex gap-3 items-start border-b border-gray-50 pb-3">
                <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0"><Building2 className="w-4 h-4"/></div>
                <div>
                  <h4 className="font-bold text-[11px] text-gray-900">Total Colleges in India</h4>
                  <p className="text-[10px] text-gray-500 mt-0.5">2,500+</p>
                </div>
              </div>
              <div className="flex gap-3 items-start border-b border-gray-50 pb-3">
                <div className="w-8 h-8 rounded-lg bg-green-50 text-green-600 flex items-center justify-center shrink-0"><Activity className="w-4 h-4"/></div>
                <div>
                  <h4 className="font-bold text-[11px] text-gray-900">Job Growth (Next 5 Years)</h4>
                  <p className="text-[10px] text-gray-500 mt-0.5">22%</p>
                </div>
              </div>
              <div className="flex gap-3 items-start border-b border-gray-50 pb-3">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0"><IndianRupee className="w-4 h-4"/></div>
                <div>
                  <h4 className="font-bold text-[11px] text-gray-900">Average Salary</h4>
                  <p className="text-[10px] text-gray-500 mt-0.5">₹2.5 - ₹6 LPA</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0"><BriefcaseMedical className="w-4 h-4"/></div>
                <div>
                  <h4 className="font-bold text-[11px] text-gray-900">Work Settings</h4>
                  <p className="text-[10px] text-gray-500 mt-0.5">Hospitals, Labs, Clinics, Diagnostic Centers, NGOs, Community Health</p>
                </div>
              </div>
            </div>
          </div>

          {/* Top Paramedical Colleges */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-900 text-sm mb-4">Top Paramedical Colleges</h3>
            <div className="space-y-4">
               {[
                 { name: "AIIMS Paramedical College", loc: "New Delhi", rating: "4.7 (890)", img: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
                 { name: "JIPMER Paramedical College", loc: "Puducherry", rating: "4.6 (756)", img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
                 { name: "CMC Paramedical College", loc: "Vellore, Tamil Nadu", rating: "4.6 (712)", img: "https://images.unsplash.com/photo-1592289139556-91e84992dc7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" }
               ].map((college, i) => (
                 <div key={i} className="flex gap-3 pb-3 border-b border-gray-50 last:border-0 last:pb-0 hover:bg-gray-50 p-2 -mx-2 rounded-xl transition-colors cursor-pointer group">
                   <div className="w-10 h-10 rounded-xl bg-gray-200 overflow-hidden flex-shrink-0">
                     <img src={college.img} alt={college.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                   </div>
                   <div className="flex-1">
                     <h4 className="font-bold text-[10px] text-gray-800 leading-tight mb-1 group-hover:text-purple-600 transition-colors">{college.name}</h4>
                     <p className="text-[9px] font-medium text-gray-500 mb-1 flex items-center gap-1">{college.loc}</p>
                     <span className="text-[9px] font-bold text-amber-500 flex items-center gap-0.5"><Star className="w-2.5 h-2.5 fill-current" /> {college.rating}</span>
                   </div>
                 </div>
               ))}
            </div>
          </div>
          
          {/* Talk to Experts */}
          <div className="bg-purple-50 rounded-3xl p-6 border border-purple-100 relative overflow-hidden flex flex-col justify-between items-start gap-4 shadow-sm">
             <div>
                <h3 className="text-purple-900 font-bold text-sm mb-2">Talk to Our Experts</h3>
                <p className="text-purple-700 text-xs mb-4">Get free guidance from experienced healthcare professionals.</p>
                <button className="bg-purple-700 text-white font-bold py-2.5 px-6 rounded-xl shadow-md hover:bg-purple-800 transition-colors text-xs">Book Session</button>
             </div>
             <div className="absolute -right-4 -bottom-4 w-32 h-32">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Doctor2&style=circle" alt="Expert" className="w-full h-full object-cover" />
             </div>
          </div>
        </div>
        
      </div>
    </MainLayout>
  );
}
