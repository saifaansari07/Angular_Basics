import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pipestest } from './pipestest';

describe('Pipestest', () => {
  let component: Pipestest;
  let fixture: ComponentFixture<Pipestest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Pipestest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pipestest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
