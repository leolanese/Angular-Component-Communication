import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildObservableComponent } from './child-observable.component';

describe('ChildObservableComponent', () => {
  let component: ChildObservableComponent;
  let fixture: ComponentFixture<ChildObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildObservableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
