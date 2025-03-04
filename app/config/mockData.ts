export const projectData = [
  {
    title: 'Accessibility Dashboard',
    description: 'A comprehensive dashboard for monitoring web accessibility metrics and WCAG compliance.',
    image: 'https://picsum.photos/800/400',
    link: '#',
    tags: ['Next.js', 'WCAG', 'TypeScript', 'Tailwind'],
  },
  {
    title: 'Screen Reader Plus',
    description: 'Enhanced screen reader extension with customizable shortcuts and voice commands.',
    image: 'https://picsum.photos/800/400?random=2',
    link: '#',
    tags: ['JavaScript', 'ARIA', 'Chrome Extension'],
  }
];

export const skillsData = [
  { name: 'Web Accessibility', icon: 'FaUniversalAccess', level: 95 },
  { name: 'ARIA Standards', icon: 'FaKeyboard', level: 90 },
  { name: 'Screen Readers', icon: 'FaHeadphones', level: 85 },
  { name: 'Color Theory', icon: 'FaPalette', level: 88 },
  { name: 'UX Design', icon: 'FaPencilRuler', level: 82 },
  { name: 'HTML Semantics', icon: 'FaCode', level: 92 }
];

export const socialData = [
  { name: 'GitHub', url: 'https://github.com/yourusername', icon: 'FaGithub' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: 'FaLinkedin' }
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
    name: 'Niko Rissanen',
    role: 'Senior Developer',
    email: 'mailto: niko.rissanen@woolman.io',
    text: {
      en: 'Working with Milica is often fruitful, because she is great at exploring multiple perspectives. She can expertly provide and explain her solutions in easy-to-understand language',
      fi: 'Milica on työkaverina huomaavainen ja useista näkökulmista asioita tarkasteleva, tämä rikastuttaa yhteistyötä. Hän tekee huolella ja tarkkuudella töitä ja pystyy perustelemaan valitsemasi ratkaisut asiantuntevasti ja myös keskustellen eri painopisteistä sekä näkökulmista.'
    },
    icon: 'seahorse'
  },
  {
    name: 'Aaro Paukkunen',
    role: 'Developer',
    email: 'mailto:aaro.paukkunen@woolman.io',
    text: {
      en: 'Milica is precise and conscientious, and values an open atmosphere and clear communication. Plus, she\'s absolutely fantastic company! (You should hire her, right away)',
      fi: 'Milica on tarkka ja tunnollinen, ja arvostaa avointa ilmapiiriä ja selkeää kommunikaatiota. Lisäksi vielä mainiota seuraa, jestas!'
    },
    icon: 'elephant'
  },
  {
    name: 'Rosemari Marttinen-Lahtinen',
    role: 'Theme Developer',
    email: 'mailto: rosemari.marttinen-lahtinen@woolman.io',
    text: {
      en: 'As a colleague, Milica is curious, systematic, and responsible. Communication and collaboration with her are clear and straightforward. She knows when to ask for help but also how to guide others and voice her own thoughts. Milica can see the big picture and considers perspectives that others might easily miss. She is considerate towards others and has an inspiring effect on the work atmosphere.',
      fi: 'Milica on työkaverina utelias, järjestelmällinen ja vastuullinen. Hänen kanssaan on selkeää kommunikoida ja työskennellä. Tarvittaessa hän osaa kysyä apua, mutta myös neuvoa muita sekä tuoda omat ajatuksensa esille. Milica osaa ajatella asioita kokonaisuuksina ja huomioida myös näkokulmia, mitkä saattaisivat muilta jäädä helposti huomaamatta. Muita kohtaan hän on huomaavainen ja hänellä on työilmapiiriään innostava vaikutus.'
    },
    icon: 'panda-bear'
  },
  {
    name: 'Jani Sompi',
    role: 'Shopify Expert, developer',
    email: 'jani.sompi@woolman.io',
    text: {
      en: 'A truly pleasant person who not only wants to do her job well but also ensures her colleagues are doing well. She\'s the voice of reason in the workplace who tries to keep things on track before they even start to derail.',
      fi: 'Todella miellyttävä ihminen joka haluaa paitsi tehdä työnsä hyvin, huolehtia myös että hänen työkaverinsa voivat hyvin. Työpaikan järjen ääni joka pyrkii palauttamaan asiat raiteilleen jo ennen kun ne lähtevät sivuluisuun..'
    },
    icon: 'hedgehog'
  }
];
