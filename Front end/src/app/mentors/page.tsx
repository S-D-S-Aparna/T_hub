"use client";

import { useState, useEffect } from "react";
import MentorsLayout from "@/components/layout/MentorsLayout";
import { Search, Star, CheckCircle2, ChevronDown } from "lucide-react";
import api from "@/lib/api";
import Link from "next/link";
import Image from "next/image";
import BookingModal from "@/components/mentors/BookingModal";
import { FEATURED_MENTORS } from "./featuredMentors";

type Mentor = {
  id: number | string;
  name: string;
  email: string;
  isFeaturedSample?: boolean;
  featuredImage?: string;
  mentorProfile?: {
    bio: string;
    company: string | null;
    role: string | null;
    expertise: string[];
    yearsExperience: number | null;
    hourlyRate: number | null;
    rating: number | null;
    totalSessions: number;
  };
};

export default function MentorsPage() {
  const [mentors, setMentors] = useState<Mentor[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [bookingMentor, setBookingMentor] = useState<Mentor | null>(null);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const response = await api.get('/users/mentors');
        const apiMentors = response.data.mentors || [];
        
        // Add featured mentors from our local file
        const featuredList = Object.values(FEATURED_MENTORS);
        setMentors([...featuredList, ...apiMentors]);
      } catch (error) {
        console.warn("Could not fetch mentors from API, falling back to featured mentors.");
        // Fallback to just featured if API fails
        setMentors(Object.values(FEATURED_MENTORS));
      } finally {
        setLoading(false);
      }
    };
    fetchMentors();
  }, []);

  const filteredMentors = mentors.filter(m => 
    m.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    m.mentorProfile?.expertise?.some(exp => exp.toLowerCase().includes(searchQuery.toLowerCase())) ||
    m.mentorProfile?.role?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <MentorsLayout>
      {/* Hero Banner */}
      <div className="bg-[#4D28E0] rounded-3xl p-8 md:p-12 mb-8 relative overflow-hidden flex flex-col md:flex-row items-center justify-between shadow-lg">
        <div className="relative z-10 md:w-2/3 text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Learn from India's<br />Best Mentors
          </h1>
          <div className="flex flex-col gap-3 mb-8">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 rounded-full p-1"><CheckCircle2 className="w-4 h-4 text-white" /></div>
              <span className="font-medium text-sm">Free 30-Minute Sessions</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-white/20 rounded-full p-1"><CheckCircle2 className="w-4 h-4 text-white" /></div>
              <span className="font-medium text-sm">Verified Professionals</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-white/20 rounded-full p-1"><CheckCircle2 className="w-4 h-4 text-white" /></div>
              <span className="font-medium text-sm">Live 1:1 Guidance</span>
            </div>
          </div>
          <button className="bg-white text-[#4D28E0] font-bold py-3 px-8 rounded-xl shadow-lg hover:bg-gray-50 transition-colors">
            Browse Mentors
          </button>
        </div>
        <div className="absolute right-0 bottom-0 md:w-1/3 h-full hidden md:flex items-end justify-end opacity-90">
          <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix&backgroundColor=transparent" alt="Mentors Illustration" className="w-64 h-64 object-cover" />
        </div>
      </div>

      {/* Filters Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="flex flex-wrap items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            Experience <ChevronDown className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            Language <ChevronDown className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            Availability <ChevronDown className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            Session Purpose <ChevronDown className="w-4 h-4" />
          </button>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 pr-4 py-2 bg-white border border-gray-200 text-sm rounded-full outline-none focus:border-[#4D28E0]"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
            Sort by: <span className="font-bold">Popular</span> <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Mentors Grid */}
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#4D28E0]"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
          {filteredMentors.map(mentor => (
            <div key={mentor.id} className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden">
              <div className="p-5 flex-1 relative">
                {/* Profile Image & Status */}
                <div className="flex justify-between items-start mb-4">
                  <Link href={`/mentors/${mentor.id}`} className="w-16 h-16 rounded-full relative overflow-hidden bg-indigo-50 border border-gray-100 flex items-center justify-center">
                    {mentor.isFeaturedSample ? (
                      <Image src={mentor.featuredImage!} alt={mentor.name} width={40} height={40} className="object-contain" unoptimized />
                    ) : (
                      <Image src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${mentor.name}`} alt={mentor.name} fill className="object-cover" unoptimized />
                    )}
                  </Link>
                  <div className="flex items-center gap-1.5 border border-gray-100 shadow-sm px-2.5 py-1 rounded-full bg-white">
                    <Star className="w-3.5 h-3.5 text-yellow-400 fill-current" />
                    <span className="text-xs font-bold text-gray-700">{mentor.mentorProfile?.rating || "5.0"}</span>
                  </div>
                </div>

                {/* Name & verified */}
                <Link href={`/mentors/${mentor.id}`} className="flex items-center gap-1.5 mb-1 group">
                  <h3 className="font-bold text-gray-900 text-lg group-hover:text-[#4D28E0] transition-colors line-clamp-1">{mentor.name}</h3>
                  <svg className="w-4 h-4 text-blue-500 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z" />
                  </svg>
                </Link>

                {/* Role */}
                <p className="text-xs text-gray-500 font-medium line-clamp-1 mb-2">
                  {mentor.mentorProfile?.role || "Mentor"} {mentor.mentorProfile?.company && `at ${mentor.mentorProfile.company}`}
                </p>

                {/* Experience */}
                <p className="text-xs text-gray-600 mb-4">
                  {mentor.mentorProfile?.yearsExperience ? `${mentor.mentorProfile.yearsExperience}+ years experience` : "Experienced Professional"}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {mentor.mentorProfile?.expertise?.slice(0, 3).map(tag => (
                    <span key={tag} className="text-[10px] bg-gray-50 text-gray-600 border border-gray-200 px-2 py-1 rounded-md font-medium whitespace-nowrap">
                      {tag}
                    </span>
                  ))}
                  {(mentor.mentorProfile?.expertise?.length || 0) > 3 && (
                    <span className="text-[10px] bg-gray-50 text-gray-600 border border-gray-200 px-2 py-1 rounded-md font-medium">
                      +{(mentor.mentorProfile?.expertise?.length || 0) - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Action Area */}
              <div className="p-4 pt-2 mt-auto bg-white border-t-transparent">
                <div className="flex items-center gap-1.5 mb-3 px-1">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  <span className="text-xs font-semibold text-green-600">Available Today</span>
                </div>
                <button 
                  onClick={() => setBookingMentor(mentor)}
                  className="w-full bg-[#4D28E0] hover:bg-[#3d1eb3] text-white font-bold py-3 rounded-xl transition-all shadow-md text-sm"
                >
                  Book Free Session
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Booking Modal */}
      {bookingMentor && (
        <BookingModal 
          mentor={bookingMentor} 
          onClose={() => setBookingMentor(null)} 
        />
      )}
    </MentorsLayout>
  );
}
