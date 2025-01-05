import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes.tsx'
import { ThemeProvider } from './providers/theme-provider.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <Provider store={store}>
   <ThemeProvider>
   <RouterProvider router={routes}>
   </RouterProvider>
   </ThemeProvider>
   </Provider>
  </StrictMode>,
)
