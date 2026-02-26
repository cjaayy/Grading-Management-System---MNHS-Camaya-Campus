"use client";

import { useState } from "react";

const attendanceData = [
  { subject: "Oral Communication", present: 18, absent: 0, late: 1, total: 19 },
  {
    subject: "Reading and Writing",
    present: 17,
    absent: 1,
    late: 1,
    total: 19,
  },
  {
    subject: "Komunikasyon at Pananaliksik sa Wika at Kulturang Pilipino",
    present: 19,
    absent: 0,
    late: 0,
    total: 19,
  },
  {
    subject: "General Mathematics",
    present: 18,
    absent: 1,
    late: 0,
    total: 19,
  },
  {
    subject: "Earth and Life Science",
    present: 19,
    absent: 0,
    late: 0,
    total: 19,
  },
  {
    subject: "Physical Education and Health 1",
    present: 18,
    absent: 0,
    late: 1,
    total: 19,
  },
  { subject: "Pre-Calculus", present: 17, absent: 1, late: 1, total: 19 },
  { subject: "General Biology 1", present: 19, absent: 0, late: 0, total: 19 },
  { subject: "General Physics 1", present: 18, absent: 1, late: 0, total: 19 },
];

export default function AttendanceMidtermPage() {
  const [selectedSemester, setSelectedSemester] = useState("1");

  const semesters = [
    { id: "1", label: "1st Semester" },
    { id: "2", label: "2nd Semester" },
  ];

  const totalPresent = attendanceData.reduce((sum, r) => sum + r.present, 0);
  const totalAbsent = attendanceData.reduce((sum, r) => sum + r.absent, 0);
  const totalLate = attendanceData.reduce((sum, r) => sum + r.late, 0);
  const totalDays = attendanceData.reduce((sum, r) => sum + r.total, 0);
  const attendanceRate = ((totalPresent / totalDays) * 100).toFixed(1);

  return (
    <div>
      <h1 className="text-2xl font-bold text-text mb-1">
        Attendance (Midterm)
      </h1>
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

      {/* Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 text-center">
          <p className="text-sm text-text-light">Present</p>
          <p className="text-2xl font-bold text-green-600">{totalPresent}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 text-center">
          <p className="text-sm text-text-light">Absent</p>
          <p className="text-2xl font-bold text-red-500">{totalAbsent}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 text-center">
          <p className="text-sm text-text-light">Late</p>
          <p className="text-2xl font-bold text-yellow-500">{totalLate}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 text-center">
          <p className="text-sm text-text-light">Attendance Rate</p>
          <p className="text-2xl font-bold text-primary">{attendanceRate}%</p>
        </div>
      </div>

      {/* Attendance Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-primary px-6 py-4">
          <h2 className="text-lg font-semibold text-white">
            Attendance per Subject
          </h2>
          <p className="text-xs text-white/70">
            Midterm period attendance records
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
                    Present
                  </th>
                  <th className="text-center py-3 px-4 text-text-light font-medium">
                    Absent
                  </th>
                  <th className="text-center py-3 px-4 text-text-light font-medium">
                    Late
                  </th>
                  <th className="text-center py-3 px-4 text-text-light font-medium">
                    Total Days
                  </th>
                  <th className="text-center py-3 px-4 text-text-light font-medium">
                    Rate
                  </th>
                </tr>
              </thead>
              <tbody>
                {attendanceData.map((row) => {
                  const rate = ((row.present / row.total) * 100).toFixed(0);
                  return (
                    <tr
                      key={row.subject}
                      className="border-b border-gray-50 hover:bg-gray-50/50"
                    >
                      <td className="py-3 px-4 font-medium text-text">
                        {row.subject}
                      </td>
                      <td className="py-3 px-4 text-center text-green-600 font-medium">
                        {row.present}
                      </td>
                      <td className="py-3 px-4 text-center text-red-500 font-medium">
                        {row.absent}
                      </td>
                      <td className="py-3 px-4 text-center text-yellow-500 font-medium">
                        {row.late}
                      </td>
                      <td className="py-3 px-4 text-center text-text">
                        {row.total}
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span
                          className={`text-xs px-2 py-1 rounded-full font-medium ${
                            Number(rate) >= 95
                              ? "bg-green-100 text-green-700"
                              : Number(rate) >= 85
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-red-100 text-red-700"
                          }`}
                        >
                          {rate}%
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
    </div>
  );
}
