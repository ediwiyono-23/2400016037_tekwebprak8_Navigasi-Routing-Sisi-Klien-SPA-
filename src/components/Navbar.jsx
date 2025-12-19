import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  const baseClass =
    'px-4 py-2 rounded-lg border transition';

  const activeClass =
    'border-blue-500 text-blue-500';

  const inactiveClass =
    'border-gray-500 text-gray-300 hover:border-blue-400 hover:text-blue-400';

  return (
    <nav className="flex items-center gap-4 px-8 py-4 bg-slate-900 shadow-md">
      <Link
        to="/"
        className={`${baseClass} ${
          location.pathname === '/' ? activeClass : inactiveClass
        }`}
      >
        Beranda
      </Link>

      <Link
        to="/projects"
        className={`${baseClass} ${
          location.pathname === '/projects' ? activeClass : inactiveClass
        }`}
      >
        Proyek
      </Link>

      <Link
        to="/contact"
        className={`${baseClass} ${
          location.pathname === '/contact' ? activeClass : inactiveClass
        }`}
      >
        Kontak Saya
      </Link>
    </nav>
  );
}

export default Navbar;
