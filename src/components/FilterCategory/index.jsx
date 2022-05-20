import React, { useState } from "react";

function FilterCategory() {
  const categories = ["Headphone", "Air Conditioner", "Television", "Router"];
  const [selectedCategory, setCategory] = useState("Headphone");

  return (
    <div>
      {categories.map((category) => (
        <button
          className={`btn py-2 px-4 fw-semibold me-3 ${
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
