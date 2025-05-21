import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GoogleClone from './google-clone'
import { Form } from './components/form/form'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GoogleClone />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
