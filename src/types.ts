export interface Project {
  id: string;
  title: string;
  area: number; // sq meters
  price: number; // rubles
  floors: number;
  bedrooms: number;
  bathrooms: number;
  category: 'up-to-100' | '100-150' | 'two-story' | 'terrace' | 'one-story';
  imageUrl: string;
  gallery: string[];
  plans: string[];
  shortDescription: string;
  fullDescription: string;
  features: Record<string, string>;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string; // HTML-like string or markdown
  date: string;
  imageUrl: string;
  author: string;
  category: string;
}

export type PageRoute = 
  | 'HOME' 
  | 'CATALOG' 
  | 'PROJECT_DETAIL' 
  | 'BLOG' 
  | 'BLOG_POST' 
  | 'SERVICES' 
  | 'CONTACTS';

export interface NavState {
  page: PageRoute;
  params?: any;
}