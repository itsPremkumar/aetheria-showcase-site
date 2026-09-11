import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const layers = [
  { name: 'Presentation', desc: 'Next.js + React + Tailwind CSS' },
  { name: 'API', desc: 'FastAPI REST endpoints' },
  { name: 'Knowledge Graph', desc: 'Entity extraction + relation mapping' },
  { name: 'Verticals', desc: '8 domain-specific modules' },
  { name: 'Storage', desc: 'PostgreSQL + Vector DB' },
];

export default function ArchitecturePage() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8">Architecture</h1>
        <div className="space-y-4">
          {layers.map((l, i) => (
            <div key={l.name} className="card">
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-indigo-400">{i + 1}</span>
                <div>
                  <h3 className="font-bold text-xl">{l.name}</h3>
                  <p className="text-[#a0a0a0]">{l.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
