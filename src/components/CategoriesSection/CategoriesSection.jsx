import { Link } from "react-router-dom";
import "./CategoriesSection.css";

function CategoriesSection() {

  const categories = [
    {
      name: "Cooling Pads",
      image: "images/categories/coolingpads.webp",
      link: "/cooling-pads"
    },
    {
      name: "Laptop Stands",
      image: "images/categories/laptopstand.webp",
      link: "/laptop-stands"
    },
    {
      name: "Study Tables",
      image: "images/categories/studytable.webp",
      link: "/study-tables"
    },
    {
      name: "Desk Lamps",
      image: "images/categories/desklamps.webp",
      link: "/desk-lamps"
    },
    {
      name: "Office Chairs",
      image: "https://picsum.photos/400/250?random=105",
      link: "/office-chairs"
    },
    {
      name: "Desk Organizers",
      image: "https://picsum.photos/400/250?random=106",
      link: "/desk-organizer"
    }
  ];

  return (
    <section 
      id="categories"
      className="categories-section"
    >

      <h2>Browse Categories</h2>

      <div className="categories-grid">

        {categories.map((category, index) => (

          <Link
            key={index}
            to={category.link}
            className="category-card"
          >

            <img
              src={category.image}
              alt={category.name}
            />

            <h3>{category.name}</h3>

            <button>
              Explore →
            </button>

          </Link>

        ))}

      </div>

    </section>
  );
}

export default CategoriesSection;