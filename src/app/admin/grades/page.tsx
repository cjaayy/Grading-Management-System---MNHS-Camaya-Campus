"use client";

import { useState } from "react";

const gradeLevels = [
  { id: "11", label: "Grade 11" },
  { id: "12", label: "Grade 12" },
];

const strands = [
  { id: "all", label: "All Strands" },
  { id: "stem", label: "STEM" },
  { id: "abm", label: "ABM" },
  { id: "humss", label: "HUMSS" },
  { id: "gas", label: "GAS" },
  { id: "he", label: "Home Eco" },
  { id: "ict", label: "ICT" },
  { id: "afa", label: "Agri-Fishery" },
  { id: "ia", label: "Industrial Arts" },
];

const sampleData = [
  {
    section: "STEM A",
    track: "Academic",
    strand: "STEM",
    adviser: "Mrs. Santos",
    students: 42,
    submitted: true,
  },
  {
    section: "STEM B",
    track: "Academic",
    strand: "STEM",
    adviser: "Mr. Reyes",
    students: 40,
    submitted: true,
  },
  {
    section: "ABM A",
    track: "Academic",
    strand: "ABM",
    adviser: "Ms. Garcia",
    students: 38,
    submitted: false,
  },
  {
    section: "HUMSS A",
    track: "Academic",
    strand: "HUMSS",
    adviser: "Mr. Dela Cruz",
    students: 36,
    submitted: false,
  },
  {
    section: "GAS A",
    track: "Academic",
    strand: "GAS",
    adviser: "Mrs. Mendoza",
    students: 34,
    submitted: true,
  },
  {
    section: "ICT A",
    track: "TVL",
    strand: "ICT",
    adviser: "Mr. Aquino",
    students: 32,
    submitted: false,
  },
  {
    section: "HE A",
    track: "TVL",
    strand: "Home Economics",
    adviser: "Mrs. Villanueva",
    students: 30,
    submitted: true,
  },
];

export default function AdminGrades() {
  const [selectedGrade, setSelectedGrade] = useState("11");
  const [selectedStrand, setSelectedStrand] = useState("all");

  const filteredData =
    selectedStrand === "all"
      ? sampleData
      : sampleData.filter(
          (row) =>
            row.strand.toLowerCase().startsWith(selectedStrand) ||
            row.strand.toLowerCase() === selectedStrand,
        );

  return (
    <div>
      <h1 className="text-2xl font-bold text-text mb-2">Grades Overview</h1>
      <p className="text-text-light mb-6">
        Monitor grade submissions across all tracks and strands
      </p>

      {/* Grade Level Selector */}
      <div className="flex flex-wrap gap-2 mb-4">
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

      {/* Strand Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {strands.map((strand) => (
          <button
            key={strand.id}
            onClick={() => setSelectedStrand(strand.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
              selectedStrand === strand.id
                ? "bg-secondary text-white"
                : "bg-white border border-gray-200 text-text-light hover:border-secondary/30"
            }`}
          >
            {strand.label}
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
                  Track
                </th>
                <th className="text-left py-3 px-4 text-text-light font-medium">
                  Strand
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
              {filteredData.map((row) => (
                <tr
                  key={row.section}
                  className="border-b border-gray-50 hover:bg-gray-50/50"
                >
                  <td className="py-3 px-4 font-medium text-text">
                    Grade {selectedGrade} - {row.section}
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                      {row.track}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-secondary/10 text-secondary font-medium">
                      {row.strand}
                    </span>
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
