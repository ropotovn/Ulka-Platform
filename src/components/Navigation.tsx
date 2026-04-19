import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { BookingModal } from './BookingModal';
import { PaymentModal } from './PaymentModal';
import { SuccessModal } from './SuccessModal';

const navLinks = [
  { label: 'О платформе', href: '#about' },
  { label: 'Как работает', href: '#how-it-works' },
  { label: 'Преимущества', href: '#benefits' },
  { label: 'Дашборд', href: '#dashboard' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center pl-2 sm:pl-3 lg:pl-4 shrink-0">
            <span className="block font-extrabold text-[2.65rem] leading-none text-gray-900 tracking-[-0.06em] lowercase">
              ulka
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#5BC0EB] to-[#FF6B9A] text-white font-semibold text-sm shadow-lg shadow-[#5BC0EB]/25 hover:shadow-xl hover:shadow-[#5BC0EB]/30 transition-all hover:-translate-y-0.5"
            >
              Забронировать место
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-600 hover:text-gray-900 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setIsBookingOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="mt-2 w-full px-6 py-3 rounded-xl bg-gradient-to-r from-[#5BC0EB] to-[#FF6B9A] text-white font-semibold shadow-lg shadow-[#5BC0EB]/25 hover:shadow-xl transition-all"
              >
                Забронировать место
              </button>
            </div>
          </div>
        )}
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
    </nav>
  );
}
