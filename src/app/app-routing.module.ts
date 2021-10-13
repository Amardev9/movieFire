import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/core/home/home.component';
import { MovieDetailsComponent } from './components/core/movie-details/movie-details.component';
import { MoviesComponent } from './components/core/movies/movies.component';
import { TvDetailsComponent } from './components/core/tv-details/tv-details.component';
import { TvShowsComponent } from './components/core/tv-shows/tv-shows.component';



const routes: Routes = [
  {path:"",redirectTo:"/home", pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"movies", component: MoviesComponent},
  {path:"tv-shows", component: TvShowsComponent},
  {path:"movie/:id", component:MovieDetailsComponent},
  {path:"tv-show/:id", component:TvDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
