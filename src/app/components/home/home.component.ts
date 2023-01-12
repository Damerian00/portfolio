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
      title: "Star Wars Character Generator",
      alt: "SW Chargen",
      desc: "Generates and maintins a character based on the rules of the game.",
      url: '../../../assets/img/swsaga_ss.jpg',
      pos: [1,0,0,0,0],
      link: 'https://sw-saga-character-gen.web.app/'
    },
    {
      id: "slide2",
      title: "Battle Masters",
      alt: "Battle Masters",
      desc: "Turn based game created mostly with JS",
      url: '../../../assets/img/bm_ss.jpg',
      pos: [0,1,0,0,0],
      link: 'https://damerian00.github.io/BattleMasters/'
    },
    {
      id: "slide3",
      title: "Miro",
      alt: "Miro Apartments",
      desc: "Recreation of Miro Apartments site from 2016",
      url: '../../../assets/img/miro_ss.png',
      pos: [0,0,1,0,0],
      link: 'https://damerian00.github.io/miroMocksite/'
    },
    {
      id: "slide4",
      title: "Quiz Bowl",
      alt: "Quiz Bowl",
      desc: "Trivia game created with js and html",
      url: '../../../assets/img/quiz_ss.jpg',
      pos: [0,0,0,1,0],
      link: 'https://damerian00.github.io/QuizBowl/'
    },
    {
      id: "slide5",
      title: 'Password Generator',
      alt: "Pass Gen",
      desc: "Creates a random Password",
      url: '../../../assets/img/passGen_ss.jpg',
      pos: [0,0,0,0,1],
      link: 'https://damerian00.github.io/passwordGen/'
    }
  ]  
  constructor() { }

  ngOnInit(): void {
  }
  
  scrollTo(element: any): void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
