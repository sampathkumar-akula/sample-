import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhillosophyComponent } from './phillosophy.component';

describe('PhillosophyComponent', () => {
  let component: PhillosophyComponent;
  let fixture: ComponentFixture<PhillosophyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhillosophyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhillosophyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
