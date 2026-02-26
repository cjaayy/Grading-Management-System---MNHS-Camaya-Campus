import {
  GraduationCap,
  BookOpen,
  TrendingUp,
  Calendar,
  Layers,
} from "lucide-react";

export default function StudentDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-text mb-6">Student Dashboard</h1>

      {/* Track & Strand Info */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 mb-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-primary/10 p-2 rounded-lg">
            <Layers className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-sm text-text-light">Track & Strand</p>
            <p className="font-semibold text-text">Academic Track - STEM</p>
          </div>
        </div>
        <p className="text-xs text-text-light">
          Science, Technology, Engineering, and Mathematics
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          <div className="flex items-center gap-3">
            <div className="bg-secondary/10 p-2.5 rounded-lg">
              <BookOpen className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <p className="text-sm text-text-light">Enrolled Subjects</p>
              <p className="text-xl font-bold text-text">9</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-2.5 rounded-lg">
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-text-light">General Average</p>
              <p className="text-xl font-bold text-text">91.2</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-2.5 rounded-lg">
              <GraduationCap className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-text-light">Grade Level</p>
              <p className="text-xl font-bold text-text">Grade 11</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          <div className="flex items-center gap-3">
            <div className="bg-amber-100 p-2.5 rounded-lg">
              <Calendar className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <p className="text-sm text-text-light">School Year</p>
              <p className="text-xl font-bold text-text">2025-2026</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Grades Preview */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-text mb-1">Recent Grades</h2>
        <p className="text-xs text-text-light mb-4">
          1st Semester | STEM Strand Subjects
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-3 px-4 text-text-light font-medium">
                  Subject
                </th>
                <th className="text-center py-3 px-4 text-text-light font-medium">
                  Midterm
                </th>
                <th className="text-center py-3 px-4 text-text-light font-medium">
                  Finals
                </th>
                <th className="text-center py-3 px-4 text-text-light font-medium">
                  Final Grade
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  subject: "Oral Communication",
                  midterm: 92,
                  finals: "--",
                  final: "--",
                },
                {
                  subject: "General Mathematics",
                  midterm: 90,
                  finals: "--",
                  final: "--",
                },
                {
                  subject: "Earth and Life Science",
                  midterm: 93,
                  finals: "--",
                  final: "--",
                },
                {
                  subject: "Pre-Calculus",
                  midterm: 88,
                  finals: "--",
                  final: "--",
                },
                {
                  subject: "General Biology 1",
                  midterm: 91,
                  finals: "--",
                  final: "--",
                },
              ].map((row) => (
                <tr
                  key={row.subject}
                  className="border-b border-gray-50 hover:bg-gray-50/50"
                >
                  <td className="py-3 px-4 font-medium text-text">
                    {row.subject}
                  </td>
                  <td className="py-3 px-4 text-center text-text">
                    {row.midterm}
                  </td>
                  <td className="py-3 px-4 text-center text-text-light">
                    {row.finals}
                  </td>
                  <td className="py-3 px-4 text-center text-text-light">
                    {row.final}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
