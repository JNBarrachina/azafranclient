import { Route, Routes } from "react-router"

import { Home } from "../components/pages/Home"
import { UserDashboard } from "../components/pages/UserDashboard"

export const AuthedRoutes = () => {
    
    return (
    <>  
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<UserDashboard />} />
    </Routes>
    </>
    )
}
