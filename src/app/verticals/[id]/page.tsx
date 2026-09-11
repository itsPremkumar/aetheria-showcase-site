'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getVertical, verticals } from '@/data/verticals';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function VerticalDetailPage() {
  const params = useParams();
  const vertical = getVertical(params.id as string);

  if (!vertical) {
    return (
      <>
        <Navbar />
        <main className="max-w-4xl mx-auto p-8">
          <h1 className="text-3xl font-bold">Vertical Not Found</h1>
          <Link href="/verticals" className="text-indigo-400 mt-4 inline-block">← Back to Verticals</Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto p-8">
        <Link href="/verticals" className="text-indigo-400 mb-4 inline-block">← Back to Verticals</Link>
        <div className="flex items-center gap-4 mb-8">
          <span className="text-6xl">{vertical.icon}</span>
          <h1 className="text-4xl font-bold">{vertical.name}</h1>
        </div>
        <p className="text-lg text-[#a0a0a0] mb-8">{vertical.description}</p>
        <h2 className="text-2xl font-bold mb-4">Features</h2>
        <ul className="grid grid-cols-2 gap-4">
          {vertical.features.map(f => (
            <li key={f} className="card">{f}</li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
