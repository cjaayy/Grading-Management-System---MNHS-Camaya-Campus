export default function TeacherDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-text mb-6">Teacher Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          <div className="flex items-center gap-3">
            <div className="bg-secondary/10 p-2.5 rounded-lg">
              <span className="material-symbols-outlined text-xl text-secondary">
                group
              </span>
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
              <span className="material-symbols-outlined text-xl text-primary">
                menu_book
              </span>
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
              <span className="material-symbols-outlined text-xl text-amber-600">
                assignment
              </span>
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
              <span className="material-symbols-outlined text-xl text-green-600">
                calendar_month
              </span>
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
              section: "Grade 11 - STEM A",
              subject: "General Mathematics",
              track: "Academic",
              strand: "STEM",
              students: 42,
            },
            {
              section: "Grade 11 - STEM B",
              subject: "General Mathematics",
              track: "Academic",
              strand: "STEM",
              students: 40,
            },
            {
              section: "Grade 12 - ABM A",
              subject: "Business Mathematics",
              track: "Academic",
              strand: "ABM",
              students: 38,
            },
            {
              section: "Grade 11 - HUMSS A",
              subject: "Statistics and Probability",
              track: "Academic",
              strand: "HUMSS",
              students: 36,
            },
          ].map((cls) => (
            <div
              key={`${cls.section}-${cls.subject}`}
              className="border border-gray-100 rounded-lg p-4 hover:border-secondary/30 hover:bg-secondary/5 transition-colors"
            >
              <h3 className="font-semibold text-text">{cls.section}</h3>
              <p className="text-sm text-text-light">{cls.subject}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                  {cls.track}
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-secondary/10 text-secondary font-medium">
                  {cls.strand}
                </span>
                <span className="text-xs text-text-light ml-auto">
                  {cls.students} students
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
