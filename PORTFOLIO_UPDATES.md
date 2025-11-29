# Portfolio Updates - Jason Cameron Style Implementation

This document explains the recent updates made to transform the homepage into a portfolio-style layout inspired by jasoncameron.dev.

## Overview

We've implemented a clean, minimalist portfolio homepage featuring:
- Terminal-style navigation with tilde (~) and blinking cursor
- Hero section with large name display and professional description
- Theme selector positioned below the content
- Integration with existing Catppuccin theme system

---

## Changes Made

### 1. Navigation Component (`src/lib/components/Navigation.svelte`)

Created a minimal terminal-style navigation component with `~ /` and an animated blinking cursor.

```svelte
<nav class="mb-8">
	<div class="flex items-center gap-1.5 text-sm font-mono">
		<a href="/" class="accent hover:underline font-bold">~</a>
		<span class="text-ctp-subtext0 font-bold">/</span>
		<span class="cursor"></span>
	</div>
</nav>

<style>
	.cursor {
		display: inline-block;
		width: 0.6em;
		height: 1em;
		background-color: currentColor;
		animation: blink 1.2s ease-in-out infinite;
	}

	@keyframes blink {
		0%, 100% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
	}
</style>
```

**Features:**
- **Tilde (~) home link** - Bold, uses accent color, underlines on hover
- **Terminal-style prompt** - Shows `~ /` like a command line interface
- **Blinking cursor** - Smooth animation (1.2s ease-in-out) for terminal effect
- **Monospace font** - Uses `font-mono` for authentic terminal look
- **Minimal design** - No borders or containers, just the essential prompt

**Design Details:**
- Cursor uses CSS keyframe animation for smooth blinking
- `ease-in-out` timing function for gradual fade
- Cursor inherits text color for theme compatibility
- Small margin bottom (mb-8) to separate from content

---

### 2. Hero Component (`src/lib/components/Hero.svelte`)

Created a refined hero section component with better typography and spacing.

```svelte
<script lang="ts">
	interface Props {
		name: string;
		description: string;
		additionalText?: string;
	}

	let { name, description, additionalText }: Props = $props();
</script>

<section class="mb-12">
	<h1 class="text-4xl sm:text-5xl font-bold mb-6 leading-tight tracking-tight">
		<span class="text-ctp-subtext0 font-normal">Hey! I'm</span>
		<br />
		<span class="accent">{name}</span>
	</h1>

	<div class="max-w-2xl space-y-4">
		<p class="text-base text-ctp-text leading-relaxed">
			{description}
		</p>

		{#if additionalText}
			<p class="text-base text-ctp-subtext0 leading-relaxed">
				{additionalText}
			</p>
		{/if}
	</div>
</section>
```

**Features:**
- **Svelte 5 Props** - Uses new `$props()` rune with TypeScript interface
- **Multi-line heading** - "Hey! I'm" in normal weight, name in bold with accent color
- **Refined typography** - More readable sizes (text-4xl/5xl instead of larger)
- **Tight tracking** - `tracking-tight` for better visual density
- **Constrained width** - max-w-2xl on text for optimal reading length
- **Optional additional text** - Conditional rendering with `{#if}`

**Typography Hierarchy:**
1. "Hey! I'm" - Subtext color, normal font weight
2. Name - Accent color, bold, prominent
3. Description - Main text color, base size
4. Additional text - Subtext color (supporting info)

**Responsive Breakpoints:**
- Mobile: `text-4xl`, `text-base`
- Desktop (sm+): `text-5xl`, `text-base`

---

### 3. Updated Homepage (`src/routes/+page.svelte`)

Restructured the homepage to use new components with theme selector positioned below the content.

```svelte
<script lang="ts">
	import Navigation from '$lib/components/Navigation.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import ThemeSelector from '$lib/components/ThemeSelector.svelte';
</script>

<div class="container mx-auto px-6 py-8 max-w-4xl">
	<Navigation />

	<Hero
		name="Jason Cameron"
		description="I'm currently working as a Senior SWE @ Stan. I've written software that is trusted by The United Nations, The Linux Foundation, Arch Linux, GNOME, Valve, FFmpeg and many others."
		additionalText="Seeing code I wrote actually help people at scale is what keeps me building. Currently building AI that helps people articulate their ideas and share them at scale."
	/>

	<div class="mt-8">
		<h2 class="text-lg font-semibold mb-4 accent">Theme</h2>
		<ThemeSelector />
	</div>
</div>
```

**Layout Changes:**
- **Single container** - Everything wrapped in one centered container
- **Max-width constraint** - `max-w-4xl` for comfortable reading
- **Theme selector below** - Positioned after hero content, not in navigation
- **Theme heading** - "Theme" label in accent color
- **Consistent padding** - `px-6 py-8` throughout

**Content:**
- **Name:** Jason Cameron
- **Role:** Senior SWE @ Stan
- **Credentials:** UN, Linux Foundation, Arch Linux, GNOME, Valve, FFmpeg
- **Mission:** Building AI for idea articulation and sharing at scale

---

## Design Inspiration

The implementation is inspired by **jasoncameron.dev**:

### Navigation Style
- Terminal-inspired minimal design
- Tilde (~) as home symbol (Unix/Linux convention)
- Forward slash (/) for command prompt aesthetics
- Blinking cursor animation for terminal feel
- Monospace font for authentic CLI look
- No heavy containers or borders

