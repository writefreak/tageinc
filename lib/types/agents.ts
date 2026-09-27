export interface AgentFollower {
  id: string;
  name: string;
  avatarUrl: string;
}

export interface AgentReview {
  id: string;
  reviewerName: string;
  avatarUrl: string;
  rating: number;
  comment: string;
  date: string;
}

export interface AgentSocialLinks {
  instagram?: string;
  whatsapp?: string;
  website?: string;
  phone?: string;
}

export interface Agent {
  id: string;
  name: string;
  avatarUrl: string;
  coverImage: string;
  about: string;
  location: string;
  social: AgentSocialLinks;
  followersCount: number;
  ratingAverage: number;
  reviewCount: number;
  followers: AgentFollower[];
  reviews: AgentReview[];
}
