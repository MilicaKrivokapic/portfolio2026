import Projects from './components/projects';
import Skills from './components/skills';
import Contact from './components/contact';

export default function Home() {
  return (
    <div className="space-y-32">
      <section id="about" className="space-y-8">
        <h2 className="text-7xl font-bold">
          Building accessible
          <span className="text-accent-light"> digital experiences</span>
        </h2>
        <p className="text-xl text-muted-light dark:text-muted-dark max-w-2xl">
          Specialized in creating inclusive web applications that work for everyone.
          Currently focusing on accessibility-first design systems.
        </p>
      </section>

      <section id="experience" className="space-y-12">
        <h2 className="text-3xl font-bold">Experience</h2>
        {/* Add experience items */}
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
