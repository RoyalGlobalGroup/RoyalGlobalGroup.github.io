import { TestBed } from "@angular/core/testing";
import { createReducer } from "@ngrx/store";
import { localStorageSyncReducer } from "../ngrx";

describe("NgRxFactory", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({}).compileComponents();
  });

  it("should create an instance", () => {
    const initialState: unknown = {
      test: null,
    };

    const _testReducer = createReducer(initialState);

    expect(localStorageSyncReducer(_testReducer)).toBeTruthy();
  });
});
