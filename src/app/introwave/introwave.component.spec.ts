import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrowaveComponent } from './introwave.component';

describe('IntrowaveComponent', () => {
  let component: IntrowaveComponent;
  let fixture: ComponentFixture<IntrowaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntrowaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntrowaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
