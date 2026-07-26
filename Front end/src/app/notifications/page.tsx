"use client";

import SportsLayout from "@/components/layout/SportsLayout";
import Link from "next/link";
import { ChevronLeft, Bell, CalendarClock, Droplets, Target, UserPlus } from "lucide-react";

export default function SmartNotificationsPage() {
  const notifications = [
    {
      id: 1,
      type: "Match",
      title: "Upcoming Match Tomorrow",
      message: "City Cricket League semi-finals at 9:00 AM.",
      time: "2h ago",
      icon: <Target className="w-5 h-5 text-indigo-600" />,
      bg: "bg-indigo-100",
      unread: true
    },
    {
      id: 2,
      type: "Health",
      title: "Hydration Reminder",
      message: "You haven't logged your water intake in 4 hours.",
      time: "4h ago",
      icon: <Droplets className="w-5 h-5 text-blue-600" />,
      bg: "bg-blue-100",
      unread: true
    },
    {
      id: 3,
      type: "Coach",
      title: "Session Rescheduled",
      message: "Coach Arjun moved today's practice to 6:00 PM.",
      time: "Yesterday",
      icon: <CalendarClock className="w-5 h-5 text-amber-600" />,
      bg: "bg-amber-100",
      unread: false
    },
    {
      id: 4,
      type: "Community",
      title: "New Follower",
      message: "Rahul Varma started following your profile.",
      time: "Yesterday",
      icon: <UserPlus className="w-5 h-5 text-emerald-600" />,
      bg: "bg-emerald-100",
      unread: false
    }
  ];

  return (
    <SportsLayout>
      <div className="max-w-xl mx-auto pb-20">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-3">
            <Link href="/sports" className="p-2 hover:bg-gray-50 rounded-full transition-colors">
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </Link>
            <h1 className="text-lg font-bold text-gray-900 flex items-center gap-2">
               <Bell className="w-5 h-5 text-indigo-500" /> Notifications
            </h1>
          </div>
          <button className="text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors">
            Mark all as read
          </button>
        </div>

        {/* Notifications List */}
        <div className="bg-white rounded-[32px] p-4 shadow-sm border border-gray-100">
          <div className="space-y-1">
            {notifications.map((notif) => (
              <div key={notif.id} className={`flex items-start gap-4 p-4 rounded-2xl transition-colors cursor-pointer ${
                notif.unread ? "bg-indigo-50/50 hover:bg-indigo-50" : "hover:bg-gray-50"
              }`}>
                
                <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${notif.bg}`}>
                  {notif.icon}
                </div>
                
                <div className="flex-1 pt-0.5">
                  <div className="flex items-start justify-between mb-1">
                    <h4 className={`text-sm ${notif.unread ? "font-bold text-gray-900" : "font-medium text-gray-700"}`}>
                      {notif.title}
                    </h4>
                    <span className="text-[10px] font-bold text-gray-400 whitespace-nowrap ml-2">{notif.time}</span>
                  </div>
                  <p className="text-[12px] text-gray-500 leading-relaxed font-medium">
                    {notif.message}
                  </p>
                </div>
                
                {notif.unread && (
                  <div className="w-2.5 h-2.5 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                )}
                
              </div>
            ))}
          </div>
        </div>

      </div>
    </SportsLayout>
  );
}
