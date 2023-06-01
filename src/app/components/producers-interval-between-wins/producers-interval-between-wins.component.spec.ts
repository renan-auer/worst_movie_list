import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducersIntervalBetweenWinsComponent } from './producers-interval-between-wins.component';

describe('ProducersIntervalBetweenWinsComponent', () => {
  let component: ProducersIntervalBetweenWinsComponent;
  let fixture: ComponentFixture<ProducersIntervalBetweenWinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducersIntervalBetweenWinsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProducersIntervalBetweenWinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
