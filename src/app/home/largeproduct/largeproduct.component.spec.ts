import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeproductComponent } from './largeproduct.component';

describe('LargeproductComponent', () => {
  let component: LargeproductComponent;
  let fixture: ComponentFixture<LargeproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LargeproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
