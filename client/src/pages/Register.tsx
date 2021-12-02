import { useState } from "react"
import { Link } from "react-router-dom"
import { FormSubmit, InputChange } from "../App"
import { useAppDispatch } from "../hooks/useAppDispatch"
import { useAppSelector } from "../hooks/useAppSelector"

export const Register: React.FC = () => {
    const [registerData, setRegisterData] = useState({
        fullname: '',
        username: '',
        email: '',
        password: '',
        cf_password: '',
        gender: 'male'
    })
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    const { register } = useAppDispatch()
    const { loading } = useAppSelector(state => state.alertReducer)

    const handleInput = (e: InputChange) => {
        const { name, value } = e.target
        setRegisterData({ ...registerData, [name]: value })
    }

    const handleSubmit = (e: FormSubmit) => {
        e.preventDefault()
        register(registerData)
    }

    const handlePasswordVisible = () => {
        setIsPasswordVisible(!isPasswordVisible)
    }

    return (
        <div className='auth_page'>
            <form onSubmit={handleSubmit}>
                <h2>Zbukargram</h2>

                <label htmlFor='registerFullname'>
                    <input
                        name='fullname'
                        type='text'
                        placeholder='Full name'
                        value={registerData.fullname}
                        onChange={handleInput}
                        id='registerFullname'
                    />
                </label>

                <label htmlFor='registerUsername'>
                    <input
                        name='username'
                        type='text'
                        placeholder='User name'
                        value={registerData.username}
                        onChange={handleInput}
                        id='registerUsername'
                    />
                </label>

                <label htmlFor='registerEmail'>
                    <input
                        name='email'
                        placeholder='E-mail'
                        type='text'
                        value={registerData.email}
                        onChange={handleInput}
                        id='registerEmail'
                    />
                </label>

                <label className='pass' htmlFor='registerPassword'>
                    <input
                        name='password'
                        placeholder='Password'
                        type={isPasswordVisible ? 'text' : 'password'}
                        value={registerData.password}
                        onChange={handleInput}
                        id='registerPassword'
                    />
                    <small onClick={handlePasswordVisible}>
                        {isPasswordVisible ? 'Hide' : 'Show'}
                    </small>
                </label>

                <label htmlFor='registerCfPassword'>
                    <input
                        name='cf_password'
                        placeholder='Confirm password'
                        type={isPasswordVisible ? 'text' : 'password'}
                        value={registerData.cf_password}
                        onChange={handleInput}
                        id='registerCfPassword'
                    />
                </label>

                <div className='gender'>
                    <label>
                        Male
                        <input
                            name='gender'
                            type='radio'
                            value='male'
                            defaultChecked
                            onChange={handleInput}
                        />
                    </label>

                    <label>
                        Female
                        <input
                            name='gender'
                            type='radio'
                            value='female'
                            onChange={handleInput}
                        />
                    </label>

                    <label>
                        Other
                        <input
                            name='gender'
                            type='radio'
                            value='other'
                            onChange={handleInput}
                        />
                    </label>
                </div>

                <button
                    disabled={
                        registerData.email === '' ||
                        registerData.password === '' ||
                        registerData.cf_password === '' ||
                        registerData.fullname === '' ||
                        registerData.username === '' ||
                        loading
                    }
                    type='submit'
                >Register
                </button>

                <span className='redirect'>
                    Already have an account? <Link to='/login'>Login</Link>
                </span>
            </form>

        </div>
    )
}