import { TrendingUp, MessageCircle, Users, Lightbulb, Target, Compass, Activity, Zap, ChevronRight, Award, Calendar, Sparkles, Brain, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import { Mascot } from './Mascot';

interface Skill {
  id: string;
  title: string;
  value: number;
  prevValue: number;
  color: string;
  icon: React.ElementType;
  level: string;
  description: string;
  insights: string[];
  trend: number[];
  recommendation: string;
  manifestation: string;
  teamContext: string;
}

const skills: Skill[] = [
  {
    id: 'critical',
    title: 'Критическое мышление',
    value: 78,
    prevValue: 68,
    color: '#5BC0EB',
    icon: Lightbulb,
    level: 'Продвинутый',
    description: 'Анализ проблем и поиск решений',
    insights: ['Уверенно разбирает сложные задачи', 'Находит неочевидные решения'],
    trend: [62, 68, 65, 73, 78],
    recommendation: 'Попробуйте миссии «Детективное агентство» для усиления анализа.',
    manifestation: 'Ребёнок выделяет главное, проверяет гипотезы и предлагает несколько вариантов решения.',
    teamContext: 'В обсуждении аргументирует позицию и помогает команде выбрать сильную стратегию.',
  },
  {
    id: 'communication',
    title: 'Коммуникация',
    value: 71,
    prevValue: 65,
    color: '#FF6B9A',
    icon: MessageCircle,
    level: 'Развивается',
    description: 'Ясно выражает мысли и слышит других',
    insights: ['Активно участвует в обсуждениях', 'Становится увереннее в диалоге'],
    trend: [58, 63, 65, 67, 71],
    recommendation: 'Роль «Коммуникатор» в следующей миссии поможет укрепить навык.',
    manifestation: 'Ребёнок ясно формулирует мысли, задаёт уточняющие вопросы и слышит обратную связь.',
    teamContext: 'В команде помогает договориться и удерживает общий фокус на задаче.',
  },
  {
    id: 'teamwork',
    title: 'Командная работа',
    value: 84,
    prevValue: 77,
    color: '#3ED598',
    icon: Users,
    level: 'Высокий',
    description: 'Взаимодействие и вклад в общий результат',
    insights: ['Хорошо чувствует команду', 'Поддерживает других в игре'],
    trend: [70, 74, 77, 81, 84],
    recommendation: 'Отличный прогресс. Можно пробовать более сложные командные роли.',
    manifestation: 'Ребёнок быстро включается в общую работу и распределяет роли без конфликтов.',
    teamContext: 'Поддерживает участников и усиливает общий результат через совместные решения.',
  },
  {
    id: 'decision',
    title: 'Принятие решений',
    value: 69,
    prevValue: 61,
    color: '#8B5CF6',
    icon: Target,
    level: 'Средний',
    description: 'Выбирает действия в условиях неопределённости',
    insights: ['Стало меньше сомнений', 'Чаще берёт ответственность за выбор'],
    trend: [55, 61, 60, 64, 69],
    recommendation: 'Миссии с ограниченным временем помогают быстрее принимать решения.',
    manifestation: 'Ребёнок выбирает действие быстрее и увереннее в условиях ограниченного времени.',
    teamContext: 'Берёт ответственность за выбор и объясняет команде, почему этот вариант лучший.',
  },
  {
    id: 'creativity',
    title: 'Креативность',
    value: 73,
    prevValue: 70,
    color: '#F59E0B',
    icon: Zap,
    level: 'Развивается',
    description: 'Предлагает оригинальные идеи и ходы',
    insights: ['Часто мыслит нестандартно', 'Предлагает новые сценарии решения'],
    trend: [64, 67, 70, 71, 73],
    recommendation: 'Творческие миссии «Изобретатель» раскроют навык сильнее.',
    manifestation: 'Ребёнок предлагает нестандартные идеи и комбинирует разные подходы к задаче.',
    teamContext: 'Подталкивает команду к новым гипотезам и помогает выходить за шаблонные решения.',
  },
  {
    id: 'adaptability',
    title: 'Гибкость мышления',
    value: 66,
    prevValue: 58,
    color: '#EC4899',
    icon: Compass,
    level: 'Начальный',
    description: 'Меняет стратегию и пробует новые подходы',
    insights: ['Лучше реагирует на изменения', 'Пробует разные роли в команде'],
    trend: [51, 56, 58, 61, 66],
    recommendation: 'Полезно чередовать роли и миссии разного типа.',
    manifestation: 'Ребёнок быстро перестраивается, если условия меняются по ходу миссии.',
    teamContext: 'Легко переключается между ролями и поддерживает темп команды при изменениях.',
  },
];

function SkillRadar({ skill, isActive, onClick }: { skill: Skill; isActive: boolean; onClick: () => void }) {
  const circumference = 2 * Math.PI * 36;
  const strokeDashoffset = circumference - (skill.value / 100) * circumference;
  const growth = skill.value - skill.prevValue;

  return (
    <button
      onClick={onClick}
      className={`group relative w-full text-left p-4 rounded-2xl transition-all duration-300 ${
        isActive ? 'bg-white shadow-lg ring-2 ring-gray-900/5 -translate-y-0.5' : 'bg-gray-50/60 hover:bg-white hover:shadow-md'
      }`}
    >
      <div className="flex items-start gap-4">
        <div className="relative flex-shrink-0">
          <svg className="w-20 h-20 -rotate-90">
            <circle cx="40" cy="40" r="36" stroke="#f1f5f9" strokeWidth="6" fill="none" />
            <circle
              cx="40"
              cy="40"
              r="36"
              stroke={skill.color}
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className="transition-all duration-700"
              style={{ filter: isActive ? `drop-shadow(0 0 10px ${skill.color}40)` : 'none' }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-lg font-bold tabular-nums" style={{ color: skill.color }}>
              {skill.value}
            </span>
            <span className="text-[10px] text-gray-400 -mt-1">%</span>
          </div>
        </div>

        <div className="flex-1 min-w-0 pt-1">
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <h4 className="font-semibold text-[15px] leading-tight text-gray-900">{skill.title}</h4>
            <skill.icon className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: skill.color, opacity: 0.72 }} />
          </div>
          <p className="text-xs text-gray-500 mb-2 leading-snug">{skill.description}</p>
          <div className="flex items-center gap-3 flex-wrap">
            <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-medium" style={{ backgroundColor: `${skill.color}15`, color: skill.color }}>
              {skill.level}
            </span>
            {growth > 0 && (
              <span className="flex items-center gap-0.5 text-[11px] text-[#199D66] font-medium">
                <TrendingUp className="w-3 h-3" />
                +{growth}%
              </span>
            )}
          </div>
        </div>
      </div>
    </button>
  );
}

