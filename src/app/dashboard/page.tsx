// src/app/dashboard/page.tsx
"use client";

import { useState, useEffect } from "react";
import { StudentDashboard } from "@/sections/StudentDashboard";
import { TeacherDashboard } from "@/sections/TeacherDashboard";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const [role, setRole] = useState<"student" | "teacher">("student");
  const router = useRouter();

  useEffect(() => {
    // Check if user has selected a role
    const storedRole = localStorage.getItem("userRole") as
      | "student"
      | "teacher";
    if (storedRole) {
      setRole(storedRole);
    } else {
      // Redirect to role selection if no role is stored
      router.push("/role-selection");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    router.push("/");
  };

  if (!role) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 p-6">
      {/* Header with logout */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white">
          {role === "student" ? "🎓 Student" : "👩‍🏫 Teacher"} Dashboard
        </h1>

        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
        >
          Logout
        </button>
      </div>

      {/* Role toggle (optional - for switching roles without logout) */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => {
            setRole("student");
            localStorage.setItem("userRole", "student");
          }}
          className={`px-4 py-2 rounded-lg ${
            role === "student"
              ? "bg-blue-600 text-white"
              : "bg-gray-700 text-gray-300"
          }`}
        >
          Student View
        </button>
        <button
          onClick={() => {
            setRole("teacher");
            localStorage.setItem("userRole", "teacher");
          }}
          className={`px-4 py-2 rounded-lg ${
            role === "teacher"
              ? "bg-green-600 text-white"
              : "bg-gray-700 text-gray-300"
          }`}
        >
          Teacher View
        </button>
      </div>

      {/* Dashboard UI */}
      {role === "student" ? <StudentDashboard /> : <TeacherDashboard />}
    </div>
  );
}
