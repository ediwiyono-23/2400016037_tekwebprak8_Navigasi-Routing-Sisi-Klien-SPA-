import { Link } from "react-router-dom";
import fotoEdi from "../assets/Edi.jpg";

export default function Home() {
  return (
    <section className="w-full min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">

          <div>
            <span className="inline-block mb-4 px-3 py-1 text-sm font-semibold text-blue-400 bg-blue-400/10 rounded-full">
              Personal Portfolio
            </span>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Hi, I’m <span className="text-blue-500">Edi Wiyono</span> <br />
              Mahasiswa Sistem Informasi
            </h1>

            <p className="text-gray-300 mb-8 max-w-md">
              Aku seorang mahasiswa yang tertarik dalam pengembangan web dan teknologi.
              Saya suka belajar hal-hal baru dan menciptakan proyek-proyek yang menarik dan juga saya sedang belajar html, css, JavaScript, react.
            </p>

            <div className="flex gap-4">
              <Link
                to="/projects"
                className="px-6 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-lg font-semibold transition"
              >
                View Projects
              </Link>

              <Link
                to="/contact"
                className="px-6 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-lg font-semibold transition"
              >
                Kontak Saya
              </Link>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-6 bg-blue-500/20 rounded-2xl blur-2xl"></div>

              <img
                src={fotoEdi}
                alt="Edi Wiyono"
                className="relative w-72 h-72 md:w-80 md:h-80 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
