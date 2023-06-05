import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSectionComponent } from './new-section.component';

describe('NewSectionComponent', () => {
  let component: NewSectionComponent;
  let fixture: ComponentFixture<NewSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewSectionComponent]
    });
    fixture = TestBed.createComponent(NewSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
