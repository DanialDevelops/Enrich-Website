import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Car, DollarSign, Star, Sparkles, TrendingUp, Users2, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import heroBackground from "@/assets/hero-background.jpg";
import patternBackground from "@/assets/pattern-background.jpg";
import partnershipImage from "@/assets/Group.jpg";
import teamWorking from "@/assets/WorkSpace.jpg";
import bookImage from "@/assets/Book.jpg";
import workerImage from "@/assets/Worker.jpg";

const Home = () => {
  const features = [
    {
      icon: Clock,
      title: "Availability",
      description: "Available 24 hours a day/365 days a year, there for you when it really matters"
    },
    {
      icon: Car,
      title: "Transportation",
      description: "We provide transportation for workers to and from the job site"
    },
    {
      icon: DollarSign,
      title: "Pay",
      description: "We cover government liabilities (Vacation, WSIB, CPP, etc.)"
    }
  ];

  const stats = [
    { icon: Users2, label: "Clients Served", value: "500+" },
    { icon: Award, label: "Success Rate", value: "98%" },
    { icon: TrendingUp, label: "Years Experience", value: "15+" },
    { icon: Sparkles, label: "Industries Served", value: "25+" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative min-h-[80vh] flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(93, 93, 255, 0.9) 0%, rgba(185, 147, 255, 0.8) 50%, rgba(37, 99, 108, 0.9) 100%), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-accent/20 rounded-full blur-lg animate-pulse delay-700"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-secondary/30 rounded-full blur-md animate-pulse delay-1000"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 z-10">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
              <Sparkles className="w-5 h-5 text-accent" />
              <span className="text-white/90 font-medium">Professional Staffing Solutions</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-white to-accent-light bg-clip-text text-transparent">
              Your Shortcut to Skilled Professionals
            </h1>
            <p className="text-xl lg:text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Empowering Your Growth Effortlessly with 24/7 availability, transportation services, and comprehensive coverage!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="text-lg px-10 py-6 bg-accent hover:bg-accent/90 text-accent-foreground shadow-accent transition-all duration-300 hover:scale-105">
                <Link to="/services">Explore Services</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-10 py-6 bg-white/10 text-white border-white/30 hover:bg-white hover:text-primary backdrop-blur-sm transition-all duration-300 hover:scale-105">
                <Link to="/contact">Get Started Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white relative -mt-16 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-card rounded-3xl shadow-primary p-8 border border-primary-light/20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-primary">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-2 mb-6">
              <Star className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium">Why Choose Enrich Employment</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-6 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Exceptional Service Standards
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We provide comprehensive employment solutions that set us apart from the competition with unmatched reliability and support
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-hover transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-card backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-primary">
                      <feature.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute inset-0 w-20 h-20 bg-gradient-secondary rounded-3xl mx-auto opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-6 py-2 mb-6">
              <Star className="w-5 h-5 text-accent" />
              <span className="text-accent font-medium">Client Success Stories</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-6 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real feedback from businesses we've helped transform their workforce
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
                setApi={(api) => {
                  if (api) {
                    const interval = setInterval(() => {
                      api.scrollNext();
                    }, 4000);
                    return () => clearInterval(interval);
                  }
                }}
              >
                <CarouselContent>
                  {[
                    { 
                      id: 1,
                      text: '"I love this place to the heart. Enrich Employment is a better place to look for when need a job. They help people to reach the goals in life. Thank you ❤️❤️❤️❤️❤️❤️"', 
                      name: 'Manzi ssembatya', 
                      stars: 5 
                    },
                    { 
                      id: 2, 
                      text: `"It's really a best employment agency I've been working here more than a year but there are no delays in payment I love to work with this agency"`, 
                      name: 'Nitant Gaikwad', 
                      stars: 5 
                    },
                    { 
                      id: 3, 
                      text: '"One of the best Agency in GTA for perfect job placement. Been working with them for 2 years no delays , always on time and humble."', 
                      name: 'Nijjer Pawan', 
                      stars: 5 
                    },
                  ].map((testimonial) => (
                    <CarouselItem key={testimonial.id}>
                      <Card className="bg-gradient-card border-0 shadow-hover h-full">
                        <CardContent className="p-8 text-center h-full flex flex-col justify-between">
                          <div>
                            <div className="flex justify-center mb-6">
                              {[...Array(testimonial.stars)].map((_, i) => (
                                <Star key={i} className="w-6 h-6 text-accent fill-accent" />
                              ))}
                            </div>
                            <p className="text-lg text-foreground mb-8 italic leading-relaxed">
                              {testimonial.text}
                            </p>
                          </div>
                          <div className="flex items-center justify-center space-x-3">
                            <Avatar className="h-12 w-12">
                              <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                                {testimonial.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                              </AvatarFallback>
                            </Avatar>
                            <div className="text-left">
                              <div className="text-secondary font-bold text-lg">{testimonial.name}</div>
                              <div className="text-muted-foreground">Verified Client</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4 h-12 w-12 bg-white/90 hover:bg-white border-2 border-primary/20 hover:border-primary shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110" />
                <CarouselNext className="right-4 h-12 w-12 bg-white/90 hover:bg-white border-2 border-primary/20 hover:border-primary shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110" />
              </Carousel>
            </div>
            <div className="relative">
              <img 
                src={partnershipImage} 
                alt="Professional team collaboration and partnership" 
                className="rounded-3xl shadow-hover w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Worker Spotlight Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-2 mb-6">
                <Users2 className="w-5 h-5 text-primary" />
                <span className="text-primary font-medium">Professional Excellence</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                Skilled Professionals Ready to Work
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Our team of qualified professionals is equipped with the skills and experience needed to meet your business requirements. From specialized technicians to administrative support, we provide the right talent for your specific needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Pre-screened and qualified candidates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Industry-specific expertise</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Reliable and punctual professionals</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={workerImage} 
                alt="Professional worker demonstrating skills and expertise" 
                className="rounded-3xl shadow-hover w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-24 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(37, 99, 108, 0.95) 0%, rgba(93, 93, 255, 0.9) 100%), url(${teamWorking})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-secondary opacity-90"></div>
        {/* Floating elements */}
        <div className="absolute top-16 right-20 w-20 h-20 bg-accent/20 rounded-full blur-lg animate-pulse"></div>
        <div className="absolute bottom-20 left-16 w-16 h-16 bg-white/10 rounded-full blur-md animate-pulse delay-500"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
            <Sparkles className="w-5 h-5 text-accent" />
            <span className="text-white/90 font-medium">Ready to Transform Your Business?</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-white leading-tight">
            Let's Build Your Success Together
          </h2>
          <p className="text-xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Contact us today to discover how Enrich Employment can revolutionize your workforce management and drive unprecedented growth
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="text-lg px-10 py-6 bg-accent hover:bg-accent/90 text-accent-foreground shadow-accent transition-all duration-300 hover:scale-105">
              <Link to="/contact">Start Your Journey</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-10 py-6 bg-white/10 text-white border-white/30 hover:bg-white hover:text-primary backdrop-blur-sm transition-all duration-300 hover:scale-105">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;