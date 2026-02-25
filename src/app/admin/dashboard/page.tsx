import { Users, GraduationCap, BookOpen, ShieldCheck } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-text mb-6">Admin Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          <div className="flex items-center gap-3">
            <div className="bg-secondary/10 p-2.5 rounded-lg">
              <GraduationCap className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <p className="text-sm text-text-light">Total Students</p>
              <p className="text-xl font-bold text-text">1,245</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-2.5 rounded-lg">
              <BookOpen className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-text-light">Total Teachers</p>
              <p className="text-xl font-bold text-text">52</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          <div className="flex items-center gap-3">
            <div className="bg-amber-100 p-2.5 rounded-lg">
              <Users className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <p className="text-sm text-text-light">Total Sections</p>
              <p className="text-xl font-bold text-text">36</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-2.5 rounded-lg">
              <ShieldCheck className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-text-light">Grades Submitted</p>
              <p className="text-xl font-bold text-text">78%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-text mb-4">
          Recent Activity
        </h2>
        <div className="space-y-3">
          {[
            {
              action: "Grades submitted",
              detail: "Grade 10 - Einstein, Mathematics",
              time: "2 hours ago",
            },
            {
              action: "New student enrolled",
              detail: "Santos, Maria B. - Grade 9",
              time: "5 hours ago",
            },
            {
              action: "Teacher account created",
              detail: "Mr. Reyes, Pedro C.",
              time: "1 day ago",
            },
            {
              action: "Section created",
              detail: "Grade 7 - Mabini",
              time: "2 days ago",
            },
          ].map((activity, i) => (
            <div
              key={i}
              className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0"
            >
              <div>
                <p className="text-sm font-medium text-text">
                  {activity.action}
                </p>
                <p className="text-xs text-text-light">{activity.detail}</p>
              </div>
              <span className="text-xs text-text-light whitespace-nowrap ml-4">
                {activity.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
