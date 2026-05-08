# ICELAB — Invisible Luxury · PRD

## Original Problem Statement
Build a premium portfolio website for ICELAB — Invisible Luxury. Cinematic, minimal, editorial, futuristic, ultra-premium aesthetic inspired by luxury hospitality brands and boutique beverage studios.

- **Palette**: deep navy/black `#0E1726`, white `#FFFFFF`, ice-blue accents `#8BD7FF`, `#3A8DFF`
- **Typography**: Outfit (headings), Montserrat (body)
- **Slogan**: "INVISIBLE YET EXTRAORDINARY"
- **Audience**: luxury bars, premium restaurants, hotels, event planners

## Architecture
- **Frontend**: React 19 + Tailwind + Framer Motion (single-page landing) at `/app/frontend`
- **Backend**: FastAPI + Motor (MongoDB) + Resend at `/app/backend`
- **Email**: Resend SDK (async via `asyncio.to_thread`); sender `onboarding@resend.dev`, recipient `narangsunny65@gmail.com`
- **Routing**: All backend endpoints prefixed with `/api`; frontend uses `REACT_APP_BACKEND_URL`

## Core Requirements (static)
1. Cinematic Hero with slogan + tagline + dual CTA
2. Editorial About section with Gwalior origin story
3. Bento-grid Product Showcase: 6 ice products (Cube, Ball, Spear, Slab, Infused, Custom)
4. Process / Craftsmanship 4-step section
5. Brand Values (Pure Ice, Premium Quality, Consistently Clear, Artisan Crafted) with line icons
6. Testimonials carousel
7. Contact / Inquiry form with email delivery
8. Mobile-responsive, smooth scroll, subtle Framer Motion reveals

## User Personas
- **Beverage Director / Head Bartender** — needs reliable supply of bar-grade clear ice
- **Hospitality Buyer** (hotel F&B) — bulk + custom format procurement
- **Event Planner / Brand Activator** — bespoke embossed ice for launches
- **Press / Trade** — story discovery and contact

## Implemented (2026-05-08)
- ✅ FastAPI server with `/api/health`, `/api/`, `/api/status`, `/api/inquiries` (POST/GET)
- ✅ Resend integration with HTML-escaped, brand-styled email template
- ✅ Inquiries persisted in MongoDB with `email_sent` flag
- ✅ Full landing: Navbar, Hero, About, Marquee, Products (bento), Process, Values, Testimonials, Contact, Footer
- ✅ Framer Motion scroll reveals + mobile menu + carousel
- ✅ Tailwind theme with `ice.*` colour tokens, Outfit + Montserrat fonts, custom scrollbar
- ✅ All interactive elements have `data-testid` attributes
- ✅ E2E tested via testing_agent_v3 (100% backend, 100% frontend)

## Backlog
### P1
- Admin dashboard for `/api/inquiries` (read-only auth-protected listing)
- Sender domain verification in Resend (replace `onboarding@resend.dev` with `hello@icelab.co`)
- Rate-limit `/api/inquiries` (slowapi) to prevent spam/email cost abuse

### P2
- Press kit / downloadable brand assets section
- Multilingual (EN/HI) toggle
- Cocktail-pairing micro-content per product
- WhatsApp / Instagram social proof feed
- SEO meta tags + Open Graph imagery
