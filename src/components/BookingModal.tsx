import { useState } from 'react';
import { X, User, Mail, Calendar, CreditCard } from 'lucide-react';
import { addCustomer } from '../data/customers';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (customerData: { name: string; email: string; childAge: number }) => void;
}

export function BookingModal({ isOpen, onClose, onSuccess }: BookingModalProps) {
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

    // Сохраняем данные клиента
    const customer = addCustomer({
      name: name.trim(),
      email: email.trim(),
      childAge,
      amount: 990,
    });

    console.log('Бронирование создано:', customer);
    onSuccess({ name, email, childAge });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Затемнение фона */}
      <div 
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Модальное окно */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full p-6 sm:p-8 animate-scale-in">
        {/* Кнопка закрытия */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        {/* Заголовок */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#5BC0EB] to-[#FF6B9A] flex items-center justify-center">
            <User className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Бронирование места</h3>
          <p className="text-gray-600">Заполните данные для записи на пробную миссию</p>
        </div>

        {/* Форма */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Имя */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Ваше имя
            </label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Иван Иванов"
                className={`w-full pl-12 pr-4 py-3.5 rounded-xl border ${
                  errors.name ? 'border-red-400 bg-red-50' : 'border-gray-200'
                } focus:border-[#5BC0EB] focus:ring-2 focus:ring-[#5BC0EB]/20 outline-none transition-all`}
              />
            </div>
            {errors.name && (
              <p className="mt-1.5 text-sm text-red-500">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Электронная почта
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@mail.ru"
                className={`w-full pl-12 pr-4 py-3.5 rounded-xl border ${
                  errors.email ? 'border-red-400 bg-red-50' : 'border-gray-200'
                } focus:border-[#5BC0EB] focus:ring-2 focus:ring-[#5BC0EB]/20 outline-none transition-all`}
              />
            </div>
            {errors.email && (
              <p className="mt-1.5 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Возраст ребёнка */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Возраст ребёнка
            </label>
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={childAge}
                onChange={(e) => setChildAge(Number(e.target.value))}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#5BC0EB] focus:ring-2 focus:ring-[#5BC0EB]/20 outline-none transition-all appearance-none bg-white cursor-pointer"
              >
                {Array.from({ length: 9 }, (_, i) => i + 7).map((age) => (
                  <option key={age} value={age}>
                    {age} лет
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Сумма к оплате */}
          <div className="rounded-xl bg-gradient-to-r from-[#5BC0EB]/10 to-[#FF6B9A]/10 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CreditCard className="w-6 h-6 text-[#5BC0EB]" />
              <span className="font-semibold text-gray-700">К оплате:</span>
            </div>
            <span className="text-2xl font-extrabold text-[#FF6B9A]">990 ₽</span>
          </div>

          {/* Кнопка отправки */}
          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-gradient-to-r from-[#5BC0EB] to-[#FF6B9A] text-white font-bold text-lg shadow-lg shadow-[#5BC0EB]/25 hover:shadow-xl hover:shadow-[#5BC0EB]/30 transition-all hover:-translate-y-0.5"
          >
            Перейти к оплате
          </button>

          <p className="text-center text-xs text-gray-500">
            Нажимая кнопку, вы соглашаетесь с условиями обработки персональных данных
          </p>
        </form>
      </div>
    </div>
  );
}
