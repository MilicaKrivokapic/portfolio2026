import Projects from './components/projects';
import Skills from './components/skills';
import Contact from './components/contact';
import AboutMe from './components/about-me';
import Recommendations from './components/recommendations';

export default function Home() {
  return (
    <div className="px-6 py-12 md:py-24 space-y-32 max-w-4xl mx-auto">
      <section id="about" className="space-y-8">
        <h2 className="text-4xl md:text-7xl font-bold font-heading">
          Building accessible
          <span className="text-accent-light dark:text-accent-dark"> digital experiences</span>
        </h2>
        <AboutMe />
      </section>

      <section id="experience" className="space-y-12">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="recommendations">
        <Recommendations />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
