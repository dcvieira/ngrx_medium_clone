import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import {
  selectError,
  selectIsLoading,
  selectPopularTagsData,
} from './store/reducers';
import { popularTagsActions } from './store/actions';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ErrorMessageComponent } from '../errorMessage/errorMessage.component';
import { LoadingComponent } from '../loading/laoding.component';

@Component({
  selector: 'app-popular-tags',
  templateUrl: './popularTags.component.html',
  standalone: true,
  imports: [CommonModule, ErrorMessageComponent, LoadingComponent, RouterLink],
})
export class PopularTagsComponent implements OnInit {
  constructor(private store: Store) {}

  data$ = combineLatest({
    isLoading: this.store.select(selectIsLoading),
    error: this.store.select(selectError),
    popularTags: this.store.select(selectPopularTagsData),
  });

  ngOnInit(): void {
    this.store.dispatch(popularTagsActions.getPopularTags());
  }
}
