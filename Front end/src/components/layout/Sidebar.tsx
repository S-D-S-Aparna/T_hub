"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Home, GraduationCap, BookOpen, Target, Palette, 
  Rocket, Users, MonitorPlay, Compass, Award, FileText, Bookmark, Calendar, HelpCircle,
  type LucideIcon
} from "lucide-react";

const mainLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/careers", label: "Career Discovery", icon: Compass },
  { href: "/roadmap", label: "Career Roadmap", icon: Target },
  { href: "/opportunities", label: "Jobs & Internships", icon: Rocket },
  { href: "/mentors", label: "Find a Mentor", icon: Users },
  { href: "/community", label: "Community", icon: Users },
];

const secondaryLinks = [
  { href: "/chat", label: "Be You AI Chat", icon: Rocket },
  { href: "/education", label: "Colleges & Courses", icon: GraduationCap },
  { href: "/applications", label: "Application Tracker", icon: FileText },
  { href: "/resources", label: "Study Resources", icon: BookOpen },
  { href: "/success-stories", label: "Success Stories", icon: Award },
];

const userLinks = [
  { href: "/dashboard", label: "My Dashboard", icon: Home },
  { href: "/saved", label: "Saved", icon: Bookmark },
  { href: "/events", label: "Events & Masterclasses", icon: Calendar },
  { href: "/support", label: "Help & Support", icon: HelpCircle },
];

type NavItemProps = {
  href: string;
  label: string;
  icon: LucideIcon;
};

export default function Sidebar() {
  const pathname = usePathname();

  const NavItem = ({ href, label, icon: Icon }: NavItemProps) => {
    const isActive = pathname === href;
    return (
      <Link 
        href={href}
        className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
          isActive 
            ? "bg-indigo-50 text-indigo-700" 
            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
        }`}
      >
        <Icon className={`w-4 h-4 ${isActive ? "text-indigo-600" : "text-gray-400"}`} />
        {label}
      </Link>
    );
  };

  return (
    <aside className="fixed left-0 top-16 bottom-0 w-64 bg-white border-r border-gray-100 overflow-y-auto z-40 hidden lg:block">
      <div className="py-4 px-3 space-y-6">
        
        <div>
          <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Explore</p>
          <div className="space-y-1">
            {mainLinks.map((link) => (
              <NavItem key={link.href} {...link} />
            ))}
          </div>
        </div>

        <div>
          <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Discover</p>
          <div className="space-y-1">
            {secondaryLinks.map((link) => (
              <NavItem key={link.href} {...link} />
            ))}
          </div>
        </div>

        <div>
          <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Personal</p>
          <div className="space-y-1">
            {userLinks.map((link) => (
              <NavItem key={link.href} {...link} />
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
