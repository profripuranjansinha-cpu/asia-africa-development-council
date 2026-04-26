import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetAboutContent } from "@/hooks/useQueries";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronDown,
  Globe,
  Handshake,
  Leaf,
  Users,
} from "lucide-react";

const alignmentPillars = [
  {
    id: "un-sdg",
    title: "UN SDG 2030",
    subtitle: "United Nations Sustainable Development Goals",
    description:
      "Advancing all 17 Sustainable Development Goals through targeted programs in education, health, clean energy, and economic empowerment across Asia and Africa.",
    icon: Globe,
    color: "pillar-card-green",
    badge: "UN Agenda 2030",
    badgeClass: "bg-forest-700 text-forest-100",
  },
  {
    id: "au-agenda",
    title: "AU Agenda 2063",
    subtitle: "African Union Agenda 2063",
    description:
      "Supporting Africa's transformative vision for an integrated, prosperous, and peaceful continent through capacity building, trade facilitation, and cultural exchange.",
    icon: Users,
    color: "pillar-card-gold",
    badge: "AU Agenda 2063",
    badgeClass: "bg-gold-600 text-forest-900",
  },
  {
    id: "india-growth",
    title: "India Growth Index",
    subtitle: "India Growth Index Framework",
    description:
      "Catalyzing India's economic growth through innovation ecosystems, digital transformation, and South-South cooperation with African and Asian partner nations.",
    icon: Leaf,
    color: "pillar-card-terracotta",
    badge: "India Growth Index",
    badgeClass: "bg-terracotta-500 text-white",
  },
  {
    id: "vision-india",
    title: "Vision India 2047",
    subtitle: "Vision India 2047",
    description:
      "Contributing to India's centenary vision of becoming a developed nation by fostering global partnerships, technology transfer, and sustainable infrastructure development.",
    icon: Handshake,
    color: "pillar-card-teal",
    badge: "Vision India 2047",
    badgeClass: "bg-chart-4 text-white",
  },
];

const highlights = [
  { label: "Countries Engaged", value: "54+", sub: "Across Asia & Africa" },
  { label: "Active Programs", value: "120+", sub: "Development Initiatives" },
  { label: "Partners", value: "200+", sub: "Global Organizations" },
  { label: "Beneficiaries", value: "2M+", sub: "Lives Impacted" },
];

