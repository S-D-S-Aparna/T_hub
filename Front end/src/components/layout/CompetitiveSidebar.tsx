"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Home, BookOpen, Layers, CheckSquare, Calendar, Newspaper, 
  BookMarked, MonitorPlay, Building2, Users, Bell, TrendingUp, 
  Award, Star, MessageSquare, Bookmark, CalendarDays, Award as CertIcon, HelpCircle, FileText
} from "lucide-react";

const mainLinks = [
  { href: "/competitive-exams", label: "Competitive Home", icon: Home },
  { href: "/competitive-exams/all", label: "All Exams", icon: BookOpen },
  { href: "/competitive-exams/categories", label: "Exam Categories", icon: Layers },
  { href: "/competitive-exams/mock-tests", label: "Mock Tests", icon: CheckSquare },
  { href: "/competitive-exams/planner", label: "Study Planner", icon: Calendar },
  { href: "/competitive-exams/current-affairs", label: "Current Affairs", icon: Newspaper },
  { href: "/competitive-exams/books", label: "Books & Notes", icon: BookMarked },
  { href: "/competitive-exams/live", label: "Live Classes", icon: MonitorPlay },
  { href: "/competitive-exams/institutes", label: "Coaching Institutes", icon: Building2 },
  { href: "/competitive-exams/mentors", label: "Mentors", icon: Users },
  { href: "/competitive-exams/alerts", label: "Exam Alerts", icon: Bell },
  { href: "/competitive-exams/rank-predictor", label: "Rank Predictor", icon: TrendingUp },
  { href: "/competitive-exams/scholarships", label: "Scholarships", icon: Award },
  { href: "/competitive-exams/success-stories", label: "Success Stories", icon: Star },
  { href: "/community", label: "Community", icon: MessageSquare },
];

const userLinks = [
  { href: "/dashboard", label: "My Dashboard", icon: Home },
  { href: "/saved", label: "Saved", icon: Bookmark },
  { href: "/competitive-exams/bookings", label: "My Bookings", icon: CalendarDays },
  { href: "/competitive-exams/certificates", label: "Certificates", icon: CertIcon },
  { href: "/support", label: "Help & Support", icon: HelpCircle },
];

export default function CompetitiveSidebar() {
  const pathname = usePathname();

  const NavItem = ({ href, label, icon: Icon }: { href: string; label: string; icon: any }) => {
    const isActive = pathname === href;
    return (
      <Link 
        href={href}
        className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
          isActive 
            ? "bg-indigo-700 text-white shadow-md shadow-indigo-200" 
            : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-800"
        }`}
      >
        <Icon className={`w-[18px] h-[18px] ${isActive ? "text-white" : "text-gray-500"}`} />
        {label}
        {isActive && <span className="ml-auto text-white">&gt;</span>}
      </Link>
    );
  };

  return (
    <aside className="fixed left-0 top-16 bottom-0 w-64 bg-white border-r border-gray-100 overflow-y-auto z-40 hidden lg:block custom-scrollbar">
      <div className="py-6 px-4 space-y-8">
        
        <div className="space-y-1">
          {mainLinks.map((link) => (
            <NavItem key={link.href} {...link} />
          ))}
        </div>

        <div className="pt-4 border-t border-gray-100 space-y-1">
          {userLinks.map((link) => (
            <NavItem key={link.href} {...link} />
          ))}
        </div>

        <div className="pt-2">
          <div className="bg-indigo-50/50 p-5 rounded-2xl border border-indigo-100/50">
            <h4 className="font-bold text-indigo-950 mb-2 text-sm leading-tight">AI Eligibility Checker</h4>
            <p className="text-xs text-indigo-800/80 mb-4 font-medium leading-relaxed">Enter your details and find all exams you are eligible for.</p>
            <button className="w-full bg-indigo-700 hover:bg-indigo-800 text-white py-2 rounded-xl text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2">
              Check Eligibility <span className="text-xs">&rarr;</span>
            </button>
            <div className="flex justify-center mt-4">
              <div className="w-16 h-16 rounded-lg bg-white flex items-center justify-center shadow-sm border border-indigo-100 relative">
                 <FileText className="w-8 h-8 text-indigo-400" />
                 <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center"><TrendingUp className="w-3 h-3 text-indigo-600" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #e5e7eb;
          border-radius: 20px;
        }
      `}</style>
    </aside>
  );
}
