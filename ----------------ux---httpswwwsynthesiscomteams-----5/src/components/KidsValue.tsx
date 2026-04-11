import { Award, BadgeCheck, Palette, Shirt, Star, TrendingUp } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Mascot } from './Mascot';

const highlights = [
  {
    icon: Star,
    title: 'Жираф хвалит сразу после миссии',
    desc: 'Похвала приходит сразу после действия и воспринимается естественно.',
    color: '#5BC0EB',
  },
  {
    icon: BadgeCheck,
    title: 'Навыки открываются как достижения',
    desc: 'Самостоятельность, ответственность и уверенность в команде.',
    color: '#FF6B9A',
  },
  {
    icon: Palette,
    title: 'Образ меняется вместе с прогрессом',
    desc: 'Новые аксессуары и редкие награды открываются по мере прохождения миссий.',
    color: '#3ED598',
  },
];

const wardrobe = [
  { label: 'Кепка', type: 'cap' as const },
  { label: 'Очки', type: 'glasses' as const },
  { label: 'Медаль', type: 'medal' as const },
  { label: 'Шарф', type: 'scarf' as const },
];

type AccessoryType = (typeof wardrobe)[number]['type'] | 'star';

export function KidsValue() {
  const [selectedAccessory, setSelectedAccessory] = useState<(typeof wardrobe)[number]['type'] | 'all'>('all');

  const currentAccessory = useMemo<AccessoryType[]>(() => {
    if (selectedAccessory === 'all') return ['cap', 'glasses', 'medal', 'scarf', 'star'];
    return [selectedAccessory];
  }, [selectedAccessory]);

  const mascotEmotion =
    selectedAccessory === 'medal' || selectedAccessory === 'all'
      ? 'proud'
      : selectedAccessory === 'glasses'
        ? 'curious'
        : 'excited';

  const mascotPose = selectedAccessory === 'scarf' ? 'tilt' : 'wave';

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-white to-[#f8fbff] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3ED598]/10 text-[#22B573] text-sm font-semibold mb-4">
            Для детей
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[3.35rem] font-extrabold tracking-tight text-gray-900 leading-[0.98] max-w-4xl mx-auto">
            Игровой кабинет ребёнка
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Игровой профиль, награды и свой персонаж вместо сухих диаграмм.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 mb-6 sm:mb-7">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="h-full rounded-[24px] border border-gray-100 bg-white p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_12px_24px_rgba(15,23,42,0.04)]"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${item.color}12` }}
                  >
                    <item.icon className="w-5 h-5" style={{ color: item.color }} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg leading-snug">{item.title}</h4>
                    <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-[28px] sm:rounded-[32px] border border-gray-100 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04),0_24px_48px_rgba(15,23,42,0.06)] overflow-hidden">
            <div className="h-24 bg-gradient-to-r from-[#5BC0EB]/10 via-[#FF6B9A]/8 to-[#3ED598]/10" />

            <div className="px-4 pb-4 sm:px-6 sm:pb-6 lg:px-7 lg:pb-7 -mt-10 sm:-mt-8 relative">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-5 sm:mb-6">
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-gray-400 font-semibold">ULKA Kids</div>
                  <h3 className="text-2xl sm:text-[2rem] font-extrabold text-gray-900 mt-1 leading-tight">
                    Наряди своего жирафа
                  </h3>
                </div>
                <div className="inline-flex items-center gap-2 self-start sm:self-auto px-3 py-2 rounded-2xl bg-[#3ED598]/10 text-[#148F62] text-sm font-semibold">
                  <TrendingUp className="w-4 h-4" />
                  +2 награды сегодня
                </div>
              </div>

              <div className="grid lg:grid-cols-[300px_minmax(0,1fr)] gap-5 lg:gap-6 items-start">
                <div className="space-y-4">
                  <div className="rounded-[24px] border border-gray-100 bg-[#fbfdff] p-4 sm:p-5 shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 rounded-[24px] bg-[#FFF4D6] flex items-center justify-center shrink-0 shadow-[0_10px_24px_rgba(245,166,35,0.12)]">
                        <Mascot size="sm" emotion="proud" accessory={["medal", "star"]} pose="wave" className="animate-bounce-slow" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-base font-bold text-gray-900 mb-1">Жираф</div>
                        <p className="text-sm sm:text-[15px] leading-7 text-gray-700">
                          ты молодец, заработал сегодня орден длинной шеи и открыл новое достижение) буду рад видеть тебя снова
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[24px] border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div>
                        <div className="text-xs uppercase tracking-[0.16em] text-gray-400 font-semibold">Прогресс</div>
                        <div className="mt-1 text-3xl font-extrabold text-gray-900 leading-none">18 / 24</div>
                      </div>
                      <div className="rounded-full bg-[#5BC0EB]/10 px-3 py-1 text-sm font-semibold text-[#279ecf]">
                        уровень 7
                      </div>
                    </div>

                    <div className="h-2.5 rounded-full bg-gray-100 overflow-hidden mb-4">
                      <div className="h-full w-[75%] rounded-full bg-gradient-to-r from-[#5BC0EB] via-[#FF6B9A] to-[#3ED598]" />
                    </div>

                    <div className="grid grid-cols-3 gap-2.5 text-center">
                      <div className="rounded-2xl bg-[#5BC0EB]/10 p-3">
                        <div className="text-lg font-bold text-[#5BC0EB]">3</div>
                        <div className="text-[11px] text-gray-500">скина</div>
                      </div>
                      <div className="rounded-2xl bg-[#FF6B9A]/10 p-3">
                        <div className="text-lg font-bold text-[#FF6B9A]">12</div>
                        <div className="text-[11px] text-gray-500">бейджей</div>
                      </div>
                      <div className="rounded-2xl bg-[#3ED598]/10 p-3">
                        <div className="text-lg font-bold text-[#3ED598]">5</div>
                        <div className="text-[11px] text-gray-500">ролей</div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[24px] border border-[#F5A623]/15 bg-gradient-to-br from-[#FFF8E8] to-[#FFF1C8] p-4 sm:p-5 shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="relative flex h-24 w-24 items-center justify-center shrink-0">
                        <div className="absolute inset-0 rounded-full bg-[#F5A623]/18 blur-2xl" />
                        <svg viewBox="0 0 120 120" className="relative h-full w-full">
                          <path d="M44 16 L58 42 L44 58 L28 30 Z" fill="#5BC0EB" opacity="0.95" />
                          <path d="M76 16 L62 42 L76 58 L92 30 Z" fill="#FF6B9A" opacity="0.95" />
                          <circle cx="60" cy="68" r="28" fill="#F5A623" />
                          <circle cx="60" cy="68" r="21" fill="#FFE39A" />
                          <circle cx="60" cy="68" r="13" fill="#F6C33D" />
                          <path d="M60 55 L63.8 63 L72.5 64 L66 70 L67.8 78.5 L60 74.2 L52.2 78.5 L54 70 L47.5 64 L56.2 63 Z" fill="#8B5A00" />
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/75 px-2.5 py-1 text-xs font-semibold text-[#8B5A00] mb-2">
                          <Award className="w-3.5 h-3.5" />
                          достижение дня
                        </div>
                        <div className="text-xl font-extrabold text-gray-900 leading-tight">Орден длинной шеи</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-[28px] bg-[#0F172A] p-4 sm:p-5 lg:p-6 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 h-36 w-36 rounded-full bg-[#5BC0EB]/15 blur-3xl" />
                  <div className="absolute bottom-0 left-0 h-36 w-36 rounded-full bg-[#FF6B9A]/15 blur-3xl" />

                  <div className="relative">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <div className="text-xs uppercase tracking-[0.16em] text-white/40 font-semibold">Игровой экран</div>
                        <h4 className="text-xl sm:text-2xl font-bold mt-1">Собери своего героя</h4>
                      </div>
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-xs text-white/80 w-fit">
                        <Palette className="w-3.5 h-3.5" />
                        аксессуары активны
                      </div>
                    </div>

                    <div className="rounded-[26px] border border-white/10 bg-white/5 p-4 sm:p-5 mb-4">
                      <div className="rounded-[22px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] min-h-[260px] sm:min-h-[320px] flex items-center justify-center p-4">
                        <Mascot
                          size="xl"
                          emotion={mascotEmotion}
                          accessory={currentAccessory}
                          pose={mascotPose}
                          direction="right"
                          className="drop-shadow-[0_18px_30px_rgba(0,0,0,0.22)] animate-float"
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-3 text-sm font-semibold text-white">
                        <Shirt className="w-4 h-4 text-white/80" />
                        Нажми и примерь аксессуары
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        <button
                          type="button"
                          onClick={() => setSelectedAccessory('all')}
                          className={`rounded-2xl border p-3 text-left transition-all duration-200 ${selectedAccessory === 'all' ? 'bg-white text-[#0F172A] border-white shadow-lg' : 'bg-white/6 text-white border-white/10 hover:bg-white/10'}`}
                        >
                          <div className="text-sm font-semibold">Полный образ</div>
                          <div className={`text-xs mt-1 ${selectedAccessory === 'all' ? 'text-gray-500' : 'text-white/55'}`}>
                            все награды
                          </div>
                        </button>

                        {wardrobe.map((item) => (
                          <button
                            type="button"
                            key={item.type}
                            onClick={() => setSelectedAccessory(item.type)}
                            className={`rounded-2xl border p-3 text-left transition-all duration-200 ${selectedAccessory === item.type ? 'bg-white text-[#0F172A] border-white shadow-lg' : 'bg-white/6 text-white border-white/10 hover:bg-white/10'}`}
                          >
                            <div className="flex items-center gap-3">
                              <div className={`w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden ${selectedAccessory === item.type ? 'bg-gray-100' : 'bg-white/10'}`}>
                                <Mascot size="xs" accessory={item.type} emotion="happy" pose="tilt" />
                              </div>
                              <div className="min-w-0">
                                <div className="text-sm font-semibold">{item.label}</div>
                                <div className={`text-xs mt-0.5 ${selectedAccessory === item.type ? 'text-gray-500' : 'text-white/55'}`}>
                                  примерить
                                </div>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="rounded-[22px] border border-white/10 bg-white/6 p-4">
                        <div className="text-xs uppercase tracking-[0.16em] text-white/45 font-semibold mb-2">Открытия</div>
                        <div className="space-y-2 text-sm text-white/85">
                          <div className="rounded-xl bg-white/6 px-3 py-2">+ навык: самостоятельность</div>
                          <div className="rounded-xl bg-white/6 px-3 py-2">+ уровень ответственности</div>
                        </div>
                      </div>
                      <div className="rounded-[22px] border border-white/10 bg-gradient-to-r from-[#5BC0EB]/14 to-[#3ED598]/14 p-4">
                        <div className="text-xs uppercase tracking-[0.16em] text-white/45 font-semibold mb-2">Уникальный герой</div>
                        <p className="text-sm text-white/80 leading-relaxed">
                          У каждого ребёнка свой жираф: новые цвета, медали и редкие аксессуары открываются за сильные проявления в игре.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
