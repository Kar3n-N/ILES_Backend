import React from "react";
import PageShell from "../../components/PageShell/PageShell";
import {
  PageHead,
  Card,
  Btn,
  Chip,
  Field,
  Bar,
  Lines,
} from "../../components/common/Primitives";
import { I } from "../components/common/Icons";

const WEEKS = [
  {
    w: 7,
    status: "Draft",
    active: true,
    date: "May 4 — May 8",
    kind: "accent",
  },
  { w: 6, status: "Approved", date: "Apr 27 — May 1", kind: "ok" },
  { w: 5, status: "Approved", date: "Apr 20 — Apr 24", kind: "ok" },
  { w: 4, status: "Returned", date: "Apr 13 — Apr 17", kind: "warn" },
  { w: 3, status: "Approved", date: "Apr 6 — Apr 10", kind: "ok" },
  { w: 2, status: "Approved", date: "Mar 30 — Apr 3", kind: "ok" },
  { w: 1, status: "Approved", date: "Mar 23 — Mar 27", kind: "ok" },
];

function LogbookPage() {
  return <h1> LOGBOOK PAGE</h1>;
}

export default LogbookPage;
