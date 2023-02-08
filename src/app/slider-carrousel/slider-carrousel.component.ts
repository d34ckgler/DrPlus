import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-carrousel',
  templateUrl: './slider-carrousel.component.html',
  styleUrls: ['./slider-carrousel.component.css']
})
export class SliderCarrouselComponent implements OnInit {
  public slideIndex = 1;

  ngOnInit(): void {
    this.showSlides(this.slideIndex);
  }


  public plusSlides(n: any) {
    console.log('hola');
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n: any) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n: any) {
    let i;
    let slides: any = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { this.slideIndex = 1 }
    if (n < 1) { this.slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex - 1].style.display = "block";
    dots[this.slideIndex - 1].className += " active";
  }

}
