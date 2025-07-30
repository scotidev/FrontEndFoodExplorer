// src/components/SearchInput/index.jsx (ATUALIZADO)

import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import { Container, SearchResults } from "./styles";
import { PiMagnifyingGlass } from "react-icons/pi"; // <--- Importe o ícone aqui

export function SearchInput({ ...rest }) {
  // <--- Removida a prop 'icon'
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const navigate = useNavigate();
  const { user } = useAuth();

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

  useEffect(() => {
    const handler = setTimeout(() => {
      fetchSearchResults(searchTerm);
    }, 500);

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
    setSearchResults([]);
    setSearchTerm("");
  };

  const handleMagnifyingGlassClick = () => {
    // Ação para o clique na lupa, se necessário.
    // Atualmente, a busca já é feita via debounce no useEffect.
  };

  return (
    <Container>
      <PiMagnifyingGlass size={20} onClick={handleMagnifyingGlassClick} />{" "}
      {/* <--- Ícone hardcoded aqui */}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        {...rest}
      />
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
