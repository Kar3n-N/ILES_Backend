import React, { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import {
  PageHead,
  Card,
  Stat,
  Btn,
  Chip,
  Av,
} from "../../components/common/Primitives";
import { I } from "../../components/common/Icons";
import "../../components/common/Primitives.css";

const DEMO_USERNAMES = [
  "maria.reyes",
  "john.doe",
  "dr.santos",
  "prof.torres",
  "admin",
];

const DEMO_USERS = [
  {
    id: 1,
    name: "Karen Kawooya",
    role: "Student",
    org: "Cohort 2026-S2",
    status: "Active",
    seen: "now",
  },
  {
    id: 2,
    name: "John Okello",
    role: "Workplace sup.",
    org: "Acme Telecoms",
    status: "Active",
    seen: "2h ago",
  },
  {
    id: 3,
    name: "Sarah Nakato",
    role: "Academic sup.",
    org: "Cohort 2026-S2",
    status: "Active",
    seen: "1d ago",
  },
  {
    id: 4,
    name: "Eric Walusimbi",
    role: "Student",
    org: "Cohort 2026-S2",
    status: "Pending placement",
    seen: "3d ago",
  },
  {
    id: 5,
    name: "System Admin",
    role: "System admin",
    org: "—",
    status: "Active",
    seen: "5m ago",
  },
];

const DEMO_COHORTS = [
  { name: "Cohort 2026-S2 · BSc SE", count: "126 students", status: "Active" },
  { name: "Cohort 2026-S2 · BSc IT", count: "88 students", status: "Active" },
  {
    name: "Cohort 2026-S1 · archived",
    count: "104 students",
    status: "Archived",
  },
];

const DEMO_AUDIT = [
  { who: "System Admin", what: "reset password for Eric W.", when: "5m ago" },
  { who: "Dr. Nakato", what: "updated rubric.", when: "2h ago" },
  { who: "Mr. Okello", what: "approved 3 entries.", when: "3h ago" },
  { who: "System", what: "sent 18 reminder emails.", when: "today 06:00" },
];

const DEMO_STATS = {
  totalUsers: 2415,
  activeInterns: 318,
  supervisors: 64,
  openIssues: 12,
};

const ROLE_FILTERS = ["All", "Students", "Workplace", "Academic", "Admins"];

const ROLE_MAP = {
  Students: ["Student"],
  Workplace: ["Workplace sup."],
  Academic: ["Academic sup."],
  Admins: ["System admin"],
};

function AdminDashboardPage() {
  const { user } = useAuth();
  const isDemo = DEMO_USERNAMES.includes(user?.username);

  const [users, setUsers] = useState(isDemo ? DEMO_USERS : []);
  const [cohorts, setCohorts] = useState(isDemo ? DEMO_COHORTS : []);
  const [audit, setAudit] = useState(isDemo ? DEMO_AUDIT : []);
  const [stats, setStats] = useState(isDemo ? DEMO_STATS : null);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  return <h1> ADMIN DASHBOARD PAGE</h1>;
}

export default AdminDashboardPage;
