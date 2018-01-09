import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormServiceDescriptionComponent } from './form-service-description.component';

describe('FormServiceComponent', () => {
  let component: FormServiceDescriptionComponent;
  let fixture: ComponentFixture<FormServiceDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormServiceDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormServiceDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
