import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import BASE_PATH from './constants/BasePath.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={BASE_PATH}>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
