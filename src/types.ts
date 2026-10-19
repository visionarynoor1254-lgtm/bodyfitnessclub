export interface ProgramDetail {
  id: string;
  title: string;
  headline: string;
  description: string;
  image: string;
  fallbackImage?: string;
  alt: string;
  focusAreas: string[];
  equipment: string[];
  structure: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  priceNote: string;
  duration: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

export interface FacilityItem {
  id: string;
  title: string;
  description: string;
  details: string[];
  image: string;
  fallbackImage?: string;
  badge: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  fallbackSrc?: string;
  title: string;
  caption: string;
  aspect: 'portrait' | 'landscape' | 'square';
}
