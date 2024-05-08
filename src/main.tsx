import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { StyledEngineProvider } from "@mui/material";
import { Provider } from "react-redux";
import AppThemeProvider from "./providers/AppThemeProvider.tsx";
import { store } from "./store/index.ts";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Provider store={store}>
        <AppThemeProvider>
          <App />
        </AppThemeProvider>
      </Provider>
    </StyledEngineProvider>
  </React.StrictMode>,
)
