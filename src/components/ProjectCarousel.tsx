import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

interface ProjectCarouselProps {
  projects: Project[];
}

const ProjectCarousel = ({ projects }: ProjectCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <div className="relative max-w-4xl mx-auto">
      <Card className="glass-card overflow-hidden group">
        <CardContent className="p-0">
          <div className="relative">
            <a 
              href={currentProject.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block relative overflow-hidden"
            >
              <img
                src={currentProject.image}
                alt={currentProject.title}
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ExternalLink className="w-12 h-12 text-primary" />
              </div>
            </a>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">{currentProject.title}</h3>
              <p className="text-muted-foreground mb-4">{currentProject.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {currentProject.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Buttons */}
      {projects.length > 1 && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-card/80 backdrop-blur"
            onClick={prevProject}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-card/80 backdrop-blur"
            onClick={nextProject}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </>
      )}

      {/* Dots Indicator */}
      {projects.length > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? "bg-primary w-8" 
                  : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectCarousel;
