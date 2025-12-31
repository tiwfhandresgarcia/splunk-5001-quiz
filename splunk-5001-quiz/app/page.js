import ConfigPanel from "../components/ConfigPanel";

export default function HomePage() {
  return (
    <main>
      <ConfigPanel />

      <div className="card" style={{ marginTop: 14 }}>
        <div className="h2">Blueprint-aligned practice focus</div>
        <p className="small" style={{ lineHeight: 1.5 }}>
          The question bank is organized around six knowledge domains (SOC landscape, threats, SIEM data & best practices, investigations & risk, SPL, and threat hunting).
          Use the domain filters to drill weak spots and the PDF export for offline reps.
        </p>
      </div>
    </main>
  );
}
