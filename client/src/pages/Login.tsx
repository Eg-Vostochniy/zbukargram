import { useState } from "react"
import { Link } from "react-router-dom"
import { FormSubmit, InputChange } from "../App"
import { useAppDispatch } from "../hooks/useAppDispatch"
import { useAppSelector } from "../hooks/useAppSelector"


export const Login: React.FC = () => {
    const [formValues, setFormValues] = useState({
        email: '',
        password: ''
    })
    const [passwordVisible, setPasswordVisible] = useState(false)

    const { login } = useAppDispatch()
    const { loading } = useAppSelector(state => state.alertReducer)

    const handleChange = (e: InputChange) => {
        const { name, value } = e.target
        setFormValues({ ...formValues, [name]: value })
    }

    const handleSubmit = (e: FormSubmit) => {
        e.preventDefault()
        login(formValues)
    }

    const handlePasswordVisible = () => {
        setPasswordVisible(!passwordVisible)
    }
    return (
        <div className='auth_page'>
            <form onSubmit={handleSubmit}>
                <h2>Zbukargram</h2>
                <label htmlFor='loginEmail'>
                    <input
                        name='email'
                        placeholder='E-mail'
                        type='text'
                        id='loginEmail'
                        value={formValues.email}
                        onChange={handleChange}
                    />
                </label>

                <label className='pass' htmlFor='loginPassword'>
                    <input
                        name='password'
                        type={passwordVisible ? 'text' : 'password'}
                        placeholder='Password'
                        id='loginPassword'
                        value={formValues.password}
                        onChange={handleChange}
                    />

                    <small onClick={handlePasswordVisible}>
                        {passwordVisible ? 'Hide' : 'Show'}
                    </small>
                </label>

                <button
                    disabled={
                        formValues.email === '' ||
                        formValues.password === '' ||
                        loading
                    }
                    type='submit'>Login
                </button>

                <span className='redirect'>
                    Don't have an account? <Link to='/register'>Register</Link>
                </span>
            </form >
        </div >
    )
}