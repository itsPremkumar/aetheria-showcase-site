'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getProject, projects } from '@/data/projects';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function ProjectDetailPage() {
  const params = useParams();
  const project = getProject(params.id as string);

  if (!project) {
    return (
      <>
        <Navbar />
        <main className="max-w-4xl mx-auto p-8">
          <h1 className="text-3xl font-bold">Project Not Found</h1>
          <Link href="/projects" className="text-indigo-400 mt-4 inline-block">← Back to Projects</Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto p-8">
        <Link href="/projects" className="text-indigo-400 mb-4 inline-block">← Back to Projects</Link>
        <h1 className="text-4xl font-bold mb-4">{project.name}</h1>
        <p className="text-lg text-[#a0a0a0] mb-4">{project.description}</p>
        <span className={`text-sm px-3 py-1 rounded ${project.status === 'active' ? 'bg-green-900' : project.status === 'beta' ? 'bg-yellow-900' : 'bg-gray-700'}`}>
          {project.status}
        </span>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Verticals</h2>
          <div className="flex gap-2">
            {project.verticals.map(v => (
              <span key={v} className="card text-sm">{v}</span>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
