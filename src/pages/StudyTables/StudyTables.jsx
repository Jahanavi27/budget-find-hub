import CollectionPage from "../../components/CollectionPage/CollectionPage";
import studyTables from "../../data/studyTables";
import "../ProductPage.css";
import { Helmet } from "react-helmet-async";

function StudyTables() {
  return (
    <>
      <Helmet>
        <title>
          Best Study Tables in India 2026 | Budget Finds Hub
        </title>

        <meta
          name="description"
          content="Discover the best study tables for students, home offices and productivity setups. Compare budget-friendly and space-saving study desks."
        />

        <meta
          name="keywords"
          content="best study tables, study desk, student study table, home office table, study furniture"
        />
      </Helmet>

      <CollectionPage
        title="Best Study Tables"
        description="Top study tables for students and home offices."
        products={studyTables}
      />
    </>
  );
}

export default StudyTables;