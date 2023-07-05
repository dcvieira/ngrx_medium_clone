import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PopularTagType } from 'src/app/shared/types/popularTag.type';
import { environment } from 'src/environments/environment';
import { GetPopularTagsResponse } from '../types/getPopularTagsResponse';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PopularTagService {
  constructor(private http: HttpClient) {}

  getPopularTags(): Observable<PopularTagType[]> {
    const url = environment.apiUrl + '/tags';
    return this.http
      .get<GetPopularTagsResponse>(url)
      .pipe(map((response) => response.tags));
  }
}
