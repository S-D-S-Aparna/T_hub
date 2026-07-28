"use client";

import { useParams } from "next/navigation";
import SportsLayout from "@/components/layout/SportsLayout";
import Link from "next/link";
import { 
  ChevronRight, ArrowRight, Bot, Star, Building2, MapPin, Target, Activity, 
  Trophy, Medal, Users, Calendar, ShieldCheck, Dumbbell, BookOpen
} from "lucide-react";

// The premium sports career data for all dynamically routed sports
const sportsData: Record<string, any> = {
  kabaddi: {
    title: "Kabaddi", theme: "orange",
    heroTitle: "Raid the Court", heroSubtitle: "Strength, agility, and breath control. Discover the definitive roadmap to becoming a Pro Kabaddi star.",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kabaddi&style=circle&backgroundColor=transparent", avatarIcon: "🏃‍♂️",
    avatarLabels: ["Raider", "Defender", "PKL"],
    roles: [
      { role: "Raider", desc: "Agility & quick reflexes", icon: "⚡", bg: "bg-orange-50", color: "text-orange-600" },
      { role: "Corner Defender", desc: "Ankle holds & strength", icon: "🛡️", bg: "bg-blue-50", color: "text-blue-600" },
      { role: "Cover Defender", desc: "Dashes & blocks", icon: "🧱", bg: "bg-gray-50", color: "text-gray-600" },
      { role: "All-Rounder", desc: "Master of both skills", icon: "⭐", bg: "bg-yellow-50", color: "text-yellow-600" },
    ],
    roadmap: [
      { step: "Step 1", title: "Local Tournaments", desc: "Play village/district level", status: "completed" },
      { step: "Step 2", title: "State Level", desc: "Senior State Championships", status: "completed" },
      { step: "Step 3", title: "National Level", desc: "Pro Kabaddi League (PKL)", status: "active" },
      { step: "Step 4", title: "International", desc: "Asian Games / World Cup", status: "pending" },
    ],
    academies: [
      { name: "SAI Kabaddi Centers", loc: "Multiple Locations", type: "Govt" },
      { name: "Narayan Kabaddi Academy", loc: "Haryana", type: "Elite" },
      { name: "Anup Kumar Academy", loc: "Haryana", type: "Private" },
      { name: "Sports Authority of Gujarat", loc: "Gandhinagar", type: "Govt" },
    ],
    physical: ["Explosive Leg Power", "Lung Capacity", "Core Strength", "Grip Strength", "Agility"],
    nutrition: ["High Protein", "Complex Carbs", "Hydration", "Calcium for bones"],
    aiQueries: ["How to enter PKL auctions?", "Best exercises for ankle holds?"],
    salary: [
      { level: "Domestic Level", desc: "State/Departmental Jobs", amt: "₹30,000 - ₹60,000 / month" },
      { level: "PKL Category C/D", desc: "Pro Contract", amt: "₹10 Lakhs - ₹30 Lakhs / season" },
      { level: "PKL Category A", desc: "Star Players", amt: "₹80 Lakhs - ₹2+ Cr / season" },
    ],
    successName: "Pardeep Narwal", successDesc: "Dubki King & PKL Star", successQuote: "Never give up until the whistle blows.",
    successImage: "/images/athletes/pardeep_narwal.png"
  },
  football: {
    title: "Football", theme: "purple",
    heroTitle: "Own the Pitch", heroSubtitle: "Teamwork, stamina, and tactical brilliance. Discover your roadmap to becoming a professional footballer.",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Footballer&style=circle&backgroundColor=transparent", avatarIcon: "⚽",
    avatarLabels: ["Striker", "Midfield", "ISL"],
    roles: [
      { role: "Striker", desc: "Goal scoring specialist", icon: "🎯", bg: "bg-purple-50", color: "text-purple-600" },
      { role: "Midfielder", desc: "Playmaker and engine", icon: "🧠", bg: "bg-blue-50", color: "text-blue-600" },
      { role: "Defender", desc: "Tackling & clearances", icon: "🛡️", bg: "bg-green-50", color: "text-green-600" },
      { role: "Goalkeeper", desc: "Agility & reflexes", icon: "🧤", bg: "bg-orange-50", color: "text-orange-600" },
    ],
    roadmap: [
      { step: "Step 1", title: "Youth Academy", desc: "Join local club (U13/U15)", status: "completed" },
      { step: "Step 2", title: "State Leagues", desc: "Santosh Trophy / Local leagues", status: "completed" },
      { step: "Step 3", title: "National Level", desc: "I-League / ISL Draft", status: "active" },
      { step: "Step 4", title: "International", desc: "Indian National Team", status: "pending" },
    ],
    academies: [
      { name: "Tata Football Academy", loc: "Jamshedpur", type: "Elite" },
      { name: "Minerva Academy", loc: "Chandigarh", type: "Private" },
      { name: "Bhaichung Bhutia Schools", loc: "Multiple", type: "Private" },
      { name: "Reliance Foundation YC", loc: "Mumbai", type: "Elite" },
    ],
    physical: ["Aerobic Endurance", "Sprint Speed", "Agility", "Lower Body Power", "Balance"],
    nutrition: ["High Carbs for matchday", "Lean protein for recovery", "Electrolytes"],
    aiQueries: ["How to join ISL academy?", "Best football boots for grass?"],
    salary: [
      { level: "Local/State League", desc: "Match Fees", amt: "₹15,000 - ₹40,000 / month" },
      { level: "I-League / ISL Reserve", desc: "Pro Contract", amt: "₹5 Lakhs - ₹20 Lakhs / yr" },
      { level: "ISL First Team", desc: "Star Player Contract", amt: "₹50 Lakhs - ₹3+ Cr / yr" },
    ],
    successName: "Sunil Chhetri", successDesc: "Former India Captain", successQuote: "Always give your 100% on the pitch.",
    successImage: "/images/athletes/sunil_chhetri.jpg"
  },
  athletics: {
    title: "Athletics", theme: "pink",
    heroTitle: "Break the Records", heroSubtitle: "Speed, strength, and pure endurance. Discover the roadmap to track and field glory.",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Athletics&style=circle&backgroundColor=transparent", avatarIcon: "🏃",
    avatarLabels: ["Sprinter", "Javelin", "Olympics"],
    roles: [
      { role: "Sprinter", desc: "100m, 200m, 400m speed", icon: "⚡", bg: "bg-pink-50", color: "text-pink-600" },
      { role: "Long Distance", desc: "Marathons & endurance", icon: "🫁", bg: "bg-blue-50", color: "text-blue-600" },
      { role: "Jumps", desc: "Long, High, Triple Jump", icon: "🦘", bg: "bg-green-50", color: "text-green-600" },
      { role: "Throws", desc: "Javelin, Shotput, Discus", icon: "💪", bg: "bg-orange-50", color: "text-orange-600" },
    ],
    roadmap: [
      { step: "Step 1", title: "School/District", desc: "SGFI & District meets", status: "completed" },
      { step: "Step 2", title: "State Level", desc: "State Athletics Championship", status: "completed" },
      { step: "Step 3", title: "National Level", desc: "Open Nationals & Federation Cup", status: "active" },
      { step: "Step 4", title: "International", desc: "Asian Games / Olympics", status: "pending" },
    ],
    academies: [
      { name: "NIS Patiala", loc: "Patiala, Punjab", type: "Elite Govt" },
      { name: "PT Usha School of Athletics", loc: "Kerala", type: "Elite Private" },
      { name: "Inspire Institute of Sport", loc: "Bellary", type: "Elite" },
      { name: "SAI LNCPE", loc: "Thiruvananthapuram", type: "Govt" },
    ],
    physical: ["Explosive Power", "Cardiovascular Endurance", "Flexibility", "Core Strength", "Fast-Twitch Muscles"],
    nutrition: ["Calorie Surplus/Deficit (event based)", "High Protein", "Supplements & Vitamins"],
    aiQueries: ["How to improve 100m sprint time?", "Diet plan for javelin thrower?"],
    salary: [
      { level: "State / National", desc: "Govt Job (PSU/Railways)", amt: "₹40,000 - ₹80,000 / month" },
      { level: "International Medalist", desc: "Govt Cash Awards + TOPS", amt: "₹10 Lakhs - ₹50 Lakhs (per medal)" },
      { level: "Olympic Medalist", desc: "Endorsements & Rewards", amt: "₹5 Cr - ₹20+ Cr (Lifetime)" },
    ],
    successName: "Neeraj Chopra", successDesc: "Olympic Gold Medalist", successQuote: "When you have a dream, you have to protect it.",
    successImage: "/images/athletes/neeraj_chopra.jpg"
  },
  wrestling: {
    title: "Wrestling", theme: "amber",
    heroTitle: "Conquer the Mat", heroSubtitle: "Grappling, strength, and immense willpower. The roadmap to becoming a champion wrestler.",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Wrestling&style=circle&backgroundColor=transparent", avatarIcon: "🤼",
    avatarLabels: ["Freestyle", "Grappler", "Medalist"],
    roles: [
      { role: "Freestyle Wrestler", desc: "Legs allowed for attack/defense", icon: "🤼", bg: "bg-amber-50", color: "text-amber-600" },
      { role: "Greco-Roman", desc: "Upper body only", icon: "💪", bg: "bg-red-50", color: "text-red-600" },
      { role: "Pro Wrestling", desc: "Sports Entertainment (WWE)", icon: "🌟", bg: "bg-purple-50", color: "text-purple-600" },
      { role: "Wrestling Coach", desc: "Train the next generation", icon: "📋", bg: "bg-blue-50", color: "text-blue-600" },
    ],
    roadmap: [
      { step: "Step 1", title: "Akhada / Local", desc: "Dangal & District level", status: "completed" },
      { step: "Step 2", title: "State Level", desc: "State Wrestling Championship", status: "completed" },
      { step: "Step 3", title: "National Level", desc: "Senior Nationals", status: "active" },
      { step: "Step 4", title: "International", desc: "World Championships / Olympics", status: "pending" },
    ],
    academies: [
      { name: "Chhatrasal Stadium", loc: "Delhi", type: "Elite" },
      { name: "Guru Hanuman Akhara", loc: "Delhi", type: "Traditional" },
      { name: "SAI Sonepat", loc: "Haryana", type: "Elite Govt" },
      { name: "Inspire Institute of Sport", loc: "Bellary", type: "Elite" },
    ],
    physical: ["Raw Strength", "Grappling Technique", "Flexibility", "Stamina", "Neck & Core Strength"],
    nutrition: ["High Protein", "Strict weight-cutting diets", "Almonds & Milk (Traditional)"],
    aiQueries: ["How to join Chhatrasal Stadium?", "Best diet for weight cutting?"],
    salary: [
      { level: "Domestic / Dangal", desc: "Local Prize Money + Govt Job", amt: "₹30,000 - ₹80,000 / month" },
      { level: "National Medalist", desc: "Pro Wrestling League / TOPS", amt: "₹5 Lakhs - ₹20 Lakhs / yr" },
      { level: "Olympic Medalist", desc: "Rewards & Endorsements", amt: "₹3 Cr - ₹10+ Cr" },
    ],
    successName: "Ravi Dahiya", successDesc: "Olympic Silver Medalist", successQuote: "The mat is my home, the medal is my destiny.",
    successImage: "/images/athletes/ravi_dahiya.jpg"
  },
  boxing: {
    title: "Boxing", theme: "red",
    heroTitle: "Rule the Ring", heroSubtitle: "Power, reflexes, and heart. The roadmap to becoming a professional or Olympic boxer.",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Boxing&style=circle&backgroundColor=transparent", avatarIcon: "🥊",
    avatarLabels: ["Knockout", "Fighter", "Olympian"],
    roles: [
      { role: "Amateur Boxer", desc: "Olympic style boxing (3 rounds)", icon: "🏅", bg: "bg-red-50", color: "text-red-600" },
      { role: "Pro Boxer", desc: "Professional prize fighting", icon: "💰", bg: "bg-green-50", color: "text-green-600" },
      { role: "Boxing Coach", desc: "Corner man & trainer", icon: "📋", bg: "bg-blue-50", color: "text-blue-600" },
      { role: "Cutman", desc: "Ringside injury specialist", icon: "🩹", bg: "bg-gray-50", color: "text-gray-600" },
    ],
    roadmap: [
      { step: "Step 1", title: "Club / District", desc: "Local boxing clubs", status: "completed" },
      { step: "Step 2", title: "State Level", desc: "State Boxing Championship", status: "completed" },
      { step: "Step 3", title: "National Level", desc: "National Championships", status: "active" },
      { step: "Step 4", title: "International", desc: "World Boxing / Olympics", status: "pending" },
    ],
    academies: [
      { name: "Bhiwani Boxing Club", loc: "Haryana", type: "Elite" },
      { name: "SAI Rohtak", loc: "Haryana", type: "Govt" },
      { name: "Mary Kom Boxing Academy", loc: "Manipur", type: "Elite Private" },
      { name: "Army Sports Institute", loc: "Pune", type: "Armed Forces" },
    ],
    physical: ["Punching Power", "Footwork", "Head Movement", "Cardio Endurance", "Chin/Durability"],
    nutrition: ["Lean proteins", "Complex carbs for 12 rounds", "Hydration strategies"],
    aiQueries: ["How to become a pro boxer in India?", "Best boxing gloves for sparring?"],
    salary: [
      { level: "National Amateur", desc: "Govt Job (Army/Railways)", amt: "₹40,000 - ₹80,000 / month" },
      { level: "Pro Boxing Beginner", desc: "Fight Purses", amt: "₹50,000 - ₹2 Lakhs / fight" },
      { level: "World Champion (Amateur/Pro)", desc: "Rewards / Big Purses", amt: "₹1 Cr - ₹10+ Cr / yr" },
    ],
    successName: "Mary Kom", successDesc: "6-time World Champion", successQuote: "Don't give up as there is always a next time.",
    successImage: "/images/athletes/mary_kom.jpg"
  },
  hockey: {
    title: "Hockey", theme: "cyan",
    heroTitle: "Dribble to Glory", heroSubtitle: "Speed, stick-work, and teamwork. Discover the roadmap to Indian Hockey.",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hockey&style=circle&backgroundColor=transparent", avatarIcon: "🏑",
    avatarLabels: ["Forward", "Defender", "Olympics"],
    roles: [
      { role: "Forward", desc: "Goal scoring & attacking", icon: "🎯", bg: "bg-cyan-50", color: "text-cyan-600" },
      { role: "Midfielder", desc: "Playmaker and engine", icon: "🧠", bg: "bg-blue-50", color: "text-blue-600" },
      { role: "Defender", desc: "Tackling and intercepts", icon: "🛡️", bg: "bg-indigo-50", color: "text-indigo-600" },
      { role: "Goalkeeper", desc: "Agility and reflexes", icon: "🧤", bg: "bg-gray-50", color: "text-gray-600" },
    ],
    roadmap: [
      { step: "Step 1", title: "School/Club", desc: "Join local turf academies", status: "completed" },
      { step: "Step 2", title: "State Level", desc: "Junior/Senior State matches", status: "completed" },
      { step: "Step 3", title: "National Level", desc: "Hockey India Nationals", status: "active" },
      { step: "Step 4", title: "International", desc: "Indian National Team", status: "pending" },
    ],
    academies: [
      { name: "SAI Bangalore", loc: "Karnataka", type: "Elite Govt" },
      { name: "Surjit Hockey Academy", loc: "Jalandhar", type: "Elite" },
      { name: "Naval Tata Hockey Academy", loc: "Odisha", type: "Private Elite" },
      { name: "Major Dhyan Chand Academy", loc: "Lucknow", type: "Govt" },
    ],
    physical: ["Sprint Speed", "Stamina", "Wrist Flexibility", "Lower Back Strength", "Agility"],
    nutrition: ["High Carbs for matchday", "Lean protein", "Hydration"],
    aiQueries: ["How to join Hockey India camps?", "Best astroturf shoes?"],
    salary: [
      { level: "Domestic Level", desc: "PSU Jobs (Indian Oil, BPCL)", amt: "₹40,000 - ₹90,000 / month" },
      { level: "Hockey India League", desc: "Franchise Contracts", amt: "₹10 Lakhs - ₹40 Lakhs / season" },
      { level: "National Team Core", desc: "Hockey India Contract", amt: "₹20 Lakhs - ₹1+ Cr / yr" },
    ],
    successName: "Harmanpreet Singh", successDesc: "Indian Captain", successQuote: "We play for the flag, the rest follows.",
    successImage: "/images/athletes/harmanpreet_singh.jpg"
  },
  archery: {
    title: "Archery", theme: "lime",
    heroTitle: "Hit the Bullseye", heroSubtitle: "Focus, precision, and steady nerves. The roadmap to becoming a master archer.",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Archery&style=circle&backgroundColor=transparent", avatarIcon: "🏹",
    avatarLabels: ["Recurve", "Compound", "Gold"],
    roles: [
      { role: "Recurve Archer", desc: "Olympic category bows", icon: "🎯", bg: "bg-lime-50", color: "text-lime-600" },
      { role: "Compound Archer", desc: "High-tech pulley bows", icon: "⚙️", bg: "bg-gray-50", color: "text-gray-600" },
      { role: "Archery Coach", desc: "Train focus and technique", icon: "📋", bg: "bg-blue-50", color: "text-blue-600" },
      { role: "Bow Technician", desc: "Equipment tuning", icon: "🔧", bg: "bg-amber-50", color: "text-amber-600" },
    ],
    roadmap: [
      { step: "Step 1", title: "Club Level", desc: "Local archery clubs", status: "completed" },
      { step: "Step 2", title: "State Level", desc: "State Championships", status: "completed" },
      { step: "Step 3", title: "National Level", desc: "Archery Assoc. Nationals", status: "active" },
      { step: "Step 4", title: "International", desc: "World Cups / Olympics", status: "pending" },
    ],
    academies: [
      { name: "Tata Archery Academy", loc: "Jamshedpur", type: "Elite" },
      { name: "Army Sports Institute", loc: "Pune", type: "Armed Forces" },
      { name: "SAI Kolkata", loc: "West Bengal", type: "Govt" },
      { name: "Limba Ram Academy", loc: "Rajasthan", type: "Private" },
    ],
    physical: ["Upper Body Strength", "Core Stability", "Extreme Focus", "Steady Hands", "Vision"],
    nutrition: ["Balanced diet", "Brain-boosting foods (Omega 3)", "Low caffeine to avoid jitters"],
    aiQueries: ["Recurve vs Compound bows?", "How to enter Tata Archery Academy?"],
    salary: [
      { level: "National Archer", desc: "Govt Jobs / Services", amt: "₹40,000 - ₹80,000 / month" },
      { level: "Asian/World Medalist", desc: "Govt Rewards + TOPS", amt: "₹5 Lakhs - ₹30 Lakhs" },
      { level: "Olympic Medalist", desc: "Endorsements & Rewards", amt: "₹3 Cr - ₹10+ Cr" },
    ],
    successName: "Deepika Kumari", successDesc: "Former World No. 1", successQuote: "Focus on the target, blur out the noise.",
    successImage: "/images/athletes/deepika_kumari.jpg"
  },
  shooting: {
    title: "Shooting", theme: "indigo",
    heroTitle: "Precision & Focus", heroSubtitle: "Nerves of steel and perfect aim. The roadmap to becoming an elite marksman.",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Shooting&style=circle&backgroundColor=transparent", avatarIcon: "🔫",
    avatarLabels: ["Rifle", "Pistol", "Olympian"],
    roles: [
      { role: "Rifle Shooter", desc: "10m, 50m precision", icon: "🎯", bg: "bg-indigo-50", color: "text-indigo-600" },
      { role: "Pistol Shooter", desc: "10m Air, 25m Rapid", icon: "🔫", bg: "bg-slate-50", color: "text-slate-600" },
      { role: "Shotgun", desc: "Trap & Skeet", icon: "💥", bg: "bg-red-50", color: "text-red-600" },
      { role: "Sports Psychologist", desc: "Mental conditioning", icon: "🧠", bg: "bg-blue-50", color: "text-blue-600" },
    ],
    roadmap: [
      { step: "Step 1", title: "Club / District", desc: "Join rifle association", status: "completed" },
      { step: "Step 2", title: "State Level", desc: "Pre-Nationals (GV Mavalankar)", status: "completed" },
      { step: "Step 3", title: "National Level", desc: "National Shooting Champs", status: "active" },
      { step: "Step 4", title: "International", desc: "ISSF World Cups / Olympics", status: "pending" },
    ],
    academies: [
      { name: "Dr. Karni Singh Range", loc: "Delhi", type: "Elite Govt" },
      { name: "Gun for Glory", loc: "Multiple", type: "Elite Private" },
      { name: "Army Marksmanship Unit", loc: "Mhow", type: "Armed Forces" },
      { name: "Madhya Pradesh Academy", loc: "Bhopal", type: "Govt" },
    ],
    physical: ["Mental Endurance", "Core Stability", "Low Heart Rate Control", "Hand-Eye Coordination"],
    nutrition: ["Balanced diet", "Low Caffeine", "Hydration", "Eye health supplements"],
    aiQueries: ["How to import a sports rifle?", "Best shooting academies for 10m pistol?"],
    salary: [
      { level: "National Shooter", desc: "Govt Jobs / Armed Forces", amt: "₹40,000 - ₹90,000 / month" },
      { level: "ISSF Medalist", desc: "Govt Rewards + TOPS", amt: "₹10 Lakhs - ₹40 Lakhs / yr" },
      { level: "Olympic Medalist", desc: "Endorsements & Rewards", amt: "₹5 Cr - ₹20+ Cr" },
    ],
    successName: "Abhinav Bindra", successDesc: "Olympic Gold Medalist", successQuote: "Perfection is a moving target.",
    successImage: "/images/athletes/abhinav_bindra.jpg"
  }
};

