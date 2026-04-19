import { useState } from 'react';
import { Users, Clock, Star, Heart, Brain, Zap, Trophy, Sparkles } from 'lucide-react';
import { Mascot } from './Mascot';
import { BookingModal } from './BookingModal';
import { PaymentModal } from './PaymentModal';
import { SuccessModal } from './SuccessModal';

export function FinalCTA() {
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
    <section className="py-24 bg-gradient-to-br from-[#5BC0EB] via-[#5BC0EB] to-[#FF6B9A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-4xl mx-auto text-center">
          {/* Background decorations */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-[#3ED598]/20 rounded-full blur-3xl" />

          <div className="relative">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
              Попробуйте ULKA Platform
            </h2>
            
            <p className="text-xl text-white/90 mb-4 max-w-2xl mx-auto leading-relaxed">
              Первая миссия — это возможность увидеть, как ребёнок решает задачи и какие навыки у него проявляются.
            </p>
            <p className="text-sm sm:text-base text-white/80 mb-10 font-medium tracking-[0.01em]">
              Ребёнка нельзя оценить — его можно понять.
            </p>
              
              <button 
                onClick={() => setIsBookingOpen(true)}
                className="relative px-10 py-5 rounded-2xl bg-white text-[#5BC0EB] font-bold text-lg shadow-2xl hover:shadow-3xl transition-all hover:-translate-y-1 group"
              >
                <span className="flex items-center gap-2">
                  Забронировать место
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span className="font-medium">группа 3–4 ребёнка</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span className="font-medium">возраст 8–14 лет</span>
              </div>
            </div>

            {/* Floating mascot */}
            <div className="absolute -right-4 lg:-right-20 top-1/2 -translate-y-1/2 hidden lg:block">
              <Mascot size="lg" emotion="proud" accessory={["medal", "scarf"]} pose="wave" className="animate-bounce-slow opacity-90" />
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
