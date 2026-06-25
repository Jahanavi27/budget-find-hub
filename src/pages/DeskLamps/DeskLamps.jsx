import CollectionPage from "../../components/CollectionPage/CollectionPage";
import deskLamps from "../../data/deskLamps";
import { Helmet } from "react-helmet-async";
import "../ProductPage.css";

function DeskLamps() {
  return (
    <>
      <Helmet>
        <title>
          Best Desk Lamps in India 2026 | Budget Finds Hub
        </title>

        <meta
          name="description"
          content="Compare the best desk lamps for studying, reading, office work and productivity. Find budget-friendly LED desk lamps with adjustable brightness."
        />

        <meta
          name="keywords"
          content="best desk lamps, LED desk lamp, study lamp, reading lamp, desk light for students"
        />
      </Helmet>

      <CollectionPage
        title="Best Desk Lamps"
        description="Top desk lamps for students and professionals."
        products={deskLamps}
      />
    </>
  );
}

export default DeskLamps;