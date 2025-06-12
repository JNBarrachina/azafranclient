import { BrowserRouter, Routes, Route } from 'react-router'

import { Header } from './components/organisms/Header'
import { UnauthedRoutes } from './routes/UnauthedRoutes'
import { AuthedRoutes } from './routes/AuthedRoutes'

function App() {

  const userLogged = localStorage.getItem("accessToken")

  return (
    <>
      <BrowserRouter>
          <Header />
          {!userLogged ? <UnauthedRoutes /> : <AuthedRoutes />}
      </BrowserRouter>
    </>
  )
}

export default App
