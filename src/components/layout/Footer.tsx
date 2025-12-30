import { Link } from "react-router-dom";
import { Linkedin, Twitter, Github } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground relative z-10">
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-display text-2xl font-bold text-primary-foreground">
            <img src={logo} alt="NUO Logo" className="inline-block h-8 w-auto mr-2 -mt-1"/>
              NUO<span className="text-accent">.</span>
            </Link>
            <p className="text-sm text-primary-foreground/70 mt-4 max-w-xs leading-relaxed">
              Building tomorrow's digital solutions with precision engineering and creative thinking.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-6">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/70 hover:text-accent hover:border-accent hover:rotate-6 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/70 hover:text-accent hover:border-accent hover:rotate-6 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/70 hover:text-accent hover:border-accent hover:rotate-6 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs uppercase tracking-wider text-primary-foreground/50 mb-5 font-medium">Navigation</p>
            <div className="flex flex-col gap-3">
              <Link to="/" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Home</Link>
              <Link to="/about" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">About</Link>
              <Link to="/services" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Services</Link>
              <Link to="/work" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Work</Link>
              <Link to="/contact" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Contact</Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs uppercase tracking-wider text-primary-foreground/50 mb-5 font-medium">Services</p>
            <div className="flex flex-col gap-3">
              <span className="text-sm text-primary-foreground/70">Product Design</span>
              <span className="text-sm text-primary-foreground/70">Development</span>
              <span className="text-sm text-primary-foreground/70">Consulting</span>
              <span className="text-sm text-primary-foreground/70">Strategy</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs uppercase tracking-wider text-primary-foreground/50 mb-5 font-medium">Contact</p>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
              <p>contactus@NuoFinTech.com</p>
              <p>+91 6360395817 </p>
              <address className="mt-2 not-italic text-muted-foreground leading-relaxed">
                    VO-218, WeWork Salarpuria Magnificia,
                    Tin Factory, #78 Old Madras Road,
                    Mahadevapura, Next to KR Puram,
                    Doorvani Nagar, Bengaluru - 560016,
                    Karnataka, India
            </address>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/50">
            © 2024 Nuo Tech. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-primary-foreground/50 hover:text-primary-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-primary-foreground/50 hover:text-primary-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;