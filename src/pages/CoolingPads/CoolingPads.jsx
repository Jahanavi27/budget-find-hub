import CollectionPage from "../../components/CollectionPage/CollectionPage";
import { Helmet } from "react-helmet-async";
import coolingPads from "../../data/coolingPads";
import "../ProductPage.css";

function CoolingPads() {
  return (
    <>
      <Helmet>
        <title>
          Best Cooling Pads in India 2026 | Budget Finds Hub
        </title>

        <meta
          name="description"
          content="Compare the best cooling pads for gaming, study and office use."
        />
      </Helmet>

      <CollectionPage
        title="Best Cooling Pads"
        description="Top cooling pads for students and professionals."
        products={coolingPads}
      />
    
    <CollectionPage
      title="Best Cooling Pads"
      description="Top cooling pads for students and professionals."
      products={coolingPads}
    />
    </>
  );
}

export default CoolingPads;


