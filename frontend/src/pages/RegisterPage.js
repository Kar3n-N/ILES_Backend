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

  function handleNext() {
    if (step === 1 && !role) { setError("Please select your role."); return; }
    setError(""); setStep((s) => s + 1);
  }

  function handleStep2Submit(e) {
    e.preventDefault();
    const err = validatePassword(form.password);
    if (err) { setError(err); return; }
    if (form.password !== form.confirmPassword) { setError("Passwords do not match."); return; }
    setError(""); setStep(3);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError(""); setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false); setDone(true);
  }

  if (done) {
    return (
      <div className="reg-done" data-theme={isDark ? "dark" : "light"}>
        <div className="reg-done__card">
          <div className="reg-done__icon">
            <CheckCircle2 size={32} color="#276749" />
          </div>
          <h2 className="reg-done__title">Account Created!</h2>
          <p className="reg-done__sub">
            Your account as <strong>{selectedRole?.label}</strong> has been created.
            You can now sign in to access your dashboard.
          </p>
          <Link to="/login" className="reg-done__btn">Sign In Now</Link>
        </div>
      </div>
    );
  }
  return (
    <div className="reg-page" data-theme={isDark ? "dark" : "light"}>
      {/* Left panel */}
      <div className="reg-panel">
        <div>
          <div className="reg-panel__brand">
            <div className="reg-panel__logo"><GraduationCap size={20} color="#fff" /></div>
            <div>
              <p className="reg-panel__name">ILES</p>
              <p className="reg-panel__tagline">Internship Logging & Evaluation System</p>
            </div>
          </div>
          <h2 className="reg-panel__title">Create your account</h2>
          <p className="reg-panel__desc">
            Join ILES to start tracking, reviewing, or managing internships with a
            role-based dashboard tailored for you.
          </p>
           <div className="reg-panel__steps">
            {STEPS.map((s) => (
              <div key={s.n} className="reg-panel__step">
                <div
                  className="reg-panel__step-dot"
                  style={{
                    backgroundColor: step > s.n ? "#276749" : step === s.n ? "#fff" : "rgba(255,255,255,0.1)",
                    color: step === s.n ? "#1a365d" : "#fff",
                  }}
                >
                    {step > s.n ? <CheckCircle2 size={14} /> : s.n}
                </div>
                <span className="reg-panel__step-label" style={{ opacity: step >= s.n ? 1 : 0.4 }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        <p className="reg-panel__footer">Makerere University · CS · 2025–2026</p>
      </div>

      <div className="reg-form-area">
        <div className="reg-form-wrap">
          <div className="reg-form-topbar">
            <Link to="/login" className="reg-back">
              <ArrowLeft size={14} /> Already have an account? Sign in
            </Link>
            <button onClick={toggleDark} className="reg-theme-btn" aria-label="Toggle dark mode">
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>

          {error && (
            <div className="reg-error">
              <AlertCircle size={14} />
              <span>{error}</span>
            </div>
          )}

          {step === 1 && (
            <div>
              <h1 className="reg-step__title">What's your role?</h1>
              <p className="reg-step__sub">Your role determines your dashboard and features.</p>
              <div className="reg-roles">
                {ROLES.map((r) => (
                  <button
                    key={r.value}
                    className={`reg-role${role === r.value ? " reg-role--selected" : ""}`}
                    onClick={() => { setRole(r.value); setError(""); }}
                  >
                    <div className="reg-role__icon" style={{ backgroundColor: r.color + "15" }}>
                      <r.icon size={18} color={r.color} />
                    </div>
                    <p className="reg-role__label">{r.label}</p>
                    <p className="reg-role__desc">{r.desc}</p>