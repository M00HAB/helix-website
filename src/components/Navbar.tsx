import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "For Healthcare Professionals", to: "/healthcare" },
  { label: "For Patients", to: "/patients" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-primary shadow-lg">
      <div className="container-max flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Helix Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-accent ${location.pathname === link.to
                ? "text-accent"
                : "text-primary-foreground/80"
                }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-accent text-accent-foreground px-5 py-2 rounded-full text-sm font-semibold hover:brightness-110 transition"
          >
            Request Information
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-primary-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="lg:hidden bg-primary border-t border-primary-foreground/10 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`block px-6 py-3 text-sm font-medium transition-colors hover:text-accent ${location.pathname === link.to
                ? "text-accent"
                : "text-primary-foreground/80"
                }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="px-6 pt-2">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block text-center bg-accent text-accent-foreground px-5 py-2 rounded-full text-sm font-semibold hover:brightness-110 transition"
            >
              Request Information
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
