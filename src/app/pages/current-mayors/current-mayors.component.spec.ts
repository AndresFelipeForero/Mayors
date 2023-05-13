import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentMayorsComponent } from './current-mayors.component';

describe('CurrentMayorsComponent', () => {
  let component: CurrentMayorsComponent;
  let fixture: ComponentFixture<CurrentMayorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentMayorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentMayorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
