import { Heart, Compass, Eye, Sparkles } from 'lucide-react';

const audience = [
  {
    icon: Heart,
    title: 'Хотят вырастить самостоятельного ребёнка',
    desc: 'видят в нём личность с сильными сторонами',
    color: '#FF6B9A',
  },
  {
    icon: Compass,
    title: 'Думают о будущем',
    desc: 'важны навыки, а не оценки',
    color: '#5BC0EB',
  },
  {
    icon: Eye,
    title: 'Хотят лучше понимать ребёнка',
    desc: 'видеть его настоящим в действии',
    color: '#3ED598',
  },
  {
    icon: Sparkles,
    title: 'Ищут правильный путь',
    desc: 'хотят направить, а не давить',
    color: '#8B5CF6',
  },
];

export function ParentsAudience() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-10">
          <h2 className="text-[2rem] sm:text-[2.55rem] lg:text-[3.1rem] leading-[0.96] tracking-[-0.04em] font-[800] text-gray-900 max-w-4xl">
            Для родителей, которые
          </h2>
          <p className="mt-4 text-[1rem] sm:text-[1.08rem] text-gray-600 max-w-3xl leading-relaxed">
            Понимают, что ребёнок — это не набор оценок, а личность с уникальным потенциалом.
          </p>
        </div>

        <div className="space-y-4">
          {audience.map((item, index) => (
            <div
              key={index}
              className="group flex items-start gap-4 sm:gap-6 rounded-[24px] sm:rounded-[28px] border border-gray-100 bg-gradient-to-b from-white to-gray-50/60 px-5 sm:px-7 py-5 sm:py-6 shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)]"
            >
              <div
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-[1.03]"
                style={{ backgroundColor: `${item.color}12` }}
              >
                <item.icon className="w-7 h-7" style={{ color: item.color }} />
              </div>

              <div className="min-w-0 pt-0.5">
                <h3 className="text-xl sm:text-[1.95rem] leading-tight tracking-[-0.03em] font-[800] text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-[1rem] sm:text-[1.1rem] text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
