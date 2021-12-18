/* eslint-disable react/prop-types */
import React from 'react';
import axios from 'axios';

class Books extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return(

      <div>
        {this.props.books.map(oneItem => (
          <div id="book" name={oneItem.name} key={oneItem.id}>
            <div>{oneItem.name}</div>
          </div>
        ))}
      </div>

    )

  }

}

export default Books;