export const projectData = [
  {
    title: 'Kattokomppania website',
    description: 'A website for a Finnish company spealising on roofs maintanance and repairs.',
    image: '/images/projects/kattokomppania.jpeg',
    link: '/projects/kattokomppania',
    tags: ['UX', 'Squarespace', 'UI'],
  },
  {
    title: 'Accessibility Audits',
    title_fi: 'Saavutettavuusauditoinnit',
    description: 'A comprehensive dashboard for monitoring web accessibility metrics and WCAG compliance.',
    description_fi: 'Kattava työkalu saavutettavuuden mittaamiseen ja WCAG-vaatimusten seurantaan.',
    image: 'https://picsum.photos/800/400',
    link: '#',
    tags: ['Next.js', 'WCAG', 'TypeScript', 'Tailwind'],
    underConstruction: true,
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
      en: ' Learning to create more accessible websites. Currently focusing on understanding WCAG guidelines and implementing basic accessibility features in projects. I believe accessible web services are a significant factor for equality and general well-being.',
      fi: 'Opettelen luomaan saavutettavampia verkkosivustoja. Keskityn tällä hetkellä WCAG-ohjeistojen ymmärtämiseen ja saavutettavien perusominaisuuksien toteuttamiseen projekteissa. Mielestäni saavutettavat verkkopalvelut ovat yhteiskunnallisesti merkittävä asia tasa-arvon ja yleisen hyvinvoinnin kannalta.'
    }
  },
  {
    name: {
      en: 'ARIA Standards',
      fi: 'ARIA-standardit'
    },
    icon: 'FaKeyboard',
    description: {
      en: "I'm developing my understanding of ARIA roles and attributes. As of now I work with both Windows and MacOS environments, allowing me to test how to use VoiceOver and NVDA in testing. I actually find manual testing enjoyable work task, and would love to make it a part of my daily routine.",
      fi: 'Kehitän ymmärrystäni ARIA-rooleista ja -attribuuteista. Minulla on käytössäni tällä hetkellä sekä Windows- että Mac OS ympäristöt, joiden avulla pääsen testailemaan sekä Voice Overin että NVDA:n toimintaa. Manuaalinen testaus on minusta rattoisaa työtä, enkä koe sitä puuduttavana.'
    }
  },
  {
    name: {
      en: 'Frontend Development',
      fi: 'Frontend-kehitys'
    },
    icon: 'FaCode',
    description: {
      en: "I have a strong foundational understanding of HTML, CSS, and Shopify’s Liquid templating language, which I’ve been using in my work at Woolman for the past few years. I also have some basic experience with JavaScript and React. I have to admit—I’m a big fan of Tailwind CSS! I really appreciate the utility-first approach to styling. Lately, though, writing basic code by hand has started to feel a bit time-consuming and unnecessary, since AI handles so much of the repetitive coding work so efficiently. Because of that, I’ve been focusing more on HTML semantics and deepening my understanding of HTML from an accessibility perspective.",
      fi: 'Minulla on vahva perusymmärrys HTML:stä, CSS:stä ja Shopifyn Liquid-kielestä, joita olen käyttänyt töissäni Woolmanilla viimeisest vuodet. Minulla on myös jonkun verran perusymmärrystä JavaScriptin ja Reactin käytöstä. Minun on tunnustauduttava Tailwind CSS:n faniksi, tykkään todella paljon utility-pohjaisen CSS:n filosofiasta. Lähiaikoina tosin peruskoodin käsinkirjoittaminen on tuntunut jotenkin aikaavievältä ja turhalta, koska AI hoitaa niin tehokkaasti kaiken koodamisen perusheinän, ja olen keskittynyt enemmän HTML:n semantikkaan ja ymmärtämään HTML:ää saavutettavuuden linssin läpi katsottuna.'
    }
  },
  {
    name: {
      en: 'UX Principles',
      fi: 'UX-periaatteet'
    },
    icon: 'FaPencilRuler',
    description: {
      en: "Developing an eye for user-friendly interfaces. Learning about user research, wireframing, and the importance of user testing. I'm particularly interested in how UX intersects with accessibility. I can use Figma, but I’m also eager to learn Adobe XD. I have extensive experience with other Adobe programs like Photoshop and Lightroom.",
      fi: 'Kehitän taitojani käyttäjäystävällisten käyttöliittymien ja yleensäottaen hyvien designratkaisujen ymmärtämiseksi. Haluan oppia enemmän käyttäjätutkimuksesta, rautalankamallien tekemisestä ja käyttäjätestauksen tärkeydestä. Kaikista kiinnostunein olen UX:n ja saavutettavuuden yhtymäkohdista, sellaisesta "design for all"-ajattelusta. Olen tottunut käyttämään Figmaa, mutta uskon oppivina myös Adobe XD:n käytön. Adoben muista ohjelmista (Photoshop, Light Room) minulla on pitkällistä kokemusta. '
    }
  },
  {
    name: {
      en: 'Problem Solving',
      fi: 'Ongelmanratkaisu'
    },
    icon: 'FaHeadphones',
    description: {
      en:  "I enjoy breaking down complex problems into manageable parts. I absolutely love Scrum-style development or workflows with its structured rituals - being ADD, I find that predictability and well-defined steps bring a sense of security and clarity to everyone involved in a project or task. I’m also a big fan of interactive workshops that not only boost team productivity but also foster a psychologically safe environment where everyone has space to grow and be heard without the fear of asking 'stupid' questions or anything else that might hinder learning or progress. The Agile practices and internal development processes I’ve experienced in previous workplaces are like ‘candy’ to me, i really enjoy practising them in a team. That said, I also strongly believe that a certain level of leadership, along with clearly defined roles and responsibilities, is crucial for a healthy work environment. In my future workplace, I’d hope for a structure where these roles and responsibilities are respected.",
      fi: 'Nautin monimutkaisten ongelmien pilkkomisesta hallittaviin osiin. Tykkään aivan valtavasti Scrum-tyyppisestä kehittämisestä prosessinomaisine rituaaleineen, koska ADD-häiriöisenä koen, että ennustettavuus ja valmiiksimääritellyt stepit tuovat turvaa ja varmuutta projektiin kaikille projektiin tai työtehtävään osallistuville. Pidän paljon erilaisista osallistavista työpajoista joiden tarkoituksena on samalla kiihdyttää tiimin työtehoa, mutta myös luoda psykologisesti turvallinen tunnelma, jossa jokaisella on tilaa kasvaa ja tulla kohdatuksi ilman pelkoa siitä, että kyselisi tyhmiä tai muuta, joka voisi haitata kehittymistä tai työntekoa. Edellisissä työpaikoissa koetut agilet kehittämisen käytänteet ja sisäinen kehitys on minulle hyvin tuttua "karkkia", joiden järjestelyly tuottaa minulle merkityksellisyyden tunteita. Kuitenkin koen, että tietynlainen johtajuus ja erityisesti roolien sekä vastuiden selkeä aukisanoitus on osa työyhteisön kokonaisvaltaista hyvinvointia. Toivoisinkin tulevalta työpaikaltani myös sitä että yhteisistä rooleista ja vastuista pidettäisiin kiinni,  eikä työpaikka ainakaan velloisi täydellisessä anarkistisuudessa jossa organisaation pää ei yhtään tiedä mitä häntä touhuaa tai tavoittelee, tai toisinpäin.'
    }
  },
  {
    name: {
      en: 'Learning & Growth',
      fi: 'Oppiminen & Kehitys'
    },
    icon: 'FaPalette',
    description: {
      en: 'Constantly expanding my knowledge through online courses, documentation, and practical projects. Active in developer communities and always eager to learn from others. Currently focusing on accessibility and modern frontend practices.',
      fi: 'Laajennan jatkuvasti osaamistani verkkokurssien, dokumentaation ja käytännön projektien kautta. Olen aktiivinen kehittäjäyhteisöissä ja innokas oppimaan muilta. Keskityn tällä hetkellä saavutettavuuteen ja moderneihin frontend-käytäntöihin.'
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