export function Home() {
  const { data: aboutContent, isLoading } = useGetAboutContent();

  return (
    <div className="flex flex-col" data-ocid="home.page">
      {/* ── Hero Section ── */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/assets/generated/hero-banner.dim_1600x600.png"
            alt="Asia Africa Development Council"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 hero-gradient opacity-85" />
        </div>

        {/* Decorative pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, oklch(0.78 0.12 75) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-12 bg-gold-500" />
              <span className="text-gold-400 text-sm font-medium tracking-widest uppercase">
                International Non-Profit Organization
              </span>
            </div>

            {/* Main heading */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4">
              Asia Africa
              <br />
              <span className="text-gold-400">Development Council</span>
            </h1>

            <p className="text-forest-200 text-sm md:text-base mb-6 font-medium tracking-wide">
              A Trademark of Council for Sustainable Peace and Development
            </p>

            {/* Tagline */}
            <p className="text-forest-100 text-lg md:text-xl lg:text-2xl font-crimson italic mb-8 max-w-2xl leading-relaxed">
              "Supporting global mankind through Innovation, Peace, and
              Sustainable Development"
            </p>

            {/* Mission snippet */}
            {isLoading ? (
              <Skeleton className="h-16 w-full max-w-xl mb-8 bg-forest-700" />
            ) : aboutContent ? (
              <p className="text-forest-300 text-base max-w-xl mb-8 leading-relaxed">
                {aboutContent.mission}
              </p>
            ) : (
              <p className="text-forest-300 text-base max-w-xl mb-8 leading-relaxed">
                Bridging continents, building futures — advancing the UN SDG
                2030, African Union Agenda 2063, India Growth Index, and Vision
                India 2047 through collaborative action.
              </p>
            )}

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link to="/about" data-ocid="home.discover_mission_button">
                <Button
                  size="lg"
                  className="bg-gold-500 hover:bg-gold-400 text-forest-900 font-semibold border-0 shadow-hero"
                >
                  Discover Our Mission
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
              <Link to="/programs" data-ocid="home.view_programs_button">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-forest-300 text-forest-100 hover:bg-forest-700 hover:border-gold-400 hover:text-gold-300"
                >
                  View Programs
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-forest-300 animate-bounce">
          <ChevronDown size={28} />
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-forest-800 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-forest-600">
            {highlights.map((item) => (
              <div key={item.label} className="text-center px-4">
                <div className="text-gold-400 font-serif font-bold text-3xl md:text-4xl">
                  {item.value}
                </div>
                <div className="text-white font-semibold text-sm mt-1">
                  {item.label}
                </div>
                <div className="text-forest-400 text-xs mt-0.5">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Alignment Pillars ── */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-16 bg-gold-500" />
              <span className="text-gold-600 text-sm font-medium tracking-widest uppercase">
                Global Frameworks
              </span>
              <div className="h-px w-16 bg-gold-500" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-forest-800 mb-4">
              Our Alignment with Global Agendas
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
              AADC operates at the intersection of four transformative global
              frameworks, ensuring our programs create lasting, measurable
              impact across continents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {alignmentPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <Card
                  key={pillar.id}
                  className={`pillar-card ${pillar.color} card-hover shadow-card bg-card`}
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-forest-50 flex items-center justify-center mb-4">
                      <Icon size={24} className="text-forest-700" />
                    </div>
                    <Badge
                      className={`text-xs mb-3 ${pillar.badgeClass} border-0`}
                    >
                      {pillar.badge}
                    </Badge>
                    <h3 className="font-serif font-bold text-forest-800 text-lg mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-3 font-medium">
                      {pillar.subtitle}
                    </p>
                    <p className="text-sm text-foreground leading-relaxed">
                      {pillar.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Services Preview ── */}
      <section className="py-20 bg-forest-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-16 bg-gold-500" />
              <span className="text-gold-400 text-sm font-medium tracking-widest uppercase">
                Our Services
              </span>
              <div className="h-px w-16 bg-gold-500" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Three Pillars of Global Impact
            </h2>
            <p className="text-forest-300 max-w-2xl mx-auto text-base leading-relaxed">
              Our work is organized around three core pillars that together
              address the most pressing challenges facing humanity today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "/assets/generated/icon-innovation.dim_128x128.png",
                title: "Innovation",
                desc: "Fostering technological innovation and knowledge transfer to accelerate development across Asia and Africa.",
                link: "/services",
              },
              {
                icon: "/assets/generated/icon-peace.dim_128x128.png",
                title: "Peace",
                desc: "Building bridges of understanding, promoting conflict resolution, and nurturing lasting peace between nations and communities.",
                link: "/services",
              },
              {
                icon: "/assets/generated/icon-sustainable.dim_128x128.png",
                title: "Sustainable Development",
                desc: "Championing environmentally responsible growth that meets present needs without compromising future generations.",
                link: "/services",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-forest-700 rounded-lg p-8 text-center card-hover border border-forest-600"
              >
                <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-forest-600 flex items-center justify-center overflow-hidden">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-14 h-14 object-contain"
                  />
                </div>
                <h3 className="font-serif font-bold text-gold-400 text-xl mb-3">
                  {service.title}
                </h3>
                <p className="text-forest-300 text-sm leading-relaxed mb-5">
                  {service.desc}
                </p>
                <Link to={service.link}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gold-600 text-gold-400 hover:bg-gold-500 hover:text-forest-900 hover:border-gold-500"
                  >
                    Learn More <ArrowRight size={14} className="ml-1" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About Teaser ── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-gold-500" />
                <span className="text-gold-600 text-sm font-medium tracking-widest uppercase">
                  About Us
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-forest-800 mb-6">
                A Global Force for Positive Change
              </h2>
              {isLoading ? (
                <div className="space-y-3">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                  <Skeleton className="h-4 w-4/5" />
                </div>
              ) : (
                <p className="text-muted-foreground text-base leading-relaxed mb-6">
                  {aboutContent?.about ||
                    "The Asia Africa Development Council (AADC) is an international non-profit organization committed to fostering cooperation between Asian and African nations. As a trademark of the Council for Sustainable Peace and Development, we work tirelessly to advance the shared goals of humanity."}
                </p>
              )}
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  "Non-Profit",
                  "International",
                  "UN-Aligned",
                  "AU-Aligned",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-forest-50 text-forest-700 text-xs font-medium rounded-full border border-forest-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link to="/about">
                <Button className="bg-forest-700 hover:bg-forest-600 text-white border-0">
                  Read Our Full Story <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gold-400 shadow-hero">
                  <img
                    src="/assets/generated/org-emblem.dim_400x400.png"
                    alt="AADC Emblem"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gold-500 text-forest-900 rounded-lg px-4 py-2 shadow-lg">
                  <div className="font-serif font-bold text-lg">Est. 2024</div>
                  <div className="text-xs font-medium">Global Impact</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-16 bg-terracotta-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Join the Movement for Global Change
          </h2>
          <p className="text-terracotta-100 text-lg mb-8 max-w-2xl mx-auto">
            Partner with us to advance sustainable development, foster peace,
            and drive innovation across Asia and Africa.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" data-ocid="home.become_partner_button">
              <Button
                size="lg"
                className="bg-white text-terracotta-600 hover:bg-terracotta-50 font-semibold border-0"
              >
                Become a Partner
              </Button>
            </Link>
            <Link to="/programs" data-ocid="home.explore_programs_button">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-terracotta-400 hover:border-white"
              >
                Explore Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
