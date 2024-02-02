import {
  HttpTestingController,
  HttpClientTestingModule,
} from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";

import { AuthApi } from "../auth.api";
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ISessionResponse } from "../interfaces/auth.responses";
import { IuserSignin, IuserSignup } from "../interfaces/auth.interfaces";
import { environment } from "src/environments/environment";

describe("AuthApi", () => {
  let service: AuthApi;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });
  });

  beforeEach(() => {
    service = TestBed.inject(AuthApi);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("Simulated signIn", () => {
    const mockResponse: ISessionResponse = {
      token: "53252523235325235235",
    };

    const user: IuserSignin = {
      email: "test@test.com",
      password: "password123",
    };

    service.signIn(user).subscribe((response) => {
      expect(response).toEqual(mockResponse.token);
    });

    const req = httpMock.expectOne(`${environment.API_URL}/api/auth/login`);
    expect(req.request.method).toBe("POST");
    expect(req.request.responseType).toEqual("json");
    expect(req.cancelled).toBeFalsy();

    req.flush(mockResponse);
  });

  it("Simulated signUp", () => {
    const mockResponse: ISessionResponse = {
      token: "53252523235325235235",
    };

    const user: IuserSignup = {
      email: "test@test.com",
      password: "password123",
      name: "Test",
      phone: "+112253345",
    };

    service.signUp(user).subscribe((response) => {
      expect(response).toEqual(mockResponse.token);
    });

    const req = httpMock.expectOne(`${environment.API_URL}/api/auth/register`);
    expect(req.request.method).toBe("POST");
    expect(req.request.responseType).toEqual("json");
    expect(req.cancelled).toBeFalsy();

    req.flush(mockResponse);
  });
});
