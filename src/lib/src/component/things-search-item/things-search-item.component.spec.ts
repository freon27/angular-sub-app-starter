import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingsSearchItemComponent } from './things-search-item.component';

describe('ThingsSearchItemComponent', () => {
  let component: ThingsSearchItemComponent;
  let fixture: ComponentFixture<ThingsSearchItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThingsSearchItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingsSearchItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
