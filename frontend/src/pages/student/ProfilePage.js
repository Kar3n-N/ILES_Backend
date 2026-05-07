import React from 'react';
import PageShell from '../components/PageShell/PageShell';
import { PageHead, Card, Btn, Chip, Field, Av } from '../components/common/Primitives';
import { I } from '../components/common/Icons';

function Toggle ({ on }) {
    return (
        <div style = {{
            width: 36, height: 20, borderRadius: 999,
            background: on ? " var(--color-primary)" : "var(--color-border-strong)",
            position: "relative", flexShrink: 0,
        }}>
            <div style={{
                width: 16, height: 16, borderRadius: 999, background: #fff,
                position: "absolute", top: 2, left: on ? 18 : 2,
                transition: "left .15s", boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
            }} />
        </div>
    );
}

export default function ProfilePage() {
  return (
    <PageShell role="student">
      <PageHead
        crumb="Account · Profile"
        title="Your profile"
        actions={<><Btn sm kind="ghost">Cancel</Btn><Btn sm kind="primary">Save changes</Btn></>}
      />

      <div className="grid grid--profile">
        <div className="col">
          <Card>
            <div style={{ display: "grid", placeItems: "center", gap: 12, textAlign: "center" }}>
              <Av name="Karen Kawooya" lg />
              <Btn sm kind="ghost">{I.upload} Change photo</Btn>
              <div>
                <h3 className="section-title">Karen Kawooya</h3>
                <div className="section-sub">karen.k@university.ac.ug</div>
              </div>
              <div className="row" style={{ gap: 6 }}>
                <Chip kind="accent">Student</Chip>
                <Chip kind="ok" dot>Active</Chip>
              </div>
            </div>
          </Card>
          <Card kind="ghost" label="On this page">
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {["Personal info", "Academic info", "Placement", "Account & security", "Notifications"].map(s => (
                <li key={s} style={{ padding: "8px 0", borderBottom: "1px solid var(--color-border)", fontSize: 13, color: "var(--color-text-muted)" }}>{s}</li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="col">
          <Card label="Personal info">
            <div className="grid grid--2">
              <Field label="First name" placeholder="Karen" />
              <Field label="Last name" placeholder="Kawooya" />
              <Field label="Phone" placeholder="+256 7__ ___ ___" />
              <Field label="Date of birth" placeholder="2003-04-12" />
              <Field label="Address" placeholder="Kampala, Uganda" />
              <Field label="Emergency contact" placeholder="Name + phone" />
            </div>
          </Card>

          <Card label="Academic info">
            <div className="grid grid--2">
              <Field label="Student ID" placeholder="22/U/12345" />
              <Field label="Programme" placeholder="BSc Software Engineering" />
              <Field label="Year of study" placeholder="3" />
              <Field label="Cohort" placeholder="2026 · Semester 2" />
            </div>
          </Card>
