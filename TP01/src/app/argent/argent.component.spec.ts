import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArgentComponent } from './argent.component';

describe('ArgentComponent', () => {
  let component: ArgentComponent;
  let fixture: ComponentFixture<ArgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArgentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
