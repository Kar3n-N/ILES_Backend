import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import "./Navbar.css";

// TODO: ILES-21: Add ROLE_NAV_LINK and ROLE_CONFIG constanst here
const ROLE_NAV_LINKS = {
  student: [
    { path: "/student/dashboard", label: "Overview", icon: "⌂" },
    { path: "/student/logbook", label: "My Logbook", icon: "✎" },
    { path: "/student/progress", label: "Progress", icon: "↗" },
  ],
  workplace_supervisor: [
    { path: "/supervisor/dashboard", label: "Dashboard", icon: "⌂" },
    { path: "/supervisor/evaluation", label: "Evaluations", icon: "★" },
  ],
  academic_supervisor: [
    { path: "/supervisor/dashboard", label: "Dashboard", icon: "⌂" },
    { path: "/supervisor/evaluation", label: "Evaluations", icon: "★" },
  ],
  internship_admin: [{ path: "/admin", label: "Admin Dashboard", icon: "⌂" }],
};

const ROLE_CONFIG = {
  student: {
    label: "Student",
    color: "#1a365d",
    accent: "#2b6cb0",
    badge: "STU",
  },
  workplace_supervisor: {
    label: "Supervisor",
    color: "#276749",
    accent: "#38a169",
    badge: "SUP",
  },
  academic_supervisor: {
    label: "Academic Sup.",
    color: "#c05621",
    accent: "#dd6b20",
    badge: "ACS",
  },
  internship_admin: {
    label: "Admin",
    color: "#6b46c1",
    accent: "#805ad5",
    badge: "ADM",
  },
};

// TODO: ILES-23: Add nav links JSX
// TODO: ILES-24: Add user controls and dropdown JSX

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState(new Date());
  const menuRef = useRef(null);

  const roleConfig = user
    ? (ROLE_CONFIG[user.role] ?? ROLE_CONFIG.student)
    : null;
  const navLinks = user ? (ROLE_NAV_LINKS[user.role] ?? []) : [];

  /* Live clock — updates every 60 seconds */
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(id); // cleanup when component unmounts
  }, []);

  /* Shrink navbar on scroll — adds CSS class when page is scrolled */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close dropdown when user clicks anywhere outside the menu */
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  function handleLogout() {
    setMenuOpen(false);
    logout();
    navigate("/login");
  }

  const formattedDate = time.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  const formattedTime = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const initials = user
    ? `${user.first_name?.[0] ?? ""}${user.last_name?.[0] ?? ""}`.toUpperCase() ||
      user.username?.slice(0, 2).toUpperCase()
    : "??";

  return (
    <header
      className={`iles-navbar ${scrolled ? "iles-navbar--scrolled" : ""}`}
      role="banner"
    >
      {/* Skip link for keyboard / screen-reader accessibility */}
      <a href="#main-content" className="iles-navbar__skip">
        Skip to main content
      </a>

      {/* LEFT: Brand logo + date/time */}
      <div className="iles-navbar__brand">
        <Link to="/" className="iles-navbar__logo" aria-label="ILES Home">
          <span className="iles-navbar__logo-mark">IL</span>
          <span className="iles-navbar__logo-text">ES</span>
        </Link>
        <div className="iles-navbar__divider" aria-hidden="true" />
        <div className="iles-navbar__meta">
          <span className="iles-navbar__date">{formattedDate}</span>
          <span className="iles-navbar__time">{formattedTime}</span>
        </div>
      </div>

      {/* CENTRE: Nav links — only render if user is logged in */}
      {user && navLinks.length > 0 && (
        <nav className="iles-navbar__nav" aria-label="Primary navigation">
          {navLinks.map((link) => {
            // Check if this link matches the current URL path
            const isActive =
              location.pathname === link.path ||
              location.pathname.startsWith(link.path + "/");

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`iles-navbar__link ${isActive ? "iles-navbar__link--active" : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                {/* Icon character */}
                <span className="iles-navbar__link-icon" aria-hidden="true">
                  {link.icon}
                </span>

                {/* Link text */}
                <span className="iles-navbar__link-label">{link.label}</span>

                {/* Animated underline pip shown only on active link */}
                {isActive && (
                  <span className="iles-navbar__link-pip" aria-hidden="true" />
                )}
              </Link>
            );
          })}
        </nav>
      )}
      {/* RIGHT user controls — added in ILES-105 */}
    </header>
  );
}

export default Navbar;
