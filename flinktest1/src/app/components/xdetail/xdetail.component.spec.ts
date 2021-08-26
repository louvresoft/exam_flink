import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XdetailComponent } from './xdetail.component';

describe('XdetailComponent', () => {
  let component: XdetailComponent;
  let fixture: ComponentFixture<XdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
