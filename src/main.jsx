import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AppCustomers } from './components/AppCustomers';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppCustomers/>
  </StrictMode>,
)