import { X, Copy, CheckCircle } from 'lucide-react';
import { useState } from 'react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPaymentComplete: () => void;
  customerData: { name: string; email: string; childAge: number };
}

export function PaymentModal({ isOpen, onClose, onPaymentComplete, customerData }: PaymentModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const contractNumber = '5131892696';
  const recipientName = 'Осипенко Анастасия Максимовна';

  const handleCopyContract = () => {
    navigator.clipboard.writeText(contractNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5 text-gray-500" />
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

        {/* Данные получателя */}
        <div className="rounded-2xl bg-gradient-to-r from-[#5BC0EB]/10 to-[#FF6B9A]/10 p-4 mb-6">
          <p className="text-sm font-semibold text-gray-700 mb-2">Получатель:</p>
          <p className="text-gray-900 font-medium mb-1">{recipientName}</p>
          <div className="flex items-center justify-between">
            <p className="text-gray-600 text-sm">Номер договора: <span className="font-mono font-semibold text-gray-900">{contractNumber}</span></p>
            <button
              onClick={handleCopyContract}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-gray-50 transition-colors"
            >
              {copied ? (
                <>
                  <CheckCircle className="w-4 h-4 text-[#3ED598]" />
                  <span className="text-xs font-semibold text-[#3ED598]">Скопировано</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-gray-500" />
                  <span className="text-xs font-semibold text-gray-600">Копировать</span>
                </>
              )}
            </button>
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
