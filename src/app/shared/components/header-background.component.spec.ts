import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBackgroundComponent } from './header-background.component';

describe('HeaderBackgroundComponent', () => {
  let component: HeaderBackgroundComponent;
  let fixture: ComponentFixture<HeaderBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
