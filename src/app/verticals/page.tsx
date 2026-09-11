import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { verticals } from '@/data/verticals';

export default function VerticalsPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8">Vertical Domains</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {verticals.map(v => (
            <Link key={v.id} href={`/verticals/${v.id}`} className="card hover:border-indigo-500 transition-colors">
              <div className="text-4xl mb-4">{v.icon}</div>
              <h3 className="font-bold text-xl mb-2">{v.name}</h3>
              <p className="text-[#a0a0a0]">{v.description}</p>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
