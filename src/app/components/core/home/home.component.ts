import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  doesDataExist = false;
  moviesPopular = ['MOVIE']
  showsPopular = ['TV SHOW']
  animation = ['ANIMATION']
  comedy = ['COMEDY']
  constructor(private dataServie: DataService) { }

  ngOnInit(): void {
    this.popularMovies();
    this.popularTVShows();
    this.animatedShows();
    this.comedyMovies();
    this.doesDataExist = true;
  }

  popularMovies() {
    this.dataServie.getPopularMovies().subscribe(data => {
      this.moviesPopular.push(data)
    })
  }

  popularTVShows(){
    this.dataServie.getPopularTvShows().subscribe(data => {
      this.showsPopular.push(data)
    })
  }

  animatedShows(){
    this.dataServie.getAnimatedShows().subscribe(data => {
      this.animation.push(data)
    })
  }

  comedyMovies(){
    this.dataServie.getComedyMovies().subscribe(data => {
      this.comedy.push(data)
    })
  }
}
