"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Artwork = {
  title: string;
  src: string;
  alt: string;
  format: string;
  className?: string;
  imageClassName?: string;
};

const illustrationWorks: Artwork[] = [
  {
    title: "SPAD - návrh",
    src: "/artworks/ilustrace/Spad1-obalka.jpeg",
    alt: "Obálková ilustrace SPAD - návrh",
    format: "Obálková ilustrace",
    className: "md:col-span-2 lg:col-span-2",
    imageClassName: "object-cover",
  },
  {
    title: "SPAD náhled",
    src: "/artworks/ilustrace/Spad-nahlad.jpeg",
    alt: "Náhled ilustrace SPAD",
    format: "Náhled",
  },
  {
    title: "Skica SPAD",
    src: "/artworks/ilustrace/SkicaSpad2.jpeg",
    alt: "Skica k ilustraci SPAD",
    format: "Proces",
  },
  {
    title: "Proces tvorby",
    src: "/artworks/ilustrace/ProcesTvorby.jpeg",
    alt: "Proces tvorby ilustrace",
    format: "Proces",
  },
  {
    title: "Mapa světa ke stolní hře",
    src: "/artworks/ilustrace/mapakehre.png",
    alt: "Barevná fantasy mapa světa ke stolní hře",
    format: "Fantasy mapa",
    className: "md:col-span-2",
  },
  {
    title: "Samuraj",
    src: "/artworks/ilustrace/samuraj.png",
    alt: "Fantasy ilustrace samuraje",
    format: "Charakter",
  },
  {
    title: "Divoch",
    src: "/artworks/ilustrace/divoch.png",
    alt: "Fantasy ilustrace divocha",
    format: "Charakter",
  },
  {
    title: "Boss Kámen",
    src: "/artworks/ilustrace/Boss-kamen.png",
    alt: "Fantasy boss z kamene",
    format: "Creature design",
  },
  {
    title: "Pouštní boss",
    src: "/artworks/ilustrace/PustnyBoss.png",
    alt: "Fantasy boss z pouště",
    format: "Creature design",
  },
  {
    title: "Skeleton MTG",
    src: "/artworks/ilustrace/Skeleteon-MTG.jpeg",
    alt: "Fantasy ilustrace skeletona",
    format: "Fantasy",
  },
  {
    title: "Liška",
    src: "/artworks/ilustrace/liska.PNG",
    alt: "Ilustrace lišky",
    format: "Ilustrace",
  },
  {
    title: "Liščí oko",
    src: "/artworks/ilustrace/liska_oko.jpeg",
    alt: "Detail liščího oka",
    format: "Detail",
  },
  {
    title: "Malý princ",
    src: "/artworks/ilustrace/malyprinc.jpeg",
    alt: "Ilustrace Malého prince",
    format: "Pohádkový motiv",
  },
  {
    title: "Mrazík",
    src: "/artworks/ilustrace/mrazik-new.png",
    alt: "Fantasy zimní ilustrace",
    format: "Pohádkový motiv",
    className: "md:col-span-2",
  },
];

const freeWorks: Artwork[] = [
  {
    title: "Audrey",
    src: "/artworks/volnatvorba/audry.jpeg",
    alt: "Volná tvorba portrét Audrey",
    format: "Portrét",
  },
  {
    title: "Blue Woman",
    src: "/artworks/volnatvorba/blue-w.jpg",
    alt: "Modře laděná figurální malba",
    format: "Malba",
  },
  {
    title: "Dali",
    src: "/artworks/volnatvorba/dali.jpg",
    alt: "Volná tvorba inspirovaná surrealismem",
    format: "Malba",
  },
  {
    title: "lept a tužka",
    src: "/artworks/volnatvorba/ivo.jpeg",
    alt: "Portrét",
    format: "Portrét",
  },
  {
    title: "Jin Jang",
    src: "/artworks/volnatvorba/jinjang.jpg",
    alt: "Volná tvorba s motivem jin jang",
    format: "Volná tvorba",
  },
  {
    title: "Kobylkos",
    src: "/artworks/volnatvorba/kobylkos.jpg",
    alt: "Volná tvorba s přírodním motivem",
    format: "Studie",
  },
  {
    title: "Ruka",
    src: "/artworks/volnatvorba/ruka.jpeg",
    alt: "Studie ruky",
    format: "Kresba",
  },
  {
    title: "Vtělení",
    src: "/artworks/volnatvorba/vtelenie.jpg",
    alt: "Volná figurální tvorba",
    format: "Figura",
  },
  {
    title: "Woman",
    src: "/artworks/volnatvorba/woman.jpg",
    alt: "Volná tvorba s ženskou figurou",
    format: "Figura",
  },
  {
    title: "Zátiší s hruškami",
    src: "/artworks/volnatvorba/zatisi-hrusky.jpeg",
    alt: "Zátiší s hruškami",
    format: "Zátiší",
  },
];

