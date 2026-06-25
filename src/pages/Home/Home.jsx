import "./Home.css";
import CategoryCards from "../../components/CategoryCards/CategoryCards";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import TopPicks from "../../components/TopPicks/TopPicks";
import TopRecommendations from "../../components/TopRecommendations/TopRecommendations";
import CategoriesSection from "../../components/CategoriesSection/CategoriesSection";
import TrustSection from "../../components/TrustSection/TrustSection";
import Testimonials from "../../components/Testimonials/Testimonials";
import { Helmet } from "react-helmet-async";


function Home() {
  return (
    
    <div className="home">
      <Helmet>

        <title>
        Best Budget Products For Students & Professionals | Budget Finds Hub
        </title>

        <meta
        name="description"
        content="Discover the best budget cooling pads, laptop stands, desk lamps, study tables, office chairs and productivity accessories."
        />

        <meta
        name="keywords"
        content="budget products, student essentials, cooling pads, laptop stands, desk lamps"
        />

        <meta
        property="og:title"
        content="Budget Finds Hub"
        />

        <meta
        property="og:description"
        content="Best budget products and buying guides."
        />

        <meta
        property="og:type"
        content="website"
        />

      </Helmet>
      <section className="hero">

        <div className="hero-content">

          <h1>
            Best Budget Products
            For Students & Professionals
          </h1>

          <p>
            Discover carefully selected cooling pads,
            laptop stands, study tables, desk lamps,
            and productivity essentials that deliver
            maximum value for money.
          </p>

          <a
            href="#categories"
            className="hero-btn"
          >
            Explore Products →
          </a>

          <div className="hero-stats">

            <div>
              <h3>20+</h3>
              <span>Products</span>
            </div>

            <div>
              <h3>6</h3>
              <span>Categories</span>
            </div>

            <div>
              <h3>100%</h3>
              <span>Budget Focused</span>
            </div>

          </div>

        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
            alt="Products"
          />
        </div>

      </section>
      <TopPicks />
      
      <TopRecommendations />
      <FeaturedProducts />
      <CategoriesSection />
      <TrustSection />
      <Testimonials />
      
    </div>
  );
}

export default Home;

