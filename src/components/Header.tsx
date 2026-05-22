import { useState } from "react";

// =============================================
// HEADER — шапка сайта. Правь пункты меню и логотип здесь.
// =============================================

const NAV = [
  { label: "Навыки", href: "#skills" },
  { label: "Отчёт", href: "#report" },
  { label: "Родители", href: "#parents" },
  { label: "Миссии", href: "#booking" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[var(--color-cream)]/80 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        {/* Логотип */}
        <a href="#top" className="font-display font-black text-[40px] tracking-[-0.04em] text-[var(--color-ink)] leading-none">
          ulka
        </a>

        {/* Десктоп-меню */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-4 py-2 rounded-full text-sm font-medium text-[var(--color-ink-soft)] hover:text-[var(--color-ink)] hover:bg-black/5 transition"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#booking"
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-[var(--color-ink)] text-white text-sm font-medium hover:bg-[var(--color-ink-soft)] transition"
        >
          Записаться
        </a>

        {/* Мобильная кнопка */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-full hover:bg-black/5"
          aria-label="Меню"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Мобильное меню */}
      {open && (
        <div className="md:hidden border-t border-black/5 bg-[var(--color-cream)] px-5 py-4 space-y-1">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 rounded-2xl text-[var(--color-ink-soft)] hover:bg-black/5"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#booking"
            onClick={() => setOpen(false)}
            className="block mt-3 text-center px-5 py-3 rounded-full bg-[var(--color-ink)] text-white font-medium"
          >
            Записаться
          </a>
        </div>
      )}
    </header>
  );
}
