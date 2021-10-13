import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, AfterViewInit{
  imagePath:string = "https://image.tmdb.org/t/p/w154";
  isOpen = false;
  doesDataExist = false;
  doesDataExist2 = false;
  movies:any = [];
  isSelected:boolean = true;
  isSelected2:boolean = false;
  isSelected3:boolean = false;

  @ViewChildren('option')
  option:any;
  oldGenreOption:any;

  @ViewChildren('option2')
  option2:any;
  oldYearOption:any;
  
  
  constructor(private dataServie:DataService) { }

  // Default values
  sortBy:string = 'popularity.desc';
  page:any = 1;
  genre:any = null;
  year: any = null;

  ngOnInit(): void {
    this.getMovies()

  }

  ngAfterViewInit(): void{
    this.oldGenreOption = this.option._results[0].nativeElement;
    this.oldGenreOption.classList.add('active');

    this.oldYearOption = this.option2._results[0].nativeElement;
    this.oldYearOption.classList.add('active')
  }




  openFilter(){
    this.isOpen = !this.isOpen;
  }


  getMovies(){
    this.dataServie.getFilteredMovies(this.sortBy,this.page,this.genre,this.year).subscribe(data =>{
      this.movies = data.results;
      this.doesDataExist = true;
    })
  }

  nextPageMovies(){
    this.dataServie.getFilteredMovies(this.sortBy,++this.page,this.genre,this.year).subscribe(data =>{
      this.movies.push(...data.results)
      this.doesDataExist2 = false;
    })
  }

  sortMovies(event:any){
    this.doesDataExist = false;
    let userOption = event.target.dataset.value;
    this.sortBy = userOption;
    switch(event.target.textContent){
      case 'Popular':
        this.isSelected = true;
        this.isSelected2 = false;
        this.isSelected3 = false;
      break;
      case 'Top rated':
        this.isSelected = false;
        this.isSelected2 = true;
        this.isSelected3 = false;
      break;
      case 'Revenue':
        this.isSelected = false;
        this.isSelected2 = false;
        this.isSelected3 = true;
      break;

    }
    this.getMovies();
    this.openFilter();
  }


  filterGenres(event:any){
    this.doesDataExist = false;
    let userOption = event.target.dataset.value;
    // adding class to the new selected element and removing from the old one
    let selected = event.target;
    selected.classList.add('active');
    this.oldGenreOption.classList.remove('active');
    this.oldGenreOption = selected;

    this.genre = userOption;
    this.getMovies();
    this.openFilter();
  }


  filtrerYear(event:any){
    this.doesDataExist = false;
    let userOption = event.target.dataset.value;
    // adding class to the new selected element and removing from the old one
    let selected = event.target;
    selected.classList.add('active');
    this.oldYearOption.classList.remove('active');
    this.oldYearOption = selected;

    this.year = userOption;
    this.getMovies();
    this.openFilter();
  }


  loadMore(){
    this.doesDataExist2 = true;
    setTimeout(() => {
      this.nextPageMovies();
    }, 1500);
  }


  sortSelect(){
    console.log(this)
  }


  
}
