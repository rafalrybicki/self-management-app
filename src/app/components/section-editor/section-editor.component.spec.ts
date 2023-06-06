import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionEditorComponent } from './section-editor.component';

describe('SectionEditorComponent', () => {
  let component: SectionEditorComponent;
  let fixture: ComponentFixture<SectionEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionEditorComponent]
    });
    fixture = TestBed.createComponent(SectionEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
