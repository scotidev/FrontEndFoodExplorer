import { BrowserRouter } from "react-router-dom"
import { useAuth } from "../hooks/auth"

import { AppRoutes } from "./app.routes"
import { AdminRoutes } from "./admin.routes"
import { AuthRoutes } from "./auth.routes"

export function Routes() {
    const {user} = useAuth()

    function VerifyAdminRoutes() {
        if(!user.admin) {
            return <AppRoutes />
        }
        else {
            return <AdminRoutes />
        }
    }

    return (
        <BrowserRouter>
            {user ? <VerifyAdminRoutes /> : <AuthRoutes />}
        </BrowserRouter>
    )
}