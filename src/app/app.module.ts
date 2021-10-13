import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Slider
import { SwiperModule } from 'swiper/angular';
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);


import { HomeComponent } from './components/core/home/home.component';
import { HeroComponent } from './components/core/hero/hero.component';
import { NavbarComponent } from './components/core/navbar/navbar.component';
import { SliderComponent } from './components/shared/slider/slider.component';
import { FooterComponent } from './components/core/footer/footer.component';
import { SafePipe } from './services/safe.pipe';
import { MoviesComponent } from './components/core/movies/movies.component';
import { SpinnerComponent } from './components/shared/spinner/spinner.component';
import { TvShowsComponent } from './components/core/tv-shows/tv-shows.component';
import { SearchBarComponent } from './components/shared/search-bar/search-bar.component';
import { MovieDetailsComponent } from './components/core/movie-details/movie-details.component';
import { TvDetailsComponent } from './components/core/tv-details/tv-details.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroComponent,
    NavbarComponent,
    SliderComponent,
    FooterComponent,
    SafePipe,
    MoviesComponent,
    SpinnerComponent,
    TvShowsComponent,
    SearchBarComponent,
    MovieDetailsComponent,
    TvDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SwiperModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
