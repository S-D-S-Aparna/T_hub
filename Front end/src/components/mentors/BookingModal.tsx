"use client";

import { useState } from "react";
import { Calendar as CalendarIcon, Clock, X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface BookingModalProps {
  mentor: any;
  onClose: () => void;
}

export default function BookingModal({ mentor, onClose }: BookingModalProps) {
  const router = useRouter();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [purpose, setPurpose] = useState("");
  const [submitting, setSubmitting] = useState(false);

  if (!mentor) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setSubmitting(false);
      // Route to success page
      const stream = mentor.mentorProfile?.expertise?.[0] || "General";
      router.push(`/mentors/booking-confirmed?stream=${encodeURIComponent(stream)}&date=${encodeURIComponent(date)}&time=${encodeURIComponent(time)}&mentor=${encodeURIComponent(mentor.name)}`);
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-3xl w-full max-w-xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
        <div className="flex justify-between items-center p-5 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900">Book Your Free Session</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {/* Mentor Summary */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full relative overflow-hidden bg-indigo-50 shrink-0 border border-gray-100 flex items-center justify-center">
              {mentor.isFeaturedSample ? (
                <Image src={mentor.featuredImage} alt={mentor.name} width={40} height={40} className="object-contain" unoptimized />
              ) : (
                <Image src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${mentor.name}`} alt={mentor.name} fill className="object-cover" unoptimized />
              )}
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg flex items-center gap-1">
                {mentor.name}
                <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z" />
                </svg>
              </h3>
              <p className="text-sm text-gray-500 font-medium">{mentor.mentorProfile?.role || "Mentor"} {mentor.mentorProfile?.company && `at ${mentor.mentorProfile.company}`}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Date & Time Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5 flex items-center gap-1.5">
                  <CalendarIcon className="w-4 h-4 text-gray-400" /> Select Date
                </label>
                <input 
                  type="date" 
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full bg-gray-50 border border-gray-200 text-gray-800 rounded-xl px-4 py-2.5 outline-none focus:border-[#4D28E0] transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-gray-400" /> Select Time
                </label>
                <input 
                  type="time" 
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 text-gray-800 rounded-xl px-4 py-2.5 outline-none focus:border-[#4D28E0] transition-colors"
                  required
                />
              </div>
            </div>

            {/* User Details */}
            <div className="space-y-4 pt-2">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Your Name</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full bg-gray-50 border border-gray-200 text-gray-800 rounded-xl px-4 py-2.5 outline-none focus:border-[#4D28E0] transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  className="w-full bg-gray-50 border border-gray-200 text-gray-800 rounded-xl px-4 py-2.5 outline-none focus:border-[#4D28E0] transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number</label>
                <input 
                  type="tel" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 9876543210"
                  className="w-full bg-gray-50 border border-gray-200 text-gray-800 rounded-xl px-4 py-2.5 outline-none focus:border-[#4D28E0] transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Purpose of Session</label>
                <textarea 
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  placeholder="What would you like to discuss?"
                  rows={3}
                  className="w-full bg-gray-50 border border-gray-200 text-gray-800 rounded-xl px-4 py-2.5 outline-none focus:border-[#4D28E0] transition-colors resize-none"
                  required
                ></textarea>
              </div>
            </div>
            
            <div className="pt-2">
              <button 
                type="submit" 
                disabled={submitting}
                className="w-full bg-[#4D28E0] hover:bg-[#3d1eb3] disabled:opacity-70 text-white font-bold py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center text-sm"
              >
                {submitting ? "Processing..." : "Confirm Booking"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
