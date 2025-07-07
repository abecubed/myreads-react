import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as BooksAPI from '../utils/BooksAPI';
import Book from './Book';
import '../App.css';

const BookSearch = ({ books, onStatusChange }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.trim()) {
        BooksAPI.search(query, 100).then(searchResults => {
          if (Array.isArray(searchResults)) {
            const updatedResults = searchResults.map(result => {
              const existing = books.find(b => b.id === result.id);
              return existing ? { ...result, shelf: existing.shelf } : { ...result, shelf: 'none' };
            });
            setResults(updatedResults);
            setError('');
          } else {
            setResults([]);
            setError('No results found.');
          }
        }).catch(() => {
          setResults([]);
          setError('An error occurred while searching.');
        });
      } else {
        setResults([]);
        setError('');
      }
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [query, books]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <button className="close-search" onClick={() => navigate('/')}>Close</button>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        {error && <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>}
        <ol className="books-grid">
          {results.map(book => (
            <li key={book.id}>
              <Book book={book} onStatusChange={onStatusChange} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default BookSearch;