import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <h3>Budget Finds Hub</h3>

      <p>
        Helping you discover the best budget-friendly 
        products for study, work, and everyday use.
      </p>

      <div className="footer-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/about">
          About
        </Link>

        <Link to="/contact">
          Contact
        </Link>

        <Link to="/privacy">
          Privacy Policy
        </Link>

        <Link to="/affiliate-disclosure">
          Affiliate Disclosure
        </Link>

      </div>

      <p className="disclaimer">
        As an Amazon Associate, we may earn from
        qualifying purchases at no extra cost to you.
      </p>
      <p className="copyright">
        © 2026 Budget Finds Hub
      </p>

    </footer>
  );
}

export default Footer;