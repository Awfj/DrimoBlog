import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { Location } from "@angular/common";
import { Router, NavigationExtras } from "@angular/router";
import { AuthService } from "../../../auth/auth.service";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"]
})
export class SignInComponent implements OnInit {
  faHeart = faHeart;

  signInForm: FormGroup;
  message: string;

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.signInForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  get username() {
    return this.signInForm.get("username");
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit() {}
  
  login() {
    this.authService.login().subscribe(() => {
      if (this.authService.isLoggedIn) {
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/home';
        let navigationExtras: NavigationExtras = {
          queryParamsHandling: 'preserve',
          preserveFragment: true
        };
        this.router.navigate([redirect], navigationExtras);
      }
    });
  }
}
