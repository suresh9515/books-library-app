import React, { useState } from 'react';
import './BooksForm.css';

function BooksForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');
  const [bookList, setBookList] = useState([]);
  const [setSelectedBook] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = { title, author, isbn };
    setBookList([...bookList, newBook]);
    setTitle('');
    setAuthor('');
    setIsbn('');
  };

  const handleBookSelect = (book) => {
    setSelectedBook(book);
  };

  const handleDeleteBook = (book) => {
    const newBookList = bookList.filter((item) => item !== book);
    setBookList(newBookList);
    setSelectedBook(null);
  };

  const handleRemoveAllBooks = () => {
    setBookList([]);
    setSelectedBook(null);
  };

  return (
    <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")', backgroundSize: 'cover', minHeight: '100vh' }}>
      <div className='heading'>
        <h1>BookList Maintenance Form</h1>

      </div>
      <div className='overbox'>

        <div className='Box'>
          <form className='formbox' onSubmit={handleSubmit}>
            <div className='con'>
              <label>
                Title:
                <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
              </label>
              <br />
              <label>
                Author:
                <input type="text" value={author} onChange={(event) => setAuthor(event.target.value)} />
              </label>
              <br />
              <label>
                ISBN:
                <input type="text" value={isbn} onChange={(event) => setIsbn(event.target.value)} />
              </label>
              <br />
              <button className='addbut' type="submit">Add Book</button>
            </div>
          </form>
        </div>
        <br />
        <div className='delbax'>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>ISBN</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {bookList.map((book, index) => (
                <tr key={index} onClick={() => handleBookSelect(book)}>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.isbn}</td>
                  <td>
                    <button onClick={() => handleDeleteBook(book)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={handleRemoveAllBooks}>Remove All</button>
          {/* {selectedBook && (
            <div>
              <h2>{selectedBook.title}</h2>
              <p>Author: {selectedBook.author}</p>
              <p>ISBN: {selectedBook.isbn}</p>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
}

export default BooksForm;