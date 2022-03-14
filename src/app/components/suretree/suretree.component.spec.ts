import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuretreeComponent } from './suretree.component';

describe('SuretreeComponent', () => {
  let component: SuretreeComponent;
  let fixture: ComponentFixture<SuretreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuretreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuretreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
