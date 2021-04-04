import React, { useState } from "react";

import Filter from "./components/Filter";
import ProductTable from "./components/ProductTable";

import products from "./data";
import "./scss/index.scss";

export default function Philospohy() {
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [filterText, setFilterText] = useState("");

  let filter = products.filter((p) => {
    if (filterText && p.name.indexOf(filterText) === -1) {
      return;
    }

    if (onlyInStock && !p.stocked) {
      return;
    }

    return true;
  });

  return (
    <>
      <h1>Philosophy</h1>
      <Filter
        onlyInStock={onlyInStock}
        setOnlyInStock={setOnlyInStock}
        filterText={filterText}
        setFilterText={setFilterText}
      />
      <ProductTable products={filter} />
    </>
  );
}
