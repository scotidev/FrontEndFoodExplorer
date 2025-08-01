import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

// Se o usuário estiver autenticado, renderiza AppRoutes, caso contrário, renderiza AuthRoutes.
export function Routes() {
  const { user } = useAuth();

  return (
    <BrowserRouter> {user ? <AppRoutes /> : <AuthRoutes />} </BrowserRouter>
  );
}
