'use client';

import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { useLanguage } from "../../context/language-context";

export default function KattokomppaniaProject() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Kattokomppania",
      subtitle: "A comprehensive website redesign project for a Finnish roofing company, focusing on improving user experience and digital presence.",
      overview: {
        title: "Project Overview",
        text: "Kattokomppania needed a new look for their website. The goal was to create a modern and user-friendly site considering their customer segment that would effectively showcase their services and make it easier for potential customers to get in touch. I created an initial design for the project, which can be viewed here (link). We spent a long time with Kattokomppania considering suitable platforms and technology, as they wanted a CMS that would allow them to modify content easily and quickly without having to touch the code. We ultimately decided to stick with Squarespace, as the client was already familiar with the platform, their previous site was also on Squarespace. After the visual design phase, I got to work and built the site following my designed style. However, I had to be quite flexible with the original design, as Squarespace wasn't nearly as flexible or 'open' in the way that Shopify or WordPress, which I'm familiar with, are. Injecting CSS into the pages was sometimes challenging because you had to find exactly the right selectors. The HTML produced by Squarespace often doesn't seem logical to me, and many of the so-called ready-made components used non-semantic solutions (e.g., heading hierarchies used only graphically, but forgetting that it's not quite conventional to ignore accessibility and SEO in heading hierarchies). SVGs caused the most headaches, as they had to be added by injecting CSS because adding them normally didn't work, the format had to be changed to BASE64. I'm still a bit worried about the site's accessibility, but at least graphically I've tried my best with the site! I think the site became more functional and clearer than the previous version."
      },
      features: {
        title: "Key Features",
        list: [
          "Visual refresh and user-friendliness",
          "Streamlined quote request process",
          "Responsive design for all device sizes",
          "Clear service presentation",
          "Customer testimonials section"
        ]
      },
      tech: {
        title: "Technologies Used",
        list: [
          "Squarespace as the primary platform",
          "Custom CSS for unique styling"
        ]
      },
      results: {
        title: "Results",
        intro: "The new website is clearer and more accessible",
        list: [
          "Improved user engagement",
          "Better visibility in search results",
          "Positive feedback from both clients and staff"
        ]
      },
      learning: {
        title: "What I Learned",
        list: [
          "Balancing client needs with user experience best practices",
          "Importance of clear communication in project management",
          "Optimizing websites for local service businesses",
          "Creating effective calls-to-action that drive conversions"
        ]
      }
    },
    fi: {
      title: "Kattokomppania",
      subtitle: "Kattava verkkosivuston uudistusprojekti suomalaiselle kattoalan yritykselle, keskittyen käyttäjäkokemuksen ja digitaalisen läsnäolon parantamiseen.",
      overview: {
        title: "Projektista",
        text: "Kattokorjauksiin ja kattojen ylläpitoon erikoistunut Kattokomppania tarvitsi uuden ulkoasun nettisivuilleen. Ajatuksenani oli tehdä sivusta moderni ja mahdollisimman käyttäjäystävällinen huomioiden asiakassegmentin. Halusimme, että sivuso esittelee mutkattomasti ja ymmärrettävästi tarjottavia palveluita ja helpottaa potentiaalisiin asiakkaisiin yhteyden saamisessa. Tein projektiin alustavan designin, se on nähtävissä täällä (linkki). Mietimme Kattokomppanian kanssa pitkään sopivaa alustaa ja teknologiaa, sillä he halusivat jonkin CMS:n jonka avulla sisältöä voisi muokata helposti ja nopeasti ilman, että heidän tarvitsis koodiin tarvitsisi koskea. <br> Lopulta päätimme pitäytyä Squarespacessa, sillä se oli asiakkaalle alustana tuttu entuudestaan, heidän edellisetkin sivunsa olivat Squarespacessa. Ulkoasusuunnittelun jälkeen aloin hommiin ja tein sivuston mukaillen suunnitteleemaani tyyliä. Jouduin kuitenkin joustamaan melko paljon alkuperäisestä suunnitelmasta, sillä Squarespace ei ollut ollenkaan niin joustava tai 'aukinainen' sillä tavalla miten vaikka minulle tutut Shopify tai WordPress ovat. CSS:n injektointi sivuille oli välillä hieman haastavaa, koska piti löytää juuri oikeat selectorit. <br> Squarespacen tuottama HTML ei mielestäni vaikuta useinkaan loogiselta, ja monissa ns. valmiskomponenteissa mielestäni oli käytetty epäsemanttisia ratkaisuja (esim. otsikkohierarkioita käytetty vain graafisessa mielessä, mutta unohdettu että ei ole ihan konventionaalista ignorata saavutettavuus ja SEO otsikkohierarkioissa). Eniten päänvaivaa aiheuttivat SVG:t, jotka oli lisättävä injektoimalla CSS:ää, koska niiden lisääminen normaalisti ei onnistunut, vaan formaatti piti muuttaa BASE64:seen. Hieman itseäni jäi murehdittumaan sivuston saavutettavuus, mutta ainakin graafisesti olen yrittänyt sivuston kanssa parhaani! Sivustosta tuli mielestäni toimivampi ja selkeämpi kuin edellisestä versiosta. "
      },
      features: {
        title: "Tärkeimmät ominaisuudet",
        list: [
          "Ulkoasun freesaus ja käyttäjäystävällisyys", 
          "Sujuvoitettu tarjouspyyntöprosessi",
          "Responsiivinen suunnittelu kaikille laitekoille",
          "Palvelujen esittely selkeästi",
          "Asiakassuositukset-osio"
        ]
      },
      tech: {
        title: "Käytetyt teknologiat",
        list: [
          "Squarespace pääalustana",
          "Mukautettu CSS yksilölliseen tyylittelyyn",
        ]
      },
      results: {
        title: "Tulokset",
        intro: "Uusi verkkosivusto on selkeämpi ja helpommin saavutetta",
        list: [
          "Käyttäjien sitoutuminnen ",
          "Parempi näkyvyys hakutuloksissa",
          "Positiivinen palaute sekä asiakkailta että henkilöstöltä"
        ]
      },
      learning: {
        title: "Mitä opin",
        list: [
          "Asiakkaan tarpeiden ja käyttäjäkokemuksen parhaiden käytäntöjen tasapainottaminen",
          "Selkeän viestinnän merkitys projektinhallinnassa",
          "Verkkosivustojen optimointi paikallisille palveluyrityksille",
          "Tehokkaiden toimintakehotusten luominen konversioiden lisäämiseksi"
        ]
      }
    }
  };

  const currentContent = content[language];

  return (
    <article className="max-w-3xl mx-auto space-y-12">
      <div className="mb-8">
        <Link 
          href="/" 
          className="inline-flex items-center text-muted-light dark:text-muted-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors"
        >
          <FiArrowLeft className="mr-2 h-4 w-4" />
          {language === 'en' ? 'Back to Home' : 'Takaisin etusivulle'}
        </Link>
      </div>

      <header className="space-y-8">
        <h1 className="text-4xl font-bold font-heading">{currentContent.title}</h1>
        <p className="text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
          {currentContent.subtitle}
        </p>
      </header>

      <div className="aspect-video relative w-full overflow-hidden rounded-xl shadow-lg bg-neutral-100 dark:bg-neutral-800">
        <Image
          src="/images/projects/kattis_project.png"
          alt={`${currentContent.title} website screenshot`}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <section>
          <h2>{currentContent.overview.title}</h2>
          <p>{currentContent.overview.text}</p>
        </section>

        <section className="mt-12">
          <h2>{currentContent.features.title}</h2>
          <ul>
            {currentContent.features.list.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2>{currentContent.tech.title}</h2>
          <ul>
            {currentContent.tech.list.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2>{currentContent.results.title}</h2>
          <p>{currentContent.results.intro}</p>
          <ul>
            {currentContent.results.list.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2>{currentContent.learning.title}</h2>
          <ul>
            {currentContent.learning.list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}