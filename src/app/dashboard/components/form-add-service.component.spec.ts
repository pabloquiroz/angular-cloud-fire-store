import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddServiceComponent } from './form-add-service.component';

describe('FormAddServiceComponent', () => {
  let component: FormAddServiceComponent;
  let fixture: ComponentFixture<FormAddServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAddServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
