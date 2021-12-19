import React from 'react';
import axios from 'axios';
import BookSearch from '/frontend/src/components/BookSearch.js';
import Books from '/frontend/src/components/Books.js';

class BookList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      init: 'hello',
      books: [],
      bookList: {}
    }

    this.refreshBooks = this.refreshBooks.bind(this);

  }

  refreshBooks() {
    axios
      .get('/apiBooks')
      .then((data) => {
        this.setState({
          books: data.data
        })
      })
  }

  componentDidMount() {
    this.refreshBooks();
  }

  render() {

    return (
      <div>
        <img src = "books.jpeg"/>
        <h1>Book List</h1>
        <BookSearch books={this.state.books} refresh={this.refreshBooks}/>
        <Books books={this.state.books}/>
      </div>
    )

  }

}

export default BookList;