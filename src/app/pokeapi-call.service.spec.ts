import { TestBed } from '@angular/core/testing';

import { PokeapiCallService } from './pokeapi-call.service';

describe('PokeapiCallService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokeapiCallService = TestBed.get(PokeapiCallService);
    expect(service).toBeTruthy();
  });
});
