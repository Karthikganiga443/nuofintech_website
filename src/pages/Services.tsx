import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/effects/AnimatedSection";
import RevealText from "@/components/effects/RevealText";
import productDesignImage from "@/assets/Product-design.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Palette, Code, Lightbulb, Wrench, Shield, BarChart, ArrowRight, Check, CalculatorIcon} from "lucide-react";

const services = [
  {
    id: "design",
    icon: Palette,
    title: "Product Design",
    description: "Crafting intuitive experiences that users love.",
    sub_description: "In an era of rapid AI integration, intuitive interfaces are the bridge between powerful technology and human adoption. We craft seamless, accessible, and high-performance digital experiences that reduce friction, ensure compliance, and turn first-time users into lifelong advocates",
    details: [
      "User Research & Strategy",
      "UX/UI Design",
      "Design Systems",
      "Prototyping & Testing",
      "Brand Identity",
    ],
    image: productDesignImage,
    startingFrom: "",
  },
  {
    id: "development",
    icon: Code,
    title: "Development",
    description: "Building robust applications with modern tech.",
    sub_description: "Code is the foundation of digital reliability. We specialize in engineering high-performance systems that are secure by design and ready for AI integration. Our development team transforms complex logic into clean, maintainable code, ensuring your platform can handle the demands of a global fintech landscape without compromising on speed or security",
    details: [
      "Web Applications",
      "Mobile Apps (iOS & Android)",
      "API Development",
      "Cloud Infrastructure",
      "Performance Optimization",
    ],
    image: "https://media.licdn.com/dms/image/v2/D4D12AQHXzB9CVgPwpw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1704385797552?e=2147483647&v=beta&t=lT2oBKnW0r-vBnqNZTuleqAR4Hkl3LC2sGSmDM_vdbI",
    startingFrom: "",
  },
  {
    id: "consulting",
    icon: Lightbulb,
    title: "Strategy & Consulting",
    description: "Guiding your digital transformation journey.",
    sub_description: "Innovation without a roadmap is just noise. We provide the strategic clarity needed to navigate the intersection of finance and artificial intelligence. Our consultants work as your partners to assess legacy systems, identify high-impact AI opportunities, and build a sustainable digital roadmap that ensures your organization remains competitive, compliant, and ready for future shifts in the global market",
    details: [
      "Technology Assessment",
      "Architecture Planning",
      "Team Augmentation",
      "Process Optimization",
      "Digital Roadmapping",
    ],
    image: "https://media.licdn.com/dms/image/v2/D4D12AQE2DNcNdUu5pg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1655881320227?e=2147483647&v=beta&t=8GWx6XurkTPfIV1guM1qakzZlMnNa-hcmFDIeBFiz5Y",
    startingFrom: "",
  },
  {
    id: "analytics",
    icon: BarChart,
    title: "Data & Analytics",
    description: "Transforming data into actionable insights.",
    sub_description: "Our Data Analytics discipline focuses on the entire lifecycle of information—from collection and organization to advanced storage and extraction. By leveraging specialized tools and the expertise of our Subject Matter Experts (SMEs), Nuo FinTech helps you navigate the complexities of your data journey to uncover actionable insights that drive growth.",
    details: [
      "Data Warehouse Design",
      "BI Dashboards",
      "Reporting Automation",
      "Predictive Analytics",
      "Data Visualization",
    ],
    image: "https://nuofintech.com/wp-content/uploads/2021/10/n3.jpg",
    startingFrom: "",
  },
  {
    id: "financial-design",
    icon: CalculatorIcon,
    title: "Financial Product Design",
    description: "Designing secure, compliant fintech experiences that drive financial innovation.",
    sub_description: "In the world of finance, trust is the primary currency. We blend high-level security requirements with frictionless user journeys to create products that feel both safe and sophisticated. By integrating regulatory compliance into the very fabric of our design process, we help banking and microfinance institutions launch platforms that are as intuitive as they are legally robust.",
    details: [
    "Fintech User Research & Strategy",
    "UX/UI for Banking Platforms",
    "Microfinance Design Systems",
    "Prototyping & Compliance Testing",
    "Financial Brand Identity"
    ],
    image: "https://www.europeanceo.com/wp-content/uploads/2019/03/Thales_technological_collaboration.jpg",
    startingFrom: "",
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
                    {/* <AccordionContent className="pb-8">
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
                    </AccordionContent> */}
                    <AccordionContent className="pb-8">
                      <div className="flex flex-col lg:flex-row gap-12 lg:items-start pl-0 md:pl-[68px] pt-4">
                        
                        {/* Left Side: Content Wrapper */}
                        <div className="flex-[1.2] space-y-6"> 
                          <div className="space-y-4">
                            {/* Only show sub_description if it exists to avoid empty space */}
                            {service.sub_description && (
                              <p className="text-muted-foreground leading-relaxed">
                                {service.sub_description}
                              </p>
                            )}
                          </div>
                          
                          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-x-4 gap-y-3">
                            {service.details.map((detail, i) => (
                              <li key={i} className="flex items-start gap-3 text-foreground font-medium group">
                                <Check size={18} className="text-accent mt-1 flex-shrink-0 transition-transform group-hover:scale-110" />
                                <span className="text-[15px]">{detail}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="flex items-center justify-between pt-8 border-t border-border/60">
                            
                            <Link 
                              to="/contact" 
                              className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-accent transition-all group"
                            >
                              Get a Quote
                              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </div>
                        </div>

                        {/* Right Side: Image with refined scaling */}
                        <div className="flex-1 w-full lg:max-w-[45%]">
                          <div className="relative rounded-3xl overflow-hidden border border-border/50 shadow-2xl shadow-primary/5">
                            <img 
                              src={service.image} 
                              alt={service.title}
                              className="w-full h-full object-cover aspect-[4/3] lg:aspect-auto"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent pointer-events-none" />
                          </div>
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