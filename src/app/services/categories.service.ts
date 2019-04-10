import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategory } from 'src/types/category.type';

@Injectable()
export class CategoriesService {
  categoriesUrl = '/api/categories';
  constructor(private http: HttpClient) {}

  // Gets all categories from our mock server
  getCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(this.categoriesUrl);
  }
}
