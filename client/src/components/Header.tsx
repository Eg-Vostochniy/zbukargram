import { useState } from "react"
import { Link } from "react-router-dom"

export const Header: React.FC = () => {
    const [isSettingsModal, setIsSettingsModal] = useState(false)
    return (
        <div className='header'>
            <h1>Zbukargram</h1>
            <input />
            <nav>
                <Link to='/home'>Home</Link>
                <Link to='/message'>Message</Link>
                <Link to='/discover'>Discover</Link>
                <div>Notification</div>
                <div onClick={() => setIsSettingsModal(!isSettingsModal)}>
                    asdasdasd
                    <div>
                        ss
                    </div>
                    {
                        isSettingsModal &&
                        <div>
                            <Link to='/profile'>Profile</Link>
                            <div>Logout</div>
                        </div>
                    }
                </div>
            </nav>
        </div>
    )
}