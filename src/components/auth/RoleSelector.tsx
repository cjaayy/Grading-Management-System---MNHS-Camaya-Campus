"use client";

import { GraduationCap, BookOpen, ShieldCheck, Users } from "lucide-react";
import type { Role } from "@/types/auth";

const roles = [
  { id: "student" as const, label: "Student", icon: GraduationCap },
  { id: "teacher" as const, label: "Teacher", icon: BookOpen },
  { id: "admin" as const, label: "Admin", icon: ShieldCheck },
  { id: "parent" as const, label: "Parent", icon: Users },
];

interface RoleSelectorProps {
  selected: Role;
  onChange: (role: Role) => void;
}

export default function RoleSelector({
  selected,
  onChange,
}: RoleSelectorProps) {
  return (
    <div
      className="grid grid-cols-4 gap-2"
      role="radiogroup"
      aria-label="Select your role"
    >
      {roles.map(({ id, label, icon: Icon }) => {
        const isSelected = selected === id;
        return (
          <button
            key={id}
            type="button"
            role="radio"
            aria-checked={isSelected}
            onClick={() => onChange(id)}
            className={`flex flex-col items-center gap-1.5 rounded-lg border-2 px-2 py-3 text-xs font-medium transition-all cursor-pointer
              ${
                isSelected
                  ? "border-secondary bg-secondary/10 text-secondary"
                  : "border-gray-200 bg-white text-text-light hover:border-gray-300 hover:bg-gray-50"
              }
            `}
          >
            <Icon className="w-5 h-5" />
            <span>{label}</span>
          </button>
        );
      })}
    </div>
  );
}
