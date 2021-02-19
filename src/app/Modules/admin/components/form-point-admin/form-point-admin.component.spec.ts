import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPointAdminComponent } from './form-point-admin.component';

describe('FormPointAdminComponent', () => {
  let component: FormPointAdminComponent;
  let fixture: ComponentFixture<FormPointAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPointAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPointAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
