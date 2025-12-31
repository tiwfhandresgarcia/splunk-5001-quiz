"use client";

export default function QuestionCard({ q, value, onPick, reveal, showDiscussion, showCorrect, locked }) {
  const isAnswered = value !== undefined && value !== null;
  const correctIndex = q.answerIndex;

  return (
    <div className="card" style={{ marginBottom: 12 }}>
      <div className="row" style={{ justifyContent: "space-between", marginBottom: 8 }}>
        <div className="pill">{q.id}</div>
        <div className="pill">{q.difficulty} • {q.domain.split(" ")[0]}</div>
      </div>
      <div style={{ fontSize: 16, lineHeight: 1.35, marginBottom: 12 }}>{q.question}</div>

      <div style={{ display: "grid", gap: 10 }}>
        {q.options.map((opt, idx) => {
          const selected = idx === value;
          const shouldReveal = reveal && showCorrect;
          const className = [
            "option",
            shouldReveal && idx === correctIndex ? "correct" : "",
            shouldReveal && selected && idx !== correctIndex ? "wrong" : ""
          ].join(" ").trim();

          return (
            <button
              key={idx}
              className={className}
              disabled={locked}
              onClick={() => onPick(idx)}
              style={{
                outline: selected ? "2px solid rgba(59,130,246,.8)" : "none",
                opacity: locked && !selected ? 0.8 : 1
              }}
            >
              <div className="row" style={{ justifyContent: "space-between" }}>
                <div>
                  <span className="pill" style={{ marginRight: 8 }}>{String.fromCharCode(65 + idx)}</span>
                  {opt}
                </div>
                {selected ? <span className="pill">Selected</span> : null}
              </div>
            </button>
          );
        })}
      </div>

      {reveal && showCorrect ? (
        <div className="card" style={{ marginTop: 12, padding: 12 }}>
          <div className="small"><b>Correct:</b> {String.fromCharCode(65 + correctIndex)} — {q.options[correctIndex]}</div>
          <div className="small" style={{ marginTop: 8 }}>{q.explanation}</div>
        </div>
      ) : null}

      {reveal && showDiscussion ? (
        <div className="card" style={{ marginTop: 12, padding: 12 }}>
          <div className="small"><b>Discussion</b></div>
          <div className="small" style={{ marginTop: 6 }}>{q.discussion}</div>
        </div>
      ) : null}

      <div className="small" style={{ marginTop: 10 }}>
        Tags: {q.tags.join(", ")}
      </div>
    </div>
  );
}
