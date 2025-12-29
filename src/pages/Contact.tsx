import { useState } from "react";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/effects/AnimatedSection";
import RevealText from "@/components/effects/RevealText";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, ArrowRight, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone:"",
    company:"",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent successfully",
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({ name: "", email: "", phone:"", company:"", message: "" });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-accent/20 to-highlight/10 rounded-full blur-3xl" />
        
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <span className="text-xs uppercase tracking-widest text-accent font-medium">Contact</span>
          </AnimatedSection>
          
          <div className="mt-6 max-w-4xl">
            <RevealText 
              as="h1" 
              className="display-text font-display font-bold text-primary"
            >
              Let's build something great together
            </RevealText>
          </div>

          <AnimatedSection delay={200} className="mt-8 max-w-xl">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ready to start your project? Drop us a message and we'll get back to you within 24 hours.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Form */}
            <AnimatedSection className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary mb-3">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-4 border border-border bg-card text-foreground rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-4 border border-border bg-card text-foreground rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-primary mb-3">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-5 py-4 border border-border bg-card text-foreground rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="+91 6360395817"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-primary mb-3">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-5 py-4 border border-border bg-card text-foreground rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="Nuo FinTech Pvt Ltd"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary mb-3">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-4 border border-border bg-card text-foreground rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project, timeline, and budget..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm font-medium rounded-full btn-premium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </AnimatedSection>

            {/* Contact Info */}
            <div className="lg:col-span-5">
              <div className="space-y-8">
                {/* Contact Cards */}
                <AnimatedSection delay={100}>
                  <div className="p-6 bg-card border border-border rounded-2xl">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                      <Mail size={20} className="text-accent" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-primary mb-2">Email Us</h3>
                    <p className="text-muted-foreground">contactus@NuoFinTech.com</p>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={200}>
                  <div className="p-6 bg-card border border-border rounded-2xl">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                      <Phone size={20} className="text-accent" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-primary mb-2">Call Us</h3>
                    <p className="text-muted-foreground">+91 6360395817</p>
                    <p className="text-sm text-muted-foreground/70 mt-1">Mon-Fri, 9am-6pm PT</p>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={300}>
                  <div className="p-6 bg-card border border-border rounded-2xl">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                      <MapPin size={20} className="text-accent" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-primary mb-2">Visit Us</h3>
                    <address className="text-muted-foreground not-italic leading-relaxed">
                      VO-218, WeWork Salarpuria Magnificia,<br />
                      #78 Old Madras Road, Tin Factory, Mahadevapura,<br />
                      Next to KR Puram, Doorvani Nagar,<br />
                      Bengaluru, Karnataka - 560016, India
                    </address>
                  </div>
                </AnimatedSection>

                {/* Map */}
                <AnimatedSection delay={400}>
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-border">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6223690709803!2d77.66665167484182!3d12.995988187321624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1170822ba09d%3A0xca99fa490d3a8eef!2sWeWork%20Salarpuria%20Magnificia%20-%20Coworking%20%26%20Office%20Space%20in%20Mahadevapura%2C%20Bangalore!5e0!3m2!1sen!2sin!4v1767005028515!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Office location"
                    />
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Prefer to talk first?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Schedule a free 30-minute discovery call. No pressure, no commitments - just a friendly conversation about your needs.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 text-sm font-medium rounded-full btn-premium"
            >
              Book a Call
              <ArrowRight size={16} />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;