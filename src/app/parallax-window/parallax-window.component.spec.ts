import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallaxWindowComponent } from './parallax-window.component';

describe('ParallaxWindowComponent', () => {
  let component: ParallaxWindowComponent;
  let fixture: ComponentFixture<ParallaxWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParallaxWindowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParallaxWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
