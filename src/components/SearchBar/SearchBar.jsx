import { useState } from "react";
import { Link } from "react-router-dom";

function SearchBar({ products = [] }) {
  const [query, setQuery] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
        autoComplete="off"
      />

      {query && (
        <div className="search-results">
          {filteredProducts.length > 0 ? (
            filteredProducts.slice(0, 5).map((product) => (
              <Link
                key={product.slug}
                to={`/product/${product.slug}`}
                className="search-item"
              >
                {product.name}
              </Link>
            ))
          ) : (
            <p className="no-results">No products found.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchBar;