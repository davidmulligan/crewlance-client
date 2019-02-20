import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject, ReplaySubject } from "rxjs";

import { JwtService } from "./jwt.service";
import { map, distinctUntilChanged } from "rxjs/operators";
import { User } from "../models/user.model";
import { environment } from "../../../environments/environment";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { HttpParams } from "@angular/common/http";

@Injectable()
export class UserService {
  attemptLogin(credentials: object): Observable<User> {
    return this.post("/login", credentials).pipe(
      map(data => {
        this.setAuth(data.user);
        return data;
      })
    );
  }

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  private currentUserSubject = new BehaviorSubject<User>({} as User);

  public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(private http: HttpClient, private jwtService: JwtService) {}

  getCurrentUser(): User {
    return this.currentUserSubject.value;
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http
      .get(`${environment.api_url}${path}`, { params })
      .pipe(catchError(this.formatErrors));
  }

  // Verify JWT in localstorage with server & load user's info, this runs once on application startup.
  populate() {
    if (this.jwtService.getToken()) {
      this.get("/user").subscribe(data => this.setAuth(data.user), err => this.purgeAuth());
    } else {
      this.purgeAuth();
    }
  }

  setAuth(user: User) {
    this.jwtService.saveToken(user.token);
    this.currentUserSubject.next(user);
    this.isAuthenticatedSubject.next(true);
  }

  purgeAuth() {
    this.jwtService.destroyToken();
    this.currentUserSubject.next({} as User);
    this.isAuthenticatedSubject.next(false);
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http
      .post(`${environment.api_url}${path}`, JSON.stringify(body))
      .pipe(catchError(this.formatErrors));
  }

  private formatErrors(error: any) {
    return throwError(error.error);
  }

  attemptAuth(type, credentials): Observable<User> {
    const route = type === "login" ? "/login" : "";
    return this.post(route, {
      username: credentials["email"],
      password: credentials["password"]
    }).pipe(
      map(data => {
        this.setAuth(data.user);
        return data;
      })
    );
  }

  //   // Update the user on the server (email, pass, etc)
  //   update(user): Observable<User> {
  //     return this.apiService.put("/user", { user }).pipe(
  //       map(data => {
  //         // Update the currentUser observable
  //         this.currentUserSubject.next(data.user);
  //         return data.user;
  //       })
  //     );
  //   }
}
