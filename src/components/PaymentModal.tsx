import { X, CheckCircle } from 'lucide-react';


interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPaymentComplete: () => void;
  customerData: { name: string; email: string; childAge: number };
}

export function PaymentModal({ isOpen, onClose, onPaymentComplete, customerData }: PaymentModalProps) {


  const handlePaymentConfirmed = () => {
    onPaymentComplete();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Затемнение фона */}
      <div 
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Модальное окно */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full p-6 sm:p-8 animate-scale-in">
        {/* Кнопка закрытия */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white shadow-md hover:bg-gray-100 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5 text-gray-500 pointer-events-none" />
        </button>

        {/* Заголовок */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#5BC0EB] to-[#FF6B9A] flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Оплата пробной миссии</h3>
          <p className="text-gray-600">Отсканируйте QR-код для оплаты</p>
        </div>

        {/* Информация о заказе */}
        <div className="rounded-2xl bg-gray-50 p-4 mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600">Клиент:</span>
            <span className="font-semibold text-gray-900">{customerData.name}</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600">Возраст ребёнка:</span>
            <span className="font-semibold text-gray-900">{customerData.childAge} лет</span>
          </div>
          <div className="flex justify-between items-center pt-2 border-t border-gray-200">
            <span className="text-gray-600">Сумма:</span>
            <span className="text-2xl font-extrabold text-[#FF6B9A]">990 ₽</span>
          </div>
        </div>

        {/* QR код */}
        <div className="flex justify-center mb-6">
          <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100">
            <img 
              src="/images/qr-payment.png" 
              alt="QR код для оплаты"
              className="w-64 h-64 object-contain"
            />
          </div>
        </div>

     

        {/* Инструкция */}
        <div className="text-center mb-6">
          <p className="text-gray-600 text-sm leading-relaxed">
            После оплаты нажмите кнопку ниже для подтверждения
          </p>
        </div>

        {/* Кнопка подтверждения */}
        <button
          onClick={handlePaymentConfirmed}
          className="w-full py-4 rounded-xl bg-gradient-to-r from-[#3ED598] to-[#5BC0EB] text-white font-bold text-lg shadow-lg shadow-[#3ED598]/25 hover:shadow-xl hover:shadow-[#3ED598]/30 transition-all hover:-translate-y-0.5"
        >
          Я оплатил(а)
        </button>
      </div>
    </div>
  );
}
