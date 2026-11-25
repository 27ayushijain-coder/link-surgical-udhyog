# Design Brief & Brand Identity Guide: Link Surgical Udhyog

**Document Version:** 2.0  
**Target Project:** Link Surgical Udhyog Website  
**Firm Location:** Ratwai Village, Gwalior District, Madhya Pradesh (Est. 2020)  
**Business Profile:** Sole proprietorship cotton manufacturing unit (10 daily wage workers, 1 supervisor)  
**Core Purpose:** Drive B2B price quote enquiries, bulk orders, phone calls, and WhatsApp chats from medical stockists, surgical shops, pharmacies, nursing homes, and puja wicks wholesalers across Madhya Pradesh and neighboring regions.

---

## 1. Colour Palette

The color system is engineered to balance two distinct market expectations: medical-grade hygiene for surgical cotton rolls, and honest, approachable factory dealing for regional wholesalers.

| Role | Colour Name | HEX Code | RGB | Primary Purpose & Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Primary** | Industrial Navy | `#0F3A5D` | `15, 58, 93` | Headers, primary titles, authority badges, footer backgrounds, high-contrast structural framing. |
| **Accent** | Surgical Clean Teal | `#0D9488` | `13, 148, 136` | Primary action buttons ("Request a Quote"), active tabs, net-weight badges, key trust highlights. |
| **Dark Text** | Deep Slate Charcoal | `#1E293B` | `30, 41, 59` | Body text, headings, input field entries, table copy (high contrast, WCAG AAA compliant on white). |
| **Neutral 1** | Soft Cotton Cream | `#FBF9F5` | `251, 249, 245` | Main page background, subtle section alternating strips; evokes soft natural cotton fiber without screen glare. |
| **Neutral 2** | Combed Fiber Border | `#E8E4DA` | `232, 228, 218` | Card borders, table gridlines, divider rules, and input field strokes; provides warm, non-sterile structure. |

*Functional Companion Accent:* `#25D366` (WhatsApp Green) strictly designated for one-click WhatsApp quote buttons.

**Palette Rationale (One Line):**  
*This palette pairs deep industrial navy for enterprise reliability with clinical surgical teal for hygiene and clean handling, balanced over soft warm cotton neutrals to evoke natural cotton purity without looking cold or artificial.*

---

## 2. Typography System

The typography uses two versatile Google Fonts designed for high legibility on mobile screens, data density in specification tables, and clean hierarchy.

* **Headings & Key Callouts:** **Plus Jakarta Sans** (Weights: `600 SemiBold`, `700 Bold`, `800 ExtraBold`) — Sturdy geometric grotesque with open apertures and friendly curves.
* **Body, Tables & Form Inputs:** **Inter** (Weights: `400 Regular`, `500 Medium`, `600 SemiBold`) — Maximum legibility at small sizes, tall x-height, and neutral precision.

### Type Scale Hierarchy

| Element | Desktop Size | Mobile Size | Line Height | Weight | Letter Spacing | Font Family |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **H1** | `2.5rem` (40px) | `1.875rem` (30px) | `1.2` | `800` | `-0.025em` | Plus Jakarta Sans |
| **H2** | `1.875rem` (30px) | `1.4rem` (22.4px) | `1.25` | `700` | `-0.015em` | Plus Jakarta Sans |
| **H3** | `1.25rem` (20px) | `1.15rem` (18.4px) | `1.35` | `700` | `0` | Plus Jakarta Sans |
| **Body Text** | `1.0rem` (16px) | `0.9375rem` (15px) | `1.6` | `400` / `500` | `0` | Inter |
| **Small Text / Captions** | `0.8125rem` (13px) | `0.75rem` (12px) | `1.45` | `500` / `600` | `+0.01em` | Inter |
| **Data / Badges** | `0.75rem` (12px) | `0.7rem` (11.2px) | `1.2` | `700` | `+0.04em` | Inter (Uppercase) |

---

## 3. Spacing Scale

Based on an 8-point harmonic grid (with 4px half-steps) to maintain disciplined layout rhythm and prevent cluttered mobile views.

