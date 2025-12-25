
export interface ProjectImage {
  id: string;
  project_id: string;
  path_to_file: string;
  public_url: string;
  is_preview: boolean;
  is_plan: boolean;
  is_gallery: boolean;
  uploaded_at: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  shot_description: string;
  is_published: boolean;
  quadrature: number;
  floors: number;
  bedrooms: number;
  images: ProjectImage[];
  created_at: string;
  updated_at: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug:string;
  category: string;
  path_to_file:string;
  public_url:string;
  is_published:boolean;
  article: string;
  excerpt: string;
  created_at: string;
  updated_at: string;
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