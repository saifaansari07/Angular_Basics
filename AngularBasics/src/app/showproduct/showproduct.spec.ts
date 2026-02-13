import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Showproduct } from './showproduct';

describe('Showproduct', () => {
  let component: Showproduct;
  let fixture: ComponentFixture<Showproduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Showproduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Showproduct);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
