"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCcw, Home } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-xl border border-gray-100 text-center">
        <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-10 h-10 text-red-500" />
        </div>
        
        <h1 className="text-2xl font-black text-gray-900 mb-3">
          Oops! Something went wrong
        </h1>
        
        <p className="text-gray-500 text-sm mb-8">
          We apologize for the inconvenience. An unexpected error has occurred in our system. Our technical team has been notified.
        </p>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => reset()}
            className="w-full py-3.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-colors flex items-center justify-center gap-2"
          >
            <RefreshCcw className="w-4 h-4" /> Try Again
          </button>
          
          <Link 
            href="/"
            className="w-full py-3.5 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-bold transition-colors flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" /> Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
