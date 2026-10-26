export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  images?: string[];
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: 'ai' | 'real-time' | 'content' | 'ecommerce';
  isFeatured: boolean;
  challenges?: string[];
  solutions?: string[];
}
