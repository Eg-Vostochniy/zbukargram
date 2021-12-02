import { ChangeEvent, FormEvent, useEffect } from 'react'
import './styles/global.css'
import { Header } from './components/Header/index'
import { useAppSelector } from './hooks/useAppSelector'
import { useAppDispatch } from './hooks/useAppDispatch'
import { PrivateRoute, PublicRoute } from './routes'


export const App: React.FC = () => {
  const token = useAppSelector(state => state.authReducer.access_token)
  const { verifyToken } = useAppDispatch()

  useEffect(() => {
    if (localStorage.getItem('token')) {
      verifyToken()
    }
    //eslint-disable-next-line
  }, [])

  return (
    <div className='App'>
      <div className='main'>
        {token && <Header />}
        {
          token ? <PrivateRoute /> : <PublicRoute />
        }
      </div>
    </div>
  )
}

export type FormSubmit = FormEvent<HTMLFormElement>
export type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>