import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const testimonials = [
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
  ];

  const [api, setApi] = useState<any>(null);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000); // Auto-advance every 4 seconds

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="py-20 bg-gradient-subtle">
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
        
        <div className="max-w-4xl mx-auto relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            setApi={setApi}
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
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
      </div>
    </section>
  );
};

export default Testimonials; 