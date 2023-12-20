import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadoresNuevoComponent } from './contadores-nuevo.component';

describe('ContadoresNuevoComponent', () => {
  let component: ContadoresNuevoComponent;
  let fixture: ComponentFixture<ContadoresNuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContadoresNuevoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContadoresNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
