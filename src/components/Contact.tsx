import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Calendar } from "lucide-react";

const Contact = () => {
  // Load Tally script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Check if Tally is available and call loadEmbeds
      if ((window as any).Tally) {
        (window as any).Tally.loadEmbeds();
      } else {
        // Fallback: manually load iframes with data-tally-src
        document.querySelectorAll('iframe[data-tally-src]:not([src])').forEach((iframe: any) => {
          iframe.src = iframe.dataset.tallySrc;
        });
      }
    };

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Address",
      details: "123 Business Avenue, Tech District, Mumbai 400001, India"
    },
    {
      icon: Phone,
      title: "Phone Number",
      details: "+91 89488 90610, +91 92114 79010"
    },
    {
      icon: Mail,
      title: "Email Address",
      details: "services@thetrioX.com"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Let's Work Together 🚀
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to take your business to the next level? Get in touch with us today and let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Tally Form Embed */}
          <div className="bg-gradient-card rounded-3xl p-8 shadow-card hover:shadow-hover transition-all duration-500">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Send us a message</h3>
            <div className="w-full">
              <iframe 
                data-tally-src="https://tally.so/embed/3jqWqY?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                loading="lazy" 
                width="100%" 
                height="476" 
                style={{ border: 'none' }}
                title="Send a Message"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Get in touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We're here to help you succeed. Whether you have questions about our services or want to discuss your next project, we'd love to hear from you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-gradient-card rounded-2xl shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                    <p className="text-muted-foreground">{info.details}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Schedule Call Button */}
            <div className="pt-6">
              <Button variant="cta" size="lg" className="w-full">
                <Phone className="w-5 h-5 mr-2" />
                <a href="tel:+918948890610">Discuss Your Project</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;