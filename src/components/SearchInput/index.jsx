import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { Container, SearchResults } from "./styles";
import { PiMagnifyingGlass } from "react-icons/pi";

export function SearchInput({ ...rest }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false); // Novo estado para saber se a busca inicial foi feita

  const navigate = useNavigate();
  // Pegando showError e showSuccess do AuthContext (assumindo que estão lá)
  const { user, showError, showSuccess } = useAuth();

  const fetchSearchResults = useCallback(
    async (term) => {
      // Se o termo estiver vazio, limpa os resultados e não faz a busca
      if (!term.trim()) {
        setSearchResults([]);
        setHasSearched(false); // Reseta o estado de busca
        return;
      }

      setIsSearching(true);
      try {
        // Modificado para buscar por título OU ingredientes no backend
        const response = await api.get(`/dishes?title=${term}`);
        setSearchResults(response.data);
        setHasSearched(true); // Indica que uma busca foi realizada
      } catch (error) {
        console.error("Erro ao buscar resultados:", error);
        setSearchResults([]);
        setHasSearched(true); // Indica que uma busca foi realizada, mesmo com erro
        showError("Erro ao buscar pratos. Tente novamente."); // Mostra erro com Toast
      } finally {
        setIsSearching(false);
      }
    },
    [showError]
  ); // Adicionado showError como dependência

  useEffect(() => {
    // Delay para a busca (debounce)
    const handler = setTimeout(() => {
      fetchSearchResults(searchTerm);
    }, 500); // 500ms de delay

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm, fetchSearchResults]);

  // Efeito para mostrar a mensagem "Prato não encontrado"
  useEffect(() => {
    // Se já buscou, não está buscando e não encontrou resultados, mostra a mensagem
    if (
      hasSearched &&
      !isSearching &&
      searchTerm.trim() &&
      searchResults.length === 0
    ) {
      showError(`Prato ou ingrediente "${searchTerm}" não encontrado.`); // Usando o Toast de erro
    }
  }, [hasSearched, isSearching, searchResults, searchTerm, showError]);

  const handleResultClick = (id) => {
    // Redireciona para a página do prato
    if (user.role === "admin") {
      navigate(`/adminDish/${id}`);
    } else {
      navigate(`/dish/${id}`);
    }
    setSearchResults([]); // Limpa os resultados da pesquisa
    setSearchTerm(""); // Limpa o termo de pesquisa
  };

  const handleMagnifyingGlassClick = () => {
    // Quando a lupa é clicada, força a busca imediatamente
    // Útil se o usuário digitar e quiser buscar sem esperar o debounce
    fetchSearchResults(searchTerm);
  };

  return (
    <Container>
      {/* Lupa clicável como um botão visual */}
      <button type="button" onClick={handleMagnifyingGlassClick}>
        <PiMagnifyingGlass size={20} />
      </button>

      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Busque por pratos ou ingredientes" // Adiciona placeholder
        {...rest}
      />

      {/* Feedback de busca */}
      {isSearching && searchTerm.trim() && (
        <p className="loading-feedback">Buscando...</p>
      )}

      {/* Resultados da busca */}
      {searchResults.length > 0 && searchTerm.trim() && (
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