| Token | Value (rem / px) | Specific Application |
| :--- | :--- | :--- |
| **`space-2xs`** | `0.25rem` (4px) | Gap between inline icons and text, pill badge padding, sub-label margins. |
| **`space-xs`** | `0.5rem` (8px) | Form input label-to-field gap, button icon offset, table inner padding. |
| **`space-sm`** | `0.75rem` (12px) | Card sub-element spacing, dual-button gap in pack size cards. |
| **`space-md`** | `1.0rem` (16px) | Standard content gutters, form row spacing, compact card interior padding. |
| **`space-lg`** | `1.5rem` (24px) | Standard card padding on mobile, spacing below H2 headings, column gutters. |
| **`space-xl`** | `2.0rem` (32px) | Mobile section top/bottom padding, desktop card padding, hero text-to-CTA gap. |
| **`space-2xl`** | `3.0rem` (48px) | Desktop section padding, gap between main product showcases. |
| **`space-3xl`** | `4.0rem` (64px) | Prominent homepage hero top/bottom padding and major page transitions. |

---

## 4. Button Styles

All buttons are built with a minimum touch-target height of `46px` on mobile, high-contrast labels, and clear interactive feedback.

### 1. Primary CTA Button ("Request a Quote")
* **Appearance:** Solid Teal (`#0D9488`), crisp white text, bold font (`Inter 700`, `15px`).
* **Dimensions:** Vertical padding `0.75rem` (12px), horizontal padding `1.4rem` (22px), border radius `8px`.
* **State Behavior:**
  * *Hover:* Color deepens to `#0F766E` with a `1px` upward translate and soft shadow (`0 4px 10px rgba(13, 148, 136, 0.25)`).
  * *Active/Tap:* Returns to position with slight depression (`transform: scale(0.98)`).
  * *Focus:* `3px` visible outline in teal with `2px` white offset.

### 2. Secondary CTA Button ("Explore Products" / "View Sizes")
* **Appearance:** White background (`#FFFFFF`), solid `1.5px` border in Industrial Navy (`#0F3A5D`), navy text (`Inter 700`, `15px`).
* **Dimensions:** Vertical padding `0.75rem` (12px), horizontal padding `1.25rem` (20px), border radius `8px`.
* **State Behavior:**
  * *Hover:* Background shifts to very pale navy tint (`rgba(15, 58, 93, 0.05)`), border color remains crisp.

### 3. WhatsApp Contact Button
* **Appearance:** Solid WhatsApp Green (`#25D366`), white text, bold font (`Inter 700`), accompanied by an inline SVG WhatsApp chat icon (`18px`).
* **Dimensions:** Vertical padding `0.75rem` (12px), horizontal padding `1.25rem` (20px), border radius `8px`.
* **State Behavior:**
  * *Hover:* Darkens to `#1EBE5D` with subtle glow (`0 4px 12px rgba(37, 211, 102, 0.35)`).

### 4. Click-to-Call Button
* **Appearance:** Pale soft-blue tint (`#F0F7FF`) with a `1px` border in `#BAE6FD`, navy text (`#0F3A5D`), phone handset SVG icon (`18px`).
* **Dimensions:** Vertical padding `0.7rem` (11px), horizontal padding `1.15rem` (18px), border radius `8px`.
* **State Behavior:**
  * *Hover:* Shifts to `#E0F2FE` with darker blue text (`#0369A1`).

---

## 5. Card Styles

Cards structure the dense specifications so wholesale buyers can scan grammage, master bundle counts, and weight formats instantly.

### 1. Surgical Cotton Rolls Cards
* **Container:** Crisp white surface (`#FFFFFF`), `1px` border in Combed Fiber Neutral (`#E8E4DA`), rounded corners (`12px`), soft shadow (`0 2px 6px rgba(15, 23, 42, 0.04)`).
* **Media Segment:** Dedicated product image box featuring authentic factory photos (`cotton-roll-500g.jpg`, `cotton-roll-80gx6.jpg`, etc.) with `object-fit: cover` and a subtle top badge (`Absorbent Cotton Wool I.P.`).
* **Weight Badging:** Prominent badges:
  * *Net Weight Badge:* Soft blue background (`#E0F2FE`), deep cyan text (`#0369A1`).
  * *Gross & Net Dual Badge:* Soft amber background (`#FEF3C7`), dark amber text (`#92400E`).
* **Action Footer:** Inline "Request Quote" buttons that pass parameters directly into the quote form.

