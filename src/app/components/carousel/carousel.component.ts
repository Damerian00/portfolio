import { Component, OnInit, Input } from '@angular/core';

interface slideInterface  {
    id: string,
    title: string,
    alt: string,
    desc: string
    url: string,
    pos: Array<any>
}

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() slides: Array <any>  = [];
  constructor() { }

  ngOnInit(): void {
  }

slidePos: Array<any> = [0,1,2,3,4,5]
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

 this.currentIndex = slideNum;
}
rotateSlides(slide : string): void {
  const index = this.slides.findIndex((el:any)=> el.id === slide);
  let tempPos = this.slides[this.currentIndex].pos;
  this.slides[this.currentIndex].pos = this.slides[index].pos;
  this.slides[index].pos = tempPos;
  this.currentIndex = index;
 
}

}
