import { Profile } from './profile';

export interface Article {
  body: string;
  createAt: string;
  description: string;
  favorited: boolean;
  favoritesCount: number;
  slug: string;
  tagList: string[];
  title: string;
  updatedAt: string;
  author: Profile;
}
