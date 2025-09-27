// src/sections/TeacherDashboard.tsx
export function TeacherDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">👩‍🏫 Teacher Dashboard</h1>

      <div className="bg-gray-900 p-4 rounded-xl">
        <h2 className="text-xl font-semibold">Lesson Plan Generator</h2>
        <p>Create AI-powered, curriculum-aligned lesson plans.</p>
      </div>

      <div className="bg-gray-900 p-4 rounded-xl">
        <h2 className="text-xl font-semibold">Collaboration Tools</h2>
        <p>Co-create lessons with colleagues, submit for HOD approval.</p>
      </div>

      <div className="bg-gray-900 p-4 rounded-xl">
        <h2 className="text-xl font-semibold">Analytics</h2>
        <p>Track student engagement, performance, and feedback trends.</p>
      </div>
    </div>
  );
}
