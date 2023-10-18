import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayEquipmentComponent } from './display-equipment.component';

describe('DisplayEquipmentComponent', () => {
  let component: DisplayEquipmentComponent;
  let fixture: ComponentFixture<DisplayEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayEquipmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
