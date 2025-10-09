import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import ProfessionalExperience from "@/components/ProfessionalExperience";
import ExperienceSection from "@/components/ExperienceSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProjectsSection />
      <ProfessionalExperience />
      <ExperienceSection />
      <CertificationsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 Portfólio Desenvolvedor. Feito com ❤️ e código.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
