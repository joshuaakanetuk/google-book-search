import React from 'react';
import './App.css';
import SearchBox from './SearchBox';
import FilterOptionsBox from './FilterOptionsBox'
import BookSearchList from './BookSearchList'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
      error: false,
      selected: {
        printType: 'all',
        bookType: 'ebooks'
      }
    }
  }
  handleSearch = (e) => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${e}&filter=${this.state.selected.bookType}&printType=${this.state.selected.printType}`)
      .then(response => {
        // check if response is ok
        console.log('About to check for errors');
        if (!response.ok) {
          console.log('An error did occur, let\'s throw an error.');
          throw new Error('Something went wrong'); // throw an error
        }
        return response; // ok, so just continue
      })
      .then(response => response.json())
      .then(data => {

        if(data.totalItems === 0) {
          throw new Error("No books found.")
        }

        this.setState({
          books: data.items,
          error: false
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }
  updatePrintType = (select) => {
    this.setState({
      printType: select
    })

  }
  updateBookType = (select) => {
    this.setState({
      bookType: select
    })
  }
  render() {
    const none = this.state.error ? "No books found." : <BookSearchList books={this.state.books} />
    return (
      <div className="App" >
        <header>
          <span>Google Book Search</span>
        </header>
        <SearchBox handleSearch={this.handleSearch} />
        <FilterOptionsBox selected={this.state.selected} updatePrintType={this.updatePrintType} updateBookType={this.updateBookType} />
        {none}
      </div>
    );
  }
}

export default App;
