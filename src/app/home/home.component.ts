import { Component, ViewChild } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // @ViewChild('nav') slider: NgImageSliderComponent;
  imageObject: Array<object> = [{
    image: 'https://drplus24h.com/wp-content/uploads/2022/09/4_20220913_134250_0003-_1_.webp' // Youtube url
    ,thumbImage: 'https://drplus24h.com/wp-content/uploads/2022/09/4_20220913_134250_0003-_1_.webp' // Youtube url
    ,alt: 'g'
  },
  {
    video: 'assets/video/movie.mp4', // MP4 Video url
  },
  {
    video: 'assets/video/movie2.mp4',
    posterImage: 'assets/img/slider/2_min.jpeg', //Optional: You can use this key if you want to show video poster image in slider
    title: 'Image title'
  },
  {
    image: 'assets/img/slider/1.jpg',
    thumbImage: 'assets/img/slider/1_min.jpeg',
    alt: 'Image alt'
  }
  ];

  prevImageClick() {
    // this.slider.prev();
  }

  nextImageClick() {
    // this.slider.next();
  }
}
