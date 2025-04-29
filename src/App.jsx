// import Navbar from "./components/Footer";
import Hero from "./components/Hero";
import Header from "./components/Header";

import "./App.css";

import { motion } from "framer-motion";
import AboutSection from "./pages/AboutPage/AboutPage";

export default function App() {
  return (
    <div className="bg-[#f9f5f0] text-[#19231a] font-sans">
      <Header />
      <Hero />
      <AboutSection />

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-[#e6c693] px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-semibold mb-12 text-center text-[#19231a]">
            Programet tona
          </h3>
          <div className="grid gap-8 md:grid-cols-3">
            {["Gjuha Shqipe", "Matematika", "Arti dhe Kultura"].map(
              (program, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
                >
                  <h4 className="text-2xl font-bold mb-4 text-[#33673b]">
                    {program}
                  </h4>
                  <p className="text-gray-600">
                    Mësoni {program.toLowerCase()} me metoda bashkëkohore dhe
                    aktivitete praktike që zhvillojnë kreativitetin dhe
                    logjikën.
                  </p>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-6 text-[#33673b]">
            Na Kontaktoni
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Për më shumë informacion rreth regjistrimeve dhe programeve tona, na
            kontaktoni në email ose telefon.
          </p>
          <a
            href="mailto:info@shkollashqiptare.al"
            className="text-brown font-semibold hover:underline"
          >
            info@shkollashqiptare.al
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#33673b] text-white text-center p-6">
        &copy; 2025 Shkolla Shqiptare. Të gjitha të drejtat e rezervuara.
      </footer>
    </div>
  );
}
