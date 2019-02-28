import { Component, OnInit, HostListener } from "@angular/core";
// import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  faBars = faBars;
  
  mobile: boolean;
  desktop: boolean;
  isMenuOpen: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.checkWindowInnerWidth();
  }

  checkWindowInnerWidth():void {
    this.checkInnerWidth();
  }

  onResize():void {
    this.checkInnerWidth();
  }

  // onResize(event):void {
  //   if(event.target.innerWidth > 768) {
  //     this.mobile = false;
  //     this.desktop = true;
  //   } else {
  //     this.mobile = true;
  //     this.desktop = false;
  //   }
  // }

  checkInnerWidth() {
    if(window.innerWidth > 768) {
      this.mobile = false;
      this.desktop = true;
    } else {
      this.mobile = true;
      this.desktop = false;
    }
  }

  toggleMenu():void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout() {
    this.authService.logout();
    if (this.router.isActive("/profile", true)) {
      this.router.navigate(["/home"]);
    }
  }
}
