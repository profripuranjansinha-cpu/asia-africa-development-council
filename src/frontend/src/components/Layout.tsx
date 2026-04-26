import { Button } from "@/components/ui/button";
import { Link, useRouterState } from "@tanstack/react-router";
import { Globe, Heart, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Programs", path: "/programs" },
  { label: "News & Events", path: "/news-events" },
  { label: "Contact", path: "/contact" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const appId = encodeURIComponent(
    typeof window !== "undefined"
      ? window.location.hostname
      : "asia-africa-dev-council",
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* ── Header ── */}
      <header className="sticky top-0 z-50 bg-forest-800 shadow-lg">
        {/* Top bar */}
        <div className="bg-forest-950 text-gold-400 text-xs py-1.5 px-4 text-center font-sans tracking-wide">
          A Trademark of Council for Sustainable Peace and Development
          &nbsp;|&nbsp; Aligned with UN SDG 2030 · AU Agenda 2063 · Vision India
          2047
        </div>

        {/* Main nav */}
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              data-ocid="nav.logo_link"
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-gold-500 flex-shrink-0">
                <img
                  src="/assets/generated/org-emblem.dim_400x400.png"
                  alt="AADC Emblem"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="leading-tight">
                <div className="text-gold-400 font-serif font-bold text-sm md:text-base leading-tight">
                  Asia Africa Development Council
                </div>
                <div className="text-forest-300 text-xs hidden sm:block">
                  Innovation · Peace · Sustainable Development
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav
              className="hidden lg:flex items-center gap-1"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  data-ocid={`nav.${link.label.toLowerCase().replace(/[^a-z]/g, "_")}_link`}
                  className={`nav-link px-3 py-2 text-sm font-medium transition-colors rounded-sm ${
                    currentPath === link.path
                      ? "text-gold-400 active"
                      : "text-forest-200 hover:text-gold-300"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact" data-ocid="nav.get_involved_button">
                <Button
                  size="sm"
                  className="ml-3 bg-gold-500 hover:bg-gold-600 text-forest-900 font-semibold border-0"
                >
                  Get Involved
                </Button>
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden text-forest-200 hover:text-gold-400 p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              data-ocid="nav.mobile_menu_toggle"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div
            className="lg:hidden bg-forest-900 border-t border-forest-700"
            data-ocid="nav.mobile_menu"
          >
            <nav
              className="container mx-auto px-4 py-3 flex flex-col gap-1"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  data-ocid={`nav.mobile_${link.label.toLowerCase().replace(/[^a-z]/g, "_")}_link`}
                  className={`px-4 py-2.5 text-sm font-medium rounded-md transition-colors ${
                    currentPath === link.path
                      ? "bg-forest-700 text-gold-400"
                      : "text-forest-200 hover:bg-forest-800 hover:text-gold-300"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                data-ocid="nav.mobile_get_involved_button"
              >
                <Button
                  size="sm"
                  className="mt-2 w-full bg-gold-500 hover:bg-gold-600 text-forest-900 font-semibold border-0"
                >
                  Get Involved
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* ── Main Content ── */}
      <main className="flex-1">{children}</main>

      {/* ── Footer ── */}
      <footer className="bg-forest-950 text-forest-200">
        {/* Section divider */}
        <div className="w-full h-1 bg-gradient-to-r from-forest-800 via-gold-600 to-forest-800 opacity-60" />

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gold-600">
                  <img
                    src="/assets/generated/org-emblem.dim_400x400.png"
                    alt="AADC Emblem"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-gold-400 font-serif font-bold text-base">
                    Asia Africa Development Council
                  </div>
                  <div className="text-forest-400 text-xs">
                    A Trademark of Council for Sustainable Peace and Development
                  </div>
                </div>
              </div>
              <p className="text-forest-400 text-sm leading-relaxed max-w-sm">
                An international global non-profit organization dedicated to
                supporting global mankind through innovation, peace, and
                sustainable development across Asia and Africa.
              </p>
              <div className="flex items-center gap-2 mt-4">
                <Globe size={14} className="text-gold-500" />
                <a
                  href="https://www.asiafricaonline.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-400 hover:text-gold-300 text-xs transition-colors"
                  data-ocid="footer.asiaafrica_link"
                >
                  asiafricaonline.com
                </a>
                <span className="text-forest-600">·</span>
                <a
                  href="https://www.samridhbharat.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-400 hover:text-gold-300 text-xs transition-colors"
                  data-ocid="footer.samridh_link"
                >
                  samridhbharat.net
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-gold-400 font-serif font-semibold text-sm mb-4 uppercase tracking-wider">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-forest-400 hover:text-gold-300 text-sm transition-colors"
                      data-ocid={`footer.${link.label.toLowerCase().replace(/[^a-z]/g, "_")}_link`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Global Frameworks */}
            <div>
              <h4 className="text-gold-400 font-serif font-semibold text-sm mb-4 uppercase tracking-wider">
                Global Frameworks
              </h4>
              <ul className="space-y-2 text-sm text-forest-400">
                <li className="flex items-start gap-2">
                  <span className="text-gold-500 mt-0.5">◆</span>
                  <span>UN Sustainable Development Agenda 2030</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-500 mt-0.5">◆</span>
                  <span>African Union Agenda 2063</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-500 mt-0.5">◆</span>
                  <span>India Growth Index</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-500 mt-0.5">◆</span>
                  <span>Vision India 2047</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-forest-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-forest-500">
            <div>
              © {new Date().getFullYear()} Asia Africa Development Council. All
              rights reserved.
              <span className="mx-2">·</span>A Trademark of Council for
              Sustainable Peace and Development.
            </div>
            <div className="flex items-center gap-1">
              Built with{" "}
              <Heart
                size={12}
                className="text-terracotta-400 mx-1 fill-current"
              />{" "}
              using{" "}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-500 hover:text-gold-400 transition-colors ml-1"
              >
                caffeine.ai
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
