export interface Project {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'beta' | 'planned';
  verticals: string[];
}

export const projects: Project[] = [
  {
    id: 'aetheria-core',
    name: 'Aetheria Core',
    description: 'Core knowledge graph engine',
    status: 'active',
    verticals: ['healthcare', 'finance', 'legal'],
  },
  {
    id: 'aetheria-dashboard',
    name: 'Aetheria Dashboard',
    description: 'Interactive visualization dashboard',
    status: 'active',
    verticals: ['healthcare', 'education'],
  },
  {
    id: 'aetheria-api',
    name: 'Aetheria API',
    description: 'RESTful API for KG access',
    status: 'active',
    verticals: ['all'],
  },
  {
    id: 'aetheria-mobile',
    name: 'Aetheria Mobile',
    description: 'Mobile KG explorer',
    status: 'planned',
    verticals: ['healthcare', 'customer-service'],
  },
  {
    id: 'aetheria-analytics',
    name: 'Aetheria Analytics',
    description: 'Advanced analytics and insights',
    status: 'beta',
    verticals: ['finance', 'manufacturing'],
  },
];

export function getProject(id: string): Project | undefined {
  return projects.find(p => p.id === id);
}
