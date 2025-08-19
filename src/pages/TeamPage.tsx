import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Mail } from "lucide-react";
import teamCEO from "@/assets/team-ceo.jpg";
import teamMarketing from "@/assets/team-marketing.jpg";
import teamDeveloper from "@/assets/team-developer.jpg";
import teamDesigner from "@/assets/team-designer.jpg";

const TeamPage = () => {
  const teamMembers = [
    {
      name: "Arjun Patel",
      position: "Founder & CEO",
      image: teamCEO,
      bio: "Visionary leader with 10+ years in digital marketing. Arjun founded Mindexa with a mission to help businesses achieve digital excellence through innovative strategies.",
      expertise: ["Business Strategy", "Digital Transformation", "Leadership"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "arjun@mindexa.com"
      }
    },
    {
      name: "Priya Sharma",
      position: "Creative Director",
      image: teamMarketing,
      bio: "Award-winning creative professional with expertise in brand identity and digital campaigns. Priya leads our creative team to deliver stunning visual experiences.",
      expertise: ["Brand Design", "Creative Strategy", "Campaign Management"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "priya@mindexa.com"
      }
    },
    {
      name: "Rohit Kumar",
      position: "Lead Developer",
      image: teamDeveloper,
      bio: "Full-stack developer passionate about creating scalable web solutions. Rohit ensures our clients get cutting-edge, high-performance websites and applications.",
      expertise: ["React/Next.js", "Node.js", "System Architecture"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "rohit@mindexa.com"
      }
    },
    {
      name: "Anisha Gupta",
      position: "UX/UI Designer",
      image: teamDesigner,
      bio: "User-centered design expert who creates intuitive and beautiful digital experiences. Anisha bridges the gap between user needs and business goals.",
      expertise: ["User Research", "Interface Design", "Prototyping"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "anisha@mindexa.com"
      }
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "25+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "4", label: "Team Members" }
  ];

  return (
    <Layout>
      <div className="py-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Meet Our{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Creative Team
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              We're a passionate team of digital experts dedicated to turning your ideas into successful digital experiences. Get to know the minds behind Mindexa.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Our Amazing Team
              </h2>
              <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-gradient-card rounded-3xl p-8 shadow-card hover:shadow-hover transition-all duration-500 transform hover:scale-105"
                >
                  <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-6">
                    {/* Profile Image */}
                    <div className="flex-shrink-0">
                      <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-card">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {member.name}
                      </h3>
                      <p className="text-primary font-semibold mb-4">
                        {member.position}
                      </p>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {member.bio}
                      </p>

                      {/* Expertise Tags */}
                      <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-6">
                        {member.expertise.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Social Links */}
                      <div className="flex justify-center sm:justify-start space-x-4">
                        <a
                          href={member.social.linkedin}
                          className="text-muted-foreground hover:text-primary transition-colors duration-300"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                          href={member.social.twitter}
                          className="text-muted-foreground hover:text-primary transition-colors duration-300"
                        >
                          <Twitter className="w-5 h-5" />
                        </a>
                        <a
                          href={`mailto:${member.social.email}`}
                          className="text-muted-foreground hover:text-primary transition-colors duration-300"
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your project and see how our team can help bring your vision to life.
            </p>
            <Button variant="hero" size="xl">
              Start Your Project
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default TeamPage;