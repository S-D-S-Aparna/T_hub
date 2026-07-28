"use client";

import { useParams } from "next/navigation";
import MainLayout from "@/components/layout/MainLayout";
import Link from "next/link";
import { 
  ChevronRight, ArrowRight, Bot, Star, Building2, Target, 
  Medal, Users, ShieldCheck, BookOpen, BrainCircuit
} from "lucide-react";

const activityData: Record<string, any> = {
  "content-creators": {
    title: "Content Creators", theme: "fuchsia",
    heroTitle: "Build Your Audience", heroSubtitle: "Storytelling, algorithms, and going viral. Build your audience and turn your passion into a full-time creator career.",
    avatarUrl: "https://api.dicebear.com/7.x/notionists/svg?seed=Creator&backgroundColor=transparent", avatarIcon: "📸",
    avatarLabels: ["YouTube", "Insta", "TikTok"],
    roles: [
      { role: "Vlogger", desc: "Lifestyle & daily stories", icon: "📹", bg: "bg-fuchsia-50", color: "text-fuchsia-600" },
      { role: "Tech Reviewer", desc: "Gadgets & software", icon: "💻", bg: "bg-blue-50", color: "text-blue-600" },
      { role: "Streamer", desc: "Gaming & live interaction", icon: "🎮", bg: "bg-purple-50", color: "text-purple-600" },
      { role: "Podcaster", desc: "Audio storytelling & interviews", icon: "🎙️", bg: "bg-orange-50", color: "text-orange-600" },
    ],
    roadmap: [
      { step: "Phase 1", title: "Find Your Niche", desc: "Identify your unique voice", status: "completed" },
      { step: "Phase 2", title: "First 10K Subs", desc: "Consistency & quality", status: "active" },
      { step: "Phase 3", title: "Monetization", desc: "Sponsorships & Adsense", status: "pending" },
      { step: "Phase 4", title: "Scale to Agency", desc: "Hire editors & managers", status: "pending" },
    ],
    academies: [
      { name: "Creator Camp", loc: "Virtual", type: "Discord" },
      { name: "VidCon Connect", loc: "Global", type: "IRL Event" },
      { name: "YouTube Space", loc: "Mumbai/Delhi", type: "Studio" },
      { name: "Collab House", loc: "Bangalore", type: "Hub" },
    ],
    physical: ["Hook viewers in the first 3 seconds", "Optimize thumbnails for high CTR", "Use trending audio on Reels", "Engage with your top commenters", "Post consistently"],
    nutrition: ["Sony A7IV / iPhone 15 Pro", "Shure SM7B Mic", "Premiere Pro / Final Cut", "CapCut for Shorts"],
    aiQueries: ["How to negotiate with brands?", "Best retention strategies for Shorts?"],
    salary: [
      { level: "Micro-Influencer", desc: "10K - 50K followers", amt: "₹20K - ₹50K / month" },
      { level: "Mid-Tier Creator", desc: "100K - 500K followers", amt: "₹1L - ₹5L / month" },
      { level: "Mega Creator", desc: "1M+ followers", amt: "₹10L+ / month" },
    ],
    successName: "Bhuvan Bam", successDesc: "BB Ki Vines", successQuote: "Keep it authentic, people connect with reality, not perfection."
  },
  "video-editing": {
    title: "Video Editing", theme: "teal",
    heroTitle: "Master the Cut", heroSubtitle: "Transitions, color grading, and VFX. Learn how to edit cinematic videos that keep viewers hooked.",
    avatarUrl: "https://api.dicebear.com/7.x/notionists/svg?seed=Editor&backgroundColor=transparent", avatarIcon: "🎬",
    avatarLabels: ["Premiere", "AfterEffects", "DaVinci"],
    roles: [
      { role: "YouTube Editor", desc: "Fast-paced, high retention", icon: "▶️", bg: "bg-red-50", color: "text-red-600" },
      { role: "Colorist", desc: "Cinematic color grading", icon: "🎨", bg: "bg-teal-50", color: "text-teal-600" },
      { role: "VFX Artist", desc: "Motion graphics & effects", icon: "✨", bg: "bg-purple-50", color: "text-purple-600" },
      { role: "Reels/Shorts Editor", desc: "Short form vertical content", icon: "📱", bg: "bg-sky-50", color: "text-sky-600" },
    ],
    roadmap: [
      { step: "Phase 1", title: "Learn the Basics", desc: "Cuts, J-cuts, L-cuts", status: "completed" },
      { step: "Phase 2", title: "Build Portfolio", desc: "Edit sample videos", status: "active" },
      { step: "Phase 3", title: "Get Clients", desc: "Fiverr, Upwork, Twitter", status: "pending" },
      { step: "Phase 4", title: "Agency Owner", desc: "Scale editing business", status: "pending" },
    ],
    academies: [
      { name: "Editor's Guild", loc: "Discord", type: "Community" },
      { name: "Motion Design Hub", loc: "Reddit", type: "Forum" },
      { name: "Creative Cow", loc: "Web", type: "Forum" },
      { name: "Frame.io Networks", loc: "Global", type: "Platform" },
    ],
    physical: ["Learn keyboard shortcuts", "Use J-cuts and L-cuts for smooth transitions", "Master audio leveling and EQ", "Organize your project bins", "Use proxy files for 4K editing"],
    nutrition: ["Adobe Premiere Pro", "DaVinci Resolve", "After Effects", "Envato Elements"],
    aiQueries: ["How to price my editing services?", "Best color grading luts?"],
    salary: [
      { level: "Junior Editor", desc: "Freelance or Agency", amt: "₹25K - ₹40K / month" },
      { level: "Senior Editor", desc: "Top YouTubers/Brands", amt: "₹75K - ₹1.5L / month" },
      { level: "Editing Agency Owner", desc: "Multiple Clients", amt: "₹3L+ / month" },
    ],
    successName: "Finzar", successDesc: "Top Editing YouTuber", successQuote: "Editing is invisible art. If they notice the cut, you did it wrong."
  },
  "startups": {
    title: "Startups & Tech", theme: "blue",
    heroTitle: "Build the Future", heroSubtitle: "Code, hustle, and scale. Launch your MVP, pitch to investors, and build the next unicorn.",
    avatarUrl: "https://api.dicebear.com/7.x/notionists/svg?seed=Founder&backgroundColor=transparent", avatarIcon: "🚀",
    avatarLabels: ["Founder", "Hustler", "Coder"],
    roles: [
      { role: "Tech Founder", desc: "Building the product", icon: "💻", bg: "bg-blue-50", color: "text-blue-600" },
      { role: "Growth Hacker", desc: "Acquiring users fast", icon: "📈", bg: "bg-green-50", color: "text-green-600" },
      { role: "Product Manager", desc: "Vision & execution", icon: "🎯", bg: "bg-purple-50", color: "text-purple-600" },
      { role: "UI/UX Designer", desc: "Designing experiences", icon: "🎨", bg: "bg-pink-50", color: "text-pink-600" },
    ],
    roadmap: [
      { step: "Phase 1", title: "Idea & Validation", desc: "Talk to users", status: "completed" },
      { step: "Phase 2", title: "Build MVP", desc: "Ship fast, iterate", status: "active" },
      { step: "Phase 3", title: "Seed Funding", desc: "Pitch to Angels/VCs", status: "pending" },
      { step: "Phase 4", title: "Scale & Growth", desc: "Product-market fit", status: "pending" },
    ],
    academies: [
      { name: "Y Combinator", loc: "Global", type: "Accelerator" },
      { name: "Product Hunt", loc: "Web", type: "Community" },
      { name: "Indie Hackers", loc: "Forum", type: "Network" },
      { name: "WeWork Labs", loc: "Multiple Cities", type: "Incubator" },
    ],
    physical: ["Talk to 100 users before writing code", "Ship an MVP in one weekend", "Focus on retention over acquisition", "Learn to pitch in 30 seconds"],
    nutrition: ["Figma for Design", "Vercel / Next.js for Web", "Supabase for Backend", "Stripe for Payments"],
    aiQueries: ["How to structure a pitch deck?", "Best no-code tools for MVP?"],
    salary: [
      { level: "Bootstrapped Founder", desc: "Pre-revenue", amt: "Ramen Profitability" },
      { level: "Funded Founder", desc: "Seed Stage", amt: "₹1L - ₹2L / month" },
      { level: "Successful Exit", desc: "Acquisition/IPO", amt: "Millions 💰" },
    ],
    successName: "Kunal Shah", successDesc: "Founder of CRED", successQuote: "Wealth is created by understanding human behavior."
  },
  "dance": {
    title: "Dance & Choreo", theme: "rose",
    heroTitle: "Master the Rhythm", heroSubtitle: "Hip-hop, contemporary, or classical. Express yourself and take the center stage.",
    avatarUrl: "https://api.dicebear.com/7.x/notionists/svg?seed=Dance&backgroundColor=transparent", avatarIcon: "🕺",
    avatarLabels: ["HipHop", "Choreo", "Freestyle"],
    roles: [
      { role: "Choreographer", desc: "Creating routines", icon: "🩰", bg: "bg-rose-50", color: "text-rose-600" },
      { role: "Backup Dancer", desc: "Performing in shows", icon: "🌟", bg: "bg-orange-50", color: "text-orange-600" },
      { role: "Dance Instructor", desc: "Teaching workshops", icon: "🏫", bg: "bg-teal-50", color: "text-teal-600" },
      { role: "Dance Influencer", desc: "Viral Reels & TikToks", icon: "📱", bg: "bg-fuchsia-50", color: "text-fuchsia-600" },
    ],
    roadmap: [
      { step: "Phase 1", title: "Learn Basics", desc: "Master the fundamentals", status: "completed" },
      { step: "Phase 2", title: "Join a Crew", desc: "Collaborate and train", status: "active" },
      { step: "Phase 3", title: "Compete", desc: "National level events", status: "pending" },
      { step: "Phase 4", title: "Host Workshops", desc: "Build your brand", status: "pending" },
    ],
    academies: [
      { name: "Kings United", loc: "Mumbai", type: "Academy" },
      { name: "Big Dance Centre", loc: "Delhi", type: "Studio" },
      { name: "Terence Lewis Academy", loc: "Mumbai", type: "Elite Studio" },
      { name: "Urban Dance Camp", loc: "Global", type: "Workshop" },
    ],
    physical: ["Always stretch before practice", "Record yourself to fix mistakes", "Learn musicality, not just moves", "Take classes outside your style"],
    nutrition: ["Comfortable Sneakers", "Large Studio Mirror", "Bluetooth Speaker", "Tripod for Recording"],
    aiQueries: ["How to improve body isolation?", "Best songs for popping?"],
    salary: [
      { level: "Freelance Dancer", desc: "Gigs & Shows", amt: "₹15K - ₹30K / month" },
      { level: "Studio Instructor", desc: "Full-time teaching", amt: "₹40K - ₹80K / month" },
      { level: "Top Choreographer", desc: "Movies/Music Videos", amt: "₹2L+ / project" },
    ],
    successName: "Suresh Mukund", successDesc: "Kings United", successQuote: "Hard work beats talent when talent doesn't work hard."
  }
};

