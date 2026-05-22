// =============================================
// HERO — главный экран. Правь заголовок, подзаголовок и теги в HERO_STATS.
// =============================================

const HERO_STATS = [
  { value: "15+", label: "исследованных метанавыков" },
  { value: "Мини-группы", label: "до 6 детей в миссии" },
  { value: "Глубокие отчеты", label: "персонализированные, с прогрессом ребенка" },
];

const HERO_FEATURES = [
  { text: "развиваем уверенность и самостоятельность" },
  { text: "учимся гибкости, критическому мышлению и адаптивности" },
  { text: "практикуемся в коммуникации, креативности и командной работе" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-32">
      {/* Декоративные облака */}
      <div className="cloud bg-[var(--color-lavender)] w-[400px] h-[400px] -top-20 -left-20" />
      <div className="cloud bg-[var(--color-sky)] w-[500px] h-[500px] top-40 -right-32" />
      <div className="cloud bg-[var(--color-mint)] w-[300px] h-[300px] bottom-0 left-1/3" />
      <div className="cloud bg-[var(--color-lavender)] w-[350px] h-[350px] top-1/2 -right-20 opacity-40" />
      <div className="cloud bg-[var(--color-sky)] w-[250px] h-[250px] bottom-20 -left-10 opacity-50" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        {/* Маленький тег сверху */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur border border-black/5 text-sm text-[var(--color-ink-soft)] mb-8 animate-fadeUp">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Платформа устойчивого будущего детей
        </div>

        {/* Заголовок */}
        <h1 className="font-display font-bold text-[44px] leading-[1.05] md:text-[72px] md:leading-[1] tracking-tight max-w-4xl animate-fadeUp">
          Среда для развития{" "}
          <span className="relative inline-block">
            <span className="relative z-10">устойчивых навыков</span>
            <span className="absolute inset-x-0 bottom-0 h-4 md:h-6 bg-[var(--color-lemon)] rounded-full -z-0" />
          </span>
          {" "}будущего
        </h1>

        {/* Подзаголовок */}
        <p className="mt-6 md:mt-8 text-lg md:text-xl text-[var(--color-ink-soft)] max-w-2xl leading-relaxed animate-fadeUp">
          Увлекательные квесты, групповые проекты, анализ потенциала и персональные отчёты талантов
        </p>

        {/* Кнопки */}
        <div className="mt-10 flex flex-wrap gap-3 animate-fadeUp">
          <a
            href="#booking"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[var(--color-ink)] text-white font-medium hover:bg-[var(--color-ink-soft)] transition shadow-lg shadow-black/10"
          >
            Записаться на миссию
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#skills"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white border border-black/10 text-[var(--color-ink)] font-medium hover:bg-black/5 transition"
          >
            Посмотреть навыки
          </a>
        </div>

        {/* Карточки со статистикой */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {HERO_STATS.map((s, i) => (
            <div
              key={i}
              className="rounded-[28px] bg-white border border-black/5 p-7 md:p-8 shadow-[0_8px_24px_-12px_rgba(30,27,46,0.12)] hover:shadow-[0_12px_32px_-12px_rgba(30,27,46,0.18)] transition-shadow animate-fadeUp"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="font-display text-3xl md:text-4xl font-bold text-[var(--color-ink)] leading-tight tracking-tight">
                {s.value}
              </div>
              <div className="mt-3 text-sm md:text-base text-[var(--color-muted)] leading-snug">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Дополнительные блоки */}
        <div className="mt-4 md:mt-5 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {HERO_FEATURES.map((f, i) => (
            <div
              key={i}
              className="rounded-[28px] bg-white border border-black/5 p-7 md:p-8 shadow-[0_8px_24px_-12px_rgba(30,27,46,0.12)] hover:shadow-[0_12px_32px_-12px_rgba(30,27,46,0.18)] transition-shadow animate-fadeUp"
              style={{ animationDelay: `${(i + 3) * 120}ms` }}
            >
              <div className="text-[var(--color-ink)] text-base md:text-lg leading-snug">
                {f.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
