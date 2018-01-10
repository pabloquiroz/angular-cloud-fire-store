import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionServiceComponent } from './section-service.component';

describe('SectionServiceComponent', () => {
  let component: SectionServiceComponent;
  let fixture: ComponentFixture<SectionServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
