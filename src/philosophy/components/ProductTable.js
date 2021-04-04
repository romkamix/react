import React from "react";
import PropTypes from "prop-types";

import ProductRow from "./ProductRow";
import ProductCategoryRow from "./ProductCategoryRow";

function ProductTable({ products }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow key={product.category} name={product.category} />
      );
      lastCategory = product.category;
    }

    rows.push(<ProductRow key={product.name} product={product} />);
  });

  return (
    <table className="products">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

ProductTable.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductTable;
