import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SliderComponent implements OnInit {

  constructor() { }
  @Input() data:any

  imagePath:string = "https://image.tmdb.org/t/p/w154";

  ngOnInit(): void {

  }

  

  config: SwiperOptions = {
    slidesPerView: 'auto',
    spaceBetween: 5,
    grabCursor: true,
  };  

}
