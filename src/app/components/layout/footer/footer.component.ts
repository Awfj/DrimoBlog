import { Component, OnInit } from '@angular/core';
import { faHeart, faCopyright } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare, faTwitterSquare, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faHeart = faHeart;
  faCopyright = faCopyright;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faFacebookSquare = faFacebookSquare;
  faTwitterSquare = faTwitterSquare;
  faYoutubeSquare = faYoutubeSquare;

  constructor() { }

  ngOnInit() {
  }

}
