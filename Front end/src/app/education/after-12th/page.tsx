"use client";

import MainLayout from "@/components/layout/MainLayout";
import Link from "next/link";
import { ChevronRight, Target, CheckCircle, GraduationCap, ArrowRight, Bot, Star, Building2, MapPin, IndianRupee, Cpu, BookOpen, Activity, HeartPulse, Briefcase, Award, Shield, Palette, Wrench, Calculator, Globe, Monitor, Settings, PenTool, Flame, Snowflake, Combine, Wrench as WrenchIcon, Car, Microscope, Thermometer, UserCheck, Stethoscope, BriefcaseMedical, Phone, UserPlus, Leaf, Droplets, Sun, Sprout, Trees, Wheat, Milk, Tractor, Code, Database, Cloud, Smartphone, Layout, MonitorPlay, Code2, LineChart, Cpu as CpuIcon, FlaskConical, Gavel, FileText, Magnet, Scale, Building, Pen, Rocket, TrendingUp } from "lucide-react";

export default function After12thPage() {
  return (
    <MainLayout>
      {/* Education Journey Stepper */}
      <div className="flex flex-wrap items-center gap-2 text-[10px] md:text-xs text-gray-500 mb-6 overflow-x-auto pb-2">
        <Link href="/" className="hover:text-indigo-600 flex items-center gap-1">
           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
           <span className="hidden md:inline">Home</span>
        </Link>
        <ChevronRight className="w-3 h-3 text-gray-400" />
        <span className="text-indigo-600 font-bold bg-indigo-50 px-2 py-1 rounded-md">After 12th</span>
        <ChevronRight className="w-3 h-3 text-gray-400" />
        <span className="font-medium text-gray-400">Choose Stream</span>
        <ChevronRight className="w-3 h-3 text-gray-400" />
        <span className="font-medium text-gray-400">Explore Courses</span>
        <ChevronRight className="w-3 h-3 text-gray-400" />
        <span className="font-medium text-gray-400">Entrance Exams</span>
        <ChevronRight className="w-3 h-3 text-gray-400" />
        <span className="font-medium text-gray-400">Colleges</span>
        <ChevronRight className="w-3 h-3 text-gray-400" />
        <span className="font-medium text-gray-400">Higher Studies</span>
        <ChevronRight className="w-3 h-3 text-gray-400" />
        <span className="font-medium text-gray-400">Career</span>
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
               <h2 className="text-sm md:text-base font-bold text-gray-800 mb-2">Explore Top Courses</h2>
               <h1 className="text-3xl md:text-5xl font-black text-indigo-700 mb-4 leading-tight">
                 After 12th
               </h1>
               <p className="text-gray-600 mb-6 text-sm md:text-base font-medium max-w-xl leading-relaxed">
                 Choose from a wide range of undergraduate courses and build a successful future.
               </p>
               
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                 <div className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center">
                   <h3 className="font-black text-indigo-700 text-lg">500+</h3>
                   <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Courses</p>
                 </div>
                 <div className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center">
                   <h3 className="font-black text-indigo-700 text-lg">1000+</h3>
                   <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Colleges</p>
                 </div>
                 <div className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center">
                   <h3 className="font-black text-indigo-700 text-lg">95%</h3>
                   <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Placement Support</p>
                 </div>
                 <div className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center">
                   <h3 className="font-black text-indigo-700 text-lg">High</h3>
                   <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Industry Connect</p>
                 </div>
               </div>
             </div>
             
             <div className="w-full md:w-72 relative z-10 hidden md:block">
               <div className="relative w-64 h-64 bg-indigo-100 rounded-full flex items-center justify-center ml-auto overflow-visible">
                 {/* Decorative elements */}
                 <div className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md animate-bounce" style={{ animationDuration: '3s' }}><FlaskConical className="w-5 h-5 text-indigo-500"/></div>
                 <div className="absolute bottom-10 -left-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md animate-bounce" style={{ animationDuration: '4s' }}><Scale className="w-6 h-6 text-green-500"/></div>
                 <div className="absolute top-10 right-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md animate-bounce" style={{ animationDuration: '3.5s' }}><Code className="w-6 h-6 text-purple-500"/></div>
                 <div className="absolute bottom-1/3 -right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md animate-bounce" style={{ animationDuration: '2.5s' }}><LineChart className="w-5 h-5 text-blue-500"/></div>
                 
                 <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jasmine&style=circle" alt="Student" className="w-full h-full object-cover rounded-full" />
               </div>
             </div>
           </div>

           {/* Popular Courses After 12th */}
           <div>
             <h2 className="text-xl font-bold text-gray-900 mb-5">Popular Courses After 12th</h2>
             <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
               {[
                 { name: "B.Tech", desc: "Bachelor of Technology", duration: "4 Years", salary: "₹6 - 12 LPA", icon: CpuIcon, color: "text-blue-600", bg: "bg-blue-100", border: "border-blue-200" },
                 { name: "B.Sc", desc: "Bachelor of Science", duration: "3 Years", salary: "₹3 - 8 LPA", icon: FlaskConical, color: "text-green-600", bg: "bg-green-100", border: "border-green-200" },
                 { name: "B.Com", desc: "Bachelor of Commerce", duration: "3 Years", salary: "₹3 - 7 LPA", icon: LineChart, color: "text-amber-600", bg: "bg-amber-100", border: "border-amber-200" },
                 { name: "BBA", desc: "Bachelor of Business Administration", duration: "3 Years", salary: "₹4 - 8 LPA", icon: Briefcase, color: "text-purple-600", bg: "bg-purple-100", border: "border-purple-200" },
                 { name: "BA", desc: "Bachelor of Arts", duration: "3 Years", salary: "₹2 - 6 LPA", icon: BookOpen, color: "text-pink-600", bg: "bg-pink-100", border: "border-pink-200" },
                 { name: "BCA", desc: "Bachelor of Computer Applications", duration: "3 Years", salary: "₹3 - 8 LPA", icon: Code2, color: "text-indigo-600", bg: "bg-indigo-100", border: "border-indigo-200" },
                 { name: "B.Des", desc: "Bachelor of Design", duration: "4 Years", salary: "₹4 - 10 LPA", icon: Palette, color: "text-teal-600", bg: "bg-teal-100", border: "border-teal-200" },
               ].map((course, i) => (
                 <div key={i} className={`flex flex-col items-center border ${course.border} rounded-2xl p-3 hover:shadow-lg transition-all cursor-pointer group bg-white h-full relative overflow-hidden text-center`}>
                   <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
                     <ArrowRight className={`w-3 h-3 ${course.color}`} />
                   </div>
                   <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-2 ${course.bg} ${course.color} shadow-sm group-hover:scale-110 transition-transform`}>
                      <course.icon className="w-5 h-5" />
                   </div>
                   <h3 className={`font-extrabold text-[11px] ${course.color} leading-tight mb-1`}>{course.name}</h3>
                   <p className="text-[9px] text-gray-500 mb-2 leading-tight flex-grow">{course.desc}</p>
                   
                   <div className="w-full pt-2 border-t border-gray-100">
                     <p className="text-[8px] font-bold text-gray-400">Duration: <span className="text-gray-700">{course.duration}</span></p>
                     <p className="text-[8px] font-bold text-gray-400">Salary: <span className="text-gray-700">{course.salary}</span></p>
                   </div>
                 </div>
               ))}
             </div>
           </div>

           {/* Streams, Exams & Colleges Row */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              
              {/* Stream Options */}
              <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm flex flex-col h-full">
                 <h2 className="text-sm font-bold text-gray-900 mb-4">Stream Options</h2>
                 <div className="flex-1 flex flex-col justify-between space-y-2">
                    {[
                      { name: "Science (PCM/PCB)", icon: FlaskConical },
                      { name: "Commerce", icon: Calculator },
                      { name: "Arts / Humanities", icon: BookOpen },
                      { name: "Computer Applications", icon: Monitor },
                      { name: "Law", icon: Scale },
                      { name: "Design & Fine Arts", icon: Palette },
                    ].map((stream, i) => (
                      <div key={i} className="flex items-center justify-between p-2 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-100 cursor-pointer group transition-colors">
                        <div className="flex items-center gap-3">
                          <stream.icon className="w-4 h-4 text-indigo-500" />
                          <span className="text-[10px] font-bold text-gray-700 group-hover:text-indigo-700 transition-colors">{stream.name}</span>
                        </div>
                        <ArrowRight className="w-3 h-3 text-gray-300 group-hover:text-indigo-500 transition-colors" />
                      </div>
                    ))}
                 </div>
              </div>

              {/* Top Entrance Exams */}
              <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm flex flex-col h-full">
                 <h2 className="text-sm font-bold text-gray-900 mb-4">Top Entrance Exams</h2>
                 <div className="flex-1 flex flex-col justify-between space-y-2">
                    {[
                      { name: "JEE Main / Advanced", icon: "A" },
                      { name: "NEET UG", icon: "N" },
                      { name: "CUET UG", icon: "C" },
                      { name: "IPMAT", icon: "I" },
                      { name: "CLAT", icon: "L" },
                      { name: "NID / UCEED", icon: "D" },
                    ].map((exam, i) => (
                      <div key={i} className="flex items-center justify-between p-2 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-100 cursor-pointer group transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-[10px] font-black">{exam.icon}</div>
                          <span className="text-[10px] font-bold text-gray-700 group-hover:text-indigo-700 transition-colors">{exam.name}</span>
                        </div>
                        <ArrowRight className="w-3 h-3 text-gray-300 group-hover:text-indigo-500 transition-colors" />
                      </div>
                    ))}
                 </div>
              </div>

              {/* Top Colleges */}
              <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm flex flex-col h-full">
                 <h2 className="text-sm font-bold text-gray-900 mb-4">Top Colleges</h2>
                 <div className="grid grid-cols-2 gap-3 flex-1">
                    {[
                      { name: "IIT Bombay", rating: "4.8 (1200)", img: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
                      { name: "Christ University", rating: "4.5 (750)", img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
                      { name: "Jadavpur University", rating: "4.4 (610)", img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
                      { name: "Delhi University", rating: "4.6 (980)", img: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
                      { name: "Symbiosis Pune", rating: "4.4 (890)", img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
                      { name: "VIT Vellore", rating: "4.3 (590)", img: "https://images.unsplash.com/photo-1592289139556-91e84992dc7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
                    ].map((college, i) => (
                      <div key={i} className="flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-100 cursor-pointer group transition-colors">
                        <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden shadow-sm group-hover:scale-105 transition-transform"><img src={college.img} alt={college.name} className="w-full h-full object-cover" /></div>
                        <h4 className="font-bold text-[9px] text-gray-900 text-center leading-tight">{college.name}</h4>
                        <div className="flex items-center gap-0.5"><Star className="w-2.5 h-2.5 text-amber-500 fill-amber-500"/><span className="text-[8px] text-gray-500 font-medium">{college.rating}</span></div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>

           {/* Career Opportunities */}
           <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
              <h2 className="text-sm font-bold text-gray-900 mb-5">Career Opportunities</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                 {[
                   { name: "Software Engineer", icon: Code2, color: "text-blue-500" },
                   { name: "Data Scientist", icon: Cpu, color: "text-indigo-500" },
                   { name: "Doctor", icon: HeartPulse, color: "text-green-500" },
                   { name: "Chartered Accountant", icon: Calculator, color: "text-amber-500" },
                   { name: "Business Analyst", icon: LineChart, color: "text-purple-500" },
                   { name: "Civil Engineer", icon: Building, color: "text-orange-500" },
                   { name: "Designer", icon: Palette, color: "text-pink-500" },
                   { name: "Lawyer", icon: Scale, color: "text-gray-700" },
                   { name: "Research Scientist", icon: FlaskConical, color: "text-teal-500" },
                   { name: "Product Manager", icon: Target, color: "text-red-500" },
                   { name: "Financial Analyst", icon: TrendingUp, color: "text-emerald-500" },
                   { name: "Journalist", icon: Pen, color: "text-blue-600" },
                 ].map((career, i) => (
                   <div key={i} className="flex flex-col items-center gap-1.5 bg-gray-50 p-3 rounded-2xl border border-gray-100 hover:bg-indigo-50 hover:border-indigo-100 transition-colors cursor-pointer group">
                     <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                       <career.icon className={`w-4 h-4 ${career.color}`} />
                     </div>
                     <span className="text-[9px] font-bold text-gray-700 text-center leading-tight group-hover:text-indigo-900">{career.name}</span>
                   </div>
                 ))}
              </div>
           </div>

           {/* Scholarships & Top Recruiters Row */}
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              
              {/* Scholarships */}
              <div className="lg:col-span-4 bg-white rounded-3xl p-5 border border-gray-100 shadow-sm flex flex-col">
                 <h2 className="text-sm font-bold text-gray-900 mb-4">Scholarships After 12th</h2>
                 <div className="grid grid-cols-3 gap-2 flex-1">
                    <div className="flex flex-col items-center justify-center gap-2 bg-amber-50 p-2 rounded-xl border border-amber-100 text-center">
                       <Award className="w-6 h-6 text-amber-500" />
                       <span className="text-[9px] font-bold text-amber-900 leading-tight">Merit<br/>Scholarships</span>
                       <span className="text-[7px] text-amber-700">For academic excellence</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2 bg-blue-50 p-2 rounded-xl border border-blue-100 text-center">
                       <Building2 className="w-6 h-6 text-blue-500" />
                       <span className="text-[9px] font-bold text-blue-900 leading-tight">Government<br/>Scholarships</span>
                       <span className="text-[7px] text-blue-700">Central & State Programs</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2 bg-green-50 p-2 rounded-xl border border-green-100 text-center">
                       <Stethoscope className="w-6 h-6 text-green-500" />
                       <span className="text-[9px] font-bold text-green-900 leading-tight">Need Based<br/>Scholarships</span>
                       <span className="text-[7px] text-green-700">Financial assistance</span>
                    </div>
                 </div>
              </div>

              {/* Top Recruiters */}
              <div className="lg:col-span-8 bg-white rounded-3xl p-5 border border-gray-100 shadow-sm">
                 <h2 className="text-sm font-bold text-gray-900 mb-4">Top Recruiters</h2>
                 <div className="flex flex-wrap gap-5 items-center justify-center h-full pb-2">
                    <div className="font-black text-blue-800 text-xl hover:scale-110 transition-transform cursor-pointer">TCS</div>
                    <div className="font-black text-blue-600 text-xl tracking-tighter hover:scale-110 transition-transform cursor-pointer">Infosys</div>
                    <div className="font-black text-red-600 text-xl hover:scale-110 transition-transform cursor-pointer">wipro</div>
                    <div className="font-black text-gray-900 text-xl tracking-tighter hover:scale-110 transition-transform cursor-pointer">accenture</div>
                    <div className="font-black text-gray-800 text-xl hover:scale-110 transition-transform cursor-pointer">amazon</div>
                    <div className="font-black text-green-700 text-xl hover:scale-110 transition-transform cursor-pointer">Deloitte.</div>
                    <div className="font-black text-blue-700 text-2xl tracking-widest hover:scale-110 transition-transform cursor-pointer">IBM</div>
                    <div className="font-black text-blue-600 text-2xl hover:scale-110 transition-transform cursor-pointer">HCL</div>
                    <div className="font-black text-blue-800 text-xl hover:scale-110 transition-transform cursor-pointer">Cognizant</div>
                    <div className="font-black text-blue-500 text-xl hover:scale-110 transition-transform cursor-pointer">Capgemini</div>
                 </div>
              </div>
           </div>

           {/* Why Choose & Skills */}
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
             <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm relative overflow-hidden flex flex-col justify-center">
               <h2 className="text-sm font-bold text-gray-900 mb-4 relative z-10">Why Choose the Right Course?</h2>
               <div className="space-y-3 text-[10px] text-gray-700 font-medium relative z-10">
                 <div className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" /> High demand & future growth</div>
                 <div className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" /> Better career opportunities</div>
                 <div className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" /> Higher salary packages</div>
                 <div className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" /> Personal growth & satisfaction</div>
               </div>
               <div className="absolute right-2 bottom-2 w-20 h-20 opacity-90">
                  <Award className="w-full h-full text-yellow-500 drop-shadow-md" />
               </div>
             </div>

             <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm relative overflow-hidden flex flex-col justify-center">
               <h2 className="text-sm font-bold text-gray-900 mb-4 relative z-10">Skills You Will Gain</h2>
               <div className="space-y-2 text-[10px] text-gray-700 font-medium relative z-10 columns-2">
                 <div className="flex items-center gap-1.5 break-inside-avoid"><CheckCircle className="w-3 h-3 text-green-500 shrink-0" /> Problem Solving</div>
                 <div className="flex items-center gap-1.5 break-inside-avoid"><CheckCircle className="w-3 h-3 text-green-500 shrink-0" /> Analytical Thinking</div>
                 <div className="flex items-center gap-1.5 break-inside-avoid"><CheckCircle className="w-3 h-3 text-green-500 shrink-0" /> Communication</div>
                 <div className="flex items-center gap-1.5 break-inside-avoid"><CheckCircle className="w-3 h-3 text-green-500 shrink-0" /> Team Collaboration</div>
                 <div className="flex items-center gap-1.5 break-inside-avoid"><CheckCircle className="w-3 h-3 text-green-500 shrink-0" /> Leadership</div>
                 <div className="flex items-center gap-1.5 break-inside-avoid"><CheckCircle className="w-3 h-3 text-green-500 shrink-0" /> Technical Skills</div>
               </div>
               <div className="absolute right-0 bottom-0 opacity-10">
                  <BookOpen className="w-24 h-24 text-indigo-500" />
               </div>
             </div>
           </div>

           {/* Success Stories, Trending & Guidance Row */}
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              
              {/* Success Stories */}
              <div className="lg:col-span-5 bg-white rounded-3xl p-5 border border-gray-100 shadow-sm">
                 <h2 className="text-sm font-bold text-gray-900 mb-4">Success Stories</h2>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-start gap-2 bg-gray-50 p-2 rounded-xl border border-gray-100">
                      <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden shrink-0"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Rohit&style=circle" alt="Rohit" className="w-full h-full object-cover" /></div>
                      <div>
                        <h4 className="font-bold text-[9px] text-gray-900 leading-tight">Rohit Sharma</h4>
                        <p className="text-[8px] text-gray-500 leading-tight mb-0.5">B.Tech (CSE)</p>
                        <p className="text-[8px] font-medium text-gray-700 leading-tight">Software Engineer</p>
                        <p className="text-[9px] font-bold text-indigo-600 mt-0.5">₹12 LPA</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 bg-gray-50 p-2 rounded-xl border border-gray-100">
                      <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden shrink-0"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Neha&style=circle" alt="Neha" className="w-full h-full object-cover" /></div>
                      <div>
                        <h4 className="font-bold text-[9px] text-gray-900 leading-tight">Neha Iyer</h4>
                        <p className="text-[8px] text-gray-500 leading-tight mb-0.5">BBA</p>
                        <p className="text-[8px] font-medium text-gray-700 leading-tight">Business Analyst</p>
                        <p className="text-[9px] font-bold text-indigo-600 mt-0.5">₹7 LPA</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 bg-gray-50 p-2 rounded-xl border border-gray-100">
                      <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden shrink-0"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun&style=circle" alt="Arjun" className="w-full h-full object-cover" /></div>
                      <div>
                        <h4 className="font-bold text-[9px] text-gray-900 leading-tight">Arjun Reddy</h4>
                        <p className="text-[8px] text-gray-500 leading-tight mb-0.5">B.Sc (Data Science)</p>
                        <p className="text-[8px] font-medium text-gray-700 leading-tight">Data Scientist</p>
                        <p className="text-[9px] font-bold text-indigo-600 mt-0.5">₹9 LPA</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 bg-gray-50 p-2 rounded-xl border border-gray-100">
                      <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden shrink-0"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Priya&style=circle" alt="Priya" className="w-full h-full object-cover" /></div>
                      <div>
                        <h4 className="font-bold text-[9px] text-gray-900 leading-tight">Priya Nair</h4>
                        <p className="text-[8px] text-gray-500 leading-tight mb-0.5">BCA</p>
                        <p className="text-[8px] font-medium text-gray-700 leading-tight">Web Developer</p>
                        <p className="text-[9px] font-bold text-indigo-600 mt-0.5">₹6 LPA</p>
                      </div>
                    </div>
                 </div>
              </div>

              {/* Trending Courses & Guidance */}
              <div className="lg:col-span-7 flex flex-col gap-5">
                 {/* Trending Courses */}
                 <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm flex-1">
                    <h2 className="text-[11px] font-bold text-gray-900 mb-3">Trending Courses</h2>
                    <div className="flex flex-wrap gap-2 items-center justify-start">
                       <span className="text-[9px] font-bold text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">Data Science</span>
                       <span className="text-[9px] font-bold text-indigo-700 bg-indigo-50 px-3 py-1.5 rounded-full border border-indigo-100">AI & ML</span>
                       <span className="text-[9px] font-bold text-red-700 bg-red-50 px-3 py-1.5 rounded-full border border-red-100">Cyber Security</span>
                       <span className="text-[9px] font-bold text-green-700 bg-green-50 px-3 py-1.5 rounded-full border border-green-100">UI/UX Design</span>
                       <span className="text-[9px] font-bold text-purple-700 bg-purple-50 px-3 py-1.5 rounded-full border border-purple-100">Digital Marketing</span>
                       <span className="text-[9px] font-bold text-amber-700 bg-amber-50 px-3 py-1.5 rounded-full border border-amber-100">Finance & Banking</span>
                    </div>
                 </div>

                 {/* Guidance & Support */}
                 <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm flex-1">
                    <h2 className="text-[11px] font-bold text-gray-900 mb-3">Guidance & Support</h2>
                    <div className="grid grid-cols-2 gap-3">
                       <div className="flex items-center gap-2 group cursor-pointer">
                          <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors"><Settings className="w-4 h-4"/></div>
                          <div>
                             <h4 className="font-bold text-[9px] text-gray-900">Career Counseling</h4>
                             <p className="text-[7px] text-gray-500">Talk to our experts</p>
                          </div>
                       </div>
                       <div className="flex items-center gap-2 group cursor-pointer">
                          <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-colors"><Building2 className="w-4 h-4"/></div>
                          <div>
                             <h4 className="font-bold text-[9px] text-gray-900">College Predictor</h4>
                             <p className="text-[7px] text-gray-500">Find best colleges</p>
                          </div>
                       </div>
                       <div className="flex items-center gap-2 group cursor-pointer">
                          <div className="w-8 h-8 rounded-lg bg-green-50 text-green-600 flex items-center justify-center shrink-0 group-hover:bg-green-600 group-hover:text-white transition-colors"><Scale className="w-4 h-4"/></div>
                          <div>
                             <h4 className="font-bold text-[9px] text-gray-900">Course Comparison</h4>
                             <p className="text-[7px] text-gray-500">Compare top courses</p>
                          </div>
                       </div>
                       <div className="flex items-center gap-2 group cursor-pointer">
                          <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-colors"><BookOpen className="w-4 h-4"/></div>
                          <div>
                             <h4 className="font-bold text-[9px] text-gray-900">Download E-Book</h4>
                             <p className="text-[7px] text-gray-500">After 12th Guide</p>
                          </div>
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
                 <h3 className="text-lg font-bold mb-1">Take the Right Step After 12th!</h3>
                 <p className="text-indigo-200 text-xs">Explore courses, compare colleges and build your dream career.</p>
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
              <p className="text-[11px] text-gray-600 mb-5 font-medium leading-tight">Your smart guide for courses, careers and admissions.</p>
              
              <div className="space-y-2 mb-5">
                <p className="text-[9px] font-bold text-indigo-600 uppercase tracking-wider">Try asking me...</p>
                <div className="bg-white border border-indigo-50 rounded-lg p-2.5 text-[10px] font-medium text-gray-700 hover:border-indigo-300 hover:shadow-sm cursor-pointer transition-all flex items-center justify-between group/q" onClick={() => window.location.href='/chat'}>
                  <span>Which course is best after 12th Science?</span>
                  <ArrowRight className="w-3 h-3 text-indigo-300 group-hover/q:text-indigo-600 group-hover/q:translate-x-1 transition-all" />
                </div>
                <div className="bg-white border border-indigo-50 rounded-lg p-2.5 text-[10px] font-medium text-gray-700 hover:border-indigo-300 hover:shadow-sm cursor-pointer transition-all flex items-center justify-between group/q" onClick={() => window.location.href='/chat'}>
                  <span>Top courses with high salary?</span>
                  <ArrowRight className="w-3 h-3 text-indigo-300 group-hover/q:text-indigo-600 group-hover/q:translate-x-1 transition-all" />
                </div>
                <div className="bg-white border border-indigo-50 rounded-lg p-2.5 text-[10px] font-medium text-gray-700 hover:border-indigo-300 hover:shadow-sm cursor-pointer transition-all flex items-center justify-between group/q" onClick={() => window.location.href='/chat'}>
                  <span>Best courses for Commerce students?</span>
                  <ArrowRight className="w-3 h-3 text-indigo-300 group-hover/q:text-indigo-600 group-hover/q:translate-x-1 transition-all" />
                </div>
              </div>
              
              <button className="w-full bg-indigo-700 text-white font-bold py-3 rounded-xl shadow-md shadow-indigo-200 hover:bg-indigo-800 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 text-xs" onClick={() => window.location.href='/chat'}>
                Chat with AI <ArrowRight className="w-3 h-3"/>
              </button>
            </div>
          </div>

          {/* After 12th Quick Info */}
          <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-900 text-[13px] mb-4">After 12th Quick Info</h3>
            <div className="space-y-4">
              <div className="flex gap-2.5 items-start border-b border-gray-50 pb-3">
                <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0"><BookOpen className="w-3.5 h-3.5"/></div>
                <div>
                  <h4 className="font-bold text-[10px] text-gray-900">Top Courses</h4>
                  <p className="text-[9px] text-gray-500 mt-0.5">500+</p>
                </div>
              </div>
              <div className="flex gap-2.5 items-start border-b border-gray-50 pb-3">
                <div className="w-7 h-7 rounded-lg bg-green-50 text-green-600 flex items-center justify-center shrink-0"><Settings className="w-3.5 h-3.5"/></div>
                <div>
                  <h4 className="font-bold text-[10px] text-gray-900">Avg Course Fee</h4>
                  <p className="text-[9px] text-gray-500 mt-0.5">₹50K - ₹2 Lakh / Year</p>
                </div>
              </div>
              <div className="flex gap-2.5 items-start border-b border-gray-50 pb-3">
                <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0"><IndianRupee className="w-3.5 h-3.5"/></div>
                <div>
                  <h4 className="font-bold text-[10px] text-gray-900">Avg Salary Packages</h4>
                  <p className="text-[9px] text-gray-500 mt-0.5">₹3 - ₹12 LPA</p>
                </div>
              </div>
              <div className="flex gap-2.5 items-start">
                <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0"><Building2 className="w-3.5 h-3.5"/></div>
                <div>
                  <h4 className="font-bold text-[10px] text-gray-900">Top Sectors</h4>
                  <p className="text-[9px] text-gray-500 mt-0.5">IT, Healthcare, Finance, Education, Design, Law</p>
                </div>
              </div>
            </div>
            {/* Small book stack illustration placeholder */}
            <div className="mt-4 flex justify-end">
               <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-blue-400" />
               </div>
            </div>
          </div>

          {/* Popular Course Searches */}
          <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-900 text-[13px] mb-3">Popular Course Searches</h3>
            <div className="space-y-2">
               {[
                 "B.Tech Colleges",
                 "BBA Colleges",
                 "BCA Colleges",
                 "B.Sc Colleges",
                 "BA Colleges",
                 "B.Com Colleges"
               ].map((search, i) => (
                 <div key={i} className="flex gap-2 pb-2 border-b border-gray-50 last:border-0 last:pb-0 hover:bg-gray-50 p-1.5 -mx-1.5 rounded-lg transition-colors cursor-pointer group items-center">
                   <Target className="w-3.5 h-3.5 text-indigo-400 group-hover:text-indigo-600 transition-colors" />
                   <span className="font-bold text-[10px] text-gray-700 flex-1 group-hover:text-indigo-700 transition-colors">{search}</span>
                 </div>
               ))}
            </div>
          </div>
          
          {/* Talk to Our Experts */}
          <div className="bg-indigo-50 rounded-3xl p-5 border border-indigo-100 relative overflow-hidden flex flex-col justify-between items-start gap-4 shadow-sm">
             <div>
                <h3 className="text-indigo-900 font-bold text-[13px] mb-1.5">Talk to Our Experts</h3>
                <p className="text-indigo-700 text-[10px] mb-3 leading-tight">Get free guidance from career counselors.</p>
                <button className="bg-indigo-700 text-white font-bold py-2 px-5 rounded-lg shadow-md hover:bg-indigo-800 transition-colors text-[10px]">Book Free Session</button>
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
