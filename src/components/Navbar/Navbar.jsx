import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import allProducts from "../../data/allProducts";


function Navbar() {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <nav className="navbar">

      <NavLink to="/" className="logo">
        Budget Finds Hub
      </NavLink>
      <div className="search-container">

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
          autoComplete="off"
        />

        {search && (
          <div className="search-results">

            {filteredProducts.slice(0, 5).map((product) => (

              <div
                key={product.id}
                className="search-item"
                onClick={() => {
                  navigate(`/product/${product.slug}`);
                  setSearch("");
                }}
              >
                {product.name}
              </div>

            ))}

          </div>
        )}

      </div>
      <ul className="nav-links">

        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        
        <div className="dropdown">
          <span>Categories ▾</span>

          <div className="dropdown-menu">

            <NavLink to="/cooling-pads">
              Cooling Pads
            </NavLink>

            <NavLink to="/laptop-stands">
              Laptop Stands
            </NavLink>

            <NavLink to="/study-tables">
              Study Tables
            </NavLink>

            <NavLink to="/desk-lamps">
              Desk Lamps
            </NavLink>

            <NavLink to="/office-chairs">
              Office Chairs
            </NavLink>

            <NavLink to="/desk-organizer">
              Desk Organizers
            </NavLink>

          </div>
        </div>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;

