import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
});

import CustomCursor from '@/components/CustomCursor';
import SmoothScroll from '@/components/SmoothScroll';
import Chatbot from '@/components/Chatbot';

import Preloader from '@/components/Preloader';

export const metadata: Metadata = {
  title: 'Athar | Senior Full Stack Engineer',
  description: 'Portfolio of Athar, a Senior Full Stack Engineer specializing in high-performance web architectures and distributed systems.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-[#0a0a0a] text-white antialiased selection:bg-emerald-500/30 selection:text-emerald-400" suppressHydrationWarning>
        <Preloader />
        <div className="bg-noise" />
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
        <Chatbot />
      </body>
    </html>
  );
}
