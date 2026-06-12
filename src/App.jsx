import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ReportIssue from "./pages/ReportIssue";
import IssueDetail from "./pages/IssueDetail";
import AdminDashboard from "./pages/AdminDashboard";
import Support from "./pages/Support";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import CountyPage from "./pages/CountyPage";
import Authorities from "./pages/Authorities";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report" element={<ReportIssue />} />
        <Route path="/issue/:id" element={<IssueDetail />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/support" element={<Support />} />
        <Route path="/about" element={<About />} />
        <Route path="/authorities" element={<Authorities />} />
        <Route path="/county/:county" element={<CountyPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}