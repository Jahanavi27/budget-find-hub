import "./TrustSection.css";

function TrustSection() {
  return (
    <section className="trust-section">

      <h2>Why Trust Budget Finds Hub?</h2>

      <div className="trust-grid">

        <div className="trust-card">
          <h3>✔ Honest Reviews</h3>
          <p>
            We recommend products based on value,
            features and user experience.
          </p>
        </div>

        <div className="trust-card">
          <h3>💰 Budget Friendly</h3>
          <p>
            Every product is selected to provide
            maximum value for money.
          </p>
        </div>

        <div className="trust-card">
          <h3>⭐ Top Rated Products</h3>
          <p>
            We focus on products with strong ratings
            and positive customer feedback.
          </p>
        </div>

        <div className="trust-card">
          <h3>🔄 Updated Regularly</h3>
          <p>
            Product recommendations are updated
            frequently.
          </p>
        </div>

      </div>

    </section>
  );
}

export default TrustSection;