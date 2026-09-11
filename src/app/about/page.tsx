import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { team } from '@/data/team';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8">About Aetheria</h1>
        <p className="text-lg text-[#a0a0a0] mb-8">
          Aetheria is an open-source vertical AI knowledge graph platform built for
          domain-specific intelligence across 8 verticals.
        </p>
        <h2 className="text-2xl font-bold mb-4">Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {team.map(m => (
            <div key={m.name} className="card flex items-center gap-4">
              <span className="text-4xl">{m.avatar}</span>
              <div>
                <h3 className="font-bold">{m.name}</h3>
                <p className="text-[#a0a0a0]">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