export default function DynamicSportCareerPage() {
  const params = useParams();
  // We use params.sport to fetch the data. If not found, fallback to a generic message or football.
  const slug = (params.sport as string)?.toLowerCase();
  
  // If data doesn't exist, you could return a 404, but we'll safely fallback to 'football' to prevent errors.
  const data = sportsData[slug] || sportsData['football'];

  // Map theme strings to Tailwind color classes for dynamic styling
  const getThemeClasses = (theme: string) => {
    switch (theme) {
      case 'orange': return { text: 'text-orange-600', textDark: 'text-orange-950', bg: 'bg-orange-600', bgHover: 'hover:bg-orange-700', gradFrom: 'from-orange-50', gradTo: 'to-amber-50', border: 'border-orange-100', bgLight: 'bg-orange-100' };
      case 'purple': return { text: 'text-purple-600', textDark: 'text-purple-950', bg: 'bg-purple-600', bgHover: 'hover:bg-purple-700', gradFrom: 'from-purple-50', gradTo: 'to-fuchsia-50', border: 'border-purple-100', bgLight: 'bg-purple-100' };
      case 'pink': return { text: 'text-pink-600', textDark: 'text-pink-950', bg: 'bg-pink-600', bgHover: 'hover:bg-pink-700', gradFrom: 'from-pink-50', gradTo: 'to-rose-50', border: 'border-pink-100', bgLight: 'bg-pink-100' };
      case 'amber': return { text: 'text-amber-600', textDark: 'text-amber-950', bg: 'bg-amber-600', bgHover: 'hover:bg-amber-700', gradFrom: 'from-amber-50', gradTo: 'to-yellow-50', border: 'border-amber-100', bgLight: 'bg-amber-100' };
      case 'red': return { text: 'text-red-600', textDark: 'text-red-950', bg: 'bg-red-600', bgHover: 'hover:bg-red-700', gradFrom: 'from-red-50', gradTo: 'to-rose-50', border: 'border-red-100', bgLight: 'bg-red-100' };
      case 'cyan': return { text: 'text-cyan-600', textDark: 'text-cyan-950', bg: 'bg-cyan-600', bgHover: 'hover:bg-cyan-700', gradFrom: 'from-cyan-50', gradTo: 'to-sky-50', border: 'border-cyan-100', bgLight: 'bg-cyan-100' };
      case 'lime': return { text: 'text-lime-600', textDark: 'text-lime-950', bg: 'bg-lime-600', bgHover: 'hover:bg-lime-700', gradFrom: 'from-lime-50', gradTo: 'to-green-50', border: 'border-lime-100', bgLight: 'bg-lime-100' };
      case 'indigo': return { text: 'text-indigo-600', textDark: 'text-indigo-950', bg: 'bg-indigo-600', bgHover: 'hover:bg-indigo-700', gradFrom: 'from-indigo-50', gradTo: 'to-blue-50', border: 'border-indigo-100', bgLight: 'bg-indigo-100' };
      default: return { text: 'text-blue-600', textDark: 'text-blue-950', bg: 'bg-blue-600', bgHover: 'hover:bg-blue-700', gradFrom: 'from-blue-50', gradTo: 'to-indigo-50', border: 'border-blue-100', bgLight: 'bg-blue-100' };
    }
  };

  const t = getThemeClasses(data.theme);

  return (
    <SportsLayout>
      {/* Breadcrumb Journey */}
      <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-gray-500 mb-6 overflow-x-auto pb-2 hide-scrollbar">
        <Link href="/" className={`hover:${t.text} flex items-center gap-1`}>
           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
           <span className="hidden md:inline">Home</span>
        </Link>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <Link href="/sports" className={`hover:${t.text} font-medium`}>Sports</Link>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span className={`text-gray-800 font-medium border-b-2 border-${data.theme}-600 pb-0.5 capitalize`}>{data.title}</span>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span className="text-gray-500">Selection Roadmap</span>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span className="text-gray-500">Top Academies</span>
      </div>

      <div className="space-y-10 mb-10">
          
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
                <button className={`${t.bg} text-white px-8 py-3.5 rounded-2xl font-bold shadow-lg ${t.bgHover} hover:-translate-y-0.5 transition-all`}>
                  Start Training
                </button>
              </div>
            </div>
            
            {/* Animated Illustration */}
            <div className="w-full md:w-96 relative z-10 hidden md:block">
              <div className="relative w-full h-64 overflow-visible flex items-center justify-center">
                <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-${data.theme}-300 via-gray-300 to-${data.theme}-300 rounded-full blur-[60px] opacity-30`}></div>
                
                {/* Custom Avatar */}
                <img src={data.avatarUrl} alt={data.title} className={`w-48 h-48 relative z-10 drop-shadow-2xl ${t.bgLight} rounded-full border-4 border-white shadow-xl`} />
                
                {/* Floating Elements (Bouncing) */}
                <div className="absolute top-4 left-4 bg-white p-2.5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-2 animate-bounce delay-100 z-20">
                  <div className={`w-8 h-8 rounded-full ${t.bgLight} flex items-center justify-center ${t.text} text-lg`}>
                    {data.avatarIcon}
                  </div>
                  <span className="text-[10px] font-bold text-gray-800 pr-1">{data.avatarLabels[0]}</span>
                </div>
                
                <div className="absolute bottom-8 left-0 bg-white p-2.5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-2 animate-bounce delay-300 z-20">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 text-lg">
                    ⚡
                  </div>
                  <span className="text-[10px] font-bold text-gray-800 pr-1">{data.avatarLabels[1]}</span>
                </div>
                
                <div className="absolute top-16 right-0 bg-white p-2.5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-2 animate-bounce delay-500 z-20">
                  <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                     <Trophy className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold text-gray-800 pr-1">{data.avatarLabels[2]}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Specializations Grid */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Role</h2>
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
             <h2 className="text-2xl font-bold text-gray-900 mb-8">Professional {data.title} Roadmap</h2>
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
                   <Building2 className={`w-5 h-5 ${t.text}`} /> Top Academies
                </h3>
                <div className="space-y-4">
                   {data.academies.map((inst: any, i: number) => (
                     <div key={i} className={`flex gap-4 p-3 rounded-xl border border-gray-50 hover:bg-${data.theme}-50 hover:border-${data.theme}-100 transition-colors cursor-pointer group`}>
                        <div className={`w-12 h-12 ${t.bgLight} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:${t.bg} group-hover:text-white transition-colors`}>
                           <Trophy className="w-5 h-5" />
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

             {/* Core Skills & Diet */}
             <div className="grid grid-cols-1 gap-6">
                <div className="bg-white rounded-[24px] p-6 border border-gray-100 shadow-sm">
                   <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Dumbbell className="w-5 h-5 text-gray-600" /> Physical Requirements
                   </h3>
                   <div className="flex flex-wrap gap-2">
                      {data.physical.map((skill: string, i: number) => (
                         <span key={i} className="bg-gray-50 text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-lg border border-gray-200">{skill}</span>
                      ))}
                   </div>
                </div>

                <div className={`bg-gradient-to-r ${t.gradFrom} ${t.gradTo} rounded-[24px] p-6 border ${t.border} shadow-sm`}>
                   <h3 className={`font-bold ${t.textDark} mb-4 flex items-center gap-2`}>
                      <BookOpen className={`w-5 h-5 ${t.text}`} /> Essential Nutrition
                   </h3>
                   <div className="space-y-2 text-[11px] text-gray-700 font-medium">
                      {data.nutrition.map((nut: string, i: number) => (
                         <p key={i} className="flex items-center gap-2"><span className={`w-1.5 h-1.5 rounded-full ${t.bg}`}></span> {nut}</p>
                      ))}
                   </div>
                </div>
             </div>
          </div>
          
          {/* Bottom Grid: Insights & Success Stories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
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
               <div className="bg-amber-50 rounded-[22px] p-5 h-full relative overflow-hidden flex flex-col justify-center">
                  <div className="absolute -right-4 -bottom-4 opacity-10">
                     <Medal className="w-24 h-24 text-amber-900" />
                  </div>
                  <h3 className="font-bold text-amber-900 text-sm mb-4">Legendary Inspiration</h3>
                  <div className="flex gap-4 items-center">
                     <img src={data.successImage || `https://api.dicebear.com/7.x/avataaars/svg?seed=${data.successName}&style=circle`} alt={data.successName} className="w-16 h-16 bg-white rounded-full shadow-sm border-2 border-white object-cover" />
                     <div>
                        <h4 className="font-bold text-gray-900 text-[14px]">{data.successName}</h4>
                        <p className="text-[11px] text-gray-600 font-medium mb-1">{data.successDesc}</p>
                        <p className="text-[11px] text-gray-700 leading-snug">"{data.successQuote}"</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
    </SportsLayout>
  );
}
