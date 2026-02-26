import Image from "next/image";
import Link from "next/link";

const roles = [
  {
    id: "student",
    label: "Student",
    icon: "school",
    description: "View your grades and academic progress",
  },
  {
    id: "teacher",
    label: "Teacher",
    icon: "menu_book",
    description: "Manage classes and student grades",
  },
  {
    id: "admin",
    label: "Admin",
    icon: "verified_user",
    description: "System administration and reports",
  },
  {
    id: "parent",
    label: "Parent",
    icon: "group",
    description: "Monitor your child's academic performance",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-primary via-primary-light to-primary p-6">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full border-2 border-white/20" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full border-2 border-white/20" />
        <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full border border-white/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl w-full">
        {/* Logo */}
        <div className="mb-6 rounded-full bg-white/15 p-3 shadow-2xl backdrop-blur-sm">
          <Image
            src="/images/school_logo.jpg"
            alt="MNHS Camaya Campus Logo"
            width={120}
            height={120}
            className="rounded-full"
            priority
          />
        </div>

        {/* School Name */}
        <h1 className="text-3xl font-bold tracking-tight text-white mb-1">
          MNHS Camaya Campus
        </h1>
        <p className="text-base font-medium text-white/80 mb-2">
          Mariveles National High School
        </p>

        {/* Divider */}
        <div className="w-16 h-0.5 bg-secondary rounded-full mb-4" />

        {/* System Title */}
        <h2 className="text-xl font-semibold text-secondary-light mb-8">
          Grading Management System
        </h2>

        {/* Role Selection */}
        <p className="text-white/70 text-sm mb-6">
          Select your role to sign in
        </p>

        <div className="grid grid-cols-2 gap-4 w-full max-w-md">
          {roles.map(({ id, label, icon, description }) => (
            <Link
              key={id}
              href={`/login?role=${id}`}
              className="group flex flex-col items-center gap-3 rounded-xl border-2 border-white/20 bg-white/10 backdrop-blur-sm px-4 py-6 text-white transition-all hover:border-secondary hover:bg-white/20 hover:scale-105 hover:shadow-lg"
            >
              <div className="rounded-full bg-white/15 p-3 transition-colors group-hover:bg-secondary/30">
                <span className="material-symbols-outlined text-3xl">
                  {icon}
                </span>
              </div>
              <span className="text-base font-semibold">{label}</span>
              <span className="text-xs text-white/60 leading-tight">
                {description}
              </span>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <p className="mt-10 text-xs text-white/50">
          Empowering Education Through Technology
        </p>
      </div>
    </div>
  );
}
