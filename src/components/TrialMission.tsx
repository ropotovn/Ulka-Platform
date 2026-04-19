import { useState } from 'react';
import { Clock, Users, Target, Sparkles } from 'lucide-react';
import { Mascot } from './Mascot';
import { BookingModal } from './BookingModal';
import { PaymentModal } from './PaymentModal';
import { SuccessModal } from './SuccessModal';

const features = [
  {
    icon: Clock,
    text: '1 час онлайн',
    color: '#5BC0EB',
  },
  {
    icon: Target,
    text: 'интеллектуальная командная миссия',
    color: '#FF6B9A',
  },
  {
    icon: Users,
    text: 'решают задачи вместе',
    color: '#3ED598',
  },
  {
    icon: Sparkles,
    text: 'учатся принимать решения',
    color: '#5BC0EB',
  },
];

export function TrialMission() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [customerData, setCustomerData] = useState<{ name: string; email: string; childAge: number } | null>(null);

  const handleBookingSubmit = (data: { name: string; email: string; childAge: number }) => {
    setCustomerData(data);
    setIsBookingOpen(false);
    setIsPaymentOpen(true);
  };

  const handlePaymentComplete = () => {
    setIsPaymentOpen(false);
    setIsSuccessOpen(true);
  };

  const handleCloseAll = () => {
    setIsBookingOpen(false);
    setIsPaymentOpen(false);
    setIsSuccessOpen(false);
  };

  return (
    <section id="trial" className="py-24 bg-gradient-to-br from-blue-50/50 via-white to-pink-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF6B9A]/10 text-[#FF6B9A] text-sm font-semibold mb-6">
              Пробное занятие
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Попробуйте первую игровую миссию ULKA Platform
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Дети проходят интеллектуальную командную миссию, решают задачи вместе и учатся принимать решения.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${feature.color}15` }}
                  >
                    <feature.icon className="w-5 h-5" style={{ color: feature.color }} />
                  </div>
                  <span className="text-gray-700 font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 p-4 rounded-xl bg-white border border-gray-200">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-[#5BC0EB]" />
                <span className="text-gray-700 font-medium">группа 3–4 ребёнка</span>
              </div>
              <div className="w-px h-6 bg-gray-200" />
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-[#FF6B9A]" />
                <span className="text-gray-700 font-medium">возраст 8–14 лет</span>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-[#5BC0EB]/10 to-[#FF6B9A]/10 rounded-3xl blur-3xl" />
            
            <div className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 max-w-md w-full">
              <div className="text-center mb-5">
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#5BC0EB] to-[#FF6B9A] flex items-center justify-center">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Пробная миссия</h3>
                <p className="text-gray-600">Игровой вход в платформу и личный профиль ребёнка</p>
              </div>

              <div className="space-y-3 mb-5">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Длительность</span>
                  <span className="font-semibold text-gray-900">1 час</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Формат</span>
                  <span className="font-semibold text-gray-900">Онлайн</span>
                </div>
                <div className="flex justify-between items-end py-2">
                  <span className="text-gray-600">Стоимость</span>
                  <div className="text-right">
                    <div className="text-sm text-gray-400 line-through">1490 ₽</div>
                    <div className="font-extrabold text-3xl text-[#FF6B9A] leading-none">990 ₽</div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-gray-50/70 p-4 mb-5">
                <div className="text-sm font-semibold text-gray-900 mb-1">Оплата онлайн</div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  После бронирования откроется страница оплаты и подтверждение места на первую игровую миссию.
                </p>
              </div>

              <button
                onClick={() => setIsBookingOpen(true)}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#5BC0EB] to-[#FF6B9A] text-white font-bold text-lg shadow-lg shadow-[#5BC0EB]/25 hover:shadow-xl hover:shadow-[#5BC0EB]/30 transition-all hover:-translate-y-0.5"
              >
                <span className="flex items-center justify-center gap-2 w-full">
                  Забронировать место
                  <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                </span>
              </button>

              <div className="absolute -top-6 -right-6">
                <Mascot size="md" emotion="happy" accessory={["headphones", "medal"]} pose="wave" className="animate-bounce-slow" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Модальные окна */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        onSuccess={handleBookingSubmit}
      />

      <PaymentModal
        isOpen={isPaymentOpen}
        onClose={() => setIsPaymentOpen(false)}
        onPaymentComplete={handlePaymentComplete}
        customerData={customerData || { name: '', email: '', childAge: 8 }}
      />

      <SuccessModal
        isOpen={isSuccessOpen}
        onClose={handleCloseAll}
        customerName={customerData?.name || ''}
      />
    </section>
  );
}
