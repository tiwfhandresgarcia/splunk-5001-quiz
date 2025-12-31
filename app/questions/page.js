"use client";

import { useMemo, useState } from "react";
import { QUESTION_BANK } from "../../lib/questionBank";
import { DOMAINS } from "../../components/domains";

export default function QuestionsPage() {
  const [q, setQ] = useState("");
  const [domain, setDomain] = useState("all");

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return QUESTION_BANK.filter((it) => {
      const okDomain = domain === "all" ? true : it.domain === domain;
      if (!okDomain) return false;
      if (!needle) return true;
      return (
        it.question.toLowerCase().includes(needle) ||
        it.id.toLowerCase().includes(needle) ||
        it.tags.join(" ").toLowerCase().includes(needle)
      );
    });
  }, [q, domain]);

  return (
    <main>
      <div className="card">
        <div className="row" style={{ justifyContent: "space-between" }}>
          <div>
            <div className="h1">All questions</div>
            <div className="small">Browse, search, and sanity-check your coverage.</div>
          </div>
          <div className="pill">{filtered.length} shown</div>
        </div>

        <div className="row" style={{ marginTop: 14 }}>
          <input
            className="input"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by text, id, or tag..."
            style={{ flex: 1, minWidth: 240 }}
          />
          <select className="input" value={domain} onChange={(e) => setDomain(e.target.value)}>
            <option value="all">All domains</option>
            {DOMAINS.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>
      </div>

      <div style={{ marginTop: 14 }}>
        {filtered.map((it) => (
          <div key={it.id} className="card" style={{ marginBottom: 10 }}>
            <div className="row" style={{ justifyContent: "space-between" }}>
              <div className="pill">{it.id}</div>
              <div className="pill">{it.difficulty} • {it.domain.split(" ")[0]}</div>
            </div>
            <div style={{ marginTop: 10 }}>{it.question}</div>
            <div className="small" style={{ marginTop: 8 }}>Options: {it.options.map((o, i) => `${String.fromCharCode(65+i)}: ${o}`).join(" · ")}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
