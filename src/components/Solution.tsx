import { Search, MessageSquareMore, CheckCircle2 } from 'lucide-react';
import { Mascot } from './Mascot';

export function Solution() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              ULKA Platform развивает мышление через игру.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              На платформе дети проходят игровые интеллектуальные миссии, где им нужно анализировать, обсуждать и принимать решения вместе.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-xl">
              Ребёнка нельзя по-настоящему понять через тесты. Его качества становятся видны в действии — в выборе, диалоге и командной игре.
            </p>
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-r from-[#3ED598]/8 to-[#5BC0EB]/8 border border-[#3ED598]/15">
              <div className="flex-shrink-0 mt-0.5">
                <Mascot size="md" emotion="curious" accessory="glasses" pose="tilt" className="animate-float" />
              </div>
              <div>
                <p className="text-gray-900 font-semibold mb-1">Жираф — проводник по миссиям</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Он помогает ребёнку включиться в игру, замечает сильные проявления и превращает опыт в понятную обратную связь.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#5BC0EB]/20 to-[#FF6B9A]/20 rounded-3xl blur-2xl" />
            <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center justify-center gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-3 rounded-2xl bg-[#5BC0EB]/10 flex items-center justify-center">
                    <Search className="w-8 h-8 text-[#5BC0EB]" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">Анализируют</p>
                </div>
                <div className="text-2xl text-gray-300">→</div>
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-3 rounded-2xl bg-[#FF6B9A]/10 flex items-center justify-center">
                    <MessageSquareMore className="w-8 h-8 text-[#FF6B9A]" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">Обсуждают</p>
                </div>
                <div className="text-2xl text-gray-300">→</div>
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-3 rounded-2xl bg-[#3ED598]/10 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-[#3ED598]" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">Решают</p>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">Результат</span>
                  <span className="text-[#3ED598] font-semibold">Развитые навыки мышления</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
