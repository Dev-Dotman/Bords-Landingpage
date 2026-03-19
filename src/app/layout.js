import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

export const metadata = {
  title: "BORDS | Visual Productivity Platform",
  description: "Organize tasks, ideas, and projects with drag-and-drop boards, sticky notes, and checklists — all in a flexible, minimalist workspace.",
  keywords: "productivity, task management, kanban, visual workspace, project management, sticky notes, drag and drop",
  authors: [{ name: "AXECORE Labs" }],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://bords.co"),
  openGraph: {
    title: "BORDS | Visual Productivity Platform",
    description: "Organize tasks, ideas, and projects with drag-and-drop boards, sticky notes, and checklists.",
    type: "website",
    locale: "en_US",
    siteName: "BORDS",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BORDS — Visual Productivity Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BORDS | Visual Productivity Platform",
    description: "Organize tasks, ideas, and projects with drag-and-drop boards, sticky notes, and checklists.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export const viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased`}
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
