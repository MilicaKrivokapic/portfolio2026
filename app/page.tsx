import Projects from './components/projects';
import Skills from './components/skills';
import Contact from './components/contact';
import AboutMe from './components/about-me';

export default function Home() {
  return (
    <div className="space-y-32">
      <section id="about" className="space-y-8">
        <h2 className="text-7xl font-bold">
          Building accessible
          <span className="text-accent-light"> digital experiences</span>
        </h2>
        <AboutMe />
      </section>

      <section id="experience" className="space-y-12">
        <Skills />
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
