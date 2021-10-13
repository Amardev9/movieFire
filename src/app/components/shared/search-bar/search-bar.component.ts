import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  encapsulation: ViewEncapsulation.None 
})
export class SearchBarComponent implements OnInit {

  searched:any = [];
  doesDataExist:boolean = false;
  isDataLoading = false;
  imagePath:string = "https://image.tmdb.org/t/p/w92";

  constructor( private dataService:DataService ) { }

  ngOnInit(): void {
  }


  getUserInput(userInput:any){
    if(userInput != ''){
      this.getSerached(userInput);
    }else{
      this.doesDataExist = false;
    }
  }

  getSerached(userInput:any){
    this.dataService.getSearched(userInput).subscribe( data =>{
      this.searched = data;
      this.doesDataExist = true;
    })
  }
}
