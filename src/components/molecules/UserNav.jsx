import { Link } from 'react-router-dom'

import '../organisms/Header.scss'

export const UserNav = () => {
    const userLogout = () => {
        localStorage.removeItem("accessToken")
        window.location.href = "/"
    }

    return (
        <nav className="headerNav">
            <Link to="/dashboard">Tu despensa</Link>
            <button onClick={userLogout} className='logoutBtn'>Logout</button>
        </nav>
    )
}
