# Manus Prompt: Optimize curfew.events/preview

You are optimizing the Curfew Festival 2026 website at **www.curfew.events/preview**. Curfew is a non-profit house music collective based in Gent, Belgium (est. 2015). Their flagship event is an open-air daytime festival at Blaarmeersen on **Saturday 6 June 2026**.

A separate aesthetic reference build exists at the Vercel deployment. The Manus build (curfew.events/preview) is the production-ready version with better functionality. The goal now is to bring the visual quality of the Manus build up to match the aesthetic reference, while keeping all its functional advantages intact.

---

## PRIORITY 1: Critical Bug Fixes

These are the most visible issues on the site right now. Fix these first.

### 1. Stats Counter Shows "0+" on Load
Both the `10+ YEARS OF HOUSE`, `100+ EVENTS`, and `40.000+ PEOPLE` counters display as `0+` when the page loads. The IntersectionObserver that triggers the count-up animation is not firing correctly. This is the single most visible bug on the page. Fix the observer so counters animate up when the section scrolls into view. Test by scrolling to the stats section — numbers should animate from 0 to their target.

### 2. Remove "IAN POOLEY" Floating Text from Video Hero
There is floating text reading "IAN POOLEY" in the video hero section. It reads as a leftover artifact, not a design choice. Remove it entirely, or replace it with a small, tasteful headliner badge (e.g., a pill/chip at bottom-right of the hero: `★ IAN POOLEY — HEADLINER`). Do not leave large floating artist text in the hero.

### 3. Fix OG Meta Title
The Open Graph `og:title` meta tag still reads "Daytime Edition" in social share previews. Update it to **"Open-Air Edition"** to match the rest of the site copy. Also verify `og:description` and `og:image` are set correctly for social sharing.

---

## PRIORITY 2: Visual & Spacing Overhaul

The site currently has too much white space between sections and doesn't feel like one connected, flowing experience. Apply these changes throughout.

### Reduce Section Padding Globally
Current spacing between sections is too generous. Tighten all section vertical padding:
- Main content sections (About, Lineup, Experience, Events, Newsletter): use `py-8 md:py-14` or equivalent (roughly 2rem / 3.5rem)
- Stats section: `py-10 md:py-16`
- Partners section: `py-6 md:py-10`
- Footer: `py-16 md:py-24`
- Internal gaps (title to content, content to CTA): reduce by ~20-30% from current values

### Tighten Section Title Spacing
Section titles (LINEUP, THE EXPERIENCE, UPCOMING EVENTS, etc.) should have less margin below them. Use `mb-8 md:mb-12` maximum, not `mb-12 md:mb-16` or larger.

### Add Gradient Fades to Photo/Atmosphere Sections
Any full-width photo break or atmosphere section should have subtle gradient fades at top and bottom that blend into the dark background color. This prevents hard edges between photo sections and content sections, creating the "flowy" connected feel. Example CSS:
```css
/* Top fade */
background: linear-gradient(to bottom, rgba(26,26,46,0.8) 0%, transparent 100%);
/* Applied as an overlay div, height ~6rem, at top of photo section */

/* Bottom fade */
background: linear-gradient(to top, rgba(26,26,46,0.8) 0%, transparent 100%);
/* Same at bottom */
```
Adjust the rgba color to match whatever dark background the site uses.

---

## PRIORITY 3: Photo Distribution

**The core principle: distribute photos evenly across the full scroll, maximum 1 photo per section. Never cluster 3-4 photos together.**

### Current Problem
If the Experience section or any section has 3 photo cards in a grid, that creates a visual cluster where photos are bunched together. Break this up.

### Target Layout (top to bottom)
This is the ideal photo distribution as you scroll down the page:

1. **Video Hero** — hero video (already exists, keep it)
2. **About Section** — 1 single wide photo (16:9 aspect, natural colors, no filters)
3. **Atmosphere Break** — 1 full-width parallax photo (between About and Lineup)
4. **Lineup Section** — artist portrait photos only (these are artist cards, not festival photos)
5. **Atmosphere Break** — 1 full-width parallax photo (between Lineup and Experience)
6. **Experience Section** — 1 single wide cinematic photo (21:9 aspect) + text pillars below (NOT 3 photo cards)
7. **Stats Section** — no photo, just numbers (breathing room)
8. **Atmosphere Break** — 1 full-width parallax photo (before Events)
9. **Events Section** — 1 wide photo (16:7 aspect) above the event listings
10. **Newsletter Section** — subtle background photo with heavy dark overlay (opacity ~0.2)
11. **Partners** — logos only, no photos
12. **Footer** — no photos

### Experience Section Restructure
If the Experience section currently shows 3 photo cards side by side, change it to:
- 1 single wide cinematic photo (21:9 or 16:9 aspect ratio)
- Below it: 3 text-only columns (THE SOUND / THE PEOPLE / THE PLACE) with golden label, title, and italic description
- No photo cards. The photo is above, the text pillars are below.

