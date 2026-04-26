# Design Brief — Asia Africa Development Council

## Direction
Authoritative international NGO. Forest-green and warm gold palette evoking trust, nature, and prestige. Serif display headings with clean sans-serif body text for readability and gravitas.

## Palette
| Token | OKLCH | Role |
|-------|-------|------|
| background | 0.97 0.008 95 | Warm off-white page base |
| foreground | 0.18 0.04 155 | Deep forest text |
| primary | 0.32 0.09 155 | Deep forest green |
| secondary | 0.78 0.12 75 | Warm gold |
| accent | 0.62 0.14 38 | Terracotta highlight |
| muted | 0.93 0.012 95 | Subtle off-white sections |
| card | 0.99 0.004 95 | Card surface |

## Typography
| Role | Font | Usage |
|------|------|-------|
| Display | Fraunces | All headings, hero text |
| Body | Satoshi | Paragraphs, navigation, UI labels |
| Quote | Lora | Italic taglines, pull quotes |

## Structural Zones
| Zone | Treatment |
|------|-----------|
| Header | bg-forest-800 shadow-lg (dark, authoritative) |
| Top bar | bg-forest-950 text-gold-400 (ultra-dark with gold) |
| Hero sections | hero-gradient (deep forest green overlay) |
| Content alternating | bg-background / section-gradient / bg-forest-800 |
| Stats bar | bg-forest-800 (dark band for contrast) |
| Footer | bg-forest-950 (darkest, grounded) |

## Shape
- radius: 0.375rem (6px), moderate rounded corners
- Shadows: shadow-card for cards, shadow-hero for feature images
- Borders: subtle, forest-tinted

## Motion
- card-hover: translateY(-4px) on hover
- nav-link::after underline slides in on hover
- animate-bounce on scroll indicator

## Differentiator
Distinctive by alignment section dividers, top bar marquee-style framework labels, and the forest-green/gold/terracotta tri-color system that references African and Asian flag colors.
