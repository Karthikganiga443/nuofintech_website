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
import { Palette, Code, Lightbulb, Wrench, Shield, BarChart, ArrowRight, Check, CalculatorIcon, Cloud} from "lucide-react";

const services = [
  {
    id: "product-design",
    icon: Palette,
    title: "Product Design",
    description: "Designing scalable, user-centric interfaces for modern fintech solutions.",
    sub_description: "We focus on building intuitive product architectures that drive collaboration and improve decision-making through clear, impactful data visualization. Our design philosophy bridges the gap between complex backend data and seamless user interaction.",
    details: [
      "Product Builder & Architecture",
      "User-Centric Banking Interfaces",
      "Data Visualization & Reporting Design",
      "Scalable Design Systems",
      "Collaborative Ecosystem Design via Open API",
    ],
    image:productDesignImage, 
    startingFrom: "",
  },
  {
    id: "cloud-consulting",
    icon: Cloud,
    title: "Cloud Consulting: We accelerate your entry into the Cloud.",
    description: "Accelerating your transition to the cloud to reduce costs and enable rapid, hardware-free scalability.",
    sub_description: "Our individually adapted cloud concept helps you gain digital competence by providing technical support for your workflows. Nuofintech has multiple SMEs who can help organization in their cloud adoption journey.",
    details: [
      "Budget-conscious, fast and flexible implementation",
      "Solid and up-to-date expertise in cloud computing and digitization",
      "Technical support for workflows to focus on core business",
      "Cloud consulting and implementation to long-term support concepts",
      "Regularly trained and certified employees in various cloud areas",
    ],
    image: "https://nuofintech.com/wp-content/uploads/2021/10/n2.jpg", 
    startingFrom: "",
  },
  {
    id: "strategy-consulting",
    icon: Lightbulb,
    title: "Strategy & Consulting",
    description: "Providing strategic clarity to navigate digital transformation and cloud adoption.",
    sub_description: "We act as your partners to help your organization gain digital competence by providing a solid roadmap for transformation. Our experts assess your current workflows and offer individually adapted concepts that reduce hardware-related challenges and focus on long-term growth and scalability.",
    details: [
      "Digital transformation and growth management",
      "Individually adapted cloud and technology concepts",
      "Technical support for optimized workflows",
      "Strategic guidance from Subject Matter Experts (SMEs)",
      "Expertise in digitization and modern finance",
    ],
    image: "https://media.licdn.com/dms/image/v2/D4D12AQE2DNcNdUu5pg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1655881320227?e=2147483647&v=beta&t=8GWx6XurkTPfIV1guM1qakzZlMnNa-hcmFDIeBFiz5Y",
    startingFrom: "",
  },
  {
    id: "data-analytics",
    icon: BarChart, 
    title: "Data Analytics: Analyzing and Managing Data",
    description: "Data is the new fuel, but bringing it into the right format and enriching and transforming it is a daunting task for organizations.",
    sub_description: "Data analytics is a discipline focused on extracting insights from data. It comprises the processes of data analysis and management, and draws on a variety of disciplines—including computer programming, mathematics, and statistics—to perform analysis on data in an effort to describe, predict, and improve performance.",
    details: [
      "Anytime anywhere banking through multiple channels",
      "Real-time, complete customer information",
      "Product builder",
      "Manage Growth with proven scalability",
      "Drive collaboration with ecosystem through open API",
      "Insightful reports for better decision making",
    ],
    image: "https://nuofintech.com/wp-content/uploads/2021/10/n3.jpg", 
    startingFrom: "",
  },
  {
    id: "financial-design",
    icon: CalculatorIcon,
    title: "Financial Product Design",
    description: "Designing secure, compliant fintech experiences that drive financial innovation.",
    sub_description: "We focus on creating intuitive interfaces that act as a bridge for human adoption in complex financial ecosystems. By leveraging our SMEs, we help organizations manage growth with proven scalability while ensuring that insightful reports and real-time customer information are integrated into a seamless user journey.",
    details: [
      "Product builder for specialized banking needs",
      "Real-time, complete customer information interfaces",
      "UX/UI for anytime anywhere banking across multiple channels",
      "Design for collaboration through open API ecosystems",
      "Data-driven dashboards for better decision making"
    ],
    image: "https://www.europeanceo.com/wp-content/uploads/2019/03/Thales_technological_collaboration.jpg",
    startingFrom: "",
  }, 
  {
    id: "oracle-apex",
    icon: Code,
    title: "Oracle APEX: Build Amazing Oracle Apex Application",
    description: "Nuo FinTech has all that it takes to build, deploy and manage your application build using Oracle APEX.",
    sub_description: "Oracle Application Express (APEX) is a low-code development platform that enables you to build scalable, secure enterprise apps, with world-class features, that can be deployed anywhere. Developers can quickly develop and deploy compelling apps that solve real problems and provide immediate value without needing to be an expert in a vast array of technologies.",
    details: [
      "Design, development and implementation of Apex application",
      "Hosting Apex application on Cloud – Oracle Cloud as well as AWS",
      "Process automation using Oracle and Oracle Apex",
      "Creating rest APIs in Oracle Apex",
      "Extensive experience in Oracle APEX (On Prem as well as on Cloud – OCI/AWS)",
    ],
    image: "https://nuofintech.com/wp-content/uploads/2021/10/n4.jpg", 
    startingFrom: "",
  } 
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
              From Data Strategy to Deployment
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
  {/* The container is a flex-col on mobile and row on desktop */}
  <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 lg:items-start pl-0 md:pl-[68px] pt-4">
    
    {/* 1. IMAGE: Order 1 on mobile, Order 2 (right side) on desktop */}
    <div className="flex-1 w-full lg:max-w-[45%] order-1 lg:order-2">
      <div className="relative rounded-3xl overflow-hidden border border-border/50 shadow-2xl shadow-primary/5">
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-full object-cover aspect-[4/3] lg:aspect-auto"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent pointer-events-none" />
      </div>
    </div>

    {/* 2. CONTENT: Order 2 on mobile, Order 1 (left side) on desktop */}
    <div className="flex-[1.2] space-y-6 order-2 lg:order-1">
      <div className="space-y-4">
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

      {/* "Get a Quote" - Laptop Version: Attached to bottom of content on big screens */}
      <div className="hidden lg:flex items-center justify-between pt-8 border-t border-border/60">
        <Link 
          to="/contact" 
          className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-accent transition-all group"
        >
          Get a Quote
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>

    {/* 3. GET A QUOTE: Order 3 on mobile, Hidden on laptop (because it's included above) */}
    <div className="order-3 lg:hidden flex items-center justify-start pt-4 border-t border-border/60">
      <Link 
        to="/contact" 
        className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-accent transition-all group"
      >
        Get a Quote
        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
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