import { PageHead, Card, Chip, Bar } from "../../components/common/Primitives";
import "./EvaluationsPage.css";

const WORKPLACE_CRITERIA = [
  { label: "Technical Skills",   weight: 30, score: 26 },
  { label: "Punctuality",        weight: 20, score: 18 },
  { label: "Communication",      weight: 20, score: 17 },
  { label: "Initiative",         weight: 15, score: 13 },
  { label: "Professionalism",    weight: 15, score: 14 },
];

const ACADEMIC_CRITERIA = [
  { label: "Logbook Quality",    weight: 40, score: 34 },
  { label: "Weekly Submissions", weight: 30, score: 27 },
  { label: "Progress Report",    weight: 30, score: 25 },
];

const HISTORY = [
  { date: "2026-04-28", evaluator: "Mr. Okello (WS)", score: 82, status: "approved" },
  { date: "2026-03-31", evaluator: "Dr. Nakato (AS)", score: 78, status: "approved" },
  { date: "2026-03-01", evaluator: "Mr. Okello (WS)", score: 70, status: "approved" },
];

function Crit({ label, weight, score }) {
  const pct = Math.round((score / weight) * 100);
  return (
    <div className="eval-crit">
      <div className="eval-crit__top">
        <span className="eval-crit__label">{label}</span>
        <span className="eval-crit__score">{score}/{weight}</span>
      </div>
      <Bar pct={pct} />
    </div>
  );
}

function EvalCard({ title, total, max, criteria }) {
  const pct = Math.round((total / max) * 100);
  return (
    <Card label={title}>
      <div className="eval-card__header">
        <span className="eval-card__score">
          {total}<span className="eval-card__max">/{max}</span>
        </span>
        <Chip kind={pct >= 70 ? "ok" : pct >= 50 ? "warn" : "err"}>{pct}%</Chip>
      </div>
      <Bar pct={pct} />
      <div className="eval-card__criteria">
        {criteria.map((c) => <Crit key={c.label} {...c} />)}
      </div>
    </Card>
  );
}

export default function EvaluationsPage() {
  const wpTotal = WORKPLACE_CRITERIA.reduce((s, c) => s + c.score, 0);
  const wpMax   = WORKPLACE_CRITERIA.reduce((s, c) => s + c.weight, 0);
  const acTotal = ACADEMIC_CRITERIA.reduce((s, c) => s + c.score, 0);
  const acMax   = ACADEMIC_CRITERIA.reduce((s, c) => s + c.weight, 0);

  return (
    <div className="page">
      <PageHead
        title="My Evaluations"
        sub="Scores from your workplace and academic supervisors."
      />

      <div className="grid grid--2">
        <EvalCard
          title="Workplace Evaluation"
          total={wpTotal}
          max={wpMax}
          criteria={WORKPLACE_CRITERIA}
        />
        <EvalCard
          title="Academic Evaluation"
          total={acTotal}
          max={acMax}
          criteria={ACADEMIC_CRITERIA}
        />
      </div>

      <Card label="Evaluation History">
        <table className="eval-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Evaluator</th>
              <th>Score</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {HISTORY.map((h, i) => (
              <tr key={i}>
                <td>{h.date}</td>
                <td>{h.evaluator}</td>
                <td className="eval-table__score">{h.score}%</td>
                <td><Chip kind="ok">{h.status}</Chip></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
