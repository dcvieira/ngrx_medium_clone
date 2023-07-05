import { PopularTagType } from './popularTag.type';
import { Profile } from './profile';

export interface Article {
  body: string;
  createAt: string;
  description: string;
  favorited: boolean;
  favoritesCount: number;
  slug: string;
  tagList: PopularTagType[];
  title: string;
  updatedAt: string;
  author: Profile;
}
