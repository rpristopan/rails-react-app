import React from "react"

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          onChange={this.props.onFilterTextChange} />
        <p>
          <input
            type="checkbox"
            checked={this.props.isStockOnly}
            onChange={this.props.onInStockChange} />
          {' '}
          Only show products in stock
        </p>
      </form>
    )
  }
}
