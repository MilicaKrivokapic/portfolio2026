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
        text: "Kattokomppania needed a modern, user-friendly website that would effectively showcase their roofing services and make it easy for potential customers to request quotes. The project involved a complete redesign of their digital presence, with a focus on user experience and conversion optimization."
      },
      features: {
        title: "Key Features",
        list: [
          "Responsive design optimized for all device sizes",
          "Streamlined quote request process",
          "Portfolio showcase of completed roofing projects",
          "Service area map integration",
          "Customer testimonials section",
          "Bilingual support (Finnish/English)"
        ]
      },
      tech: {
        title: "Technologies Used",
        list: [
          "Squarespace as the primary platform",
          "Custom CSS for unique styling",
          "JavaScript for interactive elements",
          "Integration with various third-party tools for forms and analytics"
        ]
      },
      results: {
        title: "Results",
        intro: "The new website has significantly improved Kattokomppania's online presence, leading to:",
        list: [
          "40% increase in quote requests",
          "Improved user engagement metrics",
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
        title: "Projektin Yleiskatsaus",
        text: "Kattokomppania tarvitsi modernin, käyttäjäystävällisen verkkosivuston, joka esittelisi tehokkaasti heidän kattopalveluitaan ja helpottaisi potentiaalisten asiakkaiden tarjouspyyntöjen tekemistä. Projekti sisälsi heidän digitaalisen läsnäolonsa täydellisen uudistamisen, keskittyen käyttäjäkokemukseen ja konversio-optimointiin."
      },
      features: {
        title: "Tärkeimmät Ominaisuudet",
        list: [
          "Responsiivinen suunnittelu kaikille laitekoille",
          "Sujuvoitettu tarjouspyyntöprosessi",
          "Portfolionäkymä toteutetuista kattoprojekteista",
          "Palvelualueen karttaintegraatio",
          "Asiakassuositukset-osio",
          "Kaksikielinen tuki (suomi/englanti)"
        ]
      },
      tech: {
        title: "Käytetyt Teknologiat",
        list: [
          "Squarespace pääalustana",
          "Mukautettu CSS yksilölliseen tyylittelyyn",
          "JavaScript interaktiivisiin elementteihin",
          "Integraatio eri kolmannen osapuolen työkalujen kanssa lomakkeille ja analytiikalle"
        ]
      },
      results: {
        title: "Tulokset",
        intro: "Uusi verkkosivusto on merkittävästi parantanut Kattokomppanian verkkonäkyvyyttä, johtaen seuraaviin tuloksiin:",
        list: [
          "40% kasvu tarjouspyynnöissä",
          "Parantunut käyttäjien sitoutuminen",
          "Parempi näkyvyys hakutuloksissa",
          "Positiivinen palaute sekä asiakkailta että henkilöstöltä"
        ]
      },
      learning: {
        title: "Mitä Opin",
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
          src="https://picsum.photos/800/400?random=2"
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