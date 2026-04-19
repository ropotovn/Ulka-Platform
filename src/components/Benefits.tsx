import { Brain, Target, Users, LayoutDashboard } from 'lucide-react';

const benefits = [
  {
    icon: Brain,
    title: 'Нейропсихологический подход',
    description: 'задания учитывают развитие мозга ребёнка',
    color: '#5BC0EB',
    size: 'large',
  },
  {
    icon: Target,
    title: 'Устойчивые метанавыки',
    description: 'критическое мышление, стратегическое мышление, коммуникация, принятие решений',
    color: '#FF6B9A',
    size: 'large',
  },
  {
    icon: Users,
    title: 'Разные роли детей',
    description: 'стратег, исследователь, аналитик, коммуникатор',
    color: '#3ED598',
    size: 'large',
  },
  {
    icon: LayoutDashboard,
    title: 'Персонализированные дашборды',
    description: 'родители видят развитие навыков ребёнка через понятную визуализацию прогресса',
    color: '#5BC0EB',
    size: 'large',
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-gradient-to-b from-blue-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#3ED598]/10 text-[#3ED598] text-sm font-semibold mb-4">
            Преимущества
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
            Преимущества платформы
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-white hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start gap-5">
                <div
                  className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${benefit.color}15` }}
                >
                  <benefit.icon className="w-7 h-7" style={{ color: benefit.color }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
