import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold">Who I Am</h3>
                <p className="text-muted-foreground">
                  I'm a dedicated developer with a knack for creating efficient
                  and elegant solutions to complex problems. My journey in tech
                  started with a curiosity for how things work, leading me to
                  explore various programming languages and frameworks.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold">What I Do</h3>
                <p className="text-muted-foreground">
                  I specialize in full-stack development, crafting seamless user
                  experiences while ensuring robust backend functionality.
                  Whether it's building responsive web applications or
                  optimizing performance, I thrive on delivering high-quality
                  code that meets user needs.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <a href="#contact" className="cosmic-button">
                  Contact Me
                </a>
                <a
                  href="/resume.pdf"
                  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/25 transition-colors duration-300"
                >
                  View Resume
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Code className="h-6 w-6 text-primary"></Code>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Web Development</h4>
                    <p className="text-muted-foreground">
                      Building responsive and dynamic websites using modern
                      technologies.
                    </p>
                  </div>
                </div>
              </div>
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <User className="h-6 w-6 text-primary"></User>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">UX/UI design</h4>
                    <p className="text-muted-foreground">
                      Crafting intuitive and engaging user interfaces for better
                      user experiences.
                    </p>
                  </div>
                </div>
              </div>
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Briefcase className="h-6 w-6 text-primary"></Briefcase>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">
                      Project management
                    </h4>
                    <p className="text-muted-foreground">
                      Leading projects from concept to completion with agile
                      methodologies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
