import { Component, OnInit, Input } from '@angular/core';

interface slideInterface  {
    id: string,
    title: string,
    alt: string,
    desc: string
    url: string
}

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() slides: slideInterface[]  = [];
  constructor() { }

  ngOnInit(): void {
  }

slide1: string = '';
slide2: string = '';
slide3: string = '';
slide4: string = '';
slide5: string = '';
indicators: boolean = true; 
currentIndex:number = 0;

getCurrentSlideUrl(): String {
  return `url('${this.slides[this.currentIndex].url})`
}

goToNext(): void {
  const isLastSlide = this.currentIndex === this.slides.length - 1;
  const newIndex = isLastSlide ? 0 : this.currentIndex + 1;
  this.currentIndex = newIndex;
}

gottoPrevious(): void {
  const isFirstSlide = this.currentIndex === 0;
  const newIndex = isFirstSlide ? this.slides.length - 1 : this.currentIndex - 1;
}
goToSlide(slideNum: number): void {
 this. currentIndex = slideNum;
}


}
