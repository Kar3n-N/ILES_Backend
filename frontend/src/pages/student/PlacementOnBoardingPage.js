import React from 'react';
import { PageHead, Card, Btn, Field, Lines } from '../../components/common/Primitives';
import { I } from '../../components/common/Icons';

export default function OnboardingPage() {
  return (
    <div className="page">
      <PageHead
        crumb="Onboarding · Step 1 of 3"
        title="Set up your internship placement"
        sub="You'll unlock your dashboard once your placement is approved."
        actions={<><Btn kind="ghost" sm>Save draft</Btn><Btn kind="primary" sm>{I.arrow} Submit for approval</Btn></>}
      />

      <Card kind="warn">
        <div className="row row--center" style={{ gap: 12 }}>
          <span style={{ width: 36, height: 36, borderRadius: 10, background: "#fff", display: "grid", placeItems: "center", color: "var(--color-orange)", flexShrink: 0 }}>{I.alert}</span>
          <div className="flex-1">
            <div style={{ fontWeight: 600, color: "var(--color-text)" }}>Dashboard locked until your placement is approved.</div>
            <div className="muted" style={{ fontSize: 13 }}>Tell us where you'll be doing your internship so your workplace and academic supervisors can be linked to your account.</div>
          </div>
        </div>
      </Card>

      <div className="grid grid--2">
        <Card label="Company / Organization">
          <div className="col" style={{ gap: 12 }}>
            <Field label="Company name" placeholder="e.g. Acme Telecoms Ltd." />
            <Field label="Industry / sector" placeholder="ICT · Finance · Health · Education" />
            <Field label="Office address" placeholder="Plot 42, Kampala Road" />
            <div className="row" style={{ gap: 12 }}>
              <Field label="Country" placeholder="Uganda ▾" />
              <Field label="City" placeholder="Kampala" />
            </div>
          </div>
        </Card>

        <Card label="Workplace supervisor">
          <div className="col" style={{ gap: 12 }}>
            <Field label="Full name" placeholder="Mr. / Mrs. ___________" />
            <Field label="Job title" placeholder="e.g. Engineering Lead" />
            <Field label="Email address" placeholder="supervisor@company.com" />
            <Field label="Phone" placeholder="+256 7__ ___ ___" />
          </div>
          <div className="field__hint" style={{ marginTop: 12 }}>We'll email them an invite to confirm and create a supervisor account.</div>
        </Card>

        <Card label="Placement details">
          <div className="col" style={{ gap: 12 }}>
            <div className="row" style={{ gap: 12 }}>
              <Field label="Start date" placeholder="2026-05-12" />
              <Field label="End date" placeholder="2026-08-12" />
            </div>
            <div className="row" style={{ gap: 12 }}>
              <Field label="Total weeks" placeholder="12" />
              <Field label="Hours / week" placeholder="40" />
            </div>
            <Field label="Role / position" placeholder="e.g. Software Engineering Intern" />
            <Field label="Brief description of duties" kind="ta"><Lines count={3} /></Field>
          </div>
        </Card>

        <Card label="Required documents">
          <div className="col" style={{ gap: 12 }}>
            <Field label="Acceptance / offer letter" kind="file" hint="Signed PDF · max 10MB">
              <span style={{ color: "var(--color-primary)", fontWeight: 600 }}>{I.upload} Upload acceptance letter</span>
              <span className="muted" style={{ fontSize: 12 }}>or drag and drop</span>
            </Field>
            <Field label="Insurance / liability cover" kind="file">
              <span style={{ color: "var(--color-primary)", fontWeight: 600 }}>{I.upload} Upload insurance</span>
            </Field>
            <Field label="Updated CV" kind="file">
              <span style={{ color: "var(--color-primary)", fontWeight: 600 }}>{I.upload} Upload CV</span>
            </Field>
          </div>
        </Card>
      </div>

      <Card kind="ghost" label="What happens next">
        <ol style={{ margin: 0, paddingLeft: 20, fontSize: 14, lineHeight: 1.8, color: "var(--color-text-muted)" }}>
          <li>Academic supervisor reviews and approves your placement (typically 1–2 days).</li>
          <li>Workplace supervisor receives an invite email and confirms.</li>
          <li>Your dashboard, logbook, and evaluations unlock automatically.</li>
        </ol>
      </Card>
    </div>
  );
}
