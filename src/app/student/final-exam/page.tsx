"use client";

import { useState } from "react";

const coreSubjects = [
  {
    subject: "Oral Communication",
    written: 44,
    performance: 46,
    quarterly: 47,
    total: 90,
  },
  {
    subject: "Reading and Writing",
    written: "--" as string | number,
    performance: "--" as string | number,
    quarterly: "--" as string | number,
    total: "--" as string | number,
  },
  {
    subject: "Komunikasyon at Pananaliksik sa Wika at Kulturang Pilipino",
    written: "--" as string | number,
    performance: "--" as string | number,
    quarterly: "--" as string | number,
    total: "--" as string | number,
  },
  {
    subject: "General Mathematics",
    written: "--" as string | number,
    performance: "--" as string | number,
    quarterly: "--" as string | number,
    total: "--" as string | number,
  },
  {
    subject: "Earth and Life Science",
    written: "--" as string | number,
    performance: "--" as string | number,
    quarterly: "--" as string | number,
    total: "--" as string | number,
  },
  {
    subject: "Physical Education and Health 1",
    written: "--" as string | number,
    performance: "--" as string | number,
    quarterly: "--" as string | number,
    total: "--" as string | number,
  },
];

const specializedSubjects = [
  {
    subject: "Pre-Calculus",
    written: "--" as string | number,
    performance: "--" as string | number,
    quarterly: "--" as string | number,
    total: "--" as string | number,
  },
  {
    subject: "General Biology 1",
    written: "--" as string | number,
    performance: "--" as string | number,
    quarterly: "--" as string | number,
    total: "--" as string | number,
  },
  {
    subject: "General Physics 1",
    written: "--" as string | number,
    performance: "--" as string | number,
    quarterly: "--" as string | number,
    total: "--" as string | number,
  },
];

export default function FinalExamPage() {
  const [selectedSemester, setSelectedSemester] = useState("1");

  const semesters = [
    { id: "1", label: "1st Semester" },
    { id: "2", label: "2nd Semester" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-text mb-1">Final Exam</h1>
      <p className="text-text-light mb-6">
        S.Y. 2025-2026 | Grade 11 | Academic Track - STEM
      </p>

      {/* Semester Selector */}
      <div className="flex gap-2 mb-6">
        {semesters.map((sem) => (
          <button
            key={sem.id}
            onClick={() => setSelectedSemester(sem.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
              selectedSemester === sem.id
                ? "bg-primary text-white"
                : "bg-white border border-gray-200 text-text hover:border-primary/30"
            }`}
          >
            {sem.label}
          </button>
        ))}
      </div>

      {/* Core Subjects */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-6">
        <div className="bg-primary px-6 py-4">
          <h2 className="text-lg font-semibold text-white">Core Subjects</h2>
          <p className="text-xs text-white/70">Final examination scores</p>
        </div>
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-text-light font-medium">
                    Subject
                  </th>
                  <th className="text-center py-3 px-4 text-text-light font-medium">
                    Written Works
                  </th>
                  <th className="text-center py-3 px-4 text-text-light font-medium">
                    Performance Tasks
                  </th>
                  <th className="text-center py-3 px-4 text-text-light font-medium">
                    Quarterly Exam
                  </th>
                  <th className="text-center py-3 px-4 text-text-light font-medium">
                    Final Grade
                  </th>
                </tr>
              </thead>
              <tbody>
                {coreSubjects.map((row) => (
                  <tr
                    key={row.subject}
                    className="border-b border-gray-50 hover:bg-gray-50/50"
                  >
                    <td className="py-3 px-4 font-medium text-text">
                      {row.subject}
                    </td>
                    <td className="py-3 px-4 text-center text-text-light">
                      {row.written}
                    </td>
                    <td className="py-3 px-4 text-center text-text-light">
                      {row.performance}
                    </td>
                    <td className="py-3 px-4 text-center text-text-light">
                      {row.quarterly}
                    </td>
                    <td className="py-3 px-4 text-center font-semibold text-text-light">
                      {row.total}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Specialized Subjects */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-primary px-6 py-4">
          <h2 className="text-lg font-semibold text-white">
            Specialized Subjects
          </h2>
          <p className="text-xs text-white/70">
            STEM strand-specific final scores
          </p>
        </div>
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-text-light font-medium">
                    Subject
                  </th>
                  <th className="text-center py-3 px-4 text-text-light font-medium">
                    Written Works
                  </th>
                  <th className="text-center py-3 px-4 text-text-light font-medium">
                    Performance Tasks
                  </th>
                  <th className="text-center py-3 px-4 text-text-light font-medium">
                    Quarterly Exam
                  </th>
                  <th className="text-center py-3 px-4 text-text-light font-medium">
                    Final Grade
                  </th>
                </tr>
              </thead>
              <tbody>
                {specializedSubjects.map((row) => (
                  <tr
                    key={row.subject}
                    className="border-b border-gray-50 hover:bg-gray-50/50"
                  >
                    <td className="py-3 px-4 font-medium text-text">
                      {row.subject}
                    </td>
                    <td className="py-3 px-4 text-center text-text-light">
                      {row.written}
                    </td>
                    <td className="py-3 px-4 text-center text-text-light">
                      {row.performance}
                    </td>
                    <td className="py-3 px-4 text-center text-text-light">
                      {row.quarterly}
                    </td>
                    <td className="py-3 px-4 text-center font-semibold text-text-light">
                      {row.total}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
