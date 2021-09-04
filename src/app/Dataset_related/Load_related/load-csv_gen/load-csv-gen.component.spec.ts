import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadCSVGenComponent } from './load-csv-gen.component';

describe('LoadCSVComponent', () => {
  let component: LoadCSVGenComponent;
  let fixture: ComponentFixture<LoadCSVGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadCSVGenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadCSVGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
