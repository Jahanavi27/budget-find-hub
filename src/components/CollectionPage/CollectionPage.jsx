import "./CollectionPage.css";
import ProductCard from "../ProductCard/ProductCard";
import { useState } from "react";

function CollectionPage({
  title,
  description,
  products
}) {

  const [sortBy, setSortBy] = useState("default");
  const [brand, setBrand] = useState("all");
  const [budget, setBudget] = useState("all");

  const brands = [
    "all",
    ...new Set(products.map((p) => p.brand))
  ];

  const filteredProducts = products
    .filter((product) => {
      if (
        brand !== "all" &&
        product.brand !== brand
      ) {
        return false;
      }

      const price = Number(
        product.price.replace(/[₹,]/g, "")
      );

      if (
        budget === "under600" &&
        price >= 600
      ) {
        return false;
      }

      if (
        budget === "600to1000" &&
        (price < 600 || price > 1000)
      ) {
        return false;
      }

      if (
        budget === "above1000" &&
        price <= 1000
      ) {
        return false;
      }

      return true;
    })
    .sort((a, b) => {

      const priceA = Number(
        a.price.replace(/[₹,]/g, "")
      );

      const priceB = Number(
        b.price.replace(/[₹,]/g, "")
      );

      if (sortBy === "rating") {
        return b.rating - a.rating;
      }

      if (sortBy === "lowPrice") {
        return priceA - priceB;
      }

      if (sortBy === "highPrice") {
        return priceB - priceA;
      }

      return 0;
    });

  return (
    <div className="collection-page">

      <h1>{title}</h1>

      <p>{description}</p>

      <div className="filters">

        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value)
          }
        >
          <option value="default">
            Sort By
          </option>

          <option value="rating">
            Highest Rated
          </option>

          <option value="lowPrice">
            Price: Low to High
          </option>

          <option value="highPrice">
            Price: High to Low
          </option>

        </select>

        <select
          value={brand}
          onChange={(e) =>
            setBrand(e.target.value)
          }
        >
          {brands.map((item) => (
            <option
              key={item}
              value={item}
            >
              {item === "all"
                ? "All Brands"
                : item}
            </option>
          ))}
        </select>

        <select
          value={budget}
          onChange={(e) =>
            setBudget(e.target.value)
          }
        >
          <option value="all">
            All Prices
          </option>

          <option value="under600">
            Under ₹600
          </option>

          <option value="600to1000">
            ₹600 – ₹1000
          </option>

          <option value="above1000">
            Above ₹1000
          </option>

        </select>

      </div>
      <p className="results-count">
        Showing {filteredProducts.length} products
      </p>

      <div className="products-grid">

        {filteredProducts.length > 0 ? (

          filteredProducts.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
            />

          ))

        ) : (

          <p className="no-products">
            No products found.
          </p>

        )}

      </div>

    </div>
  );
}

export default CollectionPage;