import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UidialogComponent } from './uidialog.component';

describe('UidialogComponent', () => {
  let component: UidialogComponent;
  let fixture: ComponentFixture<UidialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UidialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UidialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
