import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { SwiperOptions } from 'swiper';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MovieDetailsComponent implements OnInit {
  doesDataExist:boolean = false;
  doesTrailerExist = true;
  doesReviewsExist = true;
  details:any;
  cast:any;
  reviews:any;
  crew:any ={
    director: [],
    producer: [],
    writers: [],
    music: [],
  }

  trailers:any;
  trailerKey:any;
  youtubePath:string = "https://www.youtube.com/embed/";
  trailerULR:string  = this.youtubePath;
  imagePath:string = "https://image.tmdb.org/t/p/w342";
  imagePathProfile:string = "https://image.tmdb.org/t/p/w185";
  
  constructor(private dataService: DataService, private ActivedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // Get movide id from ulr
    let movieID = this.ActivedRoute.snapshot.params.id;
    this.movieDetails(movieID);
  }

  movieDetails(id:any){
    this.dataService.getMovieDetails(id).subscribe(data => {
      this.details = data;
      // get reviews
      this.getReviews(data);
      // Get trailers and default(first) trailer
      this.getTrailers(data);
      // get and sort Cast
      this.sortCast(data.credits.cast);
      // get and filter crew
      this.filterCrew(data.credits.crew);
      this.doesDataExist = true;
    })
  }


  config: SwiperOptions = {
    slidesPerView: 'auto',
    spaceBetween: 5,
    grabCursor: true,
  };

  filterTrailers(videos:any){
    return videos.filter((video:{type:string;}) => video.type == 'Trailer');
  }

  sortCast(cast:any){

    let popularCast = cast.sort((a: { popularity: number; },b: { popularity: number; })=>{
      return b.popularity - a.popularity;
    })

    this.cast = popularCast;
  }

  filterCrew(crew:any){
    this.crew.director = crew.filter((person:{job:string;}) => person.job == 'Director');
    this.crew.producer = crew.filter((person:{job:string;}) => person.job == 'Producer');
    this.crew.writers = crew.filter((person:{department:string}) => person.department == 'Writing');
    this.crew.music = crew.filter((person:{job:string;}) => person.job == 'Original Music Composer');
  }

  getTrailers(data:any){
    if(data.videos.results.length > 0){
      this.trailers = this.filterTrailers(data.videos.results);
      if(this.trailers.length > 0){
        this.trailers.reverse();
        this.trailerKey = this.trailers[0].key;
        this.trailerULR += this.trailerKey;
      }else{
        this.doesTrailerExist = false;
      }
      
    }else{
      this.doesTrailerExist = false;
    }
  }

  playTrailer(e:any,trailerNumber:any){
    this.trailerKey = this.trailers[trailerNumber].key;
    this.trailerULR = 'https://www.youtube.com/embed/' + this.trailerKey;
  }
  
  getReviews(data:any){
    this.reviews = data.reviews.results;
    if(this.reviews.length == 0){
      this.doesReviewsExist = false;
    }
  }

}
