export interface Skill {
  id: number;
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'cloud' | 'tools' | 'other';
  icon: string;
  proficiency: number; // 1-100
  experience?: string;
}
