import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Users, Trophy } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      icon: Award,
      title: "Mentora - Maratona de Inovação do Bem (MIB)",
      period: "2023 - Presente",
      description: "Mentoria de equipes em hackathon voltado para inovação social, auxiliando no desenvolvimento de soluções tecnológicas para problemas reais da comunidade.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: BookOpen,
      title: "Monitora de Java",
      period: "Jun 2025 - Presente",
      description: "Monitoria acadêmica da disciplina de Programação Orientada a Objetos em Java, auxiliando alunos em conceitos, projetos e resolução de exercícios.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Diretoria da Atlética",
      period: "Mar 2025 - Set 2025",
      description: "Membro da diretoria da atlética universitária, desenvolvendo habilidades de liderança, gestão de eventos e trabalho em equipe.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Trophy,
      title: "Participante de Hackathons",
      period: "2023 - Presente",
      description: "Participação ativa em diversos hackathons, desenvolvendo soluções criativas em tempo limitado e colaborando com equipes multidisciplinares.",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experiências & <span className="gradient-text">Atividades</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Além do código, participação em mentorias, eventos e liderança
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="glass-card hover:shadow-glow transition-all duration-300 animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${exp.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <exp.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                <p className="text-sm text-primary mb-3">{exp.period}</p>
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Hackathons Gallery Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">Momentos</span> dos Hackathons
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[1, 2, 3, 4].map((i) => (
              <div 
                key={i} 
                className="aspect-square rounded-lg bg-muted/20 border border-border flex items-center justify-center hover:scale-105 transition-transform duration-300"
              >
                <div className="text-center p-4">
                  <Trophy className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <p className="text-xs text-muted-foreground">Foto #{i}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Adicione suas fotos aqui
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
