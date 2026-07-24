"use client";

import { useParams } from "next/navigation";
import CompetitiveLayout from "@/components/layout/CompetitiveLayout";
import Link from "next/link";
import { 
  ChevronRight, ArrowRight, Bot, Star, Building2, Target, 
  Medal, Users, ShieldCheck, BookOpen, BrainCircuit
} from "lucide-react";

const examData: Record<string, any> = {
  "civil-services": {
    title: "Civil Services", theme: "emerald",
    heroTitle: "Serve the Nation", heroSubtitle: "Prestige, power, and public service. Discover the definitive roadmap to crack UPSC and State PSC exams.",
    avatarUrl: "https://api.dicebear.com/7.x/notionists/svg?seed=UPSC&backgroundColor=transparent", avatarIcon: "🏛️",
    avatarLabels: ["IAS", "IPS", "IFS"],
    roles: [
      { role: "IAS Officer", desc: "District administration & policy", icon: "🏛️", bg: "bg-emerald-50", color: "text-emerald-600" },
      { role: "IPS Officer", desc: "Law enforcement & police", icon: "🛡️", bg: "bg-blue-50", color: "text-blue-600" },
      { role: "IFS Officer", desc: "Foreign policy & diplomacy", icon: "🌍", bg: "bg-teal-50", color: "text-teal-600" },
      { role: "IRS Officer", desc: "Revenue & taxation", icon: "💰", bg: "bg-amber-50", color: "text-amber-600" },
    ],
    roadmap: [
      { step: "Step 1", title: "Preliminary Exam", desc: "Objective MCQs (GS & CSAT)", status: "completed" },
      { step: "Step 2", title: "Main Exam", desc: "9 Descriptive Papers", status: "active" },
      { step: "Step 3", title: "Interview", desc: "Personality Test", status: "pending" },
      { step: "Step 4", title: "LBSNAA Training", desc: "Foundation Course", status: "pending" },
    ],
    academies: [
      { name: "Vajiram & Ravi", loc: "Delhi", type: "Elite" },
      { name: "Vision IAS", loc: "Delhi", type: "Popular" },
      { name: "KSG India", loc: "Multiple", type: "Private" },
      { name: "Rau's IAS", loc: "Delhi", type: "Elite" },
    ],
    tips: ["Read 'The Hindu' or 'Indian Express' daily", "Practice answer writing daily", "Revise NCERTs multiple times", "Take regular mock tests", "Stay updated on current affairs"],
    resources: ["NCERT Books (Class 6-12)", "Indian Polity by M. Laxmikanth", "Spectrum Modern History", "Economic Survey"],
    aiQueries: ["How to choose optional subject?", "Best strategy for CSAT?"],
    salary: [
      { level: "Entry Level (SDM/ASP)", desc: "Starting Pay Scale", amt: "₹56,100 + Allowances" },
      { level: "Mid Level (DM/SSP)", desc: "After 9+ Years", amt: "₹1,18,500 + Allowances" },
      { level: "Top Level (Chief Secretary)", desc: "Apex Scale", amt: "₹2,25,000 (Fixed)" },
    ],
    successName: "Tina Dabi", successDesc: "IAS Officer (AIR 1, 2015)", successQuote: "Consistency is the key to cracking UPSC.", successImage: "/images/inspiration/tina-dabi.jpg",
  },
  "engineering": {
    title: "Engineering", theme: "blue",
    heroTitle: "Crack the Code", heroSubtitle: "Innovation, technology, and problem-solving. Master the roadmap to crack JEE and top engineering entrance exams.",
    avatarUrl: "https://api.dicebear.com/7.x/notionists/svg?seed=Engineering&backgroundColor=transparent", avatarIcon: "📐",
    avatarLabels: ["IIT", "NIT", "BITS"],
    roles: [
      { role: "JEE Main", desc: "Gateway to NITs & IIITs", icon: "💻", bg: "bg-blue-50", color: "text-blue-600" },
      { role: "JEE Advanced", desc: "Ticket to prestigious IITs", icon: "🚀", bg: "bg-indigo-50", color: "text-indigo-600" },
      { role: "BITSAT", desc: "Entry to BITS Pilani", icon: "⚙️", bg: "bg-cyan-50", color: "text-cyan-600" },
      { role: "State CETs", desc: "Top State Govt/Pvt Colleges", icon: "🏫", bg: "bg-sky-50", color: "text-sky-600" },
    ],
    roadmap: [
      { step: "Step 1", title: "Class 11 & 12", desc: "Build strong fundamentals", status: "completed" },
      { step: "Step 2", title: "JEE Main", desc: "Clear cutoff for Advanced", status: "active" },
      { step: "Step 3", title: "JEE Advanced", desc: "Top 2.5 lakh candidates", status: "pending" },
      { step: "Step 4", title: "JoSAA Counselling", desc: "Seat allocation", status: "pending" },
    ],
    academies: [
      { name: "Allen Career Institute", loc: "Kota", type: "Elite" },
      { name: "FIITJEE", loc: "Multiple", type: "Popular" },
      { name: "Resonance", loc: "Kota", type: "Private" },
      { name: "Aakash Institute", loc: "Multiple", type: "Elite" },
    ],
    tips: ["Focus heavily on concept clarity", "Solve 10+ years PYQs", "Give weekly mock tests", "Analyze mistakes thoroughly", "Master time management"],
    resources: ["HC Verma for Physics", "Cengage Math Series", "NCERT for Chemistry", "Previous Year Papers"],
    aiQueries: ["How to balance board exams and JEE?", "Best books for organic chemistry?"],
    salary: [
      { level: "Average Tier 3 College", desc: "Starting Package", amt: "₹4L - ₹6L / annum" },
      { level: "NIT / Tier 1.5", desc: "Starting Package", amt: "₹10L - ₹15L / annum" },
      { level: "Top IIT / CS Branch", desc: "Starting Package", amt: "₹20L - ₹1Cr+ / annum" },
    ],
    successName: "Karthik Reddy", successDesc: "IIT Bombay Alumni", successQuote: "Hard work beats talent when talent doesn't work hard.", successImage: "/images/inspiration/karthik-reddy.jpg",
  },
  "medical": {
    title: "Medical", theme: "rose",
    heroTitle: "Heal the World", heroSubtitle: "Dedication, empathy, and science. Your ultimate guide to cracking NEET and becoming a doctor.",
    avatarUrl: "https://api.dicebear.com/7.x/notionists/svg?seed=Doctor&backgroundColor=transparent", avatarIcon: "🩺",
    avatarLabels: ["MBBS", "BDS", "AIIMS"],
    roles: [
      { role: "NEET UG", desc: "Entrance for MBBS/BDS", icon: "🩺", bg: "bg-rose-50", color: "text-rose-600" },
      { role: "NEET PG", desc: "MD/MS Specialization", icon: "⚕️", bg: "bg-pink-50", color: "text-pink-600" },
      { role: "INI CET", desc: "AIIMS, JIPMER, PGIMER", icon: "🏥", bg: "bg-red-50", color: "text-red-600" },
      { role: "AIAPGET", desc: "AYUSH Post Graduation", icon: "🌿", bg: "bg-orange-50", color: "text-orange-600" },
    ],
    roadmap: [
      { step: "Step 1", title: "Class 11 & 12 (PCB)", desc: "Master NCERT Biology", status: "completed" },
      { step: "Step 2", title: "NEET UG Exam", desc: "720 Marks Objective Test", status: "active" },
      { step: "Step 3", title: "MCC Counselling", desc: "All India & State Quota", status: "pending" },
      { step: "Step 4", title: "Medical College", desc: "5.5 Years MBBS Course", status: "pending" },
    ],
    academies: [
      { name: "Aakash Institute", loc: "Multiple", type: "Elite" },
      { name: "Allen Career Institute", loc: "Kota", type: "Popular" },
      { name: "Physics Wallah", loc: "Online/Offline", type: "Accessible" },
      { name: "Sri Chaitanya", loc: "South India", type: "Elite" },
    ],
    tips: ["NCERT Biology is your Bible", "Practice physics numericals daily", "Give mock tests in 2-5 PM slot", "Memorize formulas and exceptions", "Revise thoroughly in the last month"],
    resources: ["NCERT Biology (Class 11 & 12)", "Objective NCERT at your Fingertips", "DC Pandey Physics", "Previous Year Papers"],
    aiQueries: ["How to score 340+ in Biology?", "Best test series for NEET?"],
    salary: [
      { level: "Junior Resident (MBBS)", desc: "Stipend / Govt Hospital", amt: "₹50,000 - ₹90,000 / month" },
      { level: "Senior Resident (MD/MS)", desc: "Post Specialization", amt: "₹1L - ₹1.5L / month" },
      { level: "Consultant / Surgeon", desc: "Private Practice/Hospitals", amt: "₹2L - ₹10L+ / month" },
    ],
    successName: "Dr. Priya Iyer", successDesc: "AIIMS Delhi Graduate", successQuote: "A doctor's journey begins with relentless perseverance.", successImage: "/images/inspiration/dr-priya-iyer.jpg",
  },
  "banking": {
    title: "Banking & SSC", theme: "orange",
    heroTitle: "Secure Your Future", heroSubtitle: "Stability, growth, and government perks. Navigate the roadmap to crack banking and SSC exams.",
    avatarUrl: "https://api.dicebear.com/7.x/notionists/svg?seed=Banking&backgroundColor=transparent", avatarIcon: "🏦",
    avatarLabels: ["PO", "Clerk", "CGL"],
    roles: [
      { role: "IBPS / SBI PO", desc: "Probationary Officer Roles", icon: "💼", bg: "bg-orange-50", color: "text-orange-600" },
      { role: "SSC CGL", desc: "Group B & C Govt Posts", icon: "🏛️", bg: "bg-blue-50", color: "text-blue-600" },
      { role: "RBI Grade B", desc: "Central Bank Management", icon: "🏦", bg: "bg-teal-50", color: "text-teal-600" },
      { role: "Clerical Exams", desc: "Bank Clerk & Assistants", icon: "📝", bg: "bg-amber-50", color: "text-amber-600" },
    ],
    roadmap: [
      { step: "Step 1", title: "Preliminary Exam", desc: "Speed and Accuracy Test", status: "completed" },
      { step: "Step 2", title: "Main Exam", desc: "In-depth Knowledge Test", status: "active" },
      { step: "Step 3", title: "Interview", desc: "For PO / Officer Posts", status: "pending" },
      { step: "Step 4", title: "Document Verification", desc: "Final Selection", status: "pending" },
    ],
    academies: [
      { name: "Mahendras", loc: "Multiple", type: "Popular" },
      { name: "Career Power (Adda247)", loc: "Multiple", type: "Elite" },
      { name: "KD Campus", loc: "Delhi", type: "Elite SSC" },
      { name: "Testbook", loc: "Online", type: "Platform" },
    ],
    tips: ["Improve calculation speed for Quant", "Read newspaper for English & GA", "Practice puzzles and seating arrangements", "Take daily section-wise quizzes", "Analyze mock test percentiles"],
    resources: ["RS Aggarwal Quantitative Aptitude", "SP Bakshi Objective English", "Lucent's General Knowledge", "Daily Current Affairs capsules"],
    aiQueries: ["How to increase speed in bank exams?", "Difference between SSC CGL and Bank PO?"],
    salary: [
      { level: "Clerk / Assistant", desc: "Starting Gross Salary", amt: "₹35,000 - ₹40,000 / month" },
      { level: "Bank PO / SSC CGL Inspector", desc: "Starting Gross Salary", amt: "₹60,000 - ₹75,000 / month" },
      { level: "RBI Grade B / Officer Level", desc: "Starting Gross Salary", amt: "₹1,00,000+ / month" },
    ],
    successName: "Mayank Singh", successDesc: "SSC CGL AIR 3", successQuote: "Speed and accuracy are the twin pillars of success here.", successImage: "/images/inspiration/mayank-singh.jpg",
  },
  "management": {
    title: "Management", theme: "purple",
    heroTitle: "Lead the Future", heroSubtitle: "Business strategy, networking, and leadership. Build your roadmap to crack CAT and enter top IIMs.",
    avatarUrl: "https://api.dicebear.com/7.x/notionists/svg?seed=Management&backgroundColor=transparent", avatarIcon: "📊",
    avatarLabels: ["CAT", "IIM", "MBA"],
    roles: [
      { role: "CAT", desc: "Gateway to 20 IIMs", icon: "🐯", bg: "bg-purple-50", color: "text-purple-600" },
      { role: "XAT", desc: "XLRI & Top Private B-Schools", icon: "📈", bg: "bg-indigo-50", color: "text-indigo-600" },
      { role: "GMAT", desc: "Global & Executive MBA", icon: "🌍", bg: "bg-sky-50", color: "text-sky-600" },
      { role: "SNAP / NMAT", desc: "Symbiosis & NMIMS", icon: "🎯", bg: "bg-rose-50", color: "text-rose-600" },
    ],
    roadmap: [
      { step: "Step 1", title: "Aptitude Exam", desc: "CAT, XAT, NMAT, etc.", status: "completed" },
      { step: "Step 2", title: "Shortlisting", desc: "Based on percentiles & profile", status: "active" },
      { step: "Step 3", title: "WAT & GD", desc: "Writing and Group Discussion", status: "pending" },
      { step: "Step 4", title: "Personal Interview", desc: "Final Selection Round", status: "pending" },
    ],
    academies: [
      { name: "TIME", loc: "Multiple", type: "Elite" },
      { name: "Career Launcher", loc: "Multiple", type: "Popular" },
      { name: "IMS", loc: "Multiple", type: "Elite" },
      { name: "Unacademy / iQuanta", loc: "Online", type: "Platform" },
    ],
    tips: ["Focus on reading comprehension", "Practice DILR sets daily", "Master mental math for Quant", "Build a strong profile (Certifications, NGO)", "Give mock tests and analyze deeply"],
    resources: ["Arun Sharma for Quant", "Word Power Made Easy", "Previous Year CAT Papers", "Newspaper Editorials (Mint, Hindu)"],
    aiQueries: ["How important are 10th/12th marks for IIMs?", "Best strategy to tackle DILR section?"],
    salary: [
      { level: "Tier 3 B-School", desc: "Average Package", amt: "₹5L - ₹8L / annum" },
      { level: "Tier 2 / New IIMs", desc: "Average Package", amt: "₹12L - ₹18L / annum" },
      { level: "Old IIMs / Top 10 B-Schools", desc: "Average Package", amt: "₹25L - ₹35L+ / annum" },
    ],
    successName: "Neha Sharma", successDesc: "IIM Ahmedabad Alumnus", successQuote: "Management is doing things right; leadership is doing the right things.", successImage: "/images/inspiration/neha-sharma.jpg",
  }
};

