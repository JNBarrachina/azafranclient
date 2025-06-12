import { Link } from 'react-router-dom'

import '../organisms/Header.scss'

export const MainNav = () => {
    return (
        <nav className="headerNav">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </nav>
    )
}
