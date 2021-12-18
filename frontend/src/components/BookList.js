import React from 'react';
import axios from 'axios';
import BookSearch from '/frontend/src/components/BookSearch.js';

class BookList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }



  render() {

    return (
      <div>
        <img src = "books.jpeg"/>
        <h1>Book Lists</h1>
        <BookSearch />
      </div>
    )

  }

}

export default BookList;