import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  mobile: boolean = true;

  constructor() {}
  ngOnInit() {
    if(window.innerWidth > 768) {
      this.mobile = false;
    }
  }

  onResize(event) {
    if(event.target.innerWidth > 768) {
      this.mobile = false;
    } else {
      this.mobile = true;
    }
  }
}
