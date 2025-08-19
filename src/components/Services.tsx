import { Button } from "@/components/ui/button";
import { Rocket, Megaphone, Video, Monitor, Settings } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Rocket,
      title: "Social Media Management",
      description: "Comprehensive social media strategies that engage your audience and build your brand presence across all platforms.",
      features: ["Content Creation", "Community Management", "Analytics & Reporting"]
    },
    {
      icon: Megaphone,
      title: "Advertisement Campaigns",
      description: "Data-driven advertising campaigns that deliver measurable results and maximize your return on investment.",
      features: ["PPC Campaigns", "Social Media Ads", "Display Advertising"]
    },
    {
      icon: Video,
      title: "Video Production",
      description: "Professional video content that tells your story and connects with your audience on an emotional level.",
      features: ["Promotional Videos", "Social Media Content", "Corporate Videos"]
    },
    {
      icon: Monitor,
      title: "Website Development",
      description: "Modern, responsive websites that look great and perform even better across all devices and platforms.",
      features: ["Custom Design", "E-commerce Solutions", "SEO Optimization"]
    },
    {
      icon: Settings,
      title: "Website Maintenance",
      description: "Ongoing support and maintenance to keep your website secure, updated, and performing at its best.",
      features: ["Security Updates", "Performance Optimization", "Content Updates"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What We Do
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive digital marketing solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-hover transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Button */}
              <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                Learn More
              </Button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button variant="hero" size="xl">
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;