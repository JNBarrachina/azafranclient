import { Navigate, Route, Routes } from "react-router"

import { Home } from "../components/pages/Home"
import { Login } from "../components/pages/Login"
import { Register } from "../components/pages/Register"

export const UnauthedRoutes = () => {

    return (
    <>  
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
    </>
    )
}
