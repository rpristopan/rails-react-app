import React from "react"
import PropTypes from "prop-types"
import ProductCategoryRow from "../components/ProductCategoryRow"
import ProductRow from "../components/ProductRow"

export default class ProductTable extends React.Component {
  render () {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    const rows = [];
    let lastCategory = null;

    this.props.products.forEach((product) => {
      if(product.name.indexOf(filterText) === -1) {
        return;
      }

      if(!product.stocked && inStockOnly) {
        return;
      }

      if(product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      }

      rows.push(
        <ProductRow
          product={product}
          key={product.name} />
      )

      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }
}
