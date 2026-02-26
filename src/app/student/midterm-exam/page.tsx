"use client";

import { useState } from "react";

const coreSubjects = [
  {
    subject: "Oral Communication",
    written: 45,
    performance: 47,
    quarterly: 48,
    total: 92,
  },
  {
    subject: "Reading and Writing",
    written: 42,
    performance: 45,
    quarterly: 46,
    total: 89,
  },
  {
    subject: "Komunikasyon at Pananaliksik sa Wika at Kulturang Pilipino",
    written: 46,
    performance: 47,
    quarterly: 48,
    total: 93,
  },
  {
    subject: "General Mathematics",
    written: 44,
    performance: 45,
    quarterly: 46,
    total: 90,
  },
  {
    subject: "Earth and Life Science",
    written: 46,
    performance: 47,
    quarterly: 48,
    total: 93,
  },
  {
    subject: "Physical Education and Health 1",
    written: 47,
    performance: 48,
    quarterly: 49,
    total: 95,
  },
];

const specializedSubjects = [
  {
    subject: "Pre-Calculus",
    written: 42,
    performance: 44,
    quarterly: 45,
    total: 88,
  },
  {
    subject: "General Biology 1",
    written: 44,
    performance: 46,
    quarterly: 47,
    total: 91,
  },
  {
    subject: "General Physics 1",
    written: 40,
    performance: 44,
    quarterly: 45,
    total: 87,
  },
];

export default function MidtermExamPage() {
  const [selectedSemester, setSelectedSemester] = useState("1");

  const semesters = [
    { id: "1", label: "1st Semester" },
    { id: "2", label: "2nd Semester" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-text mb-1">Midterm Exam</h1>
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
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
        <h2 className="text-lg font-semibold text-text mb-1">Core Subjects</h2>
        <p className="text-xs text-text-light mb-4">
          Midterm examination scores
        </p>
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
                  Midterm Grade
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
                  <td className="py-3 px-4 text-center text-text">
                    {row.written}
                  </td>
                  <td className="py-3 px-4 text-center text-text">
                    {row.performance}
                  </td>
                  <td className="py-3 px-4 text-center text-text">
                    {row.quarterly}
                  </td>
                  <td className="py-3 px-4 text-center font-semibold text-primary">
                    {row.total}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Specialized Subjects */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-text mb-1">
          Specialized Subjects
        </h2>
        <p className="text-xs text-text-light mb-4">
          STEM strand-specific midterm scores
        </p>
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
                  Midterm Grade
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
                  <td className="py-3 px-4 text-center text-text">
                    {row.written}
                  </td>
                  <td className="py-3 px-4 text-center text-text">
                    {row.performance}
                  </td>
                  <td className="py-3 px-4 text-center text-text">
                    {row.quarterly}
                  </td>
                  <td className="py-3 px-4 text-center font-semibold text-primary">
                    {row.total}
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
