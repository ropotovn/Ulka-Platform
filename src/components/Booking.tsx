import { useState } from "react";


// =============================================
// BOOKING — форма записи. Правь STEPS (вопросы и варианты ответов).
// =============================================

type Card = { value: string; desc: string };

type Step = {
  question: string;
  subtitle?: string;
  type: "single" | "multiple" | "text" | "cards";
  options?: string[];
  cards?: Card[];
  placeholder?: string;
};

const STEPS: Step[] = [
  {
    question: "Что сейчас интересно ребёнку?",
    type: "multiple",
    options: [
      "🎨 Творчество и рукоделие",
      "🌿 Природа и животные",
      "🗣 Общение и друзья",
      "🌍 Путешествия и приключения",
      "💻 Технологии и игры",
      "📱 Медиа и блоггинг",
      "⚽ Спорт и активность",
    ],
  },
  {
    question: "Сколько лет ребёнку?",
    subtitle: "Подберём миссии под возрастную группу",
    type: "cards",
    cards: [
      { value: "9–11 лет", desc: "Первое знакомство с миром навыков" },
      { value: "12–14 лет", desc: "Активные миссии и проекты" },
      { value: "14+ лет", desc: "Симулятор реальной жизни" },
    ],
  },
  {
    question: "Что вы хотите развить?",
    type: "multiple",
    options: [
      "Самостоятельность",
      "Уверенность в себе",
      "Умение общаться",
      "Критическое мышление",
      "Креативность",
      "Лидерство",
    ],
  },
  {
    question: "Как с вами связаться?",
    type: "text",
    placeholder: "Имя родителя и телефон или телеграм",
  },
];

export default function Booking() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string | string[]>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const current = STEPS[step];

  const toggleOption = (opt: string) => {
    const cur = (answers[step] as string[]) || [];
    const next = cur.includes(opt) ? cur.filter((x) => x !== opt) : [...cur, opt];
    setAnswers({ ...answers, [step]: next });
  };

  const setSingle = (opt: string) => {
    setAnswers({ ...answers, [step]: opt });
  };

  const setText = (val: string) => {
    setAnswers({ ...answers, [step]: val });
  };

  const canNext = () => {
    const a = answers[step];
    if (!a) return false;
    if (Array.isArray(a)) return a.length > 0;
    if (typeof a === "string") return a.trim().length > 0;
    return false;
  };
