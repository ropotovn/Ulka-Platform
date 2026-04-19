import { X, CheckCircle, Sparkles } from 'lucide-react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  customerName: string;
}

export function SuccessModal({ isOpen, onClose, customerName }: SuccessModalProps) {
  if (!isOpen) return null;

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

        {/* Иконка успеха */}
        <div className="text-center mb-6">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#3ED598] to-[#5BC0EB] flex items-center justify-center animate-bounce-slow">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#FFD700] to-[#FFA500] flex items-center justify-center shadow-lg">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Заголовок */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Спасибо за оплату, {customerName}!
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Ваше место на пробной миссии забронировано.
          </p>
        </div>

        {/* Информация */}
        <div className="rounded-2xl bg-gradient-to-br from-[#5BC0EB]/10 to-[#FF6B9A]/10 p-5 mb-6">
          <p className="text-gray-700 leading-relaxed text-center">
            <span className="font-semibold text-gray-900">Скоро наши кураторы свяжутся с вами</span> 
            {' '}для подбора удобной группы и времени занятия.
          </p>
        </div>

        {/* Финальное сообщение */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Мы начинаем увлекательное путешествие в мир талантов вашего ребёнка! 🎉
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3ED598]/10 text-[#3ED598] text-sm font-semibold">
            <CheckCircle className="w-4 h-4" />
            Оплата подтверждена
          </div>
        </div>

        {/* Кнопка закрытия */}
        <button
          onClick={onClose}
          className="w-full mt-6 py-4 rounded-xl bg-gradient-to-r from-[#5BC0EB] to-[#FF6B9A] text-white font-bold text-lg shadow-lg shadow-[#5BC0EB]/25 hover:shadow-xl hover:shadow-[#5BC0EB]/30 transition-all hover:-translate-y-0.5"
        >
          Отлично!
        </button>
      </div>
    </div>
  );
}
