import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallproductComponent } from './smallproduct.component';

describe('SmallproductComponent', () => {
  let component: SmallproductComponent;
  let fixture: ComponentFixture<SmallproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
