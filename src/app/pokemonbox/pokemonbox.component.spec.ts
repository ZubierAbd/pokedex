import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonboxComponent } from './pokemonbox.component';

describe('PokemonboxComponent', () => {
  let component: PokemonboxComponent;
  let fixture: ComponentFixture<PokemonboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