export default function DynamicExamCategoryPage() {
  const params = useParams();
  const slug = (params.exam as string)?.toLowerCase();
  
  // Fallback to engineering if not found
  const data = examData[slug] || examData['engineering'];

  const getThemeClasses = (theme: string) => {
    switch (theme) {
      case 'emerald': return { text: 'text-emerald-600', textDark: 'text-emerald-950', bg: 'bg-emerald-600', bgHover: 'hover:bg-emerald-700', gradFrom: 'from-emerald-50', gradTo: 'to-green-50', border: 'border-emerald-100', bgLight: 'bg-emerald-100' };
      case 'blue': return { text: 'text-blue-600', textDark: 'text-blue-950', bg: 'bg-blue-600', bgHover: 'hover:bg-blue-700', gradFrom: 'from-blue-50', gradTo: 'to-indigo-50', border: 'border-blue-100', bgLight: 'bg-blue-100' };
      case 'rose': return { text: 'text-rose-600', textDark: 'text-rose-950', bg: 'bg-rose-600', bgHover: 'hover:bg-rose-700', gradFrom: 'from-rose-50', gradTo: 'to-pink-50', border: 'border-rose-100', bgLight: 'bg-rose-100' };
      case 'orange': return { text: 'text-orange-600', textDark: 'text-orange-950', bg: 'bg-orange-600', bgHover: 'hover:bg-orange-700', gradFrom: 'from-orange-50', gradTo: 'to-amber-50', border: 'border-orange-100', bgLight: 'bg-orange-100' };
      case 'purple': return { text: 'text-purple-600', textDark: 'text-purple-950', bg: 'bg-purple-600', bgHover: 'hover:bg-purple-700', gradFrom: 'from-purple-50', gradTo: 'to-fuchsia-50', border: 'border-purple-100', bgLight: 'bg-purple-100' };
      default: return { text: 'text-indigo-600', textDark: 'text-indigo-950', bg: 'bg-indigo-600', bgHover: 'hover:bg-indigo-700', gradFrom: 'from-indigo-50', gradTo: 'to-blue-50', border: 'border-indigo-100', bgLight: 'bg-indigo-100' };
    }
  };

  const t = getThemeClasses(data.theme);

  return (
    <CompetitiveLayout>
      {/* Breadcrumb Journey */}
      <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-gray-500 mb-6 overflow-x-auto pb-2 hide-scrollbar">
        <Link href="/" className={`hover:${t.text} flex items-center gap-1`}>
           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
           <span className="hidden md:inline">Home</span>
        </Link>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <Link href="/competitive-exams" className={`hover:${t.text} font-medium`}>Exams</Link>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span className={`text-gray-800 font-medium border-b-2 border-${data.theme}-600 pb-0.5 capitalize`}>{data.title}</span>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span className="text-gray-500">Preparation Roadmap</span>
      </div>

      <div className="flex flex-col xl:flex-row gap-8 mb-10">
        
        {/* Main Content Area */}
        <div className="flex-1 space-y-8">
          
          {/* Hero Banner */}
          <div className={`bg-gradient-to-r ${t.gradFrom} ${t.gradTo} rounded-[32px] p-8 md:p-12 border ${t.border} relative overflow-hidden flex flex-col md:flex-row items-center gap-6 shadow-sm`}>
            <div className="flex-1 z-10 relative">
              <h1 className={`text-4xl md:text-5xl font-extrabold ${t.textDark} mb-4 leading-[1.15]`}>
                {data.heroTitle} <br/><span className={t.text}>Your {data.title} Journey</span>
              </h1>
              <p className={`text-${data.theme}-900/70 mb-8 max-w-md text-sm md:text-base leading-relaxed font-medium`}>
                {data.heroSubtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <button className={`${t.bg} text-white px-8 py-3.5 rounded-2xl font-bold shadow-lg shadow-${data.theme}-200/50 ${t.bgHover} hover:-translate-y-0.5 transition-all`}>
                  Start Preparation
                </button>
              </div>
            </div>
            
            {/* Animated Illustration */}
            <div className="w-full md:w-96 relative z-10 hidden md:block">
              <div className="relative w-full h-64 overflow-visible flex items-center justify-center">
                <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-${data.theme}-300 via-gray-300 to-${data.theme}-300 rounded-full blur-[60px] opacity-30`}></div>
                
                {/* Custom Avatar */}
                <img src={data.avatarUrl} alt={data.title} className={`w-48 h-48 relative z-10 drop-shadow-2xl ${t.bgLight} rounded-full border-4 border-white shadow-xl scale-110`} />
                
                {/* Floating Elements */}
                <div className="absolute top-4 left-4 bg-white p-2.5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-2 animate-bounce delay-100 z-20">
                  <div className={`w-8 h-8 rounded-full ${t.bgLight} flex items-center justify-center ${t.text} text-lg`}>
                    {data.avatarIcon}
                  </div>
                  <span className="text-[10px] font-bold text-gray-800 pr-1">{data.avatarLabels[0]}</span>
                </div>
                
                <div className="absolute bottom-8 left-0 bg-white p-2.5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-2 animate-bounce delay-300 z-20">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 text-lg">
                    📚
                  </div>
                  <span className="text-[10px] font-bold text-gray-800 pr-1">{data.avatarLabels[1]}</span>
                </div>
                
                <div className="absolute top-16 right-0 bg-white p-2.5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-2 animate-bounce delay-500 z-20">
                  <div className={`w-8 h-8 rounded-full ${t.bgLight} flex items-center justify-center ${t.text}`}>
                     <Star className="w-4 h-4 fill-current" />
                  </div>
                  <span className="text-[10px] font-bold text-gray-800 pr-1">{data.avatarLabels[2]}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Exam Categories Grid */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Top Exams in this Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               {data.roles.map((item: any, i: number) => (
                 <div key={i} className="bg-white rounded-[24px] p-5 border border-gray-100 shadow-sm hover:shadow-xl hover:border-gray-200 transition-all cursor-pointer flex flex-col h-full group hover:-translate-y-1">
                    <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>{item.icon}</div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{item.role}</h3>
                    <p className="text-[11px] text-gray-500 flex-grow">{item.desc}</p>
                 </div>
               ))}
            </div>
          </div>

          {/* The Roadmap Stepper */}
          <div className="bg-white rounded-[24px] p-6 md:p-8 border border-gray-100 shadow-sm">
             <h2 className="text-2xl font-bold text-gray-900 mb-8">Preparation Roadmap</h2>
             <div className="relative">
                <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 rounded-full hidden md:block"></div>
                <div className={`absolute top-1/2 left-0 w-3/4 h-1 ${t.bg} -translate-y-1/2 rounded-full hidden md:block z-0`}></div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
                   {data.roadmap.map((phase: any, i: number) => (
                     <div key={i} className={`bg-white p-5 rounded-2xl border-2 shadow-sm transition-transform hover:-translate-y-1 cursor-pointer
                        ${phase.status === 'completed' ? `border-${data.theme}-200 shadow-${data.theme}-100` : phase.status === 'active' ? `border-${data.theme}-600 shadow-md shadow-${data.theme}-200` : 'border-gray-100 opacity-70'}`}>
                        <div className="flex items-center justify-between mb-3">
                           <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${phase.status === 'completed' ? `bg-${data.theme}-100 text-${data.theme}-700` : phase.status === 'active' ? `bg-${data.theme}-600 text-white` : 'bg-gray-100 text-gray-500'}`}>
                             {phase.step}
                           </span>
                           {phase.status === 'completed' && <ShieldCheck className={`w-5 h-5 text-${data.theme}-600`} />}
                           {phase.status === 'active' && <Target className={`w-5 h-5 text-${data.theme}-600`} />}
                        </div>
                        <h4 className="font-bold text-gray-900 mb-1.5">{phase.title}</h4>
                        <p className="text-[11px] text-gray-500 leading-relaxed">{phase.desc}</p>
                     </div>
                   ))}
                </div>
             </div>
          </div>

          {/* Bottom Grid: 2 Columns -> 4 Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
             {/* Top Academies */}
             <div className="bg-white rounded-[24px] p-6 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
                   <Building2 className={`w-5 h-5 ${t.text}`} /> Top Coaching Institutes
                </h3>
                <div className="space-y-4">
                   {data.academies.map((inst: any, i: number) => (
                     <div key={i} className={`flex gap-4 p-3 rounded-xl border border-gray-50 hover:bg-${data.theme}-50 hover:border-${data.theme}-100 transition-colors cursor-pointer group`}>
                        <div className={`w-12 h-12 ${t.bgLight} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:${t.bg} group-hover:text-white transition-colors`}>
                           <Building2 className="w-5 h-5" />
                        </div>
                        <div>
                           <h4 className={`font-bold text-gray-900 text-[13px] group-hover:${t.text}`}>{inst.name}</h4>
                           <p className="text-[11px] text-gray-500 mb-1">{inst.loc}</p>
                           <span className={`text-[9px] font-bold ${t.text} ${t.bgLight} px-2 py-0.5 rounded-full`}>{inst.type}</span>
                        </div>
                     </div>
                   ))}
                </div>
             </div>

             {/* Tips & Resources */}
             <div className="grid grid-cols-1 gap-6">
                <div className="bg-white rounded-[24px] p-6 border border-gray-100 shadow-sm">
                   <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <BrainCircuit className="w-5 h-5 text-gray-600" /> How to Crack - Expert Tips
                   </h3>
                   <div className="space-y-2 text-[11px] text-gray-700 font-medium">
                      {data.tips.map((tip: string, i: number) => (
                         <p key={i} className="flex items-center gap-2"><span className={`w-1.5 h-1.5 rounded-full bg-gray-400`}></span> {tip}</p>
                      ))}
                   </div>
                </div>

                <div className={`bg-gradient-to-r ${t.gradFrom} ${t.gradTo} rounded-[24px] p-6 border ${t.border} shadow-sm`}>
                   <h3 className={`font-bold ${t.textDark} mb-4 flex items-center gap-2`}>
                      <BookOpen className={`w-5 h-5 ${t.text}`} /> Essential Study Material
                   </h3>
                   <div className="space-y-2 text-[11px] text-gray-700 font-medium">
                      {data.resources.map((res: string, i: number) => (
                         <p key={i} className="flex items-center gap-2"><span className={`w-1.5 h-1.5 rounded-full ${t.bg}`}></span> {res}</p>
                      ))}
                   </div>
                </div>
             </div>
          </div>
          
        </div>

        {/* Right Sidebar */}
        <div className="w-full xl:w-[320px] space-y-6">
          
          {/* AI Assistant */}
          <div className={`bg-white rounded-3xl p-6 border ${t.border} shadow-sm relative overflow-hidden group`}>
            <div className={`absolute inset-0 bg-gradient-to-br ${t.gradFrom} to-white z-0 opacity-80`}></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform group-hover:shadow-md">
                  <Bot className={`w-6 h-6 ${t.text}`} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 flex items-center gap-1 text-lg">AI Mentor <span className="text-yellow-500">✨</span></h3>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-6 font-medium">Ask me about syllabus, cut-offs, strategy or eligibility for {data.title}.</p>
              
              <div className="space-y-3 mb-6">
                {data.aiQueries.map((q: string, i: number) => (
                  <div key={i} className={`bg-white border border-${data.theme}-50 rounded-xl p-3.5 text-xs font-medium text-gray-700 hover:border-${data.theme}-300 hover:shadow-sm cursor-pointer transition-all flex items-center justify-between group/q`}>
                    <span>{q}</span>
                    <ArrowRight className={`w-3.5 h-3.5 text-${data.theme}-300 group-hover/q:${t.text} group-hover/q:translate-x-1 transition-all`} />
                  </div>
                ))}
              </div>
              
              <button className={`w-full ${t.bg} text-white font-bold py-3.5 rounded-xl shadow-md shadow-${data.theme}-200 ${t.bgHover} hover:-translate-y-0.5 transition-all`}>
                Ask Mentor &rarr;
              </button>
            </div>
          </div>
          
          {/* Salary Insights */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
             <h3 className="font-bold text-gray-900 mb-5">Earnings & Salary Insights</h3>
             
             <div className={`relative border-l-2 border-${data.theme}-100 ml-3 space-y-6`}>
                {data.salary.map((sal: any, i: number) => (
                  <div key={i} className="relative pl-5">
                     <div className={`absolute w-3 h-3 ${t.bg} rounded-full -left-[7px] top-1.5 border-2 border-white`}></div>
                     <h4 className="font-bold text-gray-900 text-sm">{sal.level}</h4>
                     <p className="text-[11px] text-gray-500 mb-1">{sal.desc}</p>
                     <p className={`text-xs font-bold ${t.text}`}>{sal.amt}</p>
                  </div>
                ))}
             </div>
          </div>
          
          {/* Success Story */}
          <div className="bg-white rounded-3xl p-1 border border-amber-200 shadow-sm overflow-hidden group cursor-pointer">
             <div className="bg-amber-50 rounded-[22px] p-5 relative overflow-hidden">
                <div className="absolute -right-4 -bottom-4 opacity-10">
                   <Medal className="w-24 h-24 text-amber-900" />
                </div>
                <h3 className="font-bold text-amber-900 text-sm mb-4">Legendary Inspiration</h3>
                <div className="flex gap-3">
                   <img src={data.successImage || `https://api.dicebear.com/7.x/avataaars/svg?seed=${data.successName}&style=circle`} alt={data.successName} className="w-14 h-14 bg-white rounded-full shadow-sm border-2 border-white object-cover" />
                   <div>
                      <h4 className="font-bold text-gray-900 text-[13px]">{data.successName}</h4>
                      <p className="text-[10px] text-gray-600 font-medium mb-1">{data.successDesc}</p>
                      <p className="text-[10px] text-gray-700 leading-snug">"{data.successQuote}"</p>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </CompetitiveLayout>
  );
}
