import { MoviesUrl } from './urls.service';
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMovie } from 'src/types/movie.type';

@Injectable()
export class MoviesService {
  constructor(
    private http: HttpClient,
    @Inject(MoviesUrl.provide) private moviesUrl: string
  ) {
    console.log(this.moviesUrl);
  }

  // Gets all the movies from our mock server
  getMovies(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(this.moviesUrl);
  }

  // Gets a movie by its id from our mock server
  getMovie(id: number): Observable<IMovie> {
    throw 'not implemented';
  }
}
