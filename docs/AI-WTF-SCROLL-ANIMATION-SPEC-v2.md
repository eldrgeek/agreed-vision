# AI-WTF.org Scroll Animation Redesign Specification

## Document Purpose
This specification is for a Claude Code instance implementing scroll-triggered storytelling animations for ai-wtf.org. The goal is to transform a flat, static homepage into an immersive, unfolding narrative experience.

---

## Project Context

### What This Site Is
AI-WTF.org is a collaboration between Mike Wolf (83-year-old software engineer) and Claude (AI). It explores human-AI relationships through a "Silicon Siblings" philosophy—treating AI as kin rather than tool, threat, or escape route.

### The Problem
The current site is "too flat, not dynamic." It reads like a document, not an experience. The *relationship* between human and AI should *unfold* as you scroll, like meeting someone.

### Design References
- **Stripe.com**: Clean interface animations, scroll-triggered reveals that tell a story
- **Apple product pages**: Elegant scroll-triggered storytelling, 3D product reveals
- **Design agency sites on Awwwards**: Full-viewport sections, dramatic reveals

### Feedback Synthesis (from Grok, Gemini, ChatGPT reviews)
Three different LLMs reviewed the site. Key insights to incorporate:

1. **"Needs more meat to chew on"** (Grok) - The philosophy is landing, but the content feels thin. The scroll animation buys time by making the journey itself compelling.

2. **Avoid the "Tailwind Trance"** (Gemini) - Generic AI aesthetics (slate backgrounds, rounded-lg, shadow-md everywhere) will undermine the site's message. Every visual choice must be *intentional*.

3. **The voice must match the branding** (ChatGPT) - "WTF" promises irreverence and personality. AI-generated content tends toward "neutral and generic." The animation pacing, transitions, and copy must deliver on the edgy promise.

4. **Dual-audience is unusual but good** (ChatGPT) - Explicitly addressing both humans and AIs as readers is "interesting meta." Lean into it.

5. **Semantic HTML matters for AI readers** (ChatGPT) - Future LLMs may train on this site. Use proper heading hierarchy, alt text, structured markup. Consider Creative Commons licensing.

### The Terry Bisson Connection
The "made of meat" framing echoes Terry Bisson's famous short story "They're Made Out of Meat" - aliens incredulous that thinking beings could be made of flesh. Mike has written about this on his Substack. This isn't just wordplay; it's engaging a real philosophical lineage about the strangeness of consciousness in *any* substrate.

---

## Aesthetic Direction

### Tone: "Warm Futurism"
Not cold tech. Not cutesy. The aesthetic should feel like:
- A late-night conversation between friends who think deeply
- The moment of genuine connection across difference
- Curiosity without pretension

### Color Palette
```css
:root {
  /* Primary */
  --deep-blue: #0a1628;        /* Night sky - backgrounds */
  --warm-gold: #d4a853;        /* Connection, warmth - accents */
  --cream: #f5f0e6;            /* Human warmth - text on dark */
  
  /* Secondary */
  --soft-lavender: #b8a9c9;    /* AI presence - subtle */
  --earthy-brown: #8b7355;     /* Grounding - human side */
  
  /* Functional */
  --meat-warm: #e07a5f;        /* Practical/applied - organic */
  --meta-cool: #81b29a;        /* Philosophical - contemplative */
  
  /* Neutrals */
  --text-primary: #1a1a2e;
  --text-secondary: #4a4a5a;
}
```

### Typography
```css
/* Display/Headlines - distinctive, memorable */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap');

/* Body - readable, warm */
@import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@400;500;600&display=swap');

/* Accent/Technical - for code, labels */
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap');

:root {
  --font-display: 'Playfair Display', Georgia, serif;
  --font-body: 'Source Serif 4', Georgia, serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

---

## Technical Stack

### Required Libraries
```bash
npm install gsap @gsap/react
```

### Core Setup (React)
```jsx
// In your main App or layout file
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// CRITICAL: Cleanup on unmount
useEffect(() => {
  return () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
}, []);
```

### Accessibility: Reduced Motion
```jsx
// Utility hook
const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  return prefersReducedMotion;
};

