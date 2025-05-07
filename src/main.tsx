import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import GoogleClone from './google-clone'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleClone />
  </StrictMode>,
)
