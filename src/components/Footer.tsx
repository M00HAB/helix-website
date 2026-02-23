import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-1 mb-4">
              <span className="text-xl font-bold">Helix</span>
              <span className="text-accent text-xl font-bold">°</span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Advanced mineral technology supporting the skin's recovery environment.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">Home</Link>
              <Link to="/healthcare" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">For Healthcare Professionals</Link>
              <Link to="/patients" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">For Patients</Link>
              <Link to="/contact" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">Contact</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <p className="text-sm text-primary-foreground/60">info@helixmcc.com</p>
            <p className="text-sm text-primary-foreground/60 mt-1">Saudi Arabia</p>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Helix° MCC Technology. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
