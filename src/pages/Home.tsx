import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Zap, Target } from "lucide-react";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/effects/AnimatedSection";
import RevealText from "@/components/effects/RevealText";
import CountUpNumber from "@/components/effects/CountUpNumber";
import { useParallax } from "@/hooks/useReveal";

const services = [
  {
    icon: Sparkles,
    title: "Product Design",
    description: "We craft intuitive digital experiences that users love. From research to polished interfaces.",
    accent: "from-accent to-highlight",
  },
  {
    icon: Zap,
    title: "Development",
    description: "Building robust, scalable applications with modern technologies and best practices.",
    accent: "from-highlight to-accent",
  },
  {
    icon: Target,
    title: "Strategy",
    description: "Helping you make informed decisions about technology and digital transformation.",
    accent: "from-accent to-cyan",
  },
];

const stats = [
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 8, suffix: " Years", label: "Experience" },
  { value: 99, suffix: "%", label: "Client Retention" },
];

const testimonials = [
  {
    quote: "Nuo Tech transformed our digital presence. The results exceeded every expectation we had.",
    name: "Sarah Chen",
    role: "CEO, Meridian Labs",
  },
  {
    quote: "Professional, innovative, and incredibly reliable. They're our go-to technology partner.",
    name: "Marcus Rivera",
    role: "CTO, Coastal Freight",
  },
  {
    quote: "The team delivered a solution that genuinely moved the needle for our business.",
    name: "Anna Kowalski",
    role: "Founder, Evergreen Health",
  },
];

const Home = () => {
  const { ref: parallaxRef, offset } = useParallax(0.3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center section-padding overflow-hidden">
        {/* Decorative elements */}
        <div 
          ref={parallaxRef}
          className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-accent/20 to-highlight/10 rounded-full blur-3xl floating"
          style={{ transform: `translateY(${offset}px)` }}
        />
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-tr from-highlight/15 to-accent/5 rounded-full blur-2xl floating" style={{ animationDelay: "2s" }} />
        
        <div className="container-custom relative z-10">
          <div className="max-w-6xl">
            {/* Label */}
            <AnimatedSection delay={0}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-8">
                <Sparkles size={14} />
                Digital Excellence
              </span>
            </AnimatedSection>

            {/* Headline */}
            <div className="mb-8">
              <RevealText 
                as="h1" 
                className="display-text font-display font-bold text-primary"
              >
                We craft digital experiences that drive growth
              </RevealText>
            </div>

            {/* Subtitle */}
            <AnimatedSection delay={200}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-10">
                A premium digital agency helping forward-thinking businesses build products that matter.
              </p>
            </AnimatedSection>

            {/* CTA Buttons */}
            <AnimatedSection delay={300} className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm font-medium rounded-full btn-premium"
              >
                Start a Project
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium text-primary border border-border rounded-full hover:bg-muted transition-colors"
              >
                View Our Work
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 100} className="text-center md:text-left">
                <p className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">
                  <CountUpNumber end={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-sm text-primary-foreground/60 mt-2">{stat.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection className="mb-16">
            <span className="text-xs uppercase tracking-widest text-accent font-medium">What we do</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-4 max-w-2xl">
              Services tailored to your ambitions
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <AnimatedSection
                key={service.title}
                delay={index * 100}
                className="group p-8 bg-card border border-border rounded-2xl card-lift"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.accent} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon size={24} className="text-white" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent mt-6 group-hover:gap-3 transition-all"
                >
                  Learn more
                  <ArrowRight size={14} />
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-accent font-medium">Testimonials</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mt-4">
              Trusted by industry leaders
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection
                key={testimonial.name}
                delay={index * 100}
                className="p-8 bg-card border border-border rounded-2xl"
              >
                <p className="text-foreground leading-relaxed mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="text-sm font-medium text-primary">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{testimonial.role}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-secondary to-primary p-12 md:p-16 lg:p-20">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-highlight/10 rounded-full blur-2xl" />
            
            <div className="relative z-10 max-w-2xl">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                Ready to build something extraordinary?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                Let's discuss how we can help transform your vision into reality.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 text-sm font-medium rounded-full btn-premium"
              >
                Get in Touch
                <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Home;