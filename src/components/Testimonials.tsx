// =============================================
// TESTIMONIALS — отзывы родителей. Правь массив REVIEWS.
// =============================================

const REVIEWS = [
  {
    text:
      "Сложно заставить что-то делать «для будущего». А тут формат песочницы — зашло на ура. Понравился персональный отчёт под ребёнка. Показали, что у сына талант к управлению ресурсами (кто бы мог подумать). Самое крутое — это анализ реальных действий ребёнка «под капотом» и развитие чего-то предметного, что в любом случае пригодится в жизни. Рекомендую всем родителям, кто в тупике куда отдавать ребёнка после школы.",
    name: "Игорь",
    role: "папа Кирилла, 13 лет",
    color: "var(--color-lavender)",
  },
  {
    text:
      "Думала, будет очередной кружок. А дочка пришла и говорит: «мама, я сегодня договорилась». Это для меня было важнее любой пятёрки. Было интересно увидеть и узнать как ребёнок взаимодействует с другими ребятами и проявляет себя в команде.",
    name: "Анна",
    role: "мама Софии, 11 лет",
    color: "var(--color-sky)",
  },
  {
    text:
      "Сын стеснительный, я переживал. После двух миссий начал сам собирать рюкзак и предлагать идеи на семейном совете. Не магия — но очень похоже.",
    name: "Дмитрий",
    role: "папа Артёма, 9 лет",
    color: "var(--color-mint)",
  },
];

export default function Testimonials() {
  return (
    <section id="parents" className="relative py-20 md:py-28 overflow-hidden">
      {/* Декоративные пятна */}
      <div className="cloud bg-[var(--color-sky)] w-[500px] h-[500px] -top-40 -right-40 opacity-30" />
      <div className="cloud bg-[var(--color-lavender)] w-[400px] h-[400px] bottom-0 left-1/4 opacity-25" />
      
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        {/* Заголовок */}
        <div className="max-w-2xl mb-12 md:mb-16">
          <div className="text-sm font-semibold text-[var(--color-muted)] uppercase tracking-wider mb-3">
            Говорят родители
          </div>
          <h2 className="font-display font-bold text-[36px] md:text-[56px] leading-[1.05] tracking-tight">
            Не для оценок — для жизни
          </h2>
        </div>

        {/* Горизонтальная лента отзывов */}
        <div className="flex gap-4 md:gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {REVIEWS.map((r, i) => (
            <figure
              key={i}
              className="relative flex-shrink-0 w-[320px] md:w-[400px] p-6 md:p-8 rounded-[28px] bg-white border border-black/5 hover:shadow-lg transition snap-start"
            >
              {/* Большая кавычка */}
              <svg
                viewBox="0 0 24 24"
                className="w-10 h-10 mb-4 text-[var(--color-muted)]/40"
                fill="currentColor"
              >
                <path d="M7 7h4v10H5V11c0-2.2 1.8-4 4-4zm8 0h4v10h-6V11c0-2.2 1.8-4 4-4z" />
              </svg>

              <blockquote className="text-[var(--color-ink-soft)] leading-relaxed">
                {r.text}
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3 pt-6 border-t border-black/5">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center font-display font-bold text-[var(--color-ink)]"
                  style={{ background: `color-mix(in srgb, ${r.color} 60%, white)` }}
                >
                  {r.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-[var(--color-ink)]">{r.name}</div>
                  <div className="text-sm text-[var(--color-muted)]">{r.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
