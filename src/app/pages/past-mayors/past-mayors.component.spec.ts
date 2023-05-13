import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastMayorsComponent } from './past-mayors.component';

describe('PastMayorsComponent', () => {
  let component: PastMayorsComponent;
  let fixture: ComponentFixture<PastMayorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastMayorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastMayorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
