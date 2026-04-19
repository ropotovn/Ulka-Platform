// Хранилище данных клиентов
// Данные сохраняются здесь и могут быть извлечены из GitHub

const STORAGE_KEY = 'customers';

export interface CustomerData {
  id: string;
  name: string;
  email: string;
  childAge: number;
  amount: number;
  createdAt: string;
  status: 'pending' | 'paid' | 'completed';
}

// Загрузка из localStorage
function loadCustomers(): CustomerData[] {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

// Сохранение в localStorage
function saveCustomers(customers: CustomerData[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(customers));
}

// Добавление клиента
export function addCustomer(
  data: Omit<CustomerData, 'id' | 'createdAt' | 'status'>
): CustomerData {
  const customers = loadCustomers();

  const newCustomer: CustomerData = {
    ...data,
    id: `customer_${Date.now()}`,
    createdAt: new Date().toISOString(),
    status: 'pending',
  };

  customers.push(newCustomer);
  saveCustomers(customers);

  return newCustomer;
}

// Получение всех клиентов
export function getAllCustomers(): CustomerData[] {
  return loadCustomers();
}

// Обновление статуса
export function updateCustomerStatus(id: string, status: CustomerData['status']) {
  const customers = loadCustomers();
  const customer = customers.find(c => c.id === id);

  if (customer) {
    customer.status = status;
    saveCustomers(customers);
  }
}
