// src/app/role-selection/page.tsx
"use client";

import { useRouter } from "next/navigation";

export default function RoleSelectionPage() {
  const router = useRouter();

  const selectRole = (role: "student" | "teacher") => {
    // Store role selection (in a real app, you'd use context or state management)
    localStorage.setItem("userRole", role);
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-purple-900">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Choose Your Role</h1>
        <p className="text-gray-300 mb-8">Select how you'll be using ClassCraft AI</p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {/* Student Card */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-2xl w-80 hover:scale-105 transition-transform cursor-pointer">
            <div className="text-6xl mb-4">🎓</div>
            <h2 className="text-2xl font-bold text-white mb-4">Student</h2>
            <p className="text-gray-400 mb-6">
              Access personalized lessons, complete quests, and track your learning journey.
            </p>
            <button
              onClick={() => selectRole("student")}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Continue as Student
            </button>
          </div>
          
          {/* Teacher Card */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-2xl w-80 hover:scale-105 transition-transform cursor-pointer">
            <div className="text-6xl mb-4">👩‍🏫</div>
            <h2 className="text-2xl font-bold text-white mb-4">Teacher</h2>
            <p className="text-gray-400 mb-6">
              Create lesson plans, collaborate with colleagues, and analyze student progress.
            </p>
            <button
              onClick={() => selectRole("teacher")}
              className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Continue as Teacher
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}