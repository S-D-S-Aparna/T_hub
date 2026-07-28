"use client";

import { useParams } from "next/navigation";
import MainLayout from "@/components/layout/MainLayout";
import Link from "next/link";
import { 
  ChevronRight, ArrowRight, Bot, Star, Building2, Target, 
  Medal, Users, ShieldCheck, BookOpen, BrainCircuit, Code, Database, Cloud, LineChart, Briefcase, Video, TrendingUp, Clock
} from "lucide-react";

const skillData: Record<string, any> = {
  "agentic-ai": {
    title: "Agentic AI", theme: "purple",
    heroTitle: "Build Autonomous Agents", heroSubtitle: "Master LangChain, LLMs, and AI automation. Learn to build AI that thinks, acts, and executes tasks independently.",
    avatarUrl: "https://api.dicebear.com/7.x/notionists/svg?seed=Robot&backgroundColor=transparent", avatarIcon: "🤖",
    avatarLabels: ["LangChain", "OpenAI", "AutoGPT"],
    roles: [
      { role: "AI Engineer", desc: "Build & deploy AI systems", icon: "🧠", bg: "bg-purple-50", color: "text-purple-600" },
      { role: "Prompt Engineer", desc: "Optimize LLM outputs", icon: "✍️", bg: "bg-blue-50", color: "text-blue-600" },
      { role: "ML Ops", desc: "Scale AI infrastructure", icon: "⚙️", bg: "bg-emerald-50", color: "text-emerald-600" },
      { role: "AI Product Manager", desc: "Lead AI innovation", icon: "💡", bg: "bg-amber-50", color: "text-amber-600" }
    ],
    roadmap: [
      { step: "Phase 1", title: "Python & Data Basics", desc: "Master Python and Pandas.", status: "completed" },
      { step: "Phase 2", title: "Machine Learning Concepts", desc: "Understand NLP and Transformers.", status: "completed" },
      { step: "Phase 3", title: "LLMs & APIs", desc: "OpenAI, Claude, and local models.", status: "active" },
      { step: "Phase 4", title: "Agentic Frameworks", desc: "LangChain, AutoGen, CrewAI.", status: "upcoming" },
      { step: "Phase 5", title: "Production AI", desc: "Deploying and scaling agents.", status: "upcoming" }
    ],
    successName: "Rohit's Shift",
    successDesc: "From Web Dev to AI Engineer at Anthropic",
    successQuote: "I spent 3 months deep-diving into LangChain and completely leveled up my career. The demand is insane right now."
  },
  "cloud-computing": {
    title: "Cloud Computing", theme: "sky",
    heroTitle: "Architect the Web", heroSubtitle: "Master AWS, Azure, and GCP. Build scalable, secure, and resilient infrastructure that powers the modern internet.",
    avatarUrl: "https://api.dicebear.com/7.x/notionists/svg?seed=CloudDev&backgroundColor=transparent", avatarIcon: "☁️",
    avatarLabels: ["AWS", "Azure", "GCP"],
    roles: [
      { role: "Cloud Architect", desc: "Design cloud infrastructure", icon: "☁️", bg: "bg-sky-50", color: "text-sky-600" },
      { role: "DevOps Engineer", desc: "CI/CD & automation", icon: "⚙️", bg: "bg-emerald-50", color: "text-emerald-600" },
      { role: "SRE", desc: "Site Reliability", icon: "🛡️", bg: "bg-blue-50", color: "text-blue-600" },
      { role: "Cloud Security", desc: "Protect infrastructure", icon: "🔒", bg: "bg-purple-50", color: "text-purple-600" }
    ],
    roadmap: [
      { step: "Phase 1", title: "Networking Basics", desc: "TCP/IP, DNS, VPNs.", status: "completed" },
      { step: "Phase 2", title: "Linux & Scripting", desc: "Bash, Servers, SSH.", status: "completed" },
      { step: "Phase 3", title: "Cloud Platforms", desc: "AWS EC2, S3, IAM.", status: "active" },
      { step: "Phase 4", title: "Containers", desc: "Docker & Kubernetes.", status: "upcoming" },
      { step: "Phase 5", title: "Infrastructure as Code", desc: "Terraform & Ansible.", status: "upcoming" }
    ],
    successName: "Ananya's Journey",
    successDesc: "IT Support to Cloud Solutions Architect",
    successQuote: "Getting my AWS certification changed everything. I doubled my salary and now work on massive scale systems."
  },
  "data-science": {
    title: "Data Science", theme: "emerald",
    heroTitle: "Extract Knowledge from Data", heroSubtitle: "Master Python, SQL, and Machine Learning. Turn raw data into actionable business intelligence.",
    avatarUrl: "https://api.dicebear.com/7.x/notionists/svg?seed=DataNerd&backgroundColor=transparent", avatarIcon: "📊",
    avatarLabels: ["Python", "SQL", "Pandas"],
    roles: [
      { role: "Data Analyst", desc: "SQL & Visualization", icon: "📈", bg: "bg-emerald-50", color: "text-emerald-600" },
      { role: "Data Engineer", desc: "ETL & Pipelines", icon: "⚙️", bg: "bg-blue-50", color: "text-blue-600" },
      { role: "Data Scientist", desc: "ML & Predictive Models", icon: "🤖", bg: "bg-purple-50", color: "text-purple-600" },
      { role: "BI Developer", desc: "Tableau & PowerBI", icon: "📊", bg: "bg-amber-50", color: "text-amber-600" }
    ],
    roadmap: [
      { step: "Phase 1", title: "SQL Mastery", desc: "Queries, Joins, Window Functions.", status: "completed" },
      { step: "Phase 2", title: "Python for Data", desc: "Pandas, NumPy, Matplotlib.", status: "completed" },
      { step: "Phase 3", title: "Statistics & Math", desc: "Probability, Hypothesis testing.", status: "active" },
      { step: "Phase 4", title: "Machine Learning", desc: "Scikit-Learn, Regression, Classification.", status: "upcoming" },
      { step: "Phase 5", title: "Big Data", desc: "Spark, Hadoop, Databricks.", status: "upcoming" }
    ],
    successName: "Vikram's Pivot",
    successDesc: "Marketing to Senior Data Analyst",
    successQuote: "I loved looking at campaign numbers. Learning SQL and Python let me turn that into a highly paid career."
  },
  "cybersecurity": {
    title: "Cybersecurity", theme: "red",
    heroTitle: "Defend the Digital World", heroSubtitle: "Learn ethical hacking, network defense, and cryptography. Become the shield against cyber threats.",
    avatarUrl: "https://api.dicebear.com/7.x/notionists/svg?seed=Hacker&backgroundColor=transparent", avatarIcon: "🛡️",
    avatarLabels: ["Kali", "Network", "Crypto"],
    roles: [
      { role: "Penetration Tester", desc: "Ethical Hacking", icon: "🏴‍☠️", bg: "bg-red-50", color: "text-red-600" },
      { role: "Security Analyst", desc: "SOC & Threat Intel", icon: "👁️", bg: "bg-blue-50", color: "text-blue-600" },
      { role: "Security Engineer", desc: "Build secure systems", icon: "🏗️", bg: "bg-emerald-50", color: "text-emerald-600" },
      { role: "CISO", desc: "Security Leadership", icon: "👑", bg: "bg-purple-50", color: "text-purple-600" }
    ],
    roadmap: [
      { step: "Phase 1", title: "Networking & OS", desc: "TCP/IP, Linux, Windows Internals.", status: "completed" },
      { step: "Phase 2", title: "Security Fundamentals", desc: "CompTIA Security+ concepts.", status: "completed" },
      { step: "Phase 3", title: "Offensive Security", desc: "Pen testing, Kali Linux, Metasploit.", status: "active" },
      { step: "Phase 4", title: "Defensive Security", desc: "Firewalls, SIEM, Incident Response.", status: "upcoming" },
      { step: "Phase 5", title: "Advanced Topics", desc: "Reverse Engineering, Malware Analysis.", status: "upcoming" }
    ],
    successName: "Neha's Defense",
    successDesc: "SysAdmin to Penetration Tester",
    successQuote: "Finding vulnerabilities before the bad guys do is an incredible rush. The certification path was tough but worth it."
  },
  "full-stack": {
    title: "Full Stack Development", theme: "amber",
    heroTitle: "Build the Web", heroSubtitle: "Master React, Next.js, Node, and databases. Create high-performance, modern web applications from scratch.",
    avatarUrl: "https://api.dicebear.com/7.x/notionists/svg?seed=Frontend&backgroundColor=transparent", avatarIcon: "💻",
    avatarLabels: ["React", "Node.js", "MongoDB"],
    roles: [
      { role: "Frontend Developer", desc: "React, UI/UX, CSS", icon: "🎨", bg: "bg-pink-50", color: "text-pink-600" },
      { role: "Backend Developer", desc: "APIs, Databases, Node", icon: "⚙️", bg: "bg-blue-50", color: "text-blue-600" },
      { role: "Full Stack Dev", desc: "End-to-end development", icon: "💻", bg: "bg-amber-50", color: "text-amber-600" },
      { role: "Mobile Developer", desc: "React Native, iOS, Android", icon: "📱", bg: "bg-emerald-50", color: "text-emerald-600" }
    ],
    roadmap: [
      { step: "Phase 1", title: "HTML, CSS, JS", desc: "The core foundations.", status: "completed" },
      { step: "Phase 2", title: "Frontend Frameworks", desc: "React & Tailwind CSS.", status: "completed" },
      { step: "Phase 3", title: "Backend & APIs", desc: "Node.js, Express, REST.", status: "active" },
      { step: "Phase 4", title: "Databases", desc: "MongoDB, PostgreSQL, Prisma.", status: "upcoming" },
      { step: "Phase 5", title: "Full Stack Meta-Frameworks", desc: "Next.js, Server Actions, Deployment.", status: "upcoming" }
    ],
    successName: "Arjun's Code",
    successDesc: "Self-taught to SDE II",
    successQuote: "I spent 6 months building projects every single day. The portfolio I built got me hired over people with CS degrees."
  }
};