const submitForm = async () => {
  if (isSubmitting) return;

  setIsSubmitting(true);

  try {
    const params = new URLSearchParams({
      interests: Array.isArray(answers[0])
        ? answers[0].join(", ")
        : String(answers[0] || ""),

      age: String(answers[1] || ""),

      goals: Array.isArray(answers[2])
        ? answers[2].join(", ")
        : String(answers[2] || ""),

      contact: String(answers[3] || ""),
    });

    await fetch(
      "https://script.google.com/macros/s/AKfycbzX0g17JgHDWIn6tY0N0rvEJDkUMPmlfwdy7DeiaGIj7cq7pLEGA6OWNO3udhgDujOc/exec",
      {
        method: "POST",
        body: params,
      }
    );

    setSubmitted(true);

  } catch (error) {
    console.error("Ошибка отправки:", error);
    alert("Ошибка отправки формы");
  } finally {
    setIsSubmitting(false);
  }
};
const next = async () => {
  if (step < STEPS.length - 1) {
    setStep(step + 1);
  } else {
    await submitForm();
  }
};

  const back = () => step > 0 && setStep(step - 1);

  const reset = () => {
    setStep(0);
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <section id="booking" className="relative py-20 md:py-28 bg-[var(--color-ink)] text-white overflow-hidden">
      {/* Декоративные облака */}
      <div className="cloud bg-[var(--color-lavender)] w-[400px] h-[400px] -top-32 -left-32 opacity-30" />
      <div className="cloud bg-[var(--color-sky)] w-[400px] h-[400px] -bottom-32 -right-32 opacity-30" />

      <div className="relative max-w-3xl mx-auto px-5 md:px-8">
        {/* Заголовок */}
        <div className="text-center mb-10 md:mb-14">
          <div className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-3">
            Запись на миссию
          </div>
          <h2 className="font-display font-bold text-[36px] md:text-[52px] leading-[1.05] tracking-tight">
            Соберём миссию<br className="hidden md:block" />
            под вашего ребёнка
          </h2>
          <p className="mt-5 text-lg text-white/70 max-w-xl mx-auto">
            Четыре коротких вопроса — и место на первой миссии у вас. Без воды и шаблонов.
          </p>
        </div>

        {/* Карточка формы */}
        <div className="bg-white text-[var(--color-ink)] rounded-[32px] p-6 md:p-10 shadow-2xl">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-20 h-20 mx-auto rounded-full bg-[var(--color-mint)] flex items-center justify-center text-4xl mb-6">
                ✓
              </div>
              <h3 className="font-display font-bold text-2xl md:text-3xl mb-3">
                Заявка принята!
              </h3>
              <p className="text-[var(--color-ink-soft)] max-w-md mx-auto mb-8">
                Мы свяжемся с вами в течение дня, чтобы подобрать миссию под ребёнка.
              </p>
              <button
                onClick={reset}
                className="px-6 py-3 rounded-full bg-[var(--color-ink)] text-white font-medium hover:bg-[var(--color-ink-soft)] transition"
              >
                Отправить ещё раз
              </button>
            </div>
          ) : (
            <>
              {/* Прогресс */}
              <div className="mb-8">
                <div className="flex justify-between text-sm text-[var(--color-muted)] mb-3">
                  <span>Шаг {step + 1} из {STEPS.length}</span>
                  <span>{Math.round(((step + 1) / STEPS.length) * 100)}%</span>
                </div>
                <div className="h-2 bg-black/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[var(--color-sky)] to-[var(--color-mint)] transition-all duration-500"
                    style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Вопрос */}
              <h3 className="font-display font-bold text-2xl md:text-3xl mb-1">
                {current.question}
              </h3>
              {current.subtitle && (
                <p className="text-[var(--color-muted)] mb-6">{current.subtitle}</p>
              )}
              {!current.subtitle && <div className="mb-6" />}

              {/* Варианты */}
              <div className={current.type === "cards" ? "mb-8" : "space-y-2.5 mb-8"}>
                {current.type === "text" ? (
                  <textarea
                    value={(answers[step] as string) || ""}
                    onChange={(e) => setText(e.target.value)}
                    placeholder={current.placeholder}
                    rows={4}
                    className="w-full p-4 rounded-2xl bg-[var(--color-cream)] border border-black/10 focus:border-[var(--color-ink)] focus:outline-none transition resize-none"
                  />
                ) : current.type === "cards" ? (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {current.cards?.map((c) => {
                      const selected = answers[step] === c.value;
                      return (
                        <button
                          key={c.value}
                          onClick={() => setSingle(c.value)}
                          className={`text-left p-5 rounded-2xl border-2 transition-all ${
                            selected
                              ? "bg-gradient-to-br from-[var(--color-sky)]/25 to-[var(--color-mint)]/35 border-[var(--color-green)] shadow-[inset_0_0_0_1px_rgba(125,214,168,0.45)]"
                              : "bg-white border-black/10 hover:border-black/20"
                          }`}
                        >
                          <div className="font-display font-bold text-xl md:text-2xl text-[var(--color-ink)] tracking-tight">
                            {c.value}
                          </div>
                          <div className="mt-2 text-sm text-[var(--color-muted)] leading-snug">
                            {c.desc}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                ) : (
                  current.options?.map((opt) => {
                    const selected = current.type === "multiple"
                      ? ((answers[step] as string[]) || []).includes(opt)
                      : answers[step] === opt;
                    return (
                      <button
                        key={opt}
                        onClick={() => (current.type === "multiple" ? toggleOption(opt) : setSingle(opt))}
                        className={`w-full text-left p-4 rounded-2xl border-2 transition-all ${
                          selected
                            ? "bg-gradient-to-r from-[var(--color-sky)]/25 to-[var(--color-mint)]/35 border-[var(--color-green)] shadow-[inset_0_0_0_1px_rgba(125,214,168,0.45)]"
                            : "bg-white border-black/10 hover:border-black/20 text-[var(--color-ink)]"
                        }`}
                      >
                        <span className="flex items-center justify-between">
                          <span>{opt}</span>
                          {selected && (
                            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3">
                              <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </span>
                      </button>
                    );
                  })
                )}
              </div>

              {/* Навигация */}
              <div className="flex items-center justify-between gap-3">
                <button
                  onClick={back}
                  disabled={step === 0}
                  className="px-5 py-3 rounded-full text-[var(--color-ink-soft)] hover:bg-black/5 disabled:opacity-0 disabled:pointer-events-none transition"
                >
                  ← Назад
                </button>
                <button
                  onClick={next}
                  disabled={!canNext() || isSubmitting}
                  className="px-7 py-3 rounded-full bg-[var(--color-ink)] text-white font-medium hover:bg-[var(--color-ink-soft)] disabled:opacity-40 disabled:cursor-not-allowed transition flex items-center gap-2"
                >
                  {isSubmitting
  ? "Отправка..."
  : step === STEPS.length - 1
  ? "Отправить"
  : "Дальше"}
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
