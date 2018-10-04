import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingproductComponent } from './shoppingproduct.component';

describe('ShoppingproductComponent', () => {
  let component: ShoppingproductComponent;
  let fixture: ComponentFixture<ShoppingproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
