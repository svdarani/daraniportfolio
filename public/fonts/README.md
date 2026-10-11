# Font System Assets & Setup Guide: Debata × Modernist

This directory contains the font assets and configuration for the **Darani Viswanathan** portfolio typographic design system.

---

## 1. Typeface Specifications

### Font A: Debata (Display Typeface)
- **Primary Role**: Expressive display typography (Hero headlines, major section titles, featured project titles, pull quotes, oversized statistics, CTA headlines).
- **Designer / Foundry**: Artiveko (Iwan Alwan).
- **Target Files**:
  - `public/fonts/debata/Debata-Regular.woff2` (and `.woff`, `.otf`, `.ttf`)
  - `public/fonts/debata/Debata-Bold.woff2` (and `.woff`, `.otf`, `.ttf`)
- **CSS Family**: `'Debata'` (Variable: `--font-debata`)
- **Fallback Stack**: `'Debata', 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif`

### Font B: Modernist / Sk-Modernist (Interface & Body Typeface)
- **Primary Role**: Structured, functional interface and supporting typography (Body text, navigation, buttons, service descriptions, project summaries, metadata, form fields, captions, timeline details).
- **Designer / Foundry**: Sean Kane Design (Sk-Modernist).
- **Target Files**:
  - `public/fonts/modernist/Sk-Modernist-Regular.woff2` (and `.woff`, `.otf`, `.ttf`)
  - `public/fonts/modernist/Sk-Modernist-Bold.woff2` (and `.woff`, `.otf`, `.ttf`)
  - `public/fonts/modernist/Sk-Modernist-Mono.woff2` (and `.woff`, `.otf`, `.ttf`)
- **CSS Family**: `'Modernist'` / `'Sk-Modernist'` (Variable: `--font-modernist`)
- **Fallback Stack**: `'Modernist', 'Sk-Modernist', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`

---

## 2. Drop-In Loading

The website is already wired with `@font-face` rules in `src/app/globals.css` and Tailwind font family utilities:
- Simply place your licensed `.woff2`, `.woff`, or `.otf` files into the respective folders:
  - `public/fonts/debata/`
  - `public/fonts/modernist/`
- As soon as the files are added, `@font-face` loads them immediately without needing any code edits or restarts.
- While the exact files are awaiting placement, the design system utilizes carefully balanced Swiss Modernist geometric fallbacks (`Space Grotesk` for Debata; `Inter` and `Manrope` for Modernist) with matching letter spacing, x-heights, and optical weights.
