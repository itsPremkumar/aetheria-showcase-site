import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aetheria — Vertical AI Knowledge Graph',
  description: 'Open-source vertical AI knowledge graph platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
