import { Lightbulb, BrainCircuit, Eye, BarChart2, BookOpen } from 'lucide-react';

const values = [
  {
    icon: Lightbulb,
    title: 'понимание сильных сторон ребёнка',
    color: '#5BC0EB',
  },
  {
    icon: BrainCircuit,
    title: 'данные о том, как ребёнок принимает решения',
    color: '#FF6B9A',
  },
  {
    icon: Eye,
    title: 'наблюдение за командным взаимодействием',
    color: '#3ED598',
  },
  {
    icon: BarChart2,
    title: 'визуальный дашборд навыков',
    color: '#5BC0EB',
  },
  {
    icon: BookOpen,
    title: 'рекомендации по развитию',
    color: '#FF6B9A',
  },
];

import { Mascot } from './Mascot';

export function ParentsValue() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#5BC0EB]/10 text-[#5BC0EB] text-sm font-semibold">
              Для родителей
            </span>
            <Mascot size="sm" emotion="proud" accessory="glasses" pose="tilt" className="animate-float" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            Что получают родители
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">Жираф собирает данные каждой игры и показывает их: наглядно, персонально, просто.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-white hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${value.color}15` }}
              >
                <value.icon className="w-6 h-6" style={{ color: value.color }} />
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                {value.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
