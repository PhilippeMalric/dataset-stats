import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatDivComponent } from './lime-div.component';

describe('StreamDivComponent', () => {
  let component: StatDivComponent;
  let fixture: ComponentFixture<StatDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatDivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
