import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '결혼합니다',
  description: ' 결혼합니다',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      // className="bg-[#E7DFDA]"
      >
        {children}
      </body>
    </html>
  );
}
