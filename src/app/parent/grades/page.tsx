"use client";

import { useState } from "react";

const semesters = [
  { id: "1", label: "1st Semester" },
  { id: "2", label: "2nd Semester" },
];

const coreSubjects = [
  { subject: "Oral Communication", midterm: 92, finals: 90, final: 91 },
  { subject: "Reading and Writing", midterm: 89, finals: "--", final: "--" },
  {
    subject: "Komunikasyon at Pananaliksik sa Wika at Kulturang Pilipino",
    midterm: 93,
    finals: "--",
    final: "--",
  },
  { subject: "General Mathematics", midterm: 90, finals: "--", final: "--" },
  { subject: "Earth and Life Science", midterm: 93, finals: "--", final: "--" },
  {
    subject: "Physical Education and Health 1",
    midterm: 95,
    finals: "--",
    final: "--",
  },
];

const specializedSubjects = [
  { subject: "Pre-Calculus", midterm: 88, finals: "--", final: "--" },
  { subject: "General Biology 1", midterm: 91, finals: "--", final: "--" },
  { subject: "General Physics 1", midterm: 87, finals: "--", final: "--" },
];

export default function ParentGrades() {
  const [selectedSemester, setSelectedSemester] = useState("1");

  return (
    <div>
      <h1 className="text-2xl font-bold text-text mb-2">
        Child&apos;s Grades
      </h1>
      <p className="text-text-light mb-6">
        Dela Cruz, Juan A. | Grade 11 - STEM A | Academic Track | S.Y.
        2025-2026
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
          Required subjects for all SHS students
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-text-light font-medium">
                  Subject
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
              {coreSubjects.map((row) => (
                <tr
                  key={row.subject}
                  className="border-b border-gray-50 hover:bg-gray-50/50"
                >
                  <td className="py-3 px-4 font-medium text-text">
                    {row.subject}
                  </td>
                  <td className="py-3 px-4 text-center text-text">
                    {row.midterm}
                  </td>
                  <td className="py-3 px-4 text-center text-text-light">
                    {row.finals}
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
      </div>

      {/* Specialized Subjects */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-text mb-1">
          Specialized Subjects
        </h2>
        <p className="text-xs text-text-light mb-4">
          STEM strand-specific subjects
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-text-light font-medium">
                  Subject
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
              {specializedSubjects.map((row) => (
                <tr
                  key={row.subject}
                  className="border-b border-gray-50 hover:bg-gray-50/50"
                >
                  <td className="py-3 px-4 font-medium text-text">
                    {row.subject}
                  </td>
                  <td className="py-3 px-4 text-center text-text">
                    {row.midterm}
                  </td>
                  <td className="py-3 px-4 text-center text-text-light">
                    {row.finals}
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
            <p className="text-2xl font-bold text-primary">91.2</p>
          </div>
        </div>
      </div>
    </div>
  );
}
