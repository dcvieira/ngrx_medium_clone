import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetFeedResponse } from 'src/app/globalFeed/types/getFeedResponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  constructor(private http: HttpClient) {}

  getFeed(url: string): Observable<GetFeedResponse> {
    const fullUrl = environment.apiUrl + url;
    return this.http.get<GetFeedResponse>(url);
  }
}
