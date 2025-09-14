import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Test from "./components/test/TestPage";
import PartnersPage from "./pages/partners/PartnersPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AboutPresident from "./pages/AboutPresident";
import Logomuz from "./pages/Logomuz";
import PartnerDetailsPage from "./pages/partners/PartnerDetailsPage";
import FormPage from "./pages/FormPage";

export default function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/baskan-hakkinda" element={<AboutPresident />} />
        <Route path="/esit-isyerleri" element={<PartnersPage />} />
        <Route path="/detay/:id" element={<PartnerDetailsPage />} />

        <Route path="/test" element={<Test />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/iletisim" element={<Contact />} />
        <Route path="/logomuz" element={<Logomuz />} />
        <Route path="/form" element={<FormPage />} />


      </Routes>
    </Router>
  );
}
