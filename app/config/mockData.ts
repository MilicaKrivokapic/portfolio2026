export const projectData = [
  {
    title: 'Kattokomppania website',
    title_fi: 'Kattokomppania verkkosivusto',
    description: 'A website for a Finnish company spealising on roofs maintanance and repairs.',
    description_fi: 'Verkkosivusto kattojen huoltoon ja korjaukseen erikoistuneelle yritykselle.',
    image: '/images/projects/kattokomppania.jpeg',
    link: '/projects/kattokomppania',
    tags: ['UX', 'Squarespace', 'UI'],
  },
  {
    title: 'Learning Playwright Testing',
    title_fi: 'Playwright-testauksen opiskelu',
    description: 'First steps with Playwright - building smoke tests for this portfolio to learn automated testing.',
    description_fi: 'Ensimmäiset askeleet Playwrightin kanssa - smoke-testien rakentaminen tälle portfoliolle oppiakseni automaattista testausta.',
    image: '/images/projects/playwright-testing.png',
    link: '/projects/playwright-smoke-tests',
    tags: ['Testing', 'Playwright', 'Learning'],
  },
  {
    title: 'Briljant Accessibility Audit',
    title_fi: 'Briljant saavutettavuusauditointi',
    description: 'Accessibility audit with practical WCAG 2.2 recommendations.',
    description_fi: 'Saavutettavuusraportti Briljantin verkkosivuston parantamiseksi käytännön WCAG 2.2 -suosituksilla.',
    image: '/briljant.png',
    link: '/audits/briljant-audit',
    tags: ['WCAG 2.2', 'Audit', 'Finnish'],
  },
  {
    title: 'Parhaat Pöntöt - Best Seats',
    description: 'Accessibility audit for site rating and documenting Helsinki\'s most iconic and most horrid public restrooms.',
    image: '/toiletten.jpg',
    link: '/projects/parhaat-pontot',
    tags: ['Audit', 'Work in Progress'],
  },
  {
    title: 'Portfolio Accessibility Audit',
    title_fi: 'Portfolion saavutettavuusauditointi',
    description: 'A self-audit of this portfolio website to identify accessibility improvements and document the process.',
    description_fi: 'Oma portfolio-verkkosivustoni saavutettavuusauditointi, jossa tunnistetaan parannuskohteita ja dokumentoidaan prosessi.',
    image: '/dark-mode-demo.png',
    link: '/projects/portfolio-audit',
    tags: ['Audit', 'Work in Progress'],
  }
];

interface MultilingualSkill {
  name: {
    en: string;
    fi: string;
  };
  icon: string;
  description: {
    en: string;
    fi: string;
  };
}

export const skillsData: MultilingualSkill[] = [
  {
    name: {
      en: 'Web Accessibility (WCAG 2.2 A–AA)',
      fi: 'Verkkosaavutettavuus'
    },
    icon: 'UniversalAccess',
    description: {
      en: 'Using Axe DevTools, WAVE, Lighthouse, and manual keyboard/screen reader testing (NVDA, VoiceOver) and following guidelines and educating myself everyday on the matter',
      fi: 'Saavutettavuuden tarkistamisessa käytän Axe DevToolssia, WAVEa, Lighthousea ja testaan myös manuaalisesti NVDA:lla ja Applen Voiceoverilla noudattaen säädöksiä. Luen saavutettavuudesta lisää päivittäin.'
    }
  },
  {
    name: {
      en: 'Frontend Development',
      fi: 'Frontend-kehitys'
    },
    icon: 'Code',
    description: {
      en: "Strong foundations of HTML, CSS, ARIA roles and Shopify's Liquid. Some experience with JavaScript/React.",
      fi: 'Osaaminen HTML:stä, CSS:stä ja Shopifyn Liquid-kielestä. Minulla on myös jonkun verran perusymmärrystä JavaScriptin ja Reactin käytöstä. '
    }
  },
  {
    name: {
      en: 'UX Principles',
      fi: 'UX-periaatteet'
    },
    icon: 'PenRuler',
    description: {
      en: "Using Figma&Adobe products (Photoshop, Lightroom). Understanding of some 3d programs like Blender and Autodesk Maya",
      fi: 'Olen tottunut käyttämään Figmaa. Adoben ohjelmista (Photoshop, Lightroom) minulla on pitkällistä kokemusta. Osaan myös käyttää jonkun verran 3D-ohjelmia kuten Blenderiä ja Autodesk Mayaa.'
    }
  },
  {
    name: {
      en: 'Productivity processes',
      fi: 'Prosessityöskentely'
    },
    icon: 'Compass',
    description: {
      en:  "I enjoy processes that improve both efficiency and wellbeing at work, and I like putting them into practice within teams. I’m also interested in productivity philosophies and often read about them in my free time.",
      fi: "Nautin prosesseista, jotka parantavat työn tehokkuutta ja hyvinvointia, sekä niiden konkreettisesta tuomisesta tiimityöhön. Olen kiinnostunut produktiivisuusfilosofioista myös syvällisemmin ja luen aiheesta mielelläni vapaa-ajallani."
    }
  }
];

