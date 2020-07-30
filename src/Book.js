import React from 'react'
import './Book.css'

class Book extends React.Component{
    render() {
        console.log(this.props)

        return (
            <li>
                <h2>{this.props.info.volumeInfo.title}</h2>
                <div>
                    <img alt={this.props.info.volumeInfo.title} src={this.props.info.volumeInfo.imageLinks.thumbnail}/>
                    <div>
                        <span>Author: {this.props.info.volumeInfo.authors ? this.props.info.volumeInfo.authors[0] : ""}</span>
                        <span>{this.props.info.saleInfo.listPrice ? "Price: $" + this.props.info.saleInfo.listPrice.amount : ""} </span>
                        <p>{this.props.info.volumeInfo.description}</p>
                    </div>
                </div>
            </li>
        )
    }
}

export default Book;