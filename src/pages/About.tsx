import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, Users, Award, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Testimonials from "@/components/Testimonials";
import patternBackground from "@/assets/pattern-background.jpg";
import teamWorking from "@/assets/WorkSpace.jpg";
import bookImage from "@/assets/Book.jpg";
import workerImage from "@/assets/Worker.jpg";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Quality & Reliability",
      description: "We ensure quality and reliability in all our services"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer support whenever you need it"
    },
    {
      icon: Users,
      title: "Client Satisfaction",
      description: "Your satisfaction is our top priority"
    },
    {
      icon: Award,
      title: "Enhanced Solutions",
      description: "Tailored employment solutions for your specific needs"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="py-24 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(93, 93, 255, 0.1) 0%, rgba(185, 147, 255, 0.05) 100%), url(${patternBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-subtle opacity-95"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-3 mb-8">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium">About Enrich Employment</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Dedicated to Your Success
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Discover our commitment to providing exceptional employment solutions that transform businesses and empower growth
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-gradient-card border-0 shadow-hover">
                <CardContent className="p-12">
                  <p className="text-lg leading-relaxed text-foreground">
                    At Enrich Employment, client satisfaction is our top priority. We are dedicated to providing enhanced employment solutions tailored to your needs. Our commitment extends to ensuring quality and reliability in all our services, including our round-the-clock (24/7) customer support and convenient shuttle services. With Enrich Employment, you receive effective, reliable HR solutions that are available whenever you need them, designed to streamline your operations and enhance your workforce management.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="relative">
              <img 
                src={teamWorking} 
                alt="Professional workspace with team collaboration" 
                className="rounded-3xl shadow-hover w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section 
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(93, 93, 255, 0.05) 100%), url(${patternBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-subtle opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-secondary/10 rounded-full px-6 py-2 mb-6">
              <Award className="w-5 h-5 text-secondary" />
              <span className="text-secondary font-medium">Our Foundation</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Core Values That Drive Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The fundamental principles that guide everything we do and shape our commitment to excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-hover transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-card backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="relative">
                    <div className="w-18 h-18 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-primary">
                      <value.icon className="w-9 h-9 text-white" />
                    </div>
                    <div className="absolute inset-0 w-18 h-18 bg-gradient-accent rounded-3xl mx-auto opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  </div>
                  <h3 className="text-lg font-bold text-secondary mb-4 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground transition-colors">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training & Development Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={bookImage} 
                alt="Professional development and training resources" 
                className="rounded-3xl shadow-hover w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-3xl"></div>
            </div>
            <div>
              <div className="inline-flex items-center space-x-2 bg-secondary/10 rounded-full px-6 py-2 mb-6">
                <Award className="w-5 h-5 text-secondary" />
                <span className="text-secondary font-medium">Continuous Learning</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Investing in Professional Growth
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We believe in continuous improvement and professional development. Our team members receive ongoing training and support to ensure they deliver exceptional service and stay current with industry best practices.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-foreground">Regular skill development programs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-foreground">Industry certification support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-foreground">Mentorship and career guidance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-24 bg-gradient-secondary text-white relative overflow-hidden">
        <div className="absolute top-20 right-16 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-16 left-20 w-24 h-24 bg-white/10 rounded-full blur-lg animate-pulse delay-700"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
            <Sparkles className="w-5 h-5 text-accent" />
            <span className="text-white/90 font-medium">Join Our Success Story</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
            Experience the Enrich Employment Difference
          </h2>
          <p className="text-xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Ready to partner with us for transformative employment solutions that drive real results?
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="text-lg px-10 py-6 bg-accent hover:bg-accent/90 text-accent-foreground shadow-accent transition-all duration-300 hover:scale-105">
              <Link to="/services">Explore Our Services</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-10 py-6 bg-white/10 text-white border-white/30 hover:bg-white hover:text-primary backdrop-blur-sm transition-all duration-300 hover:scale-105">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;