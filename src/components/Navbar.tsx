'use client';

import Link from 'next/link';

const navLinks = [
  { href: '/verticals', label: 'Verticals' },
  { href: '/projects', label: 'Projects' },
  { href: '/docs', label: 'Docs' },
  { href: '/architecture', label: 'Architecture' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
];

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 border-b border-[#374151] bg-[#16213e]">
      <Link href="/" className="text-xl font-bold">🧠 Aetheria</Link>
      <div className="flex gap-4">
        {navLinks.map(link => (
          <Link key={link.href} href={link.href} className="text-[#eaeaea] hover:text-indigo-400 transition-colors">
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
