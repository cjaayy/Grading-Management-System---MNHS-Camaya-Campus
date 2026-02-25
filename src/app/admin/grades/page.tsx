"use client";

import { useState } from "react";

const gradeLevels = [
  { id: "7", label: "Grade 7" },
  { id: "8", label: "Grade 8" },
  { id: "9", label: "Grade 9" },
  { id: "10", label: "Grade 10" },
];

const sampleData = [
  {
    section: "Einstein",
    adviser: "Mrs. Santos",
    students: 42,
    submitted: true,
  },
  { section: "Newton", adviser: "Mr. Reyes", students: 40, submitted: true },
  { section: "Rizal", adviser: "Ms. Garcia", students: 38, submitted: false },
  {
    section: "Bonifacio",
    adviser: "Mr. Dela Cruz",
    students: 36,
    submitted: false,
  },
];

export default function AdminGrades() {
  const [selectedGrade, setSelectedGrade] = useState("10");

  return (
    <div>
      <h1 className="text-2xl font-bold text-text mb-2">Grades Overview</h1>
      <p className="text-text-light mb-6">
        Monitor grade submissions across all sections
      </p>

      {/* Grade Level Selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {gradeLevels.map((grade) => (
          <button
            key={grade.id}
            onClick={() => setSelectedGrade(grade.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
              selectedGrade === grade.id
                ? "bg-primary text-white"
                : "bg-white border border-gray-200 text-text hover:border-primary/30"
            }`}
          >
            {grade.label}
          </button>
        ))}
      </div>

      {/* Sections Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-text mb-4">
          Grade {selectedGrade} Sections
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-text-light font-medium">
                  Section
                </th>
                <th className="text-left py-3 px-4 text-text-light font-medium">
                  Adviser
                </th>
                <th className="text-center py-3 px-4 text-text-light font-medium">
                  Students
                </th>
                <th className="text-center py-3 px-4 text-text-light font-medium">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {sampleData.map((row) => (
                <tr
                  key={row.section}
                  className="border-b border-gray-50 hover:bg-gray-50/50"
                >
                  <td className="py-3 px-4 font-medium text-text">
                    Grade {selectedGrade} - {row.section}
                  </td>
                  <td className="py-3 px-4 text-text">{row.adviser}</td>
                  <td className="py-3 px-4 text-center text-text">
                    {row.students}
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span
                      className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                        row.submitted
                          ? "bg-green-100 text-green-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {row.submitted ? "Submitted" : "Pending"}
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
