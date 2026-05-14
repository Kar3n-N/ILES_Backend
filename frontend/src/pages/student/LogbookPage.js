import React from "react";
import {
  PageHead,
  Card,
  Btn,
  Chip,
  Field,
  Bar,
  Lines,
} from "../../components/common/Primitives";
import { I } from "../../components/common/Icons";

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
  return (
    <div className="page">
      <PageHead
        crumb="Workspace · Logbook"
        title="Weekly logbook"
        sub="Each week, summarize what you did, learned, and need help with. Your supervisor signs off on every entry."
        actions={
          <>
            <Btn sm kind="ghost">
              Export PDF
            </Btn>
            <Btn sm kind="primary">
              {I.plus} New week
            </Btn>
          </>
        }
      />

      <div className="grid grid--side-list">
        <Card padless style={{ overflow: "hidden" }}>
          <div
            style={{
              padding: "14px 16px",
              borderBottom: "1px solid var(--color-border)",
            }}
          >
            <span className="tiny">Weeks</span>
          </div>
          <ul style={{ listStyle: "none", margin: 0, padding: 6 }}>
            {WEEKS.map((it) => (
              <li
                key={it.w}
                style={{
                  padding: "10px 12px",
                  margin: 2,
                  borderRadius: 8,
                  background: it.active ? "var(--primary-soft)" : "transparent",
                  cursor: "pointer",
                  border: it.active
                    ? "1px solid rgba(26,54,93,0.2)"
                    : "1px solid transparent",
                }}
              >
                <div className="row row--between row--center">
                  <b
                    style={{
                      fontSize: 14,
                      color: it.active
                        ? "var(--color-primary)"
                        : "var(--color-text)",
                    }}
                  >
                    Week {it.w}
                  </b>
                  <Chip kind={it.kind}>{it.status}</Chip>
                </div>
                <div className="muted" style={{ fontSize: 12, marginTop: 2 }}>
                  {it.date}
                </div>
              </li>
            ))}
          </ul>
        </Card>
        <div className="col">
          <Card kind="accent">
            <div className="row row--between row--center">
              <div>
                <div className="tiny" style={{ color: "var(--color-primary)" }}>
                  Currently editing
                </div>
                <h3 className="section-title" style={{ marginTop: 4 }}>
                  Week 7 · May 4 — May 8
                </h3>
              </div>
              <div className="row row--center" style={{ gap: 8 }}>
                <Chip kind="warn" dot>
                  Draft
                </Chip>
                <Btn sm kind="ghost">
                  Save draft
                </Btn>
                <Btn sm kind="primary">
                  Submit for approval {I.arrow}
                </Btn>
              </div>
            </div>
            <div style={{ marginTop: 12 }}>
              <Bar pct={40} />
            </div>
          </Card>

          <Card label="① Tasks completed this week">
            <Field kind="ta">
              <Lines count={4} />
            </Field>
          </Card>

          <div className="grid grid--2">
            <Card label="② Skills practiced">
              <div className="row row--wrap" style={{ gap: 6 }}>
                <Chip kind="accent">REST APIs</Chip>
                <Chip kind="accent">PostgreSQL</Chip>
                <Chip kind="accent">Docker</Chip>
                <Chip>{I.plus} add skill</Chip>
              </div>
              <div className="field__hint" style={{ marginTop: 12 }}>
                Tagged skills automatically appear on your Progress page.
              </div>
            </Card>
            <Card label="③ Hours">
              <div className="row" style={{ gap: 8 }}>
                {["Mon", "Tue", "Wed", "Thu", "Fri"].map((d, i) => (
                  <Field key={d} label={d} placeholder={i < 3 ? "8" : "—"} />
                ))}
              </div>
              <div className="field__hint" style={{ marginTop: 8 }}>
                Total: 24 hrs · 16 hrs remaining this week
              </div>
            </Card>
          </div>

          <Card label="④ Challenges & lessons learned">
            <Field kind="ta">
              <Lines count={3} />
            </Field>
          </Card>

          <Card label="⑤ Attachments (optional)">
            <Field kind="file">
              <span style={{ color: "var(--color-primary)", fontWeight: 600 }}>
                {I.upload} Drop screenshots, code, photos…
              </span>
            </Field>
          </Card>

          <Card kind="ghost" label="Supervisor approval">
            <div className="row row--between row--center">
              <div className="row row--center" style={{ gap: 12 }}>
                <span className="av av--orange">JO</span>
                <div>
                  <b>Mr. Okello</b> — Workplace supervisor
                  <div className="muted" style={{ fontSize: 12 }}>
                    Will review this entry once you submit. Approval typically
                    within 48 hours.
                  </div>
                </div>
              </div>
              <Chip>Awaiting submit</Chip>
            </div>
          </Card>

          <Card kind="warn" label="Week 4 was returned">
            <div className="row row--between row--center">
              <div className="flex-1" style={{ paddingRight: 16 }}>
                <b>
                  "Add more detail on the API testing task. Mention which
                  endpoints you tested and what tools you used."
                </b>
                <div className="muted" style={{ fontSize: 12, marginTop: 4 }}>
                  — Mr. Okello · 16 Apr 2026
                </div>
              </div>
              <Btn sm>Open Week 4 {I.arrow}</Btn>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default LogbookPage;
