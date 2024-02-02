import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ISessionResponse } from "./interfaces/auth.responses";
import { Observable, map } from "rxjs";
import { IuserSignin, IuserSignup } from "./interfaces/auth.interfaces";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthApi {
  private BASE_URL: string;

  constructor(private http: HttpClient) {
    this.BASE_URL = environment.API_URL;
  }

  signUp(user: IuserSignup): Observable<string> {
    return this.http
      .post<ISessionResponse>(`${this.BASE_URL}/api/auth/register`, user)
      .pipe(map((response) => response.token));
  }

  signIn(user: IuserSignin): Observable<string> {
    return this.http
      .post<ISessionResponse>(`${this.BASE_URL}/api/auth/login`, user)
      .pipe(map((response) => response.token));
  }
}
