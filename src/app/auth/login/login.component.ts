import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

import { UserService } from "../../core";

@Component({
  selector: "app-login-page",
  templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  private invalidLogin: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      username: ["", Validators.compose([Validators.required])],
      password: ["", Validators.compose([Validators.required])]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const returnUrl = this.route.snapshot.queryParamMap.get("returnUrl") || "/";

      this.userService.attemptLogin(this.form.value).subscribe(
        data => this.router.navigate([returnUrl]),
        err => {
          this.invalidLogin = true;
        }
      );
    }
  }
}
