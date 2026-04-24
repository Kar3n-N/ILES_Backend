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

  workplace_supervisor: [
    { label: 'Dashboard', path: '/supervisor/dashboard', icon: '🏠' },
    { label: 'My Students', path: '/supervisor/students', icon: '👥' },
    { label: 'Evaluations', path: '/supervisor/evaluation', icon: '⭐' },
    { label: 'My Profile', path: '/supervisor/profile', icon: '👤' },

  ],

  academic_supervisor: [
    { label: 'Dashboard', path: '/academic/dashboard', icon: '🏠' },
    { label: 'Evaluations', path: '/academic/evaluation', icon: '⭐' },
    { label: 'Students', path: '/academic/students', icon: '👥' },
    
  ],

  internship_admin: [
    { label: 'Dashboard', path: '/admin/dashboard', icon: '🏠' },
    { label: 'Placements', path: '/admin/placements', icon: '🏢' },
    { label: 'Users', path: '/admin/users', icon: '👥' },
    { label: 'Criteria', path: '/admin/criteria', icon: '📋' },
  ],
};