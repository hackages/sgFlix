import { environment } from './../../environments/environment';

export const SearchByTitleUrl = {
  provide: 'SearchByTitleUrl',
  useValue: 'app/movies/?title='
};
export const MoviesUrl = {
  provide: 'MoviesUrl',
  useValue: environment.production ? '' : 'api/movies'
};
