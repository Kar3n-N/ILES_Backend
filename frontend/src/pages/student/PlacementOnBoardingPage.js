import React from 'react';
import { PageHead, Card, Btn, Field } from '../../components/common/Primitives';
import { I } from '../../components/common/Icons';

export default function OnboardingPage() {
  return (
    <div className="page">
      <PageHead
        crumb="Onboarding · Step 1 of 2"
        title="Set up your internship placement"
        sub="You'll unlock your dashboard once your placement is approved."
        actions={<><Btn kind="ghost" sm>Save draft</Btn><Btn kind="primary" sm>{I.arrow} Submit for approval</Btn></>}
      />
      <Card kind="warn">
        <div className="row row--center" style={{ gap: 12 }}>
          <span style={{ width: 36, height: 36, borderRadius: 10, background: "#fff", display: "grid", placeItems: "center", color: "var(--color-orange)", flexShrink: 0 }}>{I.alert}</span>
          <div className="flex-1">
            <div style={{ fontWeight: 600, color: "var(--color-text)" }}>Dashboard locked until your placement is approved.</div>
            <div className="muted" style={{ fontSize: 13 }}>Tell us where you'll be doing your internship so your supervisors can be linked to your account.</div>
          </div>
        </div>
      </Card>
      <div className="grid grid--2">
        <Card label="Company / Organization">
          <Field label="Company name" placeholder="e.g. Acme Telecoms Ltd." />
        </Card>


