import type { Metadata, Viewport } from "next";
import { Inter_Tight, Space_Mono, Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Suriya K — Video Editor, Motion Designer & Graphic Designer",
  description:
    "Portfolio of Suriya K, a video editor, motion designer, and graphic designer based in Cuddalore, India — crafting cinematic stories and high-impact visual design.",
  keywords: [
    "Suriya K",
    "Video Editor",
    "Motion Designer",
    "Graphic Designer",
    "After Effects",
    "Premiere Pro",
    "Portfolio",
    "TWO99",
    "Visual Effects",
  ],
  authors: [{ name: "Suriya K" }],
  creator: "Suriya K",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://suriya-portflio.vercel.app/",
    title: "Suriya K — Video Editor, Motion Designer & Graphic Designer",
    description: "Crafting stories that move people. Video Editor & Motion Designer based in Cuddalore, India.",
    siteName: "Suriya K Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suriya K — Video Editor, Motion Designer & Graphic Designer",
    description: "Crafting stories that move people. Video Editor & Motion Designer based in Cuddalore, India.",
    creator: "@SuriyaRajKA",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F4F3EF" },
    { media: "(prefers-color-scheme: dark)", color: "#131211" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${interTight.variable} ${spaceMono.variable} ${instrumentSerif.variable} ${inter.variable}`}
    >
      <head>
        {/* Preconnect & DNS Prefetch to maximize video loading speeds */}
        <link rel="preconnect" href="https://player.vimeo.com" />
        <link rel="preconnect" href="https://i.vimeocdn.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://f.vimeocdn.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.youtube-nocookie.com" />
        <link rel="preconnect" href="https://i.ytimg.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://player.vimeo.com" />
        <link rel="dns-prefetch" href="https://i.vimeocdn.com" />
        <link rel="dns-prefetch" href="https://f.vimeocdn.com" />
        <link rel="dns-prefetch" href="https://www.youtube-nocookie.com" />
        <link rel="dns-prefetch" href="https://i.ytimg.com" />
        <link rel="dns-prefetch" href="https://drive.google.com" />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (typeof Element !== 'undefined') {
                  var origSetAttribute = Element.prototype.setAttribute;
                  Element.prototype.setAttribute = function(name, value) {
                    if (typeof name === 'string' && name.indexOf('bis_') === 0) return;
                    return origSetAttribute.apply(this, arguments);
                  };
                }
                var t = localStorage.getItem('suriya.theme') || 'light';
                document.documentElement.setAttribute('data-theme', t);
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[var(--paper)] text-[var(--ink)] antialiased transition-colors duration-300"
      >
        {children}
      </body>
    </html>
  );
}
