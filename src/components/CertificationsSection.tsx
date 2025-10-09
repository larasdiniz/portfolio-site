import { Card, CardContent } from "@/components/ui/card";
import { Award, ExternalLink } from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    {
      name: "Nome do Certificado 1",
      issuer: "Instituição Emissora",
      date: "Mês/Ano",
      link: "https://example.com/certificate1",
    },
    {
      name: "Nome do Certificado 2",
      issuer: "Instituição Emissora",
      date: "Mês/Ano",
      link: "https://example.com/certificate2",
    },
    {
      name: "Nome do Certificado 3",
      issuer: "Instituição Emissora",
      date: "Mês/Ano",
      link: "https://example.com/certificate3",
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Certificações</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Cursos e certificados que complementam minha formação
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="glass-card hover:shadow-glow transition-all duration-300 animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {cert.name}
                    </h3>
                    <p className="text-muted-foreground font-medium mb-1">
                      {cert.issuer}
                    </p>
                    <p className="text-sm text-muted-foreground mb-3">
                      {cert.date}
                    </p>
                    
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                      >
                        Ver certificado
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
