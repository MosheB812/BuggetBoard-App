import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBugDiagComponent } from './new-bug-diag.component';

describe('NewBugDiagComponent', () => {
  let component: NewBugDiagComponent;
  let fixture: ComponentFixture<NewBugDiagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBugDiagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBugDiagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
