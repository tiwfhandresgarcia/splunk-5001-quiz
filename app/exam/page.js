"use client";

import { useEffect, useMemo, useState } from "react";
import QuestionCard from "../../components/QuestionCard";
import { scoreExam } from "../../lib/exam";

const LS_EXAM_KEY = "splk5001_exam";
const LS_CFG_KEY = "splk5001_config";

export default function ExamPage() {
  const [exam, setExam] = useState(null);
  const [cfg, setCfg] = useState(null);
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    try {
      const ex = JSON.parse(localStorage.getItem(LS_EXAM_KEY) || "null");
      setExam(ex);
    } catch {
      setExam(null);
    }
    try {
      const c = JSON.parse(localStorage.getItem(LS_CFG_KEY) || "null");
      setCfg(c);
    } catch {
      setCfg(null);
    }
  }, []);

  const questions = exam?.questions || [];
  const answers = exam?.answers || {};

  const progress = useMemo(() => {
    const answered = questions.filter((qq) => answers[qq.id] !== undefined).length;
    return { answered, total: questions.length, percent: questions.length ? Math.round((answered / questions.length) * 100) : 0 };
  }, [questions, answers]);

  function pick(qid, idx) {
    setExam((prev) => {
      if (!prev) return prev;
      const next = { ...prev, answers: { ...prev.answers, [qid]: idx } };
      localStorage.setItem(LS_EXAM_KEY, JSON.stringify(next));
      return next;
    });
  }

  function submit() {
    if (!exam) return;
    const result = scoreExam(exam.questions, exam.answers);
    const next = { ...exam, result };
    localStorage.setItem(LS_EXAM_KEY, JSON.stringify(next));
    localStorage.setItem(
      "splk5001_result",
      JSON.stringify({
        generatedAt: exam.generatedAt,
        submittedAt: new Date().toISOString(),
        result,
        questions: exam.questions,
        answers: exam.answers
      })
    );
    window.location.href = "/results";
  }

  if (!exam) {
    return (
      <div className="card">
        <div className="h2">No exam generated yet</div>
        <p className="small">Go back to Home and click <b>Generate exam</b>.</p>
      </div>
    );
  }

  const showCorrect = Boolean(cfg?.showCorrectAfter);
  const showDiscussion = Boolean(cfg?.showDiscussionAfter);

  return (
    <main>
      <div className="card" style={{ marginBottom: 14 }}>
        <div className="row" style={{ justifyContent: "space-between" }}>
          <div>
            <div className="h2">Exam</div>
            <div className="small">Progress: {progress.answered}/{progress.total} ({progress.percent}%)</div>
          </div>
          <div className="row">
            <button className="btn" onClick={() => setReveal((v) => !v)}>
              {reveal ? "Hide explanations" : "Reveal explanations"}
            </button>
            <button className="btn btnPrimary" onClick={submit} disabled={progress.answered < progress.total}>
              Submit
            </button>
          </div>
        </div>
        <div className="small" style={{ marginTop: 10 }}>
          Generated: {new Date(exam.generatedAt).toLocaleString()}
        </div>
      </div>

      {questions.map((qq) => (
        <QuestionCard
          key={qq.id}
          q={qq}
          value={answers[qq.id]}
          onPick={(idx) => pick(qq.id, idx)}
          reveal={reveal}
          showDiscussion={showDiscussion}
          showCorrect={showCorrect}
          locked={false}
        />
      ))}

      <div className="card">
        <div className="small">Finish line rule: submit unlocks results. No drama, no excuses.</div>
      </div>
    </main>
  );
}
