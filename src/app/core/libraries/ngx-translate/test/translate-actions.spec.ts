import { HttpClient } from "@angular/common/http";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { HttpLoaderFactory } from "../ngx-translate";

describe("TranslateActions", () => {
  let http: HttpClient;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    http = TestBed.inject(HttpClient);
  });

  it("should create an instance", () => {
    expect(HttpLoaderFactory(http)).toBeTruthy();
  });
});
