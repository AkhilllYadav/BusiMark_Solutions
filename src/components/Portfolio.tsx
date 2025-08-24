import React from "react";

const projects = [
  {
    category: "Graphics",
    title: "Creative Poster Design",
    img: "./assets/graphics1.jpg",
    link: "https://dribbble.com/your-link"
  },
  {
    category: "Social Media",
    title: "Instagram Campaign",
    img: "./assets/social1.jpg",
    link: "https://instagram.com/your-link"
  },
  {
    category: "Ads",
    title: "Google Ads Campaign",
    img: "./assets/ads1.jpg",
    link: "https://yourwebsite.com/ads-campaign"
  },
  {
    category: "Website",
    title: "Corporate Website",
    img: "./assets/website1.jpg",
    link: "https://yourclientwebsite.com"
  },
  {
    category: "E-commerce",
    title: "Online Store",
    img: "./assets/ecommerce1.jpg",
    link: "https://yourstore.com"
  }
];

const Portfolio = () => {
  return (
    <section className="py-16 px-6 bg-gradient-hero" id="portfolio">
      <h2 className="text-3xl font-bold text-center mb-10">Portfolio</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <span className="text-sm text-gray-500">{project.category}</span>
              <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
