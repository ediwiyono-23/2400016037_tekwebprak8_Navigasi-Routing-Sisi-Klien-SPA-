import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-full min-h-screen bg-slate-900">
      {/* Navbar tetap ada di semua halaman */}
      <Navbar />

      {/* Area halaman (full width) */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />

        {/* 404 */}
        <Route
          path="*"
          element={
            <div className="text-center mt-10 text-white">
              404 - Halaman Tidak Ditemukan
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
