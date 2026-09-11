import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const posts = [
  { id: 'intro', title: 'Introducing Aetheria', date: '2026-01-15', excerpt: 'A new approach to vertical AI knowledge graphs.' },
  { id: 'v1', title: 'Aetheria v1.0 Released', date: '2026-02-01', excerpt: 'First stable release with 8 vertical domains.' },
  { id: 'future', title: 'The Future of KG', date: '2026-03-01', excerpt: 'Where we are headed next.' },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8">Blog</h1>
        <div className="space-y-6">
          {posts.map(p => (
            <article key={p.id} className="card">
              <p className="text-sm text-[#a0a0a0] mb-2">{p.date}</p>
              <h2 className="text-2xl font-bold mb-2">{p.title}</h2>
              <p className="text-[#a0a0a0]">{p.excerpt}</p>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
