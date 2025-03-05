import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CustomerAdmin } from './components/CustomerAdmin';
import { TypeCustomerAdmin } from './components/TypeCustomerAdmin';
import { CustomerForm } from './components/Forms/CustomerForm';
import { TypeCustomerForm } from './components/Forms/TypeCustomerForm';
import { AppCustomers } from './AppCustomers';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    
    <Routes>

      <Route
        path='/'
        element={<AppCustomers/>}
      />
      <Route
        path='/admin-clientes'
        element={<CustomerAdmin/>}
      />
      <Route
        path='/admin-tipos-clientes'
        element={<TypeCustomerAdmin/>}
      />
      <Route
        path='/add-clientes'
        element={<CustomerForm/>}
      />
      <Route
        path='/add-tipos-clientes'
        element={<TypeCustomerForm/>}
      />

    </Routes>
  
  </BrowserRouter>
)