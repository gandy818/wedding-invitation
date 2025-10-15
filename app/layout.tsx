import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "관휘와 나영, 결혼합니다",
  description: "2025년 12월 27일 (토) 11:20 더베뉴지서울 1층 네이처홀",
  metadataBase: new URL("https://wedding-invitation-nygh.vercel.app/"),
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    type: "website",
    url: "https://wedding-invitation-nygh.vercel.app/",
    title: "관휘와 나영, 결혼합니다",
    description: "2025년 12월 27일 (토) 11:20 더베뉴지서울 1층 네이처홀",
    images: [
      {
        url: "/assets/images/thumbnail.jpeg",
        width: 1280,
        height: 1920,
        alt: "관휘와 나영, 결혼합니다 썸네일",
      },
    ],
  },
  viewport: {
    width: "device-width",
    initialScale: 1.0,
  },
  alternates: {
    canonical: "https://wedding-invitation-nygh.vercel.app",
  },
  verification: {},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="w-full">
      <body className="flex items-center justify-center">{children}</body>
    </html>
  );
}
