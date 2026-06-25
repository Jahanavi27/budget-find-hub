import { useParams, Link } from "react-router-dom";
import allProducts from "../../data/allProducts";
import ComparisonTable from "../../components/ComparisonTable/ComparisonTable";
import "./ProductDetails.css";
import { FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import { Helmet } from "react-helmet-async";


function ProductDetails() {
  const { slug } = useParams();

  const [openFAQ, setOpenFAQ] = useState(null);

  const product = allProducts.find(
    (item) => item.slug === slug
  );

  if (!product) {
    return (
      <h1 className="not-found">
        Product Not Found
      </h1>
    );
  }

  const compareProduct = allProducts.find(
    (item) => 
    item.category === product.category &&
    item.slug !== product.slug
  );

  const setupProducts = allProducts
  .filter(
    (item) =>
      item.category !== product.category
  )
  .sort(() => Math.random() - 0.5)
  .slice(0, 3);
  
  return (
    <div className="product-details">
      <Helmet>
        <title>
          {product.name} Review, Price & Features | Budget Finds Hub
        </title>

        <meta
          name="description"
          content={product.description}
        />

        <meta
          name="keywords"
          content={`${product.name}, ${product.category}, best budget products`}
        />

        <meta
          property="og:title"
          content={`${product.name} | Budget Finds Hub`}
        />

        <meta
          property="og:description"
          content={product.description}
        />

        <meta
          property="og:image"
          content={product.image}
        />

        <meta
          property="og:type"
          content="website"
        />
      </Helmet>
      <div className="breadcrumb">

        <Link to="/">
          Home
        </Link>

        <FaChevronRight  className="separator-icon" />

        <Link to={`/${product.category}`}>
          {product.category}
        </Link>

        <FaChevronRight  className="separator-icon" />

        <span>
          {product.name}
        </span>

      </div>
      <div className="product-top">

        <div className="left-column">

          <div className="image-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
          </div>

          <div className="quick-info-card">

            <h3>Quick Overview</h3>

            <div className="quick-item">
              <span>🏷 Brand</span>
              <strong>
                {product.specifications?.brand || "-"}
              </strong>
            </div>

            <div className="quick-item">
              <span>🌀 Fans</span>
              <strong>
                {product.specifications?.fanCount || "-"}
              </strong>
            </div>

            <div className="quick-item">
              <span>💻 Laptop Size</span>
              <strong>
                {product.specifications?.laptopsize || "-"}
              </strong>
            </div>

            <div className="quick-item">
              <span>🎯 Best For</span>
              <strong>
                {product.recommendedFor?.[0] || "-"}
              </strong>
            </div>

          </div>

          <div className="verdict-card">

            <h3>⭐ Our Verdict</h3>

            <p>
              {product.name} is one of the best value-for-money choices in this category.
            </p>

            <ul>
              {product.pros?.slice(0, 3).map((pro, index) => (
                <li key={index}>
                  ✔ {pro}
                </li>
              ))}
            </ul>

          </div>

        </div>

        
        <div className="product-info">

          <h1>
            {product.name}
            
          </h1>

          <p className="rating">
            ⭐ {product.rating}
          </p>

          <div className="price-card">
            <p className="limited-note">
            🔥 Best Price Available Today
            </p>
            <span className="price-label">
              Price on Amazon
            </span>

            <h2 className="product-price">
              {product.price}
            </h2>

            <span className="price-update">
              Updated June 2026
            </span>
          </div>

          <a
            href={product.affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="buy-btn"
          >
            Check Latest Price on Amazon →
          </a>
          
          <div className="trust-badges">

              <div className="badge">
                  🏆 Best Budget Pick
              </div>

              <div className="badge">
                  ✓ Verified Product
              </div>

              <div className="badge">
                  🔄 Updated 2026
              </div>

          </div>
          <p className="description">
            {product.description}
          </p>

          <div className="highlight-box">
            <h3>Key Highlights</h3>

            <ul>
              {product.features?.slice(0,4).map((feature,index)=>(
                <li key={index}>⚡ {feature}</li>
              ))}
            </ul>
          </div>
          <div className = "pros-cons-container">
            <div className="pros-box"> 
              <h3>Pros</h3>

              <ul>
                {product.pros?.map((pro, index) => (
                  <li key={index}>
                    ✅ {pro}
                  </li>
                ))}
              </ul>
            </div>

            <div className="cons-box">
              <h3>Cons</h3>

              <ul>
                {product.cons?.map((con, index) => (
                  <li key={index}>
                    ❌ {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <h3>Recommended For</h3>

          <ul>
            {product.recommendedFor?.map((user,index)=>(
              <li key={index}>
                ✅ {user}
              </li>
            ))}
          </ul>
          <div className="recommend-box">

            <h3>
              Why We Recommend This Product
            </h3>

            <p>
              This product offers excellent value
              for money and is suitable for
              students, professionals and daily users.
            </p>

          </div>

          <h3>
          Specifications
          </h3>

          <table className="spec-table">

          

          

          <tbody>

            {product.specifications?.brand && (
              <tr>
                <td>Brand</td>
                <td>{product.specifications.brand}</td>
              </tr>
            )}

            {product.specifications?.fanCount && (
              <tr>
                <td>Fan Count</td>
                <td>{product.specifications.fanCount}</td>
              </tr>
            )}

            {product.specifications?.laptopsize && (
              <tr>
                <td>Laptop Size</td>
                <td>{product.specifications.laptopsize}</td>
              </tr>
            )}

            {product.specifications?.usbPorts && (
              <tr>
                <td>USB Ports</td>
                <td>{product.specifications.usbPorts}</td>
              </tr>
            )}

            {product.specifications?.weight && (
              <tr>
                <td>Weight</td>
                <td>{product.specifications.weight}</td>
              </tr>
            )}

          

          </tbody>
          

          </table>
          
        </div>

      </div>

      <h2 className="related-title">
        Related Products
      </h2>

      <div className="related-products">

        {allProducts
          .filter(
            (item) => 
            item.category === product.category &&
            item.slug !== product.slug)
          .slice(0, 3)
          .map((item) => (

            <Link
              key={item.slug}
              to={`/product/${item.slug}`}
              className="related-card"
            >

              <img
                src={item.image}
                alt={item.name}
              />

              <h4>{item.name}</h4>

              <p className="related-rating">
                ⭐ {item.rating}
              </p>

              <p className="related-price">
                {item.price}
              </p>

              <span className="related-btn">
                View Details
              </span>

            </Link>

        ))}

      </div>
      <h2 className="alternative-title">
        Explore More Products
      </h2>

      <div className="alternatives-container">
        {setupProducts.map((item) => (
          
            <Link
              key={item.slug}
              to={`/product/${item.slug}`}
              className="alternative-card"
            >
              <img
                src={item.image}
                alt={item.name}
              />

              <h4>{item.name}</h4>

              <p>⭐ {item.rating}</p>

              <p className="alt-price">
                {item.price}
              </p>

              <span className="alt-badge">
                {item.category.replace("-", " ").toUpperCase()}
              </span>
              <span className="alt-view-btn">
                View Details →
              </span>
            </Link>
          ))}
      </div>
      {compareProduct && (
        <ComparisonTable
          currentProduct={product}
          compareProduct={compareProduct}
        />
      )}
      {product.faq?.length > 0 && (
      

      
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>

        {product.faq.map((item, index) => (
          <div key={index} className="faq-item">

            <div
              className="faq-question"
              onClick={() =>
                setOpenFAQ(openFAQ === index ? null : index)
              }
            >
              <span>{item.question}</span>

              <span className="faq-icon">
                {openFAQ === index ? "−" : "+"}
              </span>
            </div>

            {openFAQ === index && (
              <div className="faq-answer">
                {item.answer}
              </div>
            )}

          </div>
        ))}
      </div>

      
      )}
      <a
      href={product.affiliateLink}
      target="_blank"
      rel="noopener noreferrer"
      className="sticky-buy"
      >

      Buy Now

      </a>

    </div>
  );
}

export default ProductDetails;