import {
  GraduationCap,
  TrendingUp,
  BookOpen,
  Calendar,
  Layers,
} from "lucide-react";

export default function ParentDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-text mb-6">Parent Dashboard</h1>

      {/* Child Info */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
        <h2 className="text-lg font-semibold text-text mb-3">
          Child Information
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <p className="text-sm text-text-light">Student Name</p>
            <p className="font-medium text-text">Dela Cruz, Juan A.</p>
          </div>
          <div>
            <p className="text-sm text-text-light">Grade Level & Section</p>
            <p className="font-medium text-text">Grade 11 - STEM A</p>
          </div>
          <div>
            <p className="text-sm text-text-light">Track</p>
            <p className="font-medium text-text">Academic</p>
          </div>
          <div>
            <p className="text-sm text-text-light">Strand</p>
            <p className="font-medium text-text">STEM</p>
          </div>
        </div>
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
              <p className="text-sm text-text-light">Semester</p>
              <p className="text-xl font-bold text-text">1st Sem</p>
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

      {/* Track & Strand Badge */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 mb-8">
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 p-2 rounded-lg">
            <Layers className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-sm text-text-light">
              Academic Track - STEM Strand
            </p>
            <p className="text-xs text-text-light mt-0.5">
              Science, Technology, Engineering, and Mathematics
            </p>
          </div>
        </div>
      </div>

      {/* Quick Grade Overview */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-text mb-4">Grade Summary</h2>
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
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { subject: "Oral Communication", midterm: 92, finals: "--" },
                { subject: "General Mathematics", midterm: 90, finals: "--" },
                {
                  subject: "Earth and Life Science",
                  midterm: 93,
                  finals: "--",
                },
                { subject: "Pre-Calculus", midterm: 88, finals: "--" },
                { subject: "General Biology 1", midterm: 91, finals: "--" },
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
                  <td className="py-3 px-4 text-center">
                    <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700">
                      Passed
                    </span>
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
