"use client";

import { useState } from "react";

const sections = [
  { id: "10-einstein", label: "Grade 10 - Einstein", subject: "Mathematics" },
  { id: "10-newton", label: "Grade 10 - Newton", subject: "Mathematics" },
  { id: "9-rizal", label: "Grade 9 - Rizal", subject: "Science" },
  { id: "9-bonifacio", label: "Grade 9 - Bonifacio", subject: "Science" },
];

const sampleStudents = [
  { name: "Dela Cruz, Juan A.", q1: 90, q2: 88 },
  { name: "Santos, Maria B.", q1: 92, q2: 91 },
  { name: "Reyes, Pedro C.", q1: 85, q2: 87 },
  { name: "Garcia, Ana D.", q1: 88, q2: 90 },
  { name: "Mendoza, Carlos E.", q1: 78, q2: 82 },
];

export default function TeacherGrades() {
  const [selectedSection, setSelectedSection] = useState(sections[0].id);

  const current = sections.find((s) => s.id === selectedSection)!;

  return (
    <div>
      <h1 className="text-2xl font-bold text-text mb-2">Grade Management</h1>
      <p className="text-text-light mb-6">
        View and manage student grades by section
      </p>

      {/* Section Selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setSelectedSection(section.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
              selectedSection === section.id
                ? "bg-primary text-white"
                : "bg-white border border-gray-200 text-text hover:border-primary/30"
            }`}
          >
            {section.label}
          </button>
        ))}
      </div>

      {/* Grades Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-semibold text-text">{current.label}</h2>
            <p className="text-sm text-text-light">{current.subject}</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-text-light font-medium">
                  Student Name
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
              </tr>
            </thead>
            <tbody>
              {sampleStudents.map((student) => (
                <tr
                  key={student.name}
                  className="border-b border-gray-50 hover:bg-gray-50/50"
                >
                  <td className="py-3 px-4 font-medium text-text">
                    {student.name}
                  </td>
                  <td className="py-3 px-4 text-center text-text">
                    {student.q1}
                  </td>
                  <td className="py-3 px-4 text-center text-text">
                    {student.q2}
                  </td>
                  <td className="py-3 px-4 text-center text-text-light">--</td>
                  <td className="py-3 px-4 text-center text-text-light">--</td>
                  <td className="py-3 px-4 text-center text-text-light">--</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
