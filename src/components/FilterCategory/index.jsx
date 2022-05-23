import React, { useState } from "react";
import "./index.css";

function FilterCategory(props) {
  const categories = ["Headphone", "Speaker", "Television", "Printer"];
  const [selectedCategory, setCategory] = useState("Headphone");

  props.handleClickCategory(selectedCategory);

  return (
    <div className="filter-category-wrapper px-2 py-4">
      {categories.map((category) => (
        <button
          className={`btn py-2 px-4 fw-semibold me-2 me-md-3 ${
            category === selectedCategory
              ? "btn-primary text-light shadow"
              : "text-lightgray"
          }`}
          key={category}
          onClick={() => setCategory(category)}
          autoFocus={false}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default FilterCategory;
