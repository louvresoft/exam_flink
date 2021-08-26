import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XlistComponent } from './xlist.component';

describe('XlistComponent', () => {
  let component: XlistComponent;
  let fixture: ComponentFixture<XlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
