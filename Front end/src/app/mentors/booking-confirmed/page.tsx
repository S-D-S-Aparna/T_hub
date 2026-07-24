"use client";

import MainLayout from "@/components/layout/MainLayout";
import { CheckCircle2, Video } from "lucide-react";
import Link from "next/link";
import { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import confetti from "canvas-confetti";

function BookingConfirmedContent() {
  const searchParams = useSearchParams();
  const mentor = searchParams.get("mentor");
  const stream = searchParams.get("stream");
  const date = searchParams.get("date") || "Nov 15, 2024";
  const time = searchParams.get("time") || "10:00 AM IST";

  useEffect(() => {
    // Fire a nice confetti burst on success!
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#4f46e5', '#ec4899', '#f59e0b']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#4f46e5', '#ec4899', '#f59e0b']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 bg-gray-50">
      <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-gray-100 shadow-xl text-center max-w-lg w-full">
        
        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-500" />
        </div>

        <h1 className="text-3xl font-extrabold text-gray-900 mb-3 tracking-tight">Session Booked Successfully!</h1>
        <p className="text-sm text-gray-500 mb-8 max-w-sm mx-auto font-medium">
          Your mentor will contact you shortly with meeting details.
        </p>

        <div className="bg-gray-50 rounded-2xl p-5 mb-8 border border-gray-100 text-left text-sm">
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-gray-200/60">
              <span className="text-gray-500 font-medium">Mentor</span>
              <span className="text-gray-900 font-bold">{mentor || "Jane Doe"}</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-gray-200/60">
              <span className="text-gray-500 font-medium">Category</span>
              <span className="text-gray-900 font-bold">{stream || "Tech & Upskilling"}</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-gray-200/60">
              <span className="text-gray-500 font-medium">Date</span>
              <span className="text-gray-900 font-bold">{date}</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-gray-200/60">
              <span className="text-gray-500 font-medium">Time</span>
              <span className="text-gray-900 font-bold">{time}</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-gray-200/60">
              <span className="text-gray-500 font-medium">Session Duration</span>
              <span className="text-gray-900 font-bold">30 Mins</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 font-medium">Google Meet Link</span>
              <a href="https://meet.google.com/abc-xyz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[#4D28E0] font-bold hover:underline">
                <Video className="w-4 h-4" /> meet.google.com/abc-xyz
              </a>
            </div>
          </div>
        </div>

        <Link 
          href="/dashboard" 
          className="w-full bg-[#4D28E0] hover:bg-[#3d1eb3] text-white font-bold py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center text-sm inline-block"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}

export default function BookingConfirmed() {
  return (
    <MainLayout>
      <Suspense fallback={<div className="py-20 text-center">Loading confirmation...</div>}>
        <BookingConfirmedContent />
      </Suspense>
    </MainLayout>
  );
}
