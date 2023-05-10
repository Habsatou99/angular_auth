import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePingComponent } from './liste-ping.component';

describe('ListePingComponent', () => {
  let component: ListePingComponent;
  let fixture: ComponentFixture<ListePingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListePingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListePingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
