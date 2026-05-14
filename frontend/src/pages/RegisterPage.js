import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  GraduationCap, Eye, EyeOff, Lock, User, Mail, Phone,
  Building2, BookOpen, AlertCircle, CheckCircle2, ArrowLeft,
  ChevronRight, ClipboardCheck, LayoutDashboard, Moon, Sun,
} from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";
import "./RegisterPage.css";

const ROLES = [
  { value: "student",              label: "Student Intern",           icon: GraduationCap,   desc: "Submit weekly logs, track your internship",       color: "#1a365d" },
  { value: "workplace_supervisor", label: "Workplace Supervisor",     icon: ClipboardCheck,  desc: "Review logs from your assigned interns",          color: "#276749" },
  { value: "academic_supervisor",  label: "Academic Supervisor",      icon: BookOpen,        desc: "Evaluate and grade students academically",        color: "#c05621" },
  { value: "internship_admin",     label: "Internship Administrator", icon: LayoutDashboard, desc: "Manage placements, users & system data",          color: "#6b46c1" },
];

const STEPS = [
  { n: 1, label: "Choose your role" },
  { n: 2, label: "Basic information" },
  { n: 3, label: "Academic details" },
];

function validatePassword(pwd) {
  if (pwd.length < 8 || pwd.length > 16) return "Password must be 8–16 characters.";
  if (!/[A-Z]/.test(pwd)) return "Password needs at least one uppercase letter.";
  if (!/[a-z]/.test(pwd)) return "Password needs at least one lowercase letter.";
  if (!/[0-9]/.test(pwd))  return "Password needs at least one number.";
  if (!/[!@#$%^&*]/.test(pwd)) return "Password needs at least one special character (!@#$%^&*).";
  return null;
}

export default function RegisterPage() {
  const { isDark, toggleDark } = useContext(ThemeContext);
  const [step, setStep]   = useState(1);
  const [role, setRole]   = useState("");
  const [form, setForm]   = useState({
    username: "", email: "", firstName: "", lastName: "",
    password: "", confirmPassword: "", phone: "",
    university: "Makerere University", course: "", department: "",
  });
  const [showPass, setShowPass] = useState(false);
  const [error, setError]       = useState("");
  const [loading, setLoading]   = useState(false);
  const [done, setDone]         = useState(false);

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const selectedRole = ROLES.find((r) => r.value === role);