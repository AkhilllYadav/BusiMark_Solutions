import { Button } from "@/components/ui/button";
import { ExternalLink, TrendingUp, Users, Zap } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Growth Campaign",
      description: "Increased online sales by 400% through strategic social media campaigns and targeted advertising.",
      category: "Social Media & Ads",
      results: "400% Sales Increase",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      icon: TrendingUp
    },
    {
      id: 2,
      title: "Brand Awareness Video Series",
      description: "Created viral video content that reached over 2M views and boosted brand recognition by 250%.",
      category: "Video Production",
      results: "2M+ Views",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=500&h=300&fit=crop",
      icon: Users
    },
    {
      id: 3,
      title: "Restaurant Website Redesign",
      description: "Modern website with online ordering system that increased conversions by 180%.",
      category: "Web Development",
      results: "180% More Orders",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop",
      icon: Zap
    },
    {
      id: 4,
      title: "SaaS Lead Generation",
      description: "B2B campaign that generated 500+ qualified leads and increased MRR by 300%.",
      category: "Digital Marketing",
      results: "500+ Qualified Leads",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      icon: TrendingUp
    },
    {
      id: 5,
      title: "Fashion Brand Influencer Campaign",
      description: "Collaborated with 50+ influencers to boost engagement rates by 320% and drive sales.",
      category: "Social Media",
      results: "320% Engagement Boost",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&h=300&fit=crop",
      icon: Users
    },
    {
      id: 6,
      title: "Tech Startup Branding",
      description: "Complete brand identity and website that helped secure $2M in Series A funding.",
      category: "Branding & Web",
      results: "$2M Funding Secured",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=500&h=300&fit=crop",
      icon: Zap
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Work
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how we've helped businesses achieve remarkable growth and success
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-hover transition-all duration-500 transform hover:scale-105"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <Button variant="hero" size="lg" className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 bg-card">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-primary bg-accent px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <project.icon className="w-5 h-5 text-primary" />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-primary">
                    {project.results}
                  </span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button variant="hero" size="xl">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;