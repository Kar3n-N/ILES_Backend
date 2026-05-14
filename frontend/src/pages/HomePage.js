import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";

import {
  GraduationCap,
  BookOpen,
  ClipboardCheck,
  Star,
  Building2,
  Shield,
  ArrowRight,
  Moon,
  Sun,
  ChevronRight,
  Clock,
  Users,
  CheckCircle2,
} from "lucide-react";

import "./HomePage.css";

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Register & Get Placed",
    color: "#1a365d",
    desc: "Students register, select their role, and get linked to internship placements at partner companies.",
  },
  {
    step: "02",
    title: "Submit Weekly Logs",
    color: "#276749",
    desc: "Students submit weekly internship activities, learnings, and challenges for review.",
  },
  {
    step: "03",
    title: "Supervisor Review",
    color: "#c05621",
    desc: "Supervisors review logs, approve submissions, and provide feedback to students.",
  },
  {
    step: "04",
    title: "Final Evaluation",
    color: "#4a46c1",
    desc: "Students receive a final weighted score based on performance, communication, and initiative.",
  },
];

const FEATURES = [
  {
    icon: BookOpen,
    title: "Weekly Logbook",
    color: "#1a365d",
    desc: "Structured weekly internship logs with approval workflows.",
  },
  {
    icon: ClipboardCheck,
    title: "Supervisor Review",
    color: "#276749",
    desc: "Approve, reject, or request revisions with comments.",
  },
  {
    icon: Star,
    title: "Weighted Evaluation",
    color: "#b7791f",
    desc: "Automatic scoring for technical skills, punctuality, and initiative.",
  },
  {
    icon: Building2,
    title: "Placement Tracking",
    color: "#c05621",
    desc: "Track students, companies, and supervisors efficiently.",
  },
  {
    icon: Shield,
    title: "Role-Based Access",
    color: "#2b6cb0",
    desc: "Secure dashboards for Students, Supervisors, and Admins.",
  },
  {
    icon: Users,
    title: "Admin Analytics",
    color: "#6b46c1",
    desc: "Monitor placement rates, logs, and internship progress.",
  },
];

const STATS = [
  {
    value: "100+",
    label: "Students Enrolled",
    icon: GraduationCap,
  },
  {
    value: "87%",
    label: "Placement Rate",
    icon: Building2,
  },
  {
    value: "12 Weeks",
    label: "Average Duration",
    icon: Clock,
  },
  {
    value: "4 Roles",
    label: "User Types",
    icon: Users,
  },
];

function getDashboardPath(role) {
  if (role === "workplace_supervisor") return "/supervisor/dashboard";
  if (role === "academic_supervisor") return "/academic/dashboard";
  if (role === "internship_admin") return "/admin";

  return "/student/dashboard";
}

export default function HomePage() {
  const { user } = useContext(AuthContext);
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="home-page" data-theme={isDark ? "dark" : "light"}>
      <nav className="home-nav">
        <div className="home-nav__brand">
          <div className="home-nav__logo-icon">
            <GraduationCap size={18} color="#fff" />
          </div>

          <span className="home-nav__logo-name">ILES</span>
        </div>

        <div className="home-nav__actions">
          <button
            onClick={toggleTheme}
            className="home-nav__theme-btn"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {user ? (
            <Link
              to={getDashboardPath(user.role)}
              className="home-nav__btn home-nav__btn--primary"
            >
              Go to Dashboard
            </Link>
          ) : (
            <>
              <Link
                to="/login"
                className="home-nav__btn home-nav__btn--outline"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="home-nav__btn home-nav__btn--primary"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </nav>

      <section className="home-hero">
        <div className="home-hero__bg-circles" aria-hidden="true">
          <div className="home-hero__circle" style={{ width: 400, height: 400, top: -100, right: -100 }} />
          <div className="home-hero__circle" style={{ width: 250, height: 250, bottom: -60, left: -60 }} />
          <div className="home-hero__circle" style={{ width: 150, height: 150, top: 40, left: "30%" }} />
        </div>
        <div className="home-hero__content">
          <span className="home-hero__badge">
            Makerere University · Internship Platform
          </span>

          <h1 className="home-hero__title">
            Manage Your Internship
            <br />
            <span className="home-hero__title-accent">
              From Start to Finish
            </span>
          </h1>

          <p className="home-hero__desc">
            ILES connects students, workplace supervisors, and academic supervisors
            in one place — log your work, get feedback, and track your progress.
          </p>

          <div className="home-hero__cta">
            <Link
              to="/register"
              className="home-hero__btn home-hero__btn--white"
            >
              Get Started
              <ArrowRight size={15} />
            </Link>

            <Link
              to="/login"
              className="home-hero__btn home-hero__btn--ghost"
            >
              Login
              <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="home-stats">
        {STATS.map((s) => (
          <div key={s.label} className="home-stats__item">
            <div className="home-stats__value-row">
              <s.icon size={18} color="#1a365d" />
              <span className="home-stats__value">{s.value}</span>
            </div>

            <p className="home-stats__label">{s.label}</p>
          </div>
        ))}
      </section>

      <section className="home-how">
        <h2 className="home-section__title">
          How It Works
        </h2>

        <p className="home-section__sub">
          Four simple steps from placement to final evaluation.
        </p>

        <div className="home-how__grid">
          {HOW_IT_WORKS.map((step) => (
            <div key={step.step} className="home-how__card">
              <span
                className="home-how__step-badge"
                style={{ backgroundColor: step.color }}
              >
                {step.step}
              </span>

              <h3 className="home-how__card-title">
                {step.title}
              </h3>

              <p className="home-how__card-desc">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="home-features">
        <h2 className="home-section__title">
          Platform Features
        </h2>

        <p className="home-section__sub">
          Everything you need to run a successful internship programme.
        </p>

        <div className="home-features__grid">
          {FEATURES.map((f) => (
            <div key={f.title} className="home-features__card">
              <div
                className="home-features__icon-wrap"
                style={{ backgroundColor: f.color + "18" }}
              >
                <f.icon size={20} color={f.color} />
              </div>

              <h4 className="home-features__card-title">
                {f.title}
              </h4>

              <p className="home-features__card-desc">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="home-cta">
        <h2 className="home-cta__title">
          Ready to get started?
        </h2>

        <p className="home-cta__desc">
          Join ILES today and take control of your internship experience.
        </p>

        <div className="home-cta__buttons">
          <Link
            to="/register"
            className="home-cta__btn home-cta__btn--white"
          >
            Register now
            <ArrowRight size={15} />
          </Link>

          <Link
            to="/login"
            className="home-cta__btn home-cta__btn--ghost"
          >
            Login
          </Link>
        </div>
      </section>

      <footer className="home-footer">
        <div className="home-footer__brand">
          <div className="home-footer__logo-icon">
            <GraduationCap size={14} color="#fff" />
          </div>

          <span className="home-footer__text">
            ILES · Internship Logging & Evaluation System
          </span>
        </div>

        <div className="home-footer__links">
          <Link to="/login" className="home-footer__link">
            Login
          </Link>

          <Link to="/register" className="home-footer__link">
            Register
          </Link>

          <span className="home-footer__built">
            <CheckCircle2 size={12} color="#276749" />
            Built at Makerere University
          </span>
        </div>
      </footer>
    </div>
  );
}
