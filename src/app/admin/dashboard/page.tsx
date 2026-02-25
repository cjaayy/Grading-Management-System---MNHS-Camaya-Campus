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
              <p className="text-sm text-text-light">Tracks & Strands</p>
              <p className="text-xl font-bold text-text">8</p>
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

      {/* Strand Enrollment Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-text mb-4">
            Academic Track
          </h2>
          <div className="space-y-3">
            {[
              { strand: "STEM", full: "Science, Technology, Engineering, and Mathematics", students: 320 },
              { strand: "ABM", full: "Accountancy, Business, and Management", students: 280 },
              { strand: "HUMSS", full: "Humanities and Social Sciences", students: 245 },
              { strand: "GAS", full: "General Academic Strand", students: 150 },
            ].map((item) => (
              <div
                key={item.strand}
                className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0"
              >
                <div>
                  <p className="text-sm font-semibold text-text">
                    {item.strand}
                  </p>
                  <p className="text-xs text-text-light">{item.full}</p>
                </div>
                <span className="text-sm font-medium text-text">
                  {item.students} students
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-text mb-4">TVL Track</h2>
          <div className="space-y-3">
            {[
              { strand: "Home Economics", full: "Cookery, Bread & Pastry, Food & Beverage Services", students: 85 },
              { strand: "ICT", full: "Information and Communications Technology", students: 95 },
              { strand: "Agri-Fishery Arts", full: "Agriculture and Fishery", students: 35 },
              { strand: "Industrial Arts", full: "Welding, Automotive, Electrical", students: 35 },
            ].map((item) => (
              <div
                key={item.strand}
                className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0"
              >
                <div>
                  <p className="text-sm font-semibold text-text">
                    {item.strand}
                  </p>
                  <p className="text-xs text-text-light">{item.full}</p>
                </div>
                <span className="text-sm font-medium text-text">
                  {item.students} students
                </span>
              </div>
            ))}
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
              detail: "Grade 11 - STEM A, General Mathematics",
              time: "2 hours ago",
            },
            {
              action: "New student enrolled",
              detail: "Santos, Maria B. - Grade 11 ABM",
              time: "5 hours ago",
            },
            {
              action: "Teacher account created",
              detail: "Mr. Reyes, Pedro C. - STEM Department",
              time: "1 day ago",
            },
            {
              action: "Section created",
              detail: "Grade 12 - HUMSS B",
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
