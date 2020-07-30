import React from 'react'

class SearchBox extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            query: ''
        }
    }
    render() {
        return (
            <div>
                <span>Search:</span>
                <input type="text" placeholder="Insert keywords..." onChange={(e) => this.setState({query: e.target.value})}/>
                <input type="button" onClick={(e) => this.props.handleSearch(this.state.query)} value="Search"/>
            </div>
        )
    }
}

export default SearchBox;