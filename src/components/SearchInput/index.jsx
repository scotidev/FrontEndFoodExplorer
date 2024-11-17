import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'

import { Container, SearchResults } from './styles'

export function SearchInput({ icon: Icon, ...rest }) {
    const [searchTerm, setSearchTerm] = useState("")
    const [searchResults, setSearchResults] = useState([])

    const navigate = useNavigate()
    const { user } = useAuth()

    useEffect(() => {
        if (searchTerm) {
            const fetchSearchResults = async () => {
                try {
                    const response = await api.get(`/dishes?title=${searchTerm}`)
                    setSearchResults(response.data)
                } catch (error) {
                    console.error('Erro:', error)
                }
            }

            fetchSearchResults()
        } else {
            setSearchResults([])
        }
    }, [searchTerm])

    const handleResultClick = (id) => {
        if (user.role === 'admin') {
            navigate(`/adminDish/${id}`)
        } else {
            navigate(`/dish/${id}`)
        }
    }

    return (
        <Container>
            {Icon && <Icon size={20} />}
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                {...rest}
            />
            {searchResults.length > 0 && (
                <SearchResults>
                    {searchResults.map(result => (
                        <div
                            key={result.id}
                            className="searchResultItem"
                            onClick={() => handleResultClick(result.id)}
                        >
                            <strong>{result.title}</strong>
                            <ul>
                                {result.ingredients.map(ingredient => (
                                    <li key={ingredient.id}>{ingredient.name}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </SearchResults>
            )}
        </Container>
    )
}