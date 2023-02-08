import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderCarrouselComponent } from './slider-carrousel.component';

describe('SliderCarrouselComponent', () => {
  let component: SliderCarrouselComponent;
  let fixture: ComponentFixture<SliderCarrouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderCarrouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
