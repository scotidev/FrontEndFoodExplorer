import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import { Container, SearchResults } from "./styles";
import { PiMagnifyingGlass } from "react-icons/pi";

export function SearchInput({ icon: Icon, ...rest }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const navigate = useNavigate();
  const { showError } = useAuth();

  const handleResultClick = (id) => {
    navigate(`/dish/${id}`);
    setSearchResults([]);
    setSearchTerm("");
  };

  useEffect(() => {
    if (searchTerm) {
      const fetchSearchResults = async () => {
        try {
          const response = await api.get(`/dishes?title=${searchTerm}`);
          setSearchResults(response.data);
        } catch (error) {
          showError("Não foi possível carregar os pratos.");
        }
      };
      fetchSearchResults();
    } else {
      setSearchResults([]);
    }
  }, [searchTerm, showError]);

  return (
    <Container>
      <PiMagnifyingGlass className="icon" size={20} />

      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Busque por pratos ou ingredientes"
        {...rest}
      />

      {searchResults.length > 0 && (
        <SearchResults>
          {searchResults.map((result) => (
            <div
              key={result.id}
              className="searchResultItem"
              onClick={() => handleResultClick(result.id)}
            >
              <strong>{result.title}</strong>
              <ul>
                {result.ingredients.map((ingredient) => (
                  <li key={ingredient.id}>{ingredient.name}</li>
                ))}
              </ul>
            </div>
          ))}
        </SearchResults>
      )}
    </Container>
  );
}
