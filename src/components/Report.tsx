// =============================================
// REPORT — секция с примером ИИ-отчёта. Правь REPORT_EXAMPLE и FEATURES.
// =============================================
const FEATURES = [
  {
    icon: "🔍",
    title: "Анализ действий, а не результата",
    desc: "Смотрим, как ребёнок принимает решения, а не что получилось.",
  },
  {
    icon: "🧠",
    title: "Рекомендации от метаспециалистов",
    desc: "Каждый отчёт опирается на практику детских психологов.",
  },
  {
    icon: "🎯",
    title: "Где интерес — туда направляем",
    desc: "Подсказываем, какие миссии дадут максимум роста.",
  },
];


const REPORT_EXAMPLE = {
  mission: "Миссия №3 · «Остров без правил»",
  name: "Мария, 11 лет",
  duration: "90 мин",
  summary:
    "Сегодня Мария проявила себя как лидер мнения и креатор. Хорошо показала себя в обсуждении правил острова — конкретно предложила систему голосования. Прослеживается интерес к социальным механикам и справедливости.",
  roles: [
    {
      role: "В роли креатора",
      color: "var(--color-sky)",
      text: "Придумала идею «банка добрых дел» — где каждый житель острова кладёт идею, а команда выбирает лучшую. Группа поддержала и реализовала.",
    },
    {
      role: "В роли стратега",
      color: "var(--color-lavender)",
      text: "Были сомнения — сложно было распределить команду. Сначала взяла всё на себя, потом увидела, что ребята скучают, и предложила всем по задаче.",
    },
    {
      role: "В роли командного игрока",
      color: "var(--color-mint)",
      text: "Слушала идеи других, два раза уступила своей идеей в пользу более сильной. Помогла Соне сформулировать её мысль.",
    },
  ],
  recommendation:
    "Марии откликаются роли с ответственностью за группу. Следующую миссию советуем — «Запуск школьного радио»: даст пространство для лидерства и проверит навык делегирования.",
};

export default function Report() {
  return (
    <section id="report" className="relative py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Заголовок */}
        <div className="max-w-2xl mb-12 md:mb-16">
          <div className="text-sm font-semibold text-[var(--color-muted)] uppercase tracking-wider mb-3">
            Что получают родители
          </div>
          <h2 className="font-display font-bold text-[36px] md:text-[56px] leading-[1.05] tracking-tight">
            Найдем и поддержим суперсилы
          </h2>
          <p className="mt-5 text-lg text-[var(--color-ink-soft)]">
            После каждой миссии вы видите, что{" "}
            <span className="font-semibold text-[var(--color-ink)]">ребёнок реально делал</span>{" "}
            — в каких ролях проявился, где сомневался, к чему тянется. Без оценок «хорошо/плохо».
          </p>
        </div>

        {/* Фичи */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-12">
          {FEATURES.map((f) => (
            <div key={f.title} className="p-6 rounded-[24px] bg-[var(--color-cream)] border border-black/5">
              <div className="text-3xl mb-3">{f.icon}</div>
              <div className="font-display font-semibold text-lg">{f.title}</div>
              <div className="mt-2 text-sm text-[var(--color-ink-soft)] leading-relaxed">{f.desc}</div>
            </div>
          ))}
        </div>

        {/* Пример отчёта */}
        <div className="relative rounded-[32px] bg-gradient-to-br from-[var(--color-cream)] to-[var(--color-cream-dark)] border border-black/5 p-6 md:p-10 overflow-hidden">
          <div className="cloud bg-[var(--color-lavender)] w-[300px] h-[300px] -top-20 -right-20 opacity-40" />
          <div className="cloud bg-[var(--color-sky)] w-[200px] h-[200px] bottom-0 -left-10 opacity-40" />

          <div className="relative">
            {/* Шапка отчёта */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)] mb-1">
                  {REPORT_EXAMPLE.mission}
                </div>
                <div className="font-display font-bold text-2xl md:text-3xl">
                  {REPORT_EXAMPLE.name}
                </div>
              </div>
              <div className="pill px-4 py-2 text-sm font-medium text-[var(--color-ink-soft)]">
                ⏱ {REPORT_EXAMPLE.duration}
              </div>
            </div>

            {/* Саммари */}
            <div className="bg-white rounded-[24px] p-5 md:p-6 mb-5 border border-black/5">
              <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)] mb-2">
                Сегодня
              </div>
              <p className="text-[var(--color-ink)] leading-relaxed">
                {REPORT_EXAMPLE.summary}
              </p>
            </div>

            {/* Роли */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
              {REPORT_EXAMPLE.roles.map((r) => (
                <div key={r.role} className="bg-white rounded-[24px] p-5 border border-black/5">
                  <div
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-[var(--color-ink)] mb-3"
                    style={{ background: `color-mix(in srgb, ${r.color} 50%, white)` }}
                  >
                    {r.role}
                  </div>
                  <p className="text-sm text-[var(--color-ink-soft)] leading-relaxed">
                    {r.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Рекомендация */}
            <div className="bg-[var(--color-ink)] text-white rounded-[24px] p-5 md:p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[var(--color-lavender)] text-[var(--color-ink)]">
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                    <path d="M12 2l2.39 7.36H22l-6.18 4.49 2.36 7.27L12 16.63 5.82 21.12l2.36-7.27L2 9.36h7.61z" />
                  </svg>
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-white/70">
                  Рекомендация ИИ-наставника
                </span>
              </div>
              <p className="text-white/90 leading-relaxed">
                {REPORT_EXAMPLE.recommendation}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
