import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Filter,
  Globe,
  Handshake,
  Leaf,
  Users,
  Zap,
} from "lucide-react";
import { useState } from "react";

type AlignmentTag =
  | "All"
  | "UN SDG 2030"
  | "AU Agenda 2063"
  | "India Growth Index"
  | "Vision India 2047";

interface Program {
  id: string;
  title: string;
  description: string;
  alignment: Exclude<AlignmentTag, "All">[];
  status: "Active" | "Upcoming" | "Completed";
  region: string;
  icon: typeof Globe;
}

const programs: Program[] = [
  {
    id: "p1",
    title: "Digital Bridges: Asia-Africa Tech Exchange",
    description:
      "A flagship program connecting technology innovators from India, Southeast Asia, and Sub-Saharan Africa to co-develop digital solutions for local challenges in agriculture, healthcare, and education.",
    alignment: ["UN SDG 2030", "India Growth Index", "Vision India 2047"],
    status: "Active",
    region: "Pan-Asia & Africa",
    icon: Zap,
  },
  {
    id: "p2",
    title: "Green Corridor Initiative",
    description:
      "Establishing sustainable trade and environmental corridors between African and Asian nations, promoting clean energy adoption, sustainable agriculture, and biodiversity conservation.",
    alignment: ["UN SDG 2030", "AU Agenda 2063"],
    status: "Active",
    region: "East Africa & South Asia",
    icon: Leaf,
  },
  {
    id: "p3",
    title: "Youth Peace Ambassadors Network",
    description:
      "Empowering young leaders aged 18-30 from Asia and Africa to become agents of peace and sustainable development in their communities through training, mentorship, and exchange programs.",
    alignment: ["UN SDG 2030", "AU Agenda 2063", "Vision India 2047"],
    status: "Active",
    region: "Global",
    icon: Users,
  },
  {
    id: "p4",
    title: "Samridh Bharat — Prosperous India Initiative",
    description:
      "A comprehensive program supporting India's development goals through capacity building, skill development, and international partnerships aligned with Vision India 2047 and the India Growth Index.",
    alignment: ["India Growth Index", "Vision India 2047", "UN SDG 2030"],
    status: "Active",
    region: "India & South Asia",
    icon: Globe,
  },
  {
    id: "p5",
    title: "Africa Rising: Economic Empowerment Program",
    description:
      "Supporting African entrepreneurs and SMEs through access to finance, markets, and technology, directly contributing to the African Union's Agenda 2063 vision of a prosperous Africa.",
    alignment: ["AU Agenda 2063", "UN SDG 2030"],
    status: "Active",
    region: "Sub-Saharan Africa",
    icon: Handshake,
  },
  {
    id: "p6",
    title: "Climate Resilience & Adaptation Framework",
    description:
      "Building climate resilience in vulnerable communities across Asia and Africa through early warning systems, climate-smart agriculture, and disaster risk reduction programs.",
    alignment: ["UN SDG 2030", "AU Agenda 2063"],
    status: "Active",
    region: "Coastal Asia & Africa",
    icon: Leaf,
  },
  {
    id: "p7",
    title: "India-Africa Knowledge Exchange Platform",
    description:
      "A bilateral knowledge-sharing platform facilitating the exchange of best practices in governance, healthcare, education, and technology between India and African nations.",
    alignment: ["India Growth Index", "AU Agenda 2063", "Vision India 2047"],
    status: "Upcoming",
    region: "India & Africa",
    icon: BookOpen,
  },
  {
    id: "p8",
    title: "Women in Leadership: Asia-Africa Initiative",
    description:
      "Advancing gender equality and women's leadership across Asia and Africa through mentorship networks, policy advocacy, and economic empowerment programs.",
    alignment: ["UN SDG 2030", "AU Agenda 2063", "Vision India 2047"],
    status: "Active",
    region: "Pan-Asia & Africa",
    icon: Users,
  },
];

const alignmentFilters: AlignmentTag[] = [
  "All",
  "UN SDG 2030",
  "AU Agenda 2063",
  "India Growth Index",
  "Vision India 2047",
];

const alignmentColors: Record<Exclude<AlignmentTag, "All">, string> = {
  "UN SDG 2030": "bg-forest-100 text-forest-800 border-forest-200",
  "AU Agenda 2063": "bg-gold-100 text-gold-800 border-gold-200",
  "India Growth Index":
    "bg-terracotta-100 text-terracotta-800 border-terracotta-200",
  "Vision India 2047": "bg-muted text-muted-foreground border-border",
};

