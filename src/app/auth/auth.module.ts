import { NgModule } from "@angular/core";

import { AuthRoutingModule } from "./auth-routing.module";
import { CoreModule } from "../core";
import { LoginComponent } from "./login/login.component";
import { NoAuthGuard } from "./no-auth-guard.service";
import { SharedModule } from "../shared";

//TODO: Can I remove CoreModule ?

@NgModule({
  imports: [SharedModule, CoreModule, AuthRoutingModule],
  declarations: [LoginComponent],
  providers: [NoAuthGuard]
})
export class AuthModule {}
