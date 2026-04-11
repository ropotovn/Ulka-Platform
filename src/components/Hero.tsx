import { Check, Users, Clock } from 'lucide-react';
import { Button } from './Button';
import { VideoPlayer } from './VideoPlayer';
import { Mascot } from './Mascot';

const benefits = [
  'познаём детей и помогаем направлять их развитие',
  'дети играют в умные командные игры',
  'родители узнают сильные стороны ребёнка',
  'развиваем устойчивые навыки будущего',
];

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-white via-blue-50/30 to-pink-50/20 pt-24 sm:pt-28 pb-14 sm:pb-16 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#5BC0EB]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FF6B9A]/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5BC0EB]/10 text-[#5BC0EB] text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-[#5BC0EB] animate-gentle-pulse" />
              Игровая образовательная платформа
            </div>

            <h1 className="text-4xl sm:text-[3.15rem] lg:text-[3.45rem] font-extrabold text-gray-900 leading-[1.03] mb-5 tracking-tight max-w-2xl">
              Помогите ребёнку раскрыть потенциал через игру
            </h1>

            <ul className="space-y-3 mb-9">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#3ED598]/20 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-[#3ED598]" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="#trial" size="lg" className="shadow-lg shadow-[#5BC0EB]/25 group min-w-[230px]">
                <span className="flex items-center gap-2">
                  Забронировать место
                  <span className="text-white/80 group-hover:translate-x-0.5 transition-transform">→</span>
                </span>
              </Button>
            </div>
            
            <div className="flex flex-wrap items-center gap-6 mt-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#FF6B9A]" />
                <span>группа 3–4 ребёнка</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#5BC0EB]" />
                <span>возраст 8–14 лет</span>
              </div>
            </div>
          </div>
          
          {/* Right content - Video & Mascot */}
          <div className="relative">
            <VideoPlayer 
              title="ULKA Platform"
              subtitle="Командные интеллектуальные игры для детей"
            />
            
            {/* Floating mascot */}
            <div className="absolute -bottom-6 right-2 sm:-bottom-8 sm:-right-2 lg:-right-10 z-10 pointer-events-none">
              <div className="relative scale-[0.82] sm:scale-90 lg:scale-100 origin-bottom-right">
                <div className="absolute inset-0 bg-[#FFB347]/20 rounded-full blur-2xl scale-110" />
                <Mascot size="lg" emotion="excited" accessory={["cap", "star"]} pose="wave" className="relative animate-float" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
