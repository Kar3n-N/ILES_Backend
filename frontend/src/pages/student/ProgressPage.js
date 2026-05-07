import React from 'react';
import PageShell from '../components/PageShell/PageShell';
import { PageHead, Card, Stat, Btn, Bar, Placeholder } from '../components/common/Primitives';
import { I } from '../components/common/Icons';

const SKILLS = [
    ["REST APIs", 80],
    ["Database Design", 65],
    ["Version control", 90],
    ["Team communication", 55],
    ["Testing", 35],
    ["DevOps /Docker", 48],
];

export default function ProgressPage() {
  return (
    <PageShell role="student">
      <PageHead
        crumb="Workspace · Progress"
        title="Your internship progress"
        sub="Tracks how far you've come and what's still ahead."
        actions={<Btn sm kind="ghost">Export report</Btn>}
      />

      <Card kind="accent">
        <div className="row row--between row--center">
          <div>
            <div className="tiny" style={{ color: "var(--color-primary)" }}>Overall progress</div>
            <h3 className="section-title" style={{ marginTop: 4, fontSize: 22 }}>Week 7 of 12</h3>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 28, fontWeight: 700, color: "var(--color-primary)", lineHeight: 1 }}>58%</div>
            <div className="muted" style={{ fontSize: 12 }}>~5 weeks remaining</div>
          </div>
        </div>
        <div style={{ marginTop: 16 }}><Bar pct={58} /></div>
      </Card>

      <div className="grid grid--4">
        <Stat label="Logbook completion" value="6" unit=" / 7 weeks" />
        <Stat label="Hours logged" value="248" unit=" of ~480" />
        <Stat label="Skills tagged" value="14" delta="+3 this month" />
        <Stat label="Visits done" value="1" unit=" of 2" />
      </div>

      <div className="grid grid--main-narrow">
        <div className="col">
          <Card label="Hours per week">
            <Placeholder label="bar chart · weeks 1–12 · target 40 h/week" h={200} />
          </Card>
