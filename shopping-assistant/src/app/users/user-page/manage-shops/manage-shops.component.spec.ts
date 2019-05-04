import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageShopsComponent } from './manage-shops.component';

describe('ManageShopsComponent', () => {
  let component: ManageShopsComponent;
  let fixture: ComponentFixture<ManageShopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageShopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageShopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
