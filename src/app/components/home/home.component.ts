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
     
      title: "Miro",
      alt: "Miro Apartments",
      desc: "Recreation of Miro Apartments site in 2016",
      url: '../../../assets/img/miro_ss.png',
    },
    {
     
      title: "Pero Site",
      alt: "Pero Site Project",
      desc: "Recreation of a site with a twist",
      url: '../../../assets/img/peropen.jpg',
    },
    {
     
      title: "Elias",
      alt: "Elias Site",
      desc: "Creation of a site in 2016",
      url: '../../../assets/img/elias_ss.png',
    },
    {
     
      title: "Kudler Fine Foods",
      alt: "KFF Project",
      desc: "Recreaton of KFF site",
      url: '../../../assets/img/KFF_ss.png',
    }
  ]  
  constructor() { }

  ngOnInit(): void {
  }

}
