import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle,
  Handshake,
  Leaf,
  Lightbulb,
} from "lucide-react";

const services = [
  {
    id: "innovation",
    title: "Innovation",
    subtitle: "Technology & Knowledge Transfer",
    icon: "/assets/generated/icon-innovation.dim_128x128.png",
    fallbackIcon: Lightbulb,
    color: "border-t-gold-500",
    badgeClass: "bg-gold-100 text-gold-800 border-gold-200",
    description:
      "AADC drives transformative innovation by connecting Asia and Africa through technology transfer, digital infrastructure, and knowledge-sharing ecosystems. We believe that innovation is the engine of sustainable development.",
    offerings: [
      "Technology Transfer Programs between Asian and African nations",
      "Digital Literacy and ICT capacity building initiatives",
      "Innovation Hubs and Startup Ecosystem development",
      "Research & Development partnerships with universities",
      "Smart Agriculture and AgriTech solutions",
      "Renewable Energy technology deployment",
    ],
    sdgAlignment: [
      "SDG 9: Industry & Innovation",
      "SDG 4: Quality Education",
      "SDG 8: Economic Growth",
    ],
  },
  {
    id: "peace",
    title: "Peace",
    subtitle: "Conflict Resolution & Diplomacy",
    icon: "/assets/generated/icon-peace.dim_128x128.png",
    fallbackIcon: Handshake,
    color: "border-t-forest-700",
    badgeClass: "bg-forest-100 text-forest-800 border-forest-200",
    description:
      "Peace is the foundation upon which all development rests. AADC works to build bridges of understanding between nations, communities, and cultures — fostering dialogue, reconciliation, and cooperative security across Asia and Africa.",
    offerings: [
      "Conflict Prevention and Early Warning Systems",
      "Inter-cultural Dialogue and Exchange Programs",
      "Youth Peace Ambassador Networks",
      "Women in Peacebuilding initiatives",
      "Community Reconciliation and Mediation programs",
      "Track II Diplomacy and Citizen Diplomacy forums",
    ],
    sdgAlignment: [
      "SDG 16: Peace & Justice",
      "SDG 17: Partnerships",
      "SDG 10: Reduced Inequalities",
    ],
  },
  {
    id: "sustainable-development",
    title: "Sustainable Development",
    subtitle: "Environment & Economic Empowerment",
    icon: "/assets/generated/icon-sustainable.dim_128x128.png",
    fallbackIcon: Leaf,
    color: "border-t-terracotta-500",
    badgeClass: "bg-terracotta-100 text-terracotta-800 border-terracotta-200",
    description:
      "Sustainable development is at the heart of AADC's mandate. We champion environmentally responsible economic growth that lifts communities out of poverty while preserving the natural resources that future generations depend upon.",
    offerings: [
      "Climate Change Adaptation and Mitigation programs",
      "Sustainable Agriculture and Food Security initiatives",
      "Clean Water and Sanitation infrastructure projects",
      "Green Economy and Circular Economy frameworks",
      "Biodiversity Conservation and Ecosystem restoration",
      "Sustainable Urban Development and Smart Cities",
    ],
    sdgAlignment: [
      "SDG 13: Climate Action",
      "SDG 15: Life on Land",
      "SDG 11: Sustainable Cities",
    ],
  },
];

const crossCuttingThemes = [
  {
    title: "Gender Equality",
    desc: "Ensuring women and girls are central to all our programs.",
  },
  {
    title: "Youth Empowerment",
    desc: "Investing in the next generation of Asian and African leaders.",
  },
  {
    title: "Capacity Building",
    desc: "Strengthening institutional and human resource capacities.",
  },
  {
    title: "Data & Evidence",
    desc: "Using rigorous data to drive program design and evaluation.",
  },
];

