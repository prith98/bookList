import React from 'react';
import axios from 'axios';

class BookSearch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ISBN: ''
    }

    this.onChange = this.onChange.bind(this);
    this.refreshState = this.refreshState.bind(this);
    this.addBook = this.addBook.bind(this);
  }

  onChange(event) {
    this.setState({
      ISBN: event.target.value
    })
  }

  refreshState() {
    this.setState({
      ISBN: ''
    })
  }

  addBook() {
    console.log({ISBN: this.state.ISBN});
    axios
      .post('/apiBooks', {ISBN: this.state.ISBN})
      .then(this.props.refresh)
      .then(this.refreshState())

  }

  render() {

    return(

      <form>
        <label>
          Enter 13 Digit ISBN Number here:
          <input
          type="text"
          value={this.state.ISBN}
          onChange={this.onChange}
          />
          <button
          type="button"
          onClick={this.addBook}
          >
            Add book to list
          </button>
        </label>
      </form>

    )

  }

}

export default BookSearch;