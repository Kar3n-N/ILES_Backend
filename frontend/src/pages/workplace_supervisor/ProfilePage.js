import React from 'react';
import { PageHead, Card, Btn, Chip, Field, Av } from '../../components/common/Primitives';
import { I } from '../../components/common/Icons';

function Toggle({ on }) {
  return (
    <div style={{
      width: 36, height: 20, borderRadius: 999,
      background: on ? "var(--color-primary)" : "var(--color-border-strong)",
      position: "relative", flexShrink: 0,
    }}>
      <div style={{
        width: 16, height: 16, borderRadius: 999, background: "#fff",
        position: "absolute", top: 2, left: on ? 18 : 2,
        transition: "left .15s", boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
      }} />
    </div>
  );
}

export default function WorkplaceSupervisorProfilePage() {
  return (
    <div className="page">
      <PageHead
        crumb="Account · Profile"
        title="Your profile"
        actions={<><Btn sm kind="ghost">Cancel</Btn><Btn sm kind="primary">Save changes</Btn></>}
      />

      <div className="grid grid--profile">
        <div className="col">
          <Card>
            <div style={{ display: "grid", placeItems: "center", gap: 12, textAlign: "center" }}>
              <Av name="John Okello" lg />
              <Btn sm kind="ghost">{I.upload} Change photo</Btn>
              <div>
                <h3 className="section-title">John Okello</h3>
                <div className="section-sub">j.okello@company.com</div>
              </div>
              <div className="row" style={{ gap: 6 }}>
                <Chip kind="accent">Workplace Supervisor</Chip>
                <Chip kind="ok" dot>Active</Chip>
              </div>
            </div>
          </Card>
          <Card kind="ghost" label="On this page">
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {["Personal info", "Organisation", "Account & security", "Notifications"].map(s => (
                <li key={s} style={{ padding: "8px 0", borderBottom: "1px solid var(--color-border)", fontSize: 13, color: "var(--color-text-muted)" }}>{s}</li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="col">
          <Card label="Personal info">
            <div className="grid grid--2">
              <Field label="First name" placeholder="John" />
              <Field label="Last name" placeholder="Okello" />
              <Field label="Phone" placeholder="+256 7__ ___ ___" />
              <Field label="Job title" placeholder="Senior Engineer" />
            </div>
          </Card>

          <Card label="Organisation">
            <div className="grid grid--2">
              <Field label="Company name" placeholder="Acme Telecoms Ltd." />
              <Field label="Department" placeholder="Engineering" />
              <Field label="Office address" placeholder="Kampala, Uganda" />
              <Field label="Company email domain" placeholder="@company.com" />
            </div>
          </Card>

          <Card label="Account & security">
            <div className="grid grid--2">
              <Field label="Email" placeholder="j.okello@company.com" />
              <Field label="Password"><span>••••••••••</span></Field>
            </div>
            <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
              <Btn sm>Change password</Btn>
            </div>
          </Card>

          <Card label="Notifications">
            {[
              ["Email me when a student submits a log entry", true],
              ["Email me when a new intern is assigned to me", true],
              ["Remind me 24h before an evaluation deadline", true],
              ["Weekly intern progress digest", false],
            ].map(([s, on]) => (
              <div key={s} className="row row--between row--center" style={{ padding: "10px 0", borderBottom: "1px solid var(--color-border)" }}>
                <span style={{ fontSize: 14 }}>{s}</span>
                <Toggle on={on} />
              </div>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
}
