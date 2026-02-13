import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Searchproduct } from './searchproduct';

describe('Searchproduct', () => {
  let component: Searchproduct;
  let fixture: ComponentFixture<Searchproduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Searchproduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Searchproduct);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
