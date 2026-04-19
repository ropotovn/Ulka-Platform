// Хранилище данных клиентов
// Данные сохраняются здесь и могут быть извлечены из GitHub

export interface CustomerData {
  id: string;
  name: string;
  email: string;
  childAge: number;
  amount: number;
  createdAt: string;
  status: 'pending' | 'paid' | 'completed';
}

// Массив для хранения данных клиентов
export const customers: CustomerData[] = [];

// Функция для добавления нового клиента
export function addCustomer(data: Omit<CustomerData, 'id' | 'createdAt' | 'status'>): CustomerData {
  const newCustomer: CustomerData = {
    ...data,
    id: `customer_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    createdAt: new Date().toISOString(),
    status: 'pending',
  };
  
  customers.push(newCustomer);
  console.log('Новый клиент добавлен:', newCustomer);
  console.log('Всего клиентов:', customers.length);
  
  return newCustomer;
}

// Функция для обновления статуса оплаты
export function updateCustomerStatus(id: string, status: CustomerData['status']): void {
  const customer = customers.find(c => c.id === id);
  if (customer) {
    customer.status = status;
    console.log('Статус клиента обновлён:', customer);
  }
}

// Функция для получения всех клиентов
export function getAllCustomers(): CustomerData[] {
  return customers;
}
