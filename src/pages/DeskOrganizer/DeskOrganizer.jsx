import CollectionPage from "../../components/CollectionPage/CollectionPage";
import deskOrganizer from "../../data/deskOrganizer";
import { Helmet } from "react-helmet-async";
import "../ProductPage.css";

function DeskOrganizer() {
  return (
    <>
      <Helmet>
        <title>
          Best Desk Organizers in India 2026 | Budget Finds Hub
        </title>

        <meta
          name="description"
          content="Compare the best desk organizers for students, professionals and home offices. Keep your workspace clean, organized and productive."
        />

        <meta
          name="keywords"
          content="best desk organizer, desk accessories, office desk organizer, study desk organizer, workspace organization"
        />
      </Helmet>

      <CollectionPage
        title="Best Desk Organizers"
        description="Keep your workspace neat and productive."
        products={deskOrganizer}
      />
    </>
  );
}

export default DeskOrganizer;