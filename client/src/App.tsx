import { Routes, Route } from 'react-router-dom'
import { NotFound } from './pages/NotFound'
import { Register } from './pages/Register'
import { Header } from './components/Header'
import { Login } from './pages/Login'
import { ChangeEvent, FormEvent } from 'react'
import './App.css'


export const App: React.FC = () => {

  return (
    <div className='content'>
      <Header />
      <div className='main'>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export type FormSubmit = FormEvent<HTMLFormElement>
export type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>