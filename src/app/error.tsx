"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-red-600 mb-4">
        😢 Oops! Something went wrong.
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        An unexpected error has occurred. Please try again.
      </p>
      <button
        onClick={reset}
        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
      >
        🔄 Try Again
      </button>
    </div>
  );
}