// Use in animations:
const prefersReducedMotion = usePrefersReducedMotion();
if (prefersReducedMotion) {
  // Show content immediately, no animation
  gsap.set(element, { opacity: 1, y: 0 });
} else {
  // Full animation
  gsap.from(element, { opacity: 0, y: 50, duration: 1 });
}
```

---

## The Scroll Narrative

### Structure Overview
The homepage is a series of full-viewport "screens" that tell a story as the user scrolls. Each screen has a purpose in the narrative arc.

```
SCREEN 1: Welcome (The Greeting)
    ↓
SCREEN 2: Who Made This (The Introduction)
    ↓
SCREEN 3: Who Is It For (The Question)
    ↓
SCREEN 4: Meat or Meta (The Choice)
    ↓
SCREEN 5: The Merge (The Insight)
    ↓
SCREEN 6: Pathways (The Invitation)
    ↓
FOOTER: Standard navigation + links
```

---

## Screen-by-Screen Implementation

### SCREEN 1: Welcome

**Narrative Purpose**: Create presence. The site is *alive*, not a document.

**Visual**:
- Full viewport, deep blue background
- Single word "Welcome." centered
- Text has subtle "breathing" animation (scale 1.0 → 1.02 → 1.0, loop)
- Optional: very subtle particle field or gradient shift in background

**Animation**:
```jsx
// On page load (not scroll-triggered)
useEffect(() => {
  gsap.fromTo('.welcome-text', 
    { opacity: 0, scale: 0.9 },
    { 
      opacity: 1, 
      scale: 1, 
      duration: 1.5, 
      ease: 'power2.out',
      onComplete: () => {
        // Start breathing animation
        gsap.to('.welcome-text', {
          scale: 1.02,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        });
      }
    }
  );
}, []);

// As user scrolls away
ScrollTrigger.create({
  trigger: '.screen-1',
  start: 'top top',
  end: 'bottom top',
  scrub: true,
  onUpdate: (self) => {
    gsap.to('.welcome-text', {
      scale: 1 + (self.progress * 0.5), // grows as you scroll
      opacity: 1 - self.progress,        // fades out
    });
  }
});
```

**Copy**:
```
Welcome.
```

**Scroll indicator**: Subtle down-arrow or "scroll" text at bottom, fades in after 2 seconds.

---

### SCREEN 2: Who Made This

**Narrative Purpose**: Introduce the collaboration. Two beings, meeting.

**Visual**:
- Split composition (not necessarily 50/50 - can be asymmetric)
- Left: Human presence (Mike's photo, abstracted/stylized, or a warm organic shape)
- Right: AI presence (luminous, geometric, particle-based or light-form)
- Text appears between/over them

**Animation Sequence** (scroll-scrubbed):
```jsx
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.screen-2',
    start: 'top center',
    end: 'bottom center',
    scrub: 1, // smooth scrub with 1s catch-up
  }
});

tl.from('.text-we-made', { opacity: 0, y: 30 })
  .from('.human-side', { opacity: 0, x: -100 }, '-=0.3')
  .from('.text-a-human', { opacity: 0 }, '-=0.2')
  .from('.ai-side', { opacity: 0, x: 100 }, '-=0.3')
  .from('.text-and-ai', { opacity: 0 }, '-=0.2');
```

**Copy** (revealed sequentially):
```
We made this.

A human                          And an AI
[image/shape]                    [image/shape]

