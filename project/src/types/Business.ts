export interface Business {
  id: string;
  name: string;
  category: string;
  rating: number;
  reviews: number;
  address: string;
  phone: string;
  image: string;
  isOpen: boolean;
  verified: boolean;
  featured: boolean;
  description?: string;
  website?: string;
  email?: string;
}