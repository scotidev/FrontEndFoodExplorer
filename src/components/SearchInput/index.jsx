import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import { Container, SearchResults } from "./styles";

export function SearchInput({ icon: Icon, ...rest }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const navigate = useNavigate();
  const { user } = useAuth();

  // Função de busca com useCallback para otimização
  const fetchSearchResults = useCallback(async (term) => {
    if (!term) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    try {
      const response = await api.get(`/dishes?title=${term}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error("Erro ao buscar resultados:", error);
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  }, []);

  // Implementação do debounce para a busca
  useEffect(() => {
    const handler = setTimeout(() => {
      fetchSearchResults(searchTerm);
    }, 500); // Debounce de 500ms

    // Cleanup: Limpa o timer anterior se o searchTerm mudar antes do tempo
    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm, fetchSearchResults]);

  const handleResultClick = (id) => {
    if (user.role === "admin") {
      navigate(`/adminDish/${id}`);
    } else {
      navigate(`/dish/${id}`);
    }
    // Opcional: Limpa os resultados e o termo de busca após clicar em um item
    setSearchResults([]);
    setSearchTerm("");
  };

  // Função para lidar com o clique na lupa (se necessário, pode ser apenas visual)
  const handleMagnifyingGlassClick = () => {
    // Se a lupa for clicável para disparar a busca imediatamente,
    // você pode chamar fetchSearchResults(searchTerm) aqui.
    // No entanto, como já temos o debounce, o clique na lupa pode ser
    // mais para focar no input ou dar um feedback visual.
    // Pela sua descrição, a busca é reativa à digitação.
  };

  return (
    <Container>
      {Icon && <Icon size={20} onClick={handleMagnifyingGlassClick} />}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        {...rest}
      />
      {/* Opcional: Feedback visual de carregamento */}
      {isSearching && searchTerm && (
        <p className="loading-feedback">Buscando...</p>
      )}

      {searchResults.length > 0 && (
        <SearchResults>
          {searchResults.map((result) => (
            <div
              key={result.id}
              className="searchResultItem"
              onClick={() => handleResultClick(result.id)}
            >
              <strong>{result.title}</strong>
              {result.ingredients && result.ingredients.length > 0 && (
                <ul>
                  {result.ingredients.map((ingredient) => (
                    <li key={ingredient.id}>{ingredient.name}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </SearchResults>
      )}
    </Container>
  );
}
