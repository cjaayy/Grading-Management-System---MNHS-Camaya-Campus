"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Lock, Eye, EyeOff, Loader2, AlertCircle } from "lucide-react";
import Image from "next/image";
import RoleSelector from "./RoleSelector";
import { loginSchema, type LoginFormData } from "@/lib/validations/auth";
import type { Role } from "@/types/auth";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState<Role>("student");
  const [loginError, setLoginError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  async function onSubmit(_data: LoginFormData) {
    setLoginError(null);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setLoginError(
        "Authentication service not configured yet. This is a UI demo.",
      );
    } catch {
      setLoginError("An unexpected error occurred. Please try again.");
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Mobile branding (shown only on small screens) */}
      <div className="lg:hidden flex flex-col items-center mb-8">
        <div className="rounded-full bg-primary/10 p-2 mb-4">
          <Image
            src="/images/school_logo.jpg"
            alt="MNHS Camaya Campus Logo"
            width={80}
            height={80}
            className="rounded-full"
            priority
          />
        </div>
        <h1 className="text-xl font-bold text-primary">MNHS Camaya Campus</h1>
        <p className="text-sm text-text-light">Grading Management System</p>
      </div>

      {/* Form Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-text">Welcome Back!</h2>
        <p className="text-text-light mt-1">Sign in to access your account</p>
      </div>

      {/* Role Selector */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-text mb-2">
          I am a...
        </label>
        <RoleSelector selected={selectedRole} onChange={setSelectedRole} />
      </div>

      {/* Error Message */}
      {loginError && (
        <div
          className="mb-4 flex items-start gap-2 rounded-lg border border-error/30 bg-error-light px-4 py-3 text-sm text-error"
          role="alert"
        >
          <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
          <span>{loginError}</span>
        </div>
      )}

      {/* Login Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-text mb-1.5"
          >
            Email or Username
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-text-light pointer-events-none" />
            <input
              id="email"
              type="text"
              autoComplete="username"
              placeholder="Enter your email or username"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={`w-full rounded-lg border bg-white py-2.5 pl-10 pr-4 text-sm outline-none transition-colors placeholder:text-gray-400
                ${
                  errors.email
                    ? "border-error focus:border-error focus:ring-2 focus:ring-error/20"
                    : "border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                }
              `}
              {...register("email")}
            />
          </div>
          {errors.email && (
            <p id="email-error" className="mt-1 text-xs text-error">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password Field */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-text mb-1.5"
          >
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-text-light pointer-events-none" />
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              placeholder="Enter your password"
              aria-invalid={!!errors.password}
              aria-describedby={errors.password ? "password-error" : undefined}
              className={`w-full rounded-lg border bg-white py-2.5 pl-10 pr-10 text-sm outline-none transition-colors placeholder:text-gray-400
                ${
                  errors.password
                    ? "border-error focus:border-error focus:ring-2 focus:ring-error/20"
                    : "border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                }
              `}
              {...register("password")}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-text-light hover:text-text transition-colors"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeOff className="w-4.5 h-4.5" />
              ) : (
                <Eye className="w-4.5 h-4.5" />
              )}
            </button>
          </div>
          {errors.password && (
            <p id="password-error" className="mt-1 text-xs text-error">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 accent-secondary"
              {...register("rememberMe")}
            />
            <span className="text-sm text-text-light">Remember me</span>
          </label>
          <a
            href="#"
            className="text-sm font-medium text-secondary hover:text-secondary-dark transition-colors"
          >
            Forgot password?
          </a>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-lg bg-secondary py-2.5 px-4 text-sm font-semibold text-white shadow-sm transition-all hover:bg-secondary-dark hover:shadow-md focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              Signing in...
            </span>
          ) : (
            "Sign In"
          )}
        </button>
      </form>

      {/* Demo Credentials */}
      <div className="mt-8 rounded-lg border border-dashed border-gray-300 bg-gray-50 p-4">
        <p className="text-xs font-semibold text-text-light uppercase tracking-wider mb-2">
          Demo Credentials
        </p>
        <div className="space-y-1.5 text-xs text-text-light">
          <div className="flex justify-between">
            <span className="font-medium">Teacher:</span>
            <span>teacher@mnhs.edu / demo1234</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Student:</span>
            <span>student@mnhs.edu / demo1234</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Admin:</span>
            <span>admin@mnhs.edu / demo1234</span>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="mt-6 text-center">
        <p className="text-xs text-text-light">
          Need help?{" "}
          <a
            href="#"
            className="font-medium text-secondary hover:text-secondary-dark transition-colors"
          >
            Contact IT Support
          </a>
        </p>
      </div>
    </div>
  );
}
