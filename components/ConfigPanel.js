"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { LAST_UPDATED, QUESTION_BANK } from "../lib/questionBank";
import { pickQuestions } from "../lib/exam";
import { DOMAINS } from "./domains";

const LS_KEY = "splk5001_config";
const LS_EXAM_KEY = "splk5001_exam";

const DEFAULTS = {
  count: 5,
  showCorrectAfter: false,
  showDiscussionAfter: true,
  useMostRecent: false,
  chronological: false,
  domainFilter: []
};

export default function ConfigPanel() {
  const [cfg, setCfg] = useState(DEFAULTS);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (raw) setCfg({ ...DEFAULTS, ...JSON.parse(raw) });
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(LS_KEY, JSON.stringify(cfg));
    } catch {
      // ignore
    }
  }, [cfg]);

  const totalAvailable = QUESTION_BANK.length;

  const selectedCount = useMemo(() => {
    const n = Number(cfg.count);
    if (!Number.isFinite(n)) return 5;
    return Math.max(1, Math.min(150, Math.floor(n)));
  }, [cfg.count]);

  const effectiveDomains = cfg.domainFilter?.length ? cfg.domainFilter : null;

  const preview = useMemo(() => {
    return pickQuestions({
      count: selectedCount,
      domainFilter: effectiveDomains,
      chronological: cfg.chronological,
      useMostRecent: cfg.useMostRecent,
      seed: 5001
    });
  }, [selectedCount, effectiveDomains, cfg.chronological, cfg.useMostRecent]);

  function toggleDomain(d) {
    setCfg((prev) => {
      const set = new Set(prev.domainFilter || []);
      if (set.has(d)) set.delete(d);
      else set.add(d);
      return { ...prev, domainFilter: Array.from(set) };
    });
  }

  async function generateExam() {
    setBusy(true);
    try {
      const questions = pickQuestions({
        count: selectedCount,
        domainFilter: effectiveDomains,
        chronological: cfg.chronological,
        useMostRecent: cfg.useMostRecent,
        seed: Date.now()
      });

      const exam = {
        generatedAt: new Date().toISOString(),
        config: cfg,
        questions,
        answers: {},
        meta: {
          totalAvailable,
          lastUpdated: LAST_UPDATED
        }
      };

      localStorage.setItem(LS_EXAM_KEY, JSON.stringify(exam));
      window.location.href = "/exam";
    } finally {
      setBusy(false);
    }
  }

  async function downloadPdf(includeAnswers = false) {
    setBusy(true);
    try {
      const questions = pickQuestions({
        count: selectedCount,
        domainFilter: effectiveDomains,
        chronological: cfg.chronological,
        useMostRecent: cfg.useMostRecent,
        seed: 5001
      });

      const res = await fetch("/api/pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: "SPLK-5001 Practice Quiz",
          lastUpdated: LAST_UPDATED,
          includeAnswers,
          questions
        })
      });

      if (!res.ok) throw new Error("PDF generation failed");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = includeAnswers ? "splk-5001-quiz-answers.pdf" : "splk-5001-quiz.pdf";
      a.click();
      URL.revokeObjectURL(url);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="card">
      <div className="row" style={{ justifyContent: "space-between" }}>
        <div>
          <div className="h1">SPLK-5001</div>
          <div className="small">Splunk Certified Cybersecurity Defense Analyst (practice)</div>
        </div>
        <div className="pill">Last updated: {LAST_UPDATED}</div>
      </div>

      <div className="grid grid-2" style={{ marginTop: 14 }}>
        <div className="card" style={{ padding: 14 }}>
          <div className="row" style={{ justifyContent: "space-between" }}>
            <div className="small">Total number of questions available</div>
            <div className="pill">{totalAvailable}</div>
          </div>

          <div className="row" style={{ justifyContent: "space-between", marginTop: 12 }}>
            <label className="small">Number of questions</label>
            <input
              className="input"
              style={{ width: 110 }}
              type="number"
              min={1}
              max={150}
              value={cfg.count}
              onChange={(e) => setCfg((p) => ({ ...p, count: e.target.value }))}
            />
          </div>

          <div style={{ marginTop: 12 }}>
            <label className="row" style={{ justifyContent: "space-between" }}>
              <span className="small">Display correct answer after answering</span>
              <input
                type="checkbox"
                checked={cfg.showCorrectAfter}
                onChange={(e) => setCfg((p) => ({ ...p, showCorrectAfter: e.target.checked }))}
              />
            </label>

            <label className="row" style={{ justifyContent: "space-between", marginTop: 8 }}>
              <span className="small">Display discussion after answering</span>
              <input
                type="checkbox"
                checked={cfg.showDiscussionAfter}
                onChange={(e) => setCfg((p) => ({ ...p, showDiscussionAfter: e.target.checked }))}
              />
            </label>

            <label className="row" style={{ justifyContent: "space-between", marginTop: 8 }}>
              <span className="small">Use most recent questions</span>
              <input
                type="checkbox"
                checked={cfg.useMostRecent}
                onChange={(e) => setCfg((p) => ({ ...p, useMostRecent: e.target.checked }))}
              />
            </label>

            <label className="row" style={{ justifyContent: "space-between", marginTop: 8 }}>
              <span className="small">Show questions chronologically</span>
              <input
                type="checkbox"
                checked={cfg.chronological}
                onChange={(e) => setCfg((p) => ({ ...p, chronological: e.target.checked }))}
              />
            </label>
          </div>
        </div>

        <div className="card" style={{ padding: 14 }}>
          <div className="small">Filter by blueprint domain (optional)</div>
          <div style={{ marginTop: 10, display: "grid", gap: 8 }}>
            {DOMAINS.map((d) => (
              <label key={d} className="row" style={{ justifyContent: "space-between" }}>
                <span className="small" style={{ maxWidth: 430 }}>{d}</span>
                <input
                  type="checkbox"
                  checked={(cfg.domainFilter || []).includes(d)}
                  onChange={() => toggleDomain(d)}
                />
              </label>
            ))}
          </div>

          <div className="small" style={{ marginTop: 14 }}>
            Preview (first {preview.length}):
          </div>
          <div style={{ marginTop: 8, maxHeight: 190, overflow: "auto", border: `1px solid var(--border)`, borderRadius: 12, padding: 10 }}>
            {preview.map((q) => (
              <div key={q.id} className="small" style={{ marginBottom: 8 }}>
                <span className="pill" style={{ marginRight: 8 }}>{q.id}</span>
                {q.question}
              </div>
            ))}
          </div>

          <div className="row" style={{ justifyContent: "flex-end", marginTop: 12 }}>
            <Link className="btn" href="/questions">View all questions</Link>
            <button className="btn" onClick={() => downloadPdf(false)} disabled={busy}>PDF</button>
            <button className="btn" onClick={() => downloadPdf(true)} disabled={busy}>PDF + answers</button>
            <button className="btn btnPrimary" onClick={generateExam} disabled={busy}>Generate exam</button>
          </div>
        </div>
      </div>

      <div className="small" style={{ marginTop: 10, opacity: 0.95 }}>
        Tip: If you want an "exam-like" experience, leave answers/discussion OFF and turn them ON after you submit.
      </div>
    </div>
  );
}
