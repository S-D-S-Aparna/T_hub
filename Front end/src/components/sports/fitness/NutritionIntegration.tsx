import { Utensils, Droplet, Beef, Wheat, Cookie } from "lucide-react";

export default function NutritionIntegration() {
  return (
    <div className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100 mb-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
          <Utensils className="w-5 h-5 text-emerald-500" /> Nutrition
        </h2>
        <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">1,240 / 2,000 kcal</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-orange-50 rounded-2xl p-4 flex flex-col items-center text-center">
          <Beef className="w-6 h-6 text-orange-500 mb-2" />
          <span className="text-xl font-black text-orange-950">45<span className="text-xs text-orange-500">g</span></span>
          <span className="text-[10px] font-bold text-orange-400 uppercase tracking-widest mt-1">Protein</span>
        </div>
        <div className="bg-amber-50 rounded-2xl p-4 flex flex-col items-center text-center">
          <Wheat className="w-6 h-6 text-amber-500 mb-2" />
          <span className="text-xl font-black text-amber-950">120<span className="text-xs text-amber-500">g</span></span>
          <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest mt-1">Carbs</span>
        </div>
        <div className="bg-rose-50 rounded-2xl p-4 flex flex-col items-center text-center">
          <Cookie className="w-6 h-6 text-rose-500 mb-2" />
          <span className="text-xl font-black text-rose-950">32<span className="text-xs text-rose-500">g</span></span>
          <span className="text-[10px] font-bold text-rose-400 uppercase tracking-widest mt-1">Fat</span>
        </div>
        <div className="bg-sky-50 rounded-2xl p-4 flex flex-col items-center text-center">
          <Droplet className="w-6 h-6 text-sky-500 mb-2" />
          <span className="text-xl font-black text-sky-950">1.2<span className="text-xs text-sky-500">L</span></span>
          <span className="text-[10px] font-bold text-sky-400 uppercase tracking-widest mt-1">Water</span>
        </div>
      </div>
    </div>
  );
}
