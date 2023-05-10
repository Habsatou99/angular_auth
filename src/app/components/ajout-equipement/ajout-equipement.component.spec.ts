import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutEquipementComponent } from './ajout-equipement.component';

describe('AjoutEquipementComponent', () => {
  let component: AjoutEquipementComponent;
  let fixture: ComponentFixture<AjoutEquipementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutEquipementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutEquipementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