export default function CoCurricularDynamicPage() {
  const params = useParams();
  const slug = (params.activity as string)?.toLowerCase();
  
  const data = activityData[slug] || activityData['content-creators'];

  // Match the exact same theme styling as the Sports/Competitive Pages
  const getThemeClasses = (theme: string) => {
    switch (theme) {
      case 'rose': return { text: 'text-rose-600', textDark: 'text-rose-950', bg: 'bg-rose-600', bgHover: 'hover:bg-rose-700', bgLight: 'bg-rose-50', border: 'border-rose-100', borderLight: 'border-rose-50', gradient: 'from-rose-50 to-pink-50' };
      case 'blue': return { text: 'text-blue-600', textDark: 'text-blue-950', bg: 'bg-blue-600', bgHover: 'hover:bg-blue-700', bgLight: 'bg-blue-50', border: 'border-blue-100', borderLight: 'border-blue-50', gradient: 'from-blue-50 to-indigo-50' };
      case 'teal': return { text: 'text-teal-600', textDark: 'text-teal-950', bg: 'bg-teal-600', bgHover: 'hover:bg-teal-700', bgLight: 'bg-teal-50', border: 'border-teal-100', borderLight: 'border-teal-50', gradient: 'from-teal-50 to-emerald-50' };
      case 'fuchsia': return { text: 'text-fuchsia-600', textDark: 'text-fuchsia-950', bg: 'bg-fuchsia-600', bgHover: 'hover:bg-fuchsia-700', bgLight: 'bg-fuchsia-50', border: 'border-fuchsia-100', borderLight: 'border-fuchsia-50', gradient: 'from-fuchsia-50 to-purple-50' };
      default: return { text: 'text-indigo-600', textDark: 'text-indigo-950', bg: 'bg-indigo-600', bgHover: 'hover:bg-indigo-700', bgLight: 'bg-indigo-50', border: 'border-indigo-100', borderLight: 'border-indigo-50', gradient: 'from-indigo-50 to-purple-50' };
    }
  };

  const t = getThemeClasses(data.theme);

  return (
    <MainLayout>
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-8">
        
        {/* Education Journey Breadcrumb */}
        <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-gray-500 mb-6 overflow-x-auto pb-2">
          <Link href="/" className="hover:text-indigo-600 flex items-center gap-1">
             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
             <span className="hidden md:inline">Home</span>
          </Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <Link href="/co-curricular" className="hover:text-indigo-600">Co-Curricular</Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="text-gray-500">Explore</span>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="text-gray-500">Roadmap</span>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="text-gray-800 font-medium border-b-2 border-indigo-600 pb-0.5">{data.title}</span>
        </div>

        <div className="space-y-10 mb-10">
            
            {/* Hero Banner (Matching Exact Layout) */}
            <div className={`bg-gradient-to-r ${t.gradient} rounded-[32px] p-8 md:p-12 border ${t.border} relative overflow-hidden flex flex-col md:flex-row items-center gap-6 shadow-sm`}>
              <div className="flex-1 z-10 relative">
                <h1 className={`text-4xl md:text-5xl font-extrabold ${t.textDark} mb-4 leading-[1.15]`}>
                  {data.heroTitle} <br/><span className={t.text}>{data.title}</span>
                </h1>
                <p className={`${t.textDark} opacity-70 mb-8 max-w-md text-sm md:text-base leading-relaxed font-medium`}>
                  {data.heroSubtitle}
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className={`${t.bg} text-white px-8 py-3.5 rounded-2xl font-bold shadow-lg hover:-translate-y-0.5 transition-all`}>
                    Get Started
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
              </div>
            </div>

            {/* Roles / Categories Grid */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Target className={`w-5 h-5 ${t.text}`} /> Key Specializations
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
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
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
               {/* Academies / Communities */}
               <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm">
                  <h3 className="font-bold text-gray-900 text-lg mb-6 flex items-center gap-2">
                     <Building2 className={`w-5 h-5 ${t.text}`} /> Top Communities & Hubs
                  </h3>
                  <div className="space-y-4">
                     {data.academies.map((inst: any, i: number) => (
                       <div key={i} className="flex gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                          <div className={`w-12 h-12 ${t.bgLight} rounded-xl flex items-center justify-center flex-shrink-0`}>
                             <Star className={`w-5 h-5 ${t.text}`} />
                          </div>
                          <div>
                             <h4 className="font-bold text-gray-900 text-sm">{inst.name}</h4>
                             <p className="text-xs text-gray-500 mb-1">{inst.loc}</p>
                             <span className={`text-[10px] font-bold ${t.text} ${t.bgLight} px-2 py-0.5 rounded uppercase`}>{inst.type}</span>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>

               {/* Physical & Nutrition (Tips & Tools) */}
               <div className="space-y-6">
                  <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm">
                     <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
                        <BrainCircuit className={`w-5 h-5 ${t.text}`} /> Pro Tips & Hacks
                     </h3>
                     <ul className="space-y-3">
                        {data.physical.map((item: string, i: number) => (
                           <li key={i} className="flex items-start gap-3 text-sm text-gray-600 font-medium">
                              <ShieldCheck className={`w-5 h-5 ${t.text} flex-shrink-0`} />
                              {item}
                           </li>
                        ))}
                     </ul>
                  </div>

                  <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm">
                     <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
                        <BookOpen className={`w-5 h-5 ${t.text}`} /> Essential Tools & Gear
                     </h3>
                     <ul className="space-y-3">
                        {data.nutrition.map((item: string, i: number) => (
                           <li key={i} className="flex items-start gap-3 text-sm text-gray-600 font-medium">
                              <Star className={`w-4 h-4 ${t.text} mt-0.5 flex-shrink-0`} />
                              {item}
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>
            
          </div>
          
          {/* Bottom Grid: Insights & Success Stories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Earnings Insights */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
               <h3 className="font-bold text-gray-900 text-[15px] mb-5">Expected Income</h3>
               
               <div className={`relative border-l-2 ${t.borderLight} ml-2.5 space-y-5`}>
                  {data.salary.map((sal: any, i: number) => (
                    <div key={i} className="relative pl-5">
                       <div className={`absolute w-2.5 h-2.5 ${t.bg} rounded-full -left-[6px] top-1.5 ring-4 ring-white`}></div>
                       <h4 className="font-bold text-gray-900 text-[13px]">{sal.level}</h4>
                       <p className="text-[10px] font-bold text-gray-400 mb-0.5 uppercase tracking-wider">{sal.desc}</p>
                       <p className={`text-[13px] font-black ${t.text}`}>{sal.amt}</p>
                    </div>
                  ))}
               </div>
            </div>
            
            {/* Success Story */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm relative overflow-hidden group cursor-pointer h-full flex flex-col justify-center">
               <div className={`absolute top-0 right-0 w-24 h-24 ${t.bgLight} rounded-full blur-2xl opacity-50 group-hover:scale-150 transition-transform duration-700`}></div>
               <h3 className="font-bold text-gray-900 text-[15px] mb-4">Legendary Inspiration</h3>
               <div className="flex gap-4 items-center">
                  <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${data.successName}&style=circle`} alt={data.successName} className="w-16 h-16 bg-gray-50 rounded-full shadow-sm border-2 border-white object-cover" />
                  <div>
                     <h4 className="font-bold text-gray-900 text-[14px]">{data.successName}</h4>
                     <p className="text-[11px] text-gray-500 font-medium mb-1">{data.successDesc}</p>
                     <p className="text-[11px] text-gray-600 font-medium italic">&quot;{data.successQuote}&quot;</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
    </MainLayout>
  );
}
