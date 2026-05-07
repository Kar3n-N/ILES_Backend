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
