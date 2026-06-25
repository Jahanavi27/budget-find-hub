import { Link } from "react-router-dom";
import allProducts from "../../data/allProducts";
import "./FeaturedProducts.css";

function FeaturedProducts() {

  const featuredProducts = [];

  const categories = [
    "cooling-pads",
    "laptop-stands",
    "study-tables",
    "desk-lamps"
  ];

  categories.forEach((category) => {

    const product = allProducts
      .filter(
        (item) =>
          item.category === category &&
          Number(
            item.price?.replace(/[^\d]/g, "") || 0
          ) <= 1000
      )
      .sort(
        (a, b) =>
          Number(b.rating) - Number(a.rating)
      )[0];

    if (product) {
      featuredProducts.push(product);
    }

  });

  return (
    <section className="featured-products">

      <h2>
        🔥 Best Budget Products Under ₹1000
      </h2>

      <div className="featured-grid">

        {featuredProducts.map((product) => (

          <Link
            key={product.id}
            to={`/product/${product.slug}`}
            className="featured-card"
          >

            <img
              src={product.image}
              alt={product.name}
            />

            <h3>{product.name}</h3>

            <p className="featured-rating">
              ⭐ {product.rating}
            </p>

            <p className="featured-price">
              {product.price}
            </p>

            <span className="featured-category">
              {product.category
                .replace("-", " ")
                .toUpperCase()}
            </span>

          </Link>

        ))}

      </div>

    </section>
  );
}

export default FeaturedProducts;