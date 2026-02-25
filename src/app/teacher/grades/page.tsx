"use client";

import { useState } from "react";

const sections = [
  {
    id: "11-stem-a",
    label: "G11 - STEM A",
    subject: "General Mathematics",
    track: "Academic",
    strand: "STEM",
  },
  {
    id: "11-stem-b",
    label: "G11 - STEM B",
    subject: "General Mathematics",
    track: "Academic",
    strand: "STEM",
  },
  {
    id: "12-abm-a",
    label: "G12 - ABM A",
    subject: "Business Mathematics",
    track: "Academic",
    strand: "ABM",
  },
  {
    id: "11-humss-a",
    label: "G11 - HUMSS A",
    subject: "Statistics and Probability",
    track: "Academic",
    strand: "HUMSS",
  },
];

const sampleStudents = [
  { name: "Dela Cruz, Juan A.", midterm: 90, finals: 88 },
  { name: "Santos, Maria B.", midterm: 92, finals: 91 },
  { name: "Reyes, Pedro C.", midterm: 85, finals: 87 },
  { name: "Garcia, Ana D.", midterm: 88, finals: 90 },
  { name: "Mendoza, Carlos E.", midterm: 78, finals: 82 },
];

export default function TeacherGrades() {
  const [selectedSection, setSelectedSection] = useState(sections[0].id);

  const current = sections.find((s) => s.id === selectedSection)!;

  return (
    <div>
      <h1 className="text-2xl font-bold text-text mb-2">Grade Management</h1>
      <p className="text-text-light mb-6">
        View and manage student grades by section and strand
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
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                {current.track}
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-secondary/10 text-secondary font-medium">
                {current.strand}
              </span>
            </div>
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
                  Midterm
                </th>
                <th className="text-center py-3 px-4 text-text-light font-medium">
                  Finals
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
              {sampleStudents.map((student) => {
                const finalGrade = Math.round(
                  (student.midterm + student.finals) / 2,
                );
                return (
                  <tr
                    key={student.name}
                    className="border-b border-gray-50 hover:bg-gray-50/50"
                  >
                    <td className="py-3 px-4 font-medium text-text">
                      {student.name}
                    </td>
                    <td className="py-3 px-4 text-center text-text">
                      {student.midterm}
                    </td>
                    <td className="py-3 px-4 text-center text-text">
                      {student.finals}
                    </td>
                    <td className="py-3 px-4 text-center font-semibold text-text">
                      {finalGrade}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span
                        className={`text-xs px-2 py-1 rounded-full font-medium ${
                          finalGrade >= 75
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {finalGrade >= 75 ? "Passed" : "Failed"}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
