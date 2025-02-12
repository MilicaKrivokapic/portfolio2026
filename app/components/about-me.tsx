'use client';
import { useState } from 'react';

export default function AboutMe() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p className="text-xl leading-relaxed mb-6">
        I&apos;ve always been drawn to the enchanting dance between creativity and technology. Even as a child, 
        I spent endless hours in front of a computer—writing stories, editing photos, and immersing myself in 
        games where my imagination ran wild.
      </p>
      
      <div className={`transition-all duration-500 space-y-6 ${isExpanded ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
        <p className="leading-relaxed">
          My professional journey has been wonderfully eclectic—a garden of branching paths, if you will. 
          In my youth, I tried my hand at elderly care, shelved books as a library assistant, operated an 
          industrial dishwasher in a large kitchen, and even worked in a shop that sold only white decor items.
        </p>

        <p className="leading-relaxed">
          Enrolling in media studies became a turning point, guiding me toward creative self-expression in 
          visual arts and the more technical aspects of video post-production. It also introduced me to the 
          basics of web design. After graduation, I joined a media cooperative and took on diverse gigs: 
          filming music videos for aging punk legends, capturing events like weddings and expos, and even 
          trying my hand at voice acting.
        </p>

        <p className="leading-relaxed">
          The media cooperative went bankrupt and the pandemic struck, forcing me to rethink my path just 
          as the world was about to change dramatically. Seeking a new challenge, I turned to web development. 
          Much like photography had done before, coding hooked me from the very first project.
        </p>

        <p className="leading-relaxed">
          Though I&apos;m less focused on coding these days, my heart remains firmly in the realm of inclusive 
          digital experiences. I&apos;m driven by the conviction that our online spaces shine brightest when 
          they&apos;re built with empathy, ensuring that nobody is left behind and the design is made for everyone.
        </p>

        <p className="leading-relaxed">
          Ultimately, I believe technology is at its best when it fosters genuine connection, creativity, 
          and delight for every user.
        </p>
      </div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-4 text-primary-light dark:text-primary-dark border border-accent-light dark:border-accent-dark hover:bg-accent-light/10 dark:hover:bg-accent-dark/10 transition-all focus:outline-none focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark rounded-md px-3 py-1.5"
      >
        {isExpanded ? 'Read less' : 'Read more'}
      </button>
    </div>
  );
}
