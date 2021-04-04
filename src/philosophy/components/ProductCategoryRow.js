import React from "react";
import PropTypes from "prop-types";

function ProductCategoryRow({ name }) {
  return (
    <tr className="product-category">
      <td colSpan="2">{name}</td>
    </tr>
  );
}

ProductCategoryRow.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ProductCategoryRow;
