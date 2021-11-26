import { useState } from "react"
import { FormSubmit, InputChange } from "../App"
import { useAppDispatch } from "../hooks/useAppDispatch"


export const Login: React.FC = () => {
    const [formValues, setFormValues] = useState({
        email: '',
        password: ''
    })

    const { login } = useAppDispatch()

    const handleChange = (e: InputChange) => {
        const { name, value } = e.target
        setFormValues({ ...formValues, [name]: value })
    }

    const handleSubmit = (e: FormSubmit) => {
        e.preventDefault()
        login(formValues)
        setFormValues({ email: '', password: '' })
    }
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    name='email'
                    type='text'
                    value={formValues.email}
                    onChange={handleChange}
                />
                <input
                    name='password'
                    type='text'
                    value={formValues.password}
                    onChange={handleChange}
                />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}