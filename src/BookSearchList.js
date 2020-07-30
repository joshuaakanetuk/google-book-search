import React from 'react'
import Book from './Book'
import './BookSearchList.css';

class BookSearchList extends React.Component {
    static defaultProps = {
        books: ['']
    };

    componentDidMount() {
        console.log(this.props.books)
    }
    render() {
        const results = (this.props.books).map((item, i) => {
            return (
                <Book key={i} info={item} />
            );
        })

        return (
            <ul>
                {results}
            </ul>
        )
    }
}
export default BookSearchList;