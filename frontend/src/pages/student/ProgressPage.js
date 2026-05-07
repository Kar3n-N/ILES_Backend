import React from 'react';
import { PageHead, Card, Stat, Btn, Bar, Placeholder } from '../../components/common/Primitives';
import { I } from '../../components/common/Icons';

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
    <div className='page'>
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

          <Card label="Skills & competencies">
            <div className="muted" style={{ fontSize: 13, marginBottom: 12 }}>Auto-tagged from your weekly logbook entries.</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {SKILLS.map(([name, pct]) => (
                <div key={name} className="row row--center" style={{ gap: 12 }}>
                  <div style={{ flex: 1, fontSize: 14, fontWeight: 500 }}>{name}</div>
                  <div style={{ width: 240 }}><Bar pct={pct} /></div>
                  <div className="muted" style={{ width: 40, textAlign: "right", fontSize: 12, fontWeight: 600 }}>{pct}%</div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="col">
          <Card label="Milestones">
            <ul className="timeline">
              <li className="is-done"><b>Placement approved</b><div className="meta">Mar 20</div></li>
              <li className="is-done"><b>Week 1 logbook submitted</b><div className="meta">Mar 27</div></li>
              <li className="is-done"><b>First workplace visit</b><div className="meta">Apr 14</div></li>
              <li className="is-warn"><b>Midterm evaluation</b><div className="meta">due in 5 days</div></li>
              <li><b>Final report</b><div className="meta">12 Aug</div></li>
              <li><b>Final evaluation & grade</b><div className="meta">19 Aug</div></li>
            </ul>
          </Card>

          <Card label="Evaluation snapshot">
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div className="row row--between row--center"><span className="muted">Workplace (interim)</span><b style={{ color: "var(--color-green)" }}>4.3 / 5</b></div>
              <div className="row row--between row--center"><span className="muted">Academic (interim)</span><span className="muted">pending</span></div>
              <div className="row row--between row--center"><span className="muted">Logbook average</span><b>4.2 / 5</b></div>
            </div>
            <div style={{ marginTop: 12 }}><Btn sm>See full evaluations {I.arrow}</Btn></div>
          </Card>
        </div>
      </div>
    </div>
  );
}
