import './Header.scss'
import { MainNav } from '../molecules/MainNav'
import { UserNav } from '../molecules/UserNav'

export const Header = () => {
  const userLogged = localStorage.getItem('accessToken')

  return (
    <header className="headerContainer">
      <p className="headerTitle">Azafrán</p>
      {!userLogged ? <MainNav /> : <UserNav />}
    </header>
  )
}
