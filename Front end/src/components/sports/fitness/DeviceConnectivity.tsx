import { Smartphone, Watch, CheckCircle2 } from "lucide-react";

export default function DeviceConnectivity() {
  return (
    <div className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100 mb-6">
      <h2 className="text-lg font-bold text-gray-900 mb-6">Connected Devices</h2>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
              <Watch className="w-5 h-5 text-gray-700" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">Apple Watch Series 9</p>
              <p className="text-xs text-gray-500 font-medium">Last synced: Just now</p>
            </div>
          </div>
          <CheckCircle2 className="w-5 h-5 text-emerald-500" />
        </div>

        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
              <Smartphone className="w-5 h-5 text-gray-700" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">Apple HealthKit</p>
              <p className="text-xs text-gray-500 font-medium">Last synced: 2m ago</p>
            </div>
          </div>
          <CheckCircle2 className="w-5 h-5 text-emerald-500" />
        </div>
      </div>
    </div>
  );
}
