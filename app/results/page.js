"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

const LS_RESULT_KEY = "splk5001_result";

export default function ResultsPage() {
  const [res, setRes] = useState(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(LS_RESULT_KEY);
      if (!raw) return;
      const data = JSON.parse(raw);
      // Stored shape: { generatedAt, submittedAt, result, questions, answers }
      setRes({
        ...data.result,
        questions: data.questions,
        answers: data.answers,
        completedAt: data.submittedAt
      });
    } catch {
      // ignore
    }
  }, []);

  const byDomain = useMemo(() => {
    if (!res?.questions || !res?.detailed) return [];
    const map = new Map();
    res.questions.forEach((q) => {
      const d = q.domain;
      if (!map.has(d)) map.set(d, { domain: d, correct: 0, total: 0 });
      const slot = map.get(d);
      slot.total += 1;
      const row = res.detailed.find((x) => x.id === q.id);
      if (row?.isCorrect) slot.correct += 1;
    });
    return Array.from(map.values()).map((x) => ({
      ...x,
      percent: Math.round((x.correct / x.total) * 100)
    })).sort((a,b)=>a.domain.localeCompare(b.domain));
  }, [res]);

  if (!res) {
    return (
      <main className="card">
        <div className="h2">No results found</div>
        <p className="small">Generate an exam and submit it to see results here.</p>
        <Link className="btn" href="/">Back home</Link>
      </main>
    );
  }

  return (
    <main>
      <div className="card">
        <div className="row" style={{ justifyContent: "space-between" }}>
          <div>
            <div className="h1">{res.percent}%</div>
            <div className="small">Score: {res.correct} / {res.total}</div>
            <div className="small">Completed: {new Date(res.completedAt).toLocaleString()}</div>
          </div>
          <div className="row">
            <Link className="btn" href="/exam">Review</Link>
            <Link className="btn btnPrimary" href="/">New exam</Link>
          </div>
        </div>
      </div>

      <div className="card" style={{ marginTop: 12 }}>
        <div className="h2">Performance by domain</div>
        <div style={{ marginTop: 10, display: "grid", gap: 8 }}>
          {byDomain.map((r) => (
            <div key={r.domain} className="row" style={{ justifyContent: "space-between" }}>
              <div className="small" style={{ maxWidth: 680 }}>{r.domain}</div>
              <div className="row">
                <span className="pill">{r.correct}/{r.total}</span>
                <span className="pill">{r.percent}%</span>
              </div>
            </div>
          ))}
        </div>
        <p className="small" style={{ marginTop: 12, lineHeight: 1.5 }}>
          Brutal truth: your weak domain is your revenue leak. Fix it with focused reps: filter by that domain on Home, generate 20–30 questions, and repeat until you can explain every wrong answer out loud.
        </p>
      </div>
    </main>
  );
}
