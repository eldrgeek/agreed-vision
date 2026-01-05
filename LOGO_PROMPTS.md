# Logo and Favicon Generation Prompts for AI-WTF.org

## Logo Prompt (Horizontal - for Header)

**Dimensions**: 240px × 60px (4:1 ratio)
**Style**: Modern, minimalist, tech-forward

### Prompt for Image Generator:

```
A horizontal logo for "AI-WTF.org" website. Modern minimalist design combining human and AI symbolism. 
Left side: Stylized geometric brain or head silhouette in warm amber/gold tones, representing human cognition.
Right side: Abstract digital/circuit pattern or neural network in cool cyan/blue tones, representing AI.
Center: The two elements meet and interweave, suggesting collaboration not conflict.
Text "AI-WTF.org" integrated subtly below or within the design, using a clean modern sans-serif font.
Color palette: Deep charcoal/black background, amber (#F59E0B), cyan (#06B6D4), white.
Style: Clean, professional, slightly futuristic but approachable. Not corporate, not playful—thoughtful and curious.
Transparent background. SVG-ready. High contrast for readability.
```

### Alternative Simpler Logo Prompt:

```
Minimalist logo for AI-WTF.org. 
Two overlapping circles: one amber/gold (human), one cyan/blue (AI), creating a collaboration symbol at their intersection.
"AI-WTF" text in modern sans-serif below or integrated.
Dark background, high contrast. Clean and professional. Horizontal layout 240×60px.
```

---

## Favicon Prompt (Square)

**Dimensions**: 512px × 512px (will be scaled down to 16×16, 32×32, etc.)
**Style**: Simple, recognizable at small sizes

### Prompt for Image Generator:

```
Square favicon icon for AI-WTF.org website, 512×512px.
Simple iconic symbol: Two abstract head/mind silhouettes facing each other in profile.
Left profile: Human (amber/gold gradient), organic curves.
Right profile: AI (cyan/blue gradient), geometric/digital aesthetic.
Between them: A small spark or connection point where they meet, suggesting dialogue.
Minimal detail, bold shapes that remain readable when scaled to 32×32 or 16×16 pixels.
Dark charcoal or black background. High contrast.
Style: Icon-like, not photorealistic. Think app icon or logo mark.
```

### Alternative Simple Favicon Prompt:

```
Minimalist favicon, 512×512px square.
Abstract "?" shape made of two colors: amber gradient on left half, cyan gradient on right half.
The question mark represents curiosity and "WTF".
The split colors represent human (warm) and AI (cool) perspectives.
Dark background, bold simple shape for small-size readability.
```

---

## Color Palette Reference

From your site's design system:

- **Primary (Amber)**: #F59E0B
- **Secondary (Cyan)**: #06B6D4  
- **Background**: #1a1a1a (dark charcoal)
- **Foreground**: #e8e8e8 (light gray)
- **Border**: #333333

---

## Implementation Plan

1. Generate logo using one of the prompts above (NanoBanana Pro, DALL-E, Midjourney, etc.)
2. Save as:
   - `/public/logo.svg` or `/public/logo.png` (horizontal logo for header)
   - `/public/favicon.ico` (16×16, 32×32, 48×48 multi-resolution)
   - `/public/favicon-16x16.png`
   - `/public/favicon-32x32.png`
   - `/public/apple-touch-icon.png` (180×180 for iOS)

3. Update Header component to use logo image
4. Update index.html with favicon links
5. Optionally create a logo component for reuse across the site

---

## Quick SVG Logo (Text-Based Placeholder)

If you want to start immediately while waiting for AI-generated images, I can create a simple SVG text logo that matches your design system.

