import "./ProductCard.css";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />
      </div>

      <div className="product-content">

        <p className="rating">
          ⭐ {product.rating}
        </p>
        
        <h2>{product.name}</h2>

        <p className="price">
          {product.price}
        </p>

        <Link
          to={`/product/${product.slug}`}
          className="details-btn"
        >
          View Details
        </Link>

      </div>
    </div>
  );
}

export default ProductCard;