export function Services() {
  return (
    <div className="flex flex-col">
      {/* ── Page Hero ── */}
      <section className="hero-gradient py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-5">
              <div className="h-px w-12 bg-gold-500" />
              <span className="text-gold-400 text-sm font-medium tracking-widest uppercase">
                Our Services
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Three Pillars of
              <br />
              <span className="text-gold-400">Global Impact</span>
            </h1>
            <p className="text-forest-200 text-lg md:text-xl font-crimson italic leading-relaxed">
              Supporting global mankind through Innovation, Peace, and
              Sustainable Development — our three interconnected pillars that
              together address humanity's greatest challenges.
            </p>
          </div>
        </div>
      </section>

      {/* ── Service Cards ── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => {
              const FallbackIcon = service.fallbackIcon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                    !isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Icon & Visual */}
                  <div
                    className={`flex justify-center ${!isEven ? "lg:order-2" : ""}`}
                  >
                    <div className="relative">
                      <div className="w-64 h-64 md:w-72 md:h-72 rounded-2xl bg-forest-50 border border-forest-100 flex items-center justify-center shadow-card">
                        <img
                          src={service.icon}
                          alt={service.title}
                          className="w-40 h-40 object-contain"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                        <FallbackIcon
                          size={80}
                          className="text-forest-300 absolute"
                          style={{ display: "none" }}
                        />
                      </div>
                      <div className="absolute -top-3 -right-3 bg-gold-500 text-forest-900 rounded-full w-12 h-12 flex items-center justify-center font-serif font-bold text-xl shadow-lg">
                        {index + 1}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={!isEven ? "lg:order-1" : ""}>
                    <Badge className={`mb-4 ${service.badgeClass}`}>
                      {service.subtitle}
                    </Badge>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-forest-800 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Offerings */}
                    <div className="mb-6">
                      <h3 className="font-semibold text-forest-700 text-sm uppercase tracking-wide mb-3">
                        Key Offerings
                      </h3>
                      <ul className="space-y-2">
                        {service.offerings.map((offering) => (
                          <li
                            key={offering}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <CheckCircle
                              size={16}
                              className="text-forest-600 mt-0.5 flex-shrink-0"
                            />
                            {offering}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* SDG Alignment */}
                    <div className="mb-6">
                      <h3 className="font-semibold text-forest-700 text-sm uppercase tracking-wide mb-3">
                        SDG Alignment
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {service.sdgAlignment.map((sdg) => (
                          <span
                            key={sdg}
                            className="px-2.5 py-1 bg-forest-50 text-forest-700 text-xs rounded-full border border-forest-200"
                          >
                            {sdg}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link to="/contact">
                      <Button className="bg-forest-700 hover:bg-forest-600 text-white border-0">
                        Partner With Us{" "}
                        <ArrowRight size={16} className="ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Cross-Cutting Themes ── */}
      <section className="py-20 bg-forest-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-16 bg-gold-500" />
              <span className="text-gold-400 text-sm font-medium tracking-widest uppercase">
                Cross-Cutting Themes
              </span>
              <div className="h-px w-16 bg-gold-500" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-white mb-4">
              Principles Across All Services
            </h2>
            <p className="text-forest-300 max-w-xl mx-auto">
              These themes are woven into every program and initiative we
              undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {crossCuttingThemes.map((theme) => (
              <div
                key={theme.title}
                className="bg-forest-700 rounded-lg p-6 border border-forest-600 text-center card-hover"
              >
                <div className="w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={18} className="text-forest-900" />
                </div>
                <h3 className="font-serif font-bold text-gold-400 mb-2">
                  {theme.title}
                </h3>
                <p className="text-forest-300 text-sm leading-relaxed">
                  {theme.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-forest-800 mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Explore how AADC's services can align with your organization's goals
            and create meaningful impact across Asia and Africa.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-forest-700 hover:bg-forest-600 text-white border-0"
              >
                Get In Touch <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
            <Link to="/programs">
              <Button
                size="lg"
                variant="outline"
                className="border-forest-300 text-forest-700 hover:bg-forest-50"
              >
                View Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
