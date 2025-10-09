import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "seu.email@exemplo.com",
      link: "mailto:seu.email@exemplo.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/seuperfil",
      link: "https://github.com/seuperfil",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/seuperfil",
      link: "https://linkedin.com/in/seuperfil",
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "São Paulo, Brasil",
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Vamos <span className="gradient-text">Conversar?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Estou sempre aberta a novas oportunidades e colaborações
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {contacts.map((contact, index) => (
            <Card 
              key={index} 
              className="glass-card hover:shadow-glow transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {contact.link ? (
                  <a 
                    href={contact.link}
                    target={contact.link.startsWith('http') ? '_blank' : undefined}
                    rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-4 group"
                  >
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <contact.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-1">{contact.label}</p>
                      <p className="font-medium group-hover:text-primary transition-colors">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <contact.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-1">{contact.label}</p>
                      <p className="font-medium">{contact.value}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
