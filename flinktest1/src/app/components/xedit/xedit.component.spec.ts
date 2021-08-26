import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XeditComponent } from './xedit.component';

describe('XeditComponent', () => {
  let component: XeditComponent;
  let fixture: ComponentFixture<XeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