### 2. Cotton Wicks Cards
* **Container:** Crisp white background with warm border neutral (`#E8E4DA`), `12px` border radius, subtle top accent bar in warm gold (`#D97706`) to distinguish from medical rolls.
* **Layout:** Displays master packet details prominently (e.g., `25 gm Pack — 6 pieces per packet` or `40 gm Pack — 12 pieces per packet`).
* **Action Footer:** Direct button triggers configured for quick WhatsApp quotation.

### 3. Manufacturing Process Cards
* **Container:** Horizontal flow card on desktop, vertical stacked on mobile. White background with a distinct numbered indicator circle (`40px × 40px`, solid teal with bold white number).
* **Content:** Clear bold step title (`H3`), followed by practical, unexaggerated descriptions of scouring, bleaching, drying, carding, interleaving, and manual scale checks.

### 4. Why Choose Us (Pillars) Cards
* **Container:** 4-card responsive grid. Clean white background, `10px` border radius, soft ambient border (`#E8E4DA`).
* **Icon Box:** Square icon container (`42px × 42px`) with rounded `8px` corners in pale teal (`#F0FDFA`), housing simple line-art SVG icons (factory outline, weighing scale, hygiene check, direct truck dispatch).
* **Typography:** Bold `18px` header, `14px` concise body text explaining factory-direct economics and zero middlemen commission.

### 5. Business Enquiry Information Cards
* **Container:** Darker high-trust framing using Industrial Navy background (`#0F3A5D`) with white text, or pale warm-stone card (`#F7F5F0`) with dark navy accents.
* **Structure:** Groups direct phone dialer, WhatsApp direct link, factory physical address in Ratwai, business operating hours, and official GSTIN (`23AHHPJ8138Q1ZT`).

---

## 6. Form Field Styles (Bulk Price Quote Engine)

The quotation form is the primary conversion engine of the site. It must feel lightweight, frictionless, and effortless to complete on one hand while using a mobile phone.

### Form Fields Included
1. **Full Name:** Text input (`placeholder="e.g. Ramesh Sharma"`)
2. **Business / Shop Name:** Text input (`placeholder="e.g. Sharma Medical & Surgical"`)
3. **Phone Number:** Tel input (`placeholder="e.g. 98260 12345"` with 10-digit Indian pattern)
4. **Delivery Location / City:** Text input (`placeholder="e.g. Gwalior / Morena / Indore"`)
5. **Product of Interest:** Select dropdown (`Surgical Cotton Rolls` / `Cotton Wicks`)
6. **Pack Size Variant:** Dynamic select dropdown populated based on product chosen
7. **Approximate Order Quantity:** Text input (`placeholder="e.g. 50 rolls / 200 packets / 5 cartons"`)
8. **Message / Notes:** Textarea (`placeholder="Mention Net vs Gross preference, delivery urgency..."`)

### Visual Specifications
* **Input Height:** `48px` standard (comfortable touch target, no mis-clicks).
* **Surface Background:** Pure White (`#FFFFFF`).
* **Default Border:** `1px` solid `#D1D5DB` (accessible 3:1 contrast against white).
* **Border Radius:** `8px` smooth corners.
* **Typography:** Input text `16px` (strictly avoids automatic iOS Safari viewport zoom-in), color `#1E293B`.
* **Field Spacing:** `1.15rem` (18px) vertical gap between rows.
* **Label Style:** Positioned above the field in bold `14px` (`Inter 600`), color `#0F3A5D`, with red asterisk (`#DC2626`) for mandatory fields.
* **Focus State:** Active border shifts to Surgical Teal (`#0D9488`) backed by a soft glow ring (`box-shadow: 0 0 0 3px rgba(13, 148, 136, 0.18)`).
* **Error Message Style:** Deep red border (`#DC2626`) with an inline warning icon and small red helper text (`12px`, `#DC2626`) below the field.
* **Submit Action Buttons:** Dual action:
  * Primary full-width button: Solid Teal (`#0D9488`) "Submit Price Quote Request".
  * Secondary WhatsApp direct button: Solid Green (`#25D366`) "Send Directly via WhatsApp".

---

## 7. Mobile-First Responsive Breakpoints

The website is designed mobile-first using pure CSS media queries with clean upward progressive enhancement.

```css
/* Base styles: Small mobile phones (< 480px) */

@media (min-width: 480px)  { /* Large mobile phones */ }
@media (min-width: 640px)  { /* Tablets (Portrait) */ }
@media (min-width: 768px)  { /* Tablets (Landscape) / Small Laptops */ }
@media (min-width: 1024px) { /* Desktops */ }
@media (min-width: 1280px) { /* Large Desktop Screens */ }
```

