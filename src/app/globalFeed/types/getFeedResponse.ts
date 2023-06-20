import { Article } from 'src/app/shared/types/article';

export interface GetFeedResponse {
  articles: Article[];
  articlesCpunt: number;
}