### Use Natural Photos — No Duotone Filters
Remove any CSS filters like `sepia()`, `saturate()`, custom duotone classes (`warm-grade`), or color overlays on photos. All festival photos should show in their natural, real colors. The photos already have great warm/golden/summer vibes — let them breathe.

---

## PRIORITY 4: Navigation & CTAs

### Navigation Size
- Nav links should be `text-sm` with `font-semibold`, not tiny `text-xs`
- Include these nav items: FESTIVAL, LINEUP, EXPERIENCE, EVENTS, PARTNERS, NEWSLETTER
- "GET TICKETS" button in nav should also be `text-sm` with golden border

### More Ticket CTAs Throughout
Add "GET TICKETS" buttons at the end of these sections (if not already present):
- After the About text
- After the Lineup grid
- After the Events listings
- Keep the existing ones in Nav and elsewhere

All ticket buttons should link to the Tiqs ticketing page with UTM parameters.

---

## PRIORITY 5: Component-Level Details

### Lineup Section
- Show all 3 confirmed artists in an equal 3-column grid on desktop, stacked on mobile
- Each artist card: portrait photo (3:4 aspect), name overlay at bottom, origin text (Germany / Colombia / Syria · Dubai)
- Ian Pooley gets a golden "LIVE" badge (top-left of card)
- Pabels and Walashi get subtle "DJ SET" badges
- Cards should link to individual artist sub-pages
- Below the 3 artists: 3 mystery placeholder boxes with "?" and "MORE ARTISTS DROPPING SOON"
- No `warm-grade` or duotone filter on artist photos

### Artist Sub-Pages
Ensure artist sub-pages exist and include:
- Ian Pooley: hero photo, bio, "Germany" origin, "LIVE" tag, links to Spotify + Resident Advisor
- Pabels: hero photo, bio, "Colombia" origin, links to Instagram + SoundCloud + Linktree
- Walashi: hero photo, bio, "Syria / Dubai" origin, links (add what's available)

### Partner Logos
- Both Tout Bien and Yugen logos should render at identical visual height (h-8 md:h-10)
- If logos are different formats/sizes, normalize them (crop SVG viewBox, apply CSS filters)
- Tout Bien logo: if it's a dark logo, apply `brightness-0 invert` to make it cream/white
- Yugen logo: same treatment if needed

### Newsletter Form
- Should be connected to MailerLite API (or whatever email service Curfew uses)
- If not yet connected, keep a working placeholder that shows success state

---

## Design Tokens (Reference)

These are the design tokens from the aesthetic reference build. Match these as closely as possible:

```css
--color-deep: #1a1a2e;        /* Dark background */
--color-cream: #FAF2E1;       /* Primary text */
--color-golden: #C8A45A;      /* Accent, CTAs, highlights */
--color-coral: #F0879B;       /* Secondary accent */
--color-blue: #5587C8;        /* Tertiary accent */
--font-display: 'Big Shoulders Display', sans-serif;  /* Headlines */
--font-body: 'Work Sans', sans-serif;                  /* Body text */
```

### Visual Style Notes
- Dark, moody background (#1a1a2e) with cream text
- Golden accents for CTAs, badges, dividers, and highlights
- Subtle film grain overlay on the entire page (very low opacity, ~0.025)
- Custom scrollbar: thin (6px), golden thumb on dark track
- Smooth scrolling via Lenis (duration ~1.2s)
- Scroll-triggered fade-up animations on section content (staggered)
- Subtle warm glow blobs behind stats sections (radial gradient, very low opacity)

---

## What NOT to Change

Keep these functional advantages of the current Manus build:
- Video hero (keep the video, it's great)
- Live countdown timer (if present)
- Working newsletter database connection
- SEO metadata and Schema.org markup
- Cookie consent / GDPR compliance
- Analytics (GA4 + Meta Pixel)
- Ticket URL with UTM tracking parameters
- Any existing artist sub-pages (just improve them visually)
- The /lineup page (it works, the Vercel build 404s there)

---

## Summary Checklist

- [ ] Fix stats counter IntersectionObserver bug (shows 0+ on load)
- [ ] Remove/replace "IAN POOLEY" floating text from video hero
- [ ] Update OG meta title from "Daytime Edition" to "Open-Air Edition"
- [ ] Reduce vertical padding on all sections (tighter spacing)
- [ ] Add gradient fades to top/bottom of all full-width photo sections
- [ ] Redistribute photos: max 1 per section, spread evenly across scroll
- [ ] Restructure Experience from 3 photo cards to 1 wide photo + 3 text pillars
- [ ] Remove all duotone/sepia/warm-grade filters from photos
- [ ] Increase nav link size to text-sm font-semibold
- [ ] Add more GET TICKETS CTAs throughout sections
- [ ] Normalize partner logo sizes (equal height)
- [ ] Ensure artist sub-pages have correct links (Spotify, RA, Instagram, SoundCloud)
- [ ] Match design tokens (colors, fonts, grain, scrollbar)
- [ ] Keep all existing functional features intact
