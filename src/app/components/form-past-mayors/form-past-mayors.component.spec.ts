import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPastMayorsComponent } from './form-past-mayors.component';

describe('FormPastMayorsComponent', () => {
  let component: FormPastMayorsComponent;
  let fixture: ComponentFixture<FormPastMayorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPastMayorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPastMayorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
