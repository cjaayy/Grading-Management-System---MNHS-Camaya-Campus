import Image from "next/image";
import { BookOpen, GraduationCap, Award, BarChart3 } from "lucide-react";

export default function BrandingSection() {
  return (
    <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-primary via-primary-light to-primary flex-col items-center justify-center p-12 text-white">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10">
          <BookOpen className="w-16 h-16" />
        </div>
        <div className="absolute top-32 right-16">
          <GraduationCap className="w-20 h-20" />
        </div>
        <div className="absolute bottom-40 left-20">
          <Award className="w-14 h-14" />
        </div>
        <div className="absolute bottom-16 right-24">
          <BarChart3 className="w-18 h-18" />
        </div>
        <div className="absolute top-1/2 left-8">
          <BookOpen className="w-12 h-12 rotate-12" />
        </div>
        <div className="absolute top-20 left-1/2">
          <Award className="w-10 h-10 -rotate-12" />
        </div>
        {/* Geometric circles */}
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full border-2 border-white/20" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full border-2 border-white/20" />
        <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full border border-white/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-md">
        {/* Logo */}
        <div className="mb-8 rounded-full bg-white/15 p-3 shadow-2xl backdrop-blur-sm">
          <Image
            src="/images/school_logo.jpg"
            alt="MNHS Camaya Campus Logo"
            width={140}
            height={140}
            className="rounded-full"
            priority
          />
        </div>

        {/* School Name */}
        <h1 className="text-3xl font-bold tracking-tight mb-1">
          MNHS Camaya Campus
        </h1>
        <p className="text-lg font-medium text-white/80 mb-6">
          Mariveles National High School
        </p>

        {/* Divider */}
        <div className="w-16 h-0.5 bg-secondary rounded-full mb-6" />

        {/* System Title */}
        <h2 className="text-xl font-semibold text-secondary-light mb-4">
          Grading Management System
        </h2>

        {/* Tagline */}
        <p className="text-base text-white/70 leading-relaxed mb-8">
          Empowering Education Through Technology
        </p>

        {/* Feature highlights */}
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="flex items-center gap-2 text-sm text-white/70">
            <BarChart3 className="w-4 h-4 text-secondary-light shrink-0" />
            <span>Grade Analytics</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-white/70">
            <BookOpen className="w-4 h-4 text-secondary-light shrink-0" />
            <span>Class Records</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-white/70">
            <GraduationCap className="w-4 h-4 text-secondary-light shrink-0" />
            <span>Student Progress</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-white/70">
            <Award className="w-4 h-4 text-secondary-light shrink-0" />
            <span>Report Cards</span>
          </div>
        </div>
      </div>
    </div>
  );
}
