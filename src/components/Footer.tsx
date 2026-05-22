// =============================================
// FOOTER — подвал. Правь колонки и соцсети.
// =============================================

const LINKS = {
  "Платформа": [
    { label: "Навыки", href: "#skills" },
    { label: "Отчёт", href: "#report" },
    { label: "Родителям", href: "#parents" },
    { label: "Записаться", href: "#booking" },
  ],
  "Контакты": [
    { label: "hello@ulka.ru", href: "mailto:hello@ulka.ru" },
    { label: "Telegram", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[var(--color-cream)] border-t border-black/5 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Бренд */}
          <div>
            <a href="#top" className="font-display font-black text-[40px] tracking-[-0.04em] text-[var(--color-ink)] leading-none mb-4 inline-block">
              ulka
            </a>
            <p className="text-[var(--color-ink-soft)] max-w-xs leading-relaxed">
              Образовательная платформа развития метанавыков у детей: через игру и умную аналитику :)
            </p>
          </div>

          {/* Ссылки */}
          {Object.entries(LINKS).map(([title, items]) => (
            <div key={title}>
              <div className="font-display font-semibold text-sm uppercase tracking-wider text-[var(--color-muted)] mb-4">
                {title}
              </div>
              <ul className="space-y-2.5">
                {items.map((it) => (
                  <li key={it.label}>
                    <a
                      href={it.href}
                      className="text-[var(--color-ink-soft)] hover:text-[var(--color-ink)] transition"
                    >
                      {it.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between gap-3 text-sm text-[var(--color-muted)]">
          <div>© {new Date().getFullYear()} ulka. Все права защищены.</div>
          <div>Сделано с заботой о детях</div>
        </div>
      </div>
    </footer>
  );
}
