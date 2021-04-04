import React from "react";

export default function Filter({
  onlyInStock,
  setOnlyInStock,
  filterText,
  setFilterText,
}) {
  return (
    <form>
      <fieldset>
        <input
          type="text"
          placeholder="search"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
        <br />
        <label>
          <input
            type="checkbox"
            checked={onlyInStock}
            onChange={(e) => setOnlyInStock(e.target.checked)}
          />{" "}
          Only in stock
        </label>
      </fieldset>
    </form>
  );
}
