import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(p => (
            <Link key={p.id} href={`/projects/${p.id}`} className="card hover:border-indigo-500 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-xl">{p.name}</h3>
                <span className={`text-xs px-2 py-1 rounded ${p.status === 'active' ? 'bg-green-900' : p.status === 'beta' ? 'bg-yellow-900' : 'bg-gray-700'}`}>
                  {p.status}
                </span>
              </div>
              <p className="text-[#a0a0a0]">{p.description}</p>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
