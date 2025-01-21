import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentSignalComponent } from './parent-signal.component';

describe('ParentSignalComponent', () => {
  let component: ParentSignalComponent;
  let fixture: ComponentFixture<ParentSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentSignalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
