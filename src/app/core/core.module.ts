import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { HttpTokenInterceptor } from "./interceptors/http.token.interceptor";
import { JwtService, ProjectService, SweetAlertService, UserService } from "./services";
import { NgModule } from "@angular/core";

@NgModule({
  imports: [CommonModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    JwtService,
    ProjectService,
    SweetAlertService,
    UserService
  ],
  declarations: []
})
export class CoreModule {}
