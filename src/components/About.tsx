import aboutTeamImage from "@/assets/about-team.jpg";
import { Button } from "@/components/ui/button";

const About = () => {
  const values = [
    {
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative approaches to deliver exceptional results."
    },
    {
      title: "Strategy",
      description: "Every project starts with a well-thought strategy that aligns with your business goals."
    },
    {
      title: "Excellence",
      description: "We're committed to delivering the highest quality work that exceeds expectations."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          Who We Are
        </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                BusiMark Solutions is a creative marketing agency helping brands connect with their audience through innovation, design, and strategy. We transform your digital presence into a powerful tool for growth and success.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                With years of experience and a passion for excellence, we've helped hundreds of businesses achieve their digital marketing goals through tailored solutions and creative approaches.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid sm:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div key={index} className="text-center p-6 bg-gradient-card rounded-lg shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Call to Action with PDF Download */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="lg" className="shadow-card">
                <a href="#contact">Learn More About Us</a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="shadow-card"
                onClick={() => {
                  // Create and download PDF
                  const link = document.createElement('a');
                  link.href = '/company-profile.pdf';
                  link.download = 'TheTrioX-Company-Profile.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                Download Company Profile PDF
              </Button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-hover hover:shadow-hero transition-all duration-500 transform hover:scale-105">
              <img
                src={aboutTeamImage}
                alt="Creative team working together in modern office"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-primary/10"></div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
