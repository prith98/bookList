import React from 'react';
import axios from 'axios';
import BookSearch from '/frontend/src/components/BookSearch.js';

class BookList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      books: []
    }

    this.getBooks = this.getBooks.bind(this);

  }

  getBooks() {
    axios
      .get('/apiBooks')
      .then(({response}) => {
        this.setState({
          books: response
        })
      })
  }

  componentDidMount() {
    this.getBooks();
  }

  render() {

    return (
      <div>
        <img src = "books.jpeg"/>
        <h1>Book List</h1>
        <BookSearch />
      </div>
    )

  }

}

export default BookList;