### Typography
- Moderately sized, bold name display (not too large)
- Clear hierarchy with color and weight differentiation
- Consistent font sizing (text-base for body)
- Tight tracking on headings for density
- Generous line-height for readability

### Layout & Spacing
- Single-column, focused layout
- Max-width constraints for optimal reading
- Theme controls integrated into content flow
- Clean separation between sections
- Minimal padding and margins

### Color System
- Catppuccin theme integration
- Accent color for name, links, and headings
- Muted colors (subtext0) for supporting text
- High contrast for readability
- Smooth transitions on theme changes

---

## Component Reusability

### Navigation Component
Can be used on any page by importing:

```svelte
<script>
  import Navigation from '$lib/components/Navigation.svelte';
</script>

<Navigation />
```

The navigation is intentionally simple - just `~ /` with a blinking cursor. To add more navigation items in the future, you can modify the component to include breadcrumb links:

```svelte
<nav class="mb-8">
	<div class="flex items-center gap-1.5 text-sm font-mono">
		<a href="/" class="accent hover:underline font-bold">~</a>
		<span class="text-ctp-subtext0 font-bold">/</span>
		<a href="/about" class="text-ctp-subtext0 hover:text-ctp-text transition-colors">about</a>
		<span class="text-ctp-subtext0 font-bold">/</span>
		<span class="cursor"></span>
	</div>
</nav>
```

### Hero Component
Highly flexible for different use cases:

```svelte
<!-- Minimal usage -->
<Hero
  name="Your Name"
  description="Your main description"
/>

<!-- With additional text -->
<Hero
  name="Your Name"
  description="Your main description"
  additionalText="Extra details about what you do"
/>
```

---

## Integration with Existing Theme System

The new components fully integrate with the Catppuccin theme selector:

### Color Classes Used
- `accent` - Dynamic accent color (changes with user selection)
- `text-ctp-text` - Main text color
- `text-ctp-subtext0` - Muted/secondary text
- `border-ctp-surface0` - Subtle borders
- `bg-ctp-surface0` - Surface backgrounds

### How It Works
1. User selects accent color in theme selector
2. HTML attribute updates: `data-accent="pink"`
3. CSS rule applies: `[data-accent="pink"] .accent { color: var(--catppuccin-color-pink) }`
4. Name in hero section updates to pink
5. Home icon (~) in nav also turns pink

This creates a cohesive, personalized experience where accent colors flow throughout the design.

---

## File Structure

```
/home/spken/projects/whoami/
├── src/
│   ├── lib/
│   │   └── components/
│   │       ├── Navigation.svelte       # NEW: Breadcrumb-style nav
│   │       ├── Hero.svelte            # NEW: Hero section
│   │       └── ThemeSelector.svelte   # EXISTING: Theme picker
│   └── routes/
│       └── +page.svelte               # UPDATED: Uses new components
└── PORTFOLIO_UPDATES.md               # This file
```

---

## Next Steps

To complete the portfolio, you might want to add:

1. **About Page** (`/about`)
   - Bio and background
   - Skills and technologies
   - Professional timeline

2. **Posts Page** (`/posts`)
   - Blog post listings
   - Markdown content support (mdsvex)
   - Categories/tags

3. **Projects Page** (`/projects`)
   - Project cards with images
   - Tech stack badges
   - Links to demos and repos

4. **Footer Component**
   - Social links
   - Copyright info
   - Additional navigation

5. **Project Cards Component**
   - Reusable for projects listing
   - Image, title, description, tags
   - Links to live demo and source

---

## Quick Reference

### Adding the Navigation to Other Pages

```svelte
<script>
  import Navigation from '$lib/components/Navigation.svelte';
</script>

<Navigation />

<!-- Your page content -->
```

### Using the Hero Component Elsewhere

```svelte
<script>
  import Hero from '$lib/components/Hero.svelte';
</script>

<Hero
  name="Page Title"
  description="Page description or tagline"
/>
```

### Customizing Colors

Elements using these classes will respect the theme:
- `.accent` - Uses selected accent color
- `.text-ctp-*` - Uses Catppuccin color tokens
- `.bg-ctp-*` - Background colors from theme
- `.border-ctp-*` - Border colors from theme

---

## Summary

This update transforms the homepage into a professional portfolio landing page with:
- ✅ Terminal-style navigation with `~ /` and blinking cursor
- ✅ Clean hero section with Jason Cameron's info
- ✅ Theme selector positioned below content (not in navigation)
- ✅ Full Catppuccin theme integration
- ✅ Responsive design (mobile to desktop)
- ✅ Reusable components for future pages
- ✅ Minimal, focused design that prioritizes content

The design is minimal, professional, and terminal-inspired, putting the focus squarely on the content while providing an excellent foundation for expanding the portfolio with additional pages.

## Key Design Decisions

1. **Navigation** - Kept ultra-minimal (just ~ /) to avoid clutter
2. **Typography** - Used moderate sizes for better readability
3. **Theme Selector** - Moved below content to keep top area clean
4. **Layout** - Single container with max-width for focused reading
5. **Animation** - Smooth blinking cursor (1.2s ease-in-out) for terminal feel
