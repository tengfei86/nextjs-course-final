"use client";

import { useAuth } from "@/hooks/use-auth";

export default function Header() {
  const { user, signOut } = useAuth();

  if (!user) return null;

  return (
    <div className="w-full border-b border-gray-200 dark:border-gray-800 mb-6">
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium">
            {user.email?.[0].toUpperCase()}
          </div>
          <div>
            <p className="text-sm font-medium">{user.email}</p>
          </div>
        </div>
        <button
          onClick={signOut}
          className="px-4 py-2 text-sm text-red-600 hover:text-red-700 font-medium transition-colors"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
