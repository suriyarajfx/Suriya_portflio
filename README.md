# Suriya K — Video Editor & Motion Designer Portfolio

A minimalist, high-impact editorial portfolio website for **Suriya K** (Video Editor & Motion Designer), built with **Next.js 14 App Router**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

The visual language, typography rhythm, and interaction system are adapted from the editorial design of [theladybug.app](https://theladybug.app/), featuring warm paper palettes, tight grotesque typography with italic serif accents, monospace eyebrows with hairline dividers, and custom video framing.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 3. Build for Production
```bash
npm run build
```

---

## 🛠️ Configuration & Customization Notes

### Replacing Video Placeholders
The project comes with real YouTube showreel embeds (`KGh7h_AyAK8`, `qRI3oK7Jrsc`) and placeholder frames formatted in the Ladybug frame style. To update any video:

1. Open [`src/components/SelectedWork.tsx`](src/components/SelectedWork.tsx).
2. For each `VideoFrame`:
   - Replace `youtubeId="YOUR_YOUTUBE_ID"` or `driveEmbedUrl="..."` with the real YouTube/Vimeo video ID.
   - Or provide `imageSrc` or `videoSrc` for direct MP4 clips.

| Section | Current Media / Placeholder | Target Prop |
| :--- | :--- | :--- |
| **Hero Showreel** | `KGh7h_AyAK8` | `youtubeId` |
| **Motion Graphic · 01** | `KGh7h_AyAK8` (CLYORO) | `youtubeId` |
| **Motion Graphic · 02 / 03** | Drive embed / Hatched slot | `youtubeId` or `driveEmbedUrl` |
| **Video Edit · 01** | `qRI3oK7Jrsc` | `youtubeId` (9:16 aspect) |
| **Video Edit · 02 / 03** | Drive embed / Hatched slot | `youtubeId` or `driveEmbedUrl` |
| **Promo Edit · 01** | Drive embed / Hatched slot | `youtubeId` or `driveEmbedUrl` |
| **YouTube Edit · 01** | Drive embed / Hatched slot | `youtubeId` or `driveEmbedUrl` |
| **Brand Identity** | TWO99 & Hatch Point | Behance Case Study links |

### Wiring the Contact Form
The contact form in [`src/components/ContactSection.tsx`](src/components/ContactSection.tsx) currently simulates client-side submissions. To connect it to a real email delivery service:
- **Option A (Formspree / Basin)**: Update the form `action` URL or POST directly to your Formspree endpoint.
- **Option B (Resend API route)**: Create `src/app/api/contact/route.ts` using the [Resend](https://resend.com) SDK.

---

## 🌐 Deploy to Vercel

This repository is pre-configured for instant zero-configuration deployment to [Vercel](https://vercel.com):

1. Push this repository to GitHub / GitLab / Bitbucket.
2. Import the repository in [Vercel Dashboard](https://vercel.com/new).
3. Framework Preset: **Next.js**.
4. Click **Deploy**.

---

## 📄 License
© 2025 Suriya Raj K. All rights reserved.
