export interface TeamMember {
  name: string;
  role: string;
  avatar: string;
}

export const team: TeamMember[] = [
  { name: 'Aetheria Team', role: 'Core Team', avatar: '🧠' },
  { name: 'Contributors', role: 'Open Source', avatar: '👥' },
];
