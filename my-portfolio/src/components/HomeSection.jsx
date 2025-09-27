import { ArrowDown } from 'lucide-react';

export const HomeSection = () => {
    return (
      <section
        id="home"
        className="relative min-h-screen flex flex-col justify-center items-center px-4"
      >
        <div className="container max-w-4xl mx-auto text-center z-10">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="animate-fade-in">Hi, I'm </span>
              <span
                className="text-primary animate-fade-in-delay-1">
                {" "}
                Hoang
              </span>
              <span
                className="text-gradient ml-2 animate-fade-in-delay-2">
                Duyen
              </span>
            </h1>
            <p
              className="text-lg md:text-xl text-muted-foreground max-2-3xl mx-auto animate-fade-in-delay-3"
            >
              I am a passionate Fullstack Developer with experience in building
              scalable web applications from front-end to back-end. Skilled in
              modern frameworks, databases, and cloud technologies, I enjoy
              turning ideas into functional, user-friendly solutions
            </p>
            <div className='pt-4 opacity-0 animate-fade-in-delay-4'>
              <a href='#projects' className='cosmic-button'>View My Work</a>
            </div>
          </div>
        </div>

        <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex fex-col items-center animate-bounce'>
          <span className='text-sm text-muted-foreground mb-2'>Scroll</span>
          <ArrowDown className='h-5 w-5 text-primary'></ArrowDown>
        </div>
      </section>
    );
}