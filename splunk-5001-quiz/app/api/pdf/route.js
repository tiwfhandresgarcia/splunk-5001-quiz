import PDFDocument from "pdfkit";

export const runtime = "nodejs";

function bufferFromStream(doc) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    doc.on("data", (c) => chunks.push(c));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);
  });
}

export async function POST(request) {
  const body = await request.json();
  const { title, lastUpdated, includeAnswers, questions } = body || {};

  const doc = new PDFDocument({
    size: "LETTER",
    margin: 50,
    info: {
      Title: title || "SPLK-5001 Practice Quiz"
    }
  });

  doc.fontSize(18).text(title || "SPLK-5001 Practice Quiz", { align: "left" });
  doc.moveDown(0.2);
  doc.fontSize(10).fillColor("gray").text(`Last updated: ${lastUpdated || ""}`);
  doc.fillColor("black").moveDown(1);

  (questions || []).forEach((q, i) => {
    doc.fontSize(11).fillColor("black").text(`${i + 1}. ${q.question}`);
    doc.moveDown(0.4);
    q.options.forEach((opt, idx) => {
      const letter = String.fromCharCode(65 + idx);
      const prefix = includeAnswers && idx === q.answerIndex ? "*" : " ";
      doc.fontSize(10).text(`${prefix} ${letter}) ${opt}`, { indent: 18 });
    });
    if (includeAnswers) {
      doc.moveDown(0.3);
      doc.fontSize(9).fillColor("gray").text(`Answer: ${String.fromCharCode(65 + q.answerIndex)}. ${q.explanation}`);
      if (q.discussion) doc.fontSize(9).text(`Discussion: ${q.discussion}`);
      doc.fillColor("black");
    }
    doc.moveDown(1);
    if (doc.y > 720) doc.addPage();
  });

  doc.end();
  const buffer = await bufferFromStream(doc);

  return new Response(buffer, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename=\"splk-5001-quiz${includeAnswers ? "-answers" : ""}.pdf\"`
    }
  });
}
