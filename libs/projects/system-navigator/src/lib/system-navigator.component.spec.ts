import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemNavigatorComponent } from './system-navigator.component';

describe('SystemNavigatorComponent', () => {
  let component: SystemNavigatorComponent;
  let fixture: ComponentFixture<SystemNavigatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemNavigatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
