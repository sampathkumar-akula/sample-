import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VismisComponent } from './vismis.component';

describe('VismisComponent', () => {
  let component: VismisComponent;
  let fixture: ComponentFixture<VismisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VismisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VismisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
