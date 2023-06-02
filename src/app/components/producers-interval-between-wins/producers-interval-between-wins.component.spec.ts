import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducersIntervalBetweenWinsComponent } from './producers-interval-between-wins.component';
import { MovieService } from 'src/app/services/movie.service';
import { HttpClientModule } from '@angular/common/http';

describe('ProducersIntervalBetweenWinsComponent', () => {
  let component: ProducersIntervalBetweenWinsComponent;
  let fixture: ComponentFixture<ProducersIntervalBetweenWinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ProducersIntervalBetweenWinsComponent ], providers: [ MovieService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProducersIntervalBetweenWinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('method getProducersIntervalWin should be called', () => {
    spyOn(component, 'getProducersIntervalWin');
    component.ngOnInit()
    expect(component.getProducersIntervalWin).toHaveBeenCalled();
  });
});
