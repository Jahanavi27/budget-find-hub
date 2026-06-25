import CollectionPage from "../../components/CollectionPage/CollectionPage";
import officeChairs from "../../data/officeChairs";
import { Helmet } from "react-helmet-async";
import "../ProductPage.css";

function OfficeChairs() {
  return (
    <>
      <Helmet>
        <title>
          Best Office Chairs in India 2026 | Budget Finds Hub
        </title>

        <meta
          name="description"
          content="Compare the best ergonomic office chairs for work, study and gaming. Find comfortable office chairs with lumbar support and adjustable features."
        />

        <meta
          name="keywords"
          content="best office chairs, ergonomic office chair, office chair for work from home, study chair, gaming chair"
        />
      </Helmet>

      <CollectionPage
        title="Best Office Chairs"
        description="Top ergonomic office chairs for a comfortable work environment."
        products={officeChairs}
      />
    </>
  );
}

export default OfficeChairs;