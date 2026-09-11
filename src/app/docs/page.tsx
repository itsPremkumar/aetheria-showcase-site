import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const docs = [
  { id: 'intro', title: 'Introduction', content: 'Aetheria is a vertical AI knowledge graph platform.' },
  { id: 'quickstart', title: 'Quick Start', content: 'Get started in 5 minutes.' },
  { id: 'api', title: 'API Reference', content: 'REST API documentation.' },
  { id: 'plugins', title: 'Plugins', content: 'Adding new verticals.' },
];

export default function DocsPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8">Documentation</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <nav className="space-y-2">
            {docs.map(d => (
              <a key={d.id} href={`#${d.id}`} className="block text-indigo-400 hover:underline">{d.title}</a>
            ))}
          </nav>
          <div className="md:col-span-2 space-y-8">
            {docs.map(d => (
              <section key={d.id} id={d.id}>
                <h2 className="text-2xl font-bold mb-2">{d.title}</h2>
                <p className="text-[#a0a0a0]">{d.content}</p>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
