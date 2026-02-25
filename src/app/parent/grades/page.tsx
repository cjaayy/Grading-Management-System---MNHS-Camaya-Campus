export default function ParentGrades() {
  const subjects = [
    { subject: "Mathematics", q1: 90, q2: 88, q3: "--", q4: "--", final: "--" },
    { subject: "Science", q1: 92, q2: 91, q3: "--", q4: "--", final: "--" },
    { subject: "English", q1: 87, q2: 85, q3: "--", q4: "--", final: "--" },
    { subject: "Filipino", q1: 93, q2: 90, q3: "--", q4: "--", final: "--" },
    {
      subject: "Araling Panlipunan",
      q1: 88,
      q2: 86,
      q3: "--",
      q4: "--",
      final: "--",
    },
    { subject: "TLE", q1: 95, q2: 94, q3: "--", q4: "--", final: "--" },
    { subject: "MAPEH", q1: 91, q2: 89, q3: "--", q4: "--", final: "--" },
    {
      subject: "Values Education",
      q1: 94,
      q2: 92,
      q3: "--",
      q4: "--",
      final: "--",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-text mb-2">Child&apos;s Grades</h1>
      <p className="text-text-light mb-6">
        Dela Cruz, Juan A. | Grade 10 - Einstein | S.Y. 2025-2026
      </p>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-text-light font-medium">
                  Subject
                </th>
                <th className="text-center py-3 px-4 text-text-light font-medium">
                  1st Quarter
                </th>
                <th className="text-center py-3 px-4 text-text-light font-medium">
                  2nd Quarter
                </th>
                <th className="text-center py-3 px-4 text-text-light font-medium">
                  3rd Quarter
                </th>
                <th className="text-center py-3 px-4 text-text-light font-medium">
                  4th Quarter
                </th>
                <th className="text-center py-3 px-4 text-text-light font-medium">
                  Final Grade
                </th>
                <th className="text-center py-3 px-4 text-text-light font-medium">
                  Remarks
                </th>
              </tr>
            </thead>
            <tbody>
              {subjects.map((row) => (
                <tr
                  key={row.subject}
                  className="border-b border-gray-50 hover:bg-gray-50/50"
                >
                  <td className="py-3 px-4 font-medium text-text">
                    {row.subject}
                  </td>
                  <td className="py-3 px-4 text-center text-text">{row.q1}</td>
                  <td className="py-3 px-4 text-center text-text">{row.q2}</td>
                  <td className="py-3 px-4 text-center text-text-light">
                    {row.q3}
                  </td>
                  <td className="py-3 px-4 text-center text-text-light">
                    {row.q4}
                  </td>
                  <td className="py-3 px-4 text-center font-semibold text-text-light">
                    {row.final}
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

        {/* General Average */}
        <div className="mt-6 flex justify-end">
          <div className="bg-primary/5 rounded-lg px-6 py-3 text-right">
            <p className="text-sm text-text-light">General Average</p>
            <p className="text-2xl font-bold text-primary">89.5</p>
          </div>
        </div>
      </div>
    </div>
  );
}
