import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSearchBarComponent } from './product-search-bar.component';

describe('ProductSearchBarComponent', () => {
  let component: ProductSearchBarComponent;
  let fixture: ComponentFixture<ProductSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
