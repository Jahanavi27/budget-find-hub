import "./Testimonials.css";

function Testimonials() {

  const reasons = [
    {
      icon: "⭐",
      title: "Rating Analysis",
      description:
        "We shortlist products with strong ratings and positive customer feedback."
    },
    {
      icon: "💰",
      title: "Value For Money",
      description:
        "Our focus is on budget-friendly products that offer the best features."
    },
    {
      icon: "🔍",
      title: "Feature Comparison",
      description:
        "Products are compared based on specifications, usability, and overall value."
    },
    {
      icon: "🔄",
      title: "Regular Updates",
      description:
        "Recommendations are reviewed and updated to keep information relevant."
    }
  ];

  return (
    <section className="testimonials">

      <h2>How We Select Products</h2>

      <div className="testimonial-grid">

        {reasons.map((item, index) => (

          <div
            key={index}
            className="testimonial-card"
          >

            <div className="reason-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Testimonials;