import React from 'react';
import Navigation from './Navigation';
import Book from './Book';
import Form from './Form';

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      BooksList: [
        {
          id: 1,
          author: 'Luther King Junior',
          title: 'Lengends of Tomorrow',
        },
        {
          id: 2,
          author: 'Peter Abrahams',
          title: 'Red is Black Blood',
        },
      ],
    };
  }

  render() {
    const { BooksList } = this.state;
    return (
      <>
        <Navigation />
        <main className="container-books">
          <ul className="books-list">
            {BooksList.map((book) => (
              <li key={book.id}>
                <Book
                  author={book.author}
                  title={book.title}
                />
              </li>
            ))}
          </ul>
          <Form />
        </main>
      </>
    );
  }
}

export default Books;
