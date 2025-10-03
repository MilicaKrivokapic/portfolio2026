export const projectData = [
  {
    title: 'Kattokomppania website',
    description: 'A website for a Finnish company spealising on roofs maintanance and repairs.',
    image: '/images/projects/kattokomppania.jpeg',
    link: '/projects/kattokomppania',
    tags: ['UX', 'Squarespace', 'UI', 'Finnish'],
  },
  {
    title: 'Briljant Accessibility Audit',
    title_fi: 'Briljant saavutettavuusauditointi',
    description: 'Accessibility audit with practical WCAG 2.2 recommendations.',
    description_fi: 'Saavutettavuusraportti Briljantin verkkosivuston parantamiseksi käytännön WCAG 2.2 -suosituksilla.',
    image: '/briljant.png',
    link: '/audits/briljant-audit',
    tags: ['WCAG 2.2', 'Audit', 'Finnish'],
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
      en: 'Web Accessibility',
      fi: 'Verkkosaavutettavuus'
    },
    icon: 'FaUniversalAccess',
    description: {
      en: 'Doing more accessible websites. Currently focusing on understanding WCAG guidelines and implementing accessibility features in projects.',
      fi: 'Luon saavutettavampia verkkosivustoja. Keskityn tällä hetkellä WCAG-ohjeistojen ymmärtämiseen ja saavutettavien ominaisuuksien toteuttamiseen projekteissa sekä opettelen saavutettavuusraporttien ja -selosteiden laatimista. '
    }
  },
  {
    name: {
      en: 'ARIA Standards',
      fi: 'ARIA-standardit'
    },
    icon: 'FaKeyboard',
    description: {
      en: "I'm developing my understanding of ARIA roles and attributes. As of now I work with both Windows and MacOS environments, allowing me to test how to use VoiceOver and NVDA in testing.",
      fi: 'Kehitän ymmärrystäni ARIA-rooleista ja -attribuuteista. Minulla on käytössäni tällä hetkellä sekä Windows- että Mac OS ympäristöt, joiden avulla pääsen testailemaan sekä Voice Overin että NVDA:n toimintaa.'
    }
  },
  {
    name: {
      en: 'Frontend Development',
      fi: 'Frontend-kehitys'
    },
    icon: 'FaCode',
    description: {
      en: "I have a solid foundation in HTML, CSS, and Shopify’s Liquid language, which I’ve been working with at Woolman for the past few years. I also have some basic experience with JavaScript and React. I have to admit I’m a big fan of Tailwind CSS and I really enjoy the philosophy behind utility-first styling.",
      fi: 'Vahva perusymmärrys HTML:stä, CSS:stä ja Shopifyn Liquid-kielestä, joita olen käyttänyt töissäni Woolmanilla viimeisest vuodet. Minulla on myös jonkun verran perusymmärrystä JavaScriptin ja Reactin käytöstä. Minun on tunnustauduttava Tailwind CSS:n faniksi, tykkään todella paljon utility-pohjaisen CSS:n filosofiasta. '
    }
  },
  {
    name: {
      en: 'UX Principles',
      fi: 'UX-periaatteet'
    },
    icon: 'FaPencilRuler',
    description: {
      en: "Developing an eye for user-friendly interfaces. Learning about user research, wireframing, and the importance of user testing. I'm particularly interested in how UX intersects with accessibility. I can use Figma. I have extensive experience with other Adobe programs like Photoshop and Lightroom.",
      fi: 'Olen tottunut käyttämään Figmaa. Adoben ohjelmista (Photoshop, Lightroom) minulla on pitkällistä kokemusta. Haluan oppia enemmän käyttäjätutkimuksesta, rautalankamallien tekemisestä ja käyttäjätestausta käytännössä. Kaikista kiinnostunein olen UX:n ja saavutettavuuden yhtymäkohdista, eli ns. "design for all"-ajattelusta, joita myös käytän työssäni. '
    }
  },
  {
    name: {
      en: 'Problem Solving',
      fi: 'Ongelmanratkaisu'
    },
    icon: 'FaHeadphones',
    description: {
      en:  "I enjoy breaking down complex problems into manageable parts and love Scrum-style development with its rituals that bring clarity and predictability to projects. I particularly value participatory workshops that both boost team efficiency and foster a psychologically safe atmosphere. Agile practices and internal development feel like real “candy” to me, and I find it essential that roles and responsibilities are clearly defined as part of workplace wellbeing – I would not thrive in an environment of complete anarchy without shared goals.",
      fi: 'Nautin monimutkaisten ongelmien pilkkomisesta hallittaviin osiin ja rakastan Scrum-tyyppistä ja sen rituaaleja, jotka tuovat selkeyttä ja ennustettavuutta projekteihin. Pidän erityisesti osallistavista työpajoista, joissa yhdistyy tiimin tehokkuuden lisääminen ja psykologisesti turvallisen ilmapiirin helliminen. Agile-käytänteet ja sisäinen kehitys ovat minulle tuttua “karkkia”, ja koen tärkeäksi, että roolit ja vastuut sanoitetaan selkeästi osana työyhteisön hyvinvointia, enkä toivo ympäristöä, jossa vallitsee täydellinen anarkia ilman yhteisiä tavoitteita.'
    }
  },
  {
    name: {
      en: 'Learning & Growth',
      fi: 'Oppiminen & Kehitys'
    },
    icon: 'FaPalette',
    description: {
      en: 'I am continually expanding my skill set through online courses, intensive study of documentation, and hands-on projects. I actively discuss accessibility with my developer friends and am eager to learn from others. At the moment, I’m focusing on accessibility and modern front-end best practices.',
      fi: 'Laajennan jatkuvasti osaamistani verkkokurssien, dokumentaation tankkaamisen ja käytännön projektien kautta. Keskustelen aktiivisesti kehittäjäystävieni kanssa saavutettavuudesta ja olen innokas oppimaan muilta. Keskityn tällä hetkellä saavutettavuuteen ja moderneihin frontend-käytäntöihin.'
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
  icon: 'panda-bear' | 'seahorse' | 'hedgehog' |'elephant';
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
  }
];
