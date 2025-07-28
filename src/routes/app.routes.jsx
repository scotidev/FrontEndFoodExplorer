import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/auth";
import { USER_ROLE } from "../utils/roles";

// Páginas comuns e condicionais
import { Home } from "../pages/Home";
import { DishDetails } from "../pages/DishDetails";
import { Menu } from "../pages/Menu";

// Admin
import { NewDish } from "../pages/NewDish";
import { EditDish } from "../pages/EditDish";

import { NotFound } from "../pages/NotFound";
import { AccessDenied } from "../pages/AccessDenied";

// Admin wrapper
function PrivateAdminRoute({ children }) {
  const { user } = useAuth();

  // Se o usuário não estiver logado ou não for admin, redireciona
  if (!user || user.role !== USER_ROLE.ADMIN) {
    return <Navigate to="/access-denied" />;
  }

  // Se for admin, renderiza o componente filho (a página protegida)
  return children;
}

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dish/:id" element={<DishDetails />} />
      <Route path="/menu" element={<Menu />} />
      <Route
        path="/newDish"
        element={
          <PrivateAdminRoute>
            <NewDish />
          </PrivateAdminRoute>
        }
      />
      <Route
        path="/editDish/:id"
        element={
          <PrivateAdminRoute>
            <EditDish />
          </PrivateAdminRoute>
        }
      />
      <Route path="/access-denied" element={<AccessDenied />} />
      <Route path="*" element={<NotFound />} />{" "}
    </Routes>
  );
}
