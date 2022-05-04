import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVacinaComponent } from './add-vacina.component';

describe('AddVacinaComponent', () => {
  let component: AddVacinaComponent;
  let fixture: ComponentFixture<AddVacinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVacinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVacinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
