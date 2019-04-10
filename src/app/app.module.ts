import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoriesMenuComponent } from './components/categories-menu/categories-menu.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieComponent } from './components/movie/movie.component';
import { CounterComponent } from './components/counter/counter.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CounterComponent,
    MovieComponent,
    MoviesListComponent,
    CategoriesMenuComponent,
    NavbarComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
