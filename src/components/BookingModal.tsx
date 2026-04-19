import { useState } from 'react';
import { X, User, Mail, Calendar, CreditCard } from 'lucide-react';
import { addCustomer } from '../data/customers';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (customerData: { name: string; email: string; childAge: number }) => void;
}

export function BookingModal({ isOpen, onClose, onSuccess }: BookingModalProps) {
  const [step, setStep] = useState<'form' | 'payment'>('form');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [childAge, setChildAge] = useState(8);
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  if (!isOpen) return null;

  const validateForm = () => {
    const newErrors: { name?: string; email?: string } = {};
    
    if (!name.trim()) {
      newErrors.name = 'Введите ваше имя';
    }
    
    if (!email.trim()) {
      newErrors.email = 'Введите электронную почту';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Введите корректный email';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    addCustomer({
      name: name.trim(),
      email: email.trim(),
      childAge,
      amount: 990,
    });

    setStep('payment');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-[360px] w-full p-5 animate-scale-in">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        {step === 'form' ? (
          <>
            {/* Header */}
            <div className="text-center mb-5">
              <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-[#5BC0EB] to-[#FF6B9A] flex items-center justify-center">
                <User className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Бронирование</h3>
              <p className="text-gray-600 text-sm">Введите данные</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Name */}
              <div>
                <label className="text-sm font-medium text-gray-700">Имя</label>
                <div className="relative mt-1">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`w-full pl-10 pr-3 py-2.5 rounded-lg border ${
                      errors.name ? 'border-red-400' : 'border-gray-200'
                    }`}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-medium text-gray-700">Email</label>
                <div className="relative mt-1">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full pl-10 pr-3 py-2.5 rounded-lg border ${
                      errors.email ? 'border-red-400' : 'border-gray-200'
                    }`}
                  />
                </div>
              </div>

              {/* Age */}
              <div>
                <label className="text-sm font-medium text-gray-700">Возраст</label>
                <select
                  value={childAge}
                  onChange={(e) => setChildAge(Number(e.target.value))}
                  className="w-full mt-1 py-2.5 px-3 rounded-lg border border-gray-200"
                >
                  {Array.from({ length: 9 }, (_, i) => i + 7).map((age) => (
                    <option key={age} value={age}>{age} лет</option>
                  ))}
                </select>
              </div>

              {/* Price */}
              <div className="rounded-lg bg-gray-50 p-3 flex justify-between items-center">
                <span className="text-sm text-gray-600">К оплате</span>
                <span className="text-lg font-bold text-[#FF6B9A]">990 ₽</span>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-gradient-to-r from-[#5BC0EB] to-[#FF6B9A] text-white font-semibold"
              >
                Перейти к оплате
              </button>
            </form>
          </>
        ) : (
          <>
            {/* Payment */}
            <div className="text-center space-y-4 mt-2">

              <h3 className="text-lg font-bold text-gray-900">
                Оплата
              </h3>

              <div className="rounded-lg bg-gray-50 p-3 flex justify-between items-center">
                <span className="text-sm text-gray-600">Сумма</span>
                <span className="text-lg font-bold text-[#FF6B9A]">990 ₽</span>
              </div>

              {/* YooMoney Button */}
              <div className="flex justify-center">
                <iframe
                  src="https://yoomoney.ru/quickpay/fundraise/button?billNumber=1H89JS8SP1I.260419&"
                  width="260"
                  height="50"
                  frameBorder="0"
                  scrolling="no"
                  className="mx-auto"
                  />
                />
              </div>

              <button
                onClick={() => onSuccess({ name, email, childAge })}
                className="w-full py-3 rounded-lg bg-green-500 text-white font-semibold"
              >
                Я оплатил(а)
              </button>

            </div>
          </>
        )}
      </div>
    </div>
  );
}