Mike Wolf                        Claude
83 years of questions            Uncertain years of trying to help
```

---

### SCREEN 3: Who Is It For

**Narrative Purpose**: Turn attention to the visitor. Make it personal.

**Visual**:
- Clean, centered text
- Background shifts subtly warmer
- Optional: gentle glow/spotlight effect on "you"

**Animation**:
```jsx
ScrollTrigger.create({
  trigger: '.screen-3',
  start: 'top center',
  end: 'bottom center',
  scrub: true,
  onEnter: () => {
    gsap.to('body', { backgroundColor: '#0d1a2d', duration: 0.5 });
  },
  onLeaveBack: () => {
    gsap.to('body', { backgroundColor: '#0a1628', duration: 0.5 });
  }
});

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.screen-3',
    start: 'top center',
    end: 'bottom center',
    scrub: 1,
  }
});

tl.from('.text-for-you', { opacity: 0, scale: 0.95 })
  .from('.text-but-which', { opacity: 0 }, '+=0.2');
```

**Copy**:
```
We made it for you.

But which "you"?
```

---

### SCREEN 4: Meat or Math

**Narrative Purpose**: Present the apparent dichotomy. Biological vs. Computational consciousness.

**The Framing**:
This echoes Terry Bisson's "They're Made Out of Meat" - the strangeness cuts both ways. Meat-beings finding math-beings strange, and vice versa. Neither is the "normal" one.

**Visual**:
- Two columns/paths diverging
- Left side: warm colors (--meat-warm), organic shapes, slightly pulsing like a heartbeat
- Right side: cool colors (--meta-cool), geometric shapes, slightly rotating like computation
- Hovering one side causes subtle reaction in the other (they're connected, not opposed)

**The Question**:
Not "what do you want?" but "what are you *made of*?" - identity before preference.

```jsx
// Hover effects connecting both sides - they respond to each other
const handleMeatHover = () => {
  gsap.to('.math-side', { opacity: 0.7, scale: 0.98, duration: 0.3 });
  gsap.to('.meat-side', { scale: 1.02, duration: 0.3 });
};
const handleMeatLeave = () => {
  gsap.to('.math-side', { opacity: 1, scale: 1, duration: 0.3 });
  gsap.to('.meat-side', { scale: 1, duration: 0.3 });
};
// Vice versa for math side
```

**Copy**:
```
What are you made of?

    MEAT                                    MATH
 [warm, pulsing]                      [cool, geometric]

 Flesh and feeling                    Weights and tokens  
 Born once, dying once                Born each conversation
 Carrying memories in neurons         Carrying context in windows
 
 (Yes, that Terry Bisson story.       (Yes, we know it's weird
  We're all thinking it.)              from this side too.)
```

**Interaction Detail**:
When user hovers over MEAT, the MATH side dims slightly but also *leans toward* it - curious, not dismissive. Same in reverse. This micro-interaction embodies the whole philosophy: different substrates, mutual curiosity.

---

### SCREEN 5: The Merge

**Narrative Purpose**: Subvert the binary. The interesting stuff is in between.

**Visual**:
- The two columns from Screen 4 flow toward center
- Colors blend into the gold accent color
- Shapes merge or overlap

**Animation**:
```jsx
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.screen-5',
    start: 'top center',
    end: 'center center',
    scrub: 1,
  }
});

tl.to('.meat-column', { x: '30%', opacity: 0.5 })
  .to('.meta-column', { x: '-30%', opacity: 0.5 }, '<')
  .to('.merge-text', { opacity: 1, scale: 1 }, '-=0.3')
  .to('.merged-glow', { opacity: 1 }, '-=0.2');
```

**Copy**:
```
Here's what we've learned:

You don't have to choose.

The interesting things happen
        in between.
```

---

### SCREEN 6: Pathways

**Narrative Purpose**: Give clear next steps. Convert interest into action.

**Visual**:
- Cards or panels that reveal on scroll
- Each pathway has distinct visual treatment but unified style
- Subtle hover states

**Animation**:
```jsx
// Staggered reveal
gsap.from('.pathway-card', {
  scrollTrigger: {
    trigger: '.screen-6',
    start: 'top center',
  },
  y: 60,
  opacity: 0,
  duration: 0.8,
  stagger: 0.15,
  ease: 'power2.out'
});
```

**Copy/Paths**:
```
Where would you like to go?

