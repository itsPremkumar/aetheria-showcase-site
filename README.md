# Aetheria Showcase — Next.js 14+ TypeScript Website

The official showcase website for the Aetheria Vertical AI Knowledge Graph Platform.

## Tech Stack

- **Next.js 14+** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling with dark theme
- **Lucide React** for icons

## Pages

- **Home** — Landing page with features
- **Verticals** — 8 domain-specific verticals (Healthcare, Legal, Finance, Education, Customer Service, Manufacturing, Agriculture, Research)
- **Vertical Detail** — Per-vertical feature pages
- **Projects** — Project listing
- **Project Detail** — Per-project details
- **Docs** — Documentation
- **Architecture** — System architecture
- **About** — Team information
- **Blog** — News and updates

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm start
```

## Tests

```bash
npm test
```

## Deploy

```bash
docker build -t aetheria-showcase .
docker run -p 3000:3000 aetheria-showcase
```

## License

MIT
