import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadatroVacinasComponent } from './cadatro-vacinas.component';

describe('CadatroVacinasComponent', () => {
  let component: CadatroVacinasComponent;
  let fixture: ComponentFixture<CadatroVacinasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadatroVacinasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadatroVacinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
