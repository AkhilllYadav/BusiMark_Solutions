import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Priya Sharma",
      position: "Fashion Brand Owner",
      company: "StyleHub",
      image: "https://images.unsplash.com/photo-1494790108755-2616c19a70fe?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "TheTrioX transformed our online presence completely! Our engagement doubled and sales increased by 300%. Their creative approach and strategic thinking made all the difference.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      name: "Rajesh Kumar",
      position: "CEO",
      company: "TechFlow Solutions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Working with TheTrioX was a game-changer for our startup. They created an amazing brand identity and website that helped us secure our Series A funding. Highly recommended!",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "GreenLife Organic",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "The video campaign they created went viral and brought us over 2 million views. Their creativity and attention to detail is unmatched. We couldn't be happier with the results.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      name: "Michael Chen",
      position: "Restaurant Owner",
      company: "Fusion Delights",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Our new website increased online orders by 180%. The team understood our vision perfectly and delivered beyond our expectations. Professional service from start to finish.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our work.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial Card */}
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-hover transform transition-all duration-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Video Testimonial */}
                <div className="order-2 md:order-1">
                  <div className="aspect-video rounded-2xl overflow-hidden shadow-card">
                    <iframe
                      src={testimonials[currentTestimonial].videoUrl}
                      title={`${testimonials[currentTestimonial].name} Testimonial`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>

                {/* Text Content */}
                <div className="text-center md:text-left order-1 md:order-2">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <Quote className="w-12 h-12 text-primary mx-auto md:mx-0 opacity-20" />
                  </div>

                  {/* Stars */}
                  <div className="flex justify-center md:justify-start mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-lg md:text-xl text-foreground mb-8 leading-relaxed italic">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>

                  {/* Client Info */}
                  <div className="flex items-center justify-center md:justify-start space-x-4">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-16 h-16 rounded-full object-cover shadow-card"
                    />
                    <div className="text-left">
                      <h4 className="font-semibold text-foreground text-lg">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <p className="text-muted-foreground">
                        {testimonials[currentTestimonial].position}, {testimonials[currentTestimonial].company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-card shadow-card hover:shadow-hover"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-card shadow-card hover:shadow-hover"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? "bg-primary scale-125"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;