"use client";

import { useState, useEffect, use } from "react";
import MentorsLayout from "@/components/layout/MentorsLayout";
import { Star, Video, MapPin, CheckCircle2, ChevronRight, ArrowLeft } from "lucide-react";
import api from "@/lib/api";
import Link from "next/link";
import Image from "next/image";
import BookingModal from "@/components/mentors/BookingModal";
import { FEATURED_MENTORS } from "../featuredMentors";

export default function MentorDetails({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const mentorId = resolvedParams.id;
  const [mentor, setMentor] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("About");
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  useEffect(() => {
    const fetchMentor = async () => {
      try {
        if (typeof mentorId === 'string' && mentorId.startsWith('featured-')) {
          const featured = FEATURED_MENTORS[mentorId];
          if (featured) {
            setMentor(featured);
            setLoading(false);
            return;
          }
        }
        const response = await api.get(`/users/mentors/${mentorId}`);
        setMentor(response.data.mentor);
      } catch (err) {
        console.warn("Could not fetch mentor from API:", err);
        setError("Could not find mentor.");
      } finally {
        setLoading(false);
      }
    };
    fetchMentor();
  }, [mentorId]);

  if (loading) {
    return (
      <MentorsLayout>
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#4D28E0]"></div>
        </div>
      </MentorsLayout>
    );
  }

  if (error || !mentor) {
    return (
      <MentorsLayout>
        <div className="text-center py-20">
          <h1 className="text-2xl font-bold text-gray-800">Mentor Not Found</h1>
          <Link href="/mentors" className="text-[#4D28E0] hover:underline mt-4 inline-block flex items-center justify-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Mentors
          </Link>
        </div>
      </MentorsLayout>
    );
  }

  const profile = mentor.mentorProfile || {};
  const tabs = ["About", "Experience", "Education", "Achievements", "Reviews", "Availability"];

  return (
    <MentorsLayout>
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link href="/mentors" className="hover:text-[#4D28E0] transition-colors">Mentors</Link>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span className="text-gray-900 font-medium">{mentor.name}</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Left Column: Main Content */}
        <div className="lg:flex-1 space-y-8">
          
          {/* Header Profile Info */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-24 h-24 rounded-full relative overflow-hidden bg-indigo-50 shrink-0 shadow-sm border border-gray-100 flex items-center justify-center">
              {mentor.isFeaturedSample ? (
                <Image src={mentor.featuredImage} alt={mentor.name} width={60} height={60} className="object-contain" unoptimized />
              ) : (
                <Image src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${mentor.name}`} alt={mentor.name} fill className="object-cover" unoptimized />
              )}
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-1.5 mb-1">
                <h1 className="text-2xl font-bold text-gray-900">{mentor.name}</h1>
                <svg className="w-5 h-5 text-blue-500 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z" />
                </svg>
              </div>
              
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600 font-medium mb-3">
                <span>{profile.role || "Expert Mentor"} {profile.company && `at ${profile.company}`}</span>
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-gray-400" /> Bengaluru, India</span>
              </div>
              
              <div className="flex items-center gap-3 text-sm font-semibold mb-4">
                <div className="flex items-center gap-1 bg-yellow-50 text-yellow-700 px-2.5 py-1 rounded-md border border-yellow-100 shadow-sm">
                  <Star className="w-4 h-4 fill-current" /> {profile.rating || "5.0"}
                </div>
                <span className="text-gray-400 underline decoration-gray-300 underline-offset-2">124 Reviews</span>
                <span className="text-gray-300">|</span>
                <div className="flex items-center gap-1.5 text-gray-600">
                  <Video className="w-4 h-4 text-gray-400" /> {profile.totalSessions || 100}+ Sessions
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {profile.expertise?.map((tag: string) => (
                  <span key={tag} className="text-xs bg-gray-50 text-gray-700 border border-gray-200 px-3 py-1.5 rounded-md font-medium shadow-sm">
                    {tag}
                  </span>
                ))}
                {!profile.expertise?.length && (
                  <span className="text-xs bg-gray-50 text-gray-700 border border-gray-200 px-3 py-1.5 rounded-md font-medium shadow-sm">General Guidance</span>
                )}
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex space-x-6 overflow-x-auto custom-scrollbar">
              {tabs.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 border-b-2 font-semibold text-sm whitespace-nowrap transition-colors ${
                    activeTab === tab 
                      ? "border-[#4D28E0] text-[#4D28E0]" 
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content (About Me) */}
          {activeTab === "About" && (
            <div className="flex flex-col md:flex-row gap-8">
              {/* Bio */}
              <div className="md:w-2/3">
                <h3 className="text-lg font-bold text-gray-900 mb-3">About Me</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {profile.bio || "Hi! I am a passionate mentor dedicated to helping you achieve your career goals. With years of industry experience, I can guide you through technical challenges, interview preparation, and career planning. Let's connect and chart out your path to success."}
                </p>
                <p className="text-gray-600 leading-relaxed text-sm mt-4">
                  I specialize in structuring learning paths that are practical and aligned with current industry standards. Whether you are a beginner or looking to scale up, I can tailor our sessions to your specific needs.
                </p>
              </div>
              
              {/* Stats / Info */}
              <div className="md:w-1/3 bg-gray-50 rounded-2xl p-5 border border-gray-100">
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-gray-500 font-medium mb-1">Languages</p>
                    <p className="text-sm font-semibold text-gray-900">English, Hindi</p>
                  </div>
                  <div className="h-px bg-gray-200"></div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium mb-1">Session Type</p>
                    <p className="text-sm font-semibold text-gray-900">1:1 Video Call</p>
                  </div>
                  <div className="h-px bg-gray-200"></div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium mb-1">Session Duration</p>
                    <p className="text-sm font-semibold text-gray-900">30 Mins / 45 Mins</p>
                  </div>
                  <div className="h-px bg-gray-200"></div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium mb-1">Response Time</p>
                    <p className="text-sm font-semibold text-gray-900">Within 2 hours</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab !== "About" && (
             <div className="text-gray-500 italic py-10 text-center bg-gray-50 rounded-xl">
               Information for {activeTab} will be available soon.
             </div>
          )}
          
        </div>

        {/* Right Column: Booking Card */}
        <div className="lg:w-80 shrink-0">
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-xl sticky top-24">
            <div className="flex items-center gap-1.5 mb-4">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-green-600">Available Today</span>
            </div>
            
            <h3 className="font-bold text-gray-900 text-lg mb-2">Book a Session</h3>
            <p className="text-sm text-gray-500 mb-6">Schedule a free 1-on-1 video call to discuss your goals.</p>
            
            <button 
              onClick={() => setBookingModalOpen(true)}
              className="w-full bg-[#4D28E0] hover:bg-[#3d1eb3] text-white font-bold py-3.5 rounded-xl transition-all shadow-md text-sm mb-4"
            >
              Book Free Session
            </button>
            
            <p className="text-xs text-center text-gray-400 font-medium">
              Usually replies in 2 hours
            </p>
          </div>
        </div>

      </div>

      {bookingModalOpen && (
        <BookingModal 
          mentor={mentor} 
          onClose={() => setBookingModalOpen(false)} 
        />
      )}
    </MentorsLayout>
  );
}
