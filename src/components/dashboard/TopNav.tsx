"use client";

import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import type { Role } from "@/types/auth";

const roleLabels: Record<Role, string> = {
  student: "Student",
  teacher: "Teacher",
  admin: "Admin",
  parent: "Parent",
};

interface NavTab {
  label: string;
  href: string;
  icon: string;
}

interface TopNavProps {
  role: Role;
}

function getTabsForRole(role: Role): NavTab[] {
  const common: NavTab[] = [
    {
      label: "Dashboard",
      href: `/${role}/dashboard`,
      icon: "dashboard",
    },
    {
      label: "Grades",
      href: `/${role}/grades`,
      icon: "assignment",
    },
  ];

  if (role === "student") {
    return [
      ...common,
      {
        label: "Midterm Exam",
        href: `/${role}/midterm-exam`,
        icon: "description",
      },
      {
        label: "Final Exam",
        href: `/${role}/final-exam`,
        icon: "description",
      },
      {
        label: "Attendance (Midterm)",
        href: `/${role}/attendance-midterm`,
        icon: "event_available",
      },
      {
        label: "Attendance (Finals)",
        href: `/${role}/attendance-finals`,
        icon: "event_available",
      },
    ];
  }

  return common;
}

export function TopHeader({ role }: TopNavProps) {
  const router = useRouter();

  function handleLogout() {
    router.push("/login");
  }

  return (
    <header className="bg-primary text-white shadow-md">
      <div className="px-4 sm:px-6 lg:px-8">
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

          {/* User Info & Logout */}
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline text-sm text-white/80">
              {roleLabels[role]} Account
            </span>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-white/70 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-base">
                logout
              </span>
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export function SubNav({ role }: TopNavProps) {
  const pathname = usePathname();
  const tabs = getTabsForRole(role);

  return (
    <div className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-1 overflow-x-auto py-2">
          {tabs.map((tab) => {
            const isActive = pathname === tab.href;
            return (
              <a
                key={tab.href}
                href={tab.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-text-light hover:bg-gray-100 hover:text-text"
                }`}
              >
                <span className="material-symbols-outlined text-base">
                  {tab.icon}
                </span>
                {tab.label}
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

export default function TopNav({ role }: TopNavProps) {
  const pathname = usePathname();
  const router = useRouter();

  const tabs = getTabsForRole(role);

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
                  <span className="material-symbols-outlined text-base">
                    {tab.icon}
                  </span>
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
              <span className="material-symbols-outlined text-base">
                logout
              </span>
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
