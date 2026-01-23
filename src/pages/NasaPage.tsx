import { ArrowLeft, Trophy, Users, Globe, Calendar, Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const NasaPage = () => {
  const navigate = useNavigate();

  // Dados da conquista
  const achievement = {
    title: "NASA Space Apps Challenge 2025",
    subtitle: "2025 Global Winners - Best Mission Concept",
    location: "Aracaju, Sergipe, Brasil",
    date: "Outubro 2025",
    team: ["Lara Diniz", "Laiza Leal", "Esthefany Muniz", "João Felipe", "Pedro Lucas", "Thayane Gisele"],
    description: "Nossa equipe fez história ao conquistar o título de 'Best Mission Concept' no NASA Space Apps Challenge 2025, tornando-nos os únicos vencedores globais do Brasil e os primeiros de Sergipe e Aracaju a alcançar essa conquista.",
    highlights: [
      {
        icon: Trophy,
        title: "Vencedores Globais",
        description: "Únicos do Brasil em 2025"
      },
      {
        icon: Globe,
        title: "Primeiros de Sergipe",
        description: "História sendo escrita"
      },
      {
        icon: Users,
        title: "Equipe Multidisciplinar",
        description: "Diversidade de talentos"
      }
    ],
    projectDetails: {
      name: "Projeto PureFlow",
      challenge: "Melhorar a observação e previsão de eventos climáticos extremos",
      solution: "Desenvolvemos uma solução inovadora utilizando inteligência artificial e dados satelitais para monitoramento climático em tempo real, com foco especial em regiões costeiras e áreas vulneráveis.",
      technologies: ["Python", "Machine Learning", "APIs NASA", "GIS", "Data Visualization", "Cloud Computing"]
    },
    mediaCoverage: [
      {
        outlet: "Times Brasil",
        title: "Estudantes de Aracaju vencem desafio global da NASA",
        link: "https://timesbrasil.com.br/brasil/estudantes-de-aracaju-vencem-desafio-global-da-nasa/",
        date: "Jan 2026"
      },
      {
        outlet: "Ministério da Ciência e Tecnologia",
        title: "Projeto de equipe brasileira vence como melhor conceito de missão do NASA Space Apps 2025",
        link: "https://www.gov.br/mcti/pt-br/acompanhe-o-mcti/noticias/2026/01/projeto-de-equipe-brasileira-vence-como-melhor-conceito-de-missao-do-nasa-space-apps-2025",
        date: "Jan 2026"
      },
      {
        outlet: "G1 Sergipe",
        title: "Estudantes sergipanos conquistam título de melhor conceito de missão da NASA",
        link: "https://g1.globo.com/se/sergipe/videos-setv-1-edicao/video/estudantes-sergipanos-conquistam-titulo-de-melhor-conceito-de-missao-da-nasa-14225373.ghtml",
        date: "Jan 2026"
      }
    ],
    gallery: [
      {
        id: 1,
        src: "/portfolio-site/hackthons/hack-nasa5.jpeg",
        alt: "Premiação NASA 2025",
        caption: "Cerimônia de premiação global"
      },
      {
        id: 2,
        src: "/portfolio-site/hackthons/hack-nasa2.jpeg",
        alt: "Equipe trabalhando",
        caption: "Desenvolvimento da solução"
      },
      {
        id: 3,
        src: "/portfolio-site/hackthons/hack-nasa1.jpeg",
        alt: "Apresentação do projeto",
        caption: "Pitch final para os jurados"
      },
      {
        id: 4,
        src: "/portfolio-site/hackthons/hack-nasa3.jpeg",
        alt: "Celebração da vitória",
        caption: "Momento histórico para Sergipe"
      },
      {
        id: 5,
        src: "/portfolio-site/hackthons/hack-nasa-pureflow.jpeg",
        alt: "Logo PureFlow",
        caption: "Logo oficial da equipe PureFlow"
      }
    ]
  };

  // SVG corrigido (usei template literal com crase)
  const starsPattern = `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C92AC' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-purple-950/20">
      {/* Header */}
      <header className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-blue-900/20 to-transparent z-0" />
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0" style={{ 
            backgroundImage: starsPattern,
            opacity: 0.2 
          }} />
        </div>
        
        <div className="container mx-auto relative z-10">
          <Button
            variant="ghost"
            className="mb-8 group"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Voltar para o portfólio
          </Button>

          <div className="max-w-4xl mx-auto">
            {/* Logo da Equipe PureFlow */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 p-2">
                <img 
                  src="/portfolio-site/hackthons/hack-nasa-pureflow.jpeg" 
                  alt="Logo PureFlow" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              
              <div className="text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <Trophy className="w-4 h-4" />
                  2025 Global Winners
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                  NASA Space Apps
                  <span className="block text-4xl md:text-6xl mt-2">Challenge</span>
                </h1>
                
                <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"></div>
                  <span className="text-lg font-medium text-white/80">Equipe PureFlow</span>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                </div>
                
                <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-2xl">
                  Fazendo história como os primeiros vencedores globais de Sergipe e únicos do Brasil em 2025
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center items-center text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{achievement.date}</span>
              </div>
              <div className="w-1 h-1 bg-muted-foreground/50 rounded-full" />
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <span>{achievement.location}</span>
              </div>
              <div className="w-1 h-1 bg-muted-foreground/50 rounded-full" />
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>Equipe de {achievement.team.length} pessoas</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-20">
        {/* Seção: Sobre a Conquista */}
        <section className="max-w-4xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Uma Conquista Histórica</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  No NASA Space Apps Challenge 2025, nossa equipe alcançou o que parecia impossível: 
                  fomos selecionados como <span className="font-bold text-white">Global Winners na categoria "Best Mission Concept"</span>, 
                  tornando-nos os únicos representantes do Brasil a conquistar esse título no ano.
                </p>
                <p>
                  Esta vitória é ainda mais significativa por ser a <span className="font-bold text-white">primeira vez na história</span> 
                  que uma equipe de Sergipe e Aracaju alcança o topo do maior hackathon do mundo.
                </p>
                <p>
                  Participaram mais de 57.000 pessoas em 186 países, com 5.900 projetos submetidos. 
                  Entre esses, apenas 30 equipes foram escolhidas como vencedoras globais, e nosso projeto 
                  foi um deles.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {achievement.highlights.map((highlight, index) => (
                <Card key={index} className="glass-card border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-purple-600 flex-shrink-0">
                        <highlight.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">{highlight.title}</h3>
                        <p className="text-muted-foreground">{highlight.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Seção: Detalhes do Projeto */}
        <section className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/30">
                <img 
                  src="/portfolio-site/hackthons/hack-nasa-pureflow.jpeg" 
                  alt="Logo PureFlow" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-3xl font-bold">O Projeto Vencedor</h2>
            </div>
            <p className="text-muted-foreground">Solução inovadora que impressionou os jurados da NASA</p>
          </div>

          <Card className="glass-card border-primary/20">
            <CardContent className="p-8">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                    <img 
                      src="/portfolio-site/hackthons/hack-nasa-pureflow.jpeg" 
                      alt="Logo PureFlow" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{achievement.projectDetails.name}</h3>
                    <p className="text-muted-foreground">{achievement.projectDetails.challenge}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold mb-3">Nossa Solução</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {achievement.projectDetails.solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold mb-3">Tecnologias Utilizadas</h4>
                  <div className="flex flex-wrap gap-2">
                    {achievement.projectDetails.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold mb-3">Equipe PureFlow</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {achievement.team.map((member, index) => (
                      <div
                        key={index}
                        className="text-center p-3 rounded-lg bg-gradient-to-b from-muted/30 to-muted/10 border border-border hover:border-primary/30 transition-colors group"
                      >
                        <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center">
                          <Users className="w-6 h-6 text-primary" />
                        </div>
                        <p className="font-medium text-sm group-hover:text-primary transition-colors">{member}</p>
                        <p className="text-xs text-muted-foreground">Membro da Equipe</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Seção: Galeria */}
        <section className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Momentos Memoráveis</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievement.gallery.map((photo) => (
              <div 
                key={photo.id} 
                className="group relative rounded-xl overflow-hidden bg-muted/20 border border-border hover:border-primary/30 transition-all duration-300"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-medium text-sm">{photo.caption}</p>
                </div>
                {/* Badge para a logo */}
                {photo.id === 5 && (
                  <div className="absolute top-3 left-3 px-2 py-1 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-medium">
                    Logo Oficial
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Seção: Na Mídia */}
        <section className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Na Mídia</h2>
          
          <div className="space-y-4">
            {achievement.mediaCoverage.map((article, index) => (
              <a
                key={index}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <Card className="glass-card hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                            {article.outlet}
                          </span>
                          <span className="text-sm text-muted-foreground">{article.date}</span>
                        </div>
                        <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                          {article.title}
                        </h3>
                      </div>
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </section>

        {/* Seção: Reconhecimento */}
        <section className="max-w-4xl mx-auto">
          <Card className="glass-card bg-gradient-to-br from-purple-950/30 to-blue-950/30 border-primary/30">
            <CardContent className="p-8 text-center">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white/30 mb-4">
                  <img 
                    src="/portfolio-site/hackthons/hack-nasa-pureflow.jpeg" 
                    alt="Logo PureFlow" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <Award className="w-16 h-16 mx-auto mb-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Reconhecimento Internacional</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Esta conquista não é apenas uma vitória pessoal, mas um marco para a 
                comunidade tecnológica de Sergipe e do Nordeste brasileiro. Demonstra 
                que o talento e a inovação não têm fronteiras geográficas.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-medium">
                  Primeiros de Sergipe
                </span>
                <span className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-medium">
                  Únicos do Brasil em 2025
                </span>
                <span className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-600 to-emerald-600 text-white text-sm font-medium">
                  Melhor Conceito de Missão
                </span>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/20">
              <img 
                src="/portfolio-site/hackthons/hack-nasa-pureflow.jpeg" 
                alt="Logo PureFlow" 
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-muted-foreground text-sm">
              © 2025 NASA Space Apps Challenge - Global Winners. 
              <span className="block mt-1">
                Projeto desenvolvido pela equipe <span className="font-bold text-white">PureFlow</span> - orgulhosamente sergipana.
              </span>
            </p>
          </div>
          <div className="mt-6">
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NasaPage;