import Bookshelf from './bookShelf';
import '../App.css';
import { Link } from 'react-router-dom';

const MainBookShelf = ({books, onStatusChange }) => {

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Bookshelf
            title="Currently Reading"
            books={books.filter(b => b.shelf === 'currentlyReading')}
            onStatusChange={onStatusChange}
          />
          <Bookshelf
            title="Want to Read"
            books={books.filter(b => b.shelf === 'wantToRead')}
            onStatusChange={onStatusChange}
          />
          <Bookshelf
            title="Read"
            books={books.filter(b => b.shelf === 'read')}
            onStatusChange={onStatusChange}
          />
        </div>
      </div>
  
    <div className="open-search">
      <Link to="/search">Add a book</Link>
      </div>
  </div>
  );
};

export default MainBookShelf;
