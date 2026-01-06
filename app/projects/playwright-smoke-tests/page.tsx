"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "../../context/language-context";

export default function PlaywrightTestingProject() {
  const { language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const content = {
    en: {
      title: "Learning Playwright Testing",
      subtitle:
        "Learned together with Claude Sonnet how to write smoke tests with Playwright for this portfolio. Got really into testing, and spent the whole Sunday tinkering with tests.",
      overview: {
        title: "Why I Did This",
        text: [
          "I wanted to understand testing better, so I decided to try something concrete right away. Playwright kept coming up when I googled, and seemed like a straightforward tool to start with. I installed the Playwright extension for VSCode on Linux - there was a bit of struggle, but eventually got the test environment running.",
          "Testing my own portfolio made sense because I already know how everything works, so I could focus on learning the testing framework itself. The goal was simple: write tests that check if pages load correctly and basic functions work.",
        ],
      },
      what: {
        title: "What I Built",
        text: "Two tiers of smoke tests, basically a safety net to catch if something major breaks:",
        tier1: {
          title: "Tier 1: Is the site completely broken?",
          list: [
            "Home page actually loads and shows the navigation",
            "All main pages (About, Projects, Blog, Contact) are reachable",
            "Each page has the content it's supposed to have",
            "Mobile menu works on smaller screens",
          ],
        },
        tier2: {
          title: "Tier 2: Important stuff users care about",
          list: [
            "Contact form shows up with all the fields",
            "Can't submit an empty form (basic validation works)",
            "Every page has exactly one H1 - important for accessibility",
            "Keyboard navigation actually works (you can tab through and hit enter)",
          ],
        },
      },
      tech: {
        title: "What I used",
        list: [
          "Playwright for the testing framework",
          "GitHub Actions to run tests automatically whenever I push code to git",
          "Different configs for local testing vs CI (learned this the hard way)",
        ],
      },
      learning: {
        title: "What I learned",
        list: [
          "The basics: page.goto(), expect(), getByRole(). Testing wasn't as scary as I thought",
          "Smoke tests vs detailed tests. Smoke tests are just quick sanity checks",
          "How to group related tests together with test.describe()",
          "Getting Playwright to work on CachyOS took some troubleshooting, needed to install specific browser dependencies",
          "CI/CD setup is different from local. GitHub Actions needed its own configuration",
          "Testing on different screen sizes by changing viewport",
          "Using accessibility roles to find elements is way better than CSS selectors",
          "Why and how AI can be super helpful when learning something new",
        ],
      },
      honest: {
        title: "What's next",
        text: "I know there's visual regression testing, API testing, and all kinds of other much more complex testing out there. But starting with basic smoke tests helped me understand the fundamentals. Going from zero to working tests in one day learning together with Claude felt like a good achievement. I'll definitely be implementing automated tests in all my bigger and frequently changing projects going forward.",
      },
      blogLink: {
        text: "Want to read more about my learning process and setup details?",
        linkText: "Read blog post about learning Playwright",
      },
    },
    fi: {
      title: "Playwright-testauksen perusteiden opiskelua",
      subtitle:
        "Oppetelin yhteistyössä Claude Sonnetin kanssa tekemään smoke-testit Playwrightillä tälle portfoliolle. Innostuin testaamisesti kovasti, ja koko sunnuntai sujui joutuisasti testien pakertamisen äärellä.",
      overview: {
        title: "Miksi tein tämän",
        text: [
          "Halusin ymmärtää testausta paremmin, joten päätin kokeilla heti jotain konkreettista. Playwright tuli googlailtaessa usein vastaan, ja vaikutti suoraviivaiselta työkalulta alkuun. Asensin Playwright-extensionin VSCodeen Linuxilla, tässä oli pientä hikottelua mutta lopulta testiympäristö saatiin pystyyn",
          "Oman portfolion testaaminen oli ihan fiksua, koska tiedän jo miten kaikki toimii, joten pystyin keskittymään itse testausframeworkin oppimiseen. Tavoite oli yksinkertainen: tehdä testejä jotka tarkistavat että sivut latautuvat oikein ja perustoiminnot pelaavat.",
        ],
      },
      what: {
        title: "Mitä rakensin",
        text: "Kaksi tasoa smoke-testejä, käytännössä turvaverkko joka huomaa jos jotain isoa hajoaisi:",
        tier1: {
          title: "Taso 1: Toimiiko sivusto?",
          list: [
            "Kotisivu latautuu ja navigaatio näkyy",
            "Kaikki pääsivut (About, Projects, Blog, Contact) ovat tavoitettavissa",
            "Jokaisella sivulla on se sisältö mitä pitääkin olla",
            "Mobiilin valikko toimii pienemmillä näytöillä",
          ],
        },
        tier2: {
          title: "Taso 2: Tärkeät asiat käyttäjille:",
          list: [
            "Yhteydenottolomake näkyy ja siinä on kaikki kentät",
            "Tyhjää lomaketta ei voi lähettää (perusvalidointi toimii)",
            "Jokaisella sivulla on täsmälleen yksi H1 - tärkeää saavutettavuudelle",
            "Näppäimistönavigointi oikeasti toimii (voi tabia eteenpäin ja painaa enteriä)",
          ],
        },
      },
      tech: {
        title: "Mitä käytin",
        list: [
          "Playwright testausframeworkina",
          "GitHub Actions ajaa testit automaattisesti aina kun pusken koodia gittiin",
          "Erilaiset konfiguraatiot paikalliseen testaukseen vs CI:hin (opin tämän kantapään kautta)",
        ],
      },
      learning: {
        title: "Mitä opin",
        list: [
          "Perusteet: page.goto(), expect(), getByRole(). Testaus ei ollutkaan niin pelottavaa kuin luulin",
          "Smoke-testit vs yksityiskohtaiset testit. Smoke-testit on vaan nopeita järkitarkistuksia",
          "Miten ryhmitellä liittyvät testit yhteen test.describe():lla",
          "Playwrightin saaminen toimimaan CachyOS:llä vaati vähän trubleshoottausta, piti asentaa tiettyjä selaimen riippuvuuksia",
          "CI/CD-setup on erilainen kuin lokaali. GitHub Actions tarvitsi oman konfiguraation",
          "Testaaminen eri näyttöko'oilla muuttamalla viewporttia",
          "Saavutettavuusroolien käyttö elementtien löytämiseen on paljon parempi kuin CSS-selektorit",
          "Miksi ja miten AI voi olla superhyödyllinen kun opettelee jotain uutta asiaa tai asiakokonaisuutta",
        ],
      },
      honest: {
        title: "Mitä seuraavaksi",
        text: "Tiedän että on olemassa esimerkiksi visuaalista regressiotestausta, API-testausta ja kaikenlaista muuta paljon monimutkaisempaa testausta. Mutta perus-smoke-testeistä aloittaminen auttoi ymmärtämään perusteet. Nollasta toimiviin testeihin yhdessä päivässä Clauden kanssa yhdessä opetellen tuntui hyvältä saavutukselta. Tulen jatkossa varmasti implementoimaan kaikkiin isompiin ja paljon muuttuviin projekteihin automaattisia testejä.",
      },
      blogLink: {
        text: "Haluatko lukea lisää oppimisprosessistani ja setupin yksityiskohdista?",
        linkText: "Lue blogikirjoitus Playwrightin opiskelusta",
      },
    },
  };

  const currentContent = content[language];

  return (
    <div className="px-4 md:px-6 py-6 md:py-10">
      <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-b from-white to-neutral-100 dark:from-[#161617] dark:to-[#0F0F10] shadow-[0_10px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.45)] ring-1 ring-black/5 dark:ring-white/5 p-6 md:p-20">
        <article className="max-w-4xl mx-auto space-y-8 md:space-y-12">
          {/* Breadcrumb */}
          <div className="mb-4">
            <nav
              aria-label="Breadcrumb"
              className="text-sm text-neutral-500 dark:text-neutral-400"
            >
              <ol className="flex items-center gap-2">
                <li>
                  <Link
                    href="/"
                    className="hover:text-accent-light dark:hover:text-accent-dark transition-colors"
                  >
                    {language === "fi" ? "Etusivu" : "Home"}
                  </Link>
                </li>
                <li aria-hidden="true" className="opacity-60">
                  /
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="hover:text-accent-light dark:hover:text-accent-dark transition-colors"
                  >
                    {language === "fi" ? "Projektit" : "Projects"}
                  </Link>
                </li>
                <li aria-hidden="true" className="opacity-60">
                  /
                </li>
                <li
                  className="truncate max-w-[50vw] md:max-w-none"
                  aria-current="page"
                >
                  {currentContent.title}
                </li>
              </ol>
            </nav>
          </div>
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-stone-900 dark:text-stone-100">
              {currentContent.title}
            </h1>
            <p className="text-xl text-stone-600 dark:text-stone-400 leading-relaxed">
              {currentContent.subtitle}
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-12 rounded-2xl overflow-hidden border border-stone-200/60 dark:border-zinc-700/50">
            <div
              className="relative aspect-video cursor-pointer hover:opacity-95 transition-opacity"
              onClick={() =>
                setSelectedImage("/images/projects/playwright-testing.png")
              }
            >
              <Image
                src="/images/projects/playwright-testing.png"
                alt={
                  language === "fi"
                    ? "Playwright-testien koodi VS Codessa"
                    : "Playwright test code in VS Code"
                }
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Overview Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-stone-900 dark:text-stone-100">
              {currentContent.overview.title}
            </h2>
            <div className="prose prose-stone dark:prose-invert max-w-none">
              {currentContent.overview.text.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-stone-700 dark:text-stone-300 leading-relaxed mb-4"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          {/* What I Built Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-stone-900 dark:text-stone-100">
              {currentContent.what.title}
            </h2>
            <p className="text-stone-700 dark:text-stone-300 leading-relaxed mb-6">
              {currentContent.what.text}
            </p>

            {/* Tier 1 */}
            <div className="mb-6 p-6 rounded-xl bg-white/50 dark:bg-black/20 border border-stone-200/60 dark:border-zinc-700/50">
              <h3 className="text-xl font-semibold mb-3 text-stone-900 dark:text-stone-100">
                {currentContent.what.tier1.title}
              </h3>
              <ul className="space-y-2">
                {currentContent.what.tier1.list.map((item, index) => (
                  <li
                    key={index}
                    className="leading-relaxed text-stone-700 dark:text-stone-300 flex gap-2"
                  >
                    <span className="text-accent-light dark:text-accent-dark">
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tier 2 */}
            <div className="mb-6 p-6 rounded-xl bg-white/50 dark:bg-black/20 border border-stone-200/60 dark:border-zinc-700/50">
              <h3 className="text-xl font-semibold mb-3 text-stone-900 dark:text-stone-100">
                {currentContent.what.tier2.title}
              </h3>
              <ul className="space-y-2">
                {currentContent.what.tier2.list.map((item, index) => (
                  <li
                    key={index}
                    className="leading-relaxed text-stone-700 dark:text-stone-300 flex gap-2"
                  >
                    <span className="text-accent-light dark:text-accent-dark">
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Code Sample Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-stone-900 dark:text-stone-100">
              {language === "fi" ? "Esimerkkitestikoodi" : "Sample Test Code"}
            </h2>
            <div className="rounded-xl bg-stone-900 dark:bg-black p-6 overflow-x-auto border border-stone-700">
              <pre className="text-sm text-stone-100 dark:text-stone-200">
                <code>{`test('Home: loads and shows hero + navigation', async ({ page }) => {
  await page.goto(BASE_URL);

  // Navigation is visible
  await expect(page.getByRole('navigation').first()).toBeVisible();

  // Hero heading is visible
  const heroHeading = page.getByRole('heading').first();
  await expect(heroHeading).toBeVisible();

  // Featured projects section exists
  await expect(
    page.locator('section').filter({ hasText: /featured work|projects/i })
  ).toBeVisible();
});`}</code>
              </pre>
            </div>
            <p className="text-sm text-stone-600 dark:text-stone-400 mt-3">
              {language === "fi"
                ? "Katso koko testisarja: "
                : "See the full test suite: "}
              <Link
                href="https://github.com/MilicaKrivokapic/portfolio2025/blob/main/tests/portfolio-smoke.spec.ts"
                target="_blank"
                className="text-stone-900 dark:text-stone-100 hover:underline"
              >
                portfolio-smoke.spec.ts
              </Link>
            </p>
          </section>

          {/* Technologies Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-stone-900 dark:text-stone-100">
              {currentContent.tech.title}
            </h2>
            <ul className="space-y-2">
              {currentContent.tech.list.map((item, index) => (
                <li
                  key={index}
                  className="leading-relaxed text-stone-700 dark:text-stone-300 flex gap-2"
                >
                  <span className="text-accent-light dark:text-accent-dark">
                    →
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Learning Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-stone-900 dark:text-stone-100">
              {currentContent.learning.title}
            </h2>
            <ul className="space-y-2">
              {currentContent.learning.list.map((item, index) => (
                <li
                  key={index}
                  className="leading-relaxed text-stone-700 dark:text-stone-300 flex gap-2"
                >
                  <span className="text-accent-light dark:text-accent-dark">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Honest Section */}
          <section className="mb-12">
            <div className="p-6 rounded-xl bg-gradient-to-br from-stone-100 to-stone-50 dark:from-zinc-800/50 dark:to-zinc-900/50 border border-stone-200/60 dark:border-zinc-700/50">
              <div className="flex gap-4 items-center">
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-4 text-stone-900 dark:text-stone-100">
                    {currentContent.honest.title}
                  </h2>
                  <p className="leading-relaxed text-stone-700 dark:text-stone-300">
                    {currentContent.honest.text}
                  </p>
                </div>
                <div className="hidden sm:block flex-shrink-0">
                  <Image
                    src="/images/mr-bean-thumbs-up.gif"
                    alt="Mr Bean thumbs up"
                    width={140}
                    height={80}
                    className="rounded-lg"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Blog Link Section */}
          <section className="mb-12">
            <p className="text-stone-600 dark:text-stone-400 mb-3">
              {currentContent.blogLink.text}
            </p>
            <Link
              href="/blog/playwright-testaus-kokemus"
              className="inline-flex items-center gap-2 text-stone-900 dark:text-stone-100 hover:text-stone-600 dark:hover:text-stone-300 transition-colors"
            >
              <span className="underline underline-offset-4">
                {currentContent.blogLink.linkText}
              </span>
              <span aria-hidden="true">→</span>
            </Link>
          </section>
        </article>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[9000] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedImage}
              alt={language === "fi" ? "Suurennettu kuva" : "Enlarged image"}
              fill
              className="object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
