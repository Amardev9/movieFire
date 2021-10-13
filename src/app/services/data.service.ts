import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  API_KEY:string = "7cb0ee5cee0d2ce0c9b3915ecff76ffa";

  // Movies
  popularMovies:string = `https://api.themoviedb.org/3/movie/popular?api_key=${this.API_KEY}&language=en-US&page=1`;
  comedyMovies:string = `https://api.themoviedb.org/3/discover/movie?api_key=${this.API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=35&page=1`;

  // TV Shows
  popularShows:string = `https://api.themoviedb.org/3/tv/popular?api_key=${this.API_KEY}&language=en-US&page=1`;
  animatedShows:string = `https://api.themoviedb.org/3/discover/tv?api_key=${this.API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=16&page=1`;

  // Movies & TV shows
  search:string = `https://api.themoviedb.org/3/search/multi?api_key=${this.API_KEY}&language=en-US&page=1&include_adult=false`;

  constructor( private http: HttpClient) { }

  getPopularMovies(){
    return this.http.get<any>(this.popularMovies);
  }

  getPopularTvShows(){
    return this.http.get<any>(this.popularShows);
  }

  getAnimatedShows(){
    return this.http.get<any>(this.animatedShows);
  }


  getMovieDetails(movieID:any){
    return this.http.get<any>(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${this.API_KEY}&language=en-US&append_to_response=credits,reviews,videos`);
  }

  getTvShowDetails(movieID:any){
    return this.http.get<any>(`https://api.themoviedb.org/3/tv/${movieID}?api_key=${this.API_KEY}&language=en-US&append_to_response=credits,reviews,videos`);
  }


  getComedyMovies(){
    return this.http.get<any>(this.comedyMovies);
  }

  getFilteredMovies(sortBy:string,page:any,genre:any,year:any){
    return this.http.get<any>(`https://api.themoviedb.org/3/discover/movie?api_key=${this.API_KEY}&language=en-US&sort_by=${sortBy}&include_video=false&page=${page}&${genre}&${year}`);
  }

  getFilteredTvShows(sortBy:string,page:any,genre:any,year:any){
    return this.http.get<any>(`https://api.themoviedb.org/3/discover/tv?api_key=${this.API_KEY}&language=en-US&sort_by=${sortBy}&include_video=false&page=${page}&${genre}&${year}`);
  }

  getSearched(input:any){
    return this.http.get<any>(`https://api.themoviedb.org/3/search/multi?api_key=${this.API_KEY}&language=en-US&page=1&include_adult=false&query=${input}`);
  }
  
}
