import { useState, useEffect, setState} from 'react'

import "./Header.scss"
import { MainNav } from '../molecules/MainNav'
import { UserNav } from '../molecules/UserNav'


export const Header = () => {
    const userLogged = localStorage.getItem("accessToken")
    const [headerNav, setHeaderNav] = useState()

    useEffect(() => {
        !userLogged ? setHeaderNav(<MainNav />) : setHeaderNav(<UserNav />)
    }, [])

    return (
        <>
        <header className="headerContainer">
            <p className="headerTitle">Azafrán</p>
            {headerNav}
        </header>
        </>
    )
}
