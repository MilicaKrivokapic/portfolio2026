'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useLanguage } from "../../context/language-context";

export default function KattokomppaniaProject() {
  const { language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const content = {
    en: {
      title: "Kattokomppania",
      subtitle: "A comprehensive website redesign project for a Finnish roofing company, focusing on improving user experience and digital presence.",
      overview: {
        title: "Project Overview",
        text: [
          "Kattokomppania, specializing in roof repairs and maintenance, needed a fresh look for their website. I aimed to create a modern and user-friendly site that would effectively showcase their services while considering their specific customer segment. The main goal was to present their services in a straightforward, understandable way and make it easier for potential customers to get in touch. I created an initial design for the project which can be viewed below.",
          "We spent considerable time with Kattokomppania discussing suitable platforms and technology choices, as they wanted a CMS that would allow them to modify content easily without touching the code. We ultimately decided to continue with Squarespace, as they were already familiar with the platform from their previous site. After finalizing the visual design phase, I implemented the site following my designed style, though I had to be flexible with the original design due to Squarespace's platform limitations compared to more open platforms like Shopify or WordPress that I had worked with before."
        ]
      },
      features: {
        title: "Key Features",
        list: [
          "Visual refresh with modern aesthetics",
          "Streamlined quote request process with easily accessible contact information",
          "Responsive design optimized for mobile devices",
          "Clear and structured service presentation",
          "Customer testimonials section"
        ]
      },
      tech: {
        title: "Technologies Used",
        list: [
          "Squarespace as the primary platform",
          "Custom CSS for unique styling",
          "SVG graphics added to enhance visual clarity"
        ]
      },
      learning: {
        title: "What I Learned",
        list: [
          "Mastering Squarespace platform capabilities",
          "Excellent client collaboration with seamless communication. I think it was possible because the customer had a clear vision of what they wanted to achieve with our overhaul of the website.",
          "Understanding the unique website needs of local service businesses compared to larger e-commerce projects I've worked on",
        ]
      }
    },
    fi: {
      title: "Kattokomppania",
      subtitle: "Kattava verkkosivuston uudistusprojekti suomalaiselle kattoalan yritykselle, keskittyen käyttäjäkokemuksen ja digitaalisen läsnäolon parantamiseen.",
      overview: {
        title: "Projektista",
        text: [
        "Kattokorjauksiin ja kattojen ylläpitoon erikoistunut Kattokomppania tarvitsi uuden ulkoasun nettisivuilleen. Ajatuksenani oli tehdä sivusta moderni ja mahdollisimman käyttäjäystävällinen huomioiden asiakassegmentin. Halusin, että sivusto esittelee selkeästi tarjottavia palveluita ja auttaa asiakkaita saamaan yhteyden yritykseen helposti. Tein projektiin alustavan designin, se on nähtävissä alla.", 
        "Mietimme Kattokomppanian kanssa pitkään sopivaa alustaa ja teknologiaa, sillä he halusivat jonkin CMS:n jonka avulla voisivat muokata sisältöä helposti ja nopeasti koskematta koodiin. Päädyimme Squarespaceen, sillä asiakas oli tottunut siihen, sillä aiempi sivu oli tehty samaisella alustalla. Visuaalisen suunnittelun jälkeen ryhdyin työhön ja toteutin sivuston suunnittelemani tyylin mukaan, mutta jouduin olemaan alkuperäisen suunnitelman kanssa kuitenkin hyvin joustava, sillä Squarespace ei ollut läheskään niin ketterä ja helposti muokattava kuin Shopify tai WordPress, joiden kanssa olin aiemmin tottunut työskentelemään."]
      },
      features: {
        title: "Uudet ominaisuudet",
        list: [
          "Ulkoasun freesaus", 
          "Asiakkaan on nyt helpompi löytää yhteystiedot pyytää tarjousta",
          "Responsiivinen suunnittelu mobiilikoolle",
          "Palvelujen esittely selkeästi",
          "Asiakassuositukset-osio"
        ]
      },
      tech: {
        title: "Käytetyt teknologiat",
        list: [
          "Squarespace pääalustana",
          "Mukautettu CSS yksilölliseen tyylittelyyn",
          "Lisätty SVG:eitä selkeyttämään sivuston visuaalista ilmettä"
        ]
      },
      learning: {
        title: "Mitä opin",
        list: [
          "Käyttämään Squarespacea",
          "Asiakkaan kanssa oli todella helppo tehdä yhteistyötä, haasteita kommunikoinnissa ei ollut. Koin, että asiakas oli hyvin perillä siitä mitkä hänen tavoitteensa verkkosivun suhteen olivat, joka oli iso tekijä sujuvassa kommunikoinnissa. ",
          "Ymmärsin miten erilaisia tarpeita paikallispalveluyrityksillä on verkkosivuston suhteen kuin suuremmilla yrityksillä, joiden verkkokauppoja olen ollut tekemässä.",
        ]
      }
    }
  };

  const currentContent = content[language];

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <div className="px-4 md:px-6 py-6 md:py-10">
      <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-b from-white to-neutral-100 dark:from-[#161617] dark:to-[#0F0F10] shadow-[0_10px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.45)] ring-1 ring-black/5 dark:ring-white/5 p-6 md:p-20">
        <article className="max-w-4xl mx-auto space-y-8 md:space-y-12">
        <div className="mb-4">
          <nav aria-label="Breadcrumb" className="text-sm text-neutral-500 dark:text-neutral-400">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:text-accent-light dark:hover:text-accent-dark transition-colors">Home</Link>
              </li>
              <li aria-hidden="true" className="opacity-60">/</li>
              <li>
                <Link href="/projects" className="hover:text-accent-light dark:hover:text-accent-dark transition-colors">Projects</Link>
              </li>
              <li aria-hidden="true" className="opacity-60">/</li>
              <li className="truncate max-w-[50vw] md:max-w-none" aria-current="page">{currentContent.title}</li>
            </ol>
          </nav>
        </div>

        <header className="space-y-6 md:space-y-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading leading-tight">{currentContent.title}</h1>
          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
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

        <div className="prose prose-neutral dark:prose-invert max-w-none prose-lg">
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">{currentContent.overview.title}</h2>
            <div className="space-y-4">
              <p className="text-base sm:text-lg leading-relaxed">{currentContent.overview.text[0]}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <button
                  onClick={() => setSelectedImage("/kattokomppania design.png")}
                  className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 cursor-pointer hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark focus:ring-offset-2"
                  aria-label={`${currentContent.title} design mockup 1 - Click to enlarge`}
                >
                  <Image
                    src="/kattokomppania design.png"
                    alt={`${currentContent.title} design mockup 1`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </button>
                <button
                  onClick={() => setSelectedImage("/kattokomppania_design2.png")}
                  className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 cursor-pointer hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark focus:ring-offset-2"
                  aria-label={`${currentContent.title} design mockup 2 - Click to enlarge`}
                >
                  <Image
                    src="/kattokomppania_design2.png"
                    alt={`${currentContent.title} design mockup 2`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </button>
              </div>
              <p className="text-base sm:text-lg leading-relaxed">{currentContent.overview.text[1]}</p>
            </div>
          </section>

          <section className="mt-8 md:mt-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">{currentContent.features.title}</h2>
            <ul className="space-y-2">
              {currentContent.features.list.map((feature, index) => (
                <li key={index} className="text-base sm:text-lg leading-relaxed">{feature}</li>
              ))}
            </ul>
          </section>

          <section className="mt-8 md:mt-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">{currentContent.tech.title}</h2>
            <ul className="space-y-2">
              {currentContent.tech.list.map((tech, index) => (
                <li key={index} className="text-base sm:text-lg leading-relaxed">{tech}</li>
              ))}
            </ul>
          </section>

          <section className="mt-8 md:mt-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">{currentContent.learning.title}</h2>
            <ul className="space-y-2">
              {currentContent.learning.list.map((item, index) => (
                <li key={index} className="text-base sm:text-lg leading-relaxed">{item}</li>
              ))}
            </ul>
          </section>
        </div>
      </article>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[300] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged image view"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-neutral-300 focus:outline-none focus:ring-2 focus:ring-white rounded p-2 transition-colors"
            aria-label="Close image view"
          >
            <svg
              className="w-6 h-6 md:w-8 md:h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div
            className="relative max-w-7xl max-h-[90vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt={`${currentContent.title} design mockup - enlarged view`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
}