export function DashboardV2() {
  const [activeSkill, setActiveSkill] = useState<string>('critical');
  const selectedSkill = skills.find((s) => s.id === activeSkill) || skills[0];
  const avgScore = Math.round(skills.reduce((acc, s) => acc + s.value, 0) / skills.length);
  const growthTotal = skills.reduce((acc, s) => acc + (s.value - s.prevValue), 0);

  return (
    <section id="dashboard" className="py-24 bg-[#fafafa]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-medium text-gray-600 mb-4 shadow-sm">
            <Activity className="w-3.5 h-3.5 text-[#5BC0EB]" />
            Понятная аналитика для родителей
          </div>
          <h2 className="text-[32px] sm:text-[40px] font-[800] tracking-[-0.02em] text-gray-900 mb-3">
            Личностный портрет ребёнка в понятном дашборде
          </h2>
          <p className="text-[15px] text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Родитель видит, как ребёнок думает, принимает решения и проявляется в команде — наглядно, персонально, просто.
          </p>
        </div>

        <div className="relative">
          <div className="bg-white rounded-[30px] shadow-[0_1px_3px_rgba(0,0,0,0.04),0_20px_40px_rgba(0,0,0,0.06)] border border-gray-100 overflow-hidden">
            <div className="border-b border-gray-100 bg-gradient-to-r from-gray-50/70 to-white px-6 sm:px-8 py-5">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-gray-900 flex items-center justify-center shadow-sm">
                    <span className="text-white font-bold text-[15px]">U</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[15px] text-gray-900 leading-tight">ULKA Platform</h3>
                    <p className="text-xs text-gray-500 mt-0.5">Профиль развития • София, 11 лет</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
                  <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#3ED598]/10">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#3ED598] animate-gentle-pulse" />
                    <span className="text-xs font-medium text-[#0f766e]">Данные обновлены после миссии</span>
                  </div>
                  <div className="text-right">
                    <div className="text-[11px] text-gray-500 uppercase tracking-wider font-medium">Уровень</div>
                    <div className="text-lg font-bold text-gray-900 -mt-0.5">5</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid xl:grid-cols-[1.1fr_0.9fr] gap-0">
              <div className="p-6 sm:p-8 border-r border-gray-100">
                <div className="grid sm:grid-cols-3 gap-3 mb-6">
                  {[
                    { label: 'Индекс развития', value: `${avgScore}/100`, icon: Brain, tone: '#5BC0EB' },
                    { label: 'Рост за месяц', value: `+${growthTotal}`, icon: TrendingUp, tone: '#3ED598' },
                    { label: 'Миссий пройдено', value: '24', icon: Calendar, tone: '#FF6B9A' },
                  ].map((item, i) => (
                    <div key={i} className="rounded-2xl border border-gray-100 bg-gray-50/70 p-4">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{ backgroundColor: `${item.tone}14` }}>
                        <item.icon className="w-4.5 h-4.5" style={{ color: item.tone }} />
                      </div>
                      <div className="text-xs text-gray-500 mb-1">{item.label}</div>
                      <div className="text-xl font-bold text-gray-900">{item.value}</div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-5">
                  <h4 className="font-semibold text-gray-900">Метанавыки</h4>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <span>за 30 дней</span>
                    <ChevronRight className="w-3 h-3" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {skills.map((skill) => (
                    <SkillRadar key={skill.id} skill={skill} isActive={activeSkill === skill.id} onClick={() => setActiveSkill(skill.id)} />
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100 grid sm:grid-cols-3 gap-3">
                  {[
                    { label: 'Сильная сторона', value: 'Командная работа', icon: ShieldCheck, color: '#3ED598' },
                    { label: 'Фокус роста', value: 'Гибкость мышления', icon: Compass, color: '#EC4899' },
                    { label: 'Наград', value: '12 достижений', icon: Award, color: '#F59E0B' },
                  ].map((item, i) => (
                    <div key={i} className="rounded-2xl bg-white border border-gray-100 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <item.icon className="w-4 h-4" style={{ color: item.color }} />
                        <span className="text-xs font-medium text-gray-500">{item.label}</span>
                      </div>
                      <div className="text-sm font-semibold text-gray-900 leading-snug">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 sm:p-8 bg-gray-50/55">
                <div className="h-full flex flex-col">
                  <div className="flex items-start gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: `${selectedSkill.color}15` }}>
                      <selectedSkill.icon className="w-5 h-5" style={{ color: selectedSkill.color }} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{selectedSkill.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{selectedSkill.description}</p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-5">
                    <div className="bg-white rounded-2xl p-4 border border-gray-100">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-medium text-gray-700 uppercase tracking-wider">Динамика</span>
                        <span className="text-[11px] text-gray-500">5 миссий</span>
                      </div>
                      <div className="h-24 flex items-end gap-2">
                        {selectedSkill.trend.map((val, i) => (
                          <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
                            <div
                              className="w-full rounded-t-md transition-all duration-500"
                              style={{
                                height: `${(val / 100) * 80}px`,
                                backgroundColor: i === selectedSkill.trend.length - 1 ? selectedSkill.color : `${selectedSkill.color}45`,
                              }}
                            />
                            <span className="text-[10px] text-gray-400">{i + 1}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-4 border border-gray-100">
                      <div className="text-xs font-medium text-gray-700 uppercase tracking-wider mb-3">Статус навыка</div>
                      <div className="rounded-2xl p-4" style={{ backgroundColor: `${selectedSkill.color}10` }}>
                        <div className="text-3xl font-bold mb-1" style={{ color: selectedSkill.color }}>{selectedSkill.value}%</div>
                        <div className="text-sm font-medium text-gray-900 mb-2">{selectedSkill.level}</div>
                        <div className="h-2 rounded-full bg-white/70 overflow-hidden">
                          <div className="h-full rounded-full" style={{ width: `${selectedSkill.value}%`, backgroundColor: selectedSkill.color }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-4 border border-gray-100 mb-5">
                    <h5 className="text-xs font-semibold text-gray-700 uppercase tracking-wider flex items-center gap-2 mb-3">
                      <Mascot size="sm" emotion="curious" accessory="glasses" pose="tilt" className="w-5 h-5" />
                      Наблюдения жирафа
                    </h5>
                    <div className="space-y-3">
                      {selectedSkill.insights.map((insight, i) => (
                        <div key={i} className="flex gap-2.5">
                          <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: selectedSkill.color }} />
                          <p className="text-sm text-gray-700 leading-relaxed">{insight}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-5">
                    <div className="bg-white rounded-2xl p-4 border border-gray-100">
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-4 h-4 text-[#FF6B9A]" />
                        <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Как проявляется</span>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {selectedSkill.manifestation}
                      </p>
                    </div>
                    <div className="bg-white rounded-2xl p-4 border border-gray-100">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="w-4 h-4 text-[#3ED598]" />
                        <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">В команде</span>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {selectedSkill.teamContext}
                      </p>
                    </div>
                  </div>

                  <div className="mt-auto rounded-xl p-4" style={{ backgroundColor: `${selectedSkill.color}08`, borderLeft: `3px solid ${selectedSkill.color}` }}>
                    <p className="text-xs font-medium mb-1" style={{ color: selectedSkill.color }}>Рекомендация</p>
                    <p className="text-sm text-gray-700 leading-snug">{selectedSkill.recommendation}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -right-2 lg:-right-8 hidden sm:block">
            <div className="relative">
              <div className="absolute inset-0 bg-[#5BC0EB]/18 rounded-full blur-2xl scale-150" />
              <Mascot size="lg" emotion="proud" accessory={["glasses", "medal"]} pose="wave" className="relative animate-float" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 max-w-4xl mx-auto">
          {[
            { label: 'Миссий пройдено', value: '24' },
            { label: 'Часов игры', value: '18' },
            { label: 'Навыков в работе', value: '6' },
            { label: 'Достижений', value: '12' },
          ].map((stat, i) => (
            <div key={i} className="text-center p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <div className="text-xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-[11px] text-gray-500 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
