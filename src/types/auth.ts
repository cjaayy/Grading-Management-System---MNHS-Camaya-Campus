export type Role = "student" | "teacher" | "admin" | "parent";

export type Track = "Academic" | "TVL";

export type AcademicStrand = "STEM" | "ABM" | "HUMSS" | "GAS";
export type TVLStrand =
  | "Home Economics"
  | "ICT"
  | "Agri-Fishery Arts"
  | "Industrial Arts";

export type Strand = AcademicStrand | TVLStrand;

export type GradeLevel = 11 | 12;
