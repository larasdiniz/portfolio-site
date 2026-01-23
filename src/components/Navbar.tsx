import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Início", href: "/" },
    { label: "Projetos", href: "#projects" },
    { label: "Experiências", href: "#professional" },
    { label: "Certificações", href: "#certifications" },
    { label: "NASA 2025", href: "/nasa" },
    { label: "Contato", href: "#contact" },
  ];

  const handleNavigation = (href: string) => {
    if (href === '/') {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (href.startsWith('/')) {
      // Para rotas completas como /nasa
      navigate(href);
    } else if (href.startsWith('#')) {
      // Para âncoras
      if (location.pathname === '/' || location.pathname === '/portfolio-site' || location.pathname === '/portfolio-site/') {
        // Estamos na página inicial, role para a seção
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: "smooth" });
      } else {
        // Estamos em outra página, navegue para a inicial com âncora
        navigate(`/${href}`);
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => {
              navigate('/');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity"
          >
            &lt;Dev/&gt;
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavigation(item.href)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavigation(item.href)}
                className="block w-full text-left py-3 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;