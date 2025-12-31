import { QUESTION_BANK } from "./questionBank";

export function getAllQuestions() {
  return QUESTION_BANK;
}

function mulberry32(a) {
  return function () {
    let t = a += 0x6D2B79F5;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function pickQuestions({ count, domainFilter, chronological, useMostRecent, seed }) {
  let qs = [...QUESTION_BANK];

  if (domainFilter && domainFilter.length) {
    const set = new Set(domainFilter);
    qs = qs.filter((q) => set.has(q.domain));
  }

  if (useMostRecent) {
    qs.sort((a, b) => String(b.updatedAt).localeCompare(String(a.updatedAt)));
  } else if (chronological) {
    qs.sort((a, b) => String(a.createdAt).localeCompare(String(b.createdAt)));
  }

  const desired = Math.max(1, Math.min(count || 5, qs.length));

  // If chronological is on, keep order and slice.
  if (chronological || useMostRecent) {
    return qs.slice(0, desired);
  }

  // Otherwise randomize.
  const rnd = mulberry32(Number.isFinite(seed) ? seed : Date.now());
  for (let i = qs.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [qs[i], qs[j]] = [qs[j], qs[i]];
  }

  return qs.slice(0, desired);
}

export function scoreExam(questions, answers) {
  let correct = 0;
  const detailed = questions.map((q) => {
    const picked = answers[q.id];
    const isCorrect = picked === q.answerIndex;
    if (isCorrect) correct += 1;
    return {
      id: q.id,
      picked,
      correctIndex: q.answerIndex,
      isCorrect
    };
  });

  return {
    correct,
    total: questions.length,
    percent: Math.round((correct / questions.length) * 100),
    detailed
  };
}
