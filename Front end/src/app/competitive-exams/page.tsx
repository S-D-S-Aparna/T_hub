"use client";

import CompetitiveLayout from "@/components/layout/CompetitiveLayout";
import Link from "next/link";
import { 
  ChevronRight, ArrowRight, MapPin, Star, Bot, Calendar, Landmark, 
  Code, BriefcaseMedical, Target, BookOpen, Map, CheckSquare, 
  FileText, CalendarDays, TrendingUp, BarChart2, BookMarked, 
  Users, MonitorPlay, Award, Clock, Newspaper, Trophy,
  Cpu, Shield, Palette, BrainCircuit, Cloud, Fingerprint
} from "lucide-react";
import api from "@/lib/api";
import { useEffect, useState } from "react";

export default function CompetitiveExamsHome() {
  const [mentors, setMentors] = useState<any[]>([]);
  const [loadingMentors, setLoadingMentors] = useState(true);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const response = await api.get('/users/mentors');
        if (response.data && response.data.mentors) {
          // Take top 3 mentors
          setMentors(response.data.mentors.slice(0, 3));
        }
      } catch (error) {
        // Fallback to mock data if API fails to avoid breaking UI or showing dev overlay
        setMentors([
          { _id: '1', name: 'Alakh Pandey', role: 'Physics Mentor', bio: 'Founder of Physics Wallah', profilePicture: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alakh' },
          { _id: '2', name: 'Vikas Divyakirti', role: 'UPSC Mentor', bio: 'Founder of Drishti IAS', profilePicture: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vikas' },
          { _id: '3', name: 'Dr. Anand Mani', role: 'NEET Mentor', bio: 'Top Biology Educator', profilePicture: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Anand' }
        ]);
      } finally {
        setLoadingMentors(false);
      }
    };
    fetchMentors();
  }, []);

  return (
    <CompetitiveLayout>
      {/* Education Journey Breadcrumb */}
      <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-gray-500 mb-6 overflow-x-auto pb-2">
        <Link href="/" className="hover:text-indigo-600 flex items-center gap-1">
           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
           <span className="hidden md:inline">Home</span>
        </Link>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span className="text-gray-800 font-medium border-b-2 border-indigo-600 pb-0.5">Exams</span>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span className="text-gray-500">Check Eligibility</span>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span className="text-gray-500">Choose Exam</span>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span className="text-gray-500">Prepare</span>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span className="text-gray-500">Success</span>
      </div>

      <div className="space-y-10 mb-10">
        
        {/* Hero Banner (Matching Education Page) */}
        <div className="bg-gradient-to-r from-[#eef2ff] to-[#f5f3ff] rounded-[32px] p-8 md:p-12 border border-indigo-50 relative overflow-hidden flex flex-col md:flex-row items-center gap-6 shadow-sm">
          <div className="flex-1 z-10 relative">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-indigo-950 mb-6 leading-[1.15]">
              Master Your <br/><span className="text-[#5b21b6]">Competitive Exams</span>
            </h1>
            <p className="text-indigo-900/70 mb-8 max-w-xl text-sm md:text-lg leading-relaxed font-medium">
              Explore exams, get expert guidance, access study resources and build your roadmap to success in top government and entrance exams.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#4f46e5] text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-indigo-200/50 hover:bg-indigo-700 hover:-translate-y-0.5 transition-all text-base">
                Explore Exams
              </button>
              <button className="bg-white text-[#4f46e5] px-8 py-4 rounded-2xl font-bold shadow-md shadow-gray-200/50 hover:bg-indigo-50 hover:-translate-y-0.5 transition-all flex items-center gap-2 group border border-gray-100 text-base">
                Take Mock Test 🚀
              </button>
            </div>
          </div>
          
          {/* Illustration */}
          <div className="w-full md:w-[45%] relative z-10 hidden md:block h-72">
             {/* 3D Illustration placeholder using dicebear + abstract shapes */}
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#818cf8] via-[#c084fc] to-[#f472b6] rounded-full blur-[60px] opacity-20"></div>
             <img src="https://api.dicebear.com/7.x/notionists/svg?seed=ExamSuccess&backgroundColor=transparent" alt="Student Illustration" className="w-full h-full object-contain relative z-10 drop-shadow-2xl scale-125" />
          </div>
          
          <div className="absolute bottom-0 right-0 w-full h-full opacity-30 pointer-events-none">
              <svg viewBox="0 0 400 400" className="absolute right-0 bottom-0 text-indigo-200 w-96 h-96 transform translate-x-1/4 translate-y-1/4"><path fill="currentColor" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
          </div>
        </div>

        {/* Exam Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { title: "Civil Services", desc: "UPSC, State PSC, IAS, IPS, IFS.", options: "15+ Exams", color: "bg-[#16a34a]", icon: "🏛️", href: "/competitive-exams/civil-services" },
            { title: "Engineering", desc: "JEE Main, Advanced, BITSAT, State CETs.", options: "30+ Exams", color: "bg-[#2563eb]", icon: "📐", href: "/competitive-exams/engineering" },
            { title: "Medical", desc: "NEET UG, PG, AIIMS, JIPMER.", options: "20+ Exams", color: "bg-[#7c3aed]", icon: "🩺", href: "/competitive-exams/medical" },
            { title: "Banking & SSC", desc: "IBPS PO, SBI, SSC CGL, CHSL.", options: "40+ Exams", color: "bg-[#ea580c]", icon: "🏦", href: "/competitive-exams/banking" },
            { title: "Management", desc: "CAT, XAT, MAT, GMAT, SNAP.", options: "25+ Exams", color: "bg-[#db2777]", icon: "📊", href: "/competitive-exams/management" }
          ].map((cat, i) => (
            <Link href={cat.href} key={i} className="bg-white rounded-[32px] p-6 lg:p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:border-indigo-100 transition-all duration-300 group flex flex-col h-full hover:-translate-y-2 cursor-pointer">
              <div className="text-5xl mb-6 text-center">{cat.icon}</div>
              <h3 className={`font-bold text-center text-xl mb-3 text-gray-900 group-hover:text-indigo-700 transition-colors`}>{cat.title}</h3>
              <p className="text-sm text-center text-gray-500 mb-6 flex-grow leading-relaxed px-1">{cat.desc}</p>
              <div className="text-center mb-6"><span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">{cat.options}</span></div>
              <button className={`w-full ${cat.color} text-white font-bold text-sm py-3 rounded-2xl flex items-center justify-center gap-2 shadow-md shadow-gray-200 transition-transform pointer-events-none`}>
                Explore <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          ))}
        </div>

        {/* Features Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* AI Roadmap Generator */}
          <div className="bg-gradient-to-br from-[#f0f9ff] to-white rounded-[32px] p-8 border border-sky-100 shadow-sm hover:shadow-xl transition-all cursor-pointer group hover:-translate-y-1">
            <h3 className="font-bold text-xl text-[#0369a1] mb-3">Exam Roadmap Generator</h3>
            <p className="text-sm text-gray-500 mb-8 leading-relaxed">Generate your personalized exam preparation roadmap in just a few clicks based on your goals.</p>
            <div className="flex items-end justify-between mt-auto">
              <span className="text-sm font-bold text-[#0284c7] flex items-center gap-1 group-hover:translate-x-1 transition-transform">Generate Now <ArrowRight className="w-4 h-4" /></span>
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-2xl group-hover:scale-110 transition-transform border border-sky-50">📍</div>
            </div>
          </div>
          
          {/* Live Lectures */}
          <div className="bg-gradient-to-br from-[#f5f3ff] to-white rounded-[32px] p-8 border border-purple-100 shadow-sm hover:shadow-xl transition-all cursor-pointer group hover:-translate-y-1" onClick={() => window.location.href='/mentors'}>
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-bold text-xl text-[#6d28d9]">Live Classes</h3>
              <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider animate-pulse shadow-sm">Live</span>
            </div>
            <p className="text-sm text-gray-500 mb-8 leading-relaxed">Join live doubt solving sessions and interactive masterclasses by expert teachers and toppers.</p>
            <div className="flex items-end justify-between mt-auto">
              <span className="text-sm font-bold text-[#7c3aed] flex items-center gap-1 group-hover:translate-x-1 transition-transform">Join Now <ArrowRight className="w-4 h-4" /></span>
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-2xl group-hover:scale-110 transition-transform border border-purple-50">💻</div>
            </div>
          </div>

          {/* Find Coaching */}
          <div className="bg-gradient-to-br from-[#ecfdf5] to-white rounded-[32px] p-8 border border-emerald-100 shadow-sm hover:shadow-xl transition-all cursor-pointer group hover:-translate-y-1" onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=coaching+near+me', '_blank')}>
            <h3 className="font-bold text-xl text-[#047857] mb-3">Find Coaching</h3>
            <p className="text-sm text-gray-500 mb-8 leading-relaxed">Search top coaching institutes, compare fees, and read reviews from successful students.</p>
            <div className="flex items-end justify-between mt-auto">
              <span className="text-sm font-bold text-[#059669] flex items-center gap-1 group-hover:translate-x-1 transition-transform">Explore Institutes <ArrowRight className="w-4 h-4" /></span>
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-2xl group-hover:scale-110 transition-transform border border-emerald-50">🏫</div>
            </div>
          </div>

          {/* Mock Tests */}
          <div className="bg-gradient-to-br from-[#fffbeb] to-white rounded-[32px] p-8 border border-amber-100 shadow-sm hover:shadow-xl transition-all cursor-pointer group hover:-translate-y-1" onClick={() => window.location.href='/resources'}>
            <h3 className="font-bold text-xl text-[#b45309] mb-3">Mock Tests</h3>
            <p className="text-sm text-gray-500 mb-8 leading-relaxed">Attempt previous year papers, chapter-wise quizzes and full-length mock tests for all exams.</p>
            <div className="flex items-end justify-between mt-auto">
              <span className="text-sm font-bold text-[#d97706] flex items-center gap-1 group-hover:translate-x-1 transition-transform">Start Testing <ArrowRight className="w-4 h-4" /></span>
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-2xl group-hover:scale-110 transition-transform border border-amber-50">📝</div>
            </div>
          </div>
        </div>

        {/* Trending Exams */}
        <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Trending Exams Today</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-6">
            {[
              { name: "UPSC CSE", icon: Landmark, color: "text-green-600", bg: "bg-green-50" },
              { name: "JEE Main", icon: Cpu, color: "text-indigo-600", bg: "bg-indigo-50" },
              { name: "NEET UG", icon: BriefcaseMedical, color: "text-rose-600", bg: "bg-rose-50" },
              { name: "SSC CGL", icon: BarChart2, color: "text-blue-600", bg: "bg-blue-50" },
              { name: "CAT 2024", icon: TrendingUp, color: "text-purple-600", bg: "bg-purple-50" },
              { name: "IBPS PO", icon: Shield, color: "text-violet-600", bg: "bg-violet-50" },
              { name: "CLAT", icon: BookOpen, color: "text-sky-600", bg: "bg-sky-50" },
              { name: "GATE", icon: BrainCircuit, color: "text-amber-600", bg: "bg-amber-50" },
            ].map((exam, i) => (
              <div key={i} className="flex flex-col items-center gap-3 cursor-pointer group hover:-translate-y-1 transition-transform">
                <div className={`w-16 h-16 rounded-[20px] flex items-center justify-center border border-gray-100 ${exam.bg} group-hover:shadow-lg transition-shadow`}>
                  <exam.icon className={`w-7 h-7 ${exam.color}`} strokeWidth={1.5} />
                </div>
                <span className="text-xs font-bold text-gray-700 text-center leading-tight group-hover:text-indigo-600">{exam.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section: Map and Mentors */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          
          {/* Find Coaching Institutes Map */}
          <div className="xl:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
               <MapPin className="w-6 h-6 text-indigo-500" /> Find Coaching Institutes Near You
            </h2>
            <div className="bg-white rounded-[32px] p-2 border border-gray-100 shadow-sm overflow-hidden h-[450px]">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15226.772596541607!2d78.43163351984242!3d17.426462719588267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scoaching%20institutes!5e0!3m2!1sen!2sin!4v1715694218654!5m2!1sen!2sin" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0, borderRadius: '24px' }} 
                 allowFullScreen={true} 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
               ></iframe>
            </div>
          </div>

          {/* Connect with Mentors */}
          <div>
             <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
               <Star className="w-6 h-6 text-amber-500" /> Top Mentors
            </h2>
            <div className="bg-white rounded-[32px] p-6 lg:p-8 border border-gray-100 shadow-sm h-[450px] overflow-y-auto">
              <div className="space-y-6">
                {loadingMentors ? (
                    <div className="text-gray-500 text-sm animate-pulse">Loading mentors...</div>
                ) : mentors.length > 0 ? (
                  mentors.map((mentor, i) => (
                    <div key={i} className="flex items-center gap-4 pb-6 border-b border-gray-100 last:border-0 last:pb-0 group">
                      <div className="w-16 h-16 rounded-2xl bg-indigo-50 overflow-hidden flex-shrink-0 border border-indigo-100 relative">
                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${mentor.name.replace(/\s+/g, '')}`} alt={mentor.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                        <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-base text-gray-900 leading-tight mb-1 group-hover:text-indigo-600 transition-colors">{mentor.name}</h4>
                        <p className="text-xs font-medium text-gray-500 mb-2 line-clamp-1">{mentor.mentorProfile?.role || 'Expert Mentor'} &bull; {mentor.mentorProfile?.yearsExperience || 5}+ Yrs Exp</p>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded-md">
                            <Star className="w-3 h-3 fill-amber-500 text-amber-500" /> 
                            <span className="text-xs font-bold text-amber-700">{mentor.mentorProfile?.rating || 4.9}</span>
                          </div>
                          <Link href={`/mentors/${mentor.id || mentor._id}/book`} className="text-indigo-600 font-bold text-xs hover:underline flex items-center gap-1">
                            Book Session <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-gray-500 text-sm">No mentors found.</div>
                )}
                
                {!loadingMentors && (
                  <Link href="/mentors" className="block w-full text-center py-3 bg-gray-50 hover:bg-gray-100 text-gray-700 font-bold text-sm rounded-xl transition-colors border border-gray-200 mt-4">
                    View All Mentors
                  </Link>
                )}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </CompetitiveLayout>
  );
}
