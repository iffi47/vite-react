import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import todoReducer from './store/todoSlice';
import './index.css'
import App from './App.tsx'

const store = configureStore({
  reducer: {
    todo: todoReducer
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
