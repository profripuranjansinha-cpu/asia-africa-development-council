import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetEvents } from "@/hooks/useQueries";
import { AlertCircle, Calendar, Clock, MapPin, Newspaper } from "lucide-react";

function formatDate(dateStr: string): string {
  try {
    const date = new Date(dateStr);
    if (!Number.isFinite(date.getTime())) return dateStr;
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateStr;
  }
}

function getEventCategory(title: string): string {
  const lower = title.toLowerCase();
  if (lower.includes("summit") || lower.includes("conference"))
    return "Conference";
  if (lower.includes("workshop") || lower.includes("training"))
    return "Workshop";
  if (lower.includes("forum") || lower.includes("dialogue")) return "Forum";
  if (lower.includes("launch") || lower.includes("announcement"))
    return "Announcement";
  return "Event";
}

const categoryColors: Record<string, string> = {
  Conference: "bg-forest-100 text-forest-800 border-forest-200",
  Workshop: "bg-gold-100 text-gold-800 border-gold-200",
  Forum: "bg-terracotta-100 text-terracotta-800 border-terracotta-200",
  Announcement: "bg-blue-50 text-blue-800 border-blue-200",
  Event: "bg-muted text-muted-foreground border-border",
};

export function NewsEvents() {
  const { data: events, isLoading, isError } = useGetEvents();

  return (
    <div className="flex flex-col">
      {/* ── Page Hero ── */}
      <section className="hero-gradient py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-5">
              <div className="h-px w-12 bg-gold-500" />
              <span className="text-gold-400 text-sm font-medium tracking-widest uppercase">
                News & Events
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              News, Events
              <br />
              <span className="text-gold-400">& Media</span>
            </h1>
            <p className="text-forest-200 text-lg md:text-xl font-crimson italic leading-relaxed">
              Stay informed about AADC's latest activities, global events, and
              organizational announcements shaping the future of Asia-Africa
              cooperation.
            </p>
          </div>
        </div>
      </section>

      {/* ── Events Section ── */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-12 bg-gold-500" />
                <span className="text-gold-600 text-sm font-medium tracking-widest uppercase">
                  Latest Updates
                </span>
              </div>
              <h2 className="font-serif text-3xl font-bold text-forest-800">
                Events & Announcements
              </h2>
            </div>
            {events && events.length > 0 && (
              <div className="hidden md:flex items-center gap-2 text-muted-foreground text-sm">
                <Newspaper size={16} />
                <span>
                  {events.length} item{events.length !== 1 ? "s" : ""}
                </span>
              </div>
            )}
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {["sk-1", "sk-2", "sk-3", "sk-4", "sk-5", "sk-6"].map((id) => (
                <Card key={id} className="shadow-card">
                  <CardContent className="p-6">
                    <Skeleton className="h-4 w-24 mb-3" />
                    <Skeleton className="h-6 w-full mb-2" />
                    <Skeleton className="h-4 w-3/4 mb-4" />
                    <Skeleton className="h-16 w-full mb-4" />
                    <Skeleton className="h-4 w-32" />
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Error State */}
          {isError && (
            <div className="text-center py-16">
              <AlertCircle
                size={48}
                className="mx-auto mb-4 text-destructive opacity-60"
              />
              <p className="text-lg font-medium text-foreground mb-2">
                Unable to load events
              </p>
              <p className="text-muted-foreground text-sm">
                Please try again later.
              </p>
            </div>
          )}

          {/* Empty State */}
          {!isLoading && !isError && (!events || events.length === 0) && (
            <div className="text-center py-20">
              <div className="w-20 h-20 rounded-full bg-forest-50 flex items-center justify-center mx-auto mb-6">
                <Calendar size={36} className="text-forest-400" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-forest-800 mb-3">
                No Events Yet
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto mb-6">
                AADC events and announcements will appear here. Check back soon
                for updates on our global activities and programs.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mt-8">
                {[
                  {
                    title: "Asia-Africa Summit 2026",
                    date: "Coming Soon",
                    location: "New Delhi, India",
                    type: "Conference",
                  },
                  {
                    title: "SDG Progress Review Forum",
                    date: "Coming Soon",
                    location: "Nairobi, Kenya",
                    type: "Forum",
                  },
                  {
                    title: "Youth Leadership Workshop",
                    date: "Coming Soon",
                    location: "Virtual",
                    type: "Workshop",
                  },
                ].map((placeholder) => (
                  <Card
                    key={placeholder.title}
                    className="shadow-card opacity-60"
                  >
                    <CardContent className="p-4">
                      <Badge
                        className={`text-xs mb-2 ${categoryColors[placeholder.type]}`}
                      >
                        {placeholder.type}
                      </Badge>
                      <h4 className="font-serif font-bold text-forest-800 text-sm mb-2">
                        {placeholder.title}
                      </h4>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
                        <Clock size={11} />
                        <span>{placeholder.date}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin size={11} />
                        <span>{placeholder.location}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Events Grid */}
          {!isLoading && !isError && events && events.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => {
                const category = getEventCategory(event.title);
                return (
                  <Card
                    key={`${event.title}-${event.date}`}
                    className="card-hover shadow-card"
                    data-ocid="events.item"
                  >
                    <CardContent className="p-6">
                      <Badge
                        className={`text-xs mb-3 ${categoryColors[category]}`}
                      >
                        {category}
                      </Badge>
                      <h3 className="font-serif font-bold text-forest-800 text-lg mb-3 leading-tight">
                        {event.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {event.description}
                      </p>
                      <div className="space-y-1.5 pt-3 border-t border-border">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Calendar
                            size={13}
                            className="text-forest-600 flex-shrink-0"
                          />
                          <span>{formatDate(event.date)}</span>
                        </div>
                        {event.location && (
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <MapPin
                              size={13}
                              className="text-terracotta-500 flex-shrink-0"
                            />
                            <span>{event.location}</span>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ── Media & Press ── */}
      <section className="py-16 bg-forest-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Media & Press Inquiries
          </h2>
          <p className="text-forest-300 mb-8 max-w-xl mx-auto">
            For media coverage, press releases, and interview requests, please
            reach out to our communications team.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:media@asiafricaonline.com"
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-forest-900 font-semibold px-6 py-3 rounded-md transition-colors"
            >
              <Newspaper size={16} />
              Media Inquiries
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
