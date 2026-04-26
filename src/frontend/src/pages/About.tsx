import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetAboutContent } from "@/hooks/useQueries";
import { Award, BookOpen, Eye, Globe, Star, Target, Users } from "lucide-react";

const values = [
  {
    icon: Globe,
    title: "Global Solidarity",
    desc: "Uniting nations across Asia and Africa for shared prosperity.",
  },
  {
    icon: Target,
    title: "Impact-Driven",
    desc: "Every initiative is measured by its real-world impact on communities.",
  },
  {
    icon: Users,
    title: "Inclusive Partnership",
    desc: "Embracing diversity and fostering inclusive multi-stakeholder collaboration.",
  },
  {
    icon: BookOpen,
    title: "Knowledge Sharing",
    desc: "Facilitating the free exchange of knowledge, technology, and best practices.",
  },
  {
    icon: Award,
    title: "Accountability",
    desc: "Maintaining the highest standards of transparency and governance.",
  },
  {
    icon: Star,
    title: "Innovation",
    desc: "Championing creative solutions to complex development challenges.",
  },
];

const leadership = [
  {
    role: "Founder & President",
    name: "Council for Sustainable Peace and Development",
    desc: "The parent body and trademark holder guiding the strategic vision of AADC.",
  },
  {
    role: "Global Advisory Board",
    name: "International Experts Panel",
    desc: "Distinguished leaders from Asia, Africa, and international organizations providing strategic guidance.",
  },
  {
    role: "Program Directors",
    name: "Regional Leadership Teams",
    desc: "Dedicated teams across Asia and Africa implementing programs at the grassroots level.",
  },
];

