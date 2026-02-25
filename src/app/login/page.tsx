import { Metadata } from "next";
import LoginForm from "@/components/auth/LoginForm";
import BrandingSection from "@/components/auth/BrandingSection";

export const metadata: Metadata = {
  title: "Grading Management System",
  description: "Secure login for MNHS Camaya Campus Grading Management System",
};

export default function LoginPage() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-white to-bg-light">
      {/* Left Side - Branding (hidden on mobile) */}
      <BrandingSection />

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 lg:px-12">
        <LoginForm />
      </div>
    </div>
  );
}
