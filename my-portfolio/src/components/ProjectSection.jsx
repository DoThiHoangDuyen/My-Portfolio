import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "WareHouse Management System",
    description:
      "A management system designed for handling vehicles, manufacturers, and infrastructure, enabling efficient tracking, organization, and administration of assets.",
    image: "/projects/project_1.png",
    tags: ["Spring boot", "Bootstrap 5", "MySQL"],
    demoURL: "https://tip-vehiclemanagement.vercel.ap",
    linkGitHub: "#",
  },
  {
    id: 2,
    title: "TechStore E-commerce",
    description:
      "An e-commerce management system focused on smartphones, providing features for product cataloging, inventory tracking, and streamlined sales operations.",
    image: "/projects/project_1.png",
    tags: ["ReactJS", "Spring boot", "MySQL"],
    demoURL: "#",
    linkGitHub: "#",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of the projects I have worked on, showcasing my skills
          in backend development with Java and Spring Boot, as well as frontend
          technologies. Each project highlights my ability to design, build, and
          manage real-world applications.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                ></img>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, key) => (
                    <span
                      key={key}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {project.description}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                  <a
                    href={project.demoURL}
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    target="_blank"
                  >
                    <ExternalLink size={20}></ExternalLink>
                  </a>
                  <a
                    href={project.linkGitHub}
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    target="_blank"
                  >
                    <Github size={20}></Github>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/HoangDuyen2"
          >
            Check My Github <ArrowRight size={16}></ArrowRight>
          </a>
        </div>
      </div>
    </section>
  );
};
