export interface Vertical {
  id: string;
  name: string;
  icon: string;
  description: string;
  features: string[];
}

export const verticals: Vertical[] = [
  {
    id: 'healthcare',
    name: 'Healthcare',
    icon: '🏥',
    description: 'Medical KG with drug interactions, diagnosis support, and clinical decision support',
    features: ['Drug Interaction Detection', 'Diagnosis Support', 'Clinical Guidelines', 'Patient Data Analysis'],
  },
  {
    id: 'legal',
    name: 'Legal',
    icon: '⚖️',
    description: 'Legal entities, case law analysis, and contract intelligence',
    features: ['Case Law Analysis', 'Contract Review', 'Legal Research', 'Compliance Monitoring'],
  },
  {
    id: 'finance',
    name: 'Finance',
    icon: '💰',
    description: 'Financial instruments, market analysis, and risk assessment',
    features: ['Risk Analysis', 'Market Intelligence', 'Fraud Detection', 'Portfolio Optimization'],
  },
  {
    id: 'education',
    name: 'Education',
    icon: '📚',
    description: 'Learning paths, concept mapping, and personalized education',
    features: ['Learning Path Generation', 'Concept Mapping', 'Quiz Generation', 'Student Analytics'],
  },
  {
    id: 'customer-service',
    name: 'Customer Service',
    icon: '🎧',
    description: 'Support knowledge base and intelligent ticket routing',
    features: ['Ticket Routing', 'Response Suggestions', 'Knowledge Base', 'Sentiment Analysis'],
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    icon: '🏭',
    description: 'Supply chain optimization and quality control',
    features: ['Supply Chain Optimization', 'Quality Control', 'Predictive Maintenance', 'Process Automation'],
  },
  {
    id: 'agriculture',
    name: 'Agriculture',
    icon: '🌾',
    description: 'Crop management, soil analysis, and weather forecasting',
    features: ['Crop Management', 'Soil Analysis', 'Weather Forecasting', 'Pest Detection'],
  },
  {
    id: 'research',
    name: 'Research',
    icon: '🔬',
    description: 'Academic papers, citations, and discovery acceleration',
    features: ['Literature Review', 'Citation Analysis', 'Research Trends', 'Collaboration Network'],
  },
];

export function getVertical(id: string): Vertical | undefined {
  return verticals.find(v => v.id === id);
}