const defaultData = skillData["agentic-ai"];

const themeColors: Record<string, any> = {
  emerald: { bg: "bg-emerald-500", text: "text-emerald-600", bgLight: "bg-emerald-50", border: "border-emerald-100", shadow: "shadow-emerald-200/50" },
  blue: { bg: "bg-blue-500", text: "text-blue-600", bgLight: "bg-blue-50", border: "border-blue-100", shadow: "shadow-blue-200/50" },
  purple: { bg: "bg-purple-500", text: "text-purple-600", bgLight: "bg-purple-50", border: "border-purple-100", shadow: "shadow-purple-200/50" },
  sky: { bg: "bg-sky-500", text: "text-sky-600", bgLight: "bg-sky-50", border: "border-sky-100", shadow: "shadow-sky-200/50" },
  red: { bg: "bg-red-500", text: "text-red-600", bgLight: "bg-red-50", border: "border-red-100", shadow: "shadow-red-200/50" },
  amber: { bg: "bg-amber-500", text: "text-amber-600", bgLight: "bg-amber-50", border: "border-amber-100", shadow: "shadow-amber-200/50" }
};

export default function SkillDetail() {
  const { skill } = useParams();
  const slug = typeof skill === 'string' ? skill : 'agentic-ai';
  const data = skillData[slug] || defaultData;
  const t = themeColors[data.theme] || themeColors.purple;

  return (
    <MainLayout>
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-8">
        
        {/* Breadcrumb */}
        <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-gray-500 mb-6 overflow-x-auto pb-2">
          <Link href="/" className="hover:text-indigo-600 flex items-center gap-1">
             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
             <span className="hidden md:inline">Home</span>
          </Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <Link href="/upskilling" className="hover:text-indigo-600">Upskilling</Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className={`text-gray-800 font-medium border-b-2 border-${data.theme}-500 pb-0.5`}>{data.title}</span>
        </div>

        <div className="space-y-10 mb-10">
            
            {/* Hero Banner */}
            <div className={`bg-gradient-to-r from-white to-${data.theme}-50 rounded-[32px] p-8 md:p-12 border ${t.border} relative overflow-hidden flex flex-col md:flex-row items-center gap-6 shadow-sm`}>
              <div className="flex-1 z-10 relative">
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl ${t.bgLight} ${t.text} text-xs font-bold uppercase tracking-wider mb-6 border ${t.border}`}>
                  <span className="text-base">{data.avatarIcon}</span>
                  {data.title}
                </div>
                
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-[1.15]">
                  {data.heroTitle.split(' ').slice(0, -1).join(' ')} <br/>
                  <span className={t.text}>{data.heroTitle.split(' ').slice(-1).join(' ')}</span>
                </h1>
                
                <p className="text-gray-600 mb-8 max-w-md text-sm md:text-base leading-relaxed font-medium">
                  {data.heroSubtitle}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <button className={`${t.bg} text-white px-8 py-3.5 rounded-2xl font-bold shadow-lg hover:-translate-y-0.5 transition-all`}>
                    Start Roadmap
                  </button>
                  <button className={`bg-white ${t.text} px-8 py-3.5 rounded-2xl font-bold shadow-md hover:-translate-y-0.5 transition-all flex items-center gap-2 border border-gray-100`}>
                    View Resources
                  </button>
                </div>
              </div>
              
              {/* Illustration */}
              <div className="w-full md:w-[45%] relative z-10 hidden md:block h-64">
                 <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white rounded-full blur-[60px] opacity-40`}></div>
                 <img src={data.avatarUrl} alt={data.title} className="w-full h-full object-contain relative z-10 drop-shadow-2xl scale-125" />
                 
                 {/* Floating Badges */}
                 <div className="absolute top-8 -left-4 bg-white p-2.5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-2 animate-bounce delay-100 z-20">
                   <div className={`w-8 h-8 rounded-full ${t.bgLight} flex items-center justify-center text-lg`}>
                     {data.avatarIcon}
                   </div>
                   <span className="text-[10px] font-bold text-gray-800 pr-1">{data.avatarLabels[0]}</span>
                 </div>
                 
                 <div className="absolute bottom-8 left-0 bg-white p-2.5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-2 animate-bounce delay-300 z-20">
                   <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 text-lg">
                     💻
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

            {/* Roles / Categories Grid */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Target className={`w-5 h-5 ${t.text}`} /> Key Roles
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                 {data.roles.map((item: any, i: number) => (
                   <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer flex flex-col h-full">
                      <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center text-xl mb-4`}>{item.icon}</div>
                      <h3 className="font-bold text-gray-900 text-[15px] mb-1">{item.role}</h3>
                      <p className="text-xs text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                   </div>
                 ))}
              </div>
            </div>

            {/* Roadmap Stepper */}
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm relative overflow-hidden">
               <h2 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-2 relative z-10">
                 <Medal className={`w-5 h-5 ${t.text}`} /> The Ultimate Roadmap
               </h2>
               <div className="relative z-10">
                  <div className="absolute top-4 left-0 w-full h-1 bg-gray-100 rounded-full hidden md:block"></div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
                     {data.roadmap.map((phase: any, i: number) => (
                       <div key={i} className="relative">
                          {/* Dot */}
                          <div className={`hidden md:flex w-8 h-8 rounded-full border-4 border-white absolute -top-3.5 left-4 items-center justify-center
                            ${phase.status === 'completed' ? `${t.bg} text-white` : phase.status === 'active' ? `bg-white border-2 border-${data.theme}-500 shadow-sm` : 'bg-gray-200'}`}>
                             {phase.status === 'completed' && <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                          </div>
                          
                          <div className={`mt-6 md:mt-8 p-4 rounded-2xl border transition-all hover:shadow-sm
                             ${phase.status === 'completed' ? `bg-${data.theme}-50/50 border-${data.theme}-100` : phase.status === 'active' ? `bg-white border-${data.theme}-200 shadow-md` : 'bg-gray-50 border-gray-100'}`}>
                             <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider mb-2 inline-block ${phase.status === 'completed' ? `bg-${data.theme}-100 ${t.text}` : phase.status === 'active' ? `${t.bg} text-white` : 'bg-gray-200 text-gray-500'}`}>
                               {phase.step}
                             </span>
                             <h4 className="font-bold text-gray-900 text-sm mb-1">{phase.title}</h4>
                             <p className="text-xs text-gray-500 font-medium">{phase.desc}</p>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
            </div>

            {/* Bottom Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
               {/* Companies / Hubs */}
               <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm">
                  <h3 className="font-bold text-gray-900 text-lg mb-6 flex items-center gap-2">
                     <Building2 className={`w-5 h-5 ${t.text}`} /> Top Hiring Companies
                  </h3>
                  <div className="space-y-4">
                     {[
                       { name: "Google & Microsoft", desc: "For AI and Cloud Architecture.", icon: "G" },
                       { name: "Anthropic & OpenAI", desc: "Leading Agentic AI research.", icon: "O" },
                       { name: "Meta & Amazon", desc: "Massive scale Data and Engineering.", icon: "M" }
                     ].map((c, i) => (
                       <div key={i} className="flex items-center justify-between p-4 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all cursor-pointer group">
                          <div className="flex items-center gap-4">
                             <div className={`w-12 h-12 rounded-xl ${t.bgLight} ${t.text} font-black text-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                               {c.icon}
                             </div>
                             <div>
                               <h4 className="font-bold text-gray-900">{c.name}</h4>
                               <p className="text-xs text-gray-500">{c.desc}</p>
                             </div>
                          </div>
                          <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-gray-900 transition-colors" />
                       </div>
                     ))}
                  </div>
               </div>

               {/* Video Embed */}
               <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm flex flex-col">
                  <h3 className="font-bold text-gray-900 text-lg mb-6 flex items-center gap-2">
                     <Video className={`w-5 h-5 ${t.text}`} /> Skill Bootcamp Preview
                  </h3>
                  <div className="flex-1 rounded-2xl overflow-hidden bg-gray-100 relative group">
                     <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                       <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                         <div className={`w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-${data.theme}-500 border-b-[8px] border-b-transparent ml-1`}></div>
                       </div>
                     </div>
                     <img src={`https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80`} alt="Preview" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                     <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  </div>
               </div>
          </div>
          
          {/* Bottom Grid: Insights & Success Stories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Switch Career Stats */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm h-full">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-900 flex items-center gap-2">
                  <Briefcase className={`w-5 h-5 ${t.text}`} /> Career Switch Stats
                </h3>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Demand Growth (YoY)", stat: "+145%", icon: <TrendingUp className="w-4 h-4 text-emerald-500" /> },
                  { label: "Avg Transition Time", stat: "6-8 Mos", icon: <Clock className="w-4 h-4 text-amber-500" /> },
                  { label: "Remote Opportunities", stat: "High", icon: <Cloud className="w-4 h-4 text-sky-500" /> },
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col gap-1 pb-4 border-b border-gray-50 last:border-0 last:pb-0">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider flex items-center justify-between">
                       {stat.label}
                       {stat.icon}
                    </span>
                    <span className="text-xl font-bold text-gray-900">
                      {stat.stat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Legendary Inspiration */}
            <div className="bg-[#0f172a] rounded-3xl p-6 relative overflow-hidden group h-full flex flex-col justify-between">
               <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
               <div className={`absolute -right-10 -top-10 w-32 h-32 ${t.bg} opacity-30 rounded-full blur-[40px] group-hover:opacity-40 transition-opacity`}></div>
               
               <div className="relative z-10 flex flex-col h-full">
                 <div className="flex items-center gap-2 mb-4">
                   <div className={`w-8 h-8 rounded-lg ${t.bg} bg-opacity-20 flex items-center justify-center`}>
                     <Star className={`w-4 h-4 ${t.text} brightness-150`} />
                   </div>
                   <h3 className="font-bold text-white tracking-wide text-sm uppercase">Success Story</h3>
                 </div>
                 
                 <div className="mb-6 flex-1 flex flex-col justify-center">
                   <h4 className="text-white font-bold text-lg leading-tight mb-1">{data.successName}</h4>
                   <p className="text-gray-400 text-xs font-medium mb-3">{data.successDesc}</p>
                   <p className={`text-gray-300 text-xs leading-relaxed italic border-l-2 border-${data.theme}-500 pl-3`}>
                     &quot;{data.successQuote}&quot;
                   </p>
                 </div>
                 
                 <button className="w-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold py-2.5 rounded-xl backdrop-blur-md transition-all border border-white/10 mt-auto">
                   Read Full Story
                 </button>
               </div>
            </div>
          </div>

        </div>
      </div>
    </MainLayout>
  );
}
