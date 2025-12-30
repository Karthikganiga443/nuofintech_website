import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/effects/AnimatedSection";
import RevealText from "@/components/effects/RevealText";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ArrowRight, ExternalLink } from "lucide-react";

const categories = ["All", "Web Apps", "Fintech", "Prediction Markets"];


const projects = [
  {
id: 1,
title: "Applite - XGen Banking Solution",
category: ["Fintech","Web Apps"],
image: "https://nuofintech.com/wp-content/uploads/2021/10/n1.jpg",
client: "MicroFinance",
year: "2024",
description: "Applite is a modular microfinance platform with microservices architecture and extensive APIs, enabling rapid customization of business functions through a workflow module for seamless operations across channels.",
​
results: ["Anytime anywhere banking through multiple channels", "Real-time complete customer information", "Insightful reports for better decision making"],
technologies: ["Microservices", "API-First", "Cloud & On-Premise"]
},
  {
  id: 2,
  title: "PredixArena – Where Knowledge Meets Opportunity",
  category: ["Prediction Markets", "Web Apps"],
  image: "https://www.xcritical.com/wp-content/uploads/feed_images/prediction-markets-what-are-they-types-examples-img-2-768x473.webp",
  client: "Community Platform",
  year: "2025",
  description: "PredixArena is a prediction and insights platform that facilitates engaging discussions and predictions on politics, sports, and global events, harnessing community intelligence for better forecasting and decision-making.",
  results: ["Make informed predictions on real-world events", "Leverage community sentiment and market data", "Access advanced analytics and real-time updates"],
  technologies: ["Prediction Markets", "Analytics", "Community Tools"]
}
];

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category.includes(activeFilter));

  return (
    <Layout>
      {/* Hero */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-accent/20 to-highlight/10 rounded-full blur-3xl" />
        
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <span className="text-xs uppercase tracking-widest text-accent font-medium">Our Work</span>
          </AnimatedSection>
          
          <div className="mt-6 max-w-4xl">
            <RevealText 
              as="h1" 
              className="display-text font-display font-bold text-primary"
            >
              Projects that made an impact
            </RevealText>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-12">
        <div className="container-custom">
          <AnimatedSection className="flex gap-3 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeFilter === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Grid - Masonry Style */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="columns-1 md:columns-2 gap-6 space-y-6">
            {filteredProjects.map((project, index) => (
              <AnimatedSection
                key={project.id}
                delay={index * 100}
                className="break-inside-avoid"
              >
                <button
                  onClick={() => setSelectedProject(project)}
                  className="block w-full text-left group"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-card border border-border card-lift">
                    <div className="img-zoom">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto object-cover"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <div className="flex items-center gap-2 text-white text-sm font-medium">
                          View Project
                          <ExternalLink size={14} />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-medium text-accent">{project.category[0]}</span>
                        <span className="text-xs text-muted-foreground">· {project.year}</span>
                      </div>
                      <h3 className="font-display text-xl font-bold text-primary group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-2">{project.client}</p>
                    </div>
                  </div>
                </button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6">
              Want to see more?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              These are just a few highlights. We'd love to show you more examples relevant to your industry.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm font-medium rounded-full btn-premium"
            >
              Get in Touch
              <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0">
          {selectedProject && (
            <>
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-auto"
                />
              </div>
              
              <div className="p-6 md:p-8">
                <DialogHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium text-accent">{selectedProject.category}</span>
                    <span className="text-xs text-muted-foreground">· {selectedProject.year}</span>
                  </div>
                  <DialogTitle className="font-display text-2xl md:text-3xl font-bold text-primary">
                    {selectedProject.title}
                  </DialogTitle>
                  <DialogDescription className="text-muted-foreground mt-1">
                    {selectedProject.client}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="mt-6 space-y-6">
                  <p className="text-foreground leading-relaxed">{selectedProject.description}</p>
                  
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-3">Results</h4>
                    <ul className="space-y-2">
                      {selectedProject.results.map((result, i) => (
                        <li key={i} className="flex items-start gap-2 text-foreground">
                          <span className="text-accent mt-1">•</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span key={tech} className="text-xs px-3 py-1.5 bg-muted text-muted-foreground rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Work;