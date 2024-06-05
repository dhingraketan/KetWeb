import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageServicesBlockComponent } from './homepage-services-block.component';

describe('HomepageServicesBlockComponent', () => {
  let component: HomepageServicesBlockComponent;
  let fixture: ComponentFixture<HomepageServicesBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageServicesBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageServicesBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
