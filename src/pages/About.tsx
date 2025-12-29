import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/effects/AnimatedSection";
import RevealText from "@/components/effects/RevealText";
import CountUpNumber from "@/components/effects/CountUpNumber";
import { useParallax } from "@/hooks/useReveal";
import { useState } from "react";

const team = [
  { 
    name: "James Hartley", 
    role: "Founder & CEO", 
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" 
  },
  { 
    name: "Elena Vasquez", 
    role: "Creative Director", 
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face" 
  },
  { 
    name: "David Kim", 
    role: "Tech Lead", 
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face" 
  },
  { 
    name: "Rachel Okonkwo", 
    role: "Strategy Director", 
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=300&h=300&fit=crop&crop=face" 
  },
];

const milestones = [
  { year: "1999", event: "Core team inception in international IT services." },
  { year: "2010", event: "Oracle Flexcube & Core Banking expertise established." },
  { year: "2018", event: "Launched AppLite – Microfinance CBS solution." },
  { year: "2021", event: "Expanded to GCP/AWS Cloud Adoption services." },
  { year: "2023", event: "AppLite: AML compliance module released." },
  { year: "2024", event: "AI analytics integrated into AppLite platform." }, // New
  { year: "2025", event: "BaaS for global digital transformation." } // Updated
];


const values = [
  { title: "Excellence", description: "We pursue the highest standards in everything we create." },
  { title: "Collaboration", description: "Great work happens when diverse minds come together." },
  { title: "Innovation", description: "We push boundaries and embrace new possibilities." },
  { title: "Integrity", description: "Honest, transparent partnerships built on trust." },
];

const About = () => {
  const { ref: parallaxRef, offset } = useParallax(0.4);
  const [imageError, setImageError] = useState(false);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative section-padding overflow-hidden">
        <div 
          ref={parallaxRef}
          className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-accent/20 to-highlight/10 rounded-full blur-3xl"
          style={{ transform: `translateY(${offset}px)` }}
        />
        
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <span className="text-xs uppercase tracking-widest text-accent font-medium">About Us</span>
          </AnimatedSection>
          
          <div className="mt-6 max-w-4xl">
            <RevealText 
              as="h1" 
              className="display-text font-display font-bold text-primary"
            >
              We believe in the transformative power of AI-driven fintech innovation
            </RevealText>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Image */}
            <AnimatedSection className="lg:col-span-5">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-muted">
                {!imageError ? (
                  <img
                    src="https://nuofintech.com/wp-content/uploads/2021/08/service_4.jpg"
                    alt="Our workspace"
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-muted text-muted-foreground">
                    <div className="text-center">
                      <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM4 7v10h16V7H4zm8 2l5 3H7l5-3z"/>
                      </svg>
                      <p className="text-sm">Image not available</p>
                    </div>
                  </div>
                )}
              </div>
            </AnimatedSection>

            {/* Text */}
            <div className="lg:col-span-7 flex flex-col justify-center">
             <AnimatedSection>
               <span className="text-xs uppercase tracking-widest text-accent font-medium">About NuoFinTech</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mt-4 mb-8">
                     Next-generation financial technology for a secure industry
                </h2>
              </AnimatedSection>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <AnimatedSection delay={100}>
                  <p>
                    With over 25 years of experience in IT services, NuoFinTech specializes in developing robust software applications and mobile solutions for clients worldwide. We are dedicated to making the financial industry more secure, nimble, and innovative.
                  </p>
                </AnimatedSection>
                <AnimatedSection delay={200}>
                  <p>
                    Our core expertise lies in the fintech sector, where we provide mission-critical products including <strong>AppLite: CBS</strong> for Microfinance and <strong>AppLite: AML</strong> for Anti-Money Laundering compliance.
                  </p>
                </AnimatedSection>
                <AnimatedSection delay={300}>
                  <p>
                    Beyond product development, we offer specialized consulting in Oracle Flexcube, Database Administration, and Data Analytics. We also guide institutions through modern digital transformation via Cloud Adoption on GCP and AWS.
                  </p>
                </AnimatedSection>
              </div>

              {/* Stats Row */}
              <AnimatedSection delay={400} className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border">
                <div>
                  <p className="text-3xl font-display font-bold text-primary">
                    <CountUpNumber end={10} suffix="+" />
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">Team Members</p>
                </div>
                <div>
                  <p className="text-3xl font-display font-bold text-primary">
                    <CountUpNumber end={1} />
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">Offices</p>
                </div>
                <div>
                  <p className="text-3xl font-display font-bold text-primary">
                    <CountUpNumber end={5} suffix=" Years" />
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">In Business</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-accent font-medium">Our Values</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mt-4">
              What drives us forward
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 100}>
                <div className="text-center">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 text-accent font-display font-bold text-lg mb-4">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-xl font-bold text-primary-foreground mb-3">{value.title}</h3>
                  <p className="text-primary-foreground/70 text-sm leading-relaxed">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection className="mb-16">
            <span className="text-xs uppercase tracking-widest text-accent font-medium">Leadership</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mt-4">
              Meet the team
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <AnimatedSection key={member.name} delay={index * 100} className="group">
                <div className="relative overflow-hidden rounded-2xl mb-4 img-zoom">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-[3/4] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="font-display text-lg font-bold text-primary">{member.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{member.role}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section> */}

      {/* Timeline */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <AnimatedSection className="mb-12">
            <span className="text-xs uppercase tracking-widest text-accent font-medium">Our Journey</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mt-4">
              Milestones
            </h2>
          </AnimatedSection>

          <div className="overflow-x-auto pb-4 -mx-6 px-6">
            <div className="flex gap-8 min-w-max">
              {milestones.map((milestone, index) => (
                <AnimatedSection 
                  key={index} 
                  delay={index * 100}
                  className="flex flex-col items-start min-w-[280px] relative"
                >
                  {/* Timeline line */}
                  {index < milestones.length - 1 && (
                    <div className="absolute top-3 left-6 w-[calc(100%+2rem)] h-[2px] bg-border" />
                  )}
                  
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center mb-4 relative z-10">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-accent font-medium mb-2">{milestone.year}</span>
                  <p className="text-foreground font-medium">{milestone.event}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;