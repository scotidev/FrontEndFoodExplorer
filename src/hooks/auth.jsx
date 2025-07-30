import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { api } from "../services/api";
import { USER_ROLE } from "../utils/roles.js";

// Cria um contexto React para compartilhar o estado de autenticação entre componentes, sem precisar passar props manualmente.
export const AuthContext = createContext({});

// Wrapper das rotas que gerencia o estado de autenticação e disponibiliza funções para seus filhos.
function AuthProvider({ children, showError, showSuccess }) {
  // `data` armazena as informações do usuário logado.
  // `setData` é a função para atualizar esse estado.
  const [data, setData] = useState({});

  const signIn = useCallback(
    async ({ email, password }) => {
      try {
        // Faz uma requisição POST, que retorna os dados do usuário, O token JWT em si NÃO está em `response.data`, mas sim no cookie.
        const response = await api.post("/sessions", { email, password });
        const { user } = response.data;

        // Fz as informações do usuário persistirem mesmo após o navegador ser fechado ou a página recarregada.
        localStorage.setItem("@foodexplorer:user", JSON.stringify(user));
        showSuccess("Login realizado com sucesso!");

        // Atualiza o estado `data` com as informações do usuário.
        setData({ user });

        // O navegador vai reenviar o cookie "token" automaticamente nas requisições futuras,
        // porque a instância 'api' (Axios) já foi configurada globalmente com `withCredentials: true` no arquivo `api.js`.
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
    // Limpa o estado `data` para remover as informações do usuário.
    setData({});
    showSuccess("Logout realizado.");
  }, [showSuccess]);

  // Verifica se há um usuário salvo no localStorage para restaurar a sessão, é executado apenas uma vez.
  useEffect(() => {
    // Tenta obter os dados do usuário do localStorage.
    const user = localStorage.getItem("@foodexplorer:user");

    // Se houver dados de usuário no localStorage:
    if (user) {
      try {
        // Converte a string JSON de volta para um objeto JavaScript.
        const parsedUser = JSON.parse(user);

        setData({
          user: parsedUser,
        });
      } catch (e) {
        // Se houver um erro ao parsear o JSON, faz logout.
        localStorage.removeItem("@foodexplorer:user");
        showError(
          "Sua sessão foi corrompida. Por favor, faça login novamente."
        );
      }
    }
  }, [showError]); // Adicionados como dependência para garantir que o efeito tenha a versão mais recente da função.

  const isAdmin = data.user && data.user.role === USER_ROLE.ADMIN;

  // O componente AuthContext.Provider torna os valores `signIn`, `user` (dados do usuário) e `signOut`
  // disponíveis para todos os componentes filhos que estiverem dentro de `AuthProvider`.
  return (
    <AuthContext.Provider
      value={{
        signIn,
        user: data.user,
        signOut,
        showError,
        showSuccess,
        isAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Simplifica o consumo do `AuthContext`.
// Qualquer componente que precisar acessar as funções ou o estado de autenticação
// pode simplesmente chamar `useAuth()` em vez de `useContext(AuthContext)`.
function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
