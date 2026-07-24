"use client";

import MainLayout from "@/components/layout/MainLayout";
import Link from "next/link";
import { ChevronRight, Bot, ArrowRight, MapPin, Star, HeartPulse, Cpu, Calculator, Shield, BookOpen, Target, Building2, Wrench, Globe, CheckCircle, Scale, GraduationCap, Briefcase, Award, TrendingUp, DollarSign, Clock, Users, Activity, Palette, Rocket } from "lucide-react";

export default function IntermediateStreamPage() {
  return (
    <MainLayout>
      {/* Breadcrumbs */}
      <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-gray-500 mb-6 overflow-x-auto pb-2">
        <span className="font-bold text-gray-800">Your Education Journey - After 10th</span>
      </div>
      <div className="flex flex-wrap items-center justify-between text-xs md:text-sm text-gray-500 mb-6 overflow-x-auto pb-2 px-4 py-2 bg-white rounded-2xl border border-gray-100 shadow-sm">
        <Link href="/" className="hover:text-indigo-600 flex flex-col items-center gap-1 group">
           <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-indigo-600 group-hover:bg-indigo-50"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></div>
           <span className="text-[10px] text-gray-600 font-semibold group-hover:text-indigo-600">Home</span>
        </Link>
        <ArrowRight className="w-4 h-4 text-indigo-300" />
        <Link href="/education/after-10th" className="hover:text-indigo-600 flex flex-col items-center gap-1 group">
           <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-indigo-600 group-hover:bg-indigo-50"><Briefcase className="w-4 h-4" /></div>
           <span className="text-[10px] text-gray-600 font-semibold group-hover:text-indigo-600 text-center">After 10th<br/>Overview</span>
        </Link>
        <ArrowRight className="w-4 h-4 text-indigo-300" />
        <div className="flex flex-col items-center gap-1">
           <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center"><BookOpen className="w-4 h-4" /></div>
           <span className="text-[10px] text-gray-600 font-semibold text-center">Explore Courses</span>
        </div>
        <ArrowRight className="w-4 h-4 text-indigo-300" />
        <div className="flex flex-col items-center gap-1">
           <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center"><Wrench className="w-4 h-4" /></div>
           <span className="text-[10px] text-gray-600 font-semibold text-center">Polycet & ITI</span>
        </div>
        <ArrowRight className="w-4 h-4 text-indigo-300" />
        <div className="flex flex-col items-center gap-1">
           <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center"><Building2 className="w-4 h-4" /></div>
           <span className="text-[10px] text-gray-600 font-semibold text-center">Colleges</span>
        </div>
        <ArrowRight className="w-4 h-4 text-indigo-300" />
        <div className="flex flex-col items-center gap-1">
           <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center"><GraduationCap className="w-4 h-4" /></div>
           <span className="text-[10px] text-gray-600 font-semibold text-center">Scholarships</span>
        </div>
        <ArrowRight className="w-4 h-4 text-indigo-300" />
        <div className="flex flex-col items-center gap-1 group">
           <div className="w-10 h-10 rounded-full border border-indigo-600 bg-indigo-50 flex items-center justify-center"><Star className="w-5 h-5 text-indigo-600 fill-indigo-600" /></div>
           <span className="text-[10px] text-indigo-700 font-bold text-center">Choose Stream<br/>Final Step</span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 mb-10">
        
        {/* Main Content Area */}
        <div className="flex-1 space-y-10">
          
          {/* Hero Banner */}
          <div className="bg-indigo-50/50 rounded-3xl p-8 md:p-10 border border-indigo-100 relative overflow-hidden flex flex-col md:flex-row items-center gap-6 shadow-sm">
            <div className="flex-1 z-10 relative">
              <h1 className="text-3xl md:text-5xl font-extrabold text-indigo-950 mb-4 leading-tight">
                Choose Your <br/><span className="text-indigo-700">Intermediate Stream</span>
              </h1>
              <p className="text-indigo-900/70 mb-8 max-w-md text-sm md:text-base leading-relaxed font-medium">
                Select the stream that matches your interests and career goals. Explore subjects, future degree options, entrance exams and career opportunities.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-indigo-700 border border-indigo-200 px-6 py-3 rounded-xl font-bold shadow-sm hover:bg-indigo-50 hover:-translate-y-0.5 transition-all flex items-center gap-2 group">
                  <Scale className="w-4 h-4 text-indigo-500" /> Compare Streams
                </button>
              </div>
            </div>
            
            {/* Illustration */}
            <div className="w-full md:w-1/2 relative z-10 hidden md:block">
               <img src="https://api.dicebear.com/7.x/micah/svg?seed=chooseStream&backgroundColor=transparent" alt="Student" className="w-full h-auto drop-shadow-2xl relative z-10" />
            </div>
          </div>

          {/* Choose Your Stream */}
          <div className="bg-gradient-to-br from-indigo-50 to-white rounded-3xl p-6 md:p-8 border border-indigo-100 shadow-md relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-200 rounded-full blur-3xl opacity-20 transform translate-x-10 -translate-y-10"></div>
             <h2 className="text-2xl font-black text-indigo-950 mb-6 relative z-10">Choose Your Stream</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 relative z-10">
              {[
                { name: "MPC", subject: "Mathematics, Physics, Chemistry", color: "text-blue-600", bg: "bg-blue-100", border: "border-blue-200", icon: Calculator, jobs: ["Engineering", "Architecture", "Data Science", "AI & Robotics"], salary: "₹6 - ₹15 LPA", duration: "2 Years" },
                { name: "BiPC", subject: "Biology, Physics, Chemistry", color: "text-green-600", bg: "bg-green-100", border: "border-green-200", icon: Activity, jobs: ["MBBS / BDS", "Pharmacy", "Nursing", "Biotechnology"], salary: "₹5 - ₹12 LPA", duration: "2 Years" },
                { name: "MEC", subject: "Mathematics, Economics, Commerce", color: "text-amber-600", bg: "bg-amber-100", border: "border-amber-200", icon: TrendingUp, jobs: ["B.Com / BBA", "CA / CMA", "Banking", "Finance"], salary: "₹4 - ₹10 LPA", duration: "2 Years" },
                { name: "CEC", subject: "Civics, Economics, Commerce", color: "text-pink-600", bg: "bg-pink-100", border: "border-pink-200", icon: Scale, jobs: ["Law (Integrated)", "B.Com", "UPSC / Civil Services"], salary: "₹4 - ₹10 LPA", duration: "2 Years" },
                { name: "HEC", subject: "History, Economics, Civics", color: "text-purple-600", bg: "bg-purple-100", border: "border-purple-200", icon: BookOpen, jobs: ["Arts", "Journalism", "Social Sciences", "Teaching"], salary: "₹3 - ₹8 LPA", duration: "2 Years" },
                { name: "Vocational", subject: "Skill Based Courses", color: "text-teal-600", bg: "bg-teal-100", border: "border-teal-200", icon: Briefcase, jobs: ["IT & Software", "Electronics", "Health Care", "Hospitality"], salary: "₹3 - ₹8 LPA", duration: "1 - 2 Years" },
              ].map((stream, i) => (
                <div key={i} className={`flex flex-col border ${stream.border} rounded-2xl p-5 hover:shadow-lg transition-all cursor-pointer group bg-white h-full relative overflow-hidden`}>
                   <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
                     <ArrowRight className={`w-5 h-5 ${stream.color}`} />
                   </div>
                   <div className="flex items-center gap-4 mb-3">
                     <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${stream.bg} ${stream.color} shadow-sm group-hover:scale-110 transition-transform`}>
                        <stream.icon className="w-6 h-6" />
                     </div>
                   </div>
                   <h3 className="font-extrabold text-sm text-gray-900 leading-tight mb-2">{stream.name} <span className="text-[10px] text-gray-500 font-medium">({stream.subject})</span></h3>
                   
                   <ul className="text-[10px] text-gray-500 mb-4 flex-grow grid grid-cols-2 gap-x-2 gap-y-1.5 list-disc pl-4">
                      {stream.jobs.map((job, j) => (
                         <li key={j}>{job}</li>
                      ))}
                   </ul>
                   
                   <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
                     <div>
                       <p className="text-[9px] font-bold text-gray-500">Duration</p>
                       <p className="text-xs font-semibold text-gray-700">{stream.duration}</p>
                     </div>
                     <div className="text-right">
                       <p className="text-[9px] font-bold text-gray-500">Avg Salary</p>
                       <p className={`text-sm font-black ${stream.color}`}>{stream.salary}</p>
                     </div>
                   </div>
                 </div>
              ))}
            </div>
          </div>

          {/* Middle Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Compare Streams */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-5 border border-gray-100 shadow-sm overflow-x-auto">
              <h2 className="text-sm font-bold text-gray-900 mb-4">Compare Streams at a Glance</h2>
              <table className="w-full text-left text-[10px]">
                <thead className="text-gray-500 font-semibold border-b border-gray-100">
                  <tr>
                    <th className="py-2 px-1">Stream</th>
                    <th className="py-2 px-1">Best For</th>
                    <th className="py-2 px-1">Future Degrees</th>
                    <th className="py-2 px-1 whitespace-nowrap">Avg. Salary</th>
                    <th className="py-2 px-1">Job Opportunities</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-gray-700">
                  <tr className="hover:bg-gray-50">
                    <td className="py-2.5 px-1 text-blue-600 font-bold">MPC</td>
                    <td className="py-2.5 px-1 font-medium">Engineering & Tech</td>
                    <td className="py-2.5 px-1">B.Tech, B.Arch, B.Sc CS</td>
                    <td className="py-2.5 px-1 whitespace-nowrap">₹6 - ₹15 LPA</td>
                    <td className="py-2.5 px-1 flex text-amber-400"><Star className="w-2.5 h-2.5 fill-current"/><Star className="w-2.5 h-2.5 fill-current"/><Star className="w-2.5 h-2.5 fill-current"/><Star className="w-2.5 h-2.5 fill-current"/><Star className="w-2.5 h-2.5 fill-current"/></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-2.5 px-1 text-green-600 font-bold">BiPC</td>
                    <td className="py-2.5 px-1 font-medium">Medical & Health</td>
                    <td className="py-2.5 px-1">MBBS, BDS, B.Pharm</td>
                    <td className="py-2.5 px-1 whitespace-nowrap">₹5 - ₹12 LPA</td>
                    <td className="py-2.5 px-1 flex text-amber-400"><Star className="w-2.5 h-2.5 fill-current"/><Star className="w-2.5 h-2.5 fill-current"/><Star className="w-2.5 h-2.5 fill-current"/><Star className="w-2.5 h-2.5 fill-current"/><Star className="w-2.5 h-2.5 fill-current"/></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-2.5 px-1 text-amber-600 font-bold">MEC</td>
                    <td className="py-2.5 px-1 font-medium">Commerce & Finance</td>
                    <td className="py-2.5 px-1">B.Com, BBA, CA, CMA</td>
                    <td className="py-2.5 px-1 whitespace-nowrap">₹4 - ₹10 LPA</td>
                    <td className="py-2.5 px-1 flex text-amber-400"><Star className="w-2.5 h-2.5 fill-current"/><Star className="w-2.5 h-2.5 fill-current"/><Star className="w-2.5 h-2.5 fill-current"/><Star className="w-2.5 h-2.5 fill-current"/><Star className="w-2.5 h-2.5 fill-gray-200"/></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-2.5 px-1 text-pink-600 font-bold">CEC</td>
                    <td className="py-2.5 px-1 font-medium">Law & Govt. Jobs</td>
                    <td className="py-2.5 px-1">BA, LLB, B.Com, UPSC</td>
                    <td className="py-2.5 px-1 whitespace-nowrap">₹4 - ₹10 LPA</td>
                    <td className="py-2.5 px-1 flex text-amber-400"><Star className="w-2.5 h-2.5 fill-current"/><Star className="w-2.5 h-2.5 fill-current"/><Star className="w-2.5 h-2.5 fill-current"/><Star className="w-2.5 h-2.5 fill-gray-200"/><Star className="w-2.5 h-2.5 fill-gray-200"/></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-2.5 px-1 text-purple-600 font-bold">HEC</td>
                    <td className="py-2.5 px-1 font-medium">Arts & Civil Services</td>
                    <td className="py-2.5 px-1">BA, BSW, Journalism</td>
                    <td className="py-2.5 px-1 whitespace-nowrap">₹3 - ₹8 LPA</td>
                    <td className="py-2.5 px-1 flex text-amber-400"><Star className="w-2.5 h-2.5 fill-current"/><Star className="w-2.5 h-2.5 fill-current"/><Star className="w-2.5 h-2.5 fill-current"/><Star className="w-2.5 h-2.5 fill-gray-200"/><Star className="w-2.5 h-2.5 fill-gray-200"/></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-2.5 px-1 text-teal-600 font-bold">Vocational</td>
                    <td className="py-2.5 px-1 font-medium">Skill & Employment</td>
                    <td className="py-2.5 px-1">Diploma, IT, Certification</td>
                    <td className="py-2.5 px-1 whitespace-nowrap">₹3 - ₹8 LPA</td>
                    <td className="py-2.5 px-1 flex text-amber-400"><Star className="w-2.5 h-2.5 fill-current"/><Star className="w-2.5 h-2.5 fill-current"/><Star className="w-2.5 h-2.5 fill-current"/><Star className="w-2.5 h-2.5 fill-current"/><Star className="w-2.5 h-2.5 fill-gray-200"/></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Career Opportunities */}
            <div className="lg:col-span-3 bg-white rounded-3xl p-5 border border-gray-100 shadow-sm">
               <h2 className="text-sm font-bold text-gray-900 mb-4">Career Opportunities</h2>
               <div className="grid grid-cols-3 gap-y-4 gap-x-2">
                 {[
                   { name: "Engineer", icon: Wrench, color: "text-blue-500" },
                   { name: "Doctor", icon: HeartPulse, color: "text-green-500" },
                   { name: "Scientist", icon: Cpu, color: "text-indigo-500" },
                   { name: "CA / CMA", icon: Calculator, color: "text-amber-500" },
                   { name: "Civil Serv.", icon: Shield, color: "text-red-500" },
                   { name: "Lawyer", icon: Scale, color: "text-purple-500" },
                   { name: "Teacher", icon: BookOpen, color: "text-teal-500" },
                   { name: "Business", icon: Building2, color: "text-orange-500" },
                   { name: "Architect", icon: Palette, color: "text-pink-500" },
                   { name: "Banker", icon: TrendingUp, color: "text-blue-600" },
                   { name: "Journalist", icon: Globe, color: "text-indigo-400" },
                   { name: "Pilot", icon: Rocket, color: "text-red-400" },
                 ].map((career, i) => (
                   <div key={i} className="flex flex-col items-center gap-1.5 group cursor-pointer">
                     <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-indigo-50 transition-colors border border-gray-100">
                        <career.icon className={`w-4 h-4 ${career.color}`} />
                     </div>
                     <span className="text-[9px] font-semibold text-gray-700 text-center leading-tight">{career.name}</span>
                   </div>
                 ))}
               </div>
            </div>

            {/* Entrance Exams */}
            <div className="lg:col-span-3 bg-white rounded-3xl p-5 border border-gray-100 shadow-sm">
               <h2 className="text-sm font-bold text-gray-900 mb-4">Entrance Exams by Stream</h2>
               <div className="grid grid-cols-2 gap-y-4 gap-x-2">
                 {[
                   { name: "EAMCET", stream: "(MPC)", icon: "🔬" },
                   { name: "NEET", stream: "(BiPC)", icon: "⚕️" },
                   { name: "CA Foundation", stream: "(MEC/CEC)", icon: "📊" },
                   { name: "CLAT", stream: "(Law)", icon: "⚖️" },
                   { name: "CUET", stream: "(All Streams)", icon: "🏛️" },
                   { name: "NIFT", stream: "(Arts)", icon: "🎨" },
                   { name: "ICAR", stream: "(Agriculture)", icon: "🌱" },
                   { name: "NDA", stream: "(Defence)", icon: "🛡️" },
                 ].map((exam, i) => (
                   <div key={i} className="flex flex-col items-center gap-1 group cursor-pointer">
                     <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-sm border border-gray-100 shadow-sm group-hover:border-indigo-200 transition-colors">
                        {exam.icon}
                     </div>
                     <span className="text-[9px] font-bold text-gray-800 text-center leading-tight">{exam.name}</span>
                     <span className="text-[7px] text-gray-500 text-center">{exam.stream}</span>
                   </div>
                 ))}
               </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Scholarships */}
            <div className="lg:col-span-3 bg-white rounded-3xl p-5 border border-gray-100 shadow-sm">
              <h2 className="text-sm font-bold text-gray-900 mb-4">Scholarships After 10th</h2>
              <div className="grid grid-cols-2 gap-2">
                 <div className="flex flex-col items-center gap-1">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-xs shadow-sm border border-blue-100">🎓</div>
                    <span className="text-[8px] font-semibold text-center text-gray-600 leading-tight">NSP<br/>Scholarship</span>
                 </div>
                 <div className="flex flex-col items-center gap-1">
                    <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-xs shadow-sm border border-green-100">🏛️</div>
                    <span className="text-[8px] font-semibold text-center text-gray-600 leading-tight">State<br/>Scholarships</span>
                 </div>
                 <div className="flex flex-col items-center gap-1">
                    <div className="w-8 h-8 rounded-full bg-yellow-50 flex items-center justify-center text-xs shadow-sm border border-yellow-100">🏅</div>
                    <span className="text-[8px] font-semibold text-center text-gray-600 leading-tight">Merit<br/>Scholarships</span>
                 </div>
                 <div className="flex flex-col items-center gap-1">
                    <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-xs shadow-sm border border-purple-100">🤝</div>
                    <span className="text-[8px] font-semibold text-center text-gray-600 leading-tight">Minority<br/>Scholarships</span>
                 </div>
              </div>
            </div>

            {/* Why Selecting the Right Stream Matters */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-5 border border-gray-100 shadow-sm relative overflow-hidden">
              <h2 className="text-sm font-bold text-gray-900 mb-4">Why Selecting the Right Stream Matters?</h2>
              <ul className="space-y-2 text-[10px] text-gray-700 font-medium relative z-10">
                <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-indigo-600 mt-0.5 shrink-0" /> Helps you build a strong career foundation</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-indigo-600 mt-0.5 shrink-0" /> Opens better degree & higher education options</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-indigo-600 mt-0.5 shrink-0" /> Increases chances of success and satisfaction</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-indigo-600 mt-0.5 shrink-0" /> Leads to higher salary & good job opportunities</li>
              </ul>
              <div className="absolute right-[-20px] bottom-[-20px] opacity-20">
                 <Target className="w-32 h-32 text-pink-500" />
              </div>
            </div>

            {/* Success Stories */}
            <div className="lg:col-span-4 bg-white rounded-3xl p-5 border border-gray-100 shadow-sm">
              <h2 className="text-sm font-bold text-gray-900 mb-4">Success Stories</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Rohit&style=circle" alt="Rohit" className="w-full h-full object-cover" /></div>
                  <div>
                    <h4 className="font-bold text-[10px] text-gray-900">Rohit Kumar</h4>
                    <p className="text-[9px] text-gray-500">MPC Student</p>
                    <p className="text-[9px] text-indigo-600 font-medium">Now: Software Engineer at TCS</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha&style=circle" alt="Sneha" className="w-full h-full object-cover" /></div>
                  <div>
                    <h4 className="font-bold text-[10px] text-gray-900">Sneha Reddy</h4>
                    <p className="text-[9px] text-gray-500">BiPC Student</p>
                    <p className="text-[9px] text-indigo-600 font-medium">Now: MBBS Doctor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Action Bar */}
          <div className="bg-indigo-700 rounded-3xl p-6 relative overflow-hidden shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 text-white mt-10">
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                 <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Ready to Begin Intermediate?</h3>
                <p className="text-indigo-100 text-sm">Choose your stream and continue your educational journey. <span className="font-bold text-yellow-300">Start your career!</span></p>
              </div>
            </div>
            {/* Background pattern */}
            <div className="absolute right-0 top-0 w-64 h-64 bg-indigo-600 rounded-full blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
          </div>

        </div>

        {/* Right Sidebar */}
        <div className="w-full lg:w-[340px] space-y-6">
          
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
                  <span>Which Intermediate stream is best?</span>
                  <ArrowRight className="w-4 h-4 text-indigo-300 group-hover/q:text-indigo-600 group-hover/q:translate-x-1 transition-all" />
                </div>
                <div className="bg-white border border-indigo-50 rounded-xl p-3.5 text-[11px] font-medium text-gray-700 hover:border-indigo-300 hover:shadow-sm cursor-pointer transition-all flex items-center justify-between group/q" onClick={() => window.location.href='/chat'}>
                  <span>MPC or MEC - Which should I choose?</span>
                  <ArrowRight className="w-4 h-4 text-indigo-300 group-hover/q:text-indigo-600 group-hover/q:translate-x-1 transition-all" />
                </div>
                <div className="bg-white border border-indigo-50 rounded-xl p-3.5 text-[11px] font-medium text-gray-700 hover:border-indigo-300 hover:shadow-sm cursor-pointer transition-all flex items-center justify-between group/q" onClick={() => window.location.href='/chat'}>
                  <span>Best stream for Data Science?</span>
                  <ArrowRight className="w-4 h-4 text-indigo-300 group-hover/q:text-indigo-600 group-hover/q:translate-x-1 transition-all" />
                </div>
              </div>
              
              <button className="w-full bg-indigo-700 text-white font-bold py-3.5 rounded-xl shadow-md shadow-indigo-200 hover:bg-indigo-800 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2" onClick={() => window.location.href='/chat'}>
                Chat with AI <ArrowRight className="w-4 h-4"/>
              </button>
            </div>
          </div>

          {/* Stream Quick Info */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-900 text-lg mb-5">Stream Quick Info</h3>
            <div className="space-y-4">
              <div className="flex gap-3 items-start border-b border-gray-50 pb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0"><Calculator className="w-5 h-5"/></div>
                <div>
                  <h4 className="font-bold text-xs text-gray-900">Science Streams (MPC / BiPC)</h4>
                  <p className="text-[10px] text-gray-500 mt-0.5">High Salary & Great Career Options</p>
                </div>
              </div>
              <div className="flex gap-3 items-start border-b border-gray-50 pb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0"><TrendingUp className="w-5 h-5"/></div>
                <div>
                  <h4 className="font-bold text-xs text-gray-900">Commerce Streams (MEC / CEC)</h4>
                  <p className="text-[10px] text-gray-500 mt-0.5">Finance, Business & Govt. Jobs</p>
                </div>
              </div>
              <div className="flex gap-3 items-start border-b border-gray-50 pb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0"><Palette className="w-5 h-5"/></div>
                <div>
                  <h4 className="font-bold text-xs text-gray-900">Arts Stream (HEC)</h4>
                  <p className="text-[10px] text-gray-500 mt-0.5">Creative, Social Impact & Civil Services</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0"><Wrench className="w-5 h-5"/></div>
                <div>
                  <h4 className="font-bold text-xs text-gray-900">Vocational Stream</h4>
                  <p className="text-[10px] text-gray-500 mt-0.5">Skill Based, Job Ready & Industry Oriented</p>
                </div>
              </div>
            </div>
          </div>

          {/* Popular Intermediate Colleges */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-900 text-lg mb-6">Popular Intermediate Colleges</h3>
            
            <div className="space-y-4">
              {[
                { name: "Narayana Junior College", loc: "Hyderabad, Telangana", rating: "4.6 (832)", img: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
                { name: "Sri Chaitanya Junior College", loc: "Vijayawada, Andhra Pradesh", rating: "4.5 (784)", img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
                { name: "FIITJEE Junior College", loc: "Kochi, Kerala", rating: "4.4 (612)", img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" }
              ].map((college, i) => (
                <div key={i} className="flex gap-4 pb-4 border-b border-gray-50 last:border-0 last:pb-0 hover:bg-gray-50 p-2 -mx-2 rounded-xl transition-colors cursor-pointer group">
                  <div className="w-16 h-16 rounded-xl bg-gray-200 overflow-hidden flex-shrink-0">
                    <img src={college.img} alt={college.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-sm text-gray-800 leading-tight mb-1.5 group-hover:text-indigo-600 transition-colors">{college.name}</h4>
                    <p className="text-[11px] font-medium text-gray-500 mb-2 flex items-center gap-1"><MapPin className="w-3 h-3" /> {college.loc}</p>
                    <span className="text-[11px] font-bold text-amber-500 flex items-center gap-0.5"><Star className="w-3 h-3 fill-current" /> {college.rating}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
