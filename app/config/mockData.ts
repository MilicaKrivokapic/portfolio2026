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
  icon: 'panda-bear' | 'seahorse' | 'hedgehog' |'elephant' | 'toucan';
}

export interface MultilingualRecommendation extends Omit<Recommendation, 'text'> {
  text: {
    en: string;
    fi: string;
  };
}

export const recommendationsData: MultilingualRecommendation[] = [
  {
    name: 'Rosemari Marttinen-Lahtinen',
    role: 'Theme Developer',
    email: 'mailto: rosemari.marttinen-lahtinen@woolman.io',
    text: {
      en: 'As a colleague, Milica is curious, systematic, and responsible. Communication and collaboration with her are always clear and straightforward. She knows when to ask for help, but also how to guide others and express her own thoughts. Milica has a strong ability to see the big picture and considers perspectives that others might easily overlook. She is thoughtful towards her colleagues and has an inspiring impact on the work atmosphere.',
      fi: 'Milica on työkaverina utelias, järjestelmällinen ja vastuullinen. Hänen kanssaan on selkeää kommunikoida ja työskennellä. Tarvittaessa hän osaa kysyä apua, mutta myös neuvoa muita sekä tuoda omat ajatuksensa esille. Milica osaa ajatella asioita kokonaisuuksina ja huomioida myös näkokulmia, mitkä saattaisivat muilta jäädä helposti huomaamatta. Muita kohtaan hän on huomaavainen ja hänellä on työilmapiiriään innostava vaikutus.'
    },
    icon: 'panda-bear'
  },
  {
    name: 'Niko Rissanen',
    role: 'Senior Developer',
    email: 'mailto: niko.rissanen@woolman.io',
    text: {
      en: 'Working with Milica is often fruitful, because she is great at exploring multiple perspectives. She can expertly provide and explain her solutions in easy-to-understand language. She is also very kind and considerate to others :) ',
      fi: 'Milica on työkaverina huomaavainen ja useista näkökulmista asioita tarkasteleva, tämä rikastuttaa yhteistyötä. Hän tekee huolella ja tarkkuudella töitä ja pystyy perustelemaan valitsemasi ratkaisut asiantuntevasti ja myös keskustellen eri painopisteistä sekä näkökulmista. Hän on myös mukava ja ystävällinen muita kohtaan :) '
    },
    icon: 'seahorse'
  },
  {
    name: 'Jani Sompi',
    role: 'Shopify Expert, Developer',
    email: 'jani.sompi@woolman.io',
    text: {
      en: 'A genuinely pleasant person who not only takes pride in doing her job well but also cares about the well-being of her colleagues. She’s the voice of reason in the workplace, always keeping things on track before they even have a chance to go off course.',
      fi: 'Todella miellyttävä ihminen joka haluaa paitsi tehdä työnsä hyvin, huolehtia myös että hänen työkaverinsa voivat hyvin. Työpaikan järjen ääni joka pyrkii palauttamaan asiat raiteilleen jo ennen kun ne lähtevät sivuluisuun..'
    },
    icon: 'hedgehog'
  },
  {
    name: 'Aaro Paukkunen',
    role: 'Developer',
    email: 'mailto:aaro.paukkunen@woolman.io',
    text: {
      en: 'Milica is precise and thoughtful, and values an open atmosphere and clear communication. Plus, she\'s absolutely fantastic company!',
      fi: 'Milica on tarkka ja tunnollinen, ja arvostaa avointa ilmapiiriä ja selkeää kommunikaatiota. Lisäksi vielä mainiota seuraa, jestas!'
    },
    icon: 'elephant'
  },
  {
    name: 'Joonas Pitkonen',
    role: 'Software Developer',
    email: 'mailto:joonas.pitkonen@almamedia.fi',
    text: {
      en: 'Milica is a solid professional, from whom you get a strong team player in the team, no matter which team. When somewhere a genuinely good worker is needed, everyone who has worked with Milica knows who to call!',
      fi: 'Milica on rautainen ammattilainen, josta saa vankan luottopelaajan tiimiin kuin tiimiin. Kun jossain tarvitaan aidosti hyvää tekijää, tietävät kaikki Milican kanssa työskennelleet kelle soittaa!'
    },
    icon: 'toucan'
  }
];
