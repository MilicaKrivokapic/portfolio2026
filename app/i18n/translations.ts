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

type PortfolioAuditSection = {
  title: string;
  intro: string;
  cardHeading: string;
  cardCaption: string;
  cardAlt: string;
  cardIntro: string;
  features: string[];
  techNote: string;
};

type BriljantAuditContent = {
  introductionTitle: string;
  introduction: string;
  objective: string;
  context: string;
  disclaimer: string;
  priorities: {
    title: string;
    high: string;
    medium: string;
    low: string;
    recommendations: string;
  };
  remediation: {
    title: string;
    content: string;
  };
  methods: {
    title: string;
    content: string;
  };
  issues: {
    title: string;
    highPriority: string;
    contrast: string;
    contrastDetails: string;
    lowPriority: string;
    heading: string;
    recommendations: string;
    formNotes: string;
  };
};

type RootTranslations = {
  common: unknown;
  nav: unknown;
  blog: unknown;
  about: unknown;
  contact: unknown;
  skills: unknown;
  timeline: unknown;
  qa: unknown;
  sidebar: unknown;
  recommendations: unknown;
  projects: unknown;
  audits: unknown;
  parhaatPontot: ParhaatPontotSection;
  portfolioAudit: PortfolioAuditSection;
  briljantAudit: BriljantAuditContent;
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
      heroTagline: "Junior QA",
      aboutMeButton: 'About Me',
      seeWorksButton: 'See Works',
      readMore: 'Read more',
      readLess: 'Read less',
      summary: "I find issues, write dev-ready tickets, and verify fixes with keyboard and screen readers. I can also implement accessibility and UI improvements in HTML/CSS/React.",
      intro: "Hi! I'm Milica, Helsinki based. I'm a curious, upbeat person who genuinely enjoys learning new things and getting better at my craft. My career has taken a few turns. I have done hands on work in different fields, and I moved into web projects later on. That mix has made me practical, detail oriented, and very comfortable working with people. I like clear expectations, repeatable processes, and work you can actually verify.",
      career: "Accessibility is what gave web development real meaning for me. I love the feeling of taking something confusing and turning it into something clear and usable for more people. I'm now transitioning into junior QA, testing, and accessibility focused frontend work. I test user flows, write dev ready tickets, and verify fixes with keyboard and screen readers. When needed, I can also implement accessibility and UI improvements in HTML, CSS, and React.",
      education: "I'm AI positive in a practical way. I use AI to speed up documentation and test setup, for example scaffolding Playwright tests. I still validate everything with manual checks and clear acceptance criteria. I care a lot about doing things properly, and I also like moving forward steadily and keeping the work enjoyable.",
      transition: "",
      current: "Right now I'm looking for a remote or hybrid role where I can grow in a structured team, contribute from day one, and bring good energy to the people I work with.",
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
    timeline: {
      title: 'My Journey',
    },
    qa: {
      title: 'Q&A',
    },
    sidebar: {
      role: 'Junior QA & Frontend (Accessibility-focused)',
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
      askForContactDetails: 'Ask for contact details',
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
      previewScroll: 'Scroll down',
      whatAndWhy: 'What and Why',
      whatAndWhyDescription: {
        beforeLink: 'I conducted an accessibility review for the website of Briljant, a new cooperative founded by my former colleagues. I wanted to support their work while also exploring how well the site meets accessibility requirements. You can read more about the project background ',
        linkText: 'here',
        afterLink1: '.',
        middleText: 'The testing process was both engaging and educational.',
        afterLink2: ' Most of the findings were minor and easy to fix, and I also learned how browser and operating system language settings can affect the accessibility of form elements. Overall, the Briljant.fi accessibility report turned out fairly minimal simply because there were very few issues to report.'
      },
      fullReport: 'Accessibility Audit Report'
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
    },
    portfolioAudit: {
      title: 'Portfolio Accessibility Audit',
      intro: 'A self-audit of this portfolio website to identify accessibility improvements and document the process.',
      cardHeading: 'Project Sneak Peek',
      cardCaption: 'Starting point of the portfolio',
      cardAlt: 'Accessibility audit findings and recommendations for portfolio website',
      cardIntro: 'An ongoing accessibility audit project for this portfolio website:',
      features: [
        'WCAG 2.2 A–AA compliance evaluation',
        'Automated and manual testing with screen readers',
        'Documentation of findings and remediation process',
        'Focus on continuous improvement and best practices',
      ],
      techNote: 'Lessons and key challenges: It’s harder to notice your own mistakes and humbling to realize how easy it is to overlook accessibility requirements yourself, even if you know about them.',
    },
    briljantAudit: {
      introductionTitle: "Introduction",
      introduction: "This accessibility evaluation was prepared for the Briljant OSK website. The assessment was conducted by Milica Krivokapic (hereafter \"the author\") between 1 May and 20 June 2025. The work is based on the Web Content Accessibility Guidelines (WCAG) version 2.2, with a primary focus on conformity with Level A and AA success criteria. Where relevant, the report also provides recommendations related to AAA-level requirements or other measures that improve usability and accessibility.",
      objective: "The objective of the evaluation is to identify issues that may prevent or hinder the use of the site or the understanding of its content. Addressing these issues will improve the usability and accessibility of the service and help meet the obligations of the Finnish Act on the Provision of Digital Services. Accessibility is not only a legal requirement; it also supports an equal and high-quality web experience.",
      context: "Over one million people in Finland require accessible digital services due to, for example, sensory, motor, or cognitive limitations. Moreover, accessibility benefits all users in contexts where devices or environments temporarily affect a person's ability to act. A highly accessible service is often clearer, easier to understand, and more robust from a technical standpoint.",
      disclaimer: "This report was prepared free of charge as a practice project. Although the assessment has been carried out carefully and to the best of current expertise, it may not cover every possible accessibility shortcoming. The author is not responsible for any legal consequences arising from following or not following the recommendations.",
      priorities: {
        title: "Fixing recommendations and priorities",
        high: "High-priority issues significantly prevent or hinder use of the service, for example for screen reader users or those relying on assistive technologies. These issues often conflict clearly with WCAG criteria and the requirements of the Digital Services Act. It is recommended to address these issues first and without delay.",
        medium: "Medium-priority issues do not prevent use of the service but reduce usability or comprehension for certain user groups. Fixing these issues helps meet accessibility requirements and improves the overall user experience.",
        low: "Low-priority issues have a minor impact. They are not typically direct violations of WCAG requirements, but individually or in combination may reduce the service's usability.",
        recommendations: "Recommendations relate to situations where clarity or usability could be improved even if no technical error is present. Considering these points supports continuous improvement of accessibility and a high-quality service experience."
      },
      remediation: {
        title: "Fixes and next steps",
        content: "In particular, high- and medium-priority issues should be addressed to ensure the site meets the requirements of the Digital Services Act and is accessible for different user groups. Resolving all shortcomings also supports a better user experience and strengthens overall service quality. When fixes are implemented, their accessibility impact should be verified through re-testing. If any issues remain unresolved, they must be documented in the accessibility statement. Material shortcomings should be proactively reported to the supervisory authority."
      },
      methods: {
        title: "Audit methods",
        content: "The evaluation is based on WCAG 2.2 success criteria at Levels A and AA. The assessment also considers Finnish and EU accessibility legislation, including the amendments to the Digital Services Act entering into force on 28 June 2025, which introduce new requirements for, for example, e-commerce. Cognitive accessibility was assessed with reference to the criteria developed by the Selkeästi meille project. The audit combines automated and manual methods. Automated checks used the WAVE extension and Google Chrome Lighthouse. Manual testing was performed with keyboard navigation and the following screen readers: NVDA (Windows), TalkBack (Android), and VoiceOver (iOS). Mobile use was evaluated in addition to browser developer tools with physical devices: iPhone 12 mini and MacBook Pro (M1). Responsiveness and usability were tested in practice."
      },
      issues: {
        title: "Accessibility issues",
        highPriority: "High priority",
        contrast: "Insufficient text contrast",
        contrastDetails: "The text contrast on a dark background is very close to the WCAG 2.2 AA threshold for normal-sized text (calculated value approximately 4.49:1). Firefox's accessibility checker considers the combination sufficient, but more conservative tools (e.g., WebAIM) flag it as slightly below the requirement. If you want to ensure conformance in all contexts, a lighter text color in the footer is recommended. This is not strictly necessary, however.",
        lowPriority: "Low-priority recommendations",
        heading: "Heading hierarchy",
        recommendations: "Recommendations",
        formNotes: "If the email address is omitted and the form is submitted, the entire form clears on submit, requiring the user to re-enter all fields. For the \"phone number\" field, the invalid input message appears in English, whereas in the email field it appears in Finnish and in a different position. This may be slightly confusing, though it is unlikely to be a significant issue for most users. When a field is active, the label shrinks. It is good that the label remains visible—this is preferable for usability compared to labels that disappear entirely. However, some users may not see the reduced text clearly. Similarly, the \"Email is empty or invalid\" message is displayed at a relatively small size. This may not require action—making everything 100% accessible is not always feasible. The screen reader reads the warning text correctly."
      }
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
      heroTagline: "Junior QA",
      aboutMeButton: 'Minusta',
      seeWorksButton: 'Katso työt',
      readMore: 'Lue lisää',
      readLess: 'Lue vähemmän',
      summary: "Tunnistan ongelmat, teen niistä kehittäjälle selkeät tiketit ja varmistan korjaukset näppäimistöllä ja ruudunlukijoilla. Tarvittaessa toteutan myös saavutettavuus- ja UI-parannuksia HTML/CSS/Reactilla.",
      intro: "Heippa! Olen Milica, helsinkiläinen. Olen utelias ja positiivinen tyyppi, joka oikeasti nauttii uusien asioiden oppimisesta ja oman osaamisen kehittämisestä. Urallani on ollut muutamia mutkia. Olen tehnyt käytännön hommia eri aloilla ja päädyin web-projekteihin vasta myöhemmin. Tämä yhdistelmä on tehnyt minusta käytännönläheisen, yksityiskohtiin tarkkaan ja ihmisten kanssa hyvin toimeen tulevan. Pidän selkeistä odotuksista, toistettavista prosesseista ja työstä, jonka tulokset voi varmistaa.",
      career: "Saavutettavuus on se, mikä toi web-kehitykseen todellisen merkityksen minulle. Rakastan sitä tunnetta, kun saa muutettua jotain sekavaa selkeäksi ja käytettäväksi useammalle ihmiselle. Olen nyt siirtymässä junior QA:han, testaukseen ja saavutettavuuteen keskittyvään frontend-työhön. Testaan käyttäjävirtoja, kirjoitan kehittäjille valmiit tiketit ja varmistan korjaukset näppäimistöllä ja ruudunlukijoilla. Tarvittaessa voin myös toteuttaa saavutettavuus- ja UI-parannuksia HTML:llä, CSS:llä ja Reactilla.",
      education: "Suhtaudun tekoälyyn positiivisesti ja käytännönläheisesti. Käytän tekoälyä nopeuttamaan dokumentointia ja testien alustusta, esimerkiksi Playwright-testien rungon luomisessa. Varmistan silti kaiken manuaalisilla tarkistuksilla ja selkeillä hyväksymiskriteereillä. Välitän paljon siitä, että asiat tehdään kunnolla, ja pidän myös siitä, että edetään tasaisesti ja työ pysyy mukavana.",
      transition: "",
      current: "Etsin tällä hetkellä etä- tai hybridiroolia, jossa voin kasvaa strukturoidussa tiimissä, kontribuoida heti alusta alkaen ja tuoda hyvää energiaa niille, joiden kanssa työskentelen.",
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
    timeline: {
      title: 'Matkani',
    },
    qa: {
      title: 'Kysymyksiä & Vastauksia',
    },
    sidebar: {
      role: 'Junior QA & frontend (saavutettavuuspainotteinen)',
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
      askForContactDetails: 'Kysy yhteystietoja',
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
      previewScroll: 'Scrollaa alas',
      whatAndWhy: 'Mitä ja miksi',
      whatAndWhyDescription: {
        beforeLink: 'Tein saavutettavuuskatsauksen entisten kollegoideni perustaman uuden osuuskunnan Briljantin, verkkosivuille. Halusin tukea heidän työtään ja samalla tutkia, miten hyvin sivusto täyttää saavutettavuuden vaatimukset. Halutessasi voit lukea enemmän projektin taustasta ',
        linkText: 'tässä',
        afterLink1: '.',
        middleText: 'Testaus oli innostavaa ja opettavaista.',
        afterLink2: ' Useimmat havainnot olivat pieniä ja helposti korjattavia. Opin samalla, miten selaimen ja käyttöjärjestelmän kieliasetukset voivat vaikuttaa lomakkeiden saavutettavuuteen. Kokonaisuutena Briljantin sivuston saavutettavuusraportti jäi aika ohueksi, koska virheitä oli vähän.'
      },
      fullReport: 'Saavutettavuusauditointiraportti'
    },
    parhaatPontot: {
      title: 'Parhaat Pöntöt',
      intro: 'Saavutettavuusauditointi Helsingin julkisia vessoja esittelevälle ja arvioivalle verkkosivustolle',
      cardHeading: 'Projektin esikatselu',
      cardCaption: 'Karttanäkymä asettaa itselleni uudenlaisen haasteen saavutettavuuden arvioinnin ja suositusten kannalta',
      cardAlt: 'Esimerkkitaulukko, jossa näkyy WC-istuinten arvosteluja järjestettävissä sarakkeissa',
      cardIntro: 'Saavutettavuus- ja kognitiivisen saavutettavuuden auditointi sivustolle Best Seats in Helsinki - Parhaat Pöntöt',
      features: [
        'Löydöksiä ja suosituksia sisältävä raportti (PDF)',
        'Saavutettavuusseloste (PDF)',
      ],
  techNote: 'Projektin opetukset ja suurimmat haasteet: Miten arvioida ja parantaa karttasovelluksen saavutettavuutta?',
    },
    portfolioAudit: {
      title: 'Portfolion saavutettavuusauditointi',
      intro: 'Oma portfolio-verkkosivustoni saavutettavuusauditointi, jossa tunnistetaan parannuskohteita ja dokumentoidaan prosessi.',
      cardHeading: 'Projektin esikatselu',
      cardCaption: 'Sivun pohja',
      cardAlt: 'Portfolion saavutettavuusauditoinnin löydökset ja suositukset',
      cardIntro: 'Käynnissä oleva saavutettavuusauditointiprojekti tälle portfoliosivustolle:',
      features: [
        'WCAG 2.2 A–AA -vaatimusten täyttymisen arviointi',
        'Automaattinen ja manuaalinen testaus ruudunlukijoilla',
        'Löydösten ja korjausprosessin dokumentointi',
        'Keskittyminen jatkuvaan parantamiseen ja parhaisiin käytäntöihin',
      ],
      techNote: 'Projektin opetukset ja suurimmat haasteet: On vaikeampi huomata omia virheitään, ja myös nöyristyttävä sen edessä, että itselläkin unohtuu helposti huomioida kaikkia saavutettavuusvaatimuksia!',
    },
    briljantAudit: {
      introductionTitle: "Johdanto",
      introduction: "Tämä saavutettavuusarviointi on laadittu Briljant OSK:in verkkosivustolle. Arvioinnin suoritti Milica Krivokapic (myöhemmin \"laatija\") aikavälillä 1.5–20.6.2025. Työ perustuu Verkkosisällön saavutettavuusohjeistuksen (WCAG) versioon 2.2, keskittyen erityisesti A- ja AA-tason kriteerien täyttymiseen. Tarvittaessa raportissa esitetään myös suosituksia, jotka liittyvät AAA-tason vaatimuksiin tai muihin käytettävyyttä ja saavutettavuutta parantaviin ratkaisuihin.",
      objective: "Arvioinnin tavoitteena on tunnistaa ne ongelmakohdat, jotka voivat estää tai vaikeuttaa sivuston käyttöä tai sisällön hahmottamista. Korjaamalla nämä kohdat voidaan parantaa verkkopalvelun käytettävyyttä ja saavutettavuutta sekä täyttää digipalvelulain velvoitteet. Saavutettavuus ei ole vain lakisääteinen vaatimus, vaan se tukee yhdenvertaista ja laadukasta verkkopalvelukokemusta.",
      context: "Yli miljoona suomalaista tarvitsee saavutettavia digipalveluja esimerkiksi aisti-, motoristen tai kognitiivisten rajoitteiden vuoksi. Lisäksi saavutettavuus hyödyttää kaikkia käyttäjiä esimerkiksi tilanteissa, joissa laitteet tai ympäristöt muuttavat käyttäjän toimintakykyä. Hyvin saavutettava verkkopalvelu on usein myös selkeämpi, helpommin ymmärrettävä ja teknisesti toimivampi kokonaisuus.",
      disclaimer: "Tämä raportti on laadittu maksutta harjoitustyönä. Vaikka arviointi on tehty huolellisesti ja parhaaseen osaamiseen nojaten, se ei välttämättä kata kaikkia mahdollisia saavutettavuuspuutteita. Laatija ei vastaa mahdollisista oikeudellisista seuraamuksista, joita suositusten noudattaminen tai noudattamatta jättäminen saattaa aiheuttaa.",
      priorities: {
        title: "Korjausehdotukset ja prioriteetit",
        high: "Korkean prioriteetin ongelmat estävät tai vaikeuttavat verkkopalvelun käyttöä merkittävästi esimerkiksi ruudunlukijaa käyttävien tai muiden apuvälineiden varassa toimivien käyttäjien kohdalla. Ne ovat usein selvästi ristiriidassa WCAG-kriteerien ja digipalvelulain vaatimusten kanssa. Näiden ongelmien korjaamista suositellaan ensisijaisesti ja viipymättä.",
        medium: "Keskitason ongelmat eivät estä palvelun käyttöä, mutta heikentävät käytettävyyttä tai sisällön ymmärrettävyyttä tietylle käyttäjäryhmälle. Näiden korjaaminen auttaa täyttämään saavutettavuusvaatimuksia ja parantaa kokonaisvaltaista käyttökokemusta.",
        low: "Matalan prioriteetin puutteet ovat vaikutukseltaan lieviä. Ne eivät yleensä ole suoraan WCAG-vaatimusten vastaisia, mutta voivat yksittäisinä tai kasaantuneina heikentää palvelun käytettävyyttä.",
        recommendations: "Suositukset liittyvät tilanteisiin, joissa käytettävyyttä tai selkeyttä voisi parantaa, vaikka varsinaista teknistä virhettä ei ole. Näiden huomioiminen tukee saavutettavuuden jatkuvaa kehittämistä ja laadukasta palvelukokemusta."
      },
      remediation: {
        title: "Korjaus ja jatkotoimet",
        content: "Erityisesti korkean ja keskitason ongelmien korjaamista suositellaan, jotta sivusto täyttää digipalvelulain vaatimukset ja on saavutettava eri käyttäjäryhmille. Kaikkien puutteiden korjaaminen tukee myös hyvää käyttökokemusta ja vahvistaa palvelun laatua. Kun korjauksia tehdään, niiden vaikutus saavutettavuuteen kannattaa tarkistaa uudelleentestauksella. Mikäli puutteita jää korjaamatta, ne tulee dokumentoida saavutettavuusselosteessa. Olennaiset puutteet tulee ilmoittaa oma-aloitteisesti valvontaviranomaiselle."
      },
      methods: {
        title: "Auditointimenetelmät",
        content: "Arviointi perustuu WCAG 2.2 -kriteeristöön A- ja AA-tasojen osalta. Työssä on otettu huomioon myös Suomen ja EU:n saavutettavuuslainsäädäntö sekä 28. kesäkuuta 2025 voimaan astuvat digipalvelulain muutokset, jotka tuovat uusia vaatimuksia esimerkiksi verkkokaupoille. Kognitiivista saavutettavuutta arvioitiin Selkeästi meille -hankkeen kehittämän kriteeristön pohjalta. Auditointi yhdistää automaattisia ja manuaalisia menetelmiä. Automaattisessa tarkastelussa käytettiin WAVE-lisäosaa ja Google Chromen Lighthouse-työkalua. Manuaalinen testaus suoritettiin näppäimistönavigoinnilla sekä ruudunlukijoilla: NVDA (Windows), TalkBack (Android) ja VoiceOver (iOS). Mobiilikäyttöä arvioitiin selaimen kehittäjätyökalujen lisäksi fyysisillä laitteilla: iPhone 12 mini ja MacBook Pro (M1). Sivuston responsiivisuus ja käytettävyys testattiin käytännössä."
      },
      issues: {
        title: "Saavutettavuuspuutteet",
        highPriority: "Korkea prioriteetti",
        contrast: "Kontrastiarvojen puutteet tekstissä",
        contrastDetails: "Tekstin kontrasti tumman taustan päällä on hyvin lähellä WCAG 2.2 AA -rajaa normaalikokoisella tekstillä (laskennallinen arvo noin 4.49:1). Firefoxin saavutettavuustarkistin tunnistaa yhdistelmän riittäväksi, mutta konservatiivisemmat kontrastityökalut (esim. WebAIM) ilmoittavat sen hieman alle vaaditun. Mikäli halutaan varmistaa vaatimuksen täyttyminen kaikissa olosuhteissa, suositellaan vaaleamman tekstivärin käyttöä myös Footerissa. Tämä ei kuitenkaan ole välttämätöntä.",
        lowPriority: "Matalan prioriteetin korjausehdotuksia",
        heading: "Otsikkohierarkia",
        recommendations: "Suosituksia",
        formNotes: "Kun lomakkeeseen unohti laittaa sähköpostiosoitteen ja lähetti lomakkeen, koko lomake tyhjentyi painaessa \"lähetä\", jolloin kaikki kenttiin piti kirjoittaa samat asiat uudestaan. Kentässä \"puhelinnumero\" ilmoitus vääränlaisesta kentän sisällöstä tulee englanniksi, kun sähköpostikentässä se taas tulee suomeksi ja eri kohtaan, mikä voi olla hieman sekavaa, mutta en usko että se on iso ongelma käyttäjille. Kun kenttä on aktiivinen niin kentän label menee pieneksi. On todella hyvä, että label on yhä nähtävillä, tämä ratkaisu on paljon parempi käytettävyyden kannalta kuin se että label katoaisi kokonaan. Toisaalta pienentynyttä tekstiä eivät välttämättä kaikki nää. Samoin \"Sähköposti on tyhjä tai virheellinen\"-teksti on aika pienellä kirjasimella. Tämä ei kuitenkaan välttämättä ole mikään ongelma johon pitäisi puuttua, kaikkea ei voi tehdä 100% saavutettavaksi. Ruudunlukija lukee kuitenkin tuon varoitustekstin."
      }
    }
  },
};

