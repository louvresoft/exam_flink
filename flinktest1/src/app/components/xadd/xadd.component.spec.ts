import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XaddComponent } from './xadd.component';

describe('XaddComponent', () => {
  let component: XaddComponent;
  let fixture: ComponentFixture<XaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
