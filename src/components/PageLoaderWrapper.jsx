"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PageLoaderWrapper({ children }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events?.on("routeChangeStart", handleStart);
    router.events?.on("routeChangeComplete", handleComplete);
    router.events?.on("routeChangeError", handleComplete);

    // Initial delay (simulate data fetching)
    const timer = setTimeout(() => setLoading(false), 800);

    return () => {
      clearTimeout(timer);
      router.events?.off("routeChangeStart", handleStart);
      router.events?.off("routeChangeComplete", handleComplete);
      router.events?.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin" />
        </div>
      ) : (
        children
      )}
    </>
  );
}
