import { SearchByTitleUrl, MoviesUrl } from './services/urls.service';
import { CategoriesService } from './services/categories.service';
import { MoviesService } from './services/movies.service';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoriesMenuComponent } from './components/categories-menu/categories-menu.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieComponent } from './components/movie/movie.component';
import { CounterComponent } from './components/counter/counter.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { ShortenPipe } from './shorten.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CounterComponent,
    MovieComponent,
    MoviesListComponent,
    CategoriesMenuComponent,
    NavbarComponent,
    ShortenPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forFeature(InMemoryDataService)
  ],
  providers: [MoviesService, CategoriesService, SearchByTitleUrl, MoviesUrl],
  bootstrap: [AppComponent]
})
export class AppModule {}
