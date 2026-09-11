import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto p-8">
        <section className="text-center py-16">
          <h1 className="text-5xl font-bold mb-4">Aetheria</h1>
          <p className="text-2xl text-[#a0a0a0] mb-8">Vertical AI Knowledge Graph Platform</p>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Build domain-specific knowledge graphs for Healthcare, Legal, Finance, Education, 
            Customer Service, Manufacturing, Agriculture, and Research.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/verticals" className="btn-primary">Explore Verticals</Link>
            <Link href="/docs" className="btn-primary bg-transparent border border-indigo-600">Documentation</Link>
          </div>
        </section>
        
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-12">
          {[
            { icon: '🧠', title: 'Multi-Domain', desc: '8 vertical domains supported' },
            { icon: '🔗', title: 'Connected', desc: 'Cross-domain entity linking' },
            { icon: '📊', title: 'Visual', desc: 'Interactive graph visualization' },
            { icon: '🚀', title: 'Open Source', desc: 'MIT licensed, community-driven' },
          ].map(f => (
            <div key={f.title} className="card text-center">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="font-bold mb-2">{f.title}</h3>
              <p className="text-[#a0a0a0]">{f.desc}</p>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