const graphicWorks: Artwork[] = [
  {
    title: "Garden",
    src: "/artworks/grafika/garden.jpeg",
    alt: "Černobílý linoryt ženy v zahradě",
    format: "Linoryt",
  },
  {
    title: "Moon",
    src: "/artworks/grafika/lino_moon.jpeg",
    alt: "Linoryt s měsícem",
    format: "Linoryt",
  },
  {
    title: "Leptoman",
    src: "/artworks/grafika/leptoman.jpeg",
    alt: "Grafika technikou hlubotisku",
    format: "Hlubotisk",
  },
  {
    title: "Autoportret",
    src: "/artworks/grafika/autoportret.jpg",
    alt: "Grafický autoportrét",
    format: "Grafika",
  },
  {
    title: "Dotyk",
    src: "/artworks/grafika/dotyk.png",
    alt: "Grafická práce Dotyk",
    format: "Grafika",
  },
  {
    title: "Litografie",
    src: "/artworks/grafika/litografie.jpg",
    alt: "Ukázka litografie",
    format: "Litografie",
  },
  {
    title: "Oko",
    src: "/artworks/grafika/oko.jpg",
    alt: "Grafika s motivem oka",
    format: "Grafika",
  },
  {
    title: "Spojení",
    src: "/artworks/grafika/spojeni.png",
    alt: "Grafická práce Spojení",
    format: "Grafika",
  },
];

const navigationLinks = [
  { href: "#ilustrace", label: "Ilustrace" },
  { href: "#volna-tvorba", label: "Volná tvorba" },
  { href: "#grafika", label: "Grafika" },
  { href: "#o-autorce", label: "O autorce" },
  { href: "#kurzy", label: "Kurzy" },
  {
    href: "https://www.etsy.com/shop/WewaCamborArt?ref=dashboard-header",
    label: "Etsy",
    external: true,
  },
  { href: "#contact", label: "Kontakt" },
];

function getWatermarkedSrc(src: string) {
  return src.replace("/artworks/", "/artworks-watermarked/");
}

function ArtworkCard({
  work,
  onOpen,
}: {
  work: Artwork;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className={`gallery-card group relative min-h-[320px] cursor-pointer overflow-hidden rounded-4xl border border-white/10 bg-[#14111f]/55 text-left shadow-2xl shadow-black/28 outline-none transition hover:-translate-y-1 hover:border-amber-100/35 focus-visible:ring-2 focus-visible:ring-amber-100/70 ${work.className ?? ""}`}
    >
      <Image
        src={getWatermarkedSrc(work.src)}
        alt={work.alt}
        fill
        sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
        className={`${work.imageClassName ?? "object-cover"} transition duration-700 group-hover:scale-105`}
      />
      <div className="absolute inset-0 bg-linear-to-t from-[#080711]/95 via-[#080711]/18 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <p className="text-xs uppercase tracking-[0.3em] text-amber-100/80">
          {work.format}
        </p>
        <h3 className="mt-2 text-2xl font-semibold text-white">
          {work.title}
        </h3>
      </div>
    </button>
  );
}

