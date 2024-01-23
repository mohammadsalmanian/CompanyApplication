import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejesterProjectComponent } from './rejester-project.component';

describe('RejesterProjectComponent', () => {
  let component: RejesterProjectComponent;
  let fixture: ComponentFixture<RejesterProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RejesterProjectComponent]
    });
    fixture = TestBed.createComponent(RejesterProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
