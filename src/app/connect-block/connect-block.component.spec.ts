import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectBlockComponent } from './connect-block.component';

describe('ConnectBlockComponent', () => {
  let component: ConnectBlockComponent;
  let fixture: ComponentFixture<ConnectBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnectBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
