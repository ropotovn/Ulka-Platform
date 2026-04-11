import { TrendingUp, MessageCircle, Users, Star } from 'lucide-react';

interface SkillCardProps {
  title: string;
  value: number;
  color: string;
  icon: React.ElementType;
  level: string;
  recommendation: string;
}

function SkillCard({ title, value, color, icon: Icon, level, recommendation }: SkillCardProps) {
  const circumference = 2 * Math.PI * 40;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="p-5 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4">
        <div className="relative w-24 h-24 flex-shrink-0">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="48"
              cy="48"
              r="40"
              stroke="#f3f4f6"
              strokeWidth="8"
              fill="none"
            />
            <circle
              cx="48"
              cy="48"
              r="40"
              stroke={color}
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className="transition-all duration-1000"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-bold" style={{ color }}>
              {value}%
            </span>
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <Icon className="w-4 h-4" style={{ color }} />
            <h4 className="font-semibold text-gray-900 text-sm">{title}</h4>
          </div>
          <p className="text-xs text-gray-500 mb-2">Уровень: <span className="font-medium" style={{ color }}>{level}</span></p>
          <p className="text-xs text-gray-600 leading-relaxed">{recommendation}</p>
        </div>
      </div>
    </div>
  );
}

export function Dashboard() {
  return (
    <section id="dashboard" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF6B9A]/10 text-[#FF6B9A] text-sm font-semibold mb-4">
            Аналитика
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Дашборд развития навыков
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Отслеживайте прогресс ребёнка в реальном времени с помощью интуитивной панели управления
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Dashboard mockup */}
          <div className="rounded-3xl bg-gradient-to-br from-gray-50 to-white p-2 shadow-2xl border border-gray-200">
            <div className="bg-white rounded-2xl overflow-hidden">
              {/* Dashboard header */}
              <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gradient-to-r from-[#5BC0EB]/5 to-[#FF6B9A]/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#5BC0EB] to-[#FF6B9A] flex items-center justify-center">
                    <span className="text-white font-bold">U</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">ULKA Platform</h3>
                    <p className="text-xs text-gray-500">Дашборд развития</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#3ED598]/20 flex items-center justify-center">
                    <Star className="w-4 h-4 text-[#3ED598]" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Уровень 5</span>
                </div>
              </div>

              {/* Dashboard content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="font-bold text-gray-900">Навыки ребёнка</h4>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <TrendingUp className="w-4 h-4 text-[#3ED598]" />
                    <span>+12% за месяц</span>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <SkillCard
                    title="Критическое мышление"
                    value={75}
                    color="#5BC0EB"
                    icon={TrendingUp}
                    level="Продвинутый"
                    recommendation="Продолжайте решать логические задачи"
                  />
                  <SkillCard
                    title="Коммуникация"
                    value={68}
                    color="#FF6B9A"
                    icon={MessageCircle}
                    level="Средний"
                    recommendation="Участвуйте в обсуждениях чаще"
                  />
                  <SkillCard
                    title="Командная работа"
                    value={82}
                    color="#3ED598"
                    icon={Users}
                    level="Высокий"
                    recommendation="Отличная работа в группе!"
                  />
                </div>

                {/* Progress bar */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-gray-700">Общий прогресс</span>
                    <span className="text-sm font-bold text-gray-900">75%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-[#5BC0EB] via-[#FF6B9A] to-[#3ED598] rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#5BC0EB]/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#FF6B9A]/10 rounded-full blur-2xl" />
        </div>
      </div>
    </section>
  );
}