function GallerySection({
  id,
  eyebrow,
  title,
  description,
  works,
  onOpen,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  works: Artwork[];
  onOpen: (works: Artwork[], index: number) => void;
}) {
  return (
    <section
      id={id}
      className="fade-in-up relative px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-linear-to-b from-white/2.5 to-transparent" />
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-amber-200/80">
              {eyebrow}
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              {title}
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-stone-400">
            {description}
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {works.map((work, index) => (
            <ArtworkCard
              key={work.src}
              work={work}
              onOpen={() => onOpen(works, index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryLightbox({
  works,
  index,
  onClose,
  onMove,
}: {
  works: Artwork[];
  index: number;
  onClose: () => void;
  onMove: (direction: -1 | 1) => void;
}) {
  const work = works[index];

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onMove(-1);
      if (event.key === "ArrowRight") onMove(1);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onMove]);

  return (
    <div className="fixed inset-0 z-300 flex items-center justify-center bg-[#050408]/92 px-4 py-6 backdrop-blur-xl">
      <button
        type="button"
        aria-label="Zavřít náhled"
        onClick={onClose}
        className="absolute right-5 top-5 cursor-pointer rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
      >
        Zavřít
      </button>

      <button
        type="button"
        aria-label="Předchozí obrázek"
        onClick={() => onMove(-1)}
        className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-white/10 text-3xl text-white transition hover:bg-white/20"
      >
        ‹
      </button>

      <figure className="flex h-full w-full max-w-6xl flex-col items-center justify-center gap-4">
        <div className="relative h-[78vh] w-full overflow-hidden rounded-4xl border border-white/10 bg-[#12101d]">
          <Image
            src={getWatermarkedSrc(work.src)}
            alt={work.alt}
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />
        </div>
        <figcaption className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-100/80">
            {work.format} · {index + 1} / {works.length}
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white">
            {work.title}
          </h2>
        </figcaption>
      </figure>

      <button
        type="button"
        aria-label="Další obrázek"
        onClick={() => onMove(1)}
        className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-white/10 text-3xl text-white transition hover:bg-white/20"
      >
        ›
      </button>
    </div>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState<{
    works: Artwork[];
    index: number;
  } | null>(null);

  function openLightbox(works: Artwork[], index: number) {
    setLightbox({ works, index });
  }

  function moveLightbox(direction: -1 | 1) {
    setLightbox((current) => {
      if (!current) return current;

      const nextIndex =
        (current.index + direction + current.works.length) %
        current.works.length;

      return { ...current, index: nextIndex };
    });
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_50%_0%,rgba(79,70,229,0.16),transparent_28%),linear-gradient(180deg,#090812_0%,#0d0b18_34%,#090812_68%,#06050a_100%)] text-stone-100">
      <nav className="fade-in-up fixed left-6 right-6 top-4 z-200 mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/15 bg-[#080711]/95 px-5 py-4 shadow-2xl shadow-black/60 backdrop-blur-xl">
        <a
          href="#"
          className="text-sm font-semibold uppercase tracking-[0.35em] text-stone-200"
          onClick={() => setMobileMenuOpen(false)}
        >
          Wewa Čambor
        </a>
        <div className="hidden items-center gap-6 text-sm text-stone-300 md:flex">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              className="transition hover:text-white"
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
        <button
          type="button"
          aria-label={mobileMenuOpen ? "Zavřít menu" : "Otevřít menu"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-white/10 text-stone-100 transition hover:bg-white/16 md:hidden"
        >
          <span className="sr-only">
            {mobileMenuOpen ? "Zavřít menu" : "Otevřít menu"}
          </span>
          <span className="flex flex-col gap-1.5">
            <span
              className={`h-0.5 w-5 rounded-full bg-current transition ${mobileMenuOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-current transition ${mobileMenuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-current transition ${mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </span>
        </button>

        {mobileMenuOpen ? (
          <div className="absolute inset-x-0 top-[calc(100%+0.75rem)] rounded-[1.75rem] border border-white/12 bg-[#080711]/98 p-3 shadow-2xl shadow-black/60 backdrop-blur-xl md:hidden">
            <div className="grid gap-1">
              {navigationLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-stone-200 transition hover:bg-white/8 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </nav>

      <section className="relative isolate px-6 py-8 sm:px-10 lg:px-16">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_18%,rgba(124,58,237,0.2),transparent_34%),radial-gradient(circle_at_82%_8%,rgba(180,83,9,0.1),transparent_30%),linear-gradient(135deg,rgba(9,8,18,0.95)_0%,rgba(18,15,32,0.92)_48%,rgba(8,7,13,0.98)_100%)]" />
        <div className="absolute left-1/2 top-20 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-500/12 blur-3xl" />
        <div className="absolute bottom-10 right-8 -z-10 h-80 w-80 rounded-full bg-amber-500/8 blur-3xl" />

        <div className="mx-auto grid max-w-7xl gap-10 pb-20 pt-16 sm:pt-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-12 lg:pb-32 lg:pt-28">
          <div className="fade-in-up relative z-10 max-w-xl text-center sm:text-left">
            <h1 className="text-4xl font-semibold tracking-[-0.06em] text-white sm:text-6xl lg:text-6xl xl:text-7xl">
              Wewa Čambor, portfolio ilustrací a volné tvorby.
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-base leading-7 text-stone-300 sm:mx-0 sm:mt-7 sm:text-lg sm:leading-8">
              WewaCamborArt představuje autorskou ilustraci, fantasy knižní
              tvorbu, volnou malbu, kresbu a grafické techniky.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <a
                href="#ilustrace"
                className="rounded-full bg-stone-100 px-6 py-3 text-center text-sm font-semibold text-[#08070d] transition hover:bg-violet-100"
              >
                Projít galerii
              </a>
              <a
                href="https://www.instagram.com/wewacambor.art/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 px-6 py-3 text-center text-sm font-semibold text-white transition hover:border-violet-200/60 hover:bg-white/10"
              >
                Instagram
              </a>
              <a
                href="https://www.etsy.com/shop/WewaCamborArt?ref=dashboard-header"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 px-6 py-3 text-center text-sm font-semibold text-white transition hover:border-amber-100/70 hover:bg-white/10"
              >
                Etsy
              </a>
            </div>
          </div>

          <div className="relative mx-auto min-h-[430px] w-full max-w-[360px] sm:min-h-[620px] sm:max-w-[620px]">
            <div className="float-soft absolute left-0 top-12 h-52 w-36 overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-violet-950/40 [--card-rotate:-9deg] sm:left-[-18px] sm:h-80 sm:w-56 sm:rounded-4xl">
              <Image
                src={getWatermarkedSrc("/artworks/grafika/garden.jpeg")}
                alt="Černobílý linoryt ženy v zahradě"
                fill
                priority
                sizes="240px"
                className="object-cover"
              />
            </div>
            <div className="float-soft-delayed absolute right-0 top-2 h-52 w-36 overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/45 [--card-rotate:8deg] sm:left-[414px] sm:right-auto sm:top-0 sm:h-80 sm:w-56 sm:rounded-4xl">
              <Image
                src={getWatermarkedSrc("/artworks/ilustrace/malyprinc.jpeg")}
                alt="Ilustrace Malého prince"
                fill
                priority
                sizes="240px"
                className="object-cover"
              />
            </div>
            <div className="hero-card-main absolute bottom-0 left-[calc(50%-135px)] z-10 h-[360px] w-[270px] overflow-hidden rounded-4xl border border-amber-100/18 bg-[#12101d] p-2.5 shadow-2xl shadow-black/65 sm:left-[115px] sm:h-[520px] sm:w-[390px] sm:rounded-[2.5rem] sm:p-3">
              <div className="relative h-full overflow-hidden rounded-4xl">
                <Image
                  src={getWatermarkedSrc(
                    "/artworks/ilustrace/Spad1-obalka.jpeg",
                  )}
                  alt="Obálková ilustrace Spad"
                  fill
                  priority
                  sizes="420px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/5 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-amber-100">
                   
                  </p>
                  <p className="mt-3 text-3xl font-semibold text-white">
                  
                  </p>
                  <p className="mt-2 text-sm leading-6 text-stone-300">
                    Obálková ilustrace - návrh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GallerySection
        id="ilustrace"
        eyebrow="Ilustrace"
        title="Fantasy, knižní tvorba, postavy a světy s vlastním příběhem."
        description="Galerie obsahuje Spad, procesové náhledy, mapy, charaktery, creature design i pohádkové motivy."
        works={illustrationWorks}
        onOpen={openLightbox}
      />

      <GallerySection
        id="volna-tvorba"
        eyebrow="Volná tvorba"
        title="Malba, kresba a osobní motivy mimo hranice jedné zakázky."
        description="Náhledy volné tvorby ukazují portréty, figurální práce, studie, zátiší a osobní obrazové experimenty."
        works={freeWorks}
        onOpen={openLightbox}
      />

      <GallerySection
        id="grafika"
        eyebrow="Grafika"
        title="Hlubotisk, linoryt, litografie a další práce s linkou."
        description="Samostatná galerie pro grafické techniky založené na kontrastu, rytmu linky a ručním tisku."
        works={graphicWorks}
        onOpen={openLightbox}
      />

      <section id="o-autorce" className="fade-in-up px-6 py-24 sm:px-10 lg:px-16">
        <div className="relative mx-auto grid max-w-7xl gap-10 overflow-hidden rounded-[2.5rem] border border-pink-100/14 bg-[radial-gradient(circle_at_16%_18%,rgba(217,70,239,0.18),transparent_34%),radial-gradient(circle_at_86%_18%,rgba(244,114,182,0.13),transparent_30%),linear-gradient(135deg,rgba(25,19,42,0.9),rgba(18,15,31,0.72),rgba(11,9,18,0.94))] p-8 shadow-2xl shadow-black/30 sm:p-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-fuchsia-500/12 blur-3xl" />
          <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-pink-400/10 blur-3xl" />
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-violet-100">
              O autorce
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              Wewa Čambor
            </h2>
            <p className="mt-5 text-lg leading-8 text-stone-300">
              Ilustrátorka, grafička, lektorka a frontend vývojářka.
            </p>
            <div className="relative mt-8 aspect-4/5 overflow-hidden rounded-4xl border border-white/10 bg-[#12101d] shadow-2xl shadow-black/35">
              <Image
                src="/me/7.jpg"
                alt="Portrét Wewy Čambor"
                fill
                sizes="(min-width: 1024px) 32vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#080711]/35 via-transparent to-transparent" />
            </div>
          </div>

          <div className="space-y-5 text-base leading-8 text-stone-300">
            <p>
              Na její výtvarný talent upozorňovali učitelé už od útlého
              dětství. Ve volném čase si vždy ráda kreslila, nebo lozila po
              stromech.
            </p>
            <p>
              Protože miluje umění a historii, rozhodla se v patnácti letech
              přestoupit z gymnázia na Školu úžitkového výtvarnictví Josefa
              Vydry v Bratislavě, obor sochařství. Získala tam základy kresby,
              modelování, figurální kresby, práce s hlínou, kamenem a dalších
              výtvarných technik.
            </p>
            <p>
              V letech 2009 až 2012 pokračovala ve studiu na Vysoké škole
              výtvarných umění v Bratislavě. Na katedře grafiky studovala pod
              vedením doc. Kolenčíka a prof. Jančoviče, věnovala se tradičním
              grafickým technikám a zkoušela je propojovat se současným uměním,
              kresbou a malbou. Nejvíce jí imponuje litografie a lept.
            </p>
            <p>
              Tvorbě se dál věnuje i v domácích podmínkách, zejména kresbě,
              linorytu, digitální malbě a ilustraci. Ve svých dílech ráda
              odhaluje a dostává na povrch to, co běžně zůstává nepovšimnuto.
            </p>
            <p>
              Jako lektorka vedla několik výtvarných kurzů pro děti i dospělé.
              V současné době pracuje jako frontend vývojářka, příležitostná
              grafička a ilustrátorka.
            </p>
          </div>
        </div>
      </section>

      <section id="kurzy" className="fade-in-up px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2.5rem] border border-violet-100/12 bg-[#14111f]/55 p-8 shadow-2xl shadow-black/28 sm:p-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-violet-100">
              Kurzy kresby
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white">
              Ateliér Maverila
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-stone-300">
              Kromě vlastní tvorby vedeš také kurzy kresby pro začátečníky,
              pokročilé a individuální konzultace. Více informací je na webu
              Ateliéru Maverila.
            </p>
            <a
              href="https://www.ateliermaverila.cz/ateliermaverila"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-violet-200/60 hover:bg-white/10"
            >
              Otevřít kurzy
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="fade-in-up px-6 pb-16 pt-10 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-amber-100/12 bg-[linear-gradient(135deg,rgba(20,17,31,0.9),rgba(26,20,37,0.78),rgba(12,10,20,0.92))] p-8 text-center shadow-2xl shadow-black/35 sm:p-14">
          <p className="text-sm uppercase tracking-[0.35em] text-amber-100">
            Zakázky a spolupráce
          </p>
          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            Máš příběh, obálku nebo obraz, který potřebuje vlastní vizuální
            magii?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-stone-300">
            Pro zakázky, spolupráce, kurzy nebo dotazy napiš e-mail, případně
            sleduj aktuální tvorbu na Instagramu.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="mailto:camborova.veronika@gmail.com"
              className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#08070d] transition hover:bg-amber-100"
            >
              camborova.veronika@gmail.com
            </a>
            <a
              href="https://www.instagram.com/wewacambor.art/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-7 py-3 text-sm font-semibold text-white transition hover:border-amber-100/70 hover:bg-white/10"
            >
              Instagram
            </a>
            <a
              href="https://www.etsy.com/shop/WewaCamborArt?ref=dashboard-header"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-7 py-3 text-sm font-semibold text-white transition hover:border-amber-100/70 hover:bg-white/10"
            >
              Etsy shop
            </a>
          </div>
        </div>
      </section>

      {lightbox ? (
        <GalleryLightbox
          works={lightbox.works}
          index={lightbox.index}
          onClose={() => setLightbox(null)}
          onMove={moveLightbox}
        />
      ) : null}
    </main>
  );
}
