import Link from "next/link";
import { FileQuestion, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-xl border border-gray-100 text-center">
        <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <FileQuestion className="w-10 h-10 text-blue-500" />
        </div>
        
        <h1 className="text-3xl font-black text-gray-900 mb-3">
          404
        </h1>
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Page Not Found
        </h2>
        
        <p className="text-gray-500 text-sm mb-8">
          The page you are looking for doesn't exist or has been moved. Let's get you back on track.
        </p>

        <div className="flex flex-col gap-3">
          <Link 
            href="/"
            className="w-full py-3.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-colors flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" /> Go to Homepage
          </Link>
          
          <Link 
            href="/search"
            className="w-full py-3.5 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-bold transition-colors flex items-center justify-center gap-2"
          >
            <Search className="w-4 h-4" /> Search Site
          </Link>
        </div>
      </div>
    </div>
  );
}
