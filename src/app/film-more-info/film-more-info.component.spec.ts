import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmMoreInfoComponent } from './film-more-info.component';

describe('FilmMoreInfoComponent', () => {
  let component: FilmMoreInfoComponent;
  let fixture: ComponentFixture<FilmMoreInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmMoreInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmMoreInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
