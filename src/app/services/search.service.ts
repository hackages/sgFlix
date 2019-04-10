import { SearchByTitleUrl } from './urls.service';
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMovie } from 'src/types/movie.type';
import { switchMap, startWith } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class SearchService {
  constructor(
    private http: HttpClient,
    @Inject(SearchByTitleUrl.provide) private searchByTitleUrl: string
  ) {}

  search(term$: Observable<string>): Observable<IMovie[]> {
    return term$.pipe(
      startWith(''),
      switchMap(term => this.http.get<IMovie[]>(this.searchByTitleUrl + term))
    );
  }
}
