import "./About.css";

function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1>About Budget Finds Hub</h1>

        <p>
          Budget Finds Hub helps students, professionals, and everyday shoppers
          discover the best products without overspending.
        </p>

        <p>
          We research, compare, and recommend top-rated gadgets, study
          accessories, workspace essentials, and productivity tools.
        </p>

        <p>
          Our goal is simple: save your time, save your money, and help you make
          smarter buying decisions.
        </p>

        <div className="about-box">
          <h2>Our Mission</h2>

          <p>
            Our mission is to help students and budget-conscious shoppers
            discover the best value products without spending hours researching.
          </p>
        </div>

        <div className="about-box">
          <h2>How We Select Products</h2>

          <p>
            We compare ratings, reviews, features, pricing, and real user
            feedback before recommending any product.
          </p>
        </div>

        <div className="about-box">
          <h2>Affiliate Disclosure</h2>

          <p>
            Some links on this website are affiliate links. If you purchase
            through these links, we may earn a small commission at no extra
            cost to you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;