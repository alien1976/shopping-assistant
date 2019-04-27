import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopsChoiceComponent } from './shops-choice.component';

describe('ShopsChoiceComponent', () => {
  let component: ShopsChoiceComponent;
  let fixture: ComponentFixture<ShopsChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopsChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopsChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
