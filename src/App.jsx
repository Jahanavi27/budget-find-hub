import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import { HelmetProvider } from "react-helmet-async";

import Home from "./pages/Home/Home";
import CoolingPads from "./pages/CoolingPads/CoolingPads";
import Footer from "./components/Footer/Footer";
import LaptopStands from "./pages/LaptopStands/LaptopStands";
import StudyTables from "./pages/StudyTables/StudyTables";
import DeskLamps from "./pages/DeskLamps/DeskLamps";
import OfficeChairs from "./pages/OfficeChairsPage/OfficeChairsPage";
import DeskOrganizer from "./pages/DeskOrganizer/DeskOrganizer";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Privacy from "./pages/Privacy/Privacy";
import AffiliateDisclosure from "./pages/AffiliateDisclosure/AffiliateDisclosure";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import NotFound from "./pages/NotFound/NotFound";


function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>

        <Navbar />

        <Routes>

          <Route path="/" element={<Home />} />

          <Route
            path="/cooling-pads"
            element={<CoolingPads />}
          />
          <Route
            path="/laptop-stands"
            element={<LaptopStands />}
          />
          <Route
            path="/study-tables"
            element={<StudyTables />}
          />
          <Route
            path="/desk-lamps"
            element={<DeskLamps />}
          />
          <Route
            path="/office-chairs"
            element={<OfficeChairs />}
          />
          <Route
            path="/desk-organizers"
            element={<DeskOrganizer />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route
            path="/privacy"
            element={<Privacy/>}
          />
          <Route
            path="/affiliate-disclosure"
            element={<AffiliateDisclosure />}
          />
          <Route
            path="/product/:slug"
            element={<ProductDetails />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
        <Footer />

      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;