### Breakpoint Adaptation Specifications

| Viewport Range | Screen Category | Layout & Component Behavior |
| :--- | :--- | :--- |
| **`< 480px`** | Small Mobile (e.g. iPhone SE, Galaxy A) | • Single-column layout for all sections.<br>• Typography: H1 scaled to `28px`, body `15px`.<br>• Sticky bottom conversion bar fixed at bottom (`Call`, `WhatsApp`, `Form`).<br>• Full-width buttons (`width: 100%`).<br>• Collapsible hamburger drawer menu.<br>• Pack size variants display in stacked single-column cards. |
| **`480px – 639px`** | Large Mobile (e.g. iPhone Pro Max, OnePlus) | • Hero CTA buttons switch from vertical stack to side-by-side row.<br>• Pack size cards format into 2-column grid.<br>• Form rows pair Name and Business Name side-by-side. |
| **`640px – 767px`** | Tablet (Portrait) | • 2-column grid for "Why Choose Us" and team stats.<br>• Product showcase displays image and details side-by-side.<br>• Specification tables enable smooth horizontal touch swipe. |
| **`768px – 1023px`** | Tablet (Landscape) / Small Laptop | • Main navigation switches to full horizontal links; hamburger hidden.<br>• Sticky mobile bottom bar unmounts; floating desktop WhatsApp button appears at bottom-right.<br>• Contact page splits into 2-column view (Details left, Form right). |
| **`1024px – 1279px`** | Standard Desktop | • Fixed container width of `1140px` with automatic margin centering.<br>• 4-column grid for "Why Choose Us" pillars.<br>• 3-column footer layout (Brand summary, Quick links, Factory address).<br>• Section vertical padding expands to `48px`. |
| **`≥ 1280px`** | Large Desktop | • Spacious `64px` section padding.<br>• Maximum readability line length constrained to `72ch` for text blocks.<br>• Enhanced hover micro-interactions on cards and table rows. |

---

## 8. Overall Design Direction & Brand Personality

### What the Design Must Communicate
1. **Direct Factory Dealing:** No retail fluff, no trading agency pretense. Visitors must immediately understand they are dealing directly with the owner and supervisor of a manufacturing plant in Ratwai Village, Gwalior.
2. **Clean & Supervised Handling:** Pristine white photography, soft cotton tones, and medical teal badges convey cleanliness, proper storage, and careful sheet carding.
3. **Weight Transparency:** The distinction between Net Weight and Gross Weight is treated as a major trust pillar, displayed clearly on cards, tables, and banners.
4. **Dependable Regional Supply:** Clear emphasis on prompt dispatches across Gwalior, Chambal division, Morena, Bhind, Shivpuri, Datia, and neighboring routes.

### Strict Design Exclusions (What to Avoid)
* **NO CSS Frameworks or Bloated Libraries:** Zero Bootstrap, Tailwind, or jQuery. Plain semantic HTML5, clean vanilla CSS variables, and lightweight vanilla JavaScript only.
* **NO Excessive Animations:** No parallax scrolls, bouncing elements, or intrusive modal popups that frustrate busy wholesale buyers.
* **NO Overcrowded Dark Mode:** Maintain a clean, bright, light design in white and soft cotton tones.
* **NO Unsupported Claims:** Strictly no invented certifications (no unverified ISO, CE, or WHO-GMP badges), no claims of massive automated plants, and no claims of international export.
* **NO Small Tap Targets:** Every interactive phone number, WhatsApp link, and form input must be instantly tappable on mobile screens.

---

## 9. Implementation Checklist Across All 6 Pages

* [x] **Global Shared Files:** One shared `style.css` and one shared `script.js` referenced uniformly.
* [x] **GST Compliance:** Official GSTIN `23AHHPJ8138Q1ZT` displayed in footer across all 6 pages.
* [x] **Mobile Sticky Bar:** Persistent `Call Factory`, `WhatsApp Quote`, and `Enquiry Form` buttons on viewports `< 768px`.
* [x] **Local SEO Architecture:** Semantic `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>` markup with schema.org structured data.
* [x] **Image Performance:** Compressed Web/JPEG images (`loading="lazy"` below fold) with descriptive alt text showing authentic product pack markings (`Mfg. Lic. No. 25/7/2007/MP`).
