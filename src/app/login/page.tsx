"use client";

import { useSearchParams } from "next/navigation";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import LoginForm from "@/components/auth/LoginForm";
import BrandingSection from "@/components/auth/BrandingSection";
import type { Role } from "@/types/auth";

const validRoles: Role[] = ["student", "teacher", "admin", "parent"];

function LoginContent() {
  const searchParams = useSearchParams();
  const roleParam = searchParams.get("role");

  if (!roleParam || !validRoles.includes(roleParam as Role)) {
    redirect("/");
  }

  const role = roleParam as Role;

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-white to-bg-light">
      {/* Left Side - Branding (hidden on mobile) */}
      <BrandingSection />

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 lg:px-12">
        <LoginForm role={role} />
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginContent />
    </Suspense>
  );
}
