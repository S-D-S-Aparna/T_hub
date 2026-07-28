import { Clock } from "lucide-react";

export default function ActivityTimeline() {
  const events = [
    { time: "8:00 AM", title: "Morning Walk", type: "workout" },
    { time: "10:15 AM", title: "Water Reminder Completed", type: "health" },
    { time: "1:30 PM", title: "Lunch Logged", type: "nutrition" },
    { time: "6:00 PM", title: "Gym Workout", type: "workout" },
    { time: "9:30 PM", title: "Sleep Started", type: "sleep" },
  ];

  return (
    <div className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100 mb-6">
      <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
        <Clock className="w-5 h-5 text-gray-400" /> Activity Timeline
      </h2>

      <div className="space-y-6 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
        {events.map((event, i) => (
          <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            
            <div className="flex items-center justify-center w-8 h-8 rounded-full border-4 border-white bg-indigo-100 text-[#6C4CF1] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10">
              <div className="w-2 h-2 rounded-full bg-[#6C4CF1]"></div>
            </div>
            
            <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] bg-gray-50 p-4 rounded-2xl border border-gray-100 group-hover:border-indigo-200 transition-colors">
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-gray-900 text-sm">{event.title}</span>
                <span className="text-[10px] font-bold text-gray-400">{event.time}</span>
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}
