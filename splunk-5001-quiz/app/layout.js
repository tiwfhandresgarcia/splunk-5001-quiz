import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "SPLK-5001 Practice Quiz",
  description: "Practice exam generator for SPLK-5001-style topics (original questions)."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <header className="row" style={{ justifyContent: "space-between", marginBottom: 16 }}>
            <div>
              <div className="h2">SPLK-5001 Practice Quiz</div>
              <div className="small">Original practice questions (not official).</div>
            </div>
            <nav className="row">
              <Link className="pill" href="/">Home</Link>
              <Link className="pill" href="/questions">View all questions</Link>
              <Link className="pill" href="/exam">Exam</Link>
            </nav>
          </header>
          {children}
          <footer className="small" style={{ marginTop: 22, opacity: 0.9 }}>
            Built for focused practice. You control the knobs; your discipline does the rest.
          </footer>
        </div>
      </body>
    </html>
  );
}
