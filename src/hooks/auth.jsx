import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { api } from "../services/api";
import { useToast } from "./toast";

import { USER_ROLE } from "../utils/roles.js";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  const { showError, showSuccess } = useToast();

  const signIn = useCallback(
    async ({ email, password }) => {
      try {
        const response = await api.post("/sessions", { email, password });
        const { user } = response.data;

        localStorage.setItem("@foodexplorer:user", JSON.stringify(user));
        showSuccess("Login realizado com sucesso!");

        setData({ user });
      } catch (error) {
        if (error.response) {
          showError(error.response.data.message);
        } else {
          showError("Não foi possível fazer login.");
        }
      }
    },
    [showError, showSuccess]
  );

  const signOut = useCallback(async () => {
    localStorage.removeItem("@foodexplorer:user");
    setData({});
    showSuccess("Logout realizado.");
  }, [showSuccess]);

  useEffect(() => {
    const user = localStorage.getItem("@foodexplorer:user");

    if (user) {
      try {
        const parsedUser = JSON.parse(user);
        setData({
          user: parsedUser,
        });
      } catch (e) {
        localStorage.removeItem("@foodexplorer:user");
      }
    }
  }, [showError]);

  const isAdmin = data.user && data.user.role === USER_ROLE.ADMIN;

  return (
    <AuthContext.Provider
      value={{
        signIn,
        user: data.user,
        signOut,
        isAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
