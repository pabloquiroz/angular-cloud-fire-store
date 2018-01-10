import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSettingComponent } from './form-setting.component';

describe('FormSettingComponent', () => {
  let component: FormSettingComponent;
  let fixture: ComponentFixture<FormSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
