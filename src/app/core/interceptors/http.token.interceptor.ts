import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { JwtService } from "../services";

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  constructor(private jwtService: JwtService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headersConfig = {
      "Content-Type": "application/json",
      Accept: "application/json"
    };

    const token = this.jwtService.getToken();
    if (token) {
      headersConfig["Authorization"] = `Bearer ${token}`;
    }

    return next.handle(request.clone({ setHeaders: headersConfig }));
  }
}
