import React from 'react'

class FilterOptionsBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            printTypeOptions: ['all', 'books', 'magazines'],
            bookTypeOptions: ['ebooks', 'free-ebooks', 'full', 'paid-ebooks', 'partial']
        }
    }
    
    render() {

        const poptions = this.state.printTypeOptions.map((item, i) => {
            return <option value={item} key={i} defaultValue={this.props.selected.printType}>{item}</option>
        })

        const boptions = this.state.bookTypeOptions.map((item, i) => {
            return <option value={item} key={i} defaultValue={this.props.selected.booKType} >{item}</option>
        })

        return (
            <>
                <div className="print">
                    <span>Print Type:</span>
                    <select
                        id="print"
                        name="print"
                        onChange={e => this.props.updatePrintType(e.target.value)}>
                        {poptions}
                    </select>
                </div>
                <div className="book">
                <span>Book Type:</span>
                    <select
                        id="book"
                        name="book"
                        onChange={e => this.props.updateBookType(e.target.value)}>
                        {boptions}
                    </select>
                </div>
            </>
        )
    }
}

export default FilterOptionsBox;