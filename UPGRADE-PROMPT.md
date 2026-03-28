# Curfew Festival 2026 — The Big Upgrade

## Context

I'm building the Curfew Festival 2026 website (Next.js 16 + Framer Motion + Lenis + Tailwind v4). It currently works but feels too safe and corporate. I want it to feel like an edgy, award-winning festival site — the kind that makes you FEEL the music before you even scroll.

**Design references I love (study these for inspiration, don't copy):**
- dimensionsfestival.com — full-bleed video hero, oversized expressive type, hand-drawn CTAs, gradient color washes between sections
- fuel.framer.website — dark cinematic hero, crosshair decorative elements, bold numbered navigation, motion-blurred imagery
- spotlight.i-d.co/ellefanning — MASSIVE typography bleeding off screen edges, editorial parallax, sticky elements, text layered fearlessly over imagery
- dekmantelfestival.com — psychedelic/graphic art direction, bold colors, playful mascot character, custom illustration identity
- wildeweide.nl — colorful video hero with festival energy, playful UI elements
- bychudy.com — experimental scattered layouts, creative floating elements, desktop-as-canvas approach

**The vibe I want:** Dark, warm, cinematic — but with surprising moments of playfulness and edge. Think late-night house music meets golden-hour open air. The site should feel alive, like it's moving even when you're not scrolling.

**Existing design tokens to keep:**
- Colors: deep #1a1a2e, cream #FAF2E1, golden #C8A45A, blue #5587C8
- Fonts: Big Shoulders Display (display), Work Sans (body)
- Warm photo grading filter
- Film grain overlay

**IMPORTANT:** This project uses Next.js 16 which has breaking changes. Read the relevant docs in `node_modules/next/dist/docs/` before writing any code.

---

## The Changes (work through these in order, test after each)

### 1. VIDEO HERO — Replace the static hero with a looping video

The most important change. Replace the current static image hero with an immersive video experience.

**Video file:** Already at `public/videos/hero-mobile.mp4` (720x1280 portrait, 6.8s, 4.4MB). This is a high-energy clip of someone jumping at Curfew.

**Implementation:**
- Create a `VideoHero.tsx` component that replaces the current `Hero.tsx`
- The video should be **full-viewport height** (100svh), autoplaying, looping, muted, playsInline
- On mobile: use the portrait video as-is, object-fit cover, filling the entire screen
- On desktop: still use it but with `object-fit: cover` and `object-position: center` so it crops naturally to landscape
- Layer the text content ON TOP of the video with a dark gradient overlay (from transparent at top to deep at bottom, about 60% opacity)
- The "CURFEW" title should be MASSIVE — think i-D Spotlight style. Use `clamp(6rem, 20vw, 16rem)` size. It should feel like it's about to break out of the viewport
- Below the title: "SAT 6 JUNE · BLAARMEERSEN · GENT" as a minimal label
- A single "GET TICKETS" CTA button with the golden border style
- The tagline "Where House Comes Home" in italic below
- At the very bottom of the hero: a subtle scroll indicator (animated line or chevron)
- Add a slight CSS brightness/contrast filter pulse on the video (very subtle, 8-10s cycle) to make it feel alive
- Keep the staggered fade-in animations from the current hero but adjust timing to 1.5s base delay (after preloader)
- Mobile-first: design for portrait viewport first, then enhance for desktop

### 2. HORIZONTAL SCROLLING MARQUEE — Add a running text strip

Inspired by Dimensions and Dekmantel. Add a continuously scrolling horizontal marquee strip between the hero and about sections.

**Implementation:**
- Create a `Marquee.tsx` component
- Full-width bar with a slight golden/warm background tint (`bg-golden/[0.04]`)
- Text content: "IN HOUSE WE TRUST · SAT 6 JUNE 2026 · BLAARMEERSEN GENT · DEEP HOUSE · NON-PROFIT · SINCE 2015 ·" repeated
- Use CSS animation (`translateX`) for smooth infinite scrolling — NOT JavaScript
- Speed: ~40px per second
- Text style: font-display, uppercase, tracking-wider, cream/30 opacity (subtle, not screaming)
- Add a second row scrolling in the opposite direction at a slightly different speed for visual depth
- The marquee should pause on hover
- Place it between Hero and About

### 3. TEXT REVEAL ANIMATIONS — Make typography feel alive

Replace the basic fade-up ScrollReveal animations with more editorial, staggered text reveals.

**Implementation:**
- Create a new `TextReveal.tsx` component using Framer Motion's `useInView`
- For section titles: split text into individual characters, stagger each character's reveal with a 0.02s delay, using a clip-path or y-transform animation (characters slide up from below a mask)
- For body paragraphs: reveal line by line (split by `<br/>` or use word wrapping detection) with a slight stagger
- For labels/tags: quick horizontal wipe-in from left
- The existing `ScrollReveal` wrapper can stay for simpler elements, but hero titles and section headers should use the new `TextReveal`
- Apply to: section titles ("LINEUP", "THE EXPERIENCE", etc.), the About section paragraphs, and the hero text

### 4. PARALLAX DEPTH — Make scrolling feel multi-layered

Add parallax movement to create depth while scrolling.

**Implementation:**
- Use Framer Motion's `useScroll` and `useTransform` hooks
- Hero video: very slight parallax (scrolls at 0.8x speed relative to content, creating a sticky/slow effect)
- AtmosphereBreak images: parallax at 0.6x speed (images move slower, creating a window effect)
- Section titles: slight upward parallax (1.05x speed, barely noticeable but adds life)
- Stats numbers: subtle scale transform tied to scroll progress (scale from 0.95 to 1.0 as they enter viewport)
- Keep it subtle — the goal is depth, not seasickness. Max parallax offset should be 50-80px

### 5. CURSOR TRAIL / GLOW EFFECT — Interactive ambient element

Upgrade the custom cursor with a trailing warm glow that follows mouse movement.

**Implementation:**
- Keep the existing small circle cursor dot
- Add a larger (150-200px) radial gradient glow that follows the cursor with a slight delay (use lerp/easing)
- The glow color should be golden at low opacity: `radial-gradient(circle, rgba(200,164,90,0.06) 0%, transparent 70%)`
- On dark sections, the glow should be slightly more visible
- This should only appear on desktop (hide on touch devices)
- Use `requestAnimationFrame` for smooth 60fps performance, not React state updates
- The glow should interact with content — when hovering over images, it could shift to a slightly warmer/brighter tone

### 6. SECTION TRANSITIONS — Color wash between sections

Instead of hard section cuts, add subtle background color transitions as you scroll between sections.

**Implementation:**
- The About section could have a slightly warmer deep tone (`#1e1a2e` → the existing deep-warm)
- The Experience section could have a very subtle golden atmospheric glow at the edges
- Between sections, add thin horizontal lines (1px, golden/10 opacity) as visual separators
- The Stats section should have a more dramatic warm glow behind it (expand the existing warm-glow blob)
- Use scroll-driven opacity changes for these background elements

### 7. ATMOSPHERE BREAK UPGRADE — Fullscreen with text overlay

The AtmosphereBreak image sections should feel more editorial and immersive.

**Implementation:**
- Make them truly full-width AND full-height (100vh or at least 80vh)
- Add a slow Ken Burns zoom effect (scale from 1.0 to 1.08 over ~20s, looping)
- Overlay a large, faded watermark text in the center: "CURFEW" at massive size, cream/[0.04] opacity — like a subtle brand stamp
- Add the parallax treatment from step 4
- On mobile, these should still be impactful — at least 60vh height

### 8. FOOTER UPGRADE — Make it memorable

The footer should be a destination, not an afterthought.

**Implementation:**
- Add the CURFEW wordmark at massive size (like the hero) spanning the full width, in cream/[0.04] opacity as a background element
- Above it, a centered "See you in the sun." in the tagline italic style at larger size
- Social icons in a horizontal row, each with a hover scale + golden color transition
- Add a subtle "back to top" interaction — clicking the big CURFEW text smoothly scrolls to top
- A thin golden line above the footer content

### 9. MOBILE-FIRST REFINEMENTS

Go through every component and ensure the mobile experience is primary.

**Implementation:**
- Navigation: on mobile, the hamburger should be a more interesting shape (two short golden lines that animate into an X)
- All touch targets must be at least 44x44px
- The video hero should feel even more immersive on mobile since portrait video fills perfectly
- Reduce letter-spacing on mobile for better readability on small screens
- The Experience cards should stack beautifully with generous spacing
- Newsletter form: stack input and button vertically on mobile with full-width elements
- Test all animations at 60fps on mobile — disable or simplify any that stutter

### 10. PRELOADER UPGRADE — Set the tone

The preloader is the first impression. Make it more cinematic.

**Implementation:**
- Instead of just the letters fading in, add a subtle warm glow pulse behind the text
- After the letters reveal, add a brief "flash" effect (screen goes cream/10 for 100ms) before the slide-up exit — like a camera flash or strobe
- The exit animation should be faster and more dramatic — consider a scale + opacity combo rather than just y-translate
- Total preloader time should be 2 seconds (slightly faster than current 2.5s)

---

## Technical notes

- Keep using Framer Motion for all animations — it's already installed
- Keep Lenis for smooth scrolling
- All new animations should respect `prefers-reduced-motion` — wrap in a check and provide simpler alternatives
- Keep the existing analytics tracking and ticket URL builder intact
- Don't touch the /go redirect page
- The `warm-grade` CSS filter and `grain overlay` should stay on all images
- Test on Chrome, Safari, and Firefox
- Performance budget: Lighthouse performance score should stay above 80 on mobile
