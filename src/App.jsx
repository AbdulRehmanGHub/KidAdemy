import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MathMagic from "./pages/MathMagic";
import LanguageFun from "./pages/LanguageFun";
import ScrollTop from "./components/ScrollTop";
import NoPage from "./pages/NoPage";
import ScrollToTopButton from "./components/ScrollToTopButton";

export default function App() {
  return (
    <div className="min-h-screen">
      <Router>
        <ScrollTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/math-magic" element={<MathMagic />} />
          <Route path="/language-fun" element={<LanguageFun />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
        <ScrollToTopButton />
        <Footer />
      </Router>
    </div>
  );
}
