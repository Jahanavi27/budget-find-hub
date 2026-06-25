import CollectionPage from "../../components/CollectionPage/CollectionPage";
import laptopStands from "../../data/laptopStands";
import "../ProductPage.css";
import { Helmet } from "react-helmet-async";

function LaptopStands() {
  return (
    <>
      <Helmet>
        <title>
          Best Laptop Stands in India 2026 | Budget Finds Hub
        </title>

        <meta
          name="description"
          content="Compare the best laptop stands for students, professionals, remote workers and programmers. Find ergonomic and adjustable laptop stands at the best prices."
        />

        <meta
          name="keywords"
          content="best laptop stands, adjustable laptop stand, ergonomic laptop stand, laptop stand for students"
        />
      </Helmet>

      <CollectionPage
        title="Best Laptop Stands"
        description="Top laptop stands for students and professionals."
        products={laptopStands}
      />
    </>
  );
}

export default LaptopStands;