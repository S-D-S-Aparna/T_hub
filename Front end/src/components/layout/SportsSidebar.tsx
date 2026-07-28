"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Home, Trophy, Building2, Users, MonitorPlay, Target, 
  MapPin, Activity, Apple, Bot, Compass, Award, Calendar, 
  MessageSquare, Star, Bookmark, CalendarDays, HelpCircle,
  LineChart, User, ShoppingBag, HeartPulse, CloudSun, Medal, Bell,
  Brain, LayoutDashboard, Search
} from "lucide-react";

const sidebarGroups = [
  {
    title: "Explore",
    links: [
      { href: "/sports", label: "Sports Home", icon: Home },
      { href: "/sports/all", label: "All Sports", icon: Trophy },
      { href: "/community", label: "Community", icon: MessageSquare },
      { href: "/success-stories", label: "Success Stories", icon: Star },
    ]
  },
  {
    title: "Performance & Health",
    links: [
      { href: "/sports/fitness", label: "Fitness Tracker", icon: Activity },
    ]
  }
];

const userLinks = [
  { href: "/dashboard", label: "My Dashboard", icon: LayoutDashboard },
  { href: "/notifications", label: "Smart Notifications", icon: Bell },
  { href: "/saved", label: "Saved", icon: Bookmark },
  { href: "/sports/bookings", label: "My Bookings", icon: CalendarDays },
  { href: "/support", label: "Help & Support", icon: HelpCircle },
];

export default function SportsSidebar() {
  const pathname = usePathname();

  const NavItem = ({ href, label, icon: Icon }: { href: string; label: string; icon: any }) => {
    const isActive = pathname === href;
    return (
      <Link 
        href={href}
        className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
          isActive 
            ? "bg-[#5A4BFF] text-white shadow-md shadow-indigo-200" 
            : "text-[#334155] hover:bg-indigo-50 hover:text-[#5A4BFF]"
        }`}
      >
        <Icon className={`w-[20px] h-[20px] ${isActive ? "text-white" : "text-[#64748B]"}`} strokeWidth={isActive ? 2.5 : 2} />
        {label}
      </Link>
    );
  };

  return (
    <aside className="fixed left-0 top-16 bottom-0 w-64 bg-white border-r border-gray-100 overflow-y-auto z-40 hidden lg:block custom-scrollbar">
      <div className="py-6 px-4 space-y-6">
        
        {sidebarGroups.map((group, idx) => (
          <div key={idx} className="space-y-1">
            <h4 className="px-3 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
              {group.title}
            </h4>
            {group.links.map((link) => (
              <NavItem key={link.href} {...link} />
            ))}
          </div>
        ))}

        <div className="pt-4 border-t border-gray-100 space-y-1">
          <h4 className="px-3 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
            My Account
          </h4>
          {userLinks.map((link) => (
            <NavItem key={link.href} {...link} />
          ))}
        </div>

        <div className="pt-2">
          <div className="bg-indigo-50/50 p-5 rounded-2xl border border-indigo-100/50">
            <h4 className="font-bold text-indigo-900 mb-2 text-sm leading-tight">Sports Talent Assessment</h4>
            <p className="text-xs text-indigo-700/80 mb-4 font-medium leading-relaxed">Find the perfect sport that matches your strengths and potential.</p>
            <button className="w-full bg-indigo-700 hover:bg-indigo-800 text-white py-2 rounded-xl text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2">
              Start Assessment 🎯
            </button>
            <div className="flex justify-center mt-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                <Target className="w-6 h-6 text-pink-500" />
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
