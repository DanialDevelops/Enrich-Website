import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Users, UserCheck, Search, Crown, TrendingDown, Zap, Repeat, Shield, Award, Target, BarChart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import patternBackground from "@/assets/pattern-background.jpg";

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Flexible Staffing Solutions",
      description: "Deploy skilled and dependable workers swiftly to hit urgent deadlines or cover workforce fluctuations without permanent overhead implications."
    },
    {
      icon: UserCheck,
      title: "Eval-to-Hire",
      description: "Mitigate recruitment risks by evaluating our temporary staff on-site before making a long-term commitment."
    },
    {
      icon: Search,
      title: "Direct Hire Services",
      description: "Let us streamline your hiring process by sourcing, vetting, and delivering candidates who fit your precise requirements."
    },
    {
      icon: Crown,
      title: "Leadership Acquisition",
      description: "Enhance your executive team with our executive search services, targeting and securing industry-leading talent."
    }
  ];

  const benefits = [
    {
      icon: TrendingDown,
      title: "Cut staffing overheads"
    },
    {
      icon: Zap,
      title: "Flexibly adjust to workload changes"
    },
    {
      icon: Repeat,
      title: "Efficiently manage staff absences"
    },
    {
      icon: Shield,
      title: "Lower staff turnover rates"
    },
    {
      icon: Award,
      title: "Prevent costly hiring errors"
    },
    {
      icon: Target,
      title: "Bridge the skills divide"
    },
    {
      icon: BarChart,
      title: "Optimize your talent acquisition strategy"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="py-32 relative overflow-hidden"
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
              <span className="text-primary font-medium">Professional Staffing Solutions</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent leading-tight">
              Enrich Employment Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
              At Enrich Employment, we recognize that the backbone of any successful business is its workforce. We tackle the everyday hurdles that companies encounter, from scaling up for new initiatives to addressing unplanned staff shortages. Our bespoke services are crafted to seamlessly integrate with any operational needs, minimizing overheads while maximizing efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Our Offerings Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">
              Our Offerings
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive solutions for all your staffing needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-secondary">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">
              Benefits of Our Specialized Services
            </h2>
            <p className="text-xl text-muted-foreground">
              Strategic advantages that drive your business forward
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <p className="font-medium text-secondary text-sm">
                      {benefit.title}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Workforce?
          </h2>
          <p className="text-xl mb-8 text-secondary-foreground/80 max-w-2xl mx-auto">
            Let's discuss how our specialized services can address your unique staffing challenges
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary-hover">
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white bg-white/10 text-white hover:bg-white hover:text-secondary font-semibold shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;