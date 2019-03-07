import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidOrderListComponent } from './paid-order-list.component';

describe('PaidOrderListComponent', () => {
  let component: PaidOrderListComponent;
  let fixture: ComponentFixture<PaidOrderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaidOrderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
