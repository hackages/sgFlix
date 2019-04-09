import { Component } from '@angular/core';
import { categories } from '../mocks/categories';
import { movies } from '../mocks/movies';
import { PICTURES_CDN_URL } from '../constants/urls';
import { getGenreId, movieContainsGenre } from 'src/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories = categories;
  movies = movies;
  toggleNav = false;
  currentCategory = 'All';
  searchTerm = '';
  PICTURES_CDN_URL = PICTURES_CDN_URL;

  switchCategory = (categoryName: string): void => {
    this.currentCategory = categoryName;

    this.categories = this.categories.map(category => ({
      ...category,
      selected: category.name === categoryName
    }));

    this.filterMovies();
  };

  toggle = () => (this.toggleNav = !this.toggleNav);

  filterMovies = () => {
    this.movies = movies.filter(
      movie =>
        (this.currentCategory === 'All' ||
          movieContainsGenre(movie, getGenreId(this.currentCategory))) &&
        (!this.searchTerm ||
          movie.title.toLowerCase().includes(this.searchTerm.toLowerCase()))
    );
  };

  search = (searchTerm: string) => {
    this.searchTerm = searchTerm;
    this.filterMovies();
  };
}
