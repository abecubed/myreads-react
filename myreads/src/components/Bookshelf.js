import Book from './Book';
import '../App.css';

const Bookshelf = ({ title, books, onStatusChange }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{title}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map(book => (
          <li key={book.id}>
            <Book book={book} onStatusChange={onStatusChange} />
          </li>
        ))}
      </ol>
    </div>
  </div>
);

export default Bookshelf;
