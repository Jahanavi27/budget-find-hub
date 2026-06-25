import { Link } from "react-router-dom";
import allProducts from "../../data/allProducts";
import "./TopRecommendations.css";

function TopRecommendations() {

  const bestOverall = [...allProducts].sort(
    (a, b) => Number(b.rating) - Number(a.rating)
  )[0];

  const bestBudget = [...allProducts]
    .filter((product) => Number(product.rating) >= 4)
    .sort(
      (a, b) =>
        Number(a.price.replace(/[^\d]/g, "")) -
        Number(b.price.replace(/[^\d]/g, ""))
    )[0];

  const premiumChoice = [...allProducts].sort(
    (a, b) =>
      Number(b.price.replace(/[^\d]/g, "")) -
      Number(a.price.replace(/[^\d]/g, ""))
  )[0];

  return (
    <section className="top-recommendations">

      <h2>🏆 Best Deals Right Now</h2>

      <div className="recommendation-grid">

        <Link
          to={`/product/${bestOverall.slug}`}
          className="recommendation-card"
        >
          <span className="badge gold">
            🏆 Best Overall
          </span>

          <img
            src={bestOverall.image}
            alt={bestOverall.name}
          />

          <h3>{bestOverall.name}</h3>

          <p>{bestOverall.price}</p>
        </Link>

        <Link
          to={`/product/${bestBudget.slug}`}
          className="recommendation-card"
        >
          <span className="badge silver">
            🥈 Best Budget
          </span>

          <img
            src={bestBudget.image}
            alt={bestBudget.name}
          />

          <h3>{bestBudget.name}</h3>

          <p>{bestBudget.price}</p>
        </Link>

        <Link
          to={`/product/${premiumChoice.slug}`}
          className="recommendation-card"
        >
          <span className="badge premium">
            💎 Premium Choice
          </span>

          <img
            src={premiumChoice.image}
            alt={premiumChoice.name}
          />

          <h3>{premiumChoice.name}</h3>

          <p>{premiumChoice.price}</p>
        </Link>

      </div>

    </section>
  );
}

export default TopRecommendations;