import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentObservableComponent } from './parent-observable.component';

describe('ParentObservableComponent', () => {
  let component: ParentObservableComponent;
  let fixture: ComponentFixture<ParentObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentObservableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
