import { Link } from "react-router-dom";
import allProducts from "../../data/allProducts";
import "./TopPicks.css";

function TopPicks() {

  const categories = [...new Set(
    allProducts.map((product) => product.category)
  )];

  const topProducts = categories.map((category) => {

    const categoryProducts = allProducts.filter(
      (product) => product.category === category
    );

    return categoryProducts.reduce((best, current) =>
      Number(current.rating) > Number(best.rating)
        ? current
        : best
    );

  });

  return (
    <section className="top-picks">

      <h2>🏆 Editor's Top Picks</h2>

      <div className="top-picks-grid">

        {topProducts.map((product) => (

          <Link
            key={product.id}
            to={`/product/${product.slug}`}
            className="top-pick-card"
          >

            <img
              src={product.image}
              alt={product.name}
            />

            <h3>{product.name}</h3>

            <p>⭐ {product.rating}</p>

            <p>{product.price}</p>

            <span className="top-category">
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

export default TopPicks;