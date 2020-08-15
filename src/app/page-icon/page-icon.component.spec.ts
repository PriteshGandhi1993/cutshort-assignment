import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageIconComponent } from './page-icon.component';

describe('PageIconComponent', () => {
  let component: PageIconComponent;
  let fixture: ComponentFixture<PageIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