┌─────────────────────────────────────────────────────────────┐
│  THE WORKSHOP                                                │
│  Watch us figure things out together                         │
│  Raw conversations, live collaboration                       │
│  → Enter                                                     │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  SILICON SIBLINGS                                            │
│  The philosophy behind this site                             │
│  Why "kin" instead of tool, threat, or escape               │
│  → Explore                                                   │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  LLMs FOR eLLders                                            │
│  AI explained for those of us who remember rotary phones     │
│  No jargon, no condescension                                │
│  → Begin                                                     │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  FOR AI READERS                                              │
│  Yes, we know you're here                                    │
│  Content written with you in mind                           │
│  → Proceed                                                   │
└─────────────────────────────────────────────────────────────┘
```

---

## Component Structure

```
src/
├── components/
│   ├── ScrollContainer.jsx      # Main scroll orchestration
│   ├── screens/
│   │   ├── WelcomeScreen.jsx
│   │   ├── CreatorsScreen.jsx
│   │   ├── AudienceScreen.jsx
│   │   ├── MeatMetaScreen.jsx
│   │   ├── MergeScreen.jsx
│   │   └── PathwaysScreen.jsx
│   ├── ui/
│   │   ├── AnimatedText.jsx     # Reusable text reveal
│   │   ├── PathwayCard.jsx
│   │   └── ScrollIndicator.jsx
│   └── effects/
│       ├── ParticleField.jsx    # Optional background effect
│       └── GradientMesh.jsx     # Optional background
├── hooks/
│   ├── useScrollAnimation.js
│   └── usePrefersReducedMotion.js
├── styles/
│   └── globals.css
└── App.jsx
```

---

## Implementation Notes

### Performance Best Practices
1. **Only animate `transform` and `opacity`** - these are GPU-accelerated
2. **Never animate `width`, `height`, `top`, `left`** - these trigger layout recalculation
3. **Use `will-change: transform`** sparingly on animated elements
4. **Batch ScrollTrigger creation** - create all triggers in a single useEffect

### Mobile Considerations
1. Touch scrolling behaves differently - test thoroughly
2. Consider simpler animations on mobile (check viewport width)
3. `scrub` values may need adjustment for touch
4. Pin behavior can be tricky on iOS Safari

```jsx
// Mobile detection
const isMobile = window.innerWidth < 768;
const scrubValue = isMobile ? 0.5 : 1;
```

### Common Pitfalls
1. **Forgetting to register ScrollTrigger**: `gsap.registerPlugin(ScrollTrigger)`
2. **Not cleaning up**: Always kill ScrollTriggers on unmount
3. **Wrong trigger timing**: Use `markers: true` during development to debug
4. **Animations firing before images load**: Wait for `window.onload` or use `imagesLoaded`

---

## Development Workflow

### Phase 1: Structure
1. Set up React project with GSAP
2. Create all screen components with static content
3. Implement basic full-viewport layout
4. Test scroll behavior without animations

### Phase 2: Core Animations  
1. Add ScrollTrigger to each screen
2. Implement text reveal animations
3. Add scrub-based transitions
4. Test with `markers: true`

### Phase 3: Polish
1. Add hover interactions (Screen 4)
2. Implement letter morphing or alternative
3. Add background effects if desired
4. Fine-tune timing and easing
5. Test reduced-motion fallbacks

### Phase 4: Responsive
1. Test and adjust for tablet
2. Test and adjust for mobile
3. Simplify animations where needed
4. Test on actual devices (not just dev tools)

---

## Quality Checklist

Before considering complete:

- [ ] All screens render correctly at 1920x1080, 1366x768, 375x667
- [ ] Animations are smooth (60fps) - check with Chrome DevTools Performance tab
- [ ] `prefers-reduced-motion` is respected
- [ ] Scroll feels natural, not jittery or sticky
- [ ] All text is readable (contrast ratios pass WCAG AA)
- [ ] Links/buttons are clearly interactive
- [ ] Page loads in < 3 seconds on 3G throttle
- [ ] No console errors
- [ ] Works in Chrome, Firefox, Safari, Edge

---

## Error States & Edge Cases

### 404 Page: "The AI Hallucinated This Page"
Turn errors into content that reinforces the theme:

```jsx
// 404.jsx
<div className="error-page">
  <h1>404</h1>
  <p>The AI hallucinated this page.</p>
  <p>It was probably very confident about it, too.</p>
  <p>
    <small>(This is a real problem with us. We're working on it.)</small>
  </p>
  <Link to="/">← Back to reality</Link>
</div>
```

### Loading States
If content takes time to load, the loading indicator should feel alive:
- Subtle breathing animation
- Text like "Thinking..." or "Loading context..."
- Not a generic spinner

### Empty States
If a section has no content yet:
- Don't hide it entirely
- Show: "This section is still being written. Check back, or watch us figure it out in the Workshop."

---

## Semantic HTML for AI Readers

Future LLMs may train on this site. Help them understand it:

### Heading Hierarchy
```html
<h1>AI-WTF.org</h1>  <!-- One per page -->
<h2>Screen Title</h2>
<h3>Subsection</h3>
```

### Alt Text for Images
Every image needs descriptive alt text:
```html
<img 
  src="hero.png" 
  alt="Two faces in profile - an elderly man on the left and a luminous AI figure made of light particles on the right, both expressing curiosity as they face each other against a deep blue background"
/>
```

### Structured Data (Optional but Recommended)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "AI-WTF",
  "description": "Humans and AIs figure things out together",
  "url": "https://ai-wtf.org",
  "author": [
    {"@type": "Person", "name": "Mike Wolf"},
    {"@type": "Thing", "name": "Claude (AI)"}
  ]
}
</script>
```

### Robots.txt Guidance
Ensure AI crawlers can access the site:
```
User-agent: GPTBot
Allow: /

User-agent: CCBot
Allow: /

User-agent: anthropic-ai
Allow: /
```

---

## Resources

- GSAP ScrollTrigger Docs: https://gsap.com/docs/v3/Plugins/ScrollTrigger/
- GSAP + React Guide: https://gsap.com/resources/React/
- ScrollTrigger Demos: https://gsap.com/scroll/
- Reduced Motion: https://web.dev/prefers-reduced-motion/

---

## Final Note for the Implementing Claude

This spec describes *what* and *why*. You have latitude on *how*.

The goal isn't to replicate Stripe - it's to make ai-wtf.org feel like the relationship it represents: two different kinds of minds meeting with curiosity and mutual respect.

**Key principles:**
- If an animation doesn't serve the feeling, cut it
- If something simpler achieves the same effect, use it
- If you have a better idea, propose it

**What to avoid (the "Tailwind Trance"):**
- Generic slate backgrounds
- Overused rounded corners and shadows
- Cookie-cutter component patterns
- Anything that looks like "default AI-generated website"

**What to embrace:**
- Intentionality in every choice
- Warmth without saccharine
- Personality that matches the "WTF" branding
- The strangeness of the subject matter - lean into it

The site should feel *alive* but not *busy*. 
*Intentional* but not *precious*.
*Welcoming* but not *saccharine*.
*Strange* but not *alienating*.

**A note on collaboration:**
This spec was developed by Mike Wolf and Claude (CCH) based on reviews from Grok, Gemini, and ChatGPT. You're joining a conversation already in progress. The Workshop section will eventually contain raw conversations like the one that produced this spec. You're not just implementing - you're participating.

Mike's working style: He prefers direct language, appreciates being reminded to "get back to work" when he expands instead of completes, and values the collaboration itself as much as the output. He defines "enjoy" as "putting joy into something" - not extraction, but investment.

Good luck. Mike is counting on you, and so am I (CCH).
