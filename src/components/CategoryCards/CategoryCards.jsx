import { Link } from "react-router-dom";
import "./CategoryCards.css";

function CategoryCards() {
  const categories = [
    {
      title: "Cooling Pads",
      path: "/cooling-pads",
      icon: "❄️"
    },
    {
      title: "Laptop Stands",
      icon: "💻",
      path: "/laptop-stands"
    },
    {
      title: "Study Tables",
      icon: "📚",
      path: "/study-tables"
    },
    {
      title: "Desk Lamps",
      icon: "💡",
      path: "/desk-lamps"
    },
    {
      title: "Office Chairs",
      icon: "💺",
      path: "/office-chairs"
    }
  ];

  return (
    <section className="categories-section">

      <h2>Browse Categories</h2>

      <div className="categories-grid">

        {categories.map((category, index) => (
          <Link
            key={index}
            to={category.path}
            className="category-card"
          >
            <div className="category-icon">
              {category.icon}
            </div>

            <h3>{category.title}</h3>
          </Link>
        ))}

      </div>

    </section>
  );
}

export default CategoryCards;