export function About() {
  const { data: aboutContent, isLoading, isError } = useGetAboutContent();

  return (
    <div className="flex flex-col">
      {/* ── Page Hero ── */}
      <section className="hero-gradient py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-5">
              <div className="h-px w-12 bg-gold-500" />
              <span className="text-gold-400 text-sm font-medium tracking-widest uppercase">
                About Us
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Asia Africa
              <br />
              <span className="text-gold-400">Development Council</span>
            </h1>
            <p className="text-forest-300 text-base md:text-lg mb-2">
              A Trademark of{" "}
              <span className="text-gold-300 font-semibold">
                Council for Sustainable Peace and Development
              </span>
            </p>
            <p className="text-forest-200 text-lg md:text-xl font-crimson italic mt-4 max-w-2xl leading-relaxed">
              An international global non-profit organization dedicated to
              supporting global mankind through innovation, peace, and
              sustainable development.
            </p>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Mission */}
            <Card className="border-l-4 border-l-forest-700 shadow-card">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-forest-50 flex items-center justify-center">
                    <Target size={20} className="text-forest-700" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-forest-800">
                    Our Mission
                  </h2>
                </div>
                {isLoading ? (
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                    <Skeleton className="h-4 w-4/5" />
                  </div>
                ) : isError ? (
                  <p className="text-muted-foreground leading-relaxed">
                    To advance sustainable development, foster lasting peace,
                    and drive innovation across Asia and Africa in alignment
                    with the UN SDG 2030, African Union Agenda 2063, India
                    Growth Index, and Vision India 2047.
                  </p>
                ) : (
                  <p className="text-muted-foreground leading-relaxed">
                    {aboutContent?.mission}
                  </p>
                )}
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="border-l-4 border-l-gold-500 shadow-card">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-gold-50 flex items-center justify-center">
                    <Eye size={20} className="text-gold-700" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-forest-800">
                    Our Vision
                  </h2>
                </div>
                {isLoading ? (
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                    <Skeleton className="h-4 w-4/5" />
                  </div>
                ) : isError ? (
                  <p className="text-muted-foreground leading-relaxed">
                    A world where Asia and Africa stand as equal partners in
                    global prosperity — where innovation bridges divides, peace
                    prevails over conflict, and sustainable development ensures
                    dignity and opportunity for all.
                  </p>
                ) : (
                  <p className="text-muted-foreground leading-relaxed">
                    {aboutContent?.vision}
                  </p>
                )}
              </CardContent>
            </Card>
          </div>

          {/* About Text */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-12 bg-gold-500" />
                <span className="text-gold-600 text-sm font-medium tracking-widest uppercase">
                  Our Story
                </span>
              </div>
              <h2 className="font-serif text-3xl font-bold text-forest-800 mb-6">
                Who We Are
              </h2>
              {isLoading ? (
                <div className="space-y-3">
                  {["line-1", "line-2", "line-3", "line-4", "line-5"].map(
                    (id) => (
                      <Skeleton key={id} className="h-4 w-full" />
                    ),
                  )}
                </div>
              ) : isError ? (
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    The Asia Africa Development Council (AADC) is an
                    international non-profit organization and a trademark of the
                    Council for Sustainable Peace and Development. We serve as a
                    bridge between the dynamic economies and cultures of Asia
                    and Africa, working to unlock the immense potential of
                    South-South cooperation.
                  </p>
                  <p>
                    Our mandate is rooted in the belief that sustainable
                    development, lasting peace, and transformative innovation
                    are not aspirations but achievable realities when nations
                    collaborate with purpose and commitment.
                  </p>
                  <p>
                    Operating across multiple continents, AADC engages
                    governments, civil society, the private sector, and
                    international organizations to design and implement programs
                    that create measurable, lasting impact for the world's most
                    vulnerable communities.
                  </p>
                </div>
              ) : (
                <p className="text-muted-foreground leading-relaxed">
                  {aboutContent?.about}
                </p>
              )}
            </div>

            {/* Emblem */}
            <div className="flex flex-col items-center">
              <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-gold-400 shadow-hero mb-4">
                <img
                  src="/assets/generated/org-emblem.dim_400x400.png"
                  alt="AADC Official Emblem"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center text-xs text-muted-foreground font-medium">
                Official Emblem
              </p>
              <p className="text-center text-xs text-muted-foreground mt-1">
                Asia Africa Development Council
              </p>
              <div className="mt-4 text-center">
                <div className="inline-flex items-center gap-2 bg-forest-50 border border-forest-200 rounded-full px-4 py-2">
                  <Globe size={14} className="text-forest-600" />
                  <span className="text-forest-700 text-xs font-medium">
                    International NGO
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-16 bg-gold-500" />
              <span className="text-gold-600 text-sm font-medium tracking-widest uppercase">
                Core Values
              </span>
              <div className="h-px w-16 bg-gold-500" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-forest-800 mb-4">
              What Guides Us
            </h2>
            {isLoading ? (
              <Skeleton className="h-4 w-64 mx-auto" />
            ) : (
              <p className="text-muted-foreground max-w-xl mx-auto">
                {aboutContent?.values ||
                  "Our values form the foundation of every decision, program, and partnership we undertake."}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="card-hover shadow-card">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-forest-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={20} className="text-forest-700" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-forest-800 mb-1">
                        {value.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {value.desc}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Leadership & Mandate ── */}
      <section className="py-20 bg-forest-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-16 bg-gold-500" />
              <span className="text-gold-400 text-sm font-medium tracking-widest uppercase">
                Leadership
              </span>
              <div className="h-px w-16 bg-gold-500" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Organizational Mandate
            </h2>
            <p className="text-forest-300 max-w-2xl mx-auto">
              AADC operates under a clear mandate to serve as a catalyst for
              positive change across Asia and Africa, guided by experienced
              leadership committed to our mission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {leadership.map((item) => (
              <div
                key={item.role}
                className="bg-forest-700 rounded-lg p-6 border border-forest-600 card-hover"
              >
                <div className="w-12 h-12 rounded-full bg-gold-500 flex items-center justify-center mb-4">
                  <Users size={20} className="text-forest-900" />
                </div>
                <h3 className="font-serif font-bold text-gold-400 text-lg mb-1">
                  {item.role}
                </h3>
                <p className="text-white font-medium text-sm mb-2">
                  {item.name}
                </p>
                <p className="text-forest-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Global Scope ── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-forest-800 mb-4">
              Our Global Scope
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Operating across two of the world's most dynamic and populous
              continents, AADC's reach spans from the shores of the Indian Ocean
              to the highlands of East Africa and the technology corridors of
              South Asia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                region: "Asia",
                color: "border-forest-700",
                bgColor: "bg-forest-50",
                textColor: "text-forest-700",
                desc: "Engaging with South Asia, Southeast Asia, and East Asia to promote technology transfer, economic cooperation, and cultural exchange. Key partnerships with India, ASEAN nations, and East Asian economies.",
                focus: [
                  "India Growth Index",
                  "Vision India 2047",
                  "Digital Innovation",
                  "South-South Cooperation",
                ],
              },
              {
                region: "Africa",
                color: "border-gold-500",
                bgColor: "bg-gold-50",
                textColor: "text-gold-700",
                desc: "Working across Sub-Saharan Africa, North Africa, and the Horn of Africa to advance the African Union Agenda 2063. Supporting infrastructure development, agricultural transformation, and youth empowerment.",
                focus: [
                  "AU Agenda 2063",
                  "Infrastructure Development",
                  "Agricultural Transformation",
                  "Youth Empowerment",
                ],
              },
            ].map((region) => (
              <Card
                key={region.region}
                className={`border-l-4 ${region.color} shadow-card`}
              >
                <CardContent className="p-8">
                  <div
                    className={`inline-flex items-center gap-2 ${region.bgColor} rounded-full px-4 py-1.5 mb-5`}
                  >
                    <Globe size={14} className={region.textColor} />
                    <span
                      className={`${region.textColor} text-sm font-semibold`}
                    >
                      {region.region}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-5">
                    {region.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {region.focus.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
