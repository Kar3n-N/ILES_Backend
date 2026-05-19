import { useState } from "react";
import { PageHead, Card, Btn } from "../../component/components/common/Primitives";
import "./WorkplaceEvaluationPage.css";

const STUDENTS = [
    { id: 1, name: "Alice Namukasa" },
    { id: 2, name: "Brian SSemanda" },
    { id: 3, name: "Carol Atim" },
];

const CRITERIA = [
    { key: "technical",      label: "Technical Skills", max: 30 },
    { key: "punctuality",    label: "Punctuality",      max: 20 },
    { key: "communication",  label: "Communication",    max: 20 },
    { key: "initiative",     label: "Initiative",       max: 15 },
    { key: "professionalism",label: "Professionalism",  max: 15 },
];

export default function WorkplaceEvaluationPage() {
    const [studentId, setStudentId] = useState("");
    const [ scores, setScores] = useState(Object.fromEntries(CRITERIA.map((c) => [c.key, ""])));

    const total = CRITERIA.reduce((sum, c) => {
        const v = parseInt(scores[c.key], 10);
        return sum + (isNaN(v) ? 0 : Math.min(v, c.max));
    }, 0);

     function setScore(key, val) { setScores((s) => ({ ...s, [key]: val })); }

    function handleSubmit(e) { e.preventDefault(); /* TODO: wire to API */ } 
    }
}