import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Instagram, Menu, Phone, Star, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import showroomImage from "@/assets/dilshad-showroom.webp";

const phoneHref = "tel:+919440603393";
const whatsappHref = "https://wa.me/919440603393";
const mapsHref =
  "https://www.google.com/maps/search/?api=1&query=Dilshad+Burqa+House+Pathar+Gatti+Hyderabad";
const reviewsHref = "https://www.google.com/search?q=Dilshad+Burqa+House+Hyderabad+reviews";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dilshad Burqa House | Abayas, Burqas & Hijabs in Hyderabad" },
      {
        name: "description",
        content:
          "Visit Dilshad Burqa House in Pathar Gatti, Hyderabad for a refined in-store collection of Abayas, Burqas and Hijabs.",
      },
      { property: "og:title", content: "Dilshad Burqa House | Modest Fashion in Hyderabad" },
      {
        property: "og:description",
        content:
          "Discover a refined collection of Abayas, Burqas and Hijabs at our Pathar Gatti showroom.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ClothingStore",
          name: "Dilshad Burqa House",
          telephone: "+91 94406 03393",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Abdullah Estate, 22-6-272, Konche Estate, Pathar Gatti",
            addressLocality: "Hyderabad",
            addressRegion: "Telangana",
            postalCode: "500002",
            addressCountry: "IN",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "11:30",
              closes: "23:00",
            },
          ],
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.7", reviewCount: "469" },
        }),
      },
    ],
  }),
  component: ShowroomPage,
});

const navItems = [
  ["Home", "#home"],
  ["Collection", "#collection"],
  ["About", "#about"],
  ["Showroom", "#showroom"],
  ["Visit Us", "#visit"],
];

function ShowroomPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) => entry.isIntersecting && entry.target.classList.add("is-visible"),
        ),
      { threshold: 0.14 },
    );
    document.querySelectorAll(".editorial-reveal").forEach((el) => observer.observe(el));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen || lightboxImage ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, lightboxImage]);

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/95 py-3 text-foreground shadow-[0_1px_0_var(--border)] backdrop-blur-xl" : "py-6 text-hero-foreground"}`}
      >
        <div className="mx-auto grid max-w-[1500px] grid-cols-[minmax(0,1fr)_auto] items-center px-5 md:px-10 lg:grid-cols-[1fr_auto_1fr]">
          <a href="#home" className="min-w-0 font-display text-xl tracking-[0.08em] sm:text-2xl">
            DILSHAD <span className="hidden sm:inline">BURQA HOUSE</span>
          </a>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-[0.65rem] font-medium uppercase tracking-[0.18em] transition-opacity hover:opacity-55"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="hidden justify-end gap-5 lg:flex">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="text-[0.65rem] uppercase tracking-[0.18em]"
            >
              WhatsApp
            </a>
            <a href={phoneHref} className="text-[0.65rem] uppercase tracking-[0.18em]">
              Call
            </a>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMenuOpen(true)}
            className="justify-self-end text-current hover:bg-current/10 lg:hidden"
            aria-label="Open menu"
          >
            <Menu />
          </Button>
        </div>
      </header>

      <section
        id="home"
        className="relative flex min-h-[100svh] items-end bg-hero text-hero-foreground"
      >
        <img
          src={showroomImage}
          alt="Dilshad Burqa House showroom in Pathar Gatti, Hyderabad"
          className="absolute inset-0 h-full w-full object-cover object-center animate-[hero-scale_1.8s_cubic-bezier(.22,1,.36,1)_both]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-hero via-hero/25 to-hero/50" />
        <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 pb-14 pt-36 md:px-10 md:pb-20">
          <div className="w-fit max-w-3xl rounded-3xl border border-hero-foreground/10 bg-hero/60 p-7 shadow-[0_18px_60px_-20px_rgba(0,0,0,0.55)] backdrop-blur-md md:p-10">
            <p className="mb-5 animate-[hero-rise_.8s_.25s_both] text-[0.66rem] font-medium uppercase tracking-[0.3em] text-champagne">
              Pathar Gatti · Hyderabad
            </p>
            <h1 className="max-w-5xl animate-[hero-rise_1s_.35s_both] text-[clamp(3.4rem,10vw,9.5rem)] leading-[0.82]">
              DILSHAD
              <br />
              BURQA HOUSE
            </h1>
            <div className="mt-7 grid gap-7 md:grid-cols-[1fr_auto] md:items-end">
              <div className="animate-[hero-rise_.9s_.55s_both]">
                <p className="font-display text-2xl md:text-4xl">
                  Modest Elegance, Beautifully Curated.
                </p>
                
              </div>
              <div className="flex animate-[hero-rise_.9s_.7s_both] flex-col gap-3 sm:flex-row">
                <Button asChild variant="editorial-light" size="editorial">
                  <a href="#collection">Explore the collection</a>
                </Button>
                <Button asChild variant="editorial-light" size="editorial">
                  <a href="#visit">Visit our showroom</a>
                </Button>
              </div>
            </div>
          </div>
          <a
            href="#about"
            className="mt-12 inline-flex animate-[hero-rise_.9s_.9s_both] items-center gap-3 text-[0.6rem] uppercase tracking-[0.25em] text-hero-foreground/65"
          >
            <ArrowDown className="size-3 animate-[drift_2s_ease-in-out_infinite]" /> Scroll to
            discover
          </a>
        </div>
      </section>

      <section id="about" className="px-5 py-28 md:px-10 md:py-44">
        <div className="mx-auto max-w-[1400px] editorial-reveal">
          <p className="mb-8 text-[0.65rem] uppercase tracking-[0.25em] text-burgundy">
            Our point of view
          </p>
          <h2 className="max-w-5xl text-[clamp(3.3rem,8vw,8.5rem)] leading-[0.9]">
            Elegance in
            <br />
            <span className="ml-[12vw] italic">Every Layer.</span>
          </h2>
          <p className="ml-auto mt-12 max-w-xl text-lg font-light leading-8 text-ink-soft">
            Discover thoughtfully curated modest fashion designed for women who appreciate timeless
            elegance, graceful silhouettes and refined detailing.
          </p>
        </div>
      </section>

      <section
        id="collection"
        className="bg-hero px-5 py-24 text-hero-foreground md:px-10 md:py-36"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="editorial-reveal mb-16 flex items-end justify-between border-b border-hero-foreground/20 pb-6">
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.25em] text-champagne">
                The collection
              </p>
              <h2 className="mt-4 text-5xl md:text-7xl">A Study in Silhouette</h2>
            </div>
            <span className="hidden text-xs uppercase tracking-[0.2em] text-hero-foreground/50 md:block">
              01 — 03
            </span>
          </div>
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-8">
            <article className="editorial-reveal lg:col-span-7">
              <GalleryImage
                src="/1.webp"
                alt="Abayas from the Dilshad Burqa House collection"
                className="aspect-[4/5]"
                imageClassName="object-[center_23%]"
                onOpen={setLightboxImage}
              />
              <div className="mt-6 flex items-end justify-between">
                <div>
                  <span className="text-[0.6rem] uppercase tracking-[0.22em] text-champagne">
                    01 / Signature
                  </span>
                  <h3 className="mt-2 text-5xl">Abayas</h3>
                </div>
                <a
                  href="#gallery"
                  className="group flex items-center gap-3 text-[0.62rem] uppercase tracking-[0.18em]"
                >
                  View collection{" "}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </article>
            <div className="space-y-16 lg:col-span-5 lg:pt-28">
              <article className="editorial-reveal">
                <GalleryImage
                  src="/2.webp"
                  alt="Burqas from the Dilshad Burqa House collection"
                  className="aspect-[5/4]"
                  imageClassName="object-[center_8%]"
                  onOpen={setLightboxImage}
                />
                <div className="mt-5 flex justify-between">
                  <h3 className="text-4xl">Burqas</h3>
                  <span className="text-[0.6rem] uppercase tracking-[0.2em] text-champagne">
                    02
                  </span>
                </div>
              </article>
              <article className="editorial-reveal lg:ml-20">
                <GalleryImage
                  src="/3.webp"
                  alt="Hijabs from the Dilshad Burqa House collection"
                  className="aspect-square"
                  imageClassName="object-[left_65%]"
                  onOpen={setLightboxImage}
                />
                <div className="mt-5 flex justify-between">
                  <h3 className="text-4xl">Hijabs</h3>
                  <span className="text-[0.6rem] uppercase tracking-[0.2em] text-champagne">
                    03
                  </span>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-28 md:py-40">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="editorial-reveal mb-14 grid gap-6 md:grid-cols-2 md:items-end">
            <h2 className="text-5xl md:text-7xl">
              Inside the
              <br />
              Collection
            </h2>
            <p className="max-w-md justify-self-end text-sm leading-7 text-muted-foreground">
              An authentic glimpse of the silhouettes and tones awaiting you at our Pathar Gatti
              showroom.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-12 md:gap-5">
            <GalleryImage
              src="/4.webp"
              alt="Inside the Dilshad Burqa House collection"
              className="editorial-reveal col-span-2 aspect-[4/5] md:col-span-5 md:row-span-2"
              imageClassName="object-center"
              onOpen={setLightboxImage}
            />
            <GalleryImage
              src="/5.webp"
              alt="Collection fabric and styling detail"
              className="editorial-reveal aspect-square md:col-span-3"
              imageClassName="object-[left_22%]"
              onOpen={setLightboxImage}
            />
            <GalleryImage
              src="/6.webp"
              alt="Collection editorial detail"
              className="editorial-reveal aspect-[3/4] md:col-span-4"
              imageClassName="object-[right_20%]"
              onOpen={setLightboxImage}
            />
            <GalleryImage
              src="/6.webp"
              alt="Collection editorial detail"
              className="editorial-reveal col-span-2 aspect-[16/9] md:col-span-7"
              imageClassName="object-[center_72%]"
              onOpen={setLightboxImage}
            />
          </div>
        </div>
      </section>

      <section id="showroom" className="grid bg-secondary lg:grid-cols-2">
        <div className="editorial-reveal order-2 flex items-center px-6 py-20 md:px-16 lg:order-1 lg:py-28">
          <div className="max-w-xl">
            <p className="text-[0.65rem] uppercase tracking-[0.25em] text-burgundy">The showroom</p>
            <h2 className="mt-5 text-6xl md:text-8xl">
              Step Into
              <br />
              Dilshad
            </h2>
            <p className="mt-8 text-lg leading-8 text-ink-soft">
              Visit our showroom at Pathar Gatti, Hyderabad and explore our collections in person.
            </p>
            <address className="mt-6 max-w-md not-italic text-sm leading-7 text-muted-foreground">
              Abdullah Estate, 22-6-272, Konche Estate, Pathar Gatti, Hyderabad, Telangana 500002
            </address>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild variant="editorial" size="editorial">
                <a href={mapsHref} target="_blank" rel="noreferrer">
                  Get directions
                </a>
              </Button>
              <Button asChild variant="editorial-outline" size="editorial">
                <a href={phoneHref}>Call showroom</a>
              </Button>
              <Button asChild variant="editorial-outline" size="editorial">
                <a href={whatsappHref} target="_blank" rel="noreferrer">
                  WhatsApp us
                </a>
              </Button>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="group order-1 min-h-[65vh] overflow-hidden lg:order-2"
          onClick={() => setLightboxImage(showroomImage)}
          aria-label="View showroom photograph fullscreen"
        >
          <img
            loading="lazy"
            src={showroomImage}
            alt="Entrance to Dilshad Burqa House"
            className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.025]"
          />
        </button>
      </section>

      <section className="px-5 py-28 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <div className="editorial-reveal mb-16 flex items-end justify-between">
            <h2 className="text-5xl md:text-7xl">Why Visit</h2>
            <p className="hidden text-xs uppercase tracking-[0.22em] text-muted-foreground md:block">
              The Dilshad experience
            </p>
          </div>
          <div className="divide-y divide-border border-y border-border">
            {[
              ["01", "Curated Modest Fashion", "A focused selection of Abayas, Burqas and Hijabs."],
              [
                "02",
                "In-store Experience",
                "Explore fabrics, colours, silhouettes and detailing in person.",
              ],
              [
                "03",
                "Everyday to Occasion",
                "Collections suitable for different personal styles and occasions.",
              ],
              ["04", "Hyderabad Showroom", "Conveniently located in Pathar Gatti."],
            ].map(([n, title, copy]) => (
              <div
                key={n}
                className="editorial-reveal grid gap-4 py-8 md:grid-cols-[80px_1fr_1fr] md:items-center"
              >
                <span className="text-xs text-burgundy">{n}</span>
                <h3 className="text-3xl md:text-4xl">{title}</h3>
                <p className="max-w-md text-sm leading-7 text-muted-foreground">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-burgundy px-5 py-24 text-hero-foreground md:px-10 md:py-32">
        <div className="editorial-reveal mx-auto grid max-w-[1400px] gap-12 md:grid-cols-[auto_1fr_auto] md:items-center">
          <div>
            <div className="font-display text-8xl md:text-9xl">4.7</div>
            <div className="mt-2 flex gap-1 text-champagne" aria-label="5 stars">
              <Star className="fill-current" />
              <Star className="fill-current" />
              <Star className="fill-current" />
              <Star className="fill-current" />
              <Star className="fill-current" />
            </div>
            <p className="mt-3 text-xs uppercase tracking-[0.2em]">469 Google Reviews</p>
          </div>
          <h2 className="max-w-xl text-5xl leading-tight md:text-7xl">
            Trusted by Customers Across Hyderabad
          </h2>
          <Button asChild variant="editorial-light" size="editorial">
            <a href={reviewsHref} target="_blank" rel="noreferrer">
              View Google reviews
            </a>
          </Button>
        </div>
      </section>

      <section
        id="visit"
        className="grid min-h-[75vh] bg-hero text-hero-foreground lg:grid-cols-[1.1fr_.9fr]"
      >
        <div className="editorial-reveal flex items-center px-6 py-24 md:px-16">
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.25em] text-champagne">
              Pathar Gatti · Hyderabad
            </p>
            <h2 className="mt-5 text-6xl md:text-9xl">
              Come
              <br />
              Visit Us
            </h2>
            <address className="mt-8 not-italic text-base font-light leading-8 text-hero-foreground/70">
              Abdullah Estate, 22-6-272,
              <br />
              Konche Estate, Pathar Gatti,
              <br />
              Hyderabad, Telangana 500002
            </address>
            <div className="mt-9 grid max-w-xl gap-6 border-y border-hero-foreground/20 py-6 sm:grid-cols-2">
              <div>
                <p className="text-[0.6rem] uppercase tracking-[0.2em] text-champagne">Every Day</p>
                <p className="mt-2">11:30 AM – 11:00 PM</p>
              </div>
              <div>
                <p className="text-[0.6rem] uppercase tracking-[0.2em] text-champagne">Phone</p>
                <a href={phoneHref} className="mt-2 block">
                  +91 94406 03393
                </a>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="editorial-light" size="editorial">
                <a href={mapsHref} target="_blank" rel="noreferrer">
                  Get directions
                </a>
              </Button>
              <Button asChild variant="editorial-light" size="editorial">
                <a href={phoneHref}>
                  <Phone /> Call now
                </a>
              </Button>
              <Button asChild variant="editorial-light" size="editorial">
                <a href={whatsappHref} target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
        <a
          href={mapsHref}
          target="_blank"
          rel="noreferrer"
          className="group relative min-h-[55vh] overflow-hidden"
        >
          <img
            loading="lazy"
            src={showroomImage}
            alt="Dilshad Burqa House location in Pathar Gatti"
            className="absolute inset-0 h-full w-full object-cover object-center grayscale-[25%] transition duration-1000 group-hover:scale-[1.03] group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-hero/25" />
          <span className="absolute bottom-8 left-8 inline-flex items-center gap-3 border-b border-hero-foreground pb-2 text-xs uppercase tracking-[0.18em]">
            Open in Google Maps <ArrowRight className="size-4" />
          </span>
        </a>
      </section>

      <section className="relative flex min-h-[78vh] items-center justify-center px-5 py-24 text-center text-hero-foreground">
        <img
          loading="lazy"
          src={showroomImage}
          alt="Dilshad Burqa House fashion showroom"
          className="absolute inset-0 h-full w-full object-cover object-[center_35%]"
        />
        <div className="absolute inset-0 bg-hero/75" />
        <div className="editorial-reveal relative z-10">
          <p className="text-[0.65rem] uppercase tracking-[0.28em] text-champagne">
            Your next visit
          </p>
          <h2 className="mt-6 text-[clamp(3.5rem,9vw,8rem)] leading-none">
            Your Next Look Awaits.
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-light text-hero-foreground/75">
            Explore the collection in person at Dilshad Burqa House, Hyderabad.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild variant="editorial-light" size="editorial">
              <a href={mapsHref} target="_blank" rel="noreferrer">
                Visit the showroom
              </a>
            </Button>
            <Button asChild variant="editorial-light" size="editorial">
              <a href={whatsappHref} target="_blank" rel="noreferrer">
                WhatsApp us
              </a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-background px-5 py-14 md:px-10">
        <div className="mx-auto grid max-w-[1400px] gap-10 border-b border-border pb-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl">DILSHAD BURQA HOUSE</p>
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-burgundy">
              Abayas • Burqas • Hijabs
            </p>
          </div>
          <div className="text-sm leading-7 text-muted-foreground">
            <p>Pathar Gatti, Hyderabad</p>
            <a href={phoneHref}>+91 94406 03393</a>
            <p>11:30 AM – 11:00 PM • Every Day</p>
          </div>
          <nav className="grid grid-cols-2 gap-3 text-xs uppercase tracking-[0.14em]">
            {navItems.slice(0, 5).map(([l, h]) => (
              <a key={l} href={h}>
                {l}
              </a>
            ))}
            <a href={reviewsHref} target="_blank" rel="noreferrer">
              Google Reviews
            </a>
            <a href={whatsappHref} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </nav>
        </div>
        <div className="mx-auto mt-7 flex max-w-[1400px] justify-between text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
          <span>© 2026 Dilshad Burqa House</span>
          <Instagram className="size-4" aria-hidden="true" />
        </div>
      </footer>

      {menuOpen && (
        <div className="fixed inset-0 z-[70] flex flex-col bg-hero px-6 py-6 text-hero-foreground animate-[menu-fade_.35s_both]">
          <Button
            variant="ghost"
            size="icon"
            className="self-end text-hero-foreground hover:bg-hero-foreground/10"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X />
          </Button>
          <nav className="my-auto flex flex-col gap-5">
            {navItems.map(([l, h], i) => (
              <a
                key={l}
                href={h}
                onClick={() => setMenuOpen(false)}
                className="flex items-baseline gap-5 border-b border-hero-foreground/15 pb-4 font-display text-5xl"
              >
                <span className="font-sans text-[0.6rem] text-champagne">0{i + 1}</span>
                {l}
              </a>
            ))}
          </nav>
          <div className="flex gap-6 text-xs uppercase tracking-[0.18em]">
            <a href={phoneHref}>Call</a>
            <a href={whatsappHref} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
      )}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[80] grid place-items-center bg-hero/95 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          onClick={() => setLightboxImage(null)}
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-5 top-5 text-hero-foreground hover:bg-hero-foreground/10"
            onClick={() => setLightboxImage(null)}
            aria-label="Close image"
          >
            <X />
          </Button>
          <img
            src={lightboxImage}
            alt="Dilshad Burqa House photograph fullscreen"
            className="max-h-[88vh] max-w-[94vw] object-contain"
          />
        </div>
      )}
    </main>
  );
}

function GalleryImage({
  src,
  alt,
  className,
  imageClassName,
  onOpen,
}: {
  src: string;
  alt: string;
  className: string;
  imageClassName: string;
  onOpen: (src: string) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(src)}
      className={`group block w-full overflow-hidden bg-muted ${className}`}
      aria-label={`View ${alt.toLowerCase()} fullscreen`}
    >
      <img
        loading="lazy"
        src={src}
        alt={alt}
        className={`h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.035] ${imageClassName}`}
      />
    </button>
  );
}
