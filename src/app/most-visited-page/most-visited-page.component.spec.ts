import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostVisitedPageComponent } from './most-visited-page.component';

describe('MostVisitedPageComponent', () => {
  let component: MostVisitedPageComponent;
  let fixture: ComponentFixture<MostVisitedPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostVisitedPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostVisitedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
