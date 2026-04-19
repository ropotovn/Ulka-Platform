import { Monitor, Puzzle, UserCog, BarChart3 } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Monitor,
    title: 'дети подключаются к игровой миссии',
    description: 'Ребёнок входит в онлайн-комнату и встречает свою команду из 3-4 участников',
    color: '#5BC0EB',
  },
  {
    number: '02',
    icon: Puzzle,
    title: 'команда решает интеллектуальные задачи',
    description: 'Дети вместе анализируют ситуацию, обсуждают варианты и ищут решения',
    color: '#FF6B9A',
  },
  {
    number: '03',
    icon: UserCog,
    title: 'дети пробуют разные роли',
    description: 'В каждой миссии ребёнок может быть стратегом, аналитиком или коммуникатором',
    color: '#3ED598',
  },
  {
    number: '04',
    icon: BarChart3,
    title: 'система анализирует навыки и мышление',
    description: 'Искусственный интеллект отслеживает прогресс и формирует персональные рекомендации',
    color: '#5BC0EB',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#5BC0EB]/10 text-[#5BC0EB] text-sm font-semibold">
              Процесс
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            Как это работает
          </h2>
          <p className="mt-3 text-gray-600">Жираф ведёт команду от старта до результата</p>
        </div>

        <div className="relative">
          {/* Giraffe path illustration */}
          <div className="hidden lg:block absolute top-[88px] left-[12%] right-[12%] h-0.5">
            <div className="h-full w-full bg-gradient-to-r from-[#5BC0EB]/30 via-[#FF6B9A]/30 to-[#3ED598]/30 rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="h-full p-6 rounded-2xl bg-white hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-300 border border-gray-100 group-hover:border-gray-200">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-sm font-bold text-white mb-3" style={{ backgroundColor: step.color }}>
                        {step.number}
                      </span>
                    </div>
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105"
                      style={{ backgroundColor: `${step.color}12` }}
                    >
                      <step.icon className="w-5 h-5" style={{ color: step.color }} />
                    </div>
                  </div>
                  <h3 className="text-[15px] font-semibold text-gray-900 mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-[13px] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
