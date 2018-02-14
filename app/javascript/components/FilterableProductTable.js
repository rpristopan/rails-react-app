import React from "react"
import PropTypes from "prop-types"
import SearchBar from "../components/SearchBar"
import ProductTable from "../components/ProductTable"

class FilterableProductTable extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        filterText: '',
        inStockOnly: false,
        products: PRODUCTS
      }

      this.handleInStockChange = this.handleInStockChange.bind(this);
      this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(event) {
    this.setState({
      filterText: event.target.value
    });
  }

  handleInStockChange(event) {
    this.setState({
      inStockOnly: !this.state.inStockOnly
    });
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange} />

        <ProductTable
          products={this.state.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly} />
      </div>
    )
  }
}

FilterableProductTable.propTypes = {
  products: PropTypes.object
};
FilterableProductTable.defaultProps = {
  products: PRODUCTS
};
export default FilterableProductTable

const PRODUCTS = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
]
