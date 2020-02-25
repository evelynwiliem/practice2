import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooComponent } from './too.component';

describe('TooComponent', () => {
  let component: TooComponent;
  let fixture: ComponentFixture<TooComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
