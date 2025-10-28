export type Language = 'en' | 'fi';

// Minimal structural typing so both languages share the same shape including parhaatPontot
type ParhaatPontotSection = {
  title: string;
  intro: string;
  cardHeading: string;
  cardCaption: string;
  cardAlt: string;
  cardIntro: string;
  features: string[];
  techNote: string;
};

type RootTranslations = {
  common: unknown;
  nav: unknown;
  blog: unknown;
  about: unknown;
  contact: unknown;
  skills: unknown;
  sidebar: unknown;
  recommendations: unknown;
  projects: unknown;
  audits: unknown;
  parhaatPontot: ParhaatPontotSection;
};

export const translations: Record<Language, RootTranslations> = {
  en: {
    common: {
      backToTop: 'Back to top',
    },
    nav: {
      home: 'Home',
      blog: 'Blog',
      projects: 'Projects',
      photos: 'Photos',
    },
    blog: {
      heading: 'Blog',
      intro: "Thoughts on accessibility and web development in general",
      all: 'All',
      loadMore: 'Load More',
      latestHeading: 'Latest posts',
      seeAll: 'See all posts'
    },
    about: {
      title: 'About Me',
      titleJourney: '& my journey',
      heroGreeting: "Hi! I'm Milica,",
      heroTagline: "I help make the web more accessible!",
      aboutMeButton: 'About Me',
      seeWorksButton: 'See Works',
      readMore: 'Read more',
      readLess: 'Read less',
      summary: "Helsinki-based accessibility and web specialist. I build clear, inclusive digital experiences for everyone.",
      intro: "Hi! I'm Milica, a Helsinki-based professional who has tried my hand at various fields - from elderly care to working as a library assistant, operating industrial dishwashers in large kitchens, and even working in a shop selling exclusively white décor items... You name it.",
      career: "My first real passion was photography and image editing, which I enjoyed for many years. Eventually, I found a new direction in web development when accessibility brought a whole new sense of meaning and purpose to my work. I'm also deeply interested in QA work and audits.",
      education: "I enjoy problem-solving, love the flow of teamwork, and want to make the web a more welcoming and accessible place for everyone. I’m now looking for a remote or hybrid position in accessibility auditing or manual QA testing, where I can keep growing and help make digital products more inclusive. If you're looking for a positive, happy, continuously self-learning, AI-friendly, and motivated team member, here I am! 👋",
      transition: "",
      current: "",
      conclusion: ""
    },
    contact: {
      title: 'Get in Touch',
      intro: 'Feel free to contact me any time!',
      emailLabel: 'Email',
      callLabel: 'Call',
      bookLabel: 'Book',
      bookMeeting: 'Book a meeting',
      locationLabel: 'Location',
      formHeading: 'Or shoot me a message!',
      connectHeading: 'Connect with me',
      nameLabel: 'Your Name',
      emailFieldLabel: 'Your Email',
      messageLabel: 'Your Message',
      namePlaceholder: 'Enter your name',
      emailPlaceholder: 'Enter your email address',
      messagePlaceholder: 'Write your message here...',
      sendButton: 'Send Message',
      sending: 'Sending...',
      successMessage: 'Thank you! Your message has been sent successfully.',
      errorMessage: 'Sorry, there was an error sending your message. Please try again.',
      connect: "Let's Connect",
      reachOut: 'Feel free to reach out for collaborations or just a friendly hello',
      sendEmail: 'Send me an email',
      name: 'Your Name',
      email: 'Your Email',
      message: 'Your Message',
      send: 'Send Message'
    },
    skills: {
      title: 'Skills & Expertise',
    },
    sidebar: {
      role: 'Accessibility Enthuastic & UI Web Developer',
      home: 'Home',
      about: 'About',
      experience: 'Skills & Expertise',
      projects: 'Projects',
      recommendations: 'Recommendations',
      blog: 'Visit the blog',
      contact: 'Contact'
    },
    recommendations: {
      title: 'What people say about me',
    },
    projects: {
      featuredWork: 'Featured Work',
      seeProject: 'See Project',
      seeAll: 'See all projects',
      accessibilityAudits: 'Accessibility Audits',
      accessibilityAuditsDesc: 'A comprehensive dashboard for monitoring web accessibility metrics and WCAG compliance.',
      underConstruction: 'Under construction'
    },
    audits: {
      preview: 'Preview',
      previewScroll: 'Scroll down'
    },
    parhaatPontot: {
      title: 'Parhaat Pöntöt - Best Seats',
      intro: 'Accessibility audit for site rating and documenting Helsinki\'s most iconic and most horrible public restrooms.',
      cardHeading: 'Project Sneak Peek',
      cardCaption: 'Map view presents a new challenge for accessibility evaluation and recommendations',
      cardAlt: 'Example table showing toilet seat ratings',
      cardIntro: 'Accessibility audit for a site that shows and rates public restrooms across Helsinki:',
      features: [
        'Includes: accessibility and cognitive audit for Best Seats in Helsinki',
        'PDF report with findings and recommendation, includes cognitive accessibility aspects',
        'Accessibility statement PDF',
      ],
  techNote: 'Lessons and biggest challenges: How to evaluate and improve map view accessibility',
    }
  },
  fi: {
    common: {
      backToTop: 'Takaisin ylös',
    },
    nav: {
      home: 'Etusivu',
      blog: 'Blogi',
      projects: 'Projektit',
      photos: 'Kuvat',
    },
    blog: {
      heading: 'Blogi',
      intro: 'Pohdintoja saavutettavuudesta ja ylipäätään web-kehityksestä',
      all: 'Kaikki',
      loadMore: 'Näytä lisää',
      latestHeading: 'Uusimmat kirjoitukset',
      seeAll: 'Näytä kaikki'
    },
    about: {
      title: 'Minusta',
      titleJourney: '& matkastani',
      heroGreeting: "Heippa! Olen Milica,",
      heroTagline: "ja autan tekemään webistä saavutettavampaa!",
      aboutMeButton: 'Minusta',
      seeWorksButton: 'Katso työt',
      readMore: 'Lue lisää',
      readLess: 'Lue vähemmän',
      summary: "Olen helsinkiläinen saavutettavuus- ja web-intoilija, jonka juuret ovat media-alalla. Rakennan selkeitä, inklusiivisia ja erottuvia web-kokonaisuuksia, jotka ovat saavutettavia kaikille.",
      intro: "Heippa! Olen Milica, iloinen helsinkiläinen tyyppi, joka on dipannut varpaitaan kaikenlaisissa keitoksissa - olen kokeillut nuoruudessani mm. vanhustyötä, aakkostanut opuksia kirjastotätinä, huhkinut teollisuustiskikoneen ääressä suurkeittiössä, työskennellyt vain valkoisia esineitä myyvässä sisustuskaupassa... You name it.",
      career: "Ensimmäinen intohimoni oli valokuvaus ja kuvankäsittely, jonka parissa viihdyin monta vuotta. Löysin uuden suunnan verkkosivujen kehittämisestä, jossa edellisistä taidoista kuitenkin oli hyötyä.  Saavutettavuus toi työhön aivan uudenlaisen merkityksellisyyden tunteen, joka puskee itseäni uralla eteenpäin. Myös QA-hommat ja auditoinnit kiinnostavat ja innostavat!",
      education: "Tykkään ratkoa ongelmia, rakastan tiimityön flow-fiilistä ja haluan ehdottomasti tehdä verkosta kaikille vähän ystävällisemmän ja helpomman paikan olla ja elää. Olen nyt etsimässä saavutettavuusauditointiin tai QA:han liittyvää työtä, jossa pystyn jatkuvasti kehittymään niin itsenäisesti kuin myös sitten yhdessä tulevan tiimini kanssa. Jos etsit positiivista, innokasta, jatkuvasti itseopiskelevaa, AI- (ja muutenkin uudistusmyönteistä) ja motivoitunutta tekijää tiimiisi, niin täällä ollaan! 👋",
      transition: "",
      current: "",
      conclusion: ""
    },
    contact: {
      title: 'Ota yhteyttä',
      intro: 'Ota yhteyttä milloin vain!',
      emailLabel: 'Sähköposti',
      callLabel: 'Soita',
      bookLabel: 'Google Meet',
      bookMeeting: 'Varaa tapaaminen',
      locationLabel: 'Sijainti',
      formHeading: 'Tai nakkaa mulle viesti!',
      connectHeading: 'Ota yhteyttä',
      nameLabel: 'Nimi',
      emailFieldLabel: 'Sähköposti',
      messageLabel: 'Viestisi',
      namePlaceholder: 'Heippa Heippalainen',
      emailPlaceholder: 'heippa@heippa.com',
      messagePlaceholder: 'Haluaisin keskustella kanssasi Kaizen-filosofiasta työn kontekstissa...',
      sendButton: 'Lähetä viesti',
      sending: 'Lähetetään...',
      successMessage: 'Kiitos! Viestisi heilahti matkaaan.',
      errorMessage: 'Pahoittelut, viestin lähetyksessä tapahtui virhe. Yritäppäs uudelleen.',
      connect: 'Ollaan yhteydessä',
      reachOut: 'Otahan yhteyttä jos kiinnostuit musta työntekijänä, tai vain sanoaksesi moikka',
      sendEmail: 'Lähetä sähköpostia',
      name: 'Nimesi',
      email: 'Sähköpostisi',
      message: 'Viestisi',
      send: 'Lähetä viesti'
    },
    skills: {
      title: 'Taidot & Osaaminen',
    },
    sidebar: {
      role: 'Saavutettavuusasintoilija & web-kehittäjä',
      home: 'Etusivu',
      about: 'Minusta',
      experience: 'Taidot & osaaminen',
      projects: 'Projektit',
      recommendations: 'Suositukset',
      blog: 'Siirry blogiin',
      contact: 'Yhteystiedot'
    },
    recommendations: {
      title: 'Mitä muut sanovat minusta',
    },
    projects: {
      featuredWork: 'Töitäni',
      seeProject: 'Katso projekti',
      seeAll: 'Näytä kaikki projektit',
      accessibilityAudits: 'Saavutettavuusauditoinnit',
      accessibilityAuditsDesc: 'Saavutettavuusraportteja joiden tarkoituksena on auttaa ja selkeyttää sivujen kognitiivista ja teknistä saavutettavuutta.',
      underConstruction: 'Rakenteilla'
    },
    audits: {
      preview: 'Esikatselu',
      previewScroll: 'Scrollaa alas'
    },
    parhaatPontot: {
      title: 'Parhaat Pöntöt',
      intro: 'Saavutettavuusauditointi Helsingin julkisia vessoja esittelevälle ja arvioivalle verkkosivustolle',
      cardHeading: 'Projektin esikatselu',
      cardCaption: 'Karttanäkymä asettaa itselleni uudenlaisen haasteen saavutettavuuden arvioinnin ja suositusten kannalta',
      cardAlt: 'Esimerkkitaulukko, jossa näkyy WC-istuinten arvosteluja järjestettävissä sarakkeissa',
      cardIntro: 'aavutettavuus- ja kognitiivisen saavutettavuuden auditointi sivustolle Best Seats in Helsinki - Parhaat Pöntöt',
      features: [
        'Löydöksiä ja suosituksia sisältävä raportti (PDF)',
        'Saavutettavuusseloste (PDF)',
      ],
  techNote: 'Projektin opetukset ja suurimmat haasteet: Miten arvioida ja parantaa karttasovelluksen saavutettavuutta?',
    }
  },
};

