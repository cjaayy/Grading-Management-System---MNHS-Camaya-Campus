"use client";

import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { LayoutDashboard, ClipboardList, LogOut } from "lucide-react";
import type { Role } from "@/types/auth";

const roleLabels: Record<Role, string> = {
  student: "Student",
  teacher: "Teacher",
  admin: "Admin",
  parent: "Parent",
};

interface TopNavProps {
  role: Role;
}

export default function TopNav({ role }: TopNavProps) {
  const pathname = usePathname();
  const router = useRouter();

  const tabs = [
    {
      label: "Dashboard",
      href: `/${role}/dashboard`,
      icon: LayoutDashboard,
    },
    {
      label: "Grades",
      href: `/${role}/grades`,
      icon: ClipboardList,
    },
  ];

  function handleLogout() {
    router.push("/login");
  }

  return (
    <header className="bg-primary text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & School Name */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/school_logo.jpg"
              alt="MNHS Camaya Campus"
              width={36}
              height={36}
              className="rounded-full"
            />
            <div className="hidden sm:block">
              <p className="text-sm font-semibold leading-tight">
                MNHS Camaya Campus
              </p>
              <p className="text-xs text-white/70">Grading Management System</p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex items-center gap-1">
            {tabs.map((tab) => {
              const isActive = pathname === tab.href;
              const Icon = tab.icon;
              return (
                <a
                  key={tab.href}
                  href={tab.href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </a>
              );
            })}
          </nav>

          {/* User Info & Logout */}
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline text-sm text-white/80">
              {roleLabels[role]} Account
            </span>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-white/70 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
