import { Users, BookOpen, ClipboardList, Calendar } from "lucide-react";

export default function TeacherDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-text mb-6">Teacher Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          <div className="flex items-center gap-3">
            <div className="bg-secondary/10 p-2.5 rounded-lg">
              <Users className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <p className="text-sm text-text-light">Total Students</p>
              <p className="text-xl font-bold text-text">156</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-2.5 rounded-lg">
              <BookOpen className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-text-light">Subjects Handled</p>
              <p className="text-xl font-bold text-text">4</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          <div className="flex items-center gap-3">
            <div className="bg-amber-100 p-2.5 rounded-lg">
              <ClipboardList className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <p className="text-sm text-text-light">Pending Grades</p>
              <p className="text-xl font-bold text-text">23</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-2.5 rounded-lg">
              <Calendar className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-text-light">School Year</p>
              <p className="text-xl font-bold text-text">2025-2026</p>
            </div>
          </div>
        </div>
      </div>

      {/* Classes Overview */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-text mb-4">My Classes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              section: "Grade 10 - Einstein",
              subject: "Mathematics",
              students: 42,
            },
            {
              section: "Grade 10 - Newton",
              subject: "Mathematics",
              students: 40,
            },
            { section: "Grade 9 - Rizal", subject: "Science", students: 38 },
            {
              section: "Grade 9 - Bonifacio",
              subject: "Science",
              students: 36,
            },
          ].map((cls) => (
            <div
              key={`${cls.section}-${cls.subject}`}
              className="border border-gray-100 rounded-lg p-4 hover:border-secondary/30 hover:bg-secondary/5 transition-colors"
            >
              <h3 className="font-semibold text-text">{cls.section}</h3>
              <p className="text-sm text-text-light">{cls.subject}</p>
              <p className="text-xs text-text-light mt-2">
                {cls.students} students
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
