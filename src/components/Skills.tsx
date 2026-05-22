// =============================================
// SKILLS — 8 навыков-облаков. Правь массив SKILLS ниже.
// =============================================

const SKILLS = [
  {
    name: "Критическое мышление",
    desc: "Задавать вопросы и проверять свои идеи",
    color: "var(--color-lavender)",
    emoji: "🧭",
  },
  {
    name: "Креативность",
    desc: "Находить решения там, где их не видно",
    color: "var(--color-sky)",
    emoji: "✨",
  },
  {
    name: "Самостоятельность",
    desc: "Принимать решения и держать слово",
    color: "var(--color-mint)",
    emoji: "🌱",
  },
  {
    name: "Коммуникация",
    desc: "Слышать других и доносить своё",
    color: "var(--color-sky)",
    emoji: "💬",
  },
  {
    name: "Лидерство",
    desc: "Вести за собой, не продавливая",
    color: "var(--color-green)",
    emoji: "🎯",
  },
  {
    name: "Эмпатия",
    desc: "Понимать, что чувствуют другие",
    color: "var(--color-mint)",
    emoji: "💚",
  },
  {
    name: "Работа в команде",
    desc: "Делать общее дело с разными людьми",
    color: "var(--color-lavender)",
    emoji: "🤝",
  },
  {
    name: "Рефлексия",
    desc: "Замечать, как меняешься сам",
    color: "var(--color-sky)",
    emoji: "🪞",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 md:py-28 overflow-hidden">
      {/* Декоративные пятна */}
      <div className="cloud bg-[var(--color-lavender)] w-[400px] h-[400px] -top-32 -right-32 opacity-40" />
      <div className="cloud bg-[var(--color-sky)] w-[350px] h-[350px] bottom-0 -left-20 opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        {/* Заголовок */}
        <div className="max-w-2xl mb-12 md:mb-16">
          <div className="text-sm font-semibold text-[var(--color-muted)] uppercase tracking-wider mb-3">
            Улица навыков
          </div>
          <h2 className="font-display font-bold text-[36px] md:text-[56px] leading-[1.05] tracking-tight">
            15+ метанавыков,<br className="hidden md:block" />
            которые пригодятся в жизни
          </h2>
          <p className="mt-5 text-lg text-[var(--color-ink-soft)]">
            Никаких лекций — только реальные ситуации, собственные решения и разбор того, что происходило внутри.
          </p>
        </div>

        {/* Сетка навыков */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {SKILLS.map((s, i) => (
            <div
              key={s.name}
              className="group relative p-5 md:p-6 rounded-[28px] bg-white border border-black/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              {/* Пуф-облако */}
              <div
                className="w-14 h-14 md:w-16 md:h-16 rounded-[20px] flex items-center justify-center text-2xl md:text-3xl mb-4 group-hover:scale-110 transition-transform"
                style={{ background: `color-mix(in srgb, ${s.color} 45%, white)` }}
              >
                {s.emoji}
              </div>
              <div className="font-display font-semibold text-base md:text-lg text-[var(--color-ink)]">
                {s.name}
              </div>
              <div className="mt-1.5 text-sm text-[var(--color-muted)] leading-snug">
                {s.desc}
              </div>
              <div className="absolute top-4 right-4 text-[var(--color-muted)]/60 text-xs font-medium">
                0{i + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
