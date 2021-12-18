import React from 'react';
import axios from 'axios';

class BookList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <img src = "books.jpeg"/>
        <h1>Book Lists</h1>
      </div>
    )

  }

}

export default BookList;