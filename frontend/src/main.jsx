import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.scss'
import { BasketContextProvider } from "./context/BasketContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BasketContextProvider>
      <App />
    </BasketContextProvider>
  </React.StrictMode>
)
