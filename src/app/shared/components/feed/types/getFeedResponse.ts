import { Article } from 'src/app/shared/types/article';

export interface GetFeedResponse {
  articles: Article[];
  articlesCount: number;
}