export const socialData = [
  { name: 'GitHub', url: 'https://github.com/MilicaKrivokapic', icon: 'FaGithub' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/', icon: 'FaLinkedin' },
  { name: 'Email', url: 'mailto:Milica.portfolio@proton.me', icon: 'TbMailFilled' }
];

export interface Recommendation {
  name: string;
  role: string;
  email: string;
  text: string;
  icon: 'panda-bear' | 'seahorse' | 'hedgehog' |'elephant' | 'toucan' | 'bee';
}

export interface MultilingualRecommendation extends Omit<Recommendation, 'text' | 'role' | 'email'> {
  role: {
    en: string;
    fi: string;
  };
  email: {
    en: string;
    fi: string;
  };
  text: {
    en: string;
    fi: string;
  };
}

interface TimelineItem {
  year: string;
  title: {
    en: string;
    fi: string;
  };
  description: {
    en: string;
    fi: string;
  };
  link?: string;
  linkText?: {
    en: string;
    fi: string;
  };
}

export const timelineData: TimelineItem[] = [
  {
    year: '2022',
    title: {
      en: 'My first frontend portfolio',
      fi: 'Ensimmäinen frontend-portfolioni'
    },
    description: {
      en: 'My first frontend portfolio was unpolished but clearly showed the development work I did before my current job. I originally aimed to become a fullstack developer, but in practice I discovered that my strengths are in interfaces, accessibility, and clear design.',
      fi: 'Mun ensimmäinen it-alan portfolio. Se on aika hiomaton, mutta kertoo selkeästi devaustöistäni ennen nykyistä työpaikkaani. Alun perin tavoittelin fullstack-osaamista, mutta käytännön työssä huomasin, että mun vahvuus on käyttöliittymien, saavutettavuuden ja selkeän suunnittelun parissa.'
    },
    link: 'https://portfolio2022-rho.vercel.app/',
    linkText: {
      en: 'View archived frontend portfolio',
      fi: 'Tsekkaa arkistoitu frontend-portfolio'
    }
  },
  {
    year: '2020',
    title: {
      en: 'Freelancer portfolio',
      fi: 'Freelancer-portfolioni'
    },
    description: {
      en: 'Freelance work in video and photography',
      fi: 'Freelance-työtä video- ja valokuvauksessa'
    },
    link: 'https://milica.fi',
    linkText: {
      en: 'View my media portfolio',
      fi: 'Kurkkaa media-alan portfolio'
    }
  }
];

interface QAItem {
  question: {
    en: string;
    fi: string;
  };
  answer: {
    en: string;
    fi: string;
  };
}

export const qaData: QAItem[] = [
  {
    question: {
      en: 'What tools do you use most?',
      fi: 'Mitä ohjelmia käytät eniten?'
    },
    answer: {
      en: 'Cursor for coding, Figma for structure, Chatgpt for making sure there are no mistakes in my sentences (for example in documentation), Slack for collaboration, and Notion, Obsidian, and Jira for planning and documentation. Planning on moving from Jira to Linear! ',
      fi: 'Käytän päivittäin Cursoria koodaukseen (joskus myös VSCodea, mutta preferoin Cursoria), Chatgpt:tä oikolukuun, Slackkia yhteistyöhön, ja sitten Notionia, Obsidiania ja Jiraa projektin suunnitteluun ja taskien trackkaamiseen. '
    }
  },
  {
    question: {
      en: 'What motivates you at work?',
      fi: 'Mikä sinua motivoi eniten töissä?'
    },
    answer: {
      en: "I'm motivated when something becomes easier for someone else to use, and when I can work together with a team to make it happen.",
      fi: 'Eniten motivoi, jos voin tehdä jostain asiasta toimivamman tai helpomman käyttää, ja jos mulla on tiimi jonka kanssa voin kokea yhdessä onnistumisen tunteita ja pallotella. '
    }
  },
  {
    question: {
      en: 'What kind of environment helps you focus?',
      fi: 'Minkälainen työympäristö on sinulle mieluisin?'
    },
    answer: {
      en: 'I work best in calm, tidy surroundings with quiet music in the background.',
      fi: 'Työskentelen mielelläni rauhallisessa ja siistissä ympäristössä, jossa voin kuunnella hiljaisella musiikkia kuulokkeista.'
    }
  },
  {
    question: {
      en: 'How do you usually start a new project?',
      fi: 'Miten yleensä aloitat uuden projektin?'
    },
    answer: {
      en: "I begin by sketching the structure and defining clear goals. Each week I create a task list with three categories: must-have, nice-to-have, and bonus. I keep a personal kanban in Notion to track progress and document what I learn in Obsidian. I also very much enjoy setting up Jira or Linear tasks if the team manager can't.",
      fi: 'Aloitan hahmottelemalla projektin rangan ja listaan projektin keskeisimmät tavoitteet. Joka viikko teen Notionissa itselleni uuden kanbanin: must-have:t, nice-to-have:t ja sitten ylimääräiset bonusjutut, joita tehdään vain jos jää luppoaikaa. Dokumentoin oppimiani asioita Obsidianiin, olen innostunut zettelkasten-järjestelmästä. Tykkään tosi paljon virittää Jiran/Trellon/Linearin, jos projari ei jostain syystä ehdi tai pysty ja minulla on kaikki tarvittava tieto projektista.'
    }
  },
  {
    question: {
      en: 'A fun fact about your work style?',
      fi: 'Kerro mielenkiintoinen juttu sun työskentelytyylistä?'
    },
    answer: {
      en: "I'm one of those people who genuinely enjoys Scrum rituals. The structure helps me focus and stay connected with the team.",
      fi: 'Olen yksi niistä henkilöistä jotka ihan aidosti nauttii Scrum-rituaaleista! 😄 Scrumin ja muiden prosessinhallintaframeworkien struktuurit auttavat keskittymään ja kiihdyttävät omaa tekemistäni.'
    }
  }
];

export const recommendationsData: MultilingualRecommendation[] = [
  {
    name: 'Rosemari Marttinen-Lahtinen',
    role: {
      en: 'Team member, Woolman',
      fi: 'Tiimijäsen, Woolman'
    },
    email: {
      en: 'mailto:firstname.lastname@woolman.io',
      fi: 'mailto:etunimi.sukunimi@woolman.io'
    },
    text: {
      en: 'As a colleague, Milica is curious, systematic, and responsible. Communication and collaboration with her are always clear and straightforward. She knows when to ask for help, but also how to guide others and express her own thoughts. Milica has a strong ability to see the big picture and considers perspectives that others might easily overlook. She is thoughtful towards her colleagues and has an inspiring impact on the work atmosphere.',
      fi: 'Milica on työkaverina utelias, järjestelmällinen ja vastuullinen. Hänen kanssaan on selkeää kommunikoida ja työskennellä. Tarvittaessa hän osaa kysyä apua, mutta myös neuvoa muita sekä tuoda omat ajatuksensa esille. Milica osaa ajatella asioita kokonaisuuksina ja huomioida myös näkokulmia, mitkä saattaisivat muilta jäädä helposti huomaamatta. Muita kohtaan hän on huomaavainen ja hänellä on työilmapiiriään innostava vaikutus.'
    },
    icon: 'panda-bear'
  },
  {
    name: 'Niko Rissanen',
    role: {
      en: 'Colleague, Woolman',
      fi: 'Kolleega, Woolman'
    },
    email: {
      en: 'mailto:firstname.lastname@woolman.io',
      fi: 'mailto:etunimi.sukunimi@woolman.io'
    },
    text: {
      en: 'Working with Milica is often fruitful, because she is great at exploring multiple perspectives. She can expertly provide and explain her solutions in easy-to-understand language. She is also very kind and considerate to others :) ',
      fi: 'Milica on työkaverina huomaavainen ja useista näkökulmista asioita tarkasteleva, tämä rikastuttaa yhteistyötä. Hän tekee huolella ja tarkkuudella töitä ja pystyy perustelemaan valitsemasi ratkaisut asiantuntevasti ja myös keskustellen eri painopisteistä sekä näkökulmista. Hän on myös mukava ja ystävällinen muita kohtaan :) '
    },
    icon: 'seahorse'
  },
  {
    name: 'Jani Sompi',
    role: {
      en: 'Colleague, Woolman',
      fi: 'Kolleega, Woolman'
    },
    email: {
      en: 'mailto:firstname.lastname@woolman.io',
      fi: 'mailto:etunimi.sukunimi@woolman.io'
    },
    text: {
      en: 'A genuinely pleasant person who not only takes pride in doing her job well but also cares about the well-being of her colleagues. She’s the voice of reason in the workplace, always keeping things on track before they even have a chance to go off course.',
      fi: 'Todella miellyttävä ihminen joka haluaa paitsi tehdä työnsä hyvin, huolehtia myös että hänen työkaverinsa voivat hyvin. Työpaikan järjen ääni joka pyrkii palauttamaan asiat raiteilleen jo ennen kun ne lähtevät sivuluisuun..'
    },
    icon: 'hedgehog'
  },
  {
    name: 'Aaro Paukkunen',
    role: {
      en: 'Colleague, Woolman',
      fi: 'Kolleega, Woolman'
    },
    email: {
      en: 'mailto:firstname.lastname@woolman.io',
      fi: 'mailto:etunimi.sukunimi@woolman.io'
    },
    text: {
      en: 'Milica is precise and thoughtful, and values an open atmosphere and clear communication. Plus, she\'s absolutely fantastic company!',
      fi: 'Milica on tarkka ja tunnollinen, ja arvostaa avointa ilmapiiriä ja selkeää kommunikaatiota. Lisäksi vielä mainiota seuraa, jestas!'
    },
    icon: 'elephant'
  },
  {
    name: 'Joonas Pitkonen',
    role: {
      en: 'Team Lead @ Helsingin Kaupunki',
      fi: 'Team lead @ Helsingin Kaupunki'
    },
    email: {
      en: 'mailto:firstname.lastname@almamedia.fi',
      fi: 'mailto:etunimi.sukunimi@almamedia.fi'
    },
    text: {
      en: 'Milica is a rock-solid professional and a dependable team player in any setting. When you need someone who truly delivers, everyone who has worked with her knows exactly who to call.',
      fi: 'Milica on rautainen ammattilainen, josta saa vankan luottopelaajan tiimiin kuin tiimiin. Kun jossain tarvitaan aidosti hyvää tekijää, tietävät kaikki Milican kanssa työskennelleet kelle soittaa!'
    },
    icon: 'toucan'
  },
  {
    name: 'Pyry Sangi',
    role: {
      en: 'Colleague, Helsingin Kaupunki',
      fi: 'Kolleega, Helsingin Kaupunki'
    },
    email: {
      en: 'ask for contact details',
      fi: 'ask for contact details'
    },
    text: {
      en: 'Milica is a valuable coworker with great communication skills, and she clearly cares deeply about doing good work and continuously learning and improving.',
      fi: 'Milica on arvokas tiimikaveri, jolla on mahtavien vuorovaikutustaitojen lisäksi selvä halu tehdä työssään hyvää jälkeä ja kehittää jatkuvasti osaamistaan.'
    },
    icon: 'bee'
  }
];
