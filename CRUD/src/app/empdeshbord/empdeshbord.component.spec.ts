import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpdeshbordComponent } from './empdeshbord.component';

describe('EmpdeshbordComponent', () => {
  let component: EmpdeshbordComponent;
  let fixture: ComponentFixture<EmpdeshbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpdeshbordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpdeshbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
