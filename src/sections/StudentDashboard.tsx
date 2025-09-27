// src/sections/StudentDashboard.tsx
export function StudentDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">🎓 Student Dashboard</h1>

      <div className="bg-gray-900 p-4 rounded-xl">
        <h2 className="text-xl font-semibold">Adaptive Lessons</h2>
        <p>AI-generated tiered lesson plans tailored for your level.</p>
      </div>

      <div className="bg-gray-900 p-4 rounded-xl">
        <h2 className="text-xl font-semibold">Quests & Challenges</h2>
        <p>Complete quests to earn badges and unlock rewards.</p>
      </div>

      <div className="bg-gray-900 p-4 rounded-xl">
        <h2 className="text-xl font-semibold">Feedback</h2>
        <button className="bg-blue-600 px-3 py-2 rounded-lg mt-2">
          Give Quick Feedback
        </button>
      </div>
    </div>
  );
}
