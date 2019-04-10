import { SearchService } from './services/search.service';
import { CategoriesService } from './services/categories.service';
import { MoviesService } from './services/movies.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { PICTURES_CDN_URL } from '../constants/urls';
import { filterByCategory, filterByTitle } from 'src/utils';
import { ICategory } from 'src/types/category.type';
import { IMovie } from 'src/types/movie.type';
import { Observable, of, Subject } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  categories$!: Observable<ICategory[]>;
  movies$!: Observable<IMovie[]>;
  initialMovies$!: Observable<IMovie[]>;
  toggleNav = false;
  currentCategory = 'All';
  searchTerm$: Subject<string> = new Subject<string>();
  pictureUrl = PICTURES_CDN_URL;
  constructor(
    private moviesService: MoviesService,
    private categoriesService: CategoriesService,
    private searchService: SearchService
  ) {}

  ngOnInit() {
    // this.movies$ = this.moviesService.getMovies();
    this.initialMovies$ = this.movies$;
    this.categories$ = this.categoriesService.getCategories();
    this.movies$ = this.searchService.search(this.searchTerm$);
  }

  switchCategory = (categoryName: string): void => {
    this.currentCategory = categoryName;

    // this.categories = this.categories.map(category => ({
    //   ...category,
    //   selected: category.name === categoryName
    // }));

    this.filterMovies();
  };

  toggle = () => (this.toggleNav = !this.toggleNav);

  filterMovies = () => {
    // this.movies$ = this.initialMovies$.pipe(
    //   filter(movies => {
    //     console.log(movies);
    //     return true;
    //   })
    // );
  };

  search = () => {};
}
