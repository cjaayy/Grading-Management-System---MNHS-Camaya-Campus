"use client";

import { useState } from "react";

const attendanceData = [
  { subject: "Oral Communication", present: 17, absent: 1, late: 0, total: 18 },
  {
    subject: "Reading and Writing",
    present: "--" as string | number,
    absent: "--" as string | number,
    late: "--" as string | number,
    total: "--" as string | number,
  },
  {
    subject: "Komunikasyon at Pananaliksik sa Wika at Kulturang Pilipino",
    present: "--" as string | number,
    absent: "--" as string | number,
    late: "--" as string | number,
    total: "--" as string | number,
  },
  {
    subject: "General Mathematics",
    present: "--" as string | number,
    absent: "--" as string | number,
    late: "--" as string | number,
    total: "--" as string | number,
  },
  {
    subject: "Earth and Life Science",
    present: "--" as string | number,
    absent: "--" as string | number,
    late: "--" as string | number,
    total: "--" as string | number,
  },
  {
    subject: "Physical Education and Health 1",
    present: "--" as string | number,
    absent: "--" as string | number,
    late: "--" as string | number,
    total: "--" as string | number,
  },
  {
    subject: "Pre-Calculus",
    present: "--" as string | number,
    absent: "--" as string | number,
    late: "--" as string | number,
    total: "--" as string | number,
  },
  {
    subject: "General Biology 1",
    present: "--" as string | number,
    absent: "--" as string | number,
    late: "--" as string | number,
    total: "--" as string | number,
  },
  {
    subject: "General Physics 1",
    present: "--" as string | number,
    absent: "--" as string | number,
    late: "--" as string | number,
    total: "--" as string | number,
  },
];

export default function AttendanceFinalsPage() {
  const [selectedSemester, setSelectedSemester] = useState("1");

  const semesters = [
    { id: "1", label: "1st Semester" },
    { id: "2", label: "2nd Semester" },
  ];

  const availableRows = attendanceData.filter(
    (r) => typeof r.present === "number",
  );
  const totalPresent = availableRows.reduce(
    (sum, r) => sum + (r.present as number),
    0,
  );
  const totalAbsent = availableRows.reduce(
    (sum, r) => sum + (r.absent as number),
    0,
  );
  const totalLate = availableRows.reduce(
    (sum, r) => sum + (r.late as number),
    0,
  );
  const totalDays = availableRows.reduce(
    (sum, r) => sum + (r.total as number),
    0,
  );
  const attendanceRate =
    totalDays > 0 ? ((totalPresent / totalDays) * 100).toFixed(1) : "--";

  return (
    <div>
      <h1 className="text-2xl font-bold text-text mb-1">Attendance (Finals)</h1>
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
          <p className="text-2xl font-bold text-green-600">
            {totalPresent || "--"}
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 text-center">
          <p className="text-sm text-text-light">Absent</p>
          <p className="text-2xl font-bold text-red-500">
            {totalAbsent || "--"}
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 text-center">
          <p className="text-sm text-text-light">Late</p>
          <p className="text-2xl font-bold text-yellow-500">
            {totalLate || "--"}
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 text-center">
          <p className="text-sm text-text-light">Attendance Rate</p>
          <p className="text-2xl font-bold text-primary">
            {attendanceRate === "--" ? "--" : `${attendanceRate}%`}
          </p>
        </div>
      </div>

      {/* Attendance Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-primary px-6 py-4">
          <h2 className="text-lg font-semibold text-white">
            Attendance per Subject
          </h2>
          <p className="text-xs text-white/70">
            Finals period attendance records
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
                  const isAvailable = typeof row.present === "number";
                  const rate = isAvailable
                    ? (
                        ((row.present as number) / (row.total as number)) *
                        100
                      ).toFixed(0)
                    : "--";
                  return (
                    <tr
                      key={row.subject}
                      className="border-b border-gray-50 hover:bg-gray-50/50"
                    >
                      <td className="py-3 px-4 font-medium text-text">
                        {row.subject}
                      </td>
                      <td className="py-3 px-4 text-center text-text-light">
                        {isAvailable ? (
                          <span className="text-green-600 font-medium">
                            {row.present}
                          </span>
                        ) : (
                          "--"
                        )}
                      </td>
                      <td className="py-3 px-4 text-center text-text-light">
                        {isAvailable ? (
                          <span className="text-red-500 font-medium">
                            {row.absent}
                          </span>
                        ) : (
                          "--"
                        )}
                      </td>
                      <td className="py-3 px-4 text-center text-text-light">
                        {isAvailable ? (
                          <span className="text-yellow-500 font-medium">
                            {row.late}
                          </span>
                        ) : (
                          "--"
                        )}
                      </td>
                      <td className="py-3 px-4 text-center text-text-light">
                        {row.total}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {isAvailable ? (
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
                        ) : (
                          <span className="text-text-light">--</span>
                        )}
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
