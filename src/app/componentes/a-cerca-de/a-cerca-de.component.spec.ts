import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ACercaDeComponent } from './a-cerca-de.component';

describe('ACercaDeComponent', () => {
  let component: ACercaDeComponent;
  let fixture: ComponentFixture<ACercaDeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ACercaDeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ACercaDeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
