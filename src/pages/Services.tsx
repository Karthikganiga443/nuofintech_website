import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/effects/AnimatedSection";
import RevealText from "@/components/effects/RevealText";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Palette, Code, Lightbulb, Wrench, Shield, BarChart, ArrowRight, Check } from "lucide-react";

const services = [
  {
    id: "design",
    icon: Palette,
    title: "Product Design",
    description: "Crafting intuitive experiences that users love.",
    details: [
      "User Research & Strategy",
      "UX/UI Design",
      "Design Systems",
      "Prototyping & Testing",
      "Brand Identity",
    ],
    startingFrom: "From $15,000",
  },
  {
    id: "development",
    icon: Code,
    title: "Development",
    description: "Building robust applications with modern tech.",
    details: [
      "Web Applications",
      "Mobile Apps (iOS & Android)",
      "API Development",
      "Cloud Infrastructure",
      "Performance Optimization",
    ],
    startingFrom: "From $25,000",
  },
  {
    id: "consulting",
    icon: Lightbulb,
    title: "Strategy & Consulting",
    description: "Guiding your digital transformation journey.",
    details: [
      "Technology Assessment",
      "Architecture Planning",
      "Team Augmentation",
      "Process Optimization",
      "Digital Roadmapping",
    ],
    startingFrom: "From $3,000/week",
  },
  {
    id: "maintenance",
    icon: Wrench,
    title: "Ongoing Support",
    description: "Keeping your systems running at peak performance.",
    details: [
      "24/7 Monitoring",
      "Bug Fixes & Updates",
      "Security Patches",
      "Performance Tuning",
      "Feature Enhancements",
    ],
    startingFrom: "From $2,000/month",
  },
  {
    id: "security",
    icon: Shield,
    title: "Security Audits",
    description: "Protecting your business from digital threats.",
    details: [
      "Penetration Testing",
      "Code Review",
      "Compliance Assessment",
      "Security Training",
      "Incident Response",
    ],
    startingFrom: "From $5,000",
  },
  {
    id: "analytics",
    icon: BarChart,
    title: "Data & Analytics",
    description: "Transforming data into actionable insights.",
    details: [
      "Data Warehouse Design",
      "BI Dashboards",
      "Reporting Automation",
      "Predictive Analytics",
      "Data Visualization",
    ],
    startingFrom: "From $12,000",
  },
];

const process = [
  { step: "01", title: "Discovery", description: "We dive deep into your business, users, and goals to understand the full picture." },
  { step: "02", title: "Strategy", description: "Together we define the roadmap, priorities, and success metrics for your project." },
  { step: "03", title: "Design", description: "Our design team creates intuitive, beautiful interfaces that solve real problems." },
  { step: "04", title: "Build", description: "We develop with precision, following best practices and maintaining clear communication." },
  { step: "05", title: "Launch", description: "We ensure a smooth deployment and provide ongoing support for continuous success." },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-accent/20 to-highlight/10 rounded-full blur-3xl" />
        
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <span className="text-xs uppercase tracking-widest text-accent font-medium">Services</span>
          </AnimatedSection>
          
          <div className="mt-6 max-w-4xl">
            <RevealText 
              as="h1" 
              className="display-text font-display font-bold text-primary"
            >
              Everything you need to succeed digitally
            </RevealText>
          </div>

          <AnimatedSection delay={200} className="mt-8 max-w-2xl">
            <p className="text-lg text-muted-foreground leading-relaxed">
              From initial concept to ongoing optimization, we provide comprehensive digital solutions tailored to your unique needs.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Accordion */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {services.map((service, index) => (
                <AnimatedSection key={service.id} delay={index * 50}>
                  <AccordionItem
                    value={service.id}
                    className="border border-border rounded-2xl px-6 md:px-8 overflow-hidden data-[state=open]:bg-muted/30 transition-colors"
                  >
                    <AccordionTrigger className="hover:no-underline py-6 md:py-8">
                      <div className="flex items-center gap-5 text-left">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-highlight flex items-center justify-center flex-shrink-0">
                          <service.icon size={22} className="text-white" strokeWidth={1.5} />
                        </div>
                        <div>
                          <h3 className="font-display text-xl md:text-2xl font-bold text-primary">{service.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1 hidden md:block">{service.description}</p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-8">
                      <div className="pl-0 md:pl-[68px]">
                        <p className="text-muted-foreground mb-6 md:hidden">{service.description}</p>
                        <ul className="space-y-3 mb-6">
                          {service.details.map((detail, i) => (
                            <li key={i} className="flex items-center gap-3 text-foreground">
                              <Check size={16} className="text-accent flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                        <div className="flex items-center justify-between pt-4 border-t border-border">
                          <span className="text-sm font-medium text-accent">{service.startingFrom}</span>
                          <Link 
                            to="/contact" 
                            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors"
                          >
                            Get a Quote
                            <ArrowRight size={14} />
                          </Link>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </AnimatedSection>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-accent font-medium">How We Work</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mt-4">
              Our proven process
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {process.map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 100} className="relative">
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-[2px] bg-primary-foreground/20" />
                )}
                <div className="text-center relative z-10">
                  <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent text-white font-display text-xl font-bold mb-4">
                    {item.step}
                  </span>
                  <h3 className="font-display text-lg font-bold text-primary-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-primary-foreground/70 leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6">
              Not sure what you need?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Book a free 30-minute consultation. We'll listen to your challenges and recommend the best path forward.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm font-medium rounded-full btn-premium"
            >
              Schedule a Call
              <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Services;