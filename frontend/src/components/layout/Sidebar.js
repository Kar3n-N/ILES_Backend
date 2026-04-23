import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import './Sidebar.css';

const NAV_CONFIG = {
  student: [
    { label: 'Overview', path: '/student/dashboard', icon: '🏠' },
    { label: 'Daily Logs', path: '/student/logbook', icon: '📖' },
    { label: 'Progress', path: '/student/progress', icon: '📈' },
    { label: 'Schedule', path: '/student/schedule', icon: '📅' },
    { label: 'Documents', path: '/student/documents', icon: '📄' },
    { label: 'My Profile', path: '/student/profile', icon: '👤' },
  ],
}