const statusColors: Record<Program["status"], string> = {
  Active: "bg-forest-100 text-forest-800 border-forest-200",
  Upcoming: "bg-gold-100 text-gold-800 border-gold-200",
  Completed: "bg-muted text-muted-foreground border-border",
};

export function Programs() {
  const [activeFilter, setActiveFilter] = useState<AlignmentTag>("All");

  const filteredPrograms =
    activeFilter === "All"
      ? programs
      : programs.filter((p) =>
          p.alignment.includes(activeFilter as Exclude<AlignmentTag, "All">),
        );

  return (
    <div className="flex flex-col">
      {/* ── Page Hero ── */}
      <section className="hero-gradient py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-5">
              <div className="h-px w-12 bg-gold-500" />
              <span className="text-gold-400 text-sm font-medium tracking-widest uppercase">
                Programs & Initiatives
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Programs &
              <br />
              <span className="text-gold-400">Initiatives</span>
            </h1>
            <p className="text-forest-200 text-lg md:text-xl font-crimson italic leading-relaxed">
              Transformative programs aligned with the world's most ambitious
              development agendas — creating lasting impact across Asia and
              Africa.
            </p>
          </div>
        </div>
      </section>

      {/* ── Framework Overview ── */}
      <section className="py-12 bg-forest-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                label: "UN SDG 2030",
                count: programs.filter((p) =>
                  p.alignment.includes("UN SDG 2030"),
                ).length,
                color: "text-forest-300",
              },
              {
                label: "AU Agenda 2063",
                count: programs.filter((p) =>
                  p.alignment.includes("AU Agenda 2063"),
                ).length,
                color: "text-gold-400",
              },
              {
                label: "India Growth Index",
                count: programs.filter((p) =>
                  p.alignment.includes("India Growth Index"),
                ).length,
                color: "text-terracotta-300",
              },
              {
                label: "Vision India 2047",
                count: programs.filter((p) =>
                  p.alignment.includes("Vision India 2047"),
                ).length,
                color: "text-blue-300",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="text-center bg-forest-700 rounded-lg p-4 border border-forest-600"
              >
                <div className={`font-serif font-bold text-3xl ${item.color}`}>
                  {item.count}
                </div>
                <div className="text-forest-300 text-xs mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Programs List ── */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <div className="flex items-center gap-2 text-forest-600 mr-2">
              <Filter size={16} />
              <span className="text-sm font-medium">Filter by Framework:</span>
            </div>
            {alignmentFilters.map((filter) => (
              <button
                type="button"
                key={filter}
                data-ocid={`programs.filter.${filter.toLowerCase().replace(/\s+/g, "_")}`}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all border ${
                  activeFilter === filter
                    ? "bg-forest-700 text-white border-forest-700 shadow-sm"
                    : "bg-card text-forest-600 border-forest-200 hover:border-forest-400 hover:text-forest-800"
                }`}
              >
                {filter}
              </button>
            ))}
            <span className="ml-auto text-sm text-muted-foreground">
              {filteredPrograms.length} program
              {filteredPrograms.length !== 1 ? "s" : ""}
            </span>
          </div>

          {/* Program Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPrograms.map((program) => {
              const Icon = program.icon;
              return (
                <Card key={program.id} className="card-hover shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-forest-50 flex items-center justify-center flex-shrink-0">
                        <Icon size={22} className="text-forest-700" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h3 className="font-serif font-bold text-forest-800 text-lg leading-tight">
                            {program.title}
                          </h3>
                          <Badge
                            className={`text-xs flex-shrink-0 ${statusColors[program.status]}`}
                          >
                            {program.status}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mb-3 flex items-center gap-1">
                          <Globe size={12} />
                          {program.region}
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                          {program.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {program.alignment.map((tag) => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className={`text-xs ${alignmentColors[tag]}`}
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {filteredPrograms.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">
              <Globe size={48} className="mx-auto mb-4 opacity-30" />
              <p className="text-lg font-medium">
                No programs found for this filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-forest-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Interested in Our Programs?
          </h2>
          <p className="text-forest-300 mb-8 max-w-xl mx-auto">
            Partner with AADC to co-design and implement programs that align
            with your organization's development goals.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-gold-500 hover:bg-gold-400 text-forest-900 font-semibold border-0"
            >
              Become a Program Partner <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
