import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { MovieListComponent } from './movie-list/movie-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MoviesWinnersByYearComponent } from './components/movies-winners-by-year/movies-winners-by-year.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { YearsWithMultipleWinnersComponent } from './components/years-with-multiple-winners/years-with-multiple-winners.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MovieListComponent,
    MoviesWinnersByYearComponent,
    PaginatorComponent,
    YearsWithMultipleWinnersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
