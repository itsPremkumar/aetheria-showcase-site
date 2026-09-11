import { verticals, getVertical } from '@/data/verticals';
import { projects, getProject } from '@/data/projects';

describe('verticals data', () => {
  test('has 8 verticals', () => {
    expect(verticals).toHaveLength(8);
  });

  test('all verticals have required fields', () => {
    verticals.forEach(v => {
      expect(v.id).toBeDefined();
      expect(v.name).toBeDefined();
      expect(v.icon).toBeDefined();
      expect(v.description).toBeDefined();
    });
  });

  test('getVertical returns correct vertical', () => {
    const v = getVertical('healthcare');
    expect(v?.name).toBe('Healthcare');
  });

  test('getVertical returns undefined for invalid id', () => {
    const v = getVertical('invalid');
    expect(v).toBeUndefined();
  });
});

describe('projects data', () => {
  test('has projects', () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  test('all projects have required fields', () => {
    projects.forEach(p => {
      expect(p.id).toBeDefined();
      expect(p.name).toBeDefined();
      expect(p.status).toBeDefined();
    });
  });

  test('getProject returns correct project', () => {
    const p = getProject('aetheria-core');
    expect(p?.name).toBe('Aetheria Core');
  });
});
