import { memo, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { useAppSelector } from "../../hooks/useAppSelector"
import { Avatar } from "../Avatar"

export const Navbar: React.FC = memo(() => {
    const [isSettingsModal, setIsSettingsModal] = useState(false)
    const [isFavActive, setIsFavActive] = useState(false)

    const { logout } = useAppDispatch()
    const avatar = useAppSelector(state => state.authReducer.user?.avatar)

    const { pathname } = useLocation()

    const navBar = [
        { path: '/', content: 'home', className: 'menu_item' },
        { path: '/message', content: 'send', className: 'menu_item send_message' },
        { path: '/discover', content: 'explore', className: 'menu_item' }
    ]
    const isActive = (pn: string) => {
        if (pathname === pn) {
            return 'active'
        }
        return ''
    }
    const handleLogout = () => {
        logout()
    }
    return (
        <ul className='navbar'>
            {
                navBar.map(item => (
                    <li
                        key={item.path}
                        className={`${item.className} ${isActive(item.path)}`}
                    >
                        <Link to={item.path}>
                            <span className="material-icons">{item.content}</span>
                        </Link>
                    </li>
                ))
            }
            <li
                onClick={() => setIsFavActive(!isFavActive)}
                className={`menu_item ${isFavActive && 'active'}`}>
                <span className="material-icons">
                    favorite
                </span>
            </li>
            <li onClick={() => setIsSettingsModal(!isSettingsModal)}>
                <Avatar url={avatar} size='small' />
                {
                    isSettingsModal &&
                    <ul>
                        <li><Link to='/profile'><span className="material-icons">
                            account_circle
                        </span>Profile</Link></li>
                        <li onClick={handleLogout}><span className="material-icons">
                            logout
                        </span>Logout</li>
                    </ul>
                }
            </li>
        </ul>
    )
})
