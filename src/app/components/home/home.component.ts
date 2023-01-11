import { Component, OnInit } from '@angular/core';
import { faNodeJs, faLinkedin, faSquareGithub, faSquareJs, faHtml5, faCss3, faAngular, faBootstrap, faReact } from '@fortawesome/free-brands-svg-icons';
import {faPhotoFilm,faVideo} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faNode = faNodeJs;
  faLinkedin = faLinkedin;
  faGithub = faSquareGithub;
  faJs = faSquareJs;
  faHtml = faHtml5;
  faCss = faCss3;
  faAngular = faAngular;
  faBootstrap = faBootstrap;
  faReact = faReact;
  faPs = faPhotoFilm;
  faVideo = faVideo;

  slides: Array<any> = [
    {
      id: "slide1",
      title: "Miro",
      alt: "Miro Apartments",
      desc: "Recreation of Miro Apartments site in 2016",
      url: '../../../assets/img/miro_ss.png',
      pos: [1,0,0,0,0]
    },
    {
      id: "slide2",
      title: "Pero Site",
      alt: "Pero Site Project",
      desc: "Recreation of a site with a twist",
      url: '../../../assets/img/peropen.jpg',
      pos: [0,1,0,0,0]
    },
    {
      id: "slide3",
      title: "Elias",
      alt: "Elias Site",
      desc: "Creation of a site in 2016",
      url: '../../../assets/img/elias_ss.png',
      pos: [0,0,1,0,0]
    },
    {
      id: "slide4",
      title: "Kudler Fine Foods",
      alt: "KFF Project",
      desc: "Recreaton of KFF site",
      url: '../../../assets/img/KFF_ss.png',
      pos: [0,0,0,1,0]
    },
    {
      id: "slide5",
      title: 'Match',
      alt: "Match",
      desc: "Recreation of a site",
      url: '../../../assets/img/match_ss.png',
      pos: [0,0,0,0,1]
    }
  ]  
  constructor() { }

  ngOnInit(): void {
  }
  
  scrollTo(element: any): void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
