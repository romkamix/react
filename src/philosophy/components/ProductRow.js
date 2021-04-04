import React from "react";
import PropTypes from "prop-types";

function ProductRow({ product }) {
  let classes = ["product"];

  if (product.stocked === false) {
    classes.push("product_outofstock");
  }

  return (
    <tr className={classes.join(" ")}>
      <td>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

ProductRow.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductRow;
